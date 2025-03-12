import Link from 'next/link';

export default function Products() {
// Get products from backend
  // Simulate product data
  const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: "$10" },
    { id: 2, name: "Product 2", description: "Description 2", price: "$20" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
      <Link href="/dashboard/products/add">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-6">
          Add Product
        </button>
      </Link>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}