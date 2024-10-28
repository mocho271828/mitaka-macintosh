import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl px-4 mx-auto my-10 xl:max-w-5xl xl:px-0 sm:px-6 bg-black text-white">
      <main>
        {/* Profile Section */}
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

        {/* はじめに */}
        <section className="mb-10 pb-4 border-b-2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">はじめに</h2>
          <div className="space-y-4 text-white">
            <p>
              このページは私のGithubリポジトリーから作成しております</br>
              ご覧になられたい方はこちらの
              <a href="" aria-label="mitaka-macintosh_repository">
                  <リンク/>
                </a>
            から
            
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
