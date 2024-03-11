import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  FaceSmileIcon,
  XMarkIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "ช่อดอกไม้ขนาดเล็ก(1000 - 1999 $)",
    description: "Flowers for you, the one you love",
    href: "Smallbouquet",
    icon: FaceSmileIcon,
  },
  {
    name: "ช่อดอกไม้ขนาดกลาง(1999 - 2500 $)",
    description: "Flowers for you, the one you love",
    href: "#",
    icon: FaceSmileIcon,
  },
  {
    name: "ช่อดอกไม้ขนาดเล็ก(1000 - 1999 $)",
    description: "Flowers for you, the one you love",
    href: "#",
    icon: FaceSmileIcon,
  },
];
const products2 = [
  {
    id: 1,
    name: "Flow M",
    href: "#",
    imageSrc: "img/01.jpeg",
    price: "800฿",
    color: "Red",
  },
  {
    id: 2,
    name: "Flow L",
    href: "#",
    imageSrc: "img/02.jpeg",
    price: "1,300฿",
    color: "white",
  },
  {
    id: 3,
    name: "Flow L",
    href: "#",
    imageSrc: "img/03.jpeg",
    price: "1,000฿",
    color: "Yellow",
  },
  {
    id: 4,
    name: "Flow M",
    href: "#",
    imageSrc: "img/04.jpeg",
    price: "800฿",
    color: "Pink",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <HomeIcon
                className="h-5 w-5 flex-none text-gray-900"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-900"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="promotion"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              โปรโมชั่น
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            ></a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a className="mr-5">091-6428536 </a>
            <a
              href="Login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2"></Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h6 className="text-xl font-bold tracking-tight text-gray-900 text-center">
            ร้านดอกไม้ FLOWER FALLIS บริการรับจัดช่อดอกไม้ <br />
            ส่งดอกไม้ ให้ดอกไม้สื่อแทนความู้สึกดีๆ
            เติมเต็มช่วงเวลาพิเศษให้น่าจดจำยิ่งขึ้นbr{" "}
          </h6>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            สินค้าขายดี
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products2.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
