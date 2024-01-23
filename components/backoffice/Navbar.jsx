import { AlignJustify, Bell, Sun} from 'lucide-react'
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

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-slate-900 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full left-60 right-0 pr-[17rem] z-50'>
        {/* Icon */}
        <button>
            <AlignJustify />
        </button>

        {/* 3 Icons */}
        <div className="flex space-x-3">
            <button><Sun/></button>
            <button type="button"
              className="relative inline-flex items-center p-3 text-sm
              font-medium text-center text-white rounded-lg
              "
              >
              <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center
                  w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2
                  border-white rounded-full top-1 right-[6px] -end-0 ">20</div>
              <Bell/>
            </button>

            {/* Image Profile*/}

            <DropdownMenu>
              <DropdownMenuTrigger>
                {/* <button> */}
                  <Image src='/profile.png' alt='User Profile' height={200} width={200} className='w-8 h-8 rounded-full' />
                {/* </button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
  )
}

export default Navbar
