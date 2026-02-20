"use client";

import React, { useState } from 'react';
import {
    ArrowLeftIcon,
    ShieldCheckIcon,
    CreditCardIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function WakafPaymentPage() {
    const [amount, setAmount] = useState(50);
    const [method, setMethod] = useState('fpx');

    const quickAmounts = [10, 30, 50, 100, 500];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Mini Header */}
            <nav className="p-6 bg-white border-b border-slate-200 mb-8">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-bold text-sm">
                        <ArrowLeftIcon className="w-4 h-4" /> Kembali
                    </Link>
                    <div className="font-black tracking-tighter text-xl">
                        QASEH<span className="text-emerald-600">WAKAF</span>
                    </div>
                    <div className="w-20"></div> {/* Spacer */}
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-black tracking-tight mb-2">Lengkapkan Wakaf Anda</h1>
                    <p className="text-slate-500 font-medium">Setiap ringgit membawa sinar harapan kepada ummah.</p>
                </header>

                <div className="grid gap-8">
                    {/* 1. PILIH JUMLAH */}
                    <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                            <BanknotesIcon className="w-5 h-5" /> 01. Pilih Jumlah
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                            {quickAmounts.map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setAmount(val)}
                                    className={`py-4 rounded-2xl font-bold transition-all ${amount === val
                                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100 scale-105'
                                            : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                        }`}
                                >
                                    RM{val}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">RM</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-black text-2xl focus:border-emerald-500 outline-none transition-all"
                                placeholder="Jumlah lain..."
                            />
                        </div>
                    </section>

                    {/* 2. MAKLUMAT PERIBADI */}
                    <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                            <ShieldCheckIcon className="w-5 h-5" /> 02. Maklumat Pewakaf
                        </div>

                        <div className="grid gap-4">
                            <input type="text" placeholder="Nama Penuh (seperti dalam IC)" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 outline-none focus:ring-2 ring-emerald-500/20" />
                            <input type="email" placeholder="Alamat Emel" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 outline-none focus:ring-2 ring-emerald-500/20" />
                            <div className="flex gap-4">
                                <input type="tel" placeholder="No. Telefon" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 outline-none focus:ring-2 ring-emerald-500/20" />
                            </div>
                        </div>
                    </section>

                    {/* 3. KAEDAH PEMBAYARAN */}
                    <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-6 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                            <CreditCardIcon className="w-5 h-5" /> 03. Kaedah Pembayaran
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                onClick={() => setMethod('fpx')}
                                className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${method === 'fpx' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100'}`}
                            >
                                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center font-black text-xs">FPX</div>
                                <div className="text-left">
                                    <p className="font-bold text-sm">Online Banking</p>
                                    <p className="text-[10px] text-slate-400 font-bold">Maybank, CIMB, RHB & lain-lain</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setMethod('card')}
                                className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${method === 'card' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100'}`}
                            >
                                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-emerald-600">
                                    <CreditCardIcon className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm">Kad Kredit / Debit</p>
                                    <p className="text-[10px] text-slate-400 font-bold">Visa & Mastercard</p>
                                </div>
                            </button>
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <button className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-slate-200 hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
                        Sahkan Wakaf RM{amount}
                    </button>

                    <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        🔒 Pembayaran selamat & disulitkan secara end-to-end
                    </p>
                </div>
            </main>
        </div>
    );
}