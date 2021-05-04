import React, { useState, useEffect } from "react";
import { MainMenu } from "../components/MainMenu";
import axios from "axios";

import { TrashIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

const BIA_summary = () => {
  const [openTab, setOpenTab] = React.useState(0);
  const [data, setData] = useState({ areas: [] });

  useEffect(() => {
    if (localStorage.usertype == "company") {
      console.log("company user identified");
      getCompDetails();
    } else if (localStorage.usertype == "individual") {
      console.log("individual user identified");
      getIndDetails();
    } else {
      console.log("invalid type of user");
    }
  }, []);
  const getIndDetails = async () => {
    const result = await axios.get(
      "http://api-riskwhale.herokuapp.com/userinfo/ind/" +
        localStorage.user +
        "?business=" +
        localStorage.businesstype,

      {
        headers: {
          "auth-token": localStorage.token,
        },
      }
    );

    console.log(result.data.functionaldepartments);
    setData({
      areas: result.data.functionaldepartments,
    });
  };

  const getCompDetails = async () => {
    const user = localStorage.user;

    const result = await axios.get(
      "http://api-riskwhale.herokuapp.com/userinfo/company" + user
    );

    console.log(result.data.functionaldepartments);
    setData({
      areas: result.data.functionaldepartments,
    });
  };

  const [activities, setActivities] = useState([
    {
      id: uuidv4(),
      activity: "",
      resources: [{ name: "", typeofresource: "", amount: "" }],
    },
  ]);

  const [emer_activities, emer_setActivities] = useState([
    {
      id: uuidv4(),
      emer_activity: "",
      emer_resources: [{ name: "", typeofresource: "", amount: "" }],
    },
  ]);

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
                    <span class="ml-2">Overall Summary</span>
                  </a>
                </li>
                {data.areas.map((area) => (
                  <li
                    key={area._id}
                    class="mb-2 px-4 py-4 text-gray-100 flex flex-row hover:text-blue-800  hover:bg-blue-300  hover:font-bold rounded rounded-lg"
                  >
                    <a
                      className={
                        openTab === area._id
                          ? "text-cream font-bold"
                          : "text-blue-100"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(area._id);
                      }}
                      data-toggle="tab"
                      href={area._id}
                    >
                      <span class="ml-2">{area.name}</span>
                    </a>
                  </li>
                ))}
              </div>
            </nav>

            <div className="pb-4 py-12">
              <div class="ml-64 py-2 flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <span>
                    <div className="text-center md:col-span-1 pl-14 mt-6">
                      <div className="sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Overall Summary
                        </h3>
                      </div>
                      <div className="sm:px-0 mt-8">
                        <h3 className="text-base font-semibold leading-10 text-blue-700">
                          Based on your input Maximum Tolerable Period of
                          Disruption and Recovery Time Objective.
                        </h3>
                      </div>
                    </div>

                    <div className="md:mt-0 md:col-span-2">
                      <div className="relative my-14 w-6/12 mx-64 shadow sm:rounded-md sm:overflow-hidden">
                        <div className="text-center py-5 bg-white space-y-6 sm:p-6">
                          <div>
                            <label className="text-base font-medium text-blue-800">
                              Your company should start to recover after 7 days,
                              <br />
                              and no longer than 50 days
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                {data.areas.map((area) => (
                  <div key="area._id" class="ml-14 py-2 flex-col">
                    <div
                      className={openTab === area._id ? "block" : "hidden"}
                      id={area._id}
                    >
                      <span>
                        <div className="relative my-8 w-6/12 mx-64 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="text-center py-5 bg-white space-y-6 sm:p-6">
                            <div>
                              <label className="text-base font-medium text-blue-800">
                                Your company should start to recover after 7
                                days,
                                <br />
                                and no longer than 50 days
                              </label>
                            </div>
                          </div>
                        </div>

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
                            <label className="block text-sm font-medium text-blue-800">
                              Objective of Operation
                            </label>
                            <div className="h-6 w-7/12 mt-1 flex rounded-md shadow-sm">
                              <label
                                id="objective"
                                name="objective"
                                type="text"
                                className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                              >
                                Bake 100 cakes
                              </label>
                              <label className="block text-sm pl-2 font-medium text-blue-800">
                                per day
                              </label>
                            </div>
                          </div>
                        </div>
                        {activities.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex md:mt-0 md:col-span-2"
                          >
                            <div className="relative my-4 w-full mx-14 shadow sm:rounded-md sm:overflow-hidden">
                              <div className="py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                  <label className="block pb-2 text-sm font-medium text-blue-800">
                                    Activity
                                  </label>
                                  <label
                                    id="objective"
                                    name="objective"
                                    type="text"
                                    className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  >
                                    Prepare ingredients
                                  </label>
                                </div>
                                {activity.resources.map((resource, ri) => (
                                  <div className="flex">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                      <label
                                        htmlFor="resource"
                                        className="block text-sm font-medium text-blue-800"
                                      >
                                        Resource
                                      </label>
                                      <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          flour
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          raw ingredients
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          30 bags
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                {activity.resources.map((resource, ri) => (
                                  <div className="flex">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                      <label
                                        htmlFor="resource"
                                        className="block text-sm font-medium text-blue-800"
                                      >
                                        Resource
                                      </label>
                                      <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          butter
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          raw ingredients
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          2 bottles
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </span>
                      <span>
                        <div className="md:col-span-1 pl-14">
                          <div className="mt-4 sm:px-0">
                            <p className="mt-1 text-1xl font-semibold text-red-800">
                              Emergency Situation
                            </p>
                          </div>
                        </div>
                        <div className="relative w-full grid grid-cols-6 gap-4">
                          <div className="mt-6 col-start-3 col-span-4">
                            <label className="block text-sm font-medium text-blue-800">
                              Objective of Operation
                            </label>
                            <div className="h-6 w-7/12 mt-1 flex rounded-md shadow-sm">
                              <label
                                id="objective"
                                name="objective"
                                type="text"
                                className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                              >
                                Bake 30 cakes
                              </label>
                              <label className="block text-sm pl-2 font-medium text-blue-800">
                                per day
                              </label>
                            </div>
                          </div>
                        </div>
                        {emer_activities.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex md:mt-0 md:col-span-2"
                          >
                            <div className="relative my-4 w-full mx-14 shadow sm:rounded-md sm:overflow-hidden">
                              <div className="py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                  <label className="block pb-2 text-sm font-medium text-blue-800">
                                    Activity
                                  </label>
                                  <label
                                    id="objective"
                                    name="objective"
                                    type="text"
                                    className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  >
                                    Prepare ingredients
                                  </label>
                                </div>
                                {activity.emer_resources.map((resource, ri) => (
                                  <div className="flex">
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                      <label
                                        htmlFor="resource"
                                        className="block text-sm font-medium text-blue-800"
                                      >
                                        Resource
                                      </label>
                                      <div className="h-6 w-80 mt-1 mr-4 flex rounded-md shadow-sm ">
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          Prepare ingredients
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          Prepare ingredients
                                        </label>
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
                                        <label
                                          id="objective"
                                          name="objective"
                                          type="text"
                                          className="flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        >
                                          Prepare ingredients
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
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
      <BIA_summary />;
    </>
  );
}
