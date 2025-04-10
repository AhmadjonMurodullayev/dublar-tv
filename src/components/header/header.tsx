import { Search, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { HeaderMobile } from './components/header-mobile'

const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between py-4 gap-4">
        {/* Logo */}
        <div className="relative w-[180px] h-[60px]">
          <Image
            src="/777.svg"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-[10px] bg-[#5151518C] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 border-none shadow-sm"
            />
          </div>
        </div>

        <div  className='hidden md:flex'>
        <Button
  className="px-5 py-2 flex items-center gap-2 shadow-md rounded-full bg-[#5151518C] hover:none  border-none text-white font-medium"
  variant="ghost"
>
  <User className="h-4 w-4" />
  Sign in
</Button>
        </div>
        <div className='md:hidden'>
  <HeaderMobile/>
        </div>
      </div>
    </header>
  )
}

export default Header
