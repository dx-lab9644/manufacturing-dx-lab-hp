import logo from './assets/logo.png'
import planningImg from './assets/planning.png'
import warehouseImg from './assets/warehouse.png'
import generationImg from './assets/generation.png'
import { useState, useEffect } from 'react'
import ReactGA from 'react-ga4'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    ReactGA.initialize('G-0KS7SZLNYD')
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MDL Logo" className="h-12" />
              <span className="text-xl font-bold text-gray-800">Manufacturing DX Lab</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 transition-colors">製品</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-red-600 transition-colors">機能</button>
              <button onClick={() => scrollToSection('beta')} className="text-gray-700 hover:text-red-600 transition-colors">βテスター</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">お問い合わせ</button>
            </div>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-bold mb-6">
            開発中・βテスター募集中
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            ALISA
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">
            スマートERP
          </p>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            小規模製造業のための統合管理システム
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            製造業の管理をシンプルに。
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <p className="text-white text-lg mb-2">
              <span className="font-bold text-yellow-400">βテスト期間：</span>2026年4月～6月
            </p>
            <p className="text-white text-lg">
              <span className="font-bold text-yellow-400">製品版リリース：</span>2026年7月予定
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('beta')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105"
            >
              βテスターに応募する（3社限定）
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/30"
            >
              機能を見る
            </button>
          </div>
        </div>
      </section>

      {/* ALISAについてセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">ALISAとは</h2>
              <p className="text-xl text-gray-600">
                製造現場の経験から生まれた、本当に使えるスマートERP
              </p>
            </div>

            {/* 頭文字の意味 */}
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-3">A</div>
                <div className="font-bold text-gray-800 mb-2">Automated</div>
                <div className="text-sm text-gray-600">自動化された</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-3">L</div>
                <div className="font-bold text-gray-800 mb-2">Lean</div>
                <div className="text-sm text-gray-600">リーン</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-3">I</div>
                <div className="font-bold text-gray-800 mb-2">Integrated</div>
                <div className="text-sm text-gray-600">統合</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-3">S</div>
                <div className="font-bold text-gray-800 mb-2">Smart</div>
                <div className="text-sm text-gray-600">スマート</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                <div className="text-4xl font-bold text-yellow-600 mb-3">A</div>
                <div className="font-bold text-gray-800 mb-2">Application</div>
                <div className="text-sm text-gray-600">アプリケーション</div>
              </div>
            </div>

            {/* コンセプト */}
            <div className="bg-gray-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                なぜALISAを開発したのか
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  16年間、製造現場で生産管理・在庫管理・生産技術に携わる中で、多くの中小製造業が抱える課題を目の当たりにしてきました。
                </p>
                <p>
                  高額なERPシステムは機能が豊富すぎて使いこなせない。かといって、Excelでの管理では限界がある。そんな「ちょうどいいシステム」が存在しませんでした。
                </p>
                <p>
                  ALISAは、製造現場で本当に必要な機能だけを厳選し、誰でも使いこなせるシンプルさを追求したスマートERPです。自動化・リーン・統合・スマートの4つの要素で、製造業の管理をもっと効率的に、もっとシンプルにします。
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="text-red-600 font-bold mb-2">自動化で効率化</div>
                  <div className="text-sm text-gray-600">
                    MRPによる資材所要量の自動計算、在庫の自動引当で作業時間を大幅削減
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-blue-600 font-bold mb-2">無駄を排除</div>
                  <div className="text-sm text-gray-600">
                    本当に必要な機能だけを搭載。複雑な操作は不要、誰でも使える設計
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="text-green-600 font-bold mb-2">すべてを一元管理</div>
                  <div className="text-sm text-gray-600">
                    生産計画・在庫・製番を統合管理。情報の分散を防ぎ、リアルタイムな状況把握を実現
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">料金プラン（予定）</h2>
            <p className="text-xl text-gray-600">製品版リリース後の料金体系</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                全機能込み
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">ALISA（スマートERP）</h3>
              <p className="text-gray-600">製品版リリース後の料金（予定）</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-baseline justify-between border-b pb-4">
                <span className="text-gray-700 font-medium">初期費用</span>
                <div className="text-right">
                  <span className="text-4xl font-bold text-gray-800">150,000</span>
                  <span className="text-gray-600 ml-2">円〜</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-gray-700 font-medium">月額料金</span>
                <div className="text-right">
                  <span className="text-4xl font-bold text-gray-800">30,000</span>
                  <span className="text-gray-600 ml-2">円</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                含まれる機能
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>生産計画・MRP（資材所要量計画）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>在庫管理・入出庫管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>製番管理・工程管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>BOM（部品表）管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>ユーザー数無制限</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>カスタマイズ対応可能</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 製品一覧セクション */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">製品一覧</h2>
            <p className="text-xl text-gray-600">現場で使える実践的なツール</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* ALISA */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">ALISA（スマートERP）</h3>
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                  開発中・2026年7月リリース予定
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                小規模製造業のための統合管理システム。生産計画、在庫管理、製番管理を一元化。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>MRP対応</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>クラウド対応</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>カスタマイズ可能</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">
                月額 30,000円
              </div>
              <p className="text-sm text-gray-600 mb-6">※製品版リリース後の料金</p>
              <button
                onClick={() => scrollToSection('beta')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                βテスターに応募する
              </button>
            </div>

            {/* バーコード在庫管理 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">バーコード在庫管理</h3>
              <p className="text-gray-600 mb-6">
                スマホでバーコードを読み取るだけの簡単在庫管理。Googleスプレッドシートベース。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>スマホで即導入</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>無料で利用可能</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>サポート有料対応</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-6">
                基本無料
              </div>
              <div className="flex gap-3">
                <a
                  href="https://note.com/nagase_hiroki/n/n7e3c1e71ded2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  使い方を見る
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/1WV38QzKmLxDBN7MFN6L1bX1fLZvuZm_rZlPkiZ9Wg8Y/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  マニュアル
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能セクション */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">主な機能</h2>
            <p className="text-xl text-gray-600">製造現場で本当に必要な機能を厳選</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* 生産計画 */}
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img src={planningImg} alt="生産計画" className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">生産計画・MRP</h3>
              <p className="text-gray-600">
                需要予測から資材所要量を自動計算。必要な部材を必要なタイミングで発注。
              </p>
            </div>

            {/* 在庫管理 */}
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img src={warehouseImg} alt="在庫管理" className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">在庫管理</h3>
              <p className="text-gray-600">
                リアルタイムな在庫状況の把握。入出庫履歴の完全追跡で棚卸も効率化。
              </p>
            </div>

            {/* 製番管理 */}
            <div className="text-center">
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img src={generationImg} alt="製番管理" className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">製番管理</h3>
              <p className="text-gray-600">
                製造指示から完成まで一元管理。工程の進捗状況をリアルタイムで可視化。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* βテスター募集セクション */}
      <section id="beta" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                限定3社募集
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">ALISA（スマートERP）βテスター募集</h2>
              <p className="text-xl text-gray-600">
                製品開発にご協力いただける企業様を募集しています
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 mb-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    募集要項
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <div>
                        <div className="font-semibold">募集社数</div>
                        <div>3社限定</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <div>
                        <div className="font-semibold">期間</div>
                        <div>2026年4月～6月（3ヶ月間）</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <div>
                        <div className="font-semibold">対象</div>
                        <div>製造業であればOK</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    特典
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold">初期費用無料</div>
                        <div className="text-sm text-gray-600">（通常150,000円）</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold">期間中の月額無料</div>
                        <div className="text-sm text-gray-600">（通常30,000円/月）</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold">製品版移行時に料金優遇</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  お願いしたいこと
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>実際の業務でシステムをご利用いただき、使い勝手や機能についてのフィードバックをお願いします</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>月1回程度の簡単なヒアリングにご協力ください</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>気づいた点や改善要望があれば、随時お気軽にお知らせください</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                βテスターに応募する
              </button>
              <p className="text-sm text-gray-600 mt-4">
                お問い合わせフォームから「βテスター希望」とお伝えください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
            <p className="text-xl text-gray-600 mb-12">
              ご質問・ご相談はお気軽にどうぞ
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-gray-600 mb-1">メールでのお問い合わせ</div>
                    <a href="mailto:nagase.hiroki@gmail.com" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors break-all">
                      nagase.hiroki@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    βテスター募集や製品に関するお問い合わせは<br />
                    メールにてお気軽にご連絡ください
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img src={logo} alt="MDL Logo" className="h-10" />
              <span className="text-lg font-bold">Manufacturing DX Lab</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2026 Manufacturing DX Lab. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* トップへ戻るボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-40"
          aria-label="トップへ戻る"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App