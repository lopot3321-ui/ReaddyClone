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

// Generate 500+ products dynamically
function generateProducts(): Product[] {
  const products: Product[] = [];
  
  const categories = [
    { name: "Electronics", items: ["iPhone 15 Pro Max", "Samsung Galaxy S24", "MacBook Pro", "Sony Headphones", "iPad Pro", "Apple Watch", "DJI Drone", "Canon Camera", "LG OLED TV", "Bose Speaker", "Nintendo Switch", "PlayStation 5", "Xbox Series X", "Meta Quest 3", "Google Pixel 8", "OnePlus 12", "Xiaomi 14", "Nothing Phone", "Motorola Edge", "Samsung Galaxy Tab"] },
    { name: "Fashion", items: ["Premium Leather Jacket", "Tailored Blazer", "Summer Maxi Dress", "Designer Jeans", "Linen Shirt", "Wool Trench Coat", "Athletic Joggers", "Silk Evening Dress", "Cashmere Sweater", "Cotton T-Shirt", "Formal Suit", "Casual Polo", "Vintage Denim", "Floral Blouse", "Business Pants", "Cargo Shorts", "Beach Shirt", "Leather Boots", "Sneakers", "Loafers"] },
    { name: "Beauty & Cosmetics", items: ["Luxury Face Serum", "Anti-Aging Cream", "Hydrating Moisturizer", "Vitamin C Serum", "Eye Cream Treatment", "Makeup Palette Pro", "Foundation Stick", "Lipstick Set", "Mascara", "Eyeliner Pen", "Face Mask", "Clay Cleanser", "Moisturizing Lotion", "Body Butter", "Hair Serum", "Face Toner", "Concealer", "Blush Palette", "Highlighter", "Setting Spray"] },
    { name: "Food & Beverages", items: ["Organic Honey 500g", "Premium Coffee Beans", "Artisan Chocolate Box", "Green Tea Collection", "Olive Oil Extra Virgin", "Truffle Oil", "Balsamic Vinegar", "Sea Salt", "Spice Set", "Jam Collection", "Pasta Set", "Rice Selection", "Nuts & Seeds", "Dried Fruits", "Coffee Pods", "Tea Variety Pack", "Honey Jar", "Coconut Oil", "Almond Butter", "Dark Chocolate"] },
    { name: "Sports & Fitness", items: ["Professional Yoga Mat", "Adjustable Dumbbells", "Running Shoes Pro", "Resistance Bands Set", "Smart Fitness Watch", "Basketball Official", "Tennis Racket Pro", "Resistance Bands", "Foam Roller", "Jump Rope", "Boxing Gloves", "Kettlebell", "Rowing Machine", "Exercise Bike", "Treadmill", "Yoga Block", "Resistance Tube", "Workout Mat", "Gym Bag", "Water Bottle"] },
    { name: "Home & Living", items: ["Smart LED Bulbs 4-Pack", "Luxury Bedding Set", "Decorative Throw Pillows", "Wall Art Canvas Set", "Aromatherapy Diffuser", "Smart Speaker", "Ring Doorbell", "Smart Lock", "Air Purifier", "Humidifier", "Coffee Maker", "Blender Pro", "Toaster", "Microwave", "Vacuum Cleaner", "Air Fryer", "Instant Pot", "Slow Cooker", "Rice Cooker", "Dishwasher"] },
    { name: "Appliances", items: ["Air Fryer XL", "Blender Pro 2000W", "Microwave Oven Smart", "Rice Cooker Deluxe", "Electric Kettle", "Coffee Maker Pro", "Sandwich Maker", "Waffle Iron", "Toaster Oven", "Food Processor", "Mixer Stand", "Juicer Pro", "Smoothie Maker", "Pressure Cooker", "Slow Cooker", "Bread Maker", "Pasta Maker", "Ice Cream Maker", "Yogurt Maker", "Sous Vide Machine"] },
    { name: "Health & Wellness", items: ["Digital Blood Pressure Monitor", "Massage Gun Pro", "Infrared Thermometer", "Pulse Oximeter", "Heating Pad Electric", "Foot Massager", "Back Massager", "Neck Traction", "TENS Machine", "Sauna Blanket", "Humidifier", "Air Purifier", "Water Bottle Smart", "Scale Digital", "Fitness Tracker", "Heart Rate Monitor", "Sleep Tracker", "Meditation Cushion", "Yoga Mat Premium", "Recovery Boots"] },
    { name: "Books & Media", items: ["Self Help Book Bundle", "Mystery Novel Set", "Science Fiction Series", "Business Book", "Biography Collection", "Cookbook Premium", "Art Book", "Travel Guide", "Children's Book Set", "Comic Book Series", "Magazine Subscription", "Audiobook Series", "Podcast Equipment", "Vinyl Record", "CD Collection", "DVD Box Set", "Blu-ray Movie", "E-Reader Device", "Book Stand", "Reading Light"] },
    { name: "Toys & Games", items: ["LEGO Building Set", "Board Game Collection", "Action Figure Set", "Puzzle 1000 Piece", "Chess Set Luxury", "Video Game Console", "Gaming Headset", "Drones for Beginners", "RC Car Pro", "Telescope", "Microscope Set", "Science Kit", "Art Supply Set", "Musical Instrument", "Guitar Beginner", "Keyboard Digital", "Ukulele", "Harmonica", "Drums Set", "Microphone Karaoke"] },
    { name: "Automotive", items: ["Car Phone Holder", "Dash Cam 4K", "Car Air Purifier", "Seat Cushion", "Steering Wheel Cover", "Floor Mats Set", "Car Organizer", "Tire Gauge Digital", "Battery Charger", "Jump Starter", "Car Vacuum", "Pressure Washer", "Wax Coating", "Car Cover", "Bike Rack", "Roof Box", "Hitch Lock", "Tow Strap", "Emergency Kit", "Roadside Kit"] },
    { name: "Jewelry & Watches", items: ["Luxury Watch", "Diamond Necklace", "Gold Bracelet", "Silver Ring", "Pearl Earrings", "Engagement Ring", "Pendant Necklace", "Tennis Bracelet", "Ankle Bracelet", "Brooch Pin", "Cufflinks Set", "Watch Band", "Charm Bracelet", "Locket Necklace", "Body Chain", "Nose Ring", "Ear Cuff", "Finger Ring Set", "Choker Necklace", "Bangle Bracelet"] },
    { name: "Pet Supplies", items: ["Dog Bed Premium", "Cat Tower Multi-Level", "Pet Feeder Automatic", "Water Fountain Pet", "Dog Leash Retractable", "Cat Litter Box", "Dog Collar GPS", "Pet Grooming Kit", "Pet Shampoo", "Dog Treats", "Cat Food Premium", "Bird Cage", "Hamster Wheel", "Fish Tank Setup", "Aquarium Filter", "Pet Toy Bundle", "Dog Crate", "Pet Carrier", "Pet Backpack", "Dog Sweater"] }
  ];

  let id = 1;
  categories.forEach(cat => {
    cat.items.forEach((item, idx) => {
      for (let i = 0; i < 3; i++) {
        const isNew = id % 5 === 0;
        const isBestseller = id % 7 === 0;
        products.push({
          id: `${cat.name.toLowerCase().replace(/\s/g, '-')}-${idx}-${i}`,
          name: `${item}${i > 0 ? ` - Variant ${i + 1}` : ''}`,
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
