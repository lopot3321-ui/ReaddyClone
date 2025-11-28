import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CategoryRail } from "@/components/category-rail";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const categoryOrder = [
    "Electronics",
    "Fashion",
    "Beauty & Cosmetics",
    "Food & Beverages",
    "Sports & Fitness",
    "Home & Living",
    "Appliances",
    "Health & Wellness",
    "Books & Media",
    "Toys & Games",
    "Automotive",
    "Jewelry & Watches"
  ];

  // Color palettes for different categories
  const categoryColors: Record<string, { text: string; bg: string; accent: string }> = {
    "Electronics": { text: "#3b82f6", bg: "from-blue-600/10", accent: "border-blue-500/20" },
    "Fashion": { text: "#ec4899", bg: "from-pink-600/10", accent: "border-pink-500/20" },
    "Beauty & Cosmetics": { text: "#a855f7", bg: "from-purple-600/10", accent: "border-purple-500/20" },
    "Food & Beverages": { text: "#f97316", bg: "from-orange-600/10", accent: "border-orange-500/20" },
    "Sports & Fitness": { text: "#22c55e", bg: "from-green-600/10", accent: "border-green-500/20" },
    "Home & Living": { text: "#06b6d4", bg: "from-cyan-600/10", accent: "border-cyan-500/20" },
    "Appliances": { text: "#6366f1", bg: "from-indigo-600/10", accent: "border-indigo-500/20" },
    "Health & Wellness": { text: "#ef4444", bg: "from-red-600/10", accent: "border-red-500/20" },
    "Books & Media": { text: "#eab308", bg: "from-yellow-600/10", accent: "border-yellow-500/20" },
    "Toys & Games": { text: "#14b8a6", bg: "from-teal-600/10", accent: "border-teal-500/20" },
    "Automotive": { text: "#78716c", bg: "from-gray-600/10", accent: "border-gray-500/20" },
    "Jewelry & Watches": { text: "#d97706", bg: "from-amber-600/10", accent: "border-amber-500/20" }
  };

  const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <Card className="glass-card border-white/10 bg-white/5 overflow-hidden group hover:border-white/20 cursor-pointer h-full flex flex-col transition-all duration-300">
          <CardContent className="p-0 relative flex-1 overflow-hidden">
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-secondary text-white border-none z-10">New</Badge>
            )}
            {product.isBestseller && (
              <Badge className="absolute top-3 left-3 bg-yellow-500 text-white border-none z-10">Bestseller</Badge>
            )}
            
            <button onClick={(e) => e.preventDefault()} className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
            </button>

            <div className="aspect-square overflow-hidden bg-white p-4 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
              <img 
                src={product.image} 
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
          </CardContent>
          
          <CardFooter className="p-5 flex flex-col items-start gap-2 flex-1 justify-between">
            <div className="w-full">
              <h3 className="font-bold text-white line-clamp-2 text-sm">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="text-lg font-bold text-white">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through block">${product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <button onClick={(e) => e.preventDefault()} className="h-9 w-9 rounded-full bg-secondary hover:bg-secondary/90 flex items-center justify-center">
                <ShoppingCart className="w-3 h-3 text-white" />
              </button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CategoryRail />

        {/* Category Sections */}
        <div className="space-y-24 pb-20">
          {categoryOrder.map(category => {
            const categoryProducts = productsByCategory[category];
            if (!categoryProducts || categoryProducts.length === 0) return null;

            const colors = categoryColors[category];
            return (
              <section key={category} className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-3">
                      <span className="h-1 w-6 rounded-full" style={{ backgroundColor: colors.text }} />
                      More {category}
                    </h2>
                  </motion.div>
                  <button onClick={() => window.location.href = '/products'} className="hidden md:flex px-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium text-white">View All</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {categoryProducts.slice(0, 5).map((product, idx) => (
                    <ProductCard key={product.id} product={product} index={idx} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-lg py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
             <img src="/attached_assets/logo.png" alt="NexCommerce" className="h-8 w-8 grayscale opacity-50" />
             <span className="font-heading font-bold text-xl tracking-wider text-white/50">NexCommerce</span>
          </div>
          <p>© 2024 NexCommerce. Designed by Readdy. | AI-Powered Shopping Experience</p>
        </div>
      </footer>
    </div>
  );
}
