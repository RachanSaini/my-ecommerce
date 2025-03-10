import api from '@/lib/api';

async function fetchShop(shopId: string) {
  const res = await api.get(`/shops/${shopId}`); 
  if (!res.data) {
    throw new Error('Failed to fetch shop');
  }
  return res.data;
}

export default async function ShopPage({ params }: { params: { shopId: string } }) {
  const shop = await fetchShop(params.shopId);

  return (
    <div>
      <h1>{shop.name}</h1>
      <p>{shop.description}</p>
      <h2>Products</h2>
      {/* Add product listing here if you have products linked to the shop */}
    </div>
  );
}