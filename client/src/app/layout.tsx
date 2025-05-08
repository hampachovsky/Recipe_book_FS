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
      <body>{children}</body>
    </html>
  );
}
