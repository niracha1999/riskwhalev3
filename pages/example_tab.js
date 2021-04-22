import React from "react";
import { MainMenu } from "../components/MainMenu";

import { TrashIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

const example_tab = () => {
  const [openTab, setOpenTab] = React.useState(0);

  const [normal_inputActivities, normal_setInputActivities] = React.useState([
    {
      id: uuidv4(),
      activity: "",
      resources: [],
    },
  ]);

  const normal_onActivityChange = (aid, event) => {
    const normal_newInputActivities = normal_inputActivities.map((i) => {
      if (aid === i.id) {
        return { ...i, [event.target.name]: event.target.value };
      }
      return i;
    });

    normal_setInputActivities(normal_newInputActivities);
  };
  const normal_addActivity = () => {
    normal_setInputActivities([
      ...normal_inputActivities,
      {
        id: uuidv4(),
        activity: "",
        resources: [],
      },
    ]);
  };

  const normal_removeActivity = (aid) => {
    const values = [...normal_inputActivities];
    values.splice(
      values.findIndex((value) => value.id === aid),
      1
    );
    normal_setInputActivities(values);
  };

  const normal_addResource = (aid) => {
    const normal_newInputActivities = normal_inputActivities.map((i) => {
      if (i.id === aid) {
        return {
          ...i,
          resources: [
            ...i.resources,
            {
              id: uuidv4(),
              resource_name: "",
              typeofresource: "",
              amount: "",
            },
          ],
        };
      }
      return i;
    });
    normal_setInputActivities(normal_newInputActivities);
  };
  const normal_onResourceChange = (aid, rid, event) => {
    const normal_newInputActivities = normal_inputActivities.map((resource) => {
      if (i.id === aid) {
        return {
          ...i,
          resources: i.resources.map((resource) => {
            if (resource.id === rid) {
              return { ...resource, [event.target.name]: event.target.value };
            }
            return resource;
          }),
        };
      }
      return i;
    });

    normal_setInputActivities(normal_newInputActivities);
  };

  const normal_removeResource = (id) => {
    const values = [...normal_inputResources];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    normal_setInputResources(values);
  };
  return (
    <div>
      <MainMenu />
      <>
        <div className="pt-20">
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
                    <span class="ml-2">Value Propositions</span>
                  </a>
                </li>
              </div>
            </nav>

            <div className="pb-4 py-12">
              <div class="ml-64 py-2 flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Business Operation
                        </h3>
                        <p className="mt-1 text-1xl font-semibold text-red-800">
                          Normal Situation
                        </p>
                      </div>
                    </div>

                    <div className="relative w-full grid grid-cols-6 gap-4">
                      <div className="mt-6 col-start-3 col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-blue-800"
                        >
                          Objective of Operation
                        </label>
                        <div className="h-6 w-5/6 mt-1 flex rounded-md shadow-sm">
                          <input
                            id="likelihood"
                            name="objective"
                            type="text"
                            required
                            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder=" Bake 200 cakes"
                          />
                          <label className="block text-sm pl-2 font-medium text-blue-800">
                            per day
                          </label>
                        </div>
                      </div>
                    </div>
                    {normal_inputActivities.map((normal_inputActivity) => (
                      <div
                        key={normal_inputActivity.id}
                        className="md:mt-0 md:col-span-2"
                      >
                        <div className="relative my-4 w-full mx-14 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="py-5 bg-white space-y-6 sm:p-6">
                            <div>
                              <label className="block pb-2 text-sm font-medium text-blue-800">
                                Activity
                              </label>
                              <input
                                id="activity"
                                name="activity"
                                type="text"
                                required
                                className="w-3/5 focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder=" Prepare ingredients"
                                onChange={(event) =>
                                  normal_onActivityChange(
                                    normal_inputActivity.id,
                                    event
                                  )
                                }
                                value={normal_inputActivity.activity}
                              />
                            </div>
                            {normal_inputActivity.resources.map(
                              (normal_inputResource, ri) => (
                                <div class="flex" key={ri}>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                    <label
                                      htmlFor="resource"
                                      className="block text-sm font-medium text-blue-800"
                                    >
                                      Resource #{ri + 1}
                                    </label>
                                    <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                                      <input
                                        id="resource"
                                        name="resource"
                                        type="text"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder=" Baking Ingredients"
                                        onChange={(event) =>
                                          normal_onResourceChange(
                                            normal_inputActivity.id,
                                            normal_inputResource.id,
                                            event
                                          )
                                        }
                                        value={
                                          normal_inputResource.resource_name
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                    <label
                                      htmlFor="typeofresource"
                                      className="block text-sm font-medium text-blue-800"
                                    >
                                      Type of Resource
                                    </label>
                                    <div className="h-6 w-64 mt-1 mr-4 flex rounded-md shadow-sm ">
                                      <input
                                        id="typeofresource"
                                        name="typeofresource"
                                        type="text"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder=" Raw Materials"
                                        onChange={(event) =>
                                          normal_onResourceChange(
                                            normal_inputActivity.id,
                                            normal_inputResource.id,
                                            event
                                          )
                                        }
                                        value={
                                          normal_inputResource.typeofresource
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                    <label
                                      htmlFor="amount"
                                      className="block text-sm font-medium text-blue-800"
                                    >
                                      Amount
                                    </label>
                                    <div className="h-6 w-48 mt-1 flex rounded-md shadow-sm ">
                                      <input
                                        id="amount"
                                        name="amount"
                                        type="text"
                                        required
                                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder=" Flour 30 bags"
                                        onChange={(event) =>
                                          normal_onResourceChange(
                                            normal_inputActivity.id,
                                            normal_inputResource.id,
                                            event
                                          )
                                        }
                                        value={normal_inputResource.amount}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                    <button
                                      onClick={normal_addResource}
                                      className="items-self-center relative"
                                    >
                                      <PlusCircleIcon
                                        className="h-6 w-6 mt-7 ml-4 mr-2 text-green-600 group-hover:text-green-400"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      disabled={
                                        normal_inputResources.length === 1
                                      }
                                      onClick={() =>
                                        normal_removeResource(
                                          normal_inputActivity.id,
                                          normal_inputResource.id
                                        )
                                      }
                                      className="items-self-center relative"
                                    >
                                      <TrashIcon
                                        className="h-6 w-6 text-red-500 group-hover:text-red-400"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-center mb-12">
                      <button
                        onClick={normal_addActivity}
                        className="justify-self-center mt-2 text-sm inline-flex py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        add activity
                      </button>
                      <button
                        disabled={normal_inputActivities.length === 1}
                        onClick={normal_removeActivity}
                        className="justify-self-center mt-2 text-sm inline-flex py-2 mx-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        delete activity
                      </button>
                    </div>
                  </span>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default function TabsRender() {
  return (
    <>
      <example_tab />;
    </>
  );
}