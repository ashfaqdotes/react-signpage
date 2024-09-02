import { initFlowbite } from "flowbite";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
export default function Tabsmenu() {
  return (
    <>
      <div className="flex justify-center mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="sign-up-tab"
              data-tabs-target="#sign-up"
              type="button"
              role="tab"
              aria-controls="sign-up"
              aria-selected="false"
            >
              Sign Up
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="sign-in-tab"
              data-tabs-target="#sign-in"
              type="button"
              role="tab"
              aria-controls="sign-in"
              aria-selected="false"
            >
              Sign In
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="sign-up"
          role="tabpanel"
          aria-labelledby="sign-up-tab"
        >
          <SignUp />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="sign-in"
          role="tabpanel"
          aria-labelledby="sign-in-tab"
        >
          <SignIn />
        </div>
      </div>
    </>
  );
}
