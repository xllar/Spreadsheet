'use client'
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent() {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [rowData, setRowData] = useState([
    { id: 1, description: "Description 1", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 1", twitter: "Twitter 1", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 2, description: "Description 2", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 2", twitter: "Twitter 2", assignedTo: "Olusegun Odunfuwa", unsubscribed: true },
    { id: 3, description: "Description 3", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 3", twitter: "Twitter 3", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 4, description: "Description 4", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 4", twitter: "Twitter 4", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 5, description: "Description 5", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 5", twitter: "Twitter 5", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
  ]);

  const handleCellClick = (rowIndex, colName) => {
    setEditableCell({ row: rowIndex, col: colName });
  };

  const handleInputChange = (rowIndex, colName, value) => {
    const updatedData = [...rowData];
    updatedData[rowIndex][colName] = value;
    setRowData(updatedData);
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
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <FileText size={15} className="text-gray-600" /> Description
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Tag size={15} className="text-gray-600" /> Category
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Linkedin size={15} className="text-blue-600" /> LinkedIn
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Twitter size={15} className="text-blue-400" /> Twitter
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <User size={15} className="text-gray-600" /> Assigned To
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <XCircle size={15} className="text-red-500" /> Unsubscribed
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={row.id} className="border">
                <td className="p-2 border text-black">{row.id}</td>
                <td className="p-2 border text-black flex items-center gap-2" onClick={() => handleCellClick(rowIndex, 'description')}>
                  {editableCell.row === rowIndex && editableCell.col === 'description' ? (
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) => handleInputChange(rowIndex, 'description', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.description}</span>
                  )}
                </td>
                <td className="p-2 border">
                  {row.category.map((cat, index) => (
                    <span key={index} className={`${cat === 'Partner' ? 'bg-yellow-300' : cat === 'Investor' ? 'bg-red-400' : 'bg-gray-300'} px-2 py-1 rounded-lg mr-1 text-black`}>
                      {cat}
                    </span>
                  ))}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'linkedin')}>
                  {editableCell.row === rowIndex && editableCell.col === 'linkedin' ? (
                    <input
                      type="text"
                      value={row.linkedin}
                      onChange={(e) => handleInputChange(rowIndex, 'linkedin', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.linkedin}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'twitter')}>
                  {editableCell.row === rowIndex && editableCell.col === 'twitter' ? (
                    <input
                      type="text"
                      value={row.twitter}
                      onChange={(e) => handleInputChange(rowIndex, 'twitter', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.twitter}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'assignedTo')}>
                  {editableCell.row === rowIndex && editableCell.col === 'assignedTo' ? (
                    <input
                      type="text"
                      value={row.assignedTo}
                      onChange={(e) => handleInputChange(rowIndex, 'assignedTo', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`assigned-${row.id}`}
                        className="cursor-pointer appearance-none w-5 h-5 border border-gray-500 rounded-full bg-gray-200 relative 
                                   checked:bg-black checked:border-black checked:ring-2 checked:ring-gray-400"
                      />
                      <span>{row.assignedTo}</span>
                    </label>
                  )}
                </td>
                <td className="p-2 border text-black items-center gap-2">
                  <input
                    type="checkbox"
                    checked={row.unsubscribed}
                    onChange={(e) => handleInputChange(rowIndex, 'unsubscribed', e.target.checked)}
                    className="cursor-pointer appearance-none w-5 h-5 border border-gray-700 rounded-sm checked:bg-black checked:border-black checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center"
                  />
                </td>
                <td className="p-2 border text-black">
                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row Button */}
        <div className="mt-2">
          <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
            <Plus size={15} className="mr-2" /> <span>Add Row</span>
          </button>
        </div>
      </div>

      {/* Add Column Button */}
      <div className="flex items-center mt-2 md:mt-0">
        <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
          <CirclePlus size={15} className="mr-2" /> <span>Add Column</span>
        </button>
      </div>
    </div>
  );
}



'use client';

