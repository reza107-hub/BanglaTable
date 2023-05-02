import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../../Styles/Styles.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProbider/AuthProvider";

const navigation = [
  { name: "Home", href: "/" },

  { name: "Blog", href: "/blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block hover:text-[#e59279a0] h-6 w-6 text-[#D54215]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block hover:text-[#e59279a0] h-6 w-6 text-[#D54215]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex  lg:ms-0 flex-shrink-0 items-center">
                  <p className="hidden h-8 w-auto lg:block text-[#D54215] font-bold text-xl">
                    <Link to="/">Bangla Table</Link>
                  </p>
                  <p className="block h-8 w-auto lg:hidden text-[#D54215] font-bold text-xl">
                    <Link to="/">Bangla Table</Link>
                  </p>
                </div>
                <div className="hidden ms-60 sm:ml-[40%] sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-black hover:bg-[#D54215] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu
                  as="div"
                  className="relative ml-3 flex items-center gap-3"
                >
                  {user ? (
                    <>
                      <button onClick={handleLogOut} className="btn-main">
                        Log out
                      </button>
                    </>
                  ) : (
                    <Link to="/login">
                      <button className="btn-main">Login</button>
                    </Link>
                  )}
                  {user ? (
                    <>
                      <div className="tooltip" data-tip={user?.displayName}>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    "text-black hover:bg-[#D54215] hover:text-white  block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
