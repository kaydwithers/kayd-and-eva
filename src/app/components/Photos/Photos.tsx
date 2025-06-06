"use client";

import { useState } from "react";
import { Heading } from "../Heading/Heading";
import { Tabs } from "../Tabs/Tabs";

const TABS = {
  PHOTOS: "photos",
  PHOTOBOOTH: "photobooth",
};

const tabs = [
  {
    id: TABS.PHOTOS,
    label: "Photos",
  },
  {
    id: TABS.PHOTOBOOTH,
    label: "Photobooth",
  },
];

export const Photos = () => {
  const [activeTab, setActiveTab] = useState(TABS.PHOTOS);

  const handlePress = (next: string) => {
    setActiveTab(next);
  };

  return (
    <div className="flex flex-col">
      <Heading>Photos</Heading>

      <div className="flex flex-col gap-y-12">
        <Tabs activeTab={activeTab} tabs={tabs} onPress={handlePress} />

        <div className="">
          {activeTab === TABS.PHOTOS && (
            <div>
              <p>
                Check back soon—we&apos;ll upload wedding photos here once
                they&apos;re ready.
              </p>
            </div>
          )}

          {activeTab === TABS.PHOTOBOOTH && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Instructions</h4>

              <ul className="list-decimal pl-6 flex flex-col gap-y-4">
                <li>
                  With the supplied camera, use the <strong>Camera</strong> app
                  to take a photo.
                </li>
                <li>
                  When you are happy with your photo, open the{" "}
                  <strong>Link WIDE</strong> app.
                </li>
                <li>
                  In the Link WIDE app, select <strong>Simple Print</strong>,
                  choose your photo, and press the print icon.
                </li>
                <li>
                  If the printer runs out of paper, you can try replacing the
                  film roll. If it&apos;s too tricky, feel free to ask Kayd or
                  Eva for help.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
