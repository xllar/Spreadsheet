'use client'
import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import NewSheetsTable from '@/components/newsheets/page';
import useSpreadsheetManager from "@/components/sheetsManager/page";

export default function SpreadsheetManagerWrapper() {
  const {
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
  } = useSpreadsheetManager();

  return (
    <>
      <Sidebar
        spreadsheets={spreadsheets}
        activeSpreadsheetId={activeSpreadsheet?.id}
        onCreateSpreadsheet={createSpreadsheet}
        onDeleteSpreadsheet={() => deleteSpreadsheet(activeSpreadsheet?.id)}
        onSwitchSpreadsheet={switchSpreadsheet}
        onRenameSpreadsheet={renameSpreadsheet} 
      />
      <div className="flex flex-col flex-1 w-full">
        <Header title={activeSpreadsheet?.name || "Untitled"} />
        {activeSpreadsheet?.id === 1 ? (
          <CompaniesTable />
        ) : (
          <NewSheetsTable
            activeSpreadsheet={activeSpreadsheet}
            onAddColumn={addHeader}
            onRenameColumn={renameHeader}
            onDeleteColumn={deleteHeader}
            onAddRow={addRow}
            onUpdateRow={updateRow}
            onDeleteRow={deleteRow}
          />
        )}
      </div>
    </>
  ); 
}
