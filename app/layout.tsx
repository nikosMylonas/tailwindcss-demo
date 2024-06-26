import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tailwind CSS Tutorial',
    description: 'A demo mockup page created with Tailwind CSS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="">
            <body
                className={
                    inter.className +
                    ' dark:bg-slate-900 dark:text-white relative'
                }
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
