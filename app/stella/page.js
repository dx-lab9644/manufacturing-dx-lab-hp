import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'STELLA（在庫管理システム）| Manufacturing DX Lab',
  description: 'AI搭載の在庫管理システム。K-meansクラスタリングによるロケーション分析で倉庫業務を最適化。',
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: '在庫管理',
    desc: 'リアルタイムな在庫状況の把握。入出庫の記録から現在庫を常に正確に管理します。',
    details: ['リアルタイム在庫数量管理', '商品マスター管理', '在庫アラート設定', 'ロット・シリアル管理']
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: 'バーコードスキャン対応',
    desc: 'スマホやハンディターミナルでバーコードをスキャンするだけで入出庫処理が完了。入力ミスを根絶します。',
    details: ['スマホカメラでのバーコードスキャン', 'ハンディターミナル対応', 'QRコード対応', '入出庫の高速処理']
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'AI分析（K-means クラスタリング）',
    desc: '出荷実績データをAIが自動分析。商品をABC分析+クラスタリングで分類し、最適なロケーション配置を提案します。',
    details: ['K-meansクラスタリングによる商品分類', 'ABC分析の自動実行', '最適ロケーション配置の提案', '動態分析レポート']
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: '棚卸管理',
    desc: '棚卸作業をシステムでサポート。差異の自動検出・棚卸結果の記録・調整処理まで一貫して管理します。',
    details: ['棚卸リストの自動生成', '差異の自動検出', '棚卸調整処理', '棚卸履歴管理']
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'レポート・分析',
    desc: '在庫推移・入出庫実績・回転率など多彩なレポートを自動生成。Excelエクスポートにも対応。',
    details: ['在庫推移グラフ', '入出庫実績レポート', '在庫回転率分析', 'Excelエクスポート対応']
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'ユーザー・権限管理',
    desc: 'ユーザーごとにアクセス権限を細かく設定。部門別・役職別の情報管理が可能です。',
    details: ['ユーザー追加・管理', '権限グループの設定', '操作ログの記録', '部門別アクセス制御']
  },
]

const steps = [
  { num: '01', title: 'お問い合わせ・ヒアリング', desc: '現在の在庫管理の課題、商品数、倉庫規模などをヒアリングします。' },
  { num: '02', title: '要件定義・カスタマイズ確認', desc: '必要な機能・カスタマイズ項目を確認し、お見積りを提出します。' },
  { num: '03', title: 'マスターデータ設定', desc: '商品マスター・ロケーションマスターなどの初期データを設定します。' },
  { num: '04', title: 'トレーニング・テスト運用', desc: '操作トレーニングの後、テスト運用で問題がないか確認します。' },
  { num: '05', title: '本稼働・継続サポート', desc: '本稼働後も随時サポート。AI分析の活用方法もアドバイスします。' },
]

export default function StellaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーロー */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
              受注ベース提供・AI搭載
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">STELLA</h1>
            <p className="text-2xl text-blue-300 font-semibold mb-6">Smart Technology for Efficient Logistics & Lean Assets</p>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              AI搭載の在庫管理システム。<br />
              K-meansクラスタリングで最適な倉庫レイアウトを実現。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105">
                お問い合わせ・お見積り
              </Link>
              <Link href="#features" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/30">
                機能を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* スクリーンショット（プレースホルダー） */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">システム画面</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['ダッシュボード', 'トップメニュー'].map((name) => (
                <div key={name} className="bg-white border-2 border-dashed border-gray-300 rounded-2xl aspect-video flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 transition-colors">
                  <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-medium text-gray-500">{name}</p>
                  <p className="text-sm text-gray-400 mt-1">スクリーンショット準備中</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STELLAの特徴 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">STELLAの強み：AI搭載ロケーション分析</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'K-meansクラスタリング', desc: '出荷頻度・数量・パターンをAIが自動分類。ABCDEの5段階で商品を格付けします。', color: 'blue' },
                  { title: '最適配置の提案', desc: '分析結果をもとに、ピッキング効率が最大になるロケーション配置を提案します。', color: 'blue' },
                  { title: '継続的な改善', desc: '定期的な再分析で、需要変化に合わせてロケーションを最適化し続けます。', color: 'blue' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6">
                    <div className="text-blue-600 font-bold mb-2">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能一覧 */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">機能一覧</h2>
            <p className="text-xl text-gray-600">倉庫・在庫管理に必要な機能をすべて搭載</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{f.desc}</p>
                <ul className="space-y-1">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">料金プラン</h2>
            <p className="text-xl text-gray-600">受注ベースでご提供。まずはお気軽にご相談ください。</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">受注ベース提供</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">STELLA（在庫管理システム）</h3>
              <p className="text-gray-600">規模・要件に応じてカスタマイズ対応</p>
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
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-800 mb-3">含まれるもの</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                {['全機能込み（追加料金なし）', 'AI分析機能（K-meansクラスタリング）', 'ユーザー数無制限', '初期設定・データ移行サポート', 'トレーニング実施', '継続的な運用サポート', 'カスタマイズ対応（別途お見積り）'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block">
                お問い合わせ・お見積り
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 導入フロー */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">導入フロー</h2>
            <p className="text-xl text-gray-600">お問い合わせから本稼働まで丁寧にサポート</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">在庫管理の課題、STELLAで解決しませんか</h2>
          <p className="text-gray-400 mb-8">AI分析で倉庫の効率を最大化。まずはお気軽にご相談ください。</p>
          <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 inline-block">
            お問い合わせ
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
