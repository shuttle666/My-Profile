import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Profile - Wenduo",
  description: "Used to showcase the skills and projects of Wenduo Wang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
