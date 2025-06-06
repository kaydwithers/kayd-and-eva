"use client";

import { useState } from "react";
import { Heading } from "../Heading/Heading";

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
      <Heading>Photos</Heading>

      <div className="flex flex-col gap-y-12">
        <ul className="flex">
          <li>
            <button
              className={`py-4 px-6 border-b ${
                activeTab === TABS.PHOTOS
                  ? "border-white"
                  : "border-transparent"
              }`}
              onClick={() => handlePress(TABS.PHOTOS)}
            >
              Photos
            </button>
          </li>

          <li>
            <button
              className={`py-4 px-6 border-b ${
                activeTab === TABS.PHOTOBOOTH
                  ? "border-white"
                  : "border-transparent"
              }`}
              onClick={() => handlePress(TABS.PHOTOBOOTH)}
            >
              Photobooth
            </button>
          </li>
        </ul>

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
              <p className="mb-6">Instructions</p>

              <ul className="list-decimal pl-6 flex flex-col gap-y-4">
                <li>
                  With the supplied camera, use the camera app to take a photo.
                </li>
                <li>
                  When you are happy with your photo, open the Link WIDE app.
                </li>
                <li>
                  In the Link WIDE app, select <strong>Simple Print</strong>,
                  choose your photo, and press the print button.
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
