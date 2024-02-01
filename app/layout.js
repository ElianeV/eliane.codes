import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ELIANE.CODES",
  description:
    "Portfolio website of ELIANE.CODES. Web design and frontend development. Building websites and applications with a focus on impactful communication through design. Employing a collaborative and thoughtful approach to creating seamless user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
