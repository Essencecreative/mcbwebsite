import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { manrope, dM_Sans } from "@/lib/font";
export const metadata = {
  title: "Mwalimu Commercial Bank",
  description: "Mwalimu Commercial Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dM_Sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
