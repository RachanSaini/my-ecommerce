async function fetchShop(shopId: string) {
    console.log(process.env.BackendAPI);
    const res = await fetch(`${process.env.BackendAPI}/api/shops/${shopId}`); // Replace with your backend API
    if (!res.ok) {
      throw new Error('Failed to fetch shop');
    }
    return res.json();
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