"use client";

import React from 'react';
import { motion } from "framer-motion"; // Pastikan import ni betul
import {
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const terkumpul = 450000;
  const sasaran = 1000000;
  const peratus = (terkumpul / sasaran) * 100;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-emerald-100">

      {/* 1. ANNOUNCEMENT */}
      {/* <div className="bg-emerald-900 text-emerald-100 text-[10px] py-2.5 text-center font-bold tracking-[0.2em] uppercase">
        <span className="bg-emerald-500 text-white px-2 py-0.5 rounded mr-2">RASMI</span>
        Pelepasan Cukai Pendapatan Di Bawah Seksyen 44(6) Akta Cukai 1967
      </div> */}

      {/* 2. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
          QASEH<span className="text-emerald-600">WAKAF</span>
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
          <a href="#" className="hover:text-emerald-600 transition">Program</a>
          <a href="#" className="hover:text-emerald-600 transition">Transparansi</a>
          <a href="#" className="hover:text-emerald-600 transition">Hubungi</a>
        </div>
        <a href="/wakaf" className="bg-emerald-600 text-white px-6 py-2 text-center rounded-full font-bold text-xs uppercase tracking-widest shadow-xl shadow-slate-200 active:scale-95 transition-all">
          Infaq Sekarang
        </a>
      </nav>

      {/* 3. HERO SECTION + CTA */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">
            <CheckBadgeIcon className="w-5 h-5" />
            Platform Wakaf Patuh Syariah
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Mula gerak bila 100px masuk skrin
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk gerakan lebih "mahal"
              delay: 0.1
            }}

            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
            Ubah <span className="text-emerald-600 italic font-serif text-5xl md:text-7xl">Niat</span> <br /> Menjadi Jariah.
          </motion.h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-8 max-w-lg font-medium">
            Sumbangan anda diagihkan secara telus kepada pendidikan asnaf, fasiliti kesihatan, dan pembangunan masjid di seluruh Malaysia.
          </p>

          {/* --- PROGRESS BAR SECTION --- */}
          <div className="mb-10 p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-50 max-w-lg">
            <div className="flex justify-between items-end mb-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dana Terkumpul</span>
                <span className="text-3xl font-black text-slate-900">RM {terkumpul.toLocaleString()}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xl font-black text-emerald-600">{peratus.toFixed(0)}%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Sasaran RM 1.0M</span>
              </div>
            </div>

            {/* Bar Frame */}
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-1 border border-slate-50">
              {/* Progress Color */}
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                style={{ width: `${peratus}%` }}
              ></div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="/wakaf" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-100 active:scale-95">
              Mula Berwakaf <ArrowRightIcon className="w-5 h-5" />
            </a>
            <button className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-slate-50 transition-all">
              <PlayIcon className="w-5 h-5 fill-slate-900" /> Lihat Video
            </button>
          </div>

          <div className="flex items-center gap-4 border-t border-slate-100 pt-8 text-slate-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden text-[10px]">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest">Disertai oleh 12k+ Pewakaf</p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-4 bg-emerald-50 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-all"></div>
          <div className="relative rounded-[3.5rem] overflow-hidden shadow-3xl bg-slate-100 h-[500px] md:h-[650px]">
            <img
              src="/images/masjid.jpeg"
              className="w-full h-full object-cover"
              alt="Wakaf"
              onError={(e) => {
                e.currentTarget.onerror = null; // Elak loop
                e.currentTarget.src = "/images/masjid.jpeg";
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. PROGRAM CARDS */}
      <section className="bg-slate-50 py-32 px-8">
        <div className="max-w-7xl mx-auto ">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 flex flex-wrap items-center gap-4">
              {/* Perkataan ni stay, tak gerak */}
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} // Mula gerak bila 100px masuk skrin
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk gerakan lebih "mahal"
                  delay: 0.1
                }}


                className="italic">Inisiatif</motion.span>

              {/* Hanya kotak hijau ni yang slide right */}
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} // Mula gerak bila 100px masuk skrin
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk gerakan lebih "mahal"
                  delay: 0.1
                }}
                className="bg-emerald-600 text-white px-6 py-2 text-3xl md:text-5xl shadow-xl shadow-emerald-100 not-italic block"
              >
                Terkini
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }} // Mula gerak bila 100px masuk skrin
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk gerakan lebih "mahal"
                delay: 0.1
              }}
              className="text-slate-500 font-medium text-lg border-l-4 border-emerald-500 pl-4">
              Pilih sektor yang ingin anda bantu untuk pembangunan ummah.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wakaf Pendidikan", icon: AcademicCapIcon, color: "emerald", desc: "Membiayai kos pendidikan dan infrastruktur sekolah untuk anak-anak asnaf." },
              { title: "Kesihatan Ummah", icon: HeartIcon, color: "blue", desc: "Pembelian mesin dialisis dan peralatan perubatan untuk klinik komuniti." },
              { title: "Infaq Gelandangan", icon: UserGroupIcon, color: "purple", desc: "Penyediaan makanan berkhasiat harian untuk golongan miskin bandar." }
            ].map((card, index) => (
              <div key={index} className="bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className={`w-16 h-16 bg-${card.color}-100 rounded-2xl flex items-center justify-center text-${card.color}-600 mb-8`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{card.desc}</p>
                <a href="#" className={`font-bold text-${card.color}-600 flex items-center gap-2`}>
                  Lihat Detail <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-300 text-[10px] font-black tracking-[0.4em] uppercase">
        Digital Wakaf Infrastructure • 2026
      </footer>
    </div>
  );
}