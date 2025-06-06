import { Menu } from "./components/Menu/Menu";
import { OurStory } from "./components/OurStory/OurStory";
import { Photos } from "./components/Photos/Photos";
import { Seating } from "./components/Seating/Seating";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-y-16 p-3 lg:p-6 my-16">
        <h1 className="text-4xl">Eva and Kayd 👰🏻‍♀️🤵</h1>

        <OurStory />

        <Photos />

        <Menu />

        <Seating />
      </div>
    </div>
  );
}
