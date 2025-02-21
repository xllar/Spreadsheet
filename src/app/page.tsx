// app/page.jsx (Server Component)
import Footer from '@/components/footer/page';
import SpreadsheetManagerWrapper from '@/components/wrapper/page'
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-auto">
      <div className="flex flex-1 w-full">
        <SpreadsheetManagerWrapper />
      </div>
      
    </div>
  );
}




