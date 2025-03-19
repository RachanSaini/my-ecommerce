"use client"
import Link from 'next/link';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Hardcoded Shops Data
const hardcodedShops = [
  { _id: '1', name: 'Nike Store', description: 'Official Nike merchandise', image: '/images/nike.jpg' },
  { _id: '2', name: 'Adidas Shop', description: 'Quality sportswear from Adidas', image: '/images/adidas.jpg' },
  { _id: '3', name: 'Zara Shop', description: 'Trendy fashion from Zara', image: '/images/zara.jpg' },
  { _id: '4', name: 'H&M Store', description: 'Affordable fashion from H&M', image: '/images/hm.jpg' },
  { _id: '5', name: 'Levi’s Shop', description: 'Stylish denim from Levi’s', image: '/images/levis.jpg' },
  // Add more shops as needed
];

// Hardcoded Categories Data
const hardcodedCategories = ['Sports', 'Fashion', 'Accessories', 'Home', 'Electronics'];

export default function ShopsPage() {
  const [shops, setShops] = useState<any[]>(hardcodedShops);
  const [categories, setCategories] = useState<string[]>(hardcodedCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Filter shops based on category and search term
  const filteredShops = shops.filter((shop) => {
    const matchesCategory = selectedCategory ? shop.name.toLowerCase().includes(selectedCategory.toLowerCase()) : true;
    const matchesSearchTerm = shop.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Pagination logic
  const shopsPerPage = 4;
  const totalFilteredShops = filteredShops.length;
  const totalPagesCalculated = Math.ceil(totalFilteredShops / shopsPerPage);

  const currentShops = filteredShops.slice((currentPage - 1) * shopsPerPage, currentPage * shopsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search term change
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1); // react-paginate is zero-indexed
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Shops</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for shops"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded-md w-80"
        />
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`p-2 rounded-md ${
                selectedCategory === category ? 'bg-[#D3A87C] text-white' : 'bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Shop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentShops.length > 0 ? (
          currentShops.map((shop) => (
            <div key={shop._id} className="bg-white p-4 rounded-lg shadow-lg">
              <Link href={`/shops/${shop._id}`}>
                <div>
                  <div className="mb-4">
                    <img
                      src={shop.image || '/default-shop-image.jpg'}
                      alt={shop.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{shop.name}</h2>
                  <p className="text-gray-600">{shop.description}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No shops found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={totalPagesCalculated}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}
