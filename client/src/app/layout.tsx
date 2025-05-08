import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recipe App',
  description: 'Test task by Oleksandr Novak',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <header className="bg-white shadow px-4 py-3 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">Recipe App</h1>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={'col-span-12'}>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
