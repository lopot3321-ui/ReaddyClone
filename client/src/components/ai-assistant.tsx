import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Mic, Volume2 } from "lucide-react";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hi! I'm your AI shopping assistant. I can help you find products, answer questions about shipping, recommend items, and much more. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      const lower = input.toLowerCase();

      if (lower.includes("product") || lower.includes("recommend")) {
        response = "I'd recommend checking out our featured collection! We have trending electronics, fashion items, and more. What category interests you?";
      } else if (lower.includes("shipping") || lower.includes("delivery")) {
        response = "We offer free global shipping on all orders! Standard delivery is 5-7 business days. You can track your order in real-time through your profile.";
      } else if (lower.includes("price") || lower.includes("discount")) {
        response = "We have amazing deals right now! Check out our Deals section for flash sales. Plus, affiliate members get exclusive discounts!";
      } else if (lower.includes("payment") || lower.includes("crypto")) {
        response = "We accept credit cards, PayPal, and Web3 wallets (ETH, SOL). All transactions are encrypted and secure.";
      } else {
        response = "That's a great question! Would you like me to help you find a specific product, learn about our services, or explore our affiliate program?";
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 500);

    setInput("");
  };

  const startVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      setInput("Do you have any iPhone deals?");
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-96 h-[600px] bg-black/95 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs text-white font-bold">
                  AI
                </div>
                <span className="font-bold text-white">NexAssistant</span>
              </div>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                  )}
                  <div className={`max-w-[70%] ${msg.role === "user" ? "ml-auto" : ""}`}>
                    <div className={`rounded-2xl p-3 text-sm ${
                      msg.role === "user" 
                        ? "bg-primary/20 border border-primary/20 text-white" 
                        : "bg-white/10 border border-white/10 text-white"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5 space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Ask me anything..." 
                  className="bg-black/50 border-white/10 text-sm h-10"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button size="icon" className="bg-primary hover:bg-primary/90 h-10 w-10" onClick={handleSend}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className={`flex-1 text-xs ${isListening ? 'bg-red-500' : ''}`}
                  onClick={startVoice}
                >
                  <Mic className="w-3 h-3 mr-1" /> Voice
                </Button>
                <Button size="sm" variant="secondary" className="flex-1 text-xs">
                  <Volume2 className="w-3 h-3 mr-1" /> Audio
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
