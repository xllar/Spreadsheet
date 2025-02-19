'use client'

import { useState } from "react";
import { Bell, Mail, Settings, Database, AlignLeft, Webcam, FilePlus, Trash2,Edit } from "lucide-react";

export default function Sidebar({
  spreadsheets,
  activeSpreadsheetId,
  onCreateSpreadsheet,
  onDeleteSpreadsheet,
  onSwitchSpreadsheet,
  onRenameSpreadsheet,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [editingSheetId, setEditingSheetId] = useState(null);
  const [tempSheetName, setTempSheetName] = useState("");

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

  return (
    <div className={`h-screen bg-white border-r border-gray-200 ${isOpen ? "w-64 p-4" : "w-16 p-2"}`}>
      <div className="flex items-center justify-between mb-3">
        {isOpen && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h1 className="text-xl text-black font-semibold">Opendashboard</h1>
          </div>
        )}

        <div className={`${isOpen ? "ml-2" : "mx-auto"}`}>
          <AlignLeft
            color="#404040"
            strokeWidth={1.05}
            size={20}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      {/* Main Navigation */}
      <div className="space-y-2">
        {[
          { icon: Webcam, label: "Welcome" },
          { icon: Bell, label: "Notifications", badge: 2 },
          { icon: Mail, label: "Emails" },
          { icon: Database, label: "Templates" },
          { icon: Settings, label: "Settings" },
        ].map(({ icon: Icon, label, badge }, index) => (
          <div key={index} className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Icon size={15} color="#000000" strokeWidth={2.00} />
            {isOpen && (
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium ml-3 text-black">{label}</span>
                {badge && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    
      <div className="mt-6 border-t border-gray-200 pt-4">
        {spreadsheets.map((spreadsheet) => (
          <div
            key={spreadsheet.id}
            className={`flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer ${
              activeSpreadsheetId === spreadsheet.id ? "bg-gray-100" : ""
            }`}
            onClick={() => onSwitchSpreadsheet(spreadsheet.id)}
          >
            {editingSheetId === spreadsheet.id ? (
              <input
                type="text"
                value={tempSheetName}
                onChange={(e) => setTempSheetName(e.target.value)}
                onBlur={() => handleSaveRename(spreadsheet.id)}
                onKeyPress={(e) => e.key === "Enter" && handleSaveRename(spreadsheet.id)}
                autoFocus
                className="w-full bg-transparent border-gray-300 rounded px-1 text-black"
              />
            ) : (
              <>
                <span className="text-sm font-medium ml-3 text-gray-600">{spreadsheet.name}</span>
                <button
                  className="ml-auto text-gray-500 hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRename(spreadsheet.id, spreadsheet.name);
                  }}
                >
                  <Edit size={12} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Global Actions Section */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div
          className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onCreateSpreadsheet}
        >
          <FilePlus size={15} color="#000000" strokeWidth={2.00} />
          {isOpen && <span className="text-sm font-medium ml-3 text-black">Create Spreadsheet</span>}
        </div>

        <div
          className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => onDeleteSpreadsheet(activeSpreadsheetId)}
        >
          <Trash2 size={15} color="#D32F2F" strokeWidth={2.00} />
          {isOpen && <span className="text-sm font-medium ml-3 text-red-600">Delete Spreadsheet</span>}
        </div>
      </div>
    </div>
  );
}