import { 
  Search, Filter, Mail, List, EyeOff, Share, Book, MoreHorizontal,
  Building, ChevronDown, CirclePlus, RefreshCcw, Edit, Save, Trash2, Settings
} from "lucide-react";
import { useState } from "react";

    export default function Header({ title = "Untitled" }) {
      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [isBottomMenuOpen, setBottomMenuOpen] = useState(false);

      return (
        <div className="border-b bg-white shadow-sm">
          <div className="px-2 py-3 flex items-center justify-between mt-1">
            <div className="flex items-center">
              <Book size={18} className="text-red-500 mr-2" />
              <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          </div>

        {/* Right Actions - Save & More Options */}
        <div className="flex items-center space-x-3">
          <button className="hidden md:flex items-center bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition-all duration-200">
            <Save size={15} className="mr-2" />
            <span className="text-sm font-medium">Save Changes</span>
          </button>

          <button className="hidden sm:flex items-center bg-gray-100 text-gray-600 px-2 py-1.5 rounded-full hover:bg-gray-200 transition-all duration-200">
            <Share size={15} className="mr-2" />
            <span className="text-sm font-medium">Share</span>
          </button>

          {/* More Options - Clickable Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
              <MoreHorizontal size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-200" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-lg w-44 py-2">
                <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  <Edit size={15} className="mr-2 text-gray-600" /> Rename Column
                </button>
                <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  <RefreshCcw size={15} className="mr-2 text-gray-600" /> Update Data
                </button>
                <button className="flex w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition-all">
                  <Trash2 size={15} className="mr-2" /> Delete Column
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Underlining */}
      <div className="border-b border-gray-300"></div>

      {/* Buttons Section */}
      <div className="flex flex-wrap items-center px-4 py-2 gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-2 flex-wrap">
          <button className="flex items-center gap-2 px-2 py-1.5 border bg-white text-sm rounded-xl hover:bg-gray-100 transition-all duration-200">
            <Building size={15} />
            <span>All Companies</span>
            <ChevronDown size={15} />
          </button>
          <button className="flex items-center gap-2 px-2 py-1.5 border bg-white text-sm rounded-xl hover:bg-gray-100">
            <CirclePlus size={15}/>
            <span>New View</span>
          </button>
          <button className="flex items-center gap-2 px-2 py-1.5 border bg-white text-sm rounded-xl hover:bg-gray-100 md:flex">
            <Mail size={15} />
            <span>Share View</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          <button className="hidden md:flex items-center gap-1 text-gray-700 hover:text-black">
            <CirclePlus size={15}/>
            <span className="text-sm">Add</span>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black hidden md:flex">
            <Mail size={15} />
            <span className="text-sm">Email all</span>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black hidden lg:flex">
            <Filter size={15} />
            <span className="text-sm">Filter</span>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black hidden lg:flex">
            <List size={15} />
            <span className="text-sm">Sort</span>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black">
            <Search size={15} />
            <span className="text-sm">Search</span>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-black hidden md:flex">
            <EyeOff size={15} />
            <span className="text-sm">Hide Fields</span>
          </button>

          {/* Bottom Three Dots Menu */}
          <div className="relative">
            <button onClick={() => setBottomMenuOpen(!isBottomMenuOpen)} className="focus:outline-none">
              <MoreHorizontal size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-200" />
            </button>
            {isBottomMenuOpen && (
              <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-lg w-44 py-2">
                <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  <Settings size={15} className="mr-2 text-gray-600" /> Settings
                </button>
                <button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  <RefreshCcw size={15} className="mr-2 text-gray-600" /> Refresh Data
                </button>
                <button className="flex w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition-all">
                  <Trash2 size={15} className="mr-2" /> Clear All Data
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
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
    const newSpreadsheet = {
      id: spreadsheets.length ? Math.max(...spreadsheets.map(s => s.id)) + 1 : 1,
      name: "Untitled",
      headers: [], // Start with no headers
      data: [], // Start with no data
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

  const addHeader = (spreadsheetId, headerName) => {
    const updatedSpreadsheets = spreadsheets.map((s) =>
      s.id === spreadsheetId
        ? { ...s, headers: [...s.headers, headerName] }
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

  return {
    spreadsheets,
    activeSpreadsheet,
    createSpreadsheet,
    deleteSpreadsheet,
    switchSpreadsheet,
    addHeader,
    addRow,
  };
};

export default useSpreadsheetManager;  


'use client'

import { useState } from "react";
import { Bell, Mail, Settings, Database, AlignLeft, Webcam, FilePlus, Trash2 } from "lucide-react";


export default function Sidebar({
  spreadsheets,
  activeSpreadsheetId,
  onCreateSpreadsheet,
  onDeleteSpreadsheet,
  onSwitchSpreadsheet,
}) {
  const [isOpen, setIsOpen] = useState(true);

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

      {/* Database & Pages Section */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        {["Shared Database", "Restricted Database", "Shared Pages"].map((item, index) => (
          <div key={index} className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="text-sm font-medium ml-3 text-gray-600">{item}</span>}
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
            {isOpen && <span className="text-sm font-medium ml-3 text-gray-600">{spreadsheet.name}</span>}
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
          onClick={onDeleteSpreadsheet}
        >
          <Trash2 size={15} color="#D32F2F" strokeWidth={2.00} />
          {isOpen && <span className="text-sm font-medium ml-3 text-red-600">Delete Spreadsheet</span>}
        </div>
      </div>
    </div>
  );
}

'use client'
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
  }

  const handleCellClick = (rowIndex, colName) => {
    setEditableCell({ row: rowIndex, col: colName });
  };

  const handleInputChange = (rowIndex, colName, value) => {
    const updatedData = [...activeSpreadsheet.data];
    updatedData[rowIndex][colName] = value;
    // Update the state or propagate changes to the parent component
  };

  const addRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
      return row;
    }, { id: activeSpreadsheet.data.length + 1 });
    const updatedData = [...activeSpreadsheet.data, newRow];
    // Update the state or propagate changes to the parent component
  };

  const addColumn = (columnName) => {
    const updatedHeaders = [...activeSpreadsheet.headers, columnName];
    const updatedData = activeSpreadsheet.data.map((row) => ({
      ...row,
      [columnName]: "", // Initialize the new column to empty strings
    }));
    // Update the state or propagate changes to the parent component
  };
  const [rowData, setRowData] = useState([
    { id: 1, description: "Description 1", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 1", twitter: "Twitter 1", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 2, description: "Description 2", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 2", twitter: "Twitter 2", assignedTo: "Olusegun Odunfuwa", unsubscribed: true },
    { id: 3, description: "Description 3", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 3", twitter: "Twitter 3", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 4, description: "Description 4", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 4", twitter: "Twitter 4", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 5, description: "Description 5", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 5", twitter: "Twitter 5", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
  ]);


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
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <FileText size={15} className="text-gray-600" /> Description
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Tag size={15} className="text-gray-600" /> Category
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Linkedin size={15} className="text-blue-600" /> LinkedIn
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Twitter size={15} className="text-blue-400" /> Twitter
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <User size={15} className="text-gray-600" /> Assigned To
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <XCircle size={15} className="text-red-500" /> Unsubscribed
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={row.id} className="border">
                <td className="p-2 border text-black">{row.id}</td>
                <td className="p-2 border text-black flex items-center gap-2" onClick={() => handleCellClick(rowIndex, 'description')}>
                  {editableCell.row === rowIndex && editableCell.col === 'description' ? (
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) => handleInputChange(rowIndex, 'description', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.description}</span>
                  )}
                </td>
                <td className="p-2 border">
                  {row.category.map((cat, index) => (
                    <span key={index} className={`${cat === 'Partner' ? 'bg-yellow-300' : cat === 'Investor' ? 'bg-red-400' : 'bg-gray-300'} px-2 py-1 rounded-lg mr-1 text-black`}>
                      {cat}
                    </span>
                  ))}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'linkedin')}>
                  {editableCell.row === rowIndex && editableCell.col === 'linkedin' ? (
                    <input
                      type="text"
                      value={row.linkedin}
                      onChange={(e) => handleInputChange(rowIndex, 'linkedin', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.linkedin}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'twitter')}>
                  {editableCell.row === rowIndex && editableCell.col === 'twitter' ? (
                    <input
                      type="text"
                      value={row.twitter}
                      onChange={(e) => handleInputChange(rowIndex, 'twitter', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.twitter}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'assignedTo')}>
                  {editableCell.row === rowIndex && editableCell.col === 'assignedTo' ? (
                    <input
                      type="text"
                      value={row.assignedTo}
                      onChange={(e) => handleInputChange(rowIndex, 'assignedTo', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`assigned-${row.id}`}
                        className="cursor-pointer appearance-none w-5 h-5 border border-gray-500 rounded-full bg-gray-200 relative 
                                   checked:bg-black checked:border-black checked:ring-2 checked:ring-gray-400"
                      />
                      <span>{row.assignedTo}</span>
                    </label>
                  )}
                </td>
                <td className="p-2 border text-black items-center gap-2">
                  <input
                    type="checkbox"
                    checked={row.unsubscribed}
                    onChange={(e) => handleInputChange(rowIndex, 'unsubscribed', e.target.checked)}
                    className="cursor-pointer appearance-none w-5 h-5 border border-gray-700 rounded-sm checked:bg-black checked:border-black checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center"
                  />
                </td>
                <td className="p-2 border text-black">
                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row Button */}
        <div className="mt-2">
          <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
            <Plus size={15} className="mr-2" /> <span>Add Row</span>
          </button>
        </div>
      </div>

      {/* Add Column Button */}
      <div className="flex items-center mt-2 md:mt-0">
        <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
          <CirclePlus size={15} className="mr-2" /> <span>Add Column</span>
        </button>
      </div>
    </div>
  );
} 


"use client"; // Mark this as a Client Component

import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import TableComponent from '@/components/Table/page';
import useSpreadsheetManager from "@/components/sheetsManager/page";
export default function SpreadsheetManagerWrapper() {
    const {
        spreadsheets,
        activeSpreadsheet,
        createSpreadsheet,
        deleteSpreadsheet,
        switchSpreadsheet,
      } = useSpreadsheetManager();
  
    return (
      <>
        <Sidebar
          spreadsheets={spreadsheets}
          activeSpreadsheetId={activeSpreadsheet?.id}
          onCreateSpreadsheet={createSpreadsheet}
          onDeleteSpreadsheet={() => deleteSpreadsheet(activeSpreadsheet?.id)}
          onSwitchSpreadsheet={switchSpreadsheet}
        />
        <div className="flex flex-col flex-1 w-full">
          <Header title={activeSpreadsheet?.name || "Untitled"} />
          <TableComponent activeSpreadsheet={activeSpreadsheet} />
        </div>
      </>
    );
  }i want to make all this funtional  add column button,rename column, delete column, add row, update row celll, delete row , delete spreedsheet and create new spreedsheet also allow me rename new spreedsheet created eg i can chnage untitled to datasheet  u get?


  'use client';
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet, onAddColumn, onRenameColumn, onDeleteColumn, onAddRow, onUpdateRow, onDeleteRow }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [newColumnName, setNewColumnName] = useState("");
  const [tempValue, setTempValue] = useState("");

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
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

  const handleRenameColumn = (oldHeaderName) => {
    const newHeaderName = prompt("Enter new column name:", oldHeaderName);
    if (newHeaderName && newHeaderName.trim()) {
      onRenameColumn(activeSpreadsheet.id, oldHeaderName, newHeaderName);
    }
  };

  const handleDeleteColumn = (headerName) => {
    if (confirm(`Are you sure you want to delete the column "${headerName}"?`)) {
      onDeleteColumn(activeSpreadsheet.id, headerName);
    }
  };

  const handleAddRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
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
                    {header === "Description" && <FileText size={15} className="text-gray-600" />}
                    {header === "Category" && <Tag size={15} className="text-gray-600" />}
                    {header === "LinkedIn" && <Linkedin size={15} className="text-blue-600" />}
                    {header === "Twitter" && <Twitter size={15} className="text-blue-400" />}
                    {header === "Assigned To" && <User size={15} className="text-gray-600" />}
                    {header === "Unsubscribed" && <XCircle size={15} className="text-red-500" />}
                    <span>{header}</span>
                    <button className="text-gray-500 hover:text-red-500 ml-auto" onClick={() => handleRenameColumn(header)} />
                    <button className="text-gray-500 hover:text-red-500" onClick={() => handleDeleteColumn(header)}>
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
                        value={tempValue}
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

'use client';
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet, onAddColumn, onRenameColumn, onDeleteColumn, onAddRow, onUpdateRow, onDeleteRow }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [newColumnName, setNewColumnName] = useState("");
  const [tempValue, setTempValue] = useState("");

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
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

  const handleRenameColumn = (oldHeaderName) => {
    const newHeaderName = prompt("Enter new column name:", oldHeaderName);
    if (newHeaderName && newHeaderName.trim()) {
      onRenameColumn(activeSpreadsheet.id, oldHeaderName, newHeaderName);
    }
  };

  const handleDeleteColumn = (headerName) => {
    if (confirm(`Are you sure you want to delete the column "${headerName}"?`)) {
      onDeleteColumn(activeSpreadsheet.id, headerName);
    }
  };

  const handleAddRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
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
                    {header === "Description" && <FileText size={15} className="text-gray-600" />}
                    {header === "Category" && <Tag size={15} className="text-gray-600" />}
                    {header === "LinkedIn" && <Linkedin size={15} className="text-blue-600" />}
                    {header === "Twitter" && <Twitter size={15} className="text-blue-400" />}
                    {header === "Assigned To" && <User size={15} className="text-gray-600" />}
                    {header === "Unsubscribed" && <XCircle size={15} className="text-red-500" />}
                    <span>{header}</span>
                    <button className="text-gray-500 hover:text-red-500 ml-auto" onClick={() => handleRenameColumn(header)} />
                    <button className="text-gray-500 hover:text-red-500" onClick={() => handleDeleteColumn(header)}>
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
                        value={tempValue}
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


