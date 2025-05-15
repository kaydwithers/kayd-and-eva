import { OurStory } from "./components/OurStory/OurStory";
import { Seating } from "./components/Seating/Seating";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-y-48 p-12 lg:p-48">
        <h1 className="text-4xl">Kayd and Eva</h1>

        <OurStory />

        <Seating />
      </div>
    </div>
  );
}
