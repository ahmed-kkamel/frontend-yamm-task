const fs = require("fs");

const statuses = ["pending", "approved", "rejected", "processing"];
const stores = [
  {
    name: "Amazon Store",
    logo: "https://logo.clearbit.com/amazon.com",
    url: "https://amazon.com",
  },
  {
    name: "eBay Store",
    logo: "https://logo.clearbit.com/ebay.com",
    url: "https://ebay.com",
  },
  {
    name: "Walmart Store",
    logo: "https://logo.clearbit.com/walmart.com",
    url: "https://walmart.com",
  },
  {
    name: "Best Buy Store",
    logo: "https://logo.clearbit.com/bestbuy.com",
    url: "https://bestbuy.com",
  },
  {
    name: "Target Store",
    logo: "https://logo.clearbit.com/target.com",
    url: "https://target.com",
  },
];

const reasons = [
  "Defective product",
  "Wrong item received",
  "Size doesn't match",
  "Not as described",
  "Changed mind",
  "Late delivery",
  "Product not as expected",
];

const products = [
  { name: "Laptop", basePrice: 999 },
  { name: "Smartphone", basePrice: 699 },
  { name: "Headphones", basePrice: 199 },
  { name: "Monitor", basePrice: 299 },
  { name: "Keyboard", basePrice: 99 },
  { name: "Tablet", basePrice: 499 },
  { name: "Smartwatch", basePrice: 249 },
];

const generateItems = () => {
  const numItems = Math.floor(Math.random() * 3) + 1;
  return Array.from({ length: numItems }, (_, index) => {
    const product = products[Math.floor(Math.random() * products.length)];
    return {
      id: `item-${index + 1}`,
      name: product.name,
      price: product.basePrice,
      quantity: Math.floor(Math.random() * 3) + 1,
    };
  });
};

const generateOrder = (index: number) => {
  const store = stores[Math.floor(Math.random() * stores.length)];
  const items = generateItems();
  const amount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    id: index.toString(),
    reason: reasons[Math.floor(Math.random() * reasons.length)],
    store_name: store.name,
    store_logo: store.logo,
    store_url: store.url,
    amount: amount,
    active: Math.random() > 0.3,
    decision: null,
    items: items,
  };
};

const orders = Array.from({ length: 40 }, (_, i) => generateOrder(i + 1));

const db = {
  "refund-orders": orders,
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
