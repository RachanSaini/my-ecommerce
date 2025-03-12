import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>
      <div className="space-y-4">
        <Link href="/dashboard/products/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add Product
          </button>
        </Link>
        {/* Additional dashboard content can go here */}
      </div>
    </div>
  );
}