'use client'
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
  }

  const handleCellClick = (rowIndex, colName) => {
    setEditableCell({ row: rowIndex, col: colName });
  };

  const handleInputChange = (rowIndex, colName, value) => {
    const updatedData = [...activeSpreadsheet.data];
    updatedData[rowIndex][colName] = value;
    // Update the state or propagate changes to the parent component
  };

  const addRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
      return row;
    }, { id: activeSpreadsheet.data.length + 1 });
    const updatedData = [...activeSpreadsheet.data, newRow];
    // Update the state or propagate changes to the parent component
  };

  const addColumn = (columnName) => {
    const updatedHeaders = [...activeSpreadsheet.headers, columnName];
    const updatedData = activeSpreadsheet.data.map((row) => ({
      ...row,
      [columnName]: "", // Initialize the new column to empty strings
    }));
    // Update the state or propagate changes to the parent component
  };
  const [rowData, setRowData] = useState([
    { id: 1, description: "Description 1", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 1", twitter: "Twitter 1", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 2, description: "Description 2", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 2", twitter: "Twitter 2", assignedTo: "Olusegun Odunfuwa", unsubscribed: true },
    { id: 3, description: "Description 3", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 3", twitter: "Twitter 3", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 4, description: "Description 4", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 4", twitter: "Twitter 4", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
    { id: 5, description: "Description 5", category: ["Partner", "Investor", "Customer"], linkedin: "LinkedIn 5", twitter: "Twitter 5", assignedTo: "Olusegun Odunfuwa", unsubscribed: false },
  ]);


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
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <FileText size={15} className="text-gray-600" /> Description
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Tag size={15} className="text-gray-600" /> Category
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Linkedin size={15} className="text-blue-600" /> LinkedIn
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <Twitter size={15} className="text-blue-400" /> Twitter
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <User size={15} className="text-gray-600" /> Assigned To
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap w-full">
                  <XCircle size={15} className="text-red-500" /> Unsubscribed
                  <button className="text-gray-500 hover:text-red-500 ml-auto">
                    <Trash2 size={10} />
                  </button>
                </div>
              </th>
              <th className="p-2 border text-black">
                <div className="inline-flex items-center gap-2 whitespace-nowrap">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={row.id} className="border">
                <td className="p-2 border text-black">{row.id}</td>
                <td className="p-2 border text-black flex items-center gap-2" onClick={() => handleCellClick(rowIndex, 'description')}>
                  {editableCell.row === rowIndex && editableCell.col === 'description' ? (
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) => handleInputChange(rowIndex, 'description', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.description}</span>
                  )}
                </td>
                <td className="p-2 border">
                  {row.category.map((cat, index) => (
                    <span key={index} className={`${cat === 'Partner' ? 'bg-yellow-300' : cat === 'Investor' ? 'bg-red-400' : 'bg-gray-300'} px-2 py-1 rounded-lg mr-1 text-black`}>
                      {cat}
                    </span>
                  ))}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'linkedin')}>
                  {editableCell.row === rowIndex && editableCell.col === 'linkedin' ? (
                    <input
                      type="text"
                      value={row.linkedin}
                      onChange={(e) => handleInputChange(rowIndex, 'linkedin', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.linkedin}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'twitter')}>
                  {editableCell.row === rowIndex && editableCell.col === 'twitter' ? (
                    <input
                      type="text"
                      value={row.twitter}
                      onChange={(e) => handleInputChange(rowIndex, 'twitter', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <span>{row.twitter}</span>
                  )}
                </td>
                <td className="p-2 border text-black" onClick={() => handleCellClick(rowIndex, 'assignedTo')}>
                  {editableCell.row === rowIndex && editableCell.col === 'assignedTo' ? (
                    <input
                      type="text"
                      value={row.assignedTo}
                      onChange={(e) => handleInputChange(rowIndex, 'assignedTo', e.target.value)}
                      onBlur={() => setEditableCell({ row: null, col: null })}
                      autoFocus
                    />
                  ) : (
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`assigned-${row.id}`}
                        className="cursor-pointer appearance-none w-5 h-5 border border-gray-500 rounded-full bg-gray-200 relative 
                                   checked:bg-black checked:border-black checked:ring-2 checked:ring-gray-400"
                      />
                      <span>{row.assignedTo}</span>
                    </label>
                  )}
                </td>
                <td className="p-2 border text-black items-center gap-2">
                  <input
                    type="checkbox"
                    checked={row.unsubscribed}
                    onChange={(e) => handleInputChange(rowIndex, 'unsubscribed', e.target.checked)}
                    className="cursor-pointer appearance-none w-5 h-5 border border-gray-700 rounded-sm checked:bg-black checked:border-black checked:after:content-['✔'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center"
                  />
                </td>
                <td className="p-2 border text-black">
                  <button className="text-gray-500 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row Button */}
        <div className="mt-2">
          <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
            <Plus size={15} className="mr-2" /> <span>Add Row</span>
          </button>
        </div>
      </div>

      {/* Add Column Button */}
      <div className="flex items-center mt-2 md:mt-0">
        <button className="py-2.5 px-4 border bg-gray-100 text-black flex items-center justify-center w-auto">
          <CirclePlus size={15} className="mr-2" /> <span>Add Column</span>
        </button>
      </div>
    </div>
  );
} 


