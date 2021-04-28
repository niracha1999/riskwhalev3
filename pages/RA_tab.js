import React from "react";
import { MainMenu } from "../components/MainMenu";

import { TrashIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

const RA_tab = () => {
  const [openTab, setOpenTab] = React.useState(0);

  const [keypartners_inputFields, keypartners_setInputFields] = React.useState([
    {
      id: uuidv4(),
      typeofrisk: "",
      risk: "",
      financialrisk: "",
      healthrisk: "",
      naturalrisk: "",
      socialrisk: "",
      governmentrisk: "",
      legalrisk: "",
      likelihood: "",
      acceptance: "",
    },
  ]);

  const addRisk = () => {
    keypartners_setInputFields([
      ...keypartners_inputFields,
      {
        id: uuidv4(),
        typeofrisk: "",
        risk: "",
        financialrisk: "",
        healthrisk: "",
        naturalrisk: "",
        socialrisk: "",
        governmentrisk: "",
        legalrisk: "",
        likelihood: "",
        acceptance: "",
      },
    ]);
  };

  const onChange = (id, event) => {
    const keypartners_newInputFields = keypartners_inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    keypartners_setInputFields(keypartners_newInputFields);
  };

  const removeField = (id) => {
    const values = [...keypartners_inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    keypartners_setInputFields(values);
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

            <div className="pb-4 py-5">
              <div class="ml-64 py-2 flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <span>
                    <div className="md:col-span-1 pl-14">
                      <div className=" sm:px-0">
                        <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                          Key Partners
                        </h3>
                        <p className="mt-1 text-sm text-blue-800">
                          (input from user)
                        </p>
                      </div>
                    </div>
                    {keypartners_inputFields.map((keypartners_inputField) => (
                      <div
                        key={keypartners_inputField.id}
                        className="md:mt-0 md:col-span-2"
                      >
                        <div className="relative my-14 w-full mx-36 shadow sm:rounded-md sm:overflow-hidden">
                          <div className="py-5 bg-white space-y-6 sm:p-6">
                            <div className="w-full grid grid-cols-3 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="typeofrisk"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Type of Risk
                                </label>
                                <select
                                  id="typeofrisk"
                                  name="typeofrisk"
                                  autoComplete="typeofrisk"
                                  placeholder="choose one"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.typeofrisk}
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option>Strategy Risk</option>
                                  <option>Operational Risk</option>
                                  <option>Financial Risk</option>
                                  <option>Compliance Risk</option>
                                </select>
                              </div>
                              <div className="col-span-3 sm:col-span-2">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-blue-800"
                                >
                                  Risk
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <textarea
                                    onChange={(event) =>
                                      onChange(keypartners_inputField.id, event)
                                    }
                                    value={keypartners_inputField.risk}
                                    type="text"
                                    name="risk"
                                    id="risk"
                                    autoComplete="risk"
                                    required
                                    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder=" identify a risk"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block pb-2 text-sm font-medium text-blue-800"
                              >
                                Impacts
                              </label>

                              <div className="rounded-md shadow-sm pb-2">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Financial
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.financialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Health and safety
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.healthrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Natural environment
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.naturalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Social / Cultutal Heritage
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.socialrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Government / Reputation
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.governmentrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                              <div className="pb-2 rounded-md shadow-sm ">
                                <label
                                  htmlFor="financial"
                                  for="financial"
                                  className="pt-4 pr-6 text-sm font-medium text-blue-600"
                                >
                                  Legal
                                </label>

                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Least Impact
                                </label>
                                <input
                                  type="range"
                                  min="1"
                                  max="5"
                                  step="1"
                                  list="steplist"
                                  className="mx-5 text-blue-400"
                                  color="blue"
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.legalrisk}
                                />
                                <datalist
                                  id="steplist"
                                  className="text-blue-400"
                                >
                                  <option label="1">1</option>
                                  <option label="2">2</option>
                                  <option label="3">3</option>
                                  <option label="4">4</option>
                                  <option label="5">5</option>
                                </datalist>
                                <label className="pt-4 text-xs font-medium text-gray-400">
                                  Most Impact
                                </label>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                              <label
                                htmlFor="likelihood"
                                className="block text-sm font-medium text-blue-800"
                              >
                                Likelihood
                              </label>
                              <div className="h-6 w-3/12 mt-1 flex rounded-md shadow-sm ">
                                <select
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.likelihood}
                                  id="likelihood"
                                  name="likelihood"
                                  placeholder="choose one"
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option>Improbable</option>
                                  <option>Remote</option>
                                  <option>Occasional</option>
                                  <option>Probable</option>
                                  <option>Frequent</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="typeofrisk"
                                className="block text-sm font-medium text-blue-800"
                              >
                                Level of Acceptance
                              </label>
                              <div className="h-6 w-3/12 mt-1 flex rounded-md shadow-sm ">
                                <select
                                  onChange={(event) =>
                                    onChange(keypartners_inputField.id, event)
                                  }
                                  value={keypartners_inputField.acceptance}
                                  id="typeofrisk"
                                  name="typeofrisk"
                                  autoComplete="typeofrisk"
                                  className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option>Desirable</option>
                                  <option>Acceptable</option>
                                  <option>Undesirable</option>
                                  <option>Unacceptable</option>
                                  <option>Catastrophic</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <button
                            disabled={keypartners_inputFields.length === 1}
                            onClick={() =>
                              removeField(keypartners_inputField.id)
                            }
                            className="items-self-center relative"
                          >
                            <TrashIcon
                              className="h-5 w-5 text-red-500 group-hover:text-red-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={addRisk}
                            className="justify-self-center mt-2 text-sm inline-flex py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            add more risk
                          </button>
                        </div>
                      </div>
                    ))}
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
      <RA_tab />;
    </>
  );
}
