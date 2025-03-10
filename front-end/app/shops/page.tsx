import Link from 'next/link';
import api from '@/lib/api';

async function fetchShops() {
  const res = await api.get('/shops');
  if (!res.data) {
    throw new Error('Failed to fetch shops');
  }
  return res.data;
}

export default async function ShopsPage() {
  const shops = await fetchShops();

  return (
    <div>
      <h1>Shops</h1>
      <div className="shop-list">
        {shops.map((shop: any) => (
          <div key={shop._id} className="shop-card">
            <Link href={`/shops/${shop._id}`}>
              <h2>{shop.name}</h2>
              <p>{shop.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}