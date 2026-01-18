import "./globals.css";
import { NavBar } from './_components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar></NavBar>
      </body>
    </html>
  );
}
