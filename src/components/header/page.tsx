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




