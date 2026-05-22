import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Manufacturing DX Lab - 製造業のためのDXソリューション',
  description: '小規模製造業のための統合管理システムALISA、在庫管理システムSTELLAを提供。製造現場16年の経験から生まれた本当に使えるシステム。',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-bold mb-6">
            開発中・βテスター募集中
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">ALISA</h1>
          <p className="text-2xl md:text-3xl mb-6 text-yellow-400 font-semibold">スマートERP</p>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">小規模製造業のための統合管理システム</p>
          <p className="text-lg md:text-xl mb-8 text-gray-300">製造業の管理をシンプルに。</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <p className="text-white text-lg mb-2">
              <span className="font-bold text-yellow-400">βテスト期間：</span>2026年7月～9月
            </p>
            <p className="text-white text-lg">
              <span className="font-bold text-yellow-400">製品版リリース：</span>2026年10月予定
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#beta"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105"
            >
              βテスターに応募する（3社限定）
            </Link>
            <Link
              href="/alisa"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/30"
            >
              ALISAを詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ALISAについてセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">ALISAとは</h2>
              <p className="text-xl text-gray-600">製造現場の経験から生まれた、本当に使えるスマートERP</p>
            </div>
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {[
                { letter: 'A', word: 'Automated', desc: '自動化された', color: 'red' },
                { letter: 'L', word: 'Lean', desc: 'リーン', color: 'blue' },
                { letter: 'I', word: 'Integrated', desc: '統合', color: 'green' },
                { letter: 'S', word: 'Smart', desc: 'スマート', color: 'purple' },
                { letter: 'A', word: 'Application', desc: 'アプリケーション', color: 'yellow' },
              ].map((item, i) => (
                <div key={i} className={`text-center p-6 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl`}>
                  <div className={`text-4xl font-bold text-${item.color}-600 mb-3`}>{item.letter}</div>
                  <div className="font-bold text-gray-800 mb-2">{item.word}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">なぜALISAを開発したのか</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>16年間、製造現場で生産管理・在庫管理・生産技術に携わる中で、多くの中小製造業が抱える課題を目の当たりにしてきました。</p>
                <p>高額なERPシステムは機能が豊富すぎて使いこなせない。かといって、Excelでの管理では限界がある。そんな「ちょうどいいシステム」が存在しませんでした。</p>
                <p>ALISAは、製造現場で本当に必要な機能だけを厳選し、誰でも使いこなせるシンプルさを追求したスマートERPです。</p>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  { title: '自動化で効率化', desc: 'MRPによる資材所要量の自動計算、在庫の自動引当で作業時間を大幅削減', color: 'red' },
                  { title: '無駄を排除', desc: '本当に必要な機能だけを搭載。複雑な操作は不要、誰でも使える設計', color: 'blue' },
                  { title: 'すべてを一元管理', desc: '生産計画・在庫・製造を統合管理。情報の分散を防ぎリアルタイムな状況把握を実現', color: 'green' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6">
                    <div className={`text-${item.color}-600 font-bold mb-2`}>{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
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
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">全機能込み</div>
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
                  <span className="text-4xl font-bold text-gray-800">60,000</span>
                  <span className="text-gray-600 ml-2">円</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block"
              >
                お問い合わせ
              </Link>
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
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* ALISA */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-red-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">ALISA（スマートERP）</h3>
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">開発中・2026年10月リリース予定</div>
              </div>
              <p className="text-gray-600 mb-6">小規模製造業のための統合管理システム。生産計画、在庫管理、製造管理を一元化。</p>
              {['MRP対応', 'クラウド対応', 'カスタマイズ可能'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-700 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
              <div className="text-2xl font-bold text-gray-800 mb-2 mt-4">月額 60,000円</div>
              <p className="text-sm text-gray-600 mb-6">※製品版リリース後の料金</p>
              <Link href="/alisa" className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                詳しく見る
              </Link>
            </div>

            {/* STELLA */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">STELLA（在庫管理システム）</h3>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">受注ベース提供</div>
              </div>
              <p className="text-gray-600 mb-6">AI搭載の在庫管理システム。K-meansクラスタリングによるロケーション分析で倉庫業務を最適化。</p>
              {['AI搭載（クラスタリング分析）', 'バーコードスキャン対応', '棚卸・入出庫管理'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-700 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
              <div className="text-2xl font-bold text-gray-800 mb-2 mt-4">月額 60,000円</div>
              <p className="text-sm text-gray-600 mb-6">※初期費用別途</p>
              <Link href="/stella" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                詳しく見る
              </Link>
            </div>

            {/* バーコード在庫管理 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">バーコード在庫管理</h3>
              <p className="text-gray-600 mb-6">スマホでバーコードを読み取るだけの簡単在庫管理。Googleスプレッドシートベース。</p>
              {['スマホで即導入', '無料で利用可能', 'サポート有料対応'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-700 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
              <div className="text-2xl font-bold text-gray-800 mb-6 mt-4">基本無料</div>
              <div className="flex gap-3">
                <a href="https://docs.google.com/spreadsheets/d/1V8bfKntopn85tRWzL0hZpVd-jDZ6tCPPF3TzcMBUVi0/copy" target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center text-sm">
                  ダウンロード
                </a>
                <a href="https://docs.google.com/document/d/1hVaVduehDS-tS2zf-ilVf3N-ONcb1TQ7W0SAHFUpWIE/edit" target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors text-center text-sm">
                  マニュアル
                </a>
              </div>
            </div>

            {/* 生産計画自動化ツール */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">生産計画自動化ツール</h3>
              <p className="text-gray-600 mb-6">直近3ヶ月の出荷実績からばらつきを分析し、リードタイムに合わせた基準在庫と生産計画を自動生成。</p>
              {['デスクトップアプリ', '統計的な分析', '買い切り型'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-700 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
              <div className="text-2xl font-bold text-gray-800 mb-6 mt-4">19,800円（買い切り）</div>
              <Link href="/#contact" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                お問い合わせ
              </Link>
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
            {[
              { img: '/assets/planning.png', title: '生産計画・MRP', desc: '需要予測から資材所要量を自動計算。必要な部材を必要なタイミングで発注。' },
              { img: '/assets/warehouse.png', title: '在庫管理', desc: 'リアルタイムな在庫状況の把握。入出庫履歴の完全追跡で棚卸も効率化。' },
              { img: '/assets/generation.png', title: '製造管理', desc: '製造指示から完成まで一元管理。工程の進捗状況をリアルタイムで可視化。' },
              { img: '/assets/order.png', title: '受注管理', desc: '顧客からの注文を一元管理。納期管理から売上分析まで対応。' },
              { img: '/assets/purchase.png', title: '購買管理', desc: '発注から入庫までを管理。サプライヤー情報の一元化で調達業務を効率化。' },
              { img: '/assets/shipping.png', title: '出荷管理', desc: '出荷指示から配送完了まで追跡。配送状況の可視化で顧客対応も迅速に。' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image src={item.img} alt={item.title} width={400} height={256} className="w-full h-64 object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* βテスター募集セクション */}
      <section id="beta" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">限定3社募集</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">ALISA（スマートERP）βテスター募集</h2>
              <p className="text-xl text-gray-600">製品開発にご協力いただける企業様を募集しています</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-10 mb-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">募集要項</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><span className="font-semibold">募集社数：</span>3社限定</li>
                    <li><span className="font-semibold">期間：</span>2026年7月～9月（3ヶ月間）</li>
                    <li><span className="font-semibold">対象：</span>製造業であればOK</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">特典</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✅ <span className="font-semibold">初期費用無料</span>（通常150,000円）</li>
                    <li>✅ <span className="font-semibold">期間中の月額無料</span>（通常60,000円/月）</li>
                    <li>✅ <span className="font-semibold">製品版移行時に料金優遇</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 inline-block"
              >
                βテスターに応募する
              </Link>
              <p className="text-sm text-gray-600 mt-4">お問い合わせフォームから「βテスター希望」とお伝えください</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
            <p className="text-xl text-gray-600 mb-12">ご質問・ご相談はお気軽にどうぞ</p>
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="flex items-center justify-center gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm text-gray-600 mb-1">メールでのお問い合わせ</div>
                  <a href="mailto:magika9644@yahoo.ne.jp" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                    コチラ
                  </a>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-gray-600 text-sm">
                  βテスター募集や製品に関するお問い合わせは<br />メールにてお気軽にご連絡ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
