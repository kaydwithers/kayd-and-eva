"use client";

import { useState } from "react";
import { Heading } from "../Heading/Heading";
import { Tabs } from "../Tabs/Tabs";

const TABS = {
  FOOD: "food",
  DRINKS: "drinks",
};

const tabs = [
  {
    id: TABS.FOOD,
    label: "Food",
  },
  {
    id: TABS.DRINKS,
    label: "Drinks",
  },
];

export const Menu = () => {
  const [activeTab, setActiveTab] = useState(TABS.FOOD);

  const handlePress = (next: string) => {
    setActiveTab(next);
  };

  return (
    <div className="flex flex-col">
      <Heading>Menu</Heading>

      <div className="flex flex-col gap-y-12">
        <Tabs activeTab={activeTab} tabs={tabs} onPress={handlePress} />

        <div className="">
          {activeTab === TABS.FOOD && (
            <div className="flex flex-col gap-y-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">Canapes</h4>
                <ul className="flex flex-col gap-y-4">
                  <li>
                    🦪 Fresh Oyster, Finger Lime Mignonette Kangaroo Pastrami,
                  </li>
                  <li>
                    🌭 Cucumber, Orange Gel Beef Brisket, Steamed Bun, BBQ
                    Sauce,
                  </li>
                  <li>
                    🍗 Mustard, Pickles Korean Fried Chicken Bites, Confit
                    Garlic Mayo
                  </li>
                  <li>🍩 Doughnut, Passionfruit Curd, Berry Gel</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Shared Course</h4>
                <ul className="flex flex-col gap-y-4">
                  <li>
                    🐟 Confit Barramundi Fillet, Fermented Wombok, Corn Salsa,
                    Ginger &
                  </li>
                  <li>
                    🍗 Coconut Cream Maple Glazed Chicken Breast, Beetroot,
                    Shiso
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Sides</h4>
                <ul className="flex flex-col gap-y-4">
                  <li>🥔 Baked Potatoes, Miso & Chive Vinaigrette</li>
                  <li>🥬 Roast Cabbage, Ajo Blanco, Chilli Oil</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Desserts</h4>
                <ul className="flex flex-col gap-y-4">
                  <li>
                    🍫 Chocolate Cremeux, Yoghurt Foam, Salted Caramel, Choc
                    Cookie or
                  </li>
                  <li>
                    🥭 Spiced Mango Mille-feuille, Ganache, Cardamom Ice Cream
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Late Night Snack</h4>
                <ul className="flex flex-col gap-y-4">
                  <li>🥯 Savory Lokma Doughnut, Taramasalata, Dukkah</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === TABS.DRINKS && (
            <div className="flex flex-col gap-y-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">White Wine</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    2023, Crabtree ‘Watervale’, Riesling, Clare Valley, SA 2021,
                  </li>
                  <li>Endless, Pinot Grigio, King Valley, VIC</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Red Wine</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    2022, Trentham Estate, Pinot Noir, Murray Darling, VIC 2021,
                  </li>
                  <li>Devocion, Malbec, Mendoza, ARG</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Sparkling</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    Angel in the Room, Prosecco, Glera, Murray Valley, NSW
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Beers</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    Panama Draught, VIC Moondog, “Old Mate”, Pale Ale, VIC
                    Hawker’s
                  </li>
                  <li>
                    IPA, VIC La Sirene Czech Pilsner, VIC Kaiju Krush, Tropical
                    Ale,
                  </li>
                  <li>VIC Prickly Moses Otway Light Beer</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Ciders</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    Monteith’s Apple Cider, NZ Kaiju Golden Axe Apple Cider, VIC
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Non-Alcoholic</h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>
                    Plus and Minus Wines: Prosecco, Pinot Grigio, Shiraz Bridge
                    Road
                  </li>
                  <li>Brewers Free Time Pale Ale Sangria ‘G&T’</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Non-Alcoholic Spirits
                </h4>
                <ul className="list-disc pl-6 flex flex-col gap-y-4">
                  <li>Soft Drinks Juices Tea and Coffee</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