'use client';
import { CheckSquare, FileText, Tag, Linkedin, Twitter, User, XCircle, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet, onAddColumn, onRenameColumn, onDeleteColumn, onAddRow, onUpdateRow, onDeleteRow }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [newColumnName, setNewColumnName] = useState("");
  const [tempValue, setTempValue] = useState("");

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
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

  const handleRenameColumn = (oldHeaderName) => {
    const newHeaderName = prompt("Enter new column name:", oldHeaderName);
    if (newHeaderName && newHeaderName.trim()) {
      onRenameColumn(activeSpreadsheet.id, oldHeaderName, newHeaderName);
    }
  };

  const handleDeleteColumn = (headerName) => {
    if (confirm(`Are you sure you want to delete the column "${headerName}"?`)) {
      onDeleteColumn(activeSpreadsheet.id, headerName);
    }
  };

  const handleAddRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
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
                    {header === "Description" && <FileText size={15} className="text-gray-600" />}
                    {header === "Category" && <Tag size={15} className="text-gray-600" />}
                    {header === "LinkedIn" && <Linkedin size={15} className="text-blue-600" />}
                    {header === "Twitter" && <Twitter size={15} className="text-blue-400" />}
                    {header === "Assigned To" && <User size={15} className="text-gray-600" />}
                    {header === "Unsubscribed" && <XCircle size={15} className="text-red-500" />}
                    <span>{header}</span>
                    <button className="text-gray-500 hover:text-red-500 ml-auto" onClick={() => handleRenameColumn(header)} />
                    <button className="text-gray-500 hover:text-red-500" onClick={() => handleDeleteColumn(header)}>
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
                        value={tempValue}
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






















