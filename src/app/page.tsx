import Image from 'next/image'

const waktu = '04 Juni 2023 10:00 WITA'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <Image
        src="/images/beams.jpg"
        alt="Background"
        width={1308}
        height={1308}
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 lg:col-span-3">
            <div className="md:flex items-center flex-start gap-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="h-[60px] w-[60px] mx-auto md:mx-0"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-light text-center md:text-left text-gray-700">Codecorn</h3>
                <p className="text-gray-600 text-sm tracking-light font-semibold">Komunitas pemograman dan IT Gorontalo</p>
              </div>
            </div>
            <div className="-mt-3 divide-y divide-gray-300/50">
              <div className="space-y-4 py-8 text-base leading-7 text-gray-600">
                <div className="flex">
                  <div className="px-3 py-2 bg-teal-500 text-xs text-white font-semibold tracking-light rounded-lg shadow">
                    Meetup #1 Codecorn
                  </div>
                </div>
                <p className="text-[13px] leading-5 text-justify">Di era society 5.0 di mana teknologi semakin canggih, kita dituntut untuk selalu beradaptasi dengan perkembangan teknologi. Untuk menghadapi kemajuan teknologi dan digitalisasi yang cepat berubah ini, tentunya kita harus membekali diri dengan ilmu pengetahuan. Maka dari itu <span className="italic">meetup</span> ini bertujuan untuk mengenalkan peranan industri teknologi kepada generasi muda serta membangun karir di dunia IT sebagai profesional yang mampu bersaing secara lokal, nasional hingga internasional.</p>
                <p className="text-[13px] leading-5 text-left">Yuk ikuti <span className="italic">meetup</span> tentang pengenalan industri IT bersama Abdul Haris Angio <span className="italic">(DevOps Engineer)</span> dan Mohamad Afandi Dali, S.Kom <span className="italic">(Penetration Tester di Telkom Indonesia dan sebagai Mahasiswa Magister di Universitas Langlangbuana Bandung)</span></p>
                <div>
                  <div className="flex">
                    <div className="flex flex-col rounded-xl shadow p-3 font-semibold border border-red-300">
                      <div>
                        <p className="text-sm">Minggu,</p>
                        <p className="text-sm">{waktu}</p>
                      </div>
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="ml-1 text-xs">Everyday Coffee</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs mb-1.5 font-semibold">Kontak:</h3>
                  <ul className="space-y-1 mt-0">
                    <li className="flex items-center">
                      <p className="ml-4 text-xs">
                        Baron <span className="text-xs">(Admin WhatsApp)</span>{' '}
                        <a href="https://wa.me/6282187617384" target="_blank">
                          <code className="text-xs font-bold text-blue-500 hover:text-blue-600">082187617384</code>
                        </a>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <p className="ml-4 text-xs">
                        Group WhatsApp{' '}
                        <a href="https://chat.whatsapp.com/JzG5z1qurH9AHAtYkwGHqn" target="_blank">
                          <code className="text-xs font-bold text-blue-500 hover:text-blue-600">https://s.id/1K7KE</code>
                        </a>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <p className="ml-4 text-xs">
                        Discord{' '}
                        <a href="https://discord.gg/zWRjWPpDqa" target="_blank">
                          <code className="text-xs font-bold text-blue-500 hover:text-blue-600">https://s.id/1K7L5</code>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3 text-base font-semibold leading-7">
                <p className="text-gray-900 text-sm">Link Pendaftaran</p>
                <p>
                  <a href="https://s.id/1K6Y7" target="_blank" className="text-sky-500 hover:text-sky-600">
                    {`https://s.id/1K6Y7`}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="w-full">
              <Image
                src="/images/banner.png"
                alt="Logo"
                width={500}
                height={500}
                className="w-[420px] md:h-auto mx-auto shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
