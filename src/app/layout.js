import "@/app/globals.css";
import { poppins } from "@/app/lib/font";
import { Providers } from "./providers";

export const metadata = {
  title: "Kerja WOI",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased text-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

