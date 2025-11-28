import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Paperclip, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <div className="font-bold text-white">Nex Assistant</div>
                  <div className="text-xs text-green-400">Online</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-white" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">AI</div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                  Hello! 👋 I'm your AI shopping assistant. How can I help you find the perfect product today?
                </div>
              </div>
              
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">Me</div>
                <div className="bg-primary/20 border border-primary/20 rounded-2xl rounded-tr-none p-3 text-sm text-white max-w-[80%]">
                  I'm looking for noise cancelling headphones.
                </div>
              </div>

              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">AI</div>
                 <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                   I recommend the <b>Sony WH-1000XM5</b>. They have industry-leading noise cancellation and 30-hour battery life. Would you like to see them in 3D?
                   <div className="mt-2 flex gap-2">
                     <Button size="sm" variant="secondary" className="h-7 text-xs">View Product</Button>
                     <Button size="sm" variant="outline" className="h-7 text-xs border-white/10">Compare</Button>
                   </div>
                 </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white h-8 w-8">
                   <Paperclip className="w-4 h-4" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="bg-black/50 border-white/10 text-sm h-10 focus-visible:ring-primary"
                />
                <Button size="icon" className="bg-primary hover:bg-primary/90 h-10 w-10">
                   <Send className="w-4 h-4" />
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
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
