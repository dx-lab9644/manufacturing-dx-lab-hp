import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-6 md:mb-0">
            <Image src="/assets/logo.png" alt="MDL Logo" width={40} height={40} />
            <span className="text-lg font-bold">Manufacturing DX Lab</span>
          </Link>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/alisa" className="hover:text-white transition-colors">ALISA</Link>
            <Link href="/stella" className="hover:text-white transition-colors">STELLA</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">お問い合わせ</Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2026 Manufacturing DX Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
