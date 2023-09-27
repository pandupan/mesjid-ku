'use client';

import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { InputAuth } from "../ui/inputAuth";
import { Label } from "../ui/label";


const Navbar = () => {

  let [isOpenLogin, setIsOpenLogin] = useState(false)
  let [isOpenSign, setIsOpenSign] = useState(false)

  function closeModalLogin() {
    setIsOpenLogin(false)
  }
  function closeModalSign() {
    setIsOpenSign(false)
  }

  function openModalLogin() {
    setIsOpenLogin(true)
  }
  function openModalSign() {
    setIsOpenSign(true)
  }

  return (
    <>  
      {/* Navbar Desktop*/}  
      <div className="flex justify-between items-center w-full h-[135px] container">
        <div className="relative w-[90px] h-[90px]">
          <Image 
            src="/images/logo.png"
            alt="logo"
            fill={true}
          />
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-6 text-lg">
            <Link href="/home">Home</Link>
            <Link href="#theme">Themes</Link>
            <Link href="#about">About Us</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="flex gap-6">
            <Button title="Login" onClick={openModalLogin}/>

            
            <Button title="Register" onClick={openModalSign}/>
          </div>
        </div>
      </div>
      {/*End Navbar Desktop*/}

      {/* Pop Over Modal Login*/}
      <Transition appear show={isOpenLogin} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalLogin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between px-4"
                  >
                    <div className="text-2xl font-bold">
                      LOGIN
                    </div>

                    <AiOutlineClose onClick={closeModalLogin} size={25} />
                  </Dialog.Title>

                    <div className="flex flex-col justify-center mt-4 gap-3 px-4">
                      <Label htmlFor="email">Email</Label>
                      <InputAuth type="email" placeholder="Your email" />
                      <Label htmlFor="password">Password</Label>
                      <InputAuth type="title" placeholder="**********" />
                    </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalLogin}
                    >
                      Got it, thanks!
                    </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Login*/}

      {/* Pop Over Modal Sign*/}
      <Transition appear show={isOpenSign} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalSign}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Sign
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalSign}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Sign*/}

    </>
  )
}

export default Navbar
