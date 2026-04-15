"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScholarBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Expanded Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originY: 1, originX: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-0 right-0 w-72 h-[22rem] rounded-2xl shadow-[0_20px_50px_rgba(10,88,202,0.2)] overflow-hidden bg-white border border-outline flex flex-col"
          >
            <div className="bg-primary p-4 flex items-center justify-between text-white border-b border-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 border-2 border-white/30">
                  <img alt="Scholar Assistant Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTRl5WZYvMOCYVTFZpKxMdwgXgMzYCY2tFrG9YuTG_2HpQ2IEmc97w6G-8I-VPe10hjGtIux3Xc7mbhn85BATJyjabwHi31Z-sElcNIsR_2ohVEHCh2t-r9v9KsNyuLtfBY0VfWdZdLb7tOj6gcxSpkdkoAp9PCixhZ8oRfXDc7le0GBjPfoFxRJsoRds-e6dayy-n04oJBvaz40wRA2_1S7S6NOk_wHB9vJWaiw-PLZkJDEY1HW74FlFPXx1KJ_4p8RcpDJZRA3kc" />
                </div>
                <div>
                  <p className="font-bold text-sm">Scholar Bot</p>
                  <p className="text-[0.6rem] text-white/80 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded-full transition-colors relative z-10">
                <span className="material-symbols-outlined text-xl block">close</span>
              </button>
            </div>
            
            <div className="flex-grow p-4 bg-slate-50 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-outline-variant p-3 rounded-2xl rounded-tl-sm text-xs text-on-surface-variant max-w-[90%] shadow-sm"
              >
                Greetings, Scholar. How can I assist you in your NEET journey today?
              </motion.div>
            </div>
            
            <div className="p-3 bg-white border-t border-outline-variant flex items-center gap-2">
              <input className="flex-grow bg-slate-50 border-none text-xs focus:ring-1 focus:ring-primary/30 px-4 py-2.5 rounded-full outline-none transition-all" placeholder="Type message..." type="text" />
              <button className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-md">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Toggle) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="absolute bottom-0 right-0 w-14 h-14 bg-primary text-white rounded-full shadow-[0_10px_40px_rgba(10,88,202,0.4)] flex items-center justify-center border border-white/10 group"
          >
            {/* Subtle continuous pulse for the button to draw attention */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-primary"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="material-symbols-outlined text-2xl relative z-10 group-hover:animate-bounce">chat</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
