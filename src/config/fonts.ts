import localFont from "next/font/local";

// Simpler font
export const simpler = localFont({
  src: "../fonts/simpler/simpler.otf",
  variable: "--font-simpler",
});

// Argazim font weights
const argazimRegular = localFont({
  src: "../fonts/argazim/Argazim_Font-Regular.ttf",
  variable: "--font-argazim-regular",
});

const argazimRegularItalic = localFont({
  src: "../fonts/argazim/Argazim_Font-RegularItalic.ttf",
  variable: "--font-argazim-regular-italic",
});

const argazimMedium = localFont({
  src: "../fonts/argazim/Argazim_Font-Medium.ttf",
  variable: "--font-argazim-medium",
});

const argazimMediumItalic = localFont({
  src: "../fonts/argazim/Argazim_Font-MediumItalic.ttf",
  variable: "--font-argazim-medium-italic",
});

const argazimBold = localFont({
  src: "../fonts/argazim/Argazim_Font-Bold.ttf",
  variable: "--font-argazim-bold",
});

const argazimBoldItalic = localFont({
  src: "../fonts/argazim/Argazim_Font-BoldItalic.ttf",
  variable: "--font-argazim-bold-italic",
});

const argazimBlack = localFont({
  src: "../fonts/argazim/Argazim_Font-Black.ttf",
  variable: "--font-argazim-black",
});

const argazimBlackItalic = localFont({
  src: "../fonts/argazim/Argazim_Font-BlackItalic.ttf",
  variable: "--font-argazim-black-italic",
});

// Emulsi font weights
const emulsiVariable = localFont({
  src: "../fonts/emulsi/emulsi-variable.ttf",
  variable: "--font-emulsi",
});

const emulsiLight = localFont({
  src: "../fonts/emulsi/emulsi.otf",
  variable: "--font-emulsi-light",
});

const emulsiRegular = localFont({
  src: "../fonts/emulsi/emulsi1.otf",
  variable: "--font-emulsi-regular",
});

const emulsiMedium = localFont({
  src: "../fonts/emulsi/emulsi2.otf",
  variable: "--font-emulsi-medium",
});

const emulsiBold = localFont({
  src: "../fonts/emulsi/emulsi3.otf",
  variable: "--font-emulsi-bold",
});

const emulsiBlack = localFont({
  src: "../fonts/emulsi/emulsi4.otf",
  variable: "--font-emulsi-black",
});

// Tetra (Pixel Hebrew) font weights
const tetraRegular = localFont({
  src: "../fonts/tetra/PixelHebrew-Regular.otf",
  variable: "--font-tetra-regular",
});

const tetraBold = localFont({
  src: "../fonts/tetra/PixelHebrew-Bold.otf",
  variable: "--font-tetra-bold",
});

const tetraBlack = localFont({
  src: "../fonts/tetra/PixelHebrew-Black.otf",
  variable: "--font-tetra-black",
});

// Other fonts
export const zaidner = localFont({
  src: "../fonts/zaidner/Zaidner_Font-Regular.ttf",
  variable: "--font-zaidner",
});

export const franksi = localFont({
  src: "../fonts/franksi/Franksi_Font-02.ttf",
  variable: "--font-franksi",
});

export const franksiMonoink = localFont({
  src: "../fonts/franksi-monoink/Franksi_Monoink-02.otf",
  variable: "--font-franksi-monoink",
});

// Hemar Pere (Zavat Halav) font weights
const hemarPereLight = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Light.otf",
  variable: "--font-hemar-pere-light",
});

const hemarPereRegular = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Regular.otf",
  variable: "--font-hemar-pere-regular",
});

const hemarPereMedium = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Medium.otf",
  variable: "--font-hemar-pere-medium",
});

const hemarPereSemiBold = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-SemiBold.otf",
  variable: "--font-hemar-pere-semibold",
});

const hemarPereBold = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Bold.otf",
  variable: "--font-hemar-pere-bold",
});

const hemarPereBlack = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Black.otf",
  variable: "--font-hemar-pere-black",
});

// Maccabiah23 font weights
const maccabiahRegular = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-Regular.ttf",
  variable: "--font-maccabiah-regular",
});

const maccabiahRegularNarrow = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-RegularNarrow.ttf",
  variable: "--font-maccabiah-regular-narrow",
});

const maccabiahMedium = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-Medium.ttf",
  variable: "--font-maccabiah-medium",
});

const maccabiahMediumNarrow = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-MediumNarrow.ttf",
  variable: "--font-maccabiah-medium-narrow",
});

const maccabiahDemiBold = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-DemiBold.ttf",
  variable: "--font-maccabiah-demibold",
});

const maccabiahDemiBoldNarrow = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-DemiBoldNarrow.ttf",
  variable: "--font-maccabiah-demibold-narrow",
});

const maccabiahBold = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-Bold.ttf",
  variable: "--font-maccabiah-bold",
});

const maccabiahBoldNarrow = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-BoldNarrow.ttf",
  variable: "--font-maccabiah-bold-narrow",
});

const maccabiahUltraBold = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-UltraBold.ttf",
  variable: "--font-maccabiah-ultrabold",
});

const maccabiahUltraBoldNarrow = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-UltraBoldNarrow.ttf",
  variable: "--font-maccabiah-ultrabold-narrow",
});

// Group fonts into objects for easier access
export const argazimFonts = {
  regular: argazimRegular,
  regularItalic: argazimRegularItalic,
  medium: argazimMedium,
  mediumItalic: argazimMediumItalic,
  bold: argazimBold,
  boldItalic: argazimBoldItalic,
  black: argazimBlack,
  blackItalic: argazimBlackItalic,
};

export const emulsiFonts = {
  light: emulsiLight,
  regular: emulsiRegular,
  medium: emulsiMedium,
  bold: emulsiBold,
  black: emulsiBlack,
  variable: emulsiVariable,
};

export const tetraFonts = {
  regular: tetraRegular,
  bold: tetraBold,
  black: tetraBlack,
};

export const maccabiahFonts = {
  regular: maccabiahRegular,
  regularNarrow: maccabiahRegularNarrow,
  medium: maccabiahMedium,
  mediumNarrow: maccabiahMediumNarrow,
  demiBold: maccabiahDemiBold,
  demiBoldNarrow: maccabiahDemiBoldNarrow,
  bold: maccabiahBold,
  boldNarrow: maccabiahBoldNarrow,
  ultraBold: maccabiahUltraBold,
  ultraBoldNarrow: maccabiahUltraBoldNarrow,
};

export const hemarPereFonts = {
  light: hemarPereLight,
  regular: hemarPereRegular,
  medium: hemarPereMedium,
  semiBold: hemarPereSemiBold,
  bold: hemarPereBold,
  black: hemarPereBlack,
};

// Main display fonts (using the black/bold weight for each family)
export const argazim = argazimBlack;
export const emulsi = emulsiBlack;
export const tetra = tetraBlack;
export const maccabiah = maccabiahUltraBold;
export const hemarPere = hemarPereBlack;

export const fontMap = {
  argazim,
  emulsi,
  tetra,
  maccabiah,
  zaidner,
  franksi,
  franksiMonoink,
  hemarPere,
} as const;
