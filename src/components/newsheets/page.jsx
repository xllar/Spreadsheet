'use client';
import { CheckSquare, Edit, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function NewSheetsTable({ activeSpreadsheet, onAddColumn, onRenameColumn, onDeleteColumn, onAddRow, onUpdateRow, onDeleteRow }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [editableHeader, setEditableHeader] = useState(null); 
  const [newColumnName, setNewColumnName] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [tempHeaderValue, setTempHeaderValue] = useState(""); 

  if (!activeSpreadsheet) {
    return <div className="text-black">No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
  }

  const handleCellClick = (rowIndex, colName, value) => {
    setEditableCell({ row: rowIndex, col: colName });
    setTempValue(value);
  };

  const handleInputChange = (value) => {
    setTempValue(value);
  };

  const handleInputBlur = (rowIndex, colName) => {
    onUpdateRow(activeSpreadsheet.id, activeSpreadsheet.data[rowIndex].id, { [colName]: tempValue });
    setEditableCell({ row: null, col: null });
  };

  const handleAddColumn = () => {
    if (newColumnName.trim()) {
      onAddColumn(activeSpreadsheet.id, newColumnName);
      setNewColumnName("");
    }
  };

  const handleHeaderClick = (headerIndex, headerName) => {
    setEditableHeader(headerIndex);
    setTempHeaderValue(headerName); 
  };

  const handleHeaderChange = (e) => {
    setTempHeaderValue(e.target.value); 
  };

  const handleHeaderBlur = (headerIndex) => {
    if (tempHeaderValue.trim()) {
      onRenameColumn(activeSpreadsheet.id, activeSpreadsheet.headers[headerIndex], tempHeaderValue); 
    }
    setEditableHeader(null); 
  };

  const handleDeleteColumn = (headerName) => {
    if (confirm(`Are you sure you want to delete the column "${headerName}"?`)) {
      onDeleteColumn(activeSpreadsheet.id, headerName);
    }
  };

  const handleAddRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; 
      return row;
    }, { id: activeSpreadsheet.data.length + 1 });
    onAddRow(activeSpreadsheet.id, newRow);
  };

  const handleDeleteRow = (rowId) => {
    if (confirm("Are you sure you want to delete this row?")) {
      onDeleteRow(activeSpreadsheet.id, rowId);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-start overflow-x-auto">
      <div className="w-full overflow-x-auto">
        <table className="w-full rounded-lg min-w-[600px]">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-2 w-20">
                <div className="inline-flex items-center gap-2">
                  <CheckSquare size={15} className="text-gray-600" />
                  <input
                    type="checkbox"
                    className="cursor-pointer appearance-none w-5 h-5 border border-gray-700 rounded-sm checked:bg-black checked:border-black checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center"
                  />
                </div>
              </th>
              {activeSpreadsheet.headers.map((header, index) => (
                <th key={index} className="p-2 border text-black">
                  <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                    {editableHeader === index ? (
                      <input
                        type="text"
                        value={tempHeaderValue ?? ""}    
                        onChange={handleHeaderChange}
                        onBlur={() => handleHeaderBlur(index)}
                        autoFocus
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      <>
                        <span>{header}</span>
                        <button
                          className="text-gray-500 hover:text-blue-500 ml-auto"
                          onClick={() => handleHeaderClick(index, header)}
                        >
                          <Edit size={15} />
                        </button>
                      </>
                    )}
                    <button
                      className="text-gray-500 hover:text-red-500"
                      onClick={() => handleDeleteColumn(header)}
                    >
                      <Trash2 size={10} />
                    </button>
                  </div>
                </th>
              ))}
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {activeSpreadsheet.data.map((row, rowIndex) => (
              <tr key={row.id} className="border">
                <td className="p-2 border text-black">{row.id}</td>
                {activeSpreadsheet.headers.map((header, colIndex) => (
                  <td key={colIndex} className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, header, row[header])}>
                    {editableCell.row === rowIndex && editableCell.col === header ? (
                      <input
                        type="text"
                        value={tempValue ?? ""} 
                        onChange={(e) => handleInputChange(e.target.value)}
                        onBlur={() => handleInputBlur(rowIndex, header)}
                        autoFocus
                      />
                    ) : (
                      <span>{row[header]}</span>
                    )}
                  </td>
                ))}
                <td className="p-2 border text-black">
                  <button className="text-gray-500 hover:text-red-500" onClick={() => handleDeleteRow(row.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      
        <div className="mt-2">
          <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto" onClick={handleAddRow}>
            <Plus size={15} className="mr-2" /> <span>Add Row</span>
          </button>
        </div>
      </div>

    
    {/* button for adding column */}
    
    <div className="flex flex-col mt-2 md:mt-0">
        <input
          type="text"
          value={newColumnName ?? ""}
          onChange={(e) => setNewColumnName(e.target.value)}
          placeholder="New Column Name"
          className="py-2.5 px-4 border bg-gray-100 text-black mb-0"
        />
        <button className="py-2.5 px-4 border mb-4 bg-gray-100 text-black flex items-center justify-center w-auto" onClick={handleAddColumn}>
          <CirclePlus size={15} className="mr-2" /> <span>Add Column</span>
        </button>
      </div>
    </div>
  );
}