import Image from 'next/image'

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
                src="/images/logo.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="h-[90px] w-[90px] mx-auto md:mx-0"
              />
              <div>
                <h3 className="text-2xl font-bold tracking-light text-center md:text-left text-gray-700">Codecorn</h3>
                <p className="text-gray-600">Komunitas pemograman dan IT Gorontalo</p>
              </div>
            </div>
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <div className="flex">
                  <div className="px-4 py-2 bg-blue-500 text-white font-semibold tracking-light rounded-xl shadow">
                    Meetup bulan ini
                  </div>
                </div>
                <p>Membangkitkan birahi terhadap pentingnya generasi muda dalam berkarir di dunia ini sebagai sofware engineering yang profesional dan internasional.</p>
                <h3>Kontak:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <p className="ml-4">
                      Baron (WhatsApp){' '}
                      <a href="https://wa.me/6282187617384" target="_blank">
                        <code className="text-sm font-bold text-blue-500 hover:text-blue-600">082187617384</code>
                      </a>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">
                      Gabung ke grup WhatsApp melalui tautan berikut{' '}
                      <a href="https://chat.whatsapp.com/JzG5z1qurH9AHAtYkwGHqn" target="_blank">
                        <code className="text-sm font-bold text-blue-500 hover:text-blue-600">@Codecorn</code>
                      </a>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="ml-4">
                      Atau discord{' '}
                      <a href="https://discord.gg/JSZGVvRW" target="_blank">
                        <code className="text-sm font-bold text-blue-500 hover:text-blue-600">Codecorn</code>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Link Pendaftaran</p>
                <p>
                  <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Daftar &rarr;</a>
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
