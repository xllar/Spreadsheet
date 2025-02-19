'use client';

import { useState } from "react";
const useSpreadsheetManager = () => {
  const [spreadsheets, setSpreadsheets] = useState([
    {
      id: 1,
      name: "Companies",
      headers: ["Description", "Category", "LinkedIn", "Twitter", "Assigned To", "Unsubscribed"],
      data: [
        { id: 1, description: "Description 1", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 1", twitter: "Twitter 1", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
        { id: 2, description: "Description 2", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 2", twitter: "Twitter 2", assignedTo: "Olusegun Odunfuwa", unsubscribed: true },
      ],
    },
  ]);
  const [activeSpreadsheetId, setActiveSpreadsheetId] = useState(spreadsheets[0]?.id || null);

  const activeSpreadsheet = spreadsheets.find((s) => s.id === activeSpreadsheetId) || null;

  const createSpreadsheet = () => {
    // Define the default headers (5 columns)
    const defaultHeaders = ["Column 1", "Column 2", "Column 3", "Column 4", "Column 5"];

    // Define the default rows (5 rows with empty data)
    const defaultRows = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1, // Unique ID for each row
      "Column 1": "",
      "Column 2": "",
      "Column 3": "",
      "Column 4": "",
      "Column 5": "",
    }));

    // Create a new spreadsheet with the default structure
    const newSpreadsheet = {
      id: spreadsheets.length ? Math.max(...spreadsheets.map(s => s.id)) + 1 : 1,
      name: "Untitled",
      headers: defaultHeaders, // 5 predefined columns
      data: defaultRows, // 5 predefined rows
    };

    setSpreadsheets([...spreadsheets, newSpreadsheet]);
    setActiveSpreadsheetId(newSpreadsheet.id);
  };

  const deleteSpreadsheet = (id) => {
    const updatedSpreadsheets = spreadsheets.filter((s) => s.id !== id);
    setSpreadsheets(updatedSpreadsheets);
    setActiveSpreadsheetId(updatedSpreadsheets.length > 0 ? updatedSpreadsheets[0].id : null);
  };

  const switchSpreadsheet = (id) => {
    if (spreadsheets.some(s => s.id === id)) {
      setActiveSpreadsheetId(id);
    }
  };

  const renameSpreadsheet = (id, newName) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === id ? { ...s, name: newName } : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const addHeader = (spreadsheetId, headerName) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? { ...s, headers: [...s.headers, headerName] }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const renameHeader = (spreadsheetId, oldHeaderName, newHeaderName) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? {
            ...s,
            headers: s.headers.map((header) =>
              header === oldHeaderName ? newHeaderName : header
            ),
            data: s.data.map((row) => {
              const newRow = { ...row };
              newRow[newHeaderName] = newRow[oldHeaderName];
              delete newRow[oldHeaderName];
              return newRow;
            }),
          }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const deleteHeader = (spreadsheetId, headerName) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? {
            ...s,
            headers: s.headers.filter((header) => header !== headerName),
            data: s.data.map((row) => {
              const newRow = { ...row };
              delete newRow[headerName];
              return newRow;
            }),
          }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const addRow = (spreadsheetId, rowData) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? { ...s, data: [...s.data, rowData] }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const updateRow = (spreadsheetId, rowId, newData) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? {
            ...s,
            data: s.data.map((row) =>
              row.id === rowId ? { ...row, ...newData } : row
            ),
          }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  const deleteRow = (spreadsheetId, rowId) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? { ...s, data: s.data.filter((row) => row.id !== rowId) }
        : s
    );
    setSpreadsheets(updatedSpreadsheets);
  };

  return {
    spreadsheets,
    activeSpreadsheet,
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

export default useSpreadsheetManager;

