"use client";

import { useState, useRef, useEffect, JSX } from "react";
import Link from "next/link";

interface DropdownProps {
  title: string;
  items: string[];
  icon?: JSX.Element;
  onItemClick?: () => void;
}

const Dropdown = ({ title, items, icon, onItemClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:text-gray-600"
      >
        {icon && <span className="mr-1">{icon}</span>}
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-30 border border-gray-200 max-h-60 overflow-y-auto">
          {items.map((item, index) => (
            <Link
              key={index}
              href={`/${title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false);
                onItemClick?.();
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;