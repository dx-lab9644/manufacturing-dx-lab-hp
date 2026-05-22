import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'ALISA（スマートERP）| Manufacturing DX Lab',
  description: '小規模製造業のための統合管理システム。MRP・在庫・製造・受注・購買・出荷を一元管理。',
}

const features = [
  {
    img: '/assets/planning.png',
    title: '生産計画・MRP',
    desc: '需要予測から資材所要量を自動計算。必要な部材を必要なタイミングで発注できます。過剰在庫・欠品リスクを最小化します。',
    details: ['MRPによる資材所要量の自動計算', '納期から逆算した生産スケジュール作成', '工程ごとの進捗管理']
  },
  {
    img: '/assets/warehouse.png',
    title: '在庫管理',
    desc: 'リアルタイムな在庫状況の把握。入出庫履歴の完全追跡で棚卸も効率化。バーコードスキャンにも対応。',
    details: ['リアルタイム在庫状況の可視化', '入出庫履歴の完全追跡', 'バーコードスキャン対応', '棚卸業務の効率化']
  },
  {
    img: '/assets/generation.png',
    title: '製造管理',
    desc: '製造指示から完成まで一元管理。工程の進捗状況をリアルタイムで可視化し、生産の遅延を早期発見。',
    details: ['製造指示の発行・管理', '工程進捗のリアルタイム管理', '完成品の品質記録', '製造コストの追跡']
  },
  {
    img: '/assets/order.png',
    title: '受注管理',
    desc: '顧客からの注文を一元管理。納期管理から売上分析まで対応し、顧客対応の品質を向上させます。',
    details: ['受注情報の一元管理', '納期管理・納期回答', '売上分析・実績レポート', '顧客別履歴管理']
  },
  {
    img: '/assets/purchase.png',
    title: '購買管理',
    desc: '発注から入庫までを管理。サプライヤー情報の一元化で調達業務を効率化し、コスト削減を実現。',
    details: ['発注書の作成・管理', 'サプライヤー情報管理', '入荷予定・実績管理', '購買コスト分析']
  },
  {
    img: '/assets/shipping.png',
    title: '出荷管理',
    desc: '出荷指示から配送完了まで追跡。配送状況の可視化で顧客対応も迅速に。納品書・送り状も自動生成。',
    details: ['出荷指示・ピッキング管理', '配送状況のリアルタイム追跡', '納品書・送り状の自動生成', '出荷実績分析']
  },
]

const steps = [
  { num: '01', title: 'お問い合わせ', desc: 'メールにてご連絡ください。現在の課題や業務内容をお聞かせいただきます。' },
  { num: '02', title: 'ヒアリング・要件定義', desc: '製造現場の状況を詳しくヒアリングし、必要な機能・カスタマイズを定義します。' },
  { num: '03', title: '初期設定・データ移行', desc: 'マスターデータの設定、既存データの移行サポートを行います。' },
  { num: '04', title: 'トレーニング', desc: '操作方法のレクチャーを実施。現場スタッフが使いこなせるまでサポートします。' },
  { num: '05', title: '本稼働・運用サポート', desc: '本稼働後も継続的にサポート。改善要望にも随時対応します。' },
]

export default function AlisaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーロー */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
              開発中・2026年10月リリース予定
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">ALISA</h1>
            <p className="text-2xl text-yellow-400 font-semibold mb-6">Automated Lean Integrated Smart Application</p>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              小規模製造業のための統合管理システム。<br />
              製造現場16年の経験から生まれた、本当に使えるスマートERP。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#beta" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105">
                βテスターに応募する
              </Link>
              <Link href="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-white/30">
                お問い合わせ
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

      {/* 機能一覧 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">機能一覧</h2>
            <p className="text-xl text-gray-600">製造現場で本当に必要な機能を厳選して搭載</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                  <Image src={f.img} alt={f.title} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{f.desc}</p>
                  <ul className="space-y-1">
                    {f.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* BOM */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">その他の機能</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {['BOM（部品表）管理', 'マスターデータ管理', 'ユーザー・権限管理', 'レポート・分析', 'データエクスポート', 'マルチテナント対応'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">料金プラン</h2>
            <p className="text-xl text-gray-600">シンプルな料金体系。全機能込み。</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* αテスター */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-bold mb-3">αテスター</div>
                <h3 className="text-xl font-bold text-gray-800">早期採用プラン</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-600">初期費用</span>
                  <span className="font-bold text-gray-800 line-through text-gray-400">150,000円〜</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-600">月額料金</span>
                  <span className="font-bold text-2xl text-gray-800">無料</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">期間</span>
                  <span className="font-bold text-gray-800">1年間</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✅ 初期費用・月額ともに1年間無料</li>
                <li>✅ フィードバックへのご協力をお願いします</li>
                <li>✅ 製品版移行時に料金優遇</li>
              </ul>
            </div>

            {/* 製品版 */}
            <div className="bg-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">製品版</div>
                  <h3 className="text-xl font-bold">2026年10月リリース予定</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span className="text-red-100">初期費用</span>
                    <span className="font-bold">150,000円〜</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/30 pb-3">
                    <span className="text-red-100">月額料金</span>
                    <div className="text-right">
                      <span className="font-bold text-2xl">60,000</span>
                      <span className="text-red-100 text-sm ml-1">円/月</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-100">ユーザー数</span>
                    <span className="font-bold">無制限</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-red-100 mb-6">
                  <li>✅ 全機能込み（追加料金なし）</li>
                  <li>✅ カスタマイズ対応（別途お見積り）</li>
                  <li>✅ 継続的なサポート</li>
                </ul>
              </div>
            </div>
          </div>

          {/* βテスター */}
          <div className="max-w-4xl mx-auto mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-3">限定3社 βテスター募集中</div>
            <p className="text-gray-700 mb-2">βテスト期間（2026年7月〜9月）は<strong>初期費用・月額ともに無料</strong></p>
            <p className="text-sm text-gray-600 mb-6">製品版移行時に料金優遇あり</p>
            <Link href="/#beta" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all inline-block">
              βテスターに応募する
            </Link>
          </div>
        </div>
      </section>

      {/* 導入フロー */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">導入フロー</h2>
            <p className="text-xl text-gray-600">お問い合わせから本稼働まで丁寧にサポート</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
          <h2 className="text-3xl font-bold mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-gray-400 mb-8">現在の業務課題をお聞かせいただき、ALISAがどのようにお役に立てるかご提案します</p>
          <Link href="/#contact" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 inline-block">
            お問い合わせ
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
