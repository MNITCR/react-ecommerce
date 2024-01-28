import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemesSwitcherBtn from '../ThemesSwitcherBtn'

const Navbar = () => {
  return (
    <div className='shadow-xl flex items-center justify-between bg-white dark:bg-slate-900 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full left-60 right-0 pr-[17rem] z-50'>
        {/* Icon */}
        <button className='text-slate-800 dark:text-white'>
            <AlignJustify />
        </button>

        {/* 3 Icons */}
        <div className="flex space-x-3">
            <ThemesSwitcherBtn/>

            {/* Notification */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div type="button"
                  className="relative inline-flex items-center p-3 text-sm
                  font-medium text-center text-slate-800 dark:text-white rounded-lg"
                  >
                  <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center
                      w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2
                      dark:border-white border-slate-300 rounded-full top-1 right-[6px] -end-0 ">20</div>
                  <Bell/>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <div className="flex items-center space-x-2">
                    <Image src='/profile.png' alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full' />
                    <div className="flex flex-col">
                      <p className='text-[13px]'>Yellow Sweet Corn Stock Out</p>
                      <div className="flex items-center space-x-2">
                        <p className='text-[12px] px-2 py-0.5 bg-red-400 text-white rounded-full'>Stock out</p>
                        <p className='text-[12px]'>Dec 12 2023 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X/>
                    </button>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <div className="flex items-center space-x-2">
                    <Image src='/profile.png' alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full' />
                    <div className="flex flex-col">
                      <p className='text-[13px]'>Green Sweet Corn Stock Out</p>
                      <div className="flex items-center space-x-2">
                        <p className='text-[12px] px-2 py-0.5 bg-green-400 text-white rounded-full'>Stock out</p>
                        <p className='text-[12px]'>Dec 12 2023 - 12:40PM</p>
                      </div>
                    </div>
                    <button>
                      <X/>
                    </button>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='flex justify-center'>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>


            {/* Image Profile*/}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {/* <button> */}
                  <Image src='/profile.png' alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full' />
                {/* </button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="pr-16">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button className='flex justify-center'>
                    <LayoutDashboard className='mr-2 h-4 w-4' />
                    <span>Dashboard</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex justify-center'>
                    <Settings className='mr-2 h-4 w-4' />
                    <span>Edit Profile</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className='flex justify-center'>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
  )
}

export default Navbar
