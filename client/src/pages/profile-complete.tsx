import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { MapPin, CreditCard, Lock, LogOut, Smartphone, Mic, Copy } from "lucide-react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <img src="https://github.com/shadcn.png" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary" />
              <h2 className="text-xl font-bold text-white">Alex Chen</h2>
              <p className="text-sm text-muted-foreground">alex@example.com</p>
            </div>

            <nav className="space-y-2">
              {[
                { icon: "📦", label: "Orders", id: "orders" },
                { icon: "❤️", label: "Wishlist", id: "wishlist" },
                { icon: "🤝", label: "Affiliate", id: "affiliate" },
                { icon: "📍", label: "Addresses", id: "addresses" },
                { icon: CreditCard, label: "Payment", id: "payment" },
                { icon: "⚙️", label: "Settings", id: "settings" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start h-12 ${activeTab === item.id ? "bg-white/10 text-white border border-white/5" : "text-muted-foreground hover:text-white"}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="mr-2">{typeof item.icon === "string" ? item.icon : <item.icon className="w-5 h-5" />}</span>
                  {item.label}
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start h-12 text-red-400 hover:bg-red-500/10">
                <LogOut className="mr-2 w-5 h-5" /> Logout
              </Button>
            </nav>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === "orders" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h1 className="text-3xl font-heading font-bold text-white">Order History</h1>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-muted-foreground">No orders yet. <span className="text-primary cursor-pointer">Start shopping!</span></p>
                </div>
              </motion.div>
            )}

            {activeTab === "wishlist" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h1 className="text-3xl font-heading font-bold text-white">Saved Items</h1>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-muted-foreground">Your wishlist is empty</p>
                </div>
              </motion.div>
            )}

            {activeTab === "affiliate" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <h1 className="text-3xl font-heading font-bold text-white">Affiliate Program</h1>
                <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Earn with NexCommerce</h2>
                  <p className="text-muted-foreground mb-6">Get up to 15% commission on every sale you refer</p>
                  <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                </div>
              </motion.div>
            )}

            {activeTab === "addresses" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-heading font-bold text-white">Saved Addresses</h1>
                  <Button className="bg-primary hover:bg-primary/90">Add Address</Button>
                </div>
                <div className="grid gap-4">
                  {[
                    { type: "Home", addr: "123 Main St, NYC 10001" },
                    { type: "Work", addr: "456 Tech Ave, SF 94102" },
                  ].map((addr, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-bold text-white">{addr.type}</div>
                          <div className="text-sm text-muted-foreground">{addr.addr}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/10">Edit</Button>
                        <Button size="sm" variant="outline" className="border-red-500/20 text-red-400">Delete</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "payment" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-heading font-bold text-white">Payment Methods</h1>
                  <Button className="bg-primary hover:bg-primary/90">Add Card</Button>
                </div>
                <div className="grid gap-4">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-900/30 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <CreditCard className="w-8 h-8 text-blue-400" />
                      <span className="text-xs text-blue-400 font-bold">DEFAULT</span>
                    </div>
                    <div className="font-mono text-lg text-white mb-2">•••• •••• •••• 4242</div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Visa</span>
                      <span>Expires 12/26</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
                <h1 className="text-3xl font-heading font-bold text-white">Account Settings</h1>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <label className="text-sm font-medium text-muted-foreground block mb-2">Email</label>
                    <Input className="bg-black/20 border-white/10" defaultValue="alex@example.com" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <label className="text-sm font-medium text-muted-foreground block mb-2">Password</label>
                    <Button variant="outline" className="border-white/10">Change Password</Button>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <Lock className="w-5 h-5" /> Two-Factor Authentication
                    </h3>
                    <Button className="bg-primary hover:bg-primary/90">Enable 2FA</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
