'use client';
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, Trash2, Plus, CirclePlus, Edit } from "lucide-react";
import { useState } from "react";

export default function CompaniesTable() {
  const [rowData, setRowData] = useState([
    { id: 1, description: "Description 1", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 1", twitter: "Twitter 1", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 2, description: "Description 2", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 2", twitter: "Twitter 2", assignedTo: "Olusegun Odunfuwa", unsubscribed: true },
    { id: 3, description: "Description 3", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 3", twitter: "Twitter 3", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 4, description: "Description 4", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 4", twitter: "Twitter 4", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 5, description: "Description 5", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 5", twitter: "Twitter 5", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
  ]);

  const [newColumnName, setNewColumnName] = useState("");
  const [columns, setColumns] = useState(["Description", "Category", "LinkedIn", "Twitter", "Assigned To", "Unsubscribed"]);
  const [editingColumn, setEditingColumn] = useState(null); // Track which column is being renamed
  const [tempColumnName, setTempColumnName] = useState(""); // Temporary storage for the new column name

  const handleAddColumn = () => {
    if (newColumnName.trim() !== "") {
      setColumns([...columns, newColumnName]);
      setRowData(rowData.map(row => ({ ...row, [newColumnName]: "" })));
      setNewColumnName("");
    }
  };

  const handleAddRow = () => {
    const newRow = {
      id: rowData.length + 1,
      description: "",
      category: ["Partner", "Investor", "Customer"], // Default categories
      linkedin: "",
      twitter: "",
      assignedTo: "",
      unsubscribed: false,
    };
    setRowData([...rowData, newRow]);
  };

  const handleDeleteColumn = (columnName) => {
    if (window.confirm("Are you sure you want to delete this column?")) {
      setColumns(columns.filter(col => col !== columnName));
      setRowData(rowData.map(row => {
        const newRow = { ...row };
        delete newRow[columnName];
        return newRow;
      }));
    }
  };

  const handleDeleteRow = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      setRowData(rowData.filter(row => row.id !== id));
    }
  };

  const handleCellChange = (id, field, value) => {
    setRowData(rowData.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleRenameColumn = (columnName) => {
    setEditingColumn(columnName); // Set the column being edited
    setTempColumnName(columnName); // Initialize the input with the current column name
  };

  const handleSaveColumnName = () => {
    if (tempColumnName.trim() !== "") {
      // Update the column name in the columns array
      const updatedColumns = columns.map(col => col === editingColumn ? tempColumnName : col);
      setColumns(updatedColumns);

      // Update the column name in the rowData keys
      const updatedRowData = rowData.map(row => {
        const newRow = { ...row };
        if (newRow[editingColumn] !== undefined) {
          newRow[tempColumnName] = newRow[editingColumn];
          delete newRow[editingColumn];
        }
        return newRow;
      });
      setRowData(updatedRowData);

      // Reset editing state
      setEditingColumn(null);
      setTempColumnName("");
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
              {columns.map((column, index) => (
                <th key={index} className="p-2 border text-black">
                  <div className="inline-flex items-center gap-2 whitespace-nowrap w-full  justify-between">
                    {column === "Description" && <FileText size={15} className="text-gray-600" />}
                    {column === "Category" && <Tag size={15} className="text-gray-600" />}
                    {column === "LinkedIn" && <Linkedin size={15} className="text-blue-600" />}
                    {column === "Twitter" && <Twitter size={15} className="text-blue-400" />}
                    {column === "Assigned To" && <User size={15} className="text-gray-600" />}
                    {column === "Unsubscribed" && <XCircle size={15} className="text-red-500" />}
                    {editingColumn === column ? (
                      <input
                        type="text"
                        value={tempColumnName}
                        onChange={(e) => setTempColumnName(e.target.value)}
                        onBlur={handleSaveColumnName}
                        onKeyPress={(e) => e.key === "Enter" && handleSaveColumnName()}
                        className="w-full bg-transparent border-gray-300 rounded px-1"
                        autoFocus
                      />  
                    ) : (
                      <>
                        {column}
                        <div className="ml-auto flex space-x-2">
                              <button className="text-gray-500 hover:text-blue-500" onClick={() => handleRenameColumn(column)}>
                          <Edit size={10} />
                          </button>
                        <button className="text-gray-500 hover:text-red-500" onClick={() => handleDeleteColumn(column)}>
                        <Trash2 size={10} />
                       </button>
                    </div>
                      </>
                    )}
                  </div>
                </th>
              ))}
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={row.id} className="border">
                <td className="p-2 border text-black">{row.id}</td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-2 border text-black">
                    {column === "Description" && (
                      <input
                        type="text"
                        value={row.description}
                        onChange={(e) => handleCellChange(row.id, "description", e.target.value)}
                         className="w-full bg-transparent"
                      />
                    )}
                    {column === "Category" && (
                      <div>
                        {row.category.map((cat, index) => ( 
                          <span key={index}  className={`${cat === 'Partner' ? 'bg-yellow-300' : cat === 'Investor' ? 'bg-red-400' : 'bg-gray-300'} px-2 py-1  rounded-lg mr-1 text-black`}>
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                    {column === "LinkedIn" && (
                      <input
                        type="text"
                        value={row.linkedin}
                        onChange={(e) => handleCellChange(row.id, "linkedin", e.target.value)}
                        className="w-full bg-transparent"
                      />
                    )}
                    {column === "Twitter" && (
                      <input
                        type="text"
                        value={row.twitter}
                        onChange={(e) => handleCellChange(row.id, "twitter", e.target.value)}
                          className="w-full bg-transparent"
                      />
                    )}
                    {column === "Assigned To" && (
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`assigned-${row.id}`}
                          className="cursor-pointer appearance-none w-5 h-5 border border-gray-500 rounded-full bg-gray-200 relative 
                                     checked:bg-black checked:border-black checked:ring-2 checked:ring-gray-400"
                        />
                        <input
                          type="text"
                          value={row.assignedTo}
                          onChange={(e) => handleCellChange(row.id, "assignedTo", e.target.value)}
                            className="w-full bg-transparent"
                        />
                      </label>
                    )}
                    {column === "Unsubscribed" && (
                      <input
                        type="checkbox"
                        checked={row.unsubscribed}
                        onChange={(e) => handleCellChange(row.id, "unsubscribed", e.target.checked)}
                        className="cursor-pointer  bg-transparent  appearance-none w-5 h-5 border border-gray-700 rounded-sm checked:bg-black checked:border-black checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center"
                      />
                    )}
                    {!["Description", "Category", "LinkedIn", "Twitter", "Assigned To", "Unsubscribed"].includes(column) && (
                      <input
                        type="text"
                        value={row[column] || ""}
                        onChange={(e) => handleCellChange(row.id, column, e.target.value)}
                      className="w-full bg-transparent"
                      />
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

        {/* Add Row Button */}
        <div className="mt-2">
          <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto" onClick={handleAddRow}>
            <Plus size={15} className="mr-2" /> <span>Add Row</span>
          </button>
        </div>
      </div>

      {/* Add Column Input and Button */}
      <div className="flex flex-col mt-2 md:mt-0">
        <input
          type="text"
          value={newColumnName}
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