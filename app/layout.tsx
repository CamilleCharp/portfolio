import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--inter-font",
});

// import "normalize.css";
import "./globals.css";
import styles from "./layout.module.scss";
import { Header } from "../components/Header/Header";

export const metadata = {
  title: "Camille Zerrouk, Webdev",
  description: "Camille Zerrouk a full-stack dev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.variable}`}>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
