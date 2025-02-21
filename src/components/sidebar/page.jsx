"use client";

import { useState } from "react";
import { Bell, Mail, Settings, Database, AlignLeft, Webcam, FilePlus, Trash2, Edit } from "lucide-react";

export default function Sidebar({
  spreadsheets,
  onCreateSpreadsheet,
  onDeleteSpreadsheet,
  onSwitchSpreadsheet,
  onRenameSpreadsheet,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [editingSheetId, setEditingSheetId] = useState(null);
  const [tempSheetName, setTempSheetName] = useState("");
  
  const [activeSpreadsheetId, setActiveSpreadsheetId] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeSpreadsheetId") || (spreadsheets.length > 0 ? spreadsheets[0].id : null);
    }
    return spreadsheets.length > 0 ? spreadsheets[0].id : null;
  });

  const handleSwitchSpreadsheet = (sheetId) => {
    setActiveSpreadsheetId(sheetId);
    localStorage.setItem("activeSpreadsheetId", sheetId);
    onSwitchSpreadsheet(sheetId);
  };

  const handleRename = (sheetId, currentName) => {
    setEditingSheetId(sheetId);
    setTempSheetName(currentName);
  };

  const handleSaveRename = (sheetId) => {
    if (tempSheetName.trim()) {
      onRenameSpreadsheet(sheetId, tempSheetName);
      setEditingSheetId(null);
    }
  };

  const handleDeleteSpreadsheet = (sheetId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this spreadsheet?");
    if (confirmDelete) {
      onDeleteSpreadsheet(sheetId);
      if (activeSpreadsheetId === sheetId) {
        localStorage.removeItem("activeSpreadsheetId");
        setActiveSpreadsheetId(null);
      }
    }
  };

  return (
    <div className={` bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? "w-64 p-4" : "w-16 p-2"}`}>
      <div className="flex items-center justify-between mb-3">
        {isOpen && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h1 className="text-xl text-black font-semibold">Opendashboard</h1>
          </div>
        )}
        <AlignLeft
          color="#404040"
          strokeWidth={1.05}
          size={20}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div className="border-b border-gray-300"></div>

      <div className="space-y-2">
        {[{ icon: Webcam, label: "Welcome" }, { icon: Bell, label: "Notifications", badge: 2 }, { icon: Mail, label: "Emails" }, { icon: Database, label: "Templates" }, { icon: Settings, label: "Settings" }].map(({ icon: Icon, label, badge }, index) => (
          <div key={index} className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Icon size={15} color="#000000" strokeWidth={2.0} />
            {isOpen && (
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium ml-3 text-black">{label}</span>
                {badge && <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">{badge}</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        {spreadsheets.map((spreadsheet) => (
          <div
            key={spreadsheet.id}
            className={`flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer ${activeSpreadsheetId === spreadsheet.id ? "bg-gray-50" : ""}`}
            onClick={() => handleSwitchSpreadsheet(spreadsheet.id)}
          >
            {editingSheetId === spreadsheet.id ? (
              <input
                type="text"
                value={tempSheetName}
                onChange={(e) => setTempSheetName(e.target.value)}
                onBlur={() => handleSaveRename(spreadsheet.id)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveRename(spreadsheet.id)}
                autoFocus
                className="w-full bg-white border border-gray-300 rounded px-1 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium text-gray-600 truncate">{spreadsheet.name}</span>
                <button
                  className="text-gray-500 hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRename(spreadsheet.id, spreadsheet.name);
                  }}
                >
                  <Edit size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={onCreateSpreadsheet}>
          <FilePlus size={15} color="#000000" strokeWidth={2.0} />
          {isOpen && <span className="text-sm font-medium ml-3 text-black">Create Spreadsheet</span>}
        </div>

        <div className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={() => handleDeleteSpreadsheet(activeSpreadsheetId)}>
          <Trash2 size={15} color="#D32F2F" strokeWidth={2.0} />
          {isOpen && <span className="text-sm font-medium ml-3 text-red-600">Delete Spreadsheet</span>}
        </div>
      </div>
    </div>
  );
}
