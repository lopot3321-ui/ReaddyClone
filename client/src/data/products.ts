export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
}

// Generate 200+ products efficiently
function generateProducts(): Product[] {
  const products: Product[] = [];
  
  const categories = [
    { name: "Electronics", items: ["iPhone 15 Pro Max", "Samsung Galaxy S24", "MacBook Pro", "Sony Headphones", "iPad Pro", "Apple Watch", "DJI Drone", "Canon Camera", "LG OLED TV", "Bose Speaker", "Nintendo Switch", "PlayStation 5", "Xbox Series X", "Meta Quest 3", "Google Pixel 8"] },
    { name: "Fashion", items: ["Premium Leather Jacket", "Tailored Blazer", "Summer Maxi Dress", "Designer Jeans", "Linen Shirt", "Wool Trench Coat", "Athletic Joggers", "Silk Evening Dress", "Cashmere Sweater", "Cotton T-Shirt", "Formal Suit", "Casual Polo", "Vintage Denim", "Floral Blouse", "Business Pants"] },
    { name: "Beauty & Cosmetics", items: ["Luxury Face Serum", "Anti-Aging Cream", "Hydrating Moisturizer", "Vitamin C Serum", "Eye Cream Treatment", "Makeup Palette Pro", "Foundation Stick", "Lipstick Set", "Mascara", "Eyeliner Pen", "Face Mask", "Clay Cleanser", "Moisturizing Lotion", "Body Butter", "Hair Serum"] },
    { name: "Food & Beverages", items: ["Organic Honey 500g", "Premium Coffee Beans", "Artisan Chocolate Box", "Green Tea Collection", "Olive Oil Extra Virgin", "Truffle Oil", "Balsamic Vinegar", "Sea Salt", "Spice Set", "Jam Collection", "Pasta Set", "Rice Selection", "Nuts & Seeds", "Dried Fruits", "Coffee Pods"] },
    { name: "Sports & Fitness", items: ["Professional Yoga Mat", "Adjustable Dumbbells", "Running Shoes Pro", "Resistance Bands Set", "Smart Fitness Watch", "Basketball Official", "Tennis Racket Pro", "Resistance Bands", "Foam Roller", "Jump Rope", "Boxing Gloves", "Kettlebell", "Rowing Machine", "Exercise Bike", "Treadmill"] },
    { name: "Home & Living", items: ["Smart LED Bulbs 4-Pack", "Luxury Bedding Set", "Decorative Throw Pillows", "Wall Art Canvas Set", "Aromatherapy Diffuser", "Smart Speaker", "Ring Doorbell", "Smart Lock", "Air Purifier", "Humidifier", "Coffee Maker", "Blender Pro", "Toaster", "Microwave", "Vacuum Cleaner"] },
    { name: "Appliances", items: ["Air Fryer XL", "Blender Pro 2000W", "Microwave Oven Smart", "Rice Cooker Deluxe", "Electric Kettle", "Coffee Maker Pro", "Sandwich Maker", "Waffle Iron", "Toaster Oven", "Food Processor", "Mixer Stand", "Juicer Pro", "Smoothie Maker", "Pressure Cooker", "Slow Cooker"] },
    { name: "Health & Wellness", items: ["Digital Blood Pressure Monitor", "Massage Gun Pro", "Infrared Thermometer", "Pulse Oximeter", "Heating Pad Electric", "Foot Massager", "Back Massager", "Neck Traction", "TENS Machine", "Sauna Blanket", "Humidifier", "Air Purifier", "Water Bottle Smart", "Scale Digital", "Fitness Tracker"] },
    { name: "Books & Media", items: ["Self Help Book Bundle", "Mystery Novel Set", "Science Fiction Series", "Business Book", "Biography Collection", "Cookbook Premium", "Art Book", "Travel Guide", "Children's Book Set", "Comic Book Series", "Magazine Subscription", "Audiobook Series", "Podcast Equipment", "Vinyl Record", "CD Collection"] },
    { name: "Toys & Games", items: ["LEGO Building Set", "Board Game Collection", "Action Figure Set", "Puzzle 1000 Piece", "Chess Set Luxury", "Video Game Console", "Gaming Headset", "Drones for Beginners", "RC Car Pro", "Telescope", "Microscope Set", "Science Kit", "Art Supply Set", "Musical Instrument", "Guitar Beginner"] },
    { name: "Automotive", items: ["Car Phone Holder", "Dash Cam 4K", "Car Air Purifier", "Seat Cushion", "Steering Wheel Cover", "Floor Mats Set", "Car Organizer", "Tire Gauge Digital", "Battery Charger", "Jump Starter", "Car Vacuum", "Pressure Washer", "Wax Coating", "Car Cover", "Bike Rack"] },
    { name: "Jewelry & Watches", items: ["Luxury Watch", "Diamond Necklace", "Gold Bracelet", "Silver Ring", "Pearl Earrings", "Engagement Ring", "Pendant Necklace", "Tennis Bracelet", "Ankle Bracelet", "Brooch Pin", "Cufflinks Set", "Watch Band", "Charm Bracelet", "Locket Necklace", "Body Chain"] }
  ];

  let id = 1;
  categories.forEach(cat => {
    cat.items.forEach((item, idx) => {
      for (let i = 0; i < 1; i++) {
        const isNew = id % 8 === 0;
        const isBestseller = id % 12 === 0;
        products.push({
          id: `${cat.name.toLowerCase().replace(/\s/g, '-')}-${idx}-${i}`,
          name: item,
          category: cat.name,
          price: Math.floor(Math.random() * 50000) + 1000,
          originalPrice: Math.floor(Math.random() * 60000) + 15000,
          rating: Math.round((Math.random() * 2 + 3.5) * 10) / 10,
          reviews: Math.floor(Math.random() * 3000) + 100,
          image: `https://readdy.ai/api/search-image?query=${encodeURIComponent(item + ' product photography')} &width=400&height=400&seq=${id}&orientation=squarish`,
          isNew,
          isBestseller,
          inStock: Math.random() > 0.1
        });
        id++;
      }
    });
  });

  return products;
}

export const products = generateProducts();

export const categories = [
  { id: "electronics", name: "Electronics & Gadgets", icon: "Smartphone", color: "from-blue-600/20" },
  { id: "fashion", name: "Fashion & Style", icon: "Shirt", color: "from-pink-600/20" },
  { id: "beauty", name: "Beauty & Cosmetics", icon: "Sparkles", color: "from-purple-600/20" },
  { id: "food", name: "Food & Beverages", icon: "Coffee", color: "from-orange-600/20" },
  { id: "sports", name: "Sports & Fitness", icon: "Dumbbell", color: "from-green-600/20" },
  { id: "home", name: "Home & Living", icon: "Home", color: "from-cyan-600/20" },
  { id: "appliances", name: "Appliances", icon: "Refrigerator", color: "from-indigo-600/20" },
  { id: "wellness", name: "Health & Wellness", icon: "Heart", color: "from-red-600/20" },
  { id: "books", name: "Books & Media", icon: "Book", color: "from-yellow-600/20" },
  { id: "toys", name: "Toys & Games", icon: "Gamepad2", color: "from-teal-600/20" },
  { id: "auto", name: "Automotive", icon: "Car", color: "from-gray-600/20" },
  { id: "jewelry", name: "Jewelry & Watches", icon: "Watch", color: "from-amber-600/20" },
];
