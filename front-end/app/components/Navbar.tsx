"use client";

import Link from "next/link";
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Dropdown from "../common/Dropdown";

export default function Navbar() {
  const categories = [
    "Clothing",
    "Accessories",
    "Bags",
    "Shoes",
    "Home",
    "Kitchen",
    "Decor",
  ];

  const brands = [
    "ECO world",
    "Label by Rachan",
    "Ajay",
    "Sustainables",
    "Life of Pia",
    "Preeti styles",    
  ];

  return (
    <nav className="bg-[#F5F1E3] shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out">
          KindKloset
        </Link>

        {/* Category Dropdown */}
        <Dropdown
          title="Categories"
          items={categories}
          icon={<Bars3Icon className="h-6 w-6 text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out" />}
        />

        {/* Brand Dropdown */}
        <Dropdown
          title="Brands"
          items={brands}
          icon={<Bars3Icon className="h-6 w-6 text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out" />}
        />

        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-8">
          <div className="w-full max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search for anything"
                className="block w-full pl-10 pr-3 py-2 border border-[#D3A87C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7A5C44] focus:border-[#7A5C44]"
              />
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          <Link href="/favorites" className="text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out">
            <HeartIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="/cart" className="text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out">
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="/login" className="text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out">
            Sign in
          </Link>
          <Link href="seller/registration" className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out">
            Join as Seller
          </Link>
        </div>
      </div>
    </nav>
  );
}
