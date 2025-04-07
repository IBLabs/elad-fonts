import { fontMap } from "@/config/fonts";

export interface FontDetails {
  id: string;
  name: string;
  weights: number;
  styles: number;
  previewText?: string;
}

export interface FontListItemProps {
  font: FontDetails;
  className?: string;
}

export function FontListItem({ font, className = "" }: FontListItemProps) {
  const { id, name, weights, styles, previewText = name } = font;
  const fontConfig = fontMap[id as keyof typeof fontMap];

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className={`text-5xl md:text-7xl mb-4 ${fontConfig.className}`}>
        {previewText}
      </div>
      <div className="text-sm text-muted-foreground">
        {name} / {weights} משקלים / {styles} סגנונות
      </div>
    </div>
  );
}
