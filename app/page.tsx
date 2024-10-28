import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl px-4 mx-auto my-10 xl:max-w-5xl xl:px-0 sm:px-6 bg-black text-white">
      {/* Previous sections remain the same */}
      <main>
        {/* Profile Section - As before */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Kota Tsuchimoto"
              width={160}
              height={160}
              className="w-40 h-40 md:w-48 md:h-48 border border-gray-200 rounded-full shadow-xl mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Kota Tsuchimoto</h1>
              <p className="text-lg text-gray-700">First-year student, Faculty of Science, University of Toyama</p>
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href="https://github.com/mocho271828" aria-label="github">
                  <Image src="/github-mark.svg" alt="GitHub" width={30} height={30} />
                </a>
                <a href="https://twitter.com/sugaku_tankyu0" aria-label="twitter">
                  <Image src="/twitter.jpg" alt="Twitter" width={30} height={30} />
                </a>
                <a href="https://instagram.com/mocho_tsuchi" aria-label="instagram">
                  <Image src="/Instagram_icon.jpg" alt="Instagram" width={30} height={30} />
                </a>
                <a href="https://bsky.app/profile/mocho-tsuchi.bsky.social" aria-label="Bluesky">
                  <Image src="/Bluesky_Logo.jpg" alt="Bluesky" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* はじめに - Updated with repository link */}
        <section className="mb-10 pb-4 border-b-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">はじめに</h2>
          <div className="space-y-4 text-white">
            <p>
              このページは私のGithubリポジトリーから作成しております。
              ご覧になられたい方は
              <a 
                href="https://github.com/mocho271828/mitaka-macintosh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 underline ml-1"
              >
                こちらから
              </a>
              アクセスしてください。
            </p>
            <p className="text-gray-300">
              リポジトリーには、このガイドの最新版やソースコード、追加のリソースが含まれています。
              問題の報告や改善の提案は、GitHubのIssuesでお願いいたします。
            </p>
          </div>
        </section>

        {/* Wineskinのセットアップ */}
        <section className="mb-10 pb-4 border-b-2">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">WineskinでMitakaをMacで使用する方法</h2>

          {/* Step 1: Wineskinの準備 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold bg-gray-800 p-4 rounded-lg">1. Wineskinの準備</h3>
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <h4 className="text-lg font-semibold">1-1. Wineskin Winery のダウンロード</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wineskin公式サイトから最新版のWineskin Wineryをダウンロード</li>
                <li>ダウンロードしたdmgファイルを開き、Applicationsフォルダにドラッグ＆ドロップ</li>
              </ul>

              <h4 className="text-lg font-semibold mt-6">1-2. Wineskin Winery の初期設定</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wineskin Wineryを起動</li>
                <li>「Update」をクリックしてWine Engineを最新版に更新</li>
                <li>「+」ボタンをクリックして新しいWrapperを作成</li>
                <li>Wrapper名を入力（例：「Mitaka」）して「OK」をクリック</li>
              </ul>
            </div>
          </div>

          {/* Step 2: Mitakaのダウンロード */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold bg-gray-800 p-4 rounded-lg">2. Mitakaのダウンロード</h3>
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>国立天文台のウェブサイトにアクセス</li>
                <li>Mitakaの最新版Windows用インストーラー（.exe）をダウンロード</li>
                <li>ダウンロードしたファイルを分かりやすい場所に保存</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Wrapperの設定とMitakaのインストール */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold bg-gray-800 p-4 rounded-lg">3. WrapperでMitakaをApp化</h3>
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <h4 className="text-lg font-semibold">3-1. Wrapperの設定</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>作成したWrapperを右クリックして「パッケージの内容を表示」を選択</li>
                <li>「Wineskin」を選択</li>
                <li>「Advanced」をクリック</li>
                <li>「Configuration」タブで「Windows 10」を選択</li>
              </ul>

              <h4 className="text-lg font-semibold mt-6">3-2. Mitakaのインストール</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>「Install Software」をクリック</li>
                <li>「Choose Setup Executable」を選択</li>
                <li>ダウンロードしたMitakaのインストーラーを選択</li>
                <li>インストーラーの指示に従ってインストール</li>
              </ul>

              <h4 className="text-lg font-semibold mt-6">3-3. 実行ファイルの設定</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>インストール完了後、「Advanced」画面に戻る</li>
                <li>「Browse」をクリックし、インストールされたMitakaの実行ファイル（.exe）を選択</li>
                <li>「Test Run」で動作確認</li>
                <li>問題なければ設定を保存して完了</li>
              </ul>
            </div>
          </div>

          {/* 注意事項とトラブルシューティング */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gray-800 p-4 rounded-lg">注意事項とトラブルシューティング</h3>
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <h4 className="text-lg font-semibold">よくある問題と解決方法</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>画面が表示されない場合：
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Windows設定を変更してみる（Windows 7や8に切り替える）</li>
                    <li>解像度設定を確認する</li>
                  </ul>
                </li>
                <li>起動しない場合：
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Wrapperを再作成する</li>
                    <li>別バージョンのWine Engineを試す</li>
                  </ul>
                </li>
                <li>動作が遅い場合：
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>グラフィック設定を下げる</li>
                    <li>不要なプログラムを終了する</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
