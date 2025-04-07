import { FontDetails, FontListItem } from "./FontListItem";

export interface FontListProps {
  fonts: FontDetails[];
  className?: string;
}

export default function FontList({ fonts, className = "" }: FontListProps) {
  return (
    <section
      className={`min-h-screen w-full overflow-x-hidden py-16 ${className}`}
    >
      <div className="container mx-auto">
        <div className="space-y-8">
          {fonts.map((font, index) => (
            <div key={font.name}>
              <FontListItem font={font} />
              {index < fonts.length - 1 && (
                <div className="mt-8 h-px w-full bg-neutral-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
