import { Menu } from "./components/Menu/Menu";
import { OurStory } from "./components/OurStory/OurStory";
import { Photos } from "./components/Photos/Photos";
import { Seating } from "./components/Seating/Seating";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-y-48 p-8 lg:p-24">
        <h1 className="text-4xl">Kayd and Eva</h1>

        <OurStory />

        <Photos />

        <Menu />

        <Seating />
      </div>
    </div>
  );
}