'use client';
import { CheckSquare, Edit, CirclePlus, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function TableComponent({ activeSpreadsheet, onAddColumn, onRenameColumn, onDeleteColumn, onAddRow, onUpdateRow, onDeleteRow }) {
  const [editableCell, setEditableCell] = useState({ row: null, col: null });
  const [editableHeader, setEditableHeader] = useState(null); // Track which header is being edited
  const [newColumnName, setNewColumnName] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [tempHeaderValue, setTempHeaderValue] = useState(""); // Temporary value for editing headers

  if (!activeSpreadsheet) {
    return <div>No active spreadsheet. Create a new one or select an existing spreadsheet.</div>;
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
    setEditableHeader(headerIndex); // Set the header being edited
    setTempHeaderValue(headerName); // Set the current header name for editing
  };

  const handleHeaderChange = (e) => {
    setTempHeaderValue(e.target.value); // Update the temporary header value
  };

  const handleHeaderBlur = (headerIndex) => {
    if (tempHeaderValue.trim()) {
      onRenameColumn(activeSpreadsheet.id, activeSpreadsheet.headers[headerIndex], tempHeaderValue); // Update the header name
    }
    setEditableHeader(null); // Stop editing
  };

  const handleDeleteColumn = (headerName) => {
    if (confirm(`Are you sure you want to delete the column "${headerName}"?`)) {
      onDeleteColumn(activeSpreadsheet.id, headerName);
    }
  };

  const handleAddRow = () => {
    const newRow = activeSpreadsheet.headers.reduce((row, header) => {
      row[header] = ""; // Initialize all columns to empty strings
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
                        value={tempHeaderValue}
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
                        value={tempValue}
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