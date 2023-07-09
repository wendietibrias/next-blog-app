"use client"
import './globals.css';
import useDarkmode from '@/hooks/useDarkmode';
import { Navbar,Footer } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode,setMode] = useDarkmode();

  return (
    <html className={`${mode === "dark" ? "dark" : ""}`} lang="en">
      <body>
       <main className={`w-full min-h-screen flex flex-col justify-between dark:bg-gray-900`}>
         <Navbar mode={mode} setMode={setMode}/>
          {children}
         <Footer/>
       </main>
      </body>
    </html>
  )
}
