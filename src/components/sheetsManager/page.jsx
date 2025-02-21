'use client';

import { useState, useEffect } from 'react';
import { db, collection, doc, setDoc, deleteDoc, onSnapshot } from '@/app/firebaseConfig';

export default function useSpreadsheetManager () {
  const [spreadsheets, setSpreadsheets] = useState([]);
  const [activeSpreadsheetId, setActiveSpreadsheetId] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true); 

  useEffect(() => {
    let isMounted = true;
    let isSpreadsheetCreated = false;

    const unsubscribe = onSnapshot(collection(db, 'spreadsheets'), (querySnapshot) => {
      const firestoreData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      if (isMounted) {
        setSpreadsheets(firestoreData);

   
        const savedActiveSpreadsheetId = localStorage.getItem('activeSpreadsheetId');
        const isValidId = firestoreData.some(sheet => sheet.id === savedActiveSpreadsheetId);
        setActiveSpreadsheetId(isValidId ? savedActiveSpreadsheetId : firestoreData[0]?.id || null);

       
        if (firestoreData.length === 0 && isInitialLoad && !isSpreadsheetCreated) {
          isSpreadsheetCreated = true;
          createSpreadsheet(true);
          setIsInitialLoad(false); 
        }
      }
    }, (error) => {
      console.error('Error listening to Firestore updates:', error);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [isInitialLoad]); 

  const createSpreadsheet = async (isDefault = false) => {
    const newSpreadsheet = {
      id: String(Date.now()),
      name: isDefault ? 'Untitled' : 'Untitled',
      headers: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
      data: Array.from({ length: 5 }, (_, rowIndex) => ({
        id: rowIndex + 1,
        ...Object.fromEntries(Array.from({ length: 5 }, (_, colIndex) => [`Column ${colIndex + 1}`, '']))
      })),
    };

    try {
      await setDoc(doc(db, 'spreadsheets', newSpreadsheet.id), newSpreadsheet);
      setActiveSpreadsheetId(newSpreadsheet.id);
    } catch (error) {
      console.error('Error saving spreadsheet:', error);
    }
  };

  const deleteSpreadsheet = async (id) => {
    try {
      const index = spreadsheets.findIndex(sheet => sheet.id === id);
      if (index === -1) return;

      await deleteDoc(doc(db, 'spreadsheets', id));

      const updatedSpreadsheets = spreadsheets.filter(sheet => sheet.id !== id);
      setSpreadsheets(updatedSpreadsheets); // Update local state first

      let newActiveId = null;

      if (updatedSpreadsheets.length > 0) {
        if (index > 0) {
          newActiveId = updatedSpreadsheets[index - 1]?.id || updatedSpreadsheets[0].id;
        } else {
          newActiveId = updatedSpreadsheets[0]?.id || null;
        }
      }

      setActiveSpreadsheetId(newActiveId);
      localStorage.setItem('activeSpreadsheetId', newActiveId || "");
    } catch (error) {
      console.error('Error deleting spreadsheet:', error);
    }
  };

  const switchSpreadsheet = (id) => {
    setActiveSpreadsheetId(id);
    localStorage.setItem('activeSpreadsheetId', id);
  };

  const renameSpreadsheet = async (id, newName) => {
    try {
      await setDoc(doc(db, 'spreadsheets', id), { name: newName }, { merge: true });
    } catch (error) {
      console.error('Error renaming spreadsheet:', error);
    }
  };

  const addHeader = async (id, headerName) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedHeaders = [...spreadsheet.headers, headerName];

      await setDoc(doc(db, 'spreadsheets', id), { headers: updatedHeaders }, { merge: true });
    } catch (error) {
      console.error('Error adding header:', error);
    }
  };

  const renameHeader = async (id, oldHeader, newHeader) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedHeaders = spreadsheet.headers.map(h => (h === oldHeader ? newHeader : h));

      await setDoc(doc(db, 'spreadsheets', id), { headers: updatedHeaders }, { merge: true });
    } catch (error) {
      console.error('Error renaming header:', error);
    }
  };

  const deleteHeader = async (id, headerName) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedHeaders = spreadsheet.headers.filter(h => h !== headerName);

      await setDoc(doc(db, 'spreadsheets', id), { headers: updatedHeaders }, { merge: true });
    } catch (error) {
      console.error('Error deleting header:', error);
    }
  };

  const addRow = async (id, rowData) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedData = [...spreadsheet.data, rowData];

      await setDoc(doc(db, 'spreadsheets', id), { data: updatedData }, { merge: true });
    } catch (error) {
      console.error('Error adding row:', error);
    }
  };

  const updateRow = async (id, rowId, newData) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedData = spreadsheet.data.map(row => (row.id === rowId ? { ...row, ...newData } : row));

      await setDoc(doc(db, 'spreadsheets', id), { data: updatedData }, { merge: true });
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  const deleteRow = async (id, rowId) => {
    try {
      const spreadsheet = spreadsheets.find(s => s.id === id);
      const updatedData = spreadsheet.data
        .filter(row => row.id !== rowId)
        .map((row, index) => ({ ...row, id: index + 1 }));

      await setDoc(doc(db, 'spreadsheets', id), { data: updatedData }, { merge: true });
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  return {
    spreadsheets,
    activeSpreadsheet: spreadsheets.find(s => s.id === activeSpreadsheetId) || null,
    createSpreadsheet,
    deleteSpreadsheet,
    switchSpreadsheet,
    renameSpreadsheet,
    addHeader,
    renameHeader,
    deleteHeader,
    addRow,
    updateRow,
    deleteRow,
  };
};

