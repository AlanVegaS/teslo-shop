'use client'

import { useUiStore } from '@/store/ui/ui-store';
import Link from 'next/link';
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { logout } from '@/actions/auth/logout';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const Sidebar = () => {

    const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen)
    const closeMenu = useUiStore(state => state.closeSideMenu)

    const { data: session, update } = useSession()

    const isUserLoggedIn = !!session?.user
    const userRole = session?.user?.role

    useEffect(() => {
        console.log('hola')
        update()
    }, [])

    return (
        <div >
            {/**Background black */}
            {
                isSideMenuOpen &&
                <div className="fixed top-0 left-0 bg-black w-screen h-screen z-10 opacity-30" />
            }
            {/**Blur background */}
            {
                isSideMenuOpen &&
                <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-xs"
                    onClick={() => closeMenu()}
                />
            }
            {/**Sidebar */}
            <nav
                className={
                    clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                        {
                            "translate-x-full": !isSideMenuOpen
                        }
                    )}
            >
                <IoCloseOutline
                    size={30}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => closeMenu()}
                />
                {/**Input */}
                <div className="relative mt-14">
                    <IoSearchOutline size={18} className="absolute top-2.5 left-2  text-gray-600" />
                    <input
                        type='text'
                        placeholder="Find"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500" />
                </div>
                {/**Menu */}
                <Link
                    href="/profile"
                    onClick={() => closeMenu()}
                    className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPersonOutline size={30} />
                    <span className="ml-3 text-xl">Profile</span>
                </Link>
                <Link
                    href="/"
                    className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl">Orders</span>
                </Link>

                {
                    !isUserLoggedIn &&
                    <Link
                        href="/auth/login"
                        className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        onClick={() => closeMenu()}
                    >
                        <IoLogInOutline size={30} />
                        <span className="ml-3 text-xl">Login</span>
                    </Link>
                }
                {
                    isUserLoggedIn &&
                    <button
                        onClick={() => {
                            logout()
                            update()
                            closeMenu()
                        }}
                        className="flex w-full cursor-pointer items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <IoLogOutOutline size={30} />
                        <span className="ml-3 text-xl">Logout</span>
                    </button>
                }
                {/**Separator line */}
                {
                    userRole === 'admin' &&
                    <>
                        <div className="w-full bg-gray-200 h-px my-10" />
                        <Link
                            href="/"
                            className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            <IoShirtOutline size={30} />
                            <span className="ml-3 text-xl">Products</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            <IoTicketOutline size={30} />
                            <span className="ml-3 text-xl">Orders</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex  items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            <IoPeopleOutline size={30} />
                            <span className="ml-3 text-xl">Users</span>
                        </Link>
                    </>
                }
            </nav>
        </div>
    )
}
