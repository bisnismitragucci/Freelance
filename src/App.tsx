/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Shield, FileText, Mail, MessageCircle } from "lucide-react";
import AnimatedAvatar from "./components/Avatar";

export default function App() {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/JxM7bkMzhaiBZ9FNird96i";
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleJoin = () => {
    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
  };

  const showPrivacy = () => {
    setModalContent({
      title: "Kebijakan Privasi",
      content: (
        <div className="space-y-4 text-stone-600">
          <p className="font-bold text-stone-800">1. Pengumpulan Data</p>
          <p>Kami menghargai privasi Anda. Kami hanya mengumpulkan informasi yang diperlukan untuk menghubungkan Anda dengan peluang freelance yang relevan.</p>
          <p className="font-bold text-stone-800">2. Penggunaan Informasi</p>
          <p>Data Anda tidak akan pernah dijual kepada pihak ketiga. Informasi Anda hanya digunakan untuk keperluan koordinasi kerja di dalam platform FreelanceKita.</p>
          <p className="font-bold text-stone-800">3. Keamanan</p>
          <p>Kami menggunakan standar keamanan terkini untuk menjaga data pribadi Anda tetap aman dan terlindungi.</p>
        </div>
      )
    });
  };

  const showTerms = () => {
    setModalContent({
      title: "Syarat & Ketentuan",
      content: (
        <div className="space-y-4 text-stone-600">
          <p className="font-bold text-stone-800">1. Kelayakan User</p>
          <p>Layanan kami terbuka untuk siapa saja yang ingin bekerja secara halal dan produktif, termasuk UMKM dan IRT.</p>
          <p className="font-bold text-stone-800">2. Sistem Pembayaran</p>
          <p>Pembayaran akan dilakukan setelah pekerjaan selesai diverifikasi sesuai dengan target yang ditentukan dalam proyek.</p>
          <p className="font-bold text-stone-800">3. Perilaku Komunitas</p>
          <p>Setiap anggota wajib menjaga etika berkomunikasi di dalam grup koordinasi WhatsApp dan dilarang menyebarkan konten yang melanggar hukum.</p>
        </div>
      )
    });
  };

  const showContact = () => {
    setModalContent({
      title: "Hubungi Kami",
      content: (
        <div className="space-y-6 text-center py-4">
          <p className="text-stone-600">Ada pertanyaan? Kami siap membantu Anda sukses bersama FreelanceKita.</p>
          <div className="grid gap-4">
            <button 
              onClick={handleJoin}
              className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hover:bg-emerald-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-emerald-800">WhatsApp Group</p>
                  <p className="text-xs text-emerald-600">Respon cepat (24/7)</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-left">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-indigo-800">Email Support</p>
                <p className="text-xs text-indigo-600">halo@freelancekita.com</p>
              </div>
            </div>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      {/* Modal Overlay */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-stone-400" />
              </button>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                    {modalContent.title === "Kebijakan Privasi" && <Shield className="w-6 h-6" />}
                    {modalContent.title === "Syarat & Ketentuan" && <FileText className="w-6 h-6" />}
                    {modalContent.title === "Hubungi Kami" && <Mail className="w-6 h-6" />}
                  </div>
                  <h3 className="text-3xl font-black text-stone-900 leading-tight">{modalContent.title}</h3>
                </div>
                <div className="border-t border-stone-100 pt-6">
                  {modalContent.content}
                </div>
                <button 
                  onClick={() => setModalContent(null)}
                  className="w-full py-4 mt-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl md:text-2xl text-indigo-600 tracking-tight">FreelanceKita</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-stone-600">
            <button 
              onClick={() => {
                const element = document.getElementById('benefits');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Cara Kerja
            </button>
            <button 
              onClick={handleJoin}
              className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
            >
              Daftar Gratis
            </button>
          </div>

          <button className="md:hidden text-stone-600 p-2" onClick={handleJoin}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 min-h-[90vh] flex flex-col md:flex-row items-center gap-16 md:gap-8">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border border-emerald-100"
          >
            Cocok untuk UMKM & Ibu Rumah Tangga
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-[80px] font-black text-stone-900 leading-[1] tracking-tight"
            >
              Cuan dari Rumah<br />
              <span className="text-indigo-600">Tanpa Ribet.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-stone-500 max-w-xl leading-relaxed mx-auto md:mx-0"
            >
              Dapatkan penghasilan tambahan dengan pekerjaan freelance yang bisa dilakukan siapa saja, kapan saja, dan di mana saja. Fokus pada hasil, bukan jam kantor.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start pt-4"
          >
            <button 
              onClick={handleJoin}
              className="group w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-3xl font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95"
            >
              Gabung Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats at bottom of left column */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center md:justify-start gap-12 pt-8"
          >
            <div className="space-y-1">
              <p className="text-2xl font-black text-stone-900">50k+</p>
              <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Freelancer Aktif</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-black text-stone-900">Rp 2Jt+</p>
              <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Rata-rata/Bulan</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex-1 w-full max-w-lg md:max-w-none relative">
          <AnimatedAvatar />
        </div>
      </main>

      <div id="benefits" className="h-20" /> {/* Spacer for scroll target */}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400">
        <p className="text-sm font-bold tracking-tight text-stone-300">© 2026 FreelanceKita. Semua orang bisa cuan.</p>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
            <button onClick={showPrivacy} className="hover:text-indigo-600 transition-colors decoration-indigo-200 decoration-2 underline-offset-4">Privacy</button>
            <button onClick={showTerms} className="hover:text-indigo-600 transition-colors decoration-indigo-200 decoration-2 underline-offset-4">Terms</button>
            <button onClick={showContact} className="hover:text-indigo-600 transition-colors decoration-indigo-200 decoration-2 underline-offset-4">Contact</button>
        </div>
      </footer>
    </div>
  );
}
