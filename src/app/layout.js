import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "다니 포트폴리오",
  description: "포트폴리오 사이트입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
