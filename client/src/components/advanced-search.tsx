import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mic, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [results, setResults] = useState<typeof products>([]);

  const handleSearch = (query: string) => {
    if (query.length === 0) {
      setResults([]);
      return;
    }
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const startVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setSearchQuery("iPhone 15");
      handleSearch("iPhone 15");
      setIsListening(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed top-20 left-0 right-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search products, categories..." 
                className="pl-10 pr-4 bg-white/10 border-white/20 rounded-full h-12"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
              />
            </div>
            <Button 
              size="icon" 
              variant="secondary" 
              className={`rounded-full h-12 w-12 ${isListening ? 'bg-red-500 animate-pulse' : ''}`}
              onClick={startVoiceSearch}
              title="Voice Search"
            >
              <Mic className="w-5 h-5" />
            </Button>
            {isOpen && (
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)} className="h-12 w-12">
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-32 left-0 right-0 z-40 pointer-events-none"
          >
            <div className="container mx-auto px-4 pointer-events-auto">
              <Card className="bg-black/95 border border-white/10 backdrop-blur-xl max-w-2xl mx-auto max-h-[400px] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="divide-y divide-white/10">
                    {results.map(product => (
                      <div key={product.id} className="p-4 hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-4">
                        <img src={product.image} className="w-12 h-12 object-contain" />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-white truncate">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.category} • ${product.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="p-8 text-center text-muted-foreground">No products found</div>
                ) : (
                  <div className="p-6 space-y-2">
                    <div className="text-xs uppercase font-bold text-muted-foreground px-4">Trending</div>
                    {products.slice(0, 3).map(p => (
                      <div key={p.id} className="px-4 py-2 hover:bg-white/5 cursor-pointer">
                        <div className="text-sm text-white">{p.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
