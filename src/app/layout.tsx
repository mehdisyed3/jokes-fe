import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';


export const metadata: Metadata = {
  title: 'Jokes App',
  description: 'A simple jokes app with the functionality to translate jokes to different languages.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
