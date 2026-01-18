import logo from './assets/logo.png'
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
            <button onClick={() => scrollToSection('products')} className="hover:text-red-500 transition">Products</button>
            <button onClick={() => scrollToSection('terms')} className="hover:text-red-500 transition">Terms</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition">Contact</button>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション - ERP */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Manufacturing DX Lab ERP
        </h1>
        <p className="text-xl text-gray-400 mb-8 text-center">
          小規模製造業のための統合管理システム
        </p>
        
        {/* 料金表示 */}
        <div className="bg-gray-800 border-2 border-red-500 rounded-lg p-8 mb-8 max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4 text-center text-red-400">料金</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-300">初期費用</span>
              <span className="text-2xl font-bold text-white">150,000円～</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-300">月額料金</span>
              <span className="text-2xl font-bold text-white">30,000円</span>
            </div>
            <div className="text-center pt-2">
              <p className="text-sm text-gray-400">全機能・ユーザー無制限</p>
            </div>
          </div>
        </div>

        <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mb-8 max-w-md w-full text-center">
          <p className="text-xl font-bold text-red-400 mb-2">βテスター募集中</p>
          <p className="text-gray-300">2025年7月一般販売開始予定</p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => scrollToSection('beta')}
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            βテスター応募
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            詳細を見る
          </button>
        </div>
      </section>

      {/* 販売中の製品 */}
      <section id="products" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">今すぐ導入できる製造DXツール</h2>
          <p className="text-gray-400 text-center mb-12">現場を知り尽くした実践的ツール</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 基準在庫算出ツール */}
            <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-red-500">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">基準在庫算出ツール</h3>
                <span className="text-3xl font-bold text-white">¥6,980</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                データで決める適正在庫。過去の出荷実績から科学的に基準在庫を算出。
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            {/* 生産計画自動化パッケージ */}
            <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-red-500">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-red-400 mb-2">生産計画自動化</h3>
                <span className="text-3xl font-bold text-white">¥19,800</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                受注データからMRP展開、製造指図まで自動生成。計画業務を大幅削減。
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition"
              >
                購入相談
              </button>
            </div>

            {/* バーコード在庫管理システム */}
            <div className="bg-gray-900 p-6 rounded-lg border-t-4 border-green-500">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">バーコード在庫管理</h3>
                <span className="text-3xl font-bold text-green-400">無料</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                スマホで簡単、入出庫を即記録。専用機器不要で今日から使える。
              </p>
              <a 
                href="https://note.com/magika9644/n/nf5e3e8c8c8c8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold transition text-center"
              >
                無料ダウンロード
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ERP機能紹介 */}
      <section id="features" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">主要機能</h2>
          <p className="text-gray-400 text-center mb-12">製造業務を一元管理</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 受注管理 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <span className="material-icons text-6xl text-red-400 mb-4">assignment</span>
              <h3 className="text-xl font-bold mb-3 text-white">受注管理</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                受注データを登録し、製番を発行。納期や数量を一元管理します。
              </p>
            </div>

            {/* BOM管理 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <span className="material-icons text-6xl text-red-400 mb-4">account_tree</span>
              <h3 className="text-xl font-bold mb-3 text-white">BOM管理</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                部品構成を管理し、製品がどの部品で構成されているかを明確に。階層構造に対応。
              </p>
            </div>

            {/* MRP展開 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center border-2 border-red-500">
              <span className="material-icons text-6xl text-red-400 mb-4">settings_suggest</span>
              <h3 className="text-xl font-bold mb-3 text-white">MRP展開</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                受注と生産計画から必要な製造・購買オーダーを自動生成。在庫の自動割当、ロット設定の自動考慮。
              </p>
            </div>

            {/* 在庫管理 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <span className="material-icons text-6xl text-red-400 mb-4">inventory</span>
              <h3 className="text-xl font-bold mb-3 text-white">在庫管理</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                複数拠点の在庫を一元管理。移送指示や入出庫実績を正確に把握。
              </p>
            </div>

            {/* 製造指示 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <span className="material-icons text-6xl text-red-400 mb-4">build</span>
              <h3 className="text-xl font-bold mb-3 text-white">製造指示</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                製造オーダーの管理、進捗状況の把握。生産現場への指示を効率化。
              </p>
            </div>

            {/* 出荷管理 */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <span className="material-icons text-6xl text-red-400 mb-4">local_shipping</span>
              <h3 className="text-xl font-bold mb-3 text-white">出荷管理</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                出荷指示から実績管理まで。納期遵守をサポート。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビフォー・アフター */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Excel管理からの脱却</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-400">従来のExcel管理</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>在庫を確認しながら手計算</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>BOM展開を手作業で実施</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>発注数量の計算ミスが発生</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>属人化しやすい</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Manufacturing DX Lab ERP</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>受注と生産計画を登録</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>MRP展開で製造・購買オーダーを自動生成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>在庫の自動割当</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ロット設定の自動考慮</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-lg font-semibold text-white">
                  今まで手作業で行っていた作業が大幅に削減されます
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* βテスター募集 */}
      <section id="beta" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">βテスター募集</h2>
          
          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-400">募集要項</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-bold text-white mb-2">募集期間</h4>
                <p>2025年3月開始予定</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">βテスト期間</h4>
                <p>2025年4月～6月（3ヶ月間）</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">参加費用</h4>
                <p>無料</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">参加条件</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>小規模製造業（従業員50名以下目安）</li>
                  <li>フィードバックにご協力いただける方</li>
                  <li>週1回程度の使用状況報告が可能な方</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">βテスター特典</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>βテスト期間中は無料で利用可能</li>
                  <li>正式リリース後も優遇価格でご提供</li>
                  <li>機能のカスタマイズ相談優先対応</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg font-semibold text-lg transition"
            >
              βテスターに応募する
            </button>
            <p className="text-gray-400 text-sm mt-4">
              お問い合わせフォームから「βテスター応募」を選択してください
            </p>
          </div>
        </div>
      </section>

      {/* 利用規約セクション */}
      <section id="terms" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">利用規約</h2>
          
          <div className="bg-gray-900 p-8 rounded-lg space-y-8 text-gray-300">
            <p className="text-sm text-gray-400 mb-8">
              製品購入前に必ず<span className="text-red-400 font-bold">利用規約</span>をご確認ください
            </p>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第1条（適用範囲）</h3>
              <p className="leading-relaxed mb-2">
                本規約は、Manufacturing DX Lab（以下「当方」）が提供する製品・サービスの利用に関する条件を定めるものです。本規約に同意の上、製品をご購入ください。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第2条（製品の性質）</h3>
              <p className="leading-relaxed mb-2">
                当方が提供する製品は、デジタルコンテンツ（VBAツール、スクリプト、マニュアル等）です。以下の点をご理解の上でご購入ください。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>買い切り型の製品です（サブスクリプションではありません）</li>
                <li>マニュアルは完備していますが、個別サポートは提供しておりません</li>
                <li>製品は「現状のまま」提供され、動作保証はありません</li>
                <li>お客様の環境での動作を保証するものではありません</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第3条（返金・返品ポリシー）</h3>
              <p className="leading-relaxed mb-2">
                デジタルコンテンツという性質上、以下の通り返金・返品は一切お受けできません。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>購入後の返金・返品は理由を問わず対応できません</li>
                <li>「動作しなかった」「思っていたものと違った」等の理由でも返金はできません</li>
                <li>マニュアルをよくお読みになり、ご自身で動作させる必要があります</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第4条（サポート範囲）</h3>
              <p className="leading-relaxed mb-2">
                買い切り型製品のため、以下の通りサポートは限定的です。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>マニュアルは完備しており、基本的な使い方は記載されています</li>
                <li>個別の質問対応、カスタマイズ相談は別途有償となります</li>
                <li>製品のアップデートや機能追加は保証されません</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第5条（決済方法）</h3>
              <p className="leading-relaxed mb-2">
                現在、以下の決済方法に対応しています。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>銀行振込のみ</li>
                <li>振込手数料はお客様負担となります</li>
                <li>入金確認後、製品とマニュアルをメールで送付いたします</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第6条（免責事項）</h3>
              <p className="leading-relaxed mb-2">
                当方は、以下の事項について一切の責任を負いません。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>製品の使用により生じたいかなる損害</li>
                <li>お客様の環境での動作不良</li>
                <li>データの消失や破損</li>
                <li>業務への影響や機会損失</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第7条（禁止事項）</h3>
              <p className="leading-relaxed mb-2">
                購入者は以下の行為を行ってはなりません。
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>製品の再配布、転売</li>
                <li>マニュアルの無断転載、複製</li>
                <li>逆コンパイル、リバースエンジニアリング</li>
                <li>その他、当方の権利を侵害する行為</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第8条（価格改定）</h3>
              <p className="leading-relaxed">
                製品の価格は予告なく変更される場合があります。
                既にご購入いただいたお客様への価格変更の遡及適用はありません。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第9条（規約の変更）</h3>
              <p className="leading-relaxed">
                当方は、必要に応じて本規約を変更できるものとします。
                変更後の規約は、本ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">第10条（準拠法・管轄裁判所）</h3>
              <p className="leading-relaxed">
                本規約は日本法に準拠し、本規約に関する紛争については、香川県高松市を管轄する裁判所を専属的合意管轄裁判所とします。
              </p>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">制定日：2025年1月16日</p>
              <p className="text-sm text-gray-400">Manufacturing DX Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contactセクション */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
          <p className="text-gray-300 text-center mb-8">
            製品購入・カスタマイズ見積もり・βテスター応募・その他お問い合わせはこちら
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
                <option value="βテスター応募">βテスター応募</option>
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
            こちら
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App