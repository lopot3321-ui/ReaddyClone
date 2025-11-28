import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, TrendingUp } from "lucide-react";

export default function SimilarProducts() {
  const similarProducts = products.slice(0, 8);
  const topProducts = products.slice().sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      {/* Similar Products Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-heading font-bold text-white">Similar Products</h2>
            <p className="text-muted-foreground">You might also like these items</p>
          </motion.div>
          <Link href="/products">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/product/${product.id}`}>
                <Card className="glass-card border-white/10 bg-white/5 overflow-hidden group hover:border-primary/50 cursor-pointer h-full">
                  <CardContent className="p-0 relative">
                    <div className="aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
                      <img src={product.image} className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex flex-col gap-2">
                    <h3 className="font-bold text-white line-clamp-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">${product.price.toLocaleString()}</span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs">
                      <ShoppingCart className="w-3 h-3 mr-1" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Rated Products Section */}
      <section className="space-y-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <h2 className="text-3xl font-heading font-bold text-white">Top Rated</h2>
          </div>
          <p className="text-muted-foreground">Our most loved products by customers</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/product/${product.id}`}>
                <Card className="glass-card border-white/10 bg-white/5 overflow-hidden group hover:border-primary/50 cursor-pointer h-full flex flex-col">
                  <CardContent className="p-0 relative flex-1">
                    {product.isBestseller && (
                      <Badge className="absolute top-3 left-3 bg-yellow-500 text-black border-none z-10">Bestseller</Badge>
                    )}
                    <div className="aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
                      <img src={product.image} className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 flex flex-col gap-3">
                    <div>
                      <h3 className="font-bold text-white line-clamp-2 mb-1">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">${product.price.toLocaleString()}</span>
                        {product.originalPrice && <span className="text-xs text-muted-foreground line-through block">${product.originalPrice.toLocaleString()}</span>}
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
