import { Header } from "@/components/organisms/header";
import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata = {
  title: "Contries",
  description: "Country library",
};

export default function RootLayout({ children }) {
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;

  return (
    <html lang="en">
      <body className={nunitoSans.className} suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Header />
        {children}
      </body>
    </html>
  );
}
