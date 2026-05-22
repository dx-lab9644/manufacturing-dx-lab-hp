'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="MDL Logo" width={48} height={48} />
            <span className="text-xl font-bold text-gray-800">Manufacturing DX Lab</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#products" className="text-gray-700 hover:text-red-600 transition-colors">製品</Link>
            <Link href="/alisa" className="text-gray-700 hover:text-red-600 transition-colors">ALISA</Link>
            <Link href="/stella" className="text-gray-700 hover:text-red-600 transition-colors">STELLA</Link>
            <Link href="/#beta" className="text-gray-700 hover:text-red-600 transition-colors">βテスター</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-600 transition-colors">お問い合わせ</Link>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t pt-4">
            <Link href="/#products" className="text-gray-700 hover:text-red-600" onClick={() => setMenuOpen(false)}>製品</Link>
            <Link href="/alisa" className="text-gray-700 hover:text-red-600" onClick={() => setMenuOpen(false)}>ALISA</Link>
            <Link href="/stella" className="text-gray-700 hover:text-red-600" onClick={() => setMenuOpen(false)}>STELLA</Link>
            <Link href="/#beta" className="text-gray-700 hover:text-red-600" onClick={() => setMenuOpen(false)}>βテスター</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-600" onClick={() => setMenuOpen(false)}>お問い合わせ</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
