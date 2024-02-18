import { Geologica, Kaushan_Script } from "next/font/google";

export const kaushan_script = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export const geologica = Geologica({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["cyrillic"],
});
