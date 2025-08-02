import "../globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/connectMongo";

export const metadata = {
  title: "StaySwift",
  description: "Staying with us and make your life easy",
};

export default function RootLayout({ children }) {
  dbConnect();
  return (
    <html lang="en">
      <body>
        <Navbar sideMenu={true}/>
        <main>{children}</main>
      </body>
    </html>
  );
}
