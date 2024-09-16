'use client'
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdMyLocation } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { LocationIcon } from "./icons";

function SideNavbar() {
  const pathname = useRouter()
  const [path, setPath] = useState("/")
  useEffect(() => {
    setPath(pathname.asPath)
  }, [])
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/">
                <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path == '/' ? ' clickBg' : '')}>
                  <MdOutlineSpaceDashboard className={"text-2xl text-gray-600 group-hover:text-white " + (path == '/' ? 'clickColor' : '')} />
                  <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path == '/' ? ' clickColor' : '')}>
                    Dashboard
                  </h3>
                </div>
              </Link>

              <Link href="/users">
                <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path == '/users' ? ' clickBg' : '')}>
                  <CgProfile className={"text-2xl text-gray-600 group-hover:text-white " + (path == '/users' ? 'clickColor' : '')} />
                  <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path == '/users' ? ' clickColor' : '')}>
                    Users
                  </h3>
                </div>
              </Link>

              <Link href="/locations">
                <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path == '/locations' ? ' clickBg' : '')}>
                  <MdMyLocation className={"text-2xl text-gray-600 group-hover:text-white " + (path == '/locations' ? 'clickColor' : '')} />
                  <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path == '/locations' ? ' clickColor' : '')}>
                    Locations
                  </h3>
                </div>
              </Link>

              <Link href="/addEditVehicle">
                <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path.includes('/addEditVehicle') ? ' clickBg' : '')}>
                  <FaRegComments className={"text-2xl text-gray-600 group-hover:text-white " + (path.includes('/addEditVehicle') ? 'clickColor' : '')} />
                  <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path.includes('/addEditVehicle') ? ' clickColor' : '')}>
                    Add/Edit Vehicle
                  </h3>
                </div>
              </Link>

              <Link href="/addEditUser">
              <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path.includes('/addEditUser') ? ' clickBg' : '')}>
                <MdOutlineSpaceDashboard className={"text-2xl text-gray-600 group-hover:text-white " + (path.includes('/addEditUser') ? 'clickColor' : '')} />
                <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path.includes('/addEditUser') ? ' clickColor' : '')}>
                  Add/Edit User
                </h3>
              </div>
              </Link>
              
              <Link href="/addEditLocation">
              <div className={"flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" + (path.includes('/addEditLocation') ? ' clickBg' : '')}>
                <FaRegComments className={"text-2xl text-gray-600 group-hover:text-white " + (path.includes('/addEditLocation') ? 'clickColor' : '')} />
                <h3 className={"text-base text-gray-800 group-hover:text-white font-semibold" + (path.includes('/addEditLocation') ? ' clickColor' : '')}>
                  Add/Edit Location
                </h3>
              </div>
              </Link>             
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
            </div>
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
