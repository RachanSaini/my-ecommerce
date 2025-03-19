"use client"
import { useRouter } from 'next/router';
import api from '@/lib/api';
import { useEffect, useState } from 'react';

export default function ShopPage() {
  const router = useRouter();
  const { shopId } = router.query;

  const [shop, setShop] = useState<any>(null);

  useEffect(() => {
    if (shopId) {
      const fetchShop = async () => {
        const res = await api.get(`/shops/${shopId}`);
        setShop(res.data);
      };
      fetchShop();
    }
  }, [shopId]);

  if (!shop) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">{shop.name}</h1>
      <img src={shop.image || '/default-shop-image.jpg'} alt={shop.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 mb-4">{shop.description}</p>
      {/* Display more shop details here */}
    </div>
  );
}
