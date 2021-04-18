import React from "react";

const RA_tab = () => {
  const [openTab, setOpenTab] = React.useState(0);
  return (
    <>
      <div class="flex-1 flex block">
        <nav class="fixed bg-blue-600 w-64 h-screen">
          <div class="mt-10 mb-4">
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
              <a
                className={
                  openTab === 1 ? "text-cream font-bold" : "text-blue-100"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
              >
                <span class="ml-2">Key Partners</span>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
              <a
                className={
                  openTab === 2 ? "text-cream font-bold" : "text-blue-100"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
              >
                <span class="ml-2">Key Activities</span>
              </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg">
              <a
                className={
                  openTab === 3 ? "text-cream font-bold" : "text-blue-100"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
              >
                <span class="ml-2">Dashboard</span>
              </a>
            </li>
          </div>
        </nav>

        <div className="pb-4 py-5">
          <div class="relative ml-72 py-2 flex-row justify-between">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <span>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </span>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br /> Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <RA_tab />;
    </>
  );
}
