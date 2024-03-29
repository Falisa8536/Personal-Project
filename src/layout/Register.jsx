import { useEffect, useState } from "react";

export default function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register now
          </h2>
        </div>
        
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="ชื่อ-สกุล"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ชื่อ-สกุล
              </label>
              <div className="mt-1">
                <input
                  id="ชื่อ-สกุล"
                  name="ชื่อ-สกุล"
                  type="ชื่อ-สกุล"
                  autoComplete="ชื่อ-สกุล"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sx:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="เบอร์โทร"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  เบอร์โทร
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="เบอร์โทร"
                  name="เบอร์โทร"
                  type="เบอร์โทร"
                  autoComplete="current-เบอร์โทร"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sx:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="Email"
                  name="Email"
                  type="Email"
                  autoComplete="current-Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sx:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sx:leading-6"
                />
              </div>
            </div>

            <div>
              <a
                href="Login"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
