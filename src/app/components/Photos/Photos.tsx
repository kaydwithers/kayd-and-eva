import { useState } from "react";

const TABS = {
  PHOTOS: "photos",
  PHOTOBOOTH: "photobooth",
};

export const Photos = () => {
  const [activeTab, setActiveTab] = useState(TABS.PHOTOS);

  const handlePress = (next: string) => {
    setActiveTab(next);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-32">Photos</h2>

      <div className="flex flex-col gap-y-48">
        <ul className="flex">
          <li className="p-24">
            <button onClick={() => handlePress(TABS.PHOTOS)}>Photos</button>
          </li>
          <li className="p-24">
            <button onClick={() => handlePress(TABS.PHOTOBOOTH)}>
              Photobooth
            </button>
          </li>
        </ul>

        <div className="grid grid-cols-10 text-center">
          {activeTab === TABS.PHOTOS && <>Photos</>}
          {activeTab === TABS.PHOTOBOOTH && <>Photobooth</>}
        </div>
      </div>
    </div>
  );
};
