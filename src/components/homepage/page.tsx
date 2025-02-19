import Sidebar from '@/components/sidebar/page';
import Header from '@/components/header/page';
import MainContent from '@/components/Table/page';
import Footer from '@/components/footer/page';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="flex flex-1 w-full">
        <Sidebar spreadsheets={undefined} activeSpreadsheetId={undefined} onCreateSpreadsheet={undefined} onDeleteSpreadsheet={undefined} onSwitchSpreadsheet={undefined} />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}