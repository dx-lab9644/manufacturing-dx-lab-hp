import logo from './assets/logo.png'
import { useState } from 'react'

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

 const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const name = formData.get('name')
  const email = formData.get('email')
  const type = formData.get('type')
  const message = formData.get('message')

  const mailtoLink = `mailto:magika9644@yahoo.ne.jp?subject=...
  
  window.location.href = mailtoLink
  
  // 成功メッセージ表示
  setShowSuccessMessage(true)
  e.target.reset()
  
  // 5秒後にメッセージを消す
  setTimeout(() => {
    setShowSuccessMessage(false)
  }, 5000)
}

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDL Logo" className="h-32 w-32" />
            <span className="font-bold text-lg">Manufacturing DX Lab</span>
          </div>
          <nav className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition">About</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-red-500 transition">Products</button>
            <button onClick={() => scrollToSection('works')} className="hover:text-red-500 transition">Works</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition">Contact</button>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="h-screen flex flex-col justify-center items-center px-4 pt-20">
        <h1 className="text-6xl font-bold mb-4 text-center">
          製造業 × DX
        </h1>
        <p className="text-xl text-gray-400 mb-8 text-center">
          16年の現場経験で培った実践的なデジタル変革
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            製品を見る
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            お問い合わせ
          </button>
        </div>
      </section>

      {/* Aboutセクション */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            製造業で16年間、生産管理・生産技術・品質管理・業務改善を経験。
            現場の課題を深く理解し、実践的なDXソリューションを提供します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-400">生産管理</h3>
              <p className="text-gray-400">MRP展開・在庫最適化・需要予測</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-400">システム開発</h3>
              <p className="text-gray-400">VBA・Python・ERP構築</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-400">実績</h3>
              <p className="text-gray-400">在庫2.32億円削減・480時間自動化</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productsセクション */}
      <section id="products" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Products</h2>
          <p className="text-gray-400 text-center mb-12">現場を知り尽くした16年の経験から生まれた実践的ツール</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 基準在庫算出ツール */}
            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-400">基準在庫算出ツール</h3>
                <span className="text-2xl font-bold text-white">¥3,980</span>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">もう勘に頼らない！データで決める適正在庫</p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                過去の出荷実績から科学的に基準在庫を算出。エントロピー分析で需要の安定性を可視化し、過剰在庫と欠品リスクを同時に削減。このツールがあれば、「なんとなく」の発注から卒業できます。
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">こんな人におすすめ：</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 在庫が多すぎるのか少なすぎるのかわからない</li>
                  <li>• 欠品が怖くて多めに発注してしまう</li>
                  <li>• データに基づいた意思決定をしたい</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            {/* 生産計画自動化パッケージ */}
            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-400">生産計画自動化パッケージ</h3>
                <span className="text-2xl font-bold text-white">¥19,800</span>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">朝イチの計画立案、もう悩まない！</p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                受注データを入力するだけで、MRP展開から製造指図まで自動生成。基準在庫算出機能も搭載し、迅速な意思決定を強力にサポート。毎朝の計画業務が10分で終わります。
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">こんな人におすすめ：</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 毎日の生産計画立案に時間がかかりすぎる</li>
                  <li>• Excelで手作業管理に限界を感じている</li>
                  <li>• 小ロット多品種生産で計画が複雑</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            {/* GASバーコードPOSシステム */}
            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-400">GASバーコードPOSシステム</h3>
                <span className="text-2xl font-bold text-white">¥9,800</span>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">スマホがPOSレジに！在庫管理もリアルタイム</p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                カメラでバーコードを読み取るだけで入出庫管理が完結。Googleスプレッドシートと連携し、リアルタイムで在庫数を把握。専用機器不要、スマホ・タブレットで今日から使えます。
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">こんな人におすすめ：</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 在庫の入出庫をアナログ管理している</li>
                  <li>• POSレジは高すぎて導入できない</li>
                  <li>• 複数拠点でリアルタイムに在庫を共有したい</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            {/* カスタマイズ対応 */}
            <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-400">カスタマイズ・オーダーメイド</h3>
                <span className="text-lg font-bold text-white">お見積もり</span>
              </div>
              <p className="text-gray-300 mb-4 font-semibold">御社専用にフルカスタマイズ</p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                既存ツールのカスタマイズから、完全オリジナルシステムの開発まで対応。現場を知り尽くした16年の製造業経験で、本当に使えるシステムを作ります。オーダーメイドでの開発も承ります。
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">対応可能な開発：</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Excel VBA 自動化ツール開発</li>
                  <li>• Google Apps Script アプリ開発</li>
                  <li>• Python による業務システム構築</li>
                  <li>• 既存ツールの機能追加・改修</li>
                </ul>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
              >
                お見積もり依頼
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Worksセクション */}
      <section id="works" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Works</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-2 text-red-400">在庫削減プロジェクト</h3>
              <p className="text-gray-400 mb-4">2.32億円の在庫削減を実現</p>
              <p className="text-gray-300">
                需要予測システムの構築とMRP最適化により、過剰在庫を大幅削減。
                エントロピー分析を活用した科学的アプローチで成果を達成。
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-2 text-red-400">VBA自動化ツール</h3>
              <p className="text-gray-400 mb-4">年間480時間の業務時間削減</p>
              <p className="text-gray-300">
                生産管理業務の自動化ツールを10種類開発。
                データ集計・レポート作成・在庫管理を効率化。
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-2 text-red-400">中小製造業向けERP開発中</h3>
              <p className="text-gray-400 mb-4">Django + React で構築</p>
              <p className="text-gray-300">
                現場の声を反映したシンプルで使いやすいERPシステム。
                2026年リリース予定。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contactセクション */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <p className="text-gray-300 text-center mb-8">
            製品購入・カスタマイズ見積もり・その他お問い合わせはこちら
          </p>
          
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg space-y-6">
            {/* お名前 */}
            <div>
              <label className="block text-gray-300 mb-2">お名前 *</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-gray-300 mb-2">メールアドレス *</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
                placeholder="example@company.com"
              />
            </div>

            {/* お問い合わせ種類 */}
            <div>
              <label className="block text-gray-300 mb-2">お問い合わせ種類 *</label>
              <select 
                name="type"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
              >
                <option value="">選択してください</option>
                <option value="製品購入について">製品購入について</option>
                <option value="カスタマイズ・オーダーメイド見積もり">カスタマイズ・オーダーメイド見積もり</option>
                <option value="技術相談">技術相談</option>
                <option value="その他">その他</option>
              </select>
            </div>

            {/* メッセージ */}
            <div>
              <label className="block text-gray-300 mb-2">メッセージ *</label>
              <textarea 
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
            >
              送信する
            </button>
          </form>
            {/* 成功メッセージ */}
            {showSuccessMessage && (
            <div className="bg-green-600 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">✓ お問い合わせありがとうございます！</p>
            <p className="text-sm mt-1">メーラーが起動します。送信を完了してください。</p>
            </div>
            )}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">または直接メールでのお問い合わせも可能です</p>
            <a 
            href="mailto:magika9644@yahoo.ne.jp"
            className="text-red-400 hover:text-red-300 text-lg font-semibold transition"
            >
            magika9644@yahoo.ne.jp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App