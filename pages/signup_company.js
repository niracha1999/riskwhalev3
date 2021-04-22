import { MainMenu } from "../components/MainMenu";

import React, { useState } from "react";

import { TrashIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

const ScrollToPoint1 = () => {
  window.scrollTo({
    top: 490,
    behavior: "smooth",
  });
};

const ScrollToPoint2 = () => {
  window.scrollTo({
    top: 1600,
    behavior: "smooth",
  });
};

const signup_company = () => {
  const [inputFields, setInputFields] = useState([{ id: uuidv4(), dept: "" }]);
  const [email, setEmail] = useState("");

  const addField = () => {
    setInputFields([...inputFields, { id: uuidv4(), dept: "" }]);
  };

  const onChange = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const removeField = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <div>
      <MainMenu />

      <>
        <div className="pt-40 px-14">
          <h1 className="text-center text-lg text-5xl font-bold leading-6 text-blue-800">
            Company Registration
          </h1>
        </div>
        <div className="pt-24 px-14">
          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div className="md:col-span-1 px-14">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                  Account
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  Account information will be used for authentication.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Email address
                      </label>
                      <div className="mt-1 w-6/12 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          required
                          className="focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder=" ex. riskwhale@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-blue-800"
                    >
                      Password
                    </label>
                    <div className="h-6 w-6/12 mt-1 flex rounded-md shadow-sm ">
                      <input
                        id="password"
                        name="password"
                        autoComplete="password"
                        required
                        className=" focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder=" password must have at least 8 characters"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password2"
                      className="block text-sm font-medium text-blue-800"
                    >
                      Re-type Password
                    </label>
                    <div className="h-6 w-6/12 mt-1 flex rounded-md shadow-sm ">
                      <input
                        id="password2"
                        name="password2"
                        type="password"
                        autoComplete="password2"
                        required
                        className=" focus:ring-blue-500 focus:border-blue-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder=" type password again to confirm"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={ScrollToPoint1}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0 px-14">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 px-14">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                  Company Information
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  Fill-in company name and busienss model canvas for further
                  use. The business model canvas will be saved with other
                  account information.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="companyname"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <legend className="block text-sm font-medium text-blue-800 leading-9">
                        Business Model Canvas
                      </legend>
                      <label
                        htmlFor="keypartners"
                        className="block text-sm font-medium text-blue-700 pt-4"
                      >
                        Key Partners
                      </label>
                      <textarea
                        type="text"
                        name="keypartners"
                        id="keypartners"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="keyactivities"
                        className="block text-sm font-medium text-blue-700"
                      >
                        Key Activities
                      </label>
                      <textarea
                        type="text"
                        name="keyactivities"
                        id="keyactivities"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="keyresources"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Key Resources
                      </label>
                      <textarea
                        type="text"
                        name="keyresources"
                        id="keyresources"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="valuepropositions"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Value Propositions
                      </label>
                      <textarea
                        type="text"
                        name="valuepropositions"
                        id="valuepropositions"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="customerrelationships"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Customer Relationships
                      </label>
                      <textarea
                        type="text"
                        name="customerrelationships"
                        id="customerrelationships"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="channels"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Channels
                      </label>
                      <textarea
                        type="text"
                        name="channels"
                        id="channels"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="customersegments"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Customer Segments
                      </label>
                      <textarea
                        type="text"
                        name="customersegments"
                        id="customersegments"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="coststructure"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Cost Structure
                      </label>
                      <textarea
                        type="text"
                        name="coststructure"
                        id="coststructure"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <label
                        htmlFor="revenuestreams"
                        className="block text-sm font-medium text-blue-700 pt-2"
                      >
                        Revenue Streams
                      </label>
                      <textarea
                        type="text"
                        name="revenuestreams"
                        id="revenuestreams"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-blue-800"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-blue-800"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={ScrollToPoint2}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0 px-14" id="scroller">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 px-14">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                  List of Functional Areas
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  Decide which communications you'd like to receive and how.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      List functional areas in order
                    </legend>
                    {inputFields.map((inputField) => (
                      <div className="mt-4 space-y-4" key={inputField.id}>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              className="mt-1 h-5 focus:ring-blue-500 focus:border-blue-500 block w-96 shadow-sm sm:text-sm border-gray-300 rounded-md"
                              onChange={(event) =>
                                onChange(inputField.id, event)
                              }
                              name="dept"
                              value={inputField.dept}
                              type="text"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <button
                              disabled={inputFields.length === 1}
                              onClick={() => removeField(inputField.id)}
                            >
                              <TrashIcon
                                className="h-5 w-5 text-red-500 group-hover:text-red-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addField}
                      className="mt-4 text-sm inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      add more area
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0 px-14">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1 px-14">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-10 text-blue-800">
                  Information Confirmation
                </h3>
                <p className="mt-1 text-sm text-blue-800">
                  Fill-in company name and busienss model canvas for further
                  use. The business model canvas will be saved with other
                  account information.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="companyname"
                        className="block text-sm font-medium text-blue-800"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-start mt-14">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Confirm
                      </label>
                      <p className="text-gray-500">
                        I confirm that the information provided is true.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
          <button className=" w-56 inline-flex justify-center my-24 px-4 p-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Register
          </button>
        </div>
      </>
    </div>
  );
};

export default signup_company;
