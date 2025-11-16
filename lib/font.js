import { DM_Sans, Manrope } from "next/font/google";

export const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--thm-font",
  display: "swap",
});
export const dM_Sans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--thm-font-2",
  display: "swap",
});
