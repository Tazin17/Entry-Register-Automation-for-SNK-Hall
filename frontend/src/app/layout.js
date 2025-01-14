import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from './components/Header'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Entry-Register-System",
  description: "Making the entry into Shamshen Nahar Khan Hall easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="light">  
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
