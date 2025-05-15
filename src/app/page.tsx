import { OurStory } from "./components/OurStory/OurStory";
import { Seating } from "./components/Seating/Seating";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="mb-32">
        <h1>Kayd and Eva</h1>
      </div>

      <OurStory />

      <Seating />
    </div>
  );
}
