// app/page.jsx (Server Component)
import Footer from '@/components/footer/page';
import SpreadsheetManagerWrapper from '@/components/wrapper/page'// New Client Component
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="flex flex-1 w-full">
        {/* Render the Client Component */}
        <SpreadsheetManagerWrapper />
      </div>
      <Footer />
    </div>
  );
}




