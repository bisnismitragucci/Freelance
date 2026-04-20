import { motion } from "motion/react";

export default function AnimatedAvatar() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center" id="avatar-container">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-indigo-100/50 rounded-full blur-[80px]" />
      
      {/* Main Illustration Shape */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-4/5 h-4/5 flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
           {/* Abstract User Character */}
           <motion.path
             d="M100 280 Q200 240 300 280 L300 320 Q200 300 100 320 Z"
             fill="#818CF8"
             animate={{ d: [
               "M100 280 Q200 240 300 280 L300 320 Q200 300 100 320 Z",
               "M110 270 Q200 250 290 270 L290 310 Q200 290 110 310 Z",
               "M100 280 Q200 240 300 280 L300 320 Q200 300 100 320 Z"
             ] }}
             transition={{ duration: 5, repeat: Infinity }}
           />
           <rect x="140" y="120" width="120" height="150" rx="40" fill="#6366F1" />
           <circle cx="200" cy="180" r="30" fill="#FFD29D" opacity="0.9" />
           
           {/* Decorative floating dots/lines */}
           <circle cx="80" cy="100" r="6" fill="#6366F1" opacity="0.3" />
           <circle cx="340" cy="150" r="10" fill="#6366F1" opacity="0.1" />
           <circle cx="300" cy="350" r="4" fill="#6366F1" opacity="0.2" />
        </svg>

        {/* Labels from Image */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 -right-4 md:top-8 md:-right-10 bg-white shadow-xl shadow-indigo-100 p-3 md:p-4 rounded-2xl flex items-center gap-3 border border-stone-50"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-50 rounded-xl flex items-center justify-center">
            💰
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-stone-400 font-bold uppercase tracking-wider">Penghasilan Masuk</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-10 -left-6 md:-left-12 bg-white shadow-xl shadow-indigo-100 p-3 md:p-4 rounded-2xl flex items-center gap-3 border border-stone-50"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            🏠
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-stone-400 font-bold uppercase tracking-wider">Bisa dari Dapur</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
