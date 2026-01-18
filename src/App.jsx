import logo from './assets/logo.png'
import planningImg from './assets/planning.png'
import warehouseImg from './assets/warehouse.png'
import generationImg from './assets/generation.png'
import { useState, useEffect } from 'react'
import ReactGA from 'react-ga4'

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  
  // Google Analytics初期化
  useEffect(() => {
    ReactGA.initialize('G-TXTC22GMSN')
    ReactGA.send('pageview')
  }, [])
  
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

  const mailtoLink = `mailto:magika9644@yahoo.ne.jp?subject=お問い合わせ：${type}&body=お名前：${name}%0Aメールアドレス：${email}%0A%0Aお問い合わせ内容：%0A${message}`
  
  window.location.href = mailtoLink
  
  setShowSuccessMessage(true)
  e.target.reset()
  
  setTimeout(() => {
    setShowSuccessMessage(false)
  }, 5000)
}

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDL Logo" className="h-24 w-24" />
            <span className="font-bold text-lg text-gray-900">Manufacturing DX Lab</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <button onClick={() => scrollToSection('products')} className="hover:text-red-600 transition">製品</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-red-600 transition">機能</button>
            <button onClick={() => scrollToSection('beta')} className="hover:text-red-600 transition">βテスター</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition">お問い合わせ</button>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${planningImg})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            製造業務を、<br />シンプルに。
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            小規模製造業のための統合管理システム
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-md mx-auto border border-white/20">
            <div className="text-lg mb-4 text-gray-200">料金</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-200">初期費用</span>
                <span className="text-3xl font-bold">150,000円～</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">月額料金</span>
                <span className="text-3xl font-bold">30,000円</span>
              </div>
              <div className="text-sm text-gray-300 text-center pt-3 border-t border-white/20">
                全機能・ユーザー無制限
              </div>
            </div>
          </div>

          <div className="bg-red-600/90 backdrop-blur-md rounded-xl p-6 mb-8 max-w-md mx-auto border border-red-500">
            <p className="text-xl font-bold mb-2">βテスター募集中</p>
            <p className="text-gray-100">2025年7月一般販売開始予定</p>
          </div>

          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('beta')}
              className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              βテスター応募
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 px-10 py-4 rounded-lg font-semibold text-lg transition border border-white/40"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </section>

      {/* 販売中の製品 */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">今すぐ使えるツール</h2>
            <p className="text-xl text-gray-600">現場の課題を解決する実践的ソリューション</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-red-600 mb-2">¥6,980</div>
                <h3 className="text-xl font-bold text-gray-900">基準在庫算出ツール</h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                データで決める適正在庫。科学的アプローチで過剰在庫と欠品を防ぐ。
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-red-600 mb-2">¥19,800</div>
                <h3 className="text-xl font-bold text-gray-900">生産計画自動化</h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                MRP展開から製造指図まで自動生成。計画業務を劇的に効率化。
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-2 border-green-500">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-green-600 mb-2">無料</div>
                <h3 className="text-xl font-bold text-gray-900">バーコード在庫管理</h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                スマホで簡単、入出庫を即記録。専用機器不要で今日から使える。
              </p>
              <a 
                href="https://note.com/magika9644/n/nf5e3e8c8c8c8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition text-center"
              >
                無料ダウンロード
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ERPの特徴 - Othello風 */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing DX Lab ERPの特徴</h2>
            <p className="text-xl text-gray-600">製造業務を一元管理する包括的なシステム</p>
          </div>

          {/* 特徴1: MRP展開 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src={generationImg} 
                alt="BOM管理" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">自動MRP展開</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                受注と生産計画を登録するだけで、必要な製造・購買オーダーを自動生成。
                在庫を自動で割り当て、ロット設定も自動考慮。
                今まで手作業で行っていた煩雑な計算作業が大幅に削減されます。
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>BOM展開による所要量自動計算</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>在庫の自動割当・引当</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>最小ロット・刻みロットの自動考慮</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 特徴2: 在庫管理 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <img 
                src={warehouseImg} 
                alt="在庫管理" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">複数拠点在庫管理</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                複数の倉庫・拠点の在庫を一元管理。
                移送指示から入出庫実績まで、リアルタイムで正確に把握できます。
                在庫の所在が明確になり、探す時間が削減されます。
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>複数拠点の在庫を統合管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>拠点間移送の自動指示</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>入出庫実績のリアルタイム反映</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 特徴3: Excel脱却 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={planningImg} 
                alt="Excel脱却" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Excel管理からの脱却</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Excelでの在庫管理、生産計画、原価計算...
                ファイルが増えすぎて、どれが最新かわからない。
                そんな悩みを解決します。
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <div className="font-bold text-gray-900 mb-2">従来のExcel管理</div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✗ ファイルが分散・バージョン管理困難</li>
                    <li>✗ 計算ミス・入力ミスのリスク</li>
                    <li>✗ 属人化・引き継ぎ困難</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="font-bold text-gray-900 mb-2">Manufacturing DX Lab ERP</div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ データ一元管理・常に最新</li>
                    <li>✓ 自動計算でミス削減</li>
                    <li>✓ 誰でも使える標準化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* その他の機能 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">その他の主要機能</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">受注管理</h3>
              <p className="text-gray-600">
                受注データを登録し、製番を発行。納期や数量を一元管理します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">BOM管理</h3>
              <p className="text-gray-600">
                部品構成を管理し、製品がどの部品で構成されているかを明確に。階層構造に対応。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">製造指示</h3>
              <p className="text-gray-600">
                製造オーダーの管理、進捗状況の把握。生産現場への指示を効率化。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">出荷管理</h3>
              <p className="text-gray-600">
                出荷指示から実績管理まで。納期遵守をサポート。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">購買管理</h3>
              <p className="text-gray-600">
                発注から入荷まで一元管理。発注漏れを防ぎ、適正な在庫を維持。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">進捗管理</h3>
              <p className="text-gray-600">
                製造オーダーの進捗をリアルタイムで確認。遅延を早期発見。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* βテスター募集 */}
      <section id="beta" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">βテスター募集</h2>
            <p className="text-xl text-gray-600">2025年3月開始予定</p>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">募集期間</h3>
                <p className="text-gray-700">2025年3月開始予定</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">βテスト期間</h3>
                <p className="text-gray-700">2025年4月～6月（3ヶ月間）</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">参加費用</h3>
                <p className="text-gray-700">無料</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">参加条件</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 小規模製造業（従業員50名以下目安）</li>
                  <li>• フィードバックにご協力いただける方</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mb-8">
              <h3 className="font-bold text-lg mb-4 text-gray-900">βテスター特典</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>βテスト期間中は無料で利用可能</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>正式リリース後も優遇価格でご提供</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✓</span>
                  <span>機能のカスタマイズ相談優先対応</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg font-semibold text-lg text-white transition shadow-lg inline-block"
              >
                βテスターに応募する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contactセクション */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">お問い合わせ</h2>
          <p className="text-gray-300 text-center mb-8">
            製品購入・カスタマイズ見積もり・βテスター応募などお気軽にお問い合わせください
          </p>
          
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg space-y-6">
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

            <div>
              <label className="block text-gray-300 mb-2">お問い合わせ種類 *</label>
              <select 
                name="type"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none"
              >
                <option value="">選択してください</option>
                <option value="βテスター応募">βテスター応募</option>
                <option value="製品購入について">製品購入について</option>
                <option value="カスタマイズ・オーダーメイド見積もり">カスタマイズ・オーダーメイド見積もり</option>
                <option value="技術相談">技術相談</option>
                <option value="その他">その他</option>
              </select>
            </div>

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

            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
            >
              送信する
            </button>
          </form>
          
          {showSuccessMessage && (
            <div className="bg-green-600 text-white p-4 rounded-lg text-center mt-4">
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

      {/* フッター */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2025 Manufacturing DX Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App