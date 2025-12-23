import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kebijakan Privasi
              </h1>
              <p className="text-lg text-gray-600">
                ASTI MIRANDA - Industri Makanan
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di ASTI MIRANDA. Kami sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan 
                  informasi pribadi Anda saat Anda menggunakan website dan layanan kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan website ASTI MIRANDA, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informasi Pribadi</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami dapat mengumpulkan informasi pribadi berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran (diproses melalui payment gateway yang aman)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Informasi Teknis</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami secara otomatis mengumpulkan informasi teknis:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Alamat IP</li>
                  <li>Jenis browser dan sistem operasi</li>
                  <li>Informasi perangkat</li>
                  <li>Cookie dan data penelusuran</li>
                  <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cara Kami Menggunakan Informasi Anda</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Memproses dan menyelesaikan pesanan Anda</li>
                  <li>Menyediakan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan informasi produk dan promosi</li>
                  <li>Meningkatkan website dan pengalaman pengguna</li>
                  <li>Memproses pembayaran dan transaksi</li>
                  <li>Mencegah aktivitas penipuan dan penyalahgunaan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookie dan Teknologi Pelacakan</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami menggunakan cookie dan teknologi serupa untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                  <li>Meningkatkan keamanan website</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pembagian Informasi dengan Pihak Ketiga</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda. Kami hanya membagikan 
                  informasi Anda dalam situasi berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Dengan penyedia layanan pembayaran yang tepercaya</li>
                  <li>Dengan layanan pengiriman untuk pengiriman produk</li>
                  <li>Dengan mitra bisnis yang membantu kami menyediakan layanan</li>
                  <li>Saat diwajibkan oleh hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Keamanan Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda, 
                  termasuk enkripsi data, firewall, dan akses terbatas. Namun, harap diingat bahwa tidak ada metode 
                  transmisi internet atau penyimpanan elektronik yang 100% aman.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Anda sebagai Pengguna</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Penyimpanan Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  Informasi pribadi Anda akan disimpan selama diperlukan untuk memenuhi tujuan pengumpulan, 
                  kecuali diwajibkan atau diizinkan oleh hukum untuk menyimpannya dalam periode yang lebih lama.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                  melalui website atau email Anda. Pengguna terus menggunakan website setelah perubahan berarti 
                  Anda menerima kebijakan yang diperbarui.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontak Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                  silakan hubungi kami:
                </p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>ASTI MIRANDA</strong><br />
                    DUSUN III, Desa Ofa Padang Mahondang<br />
                    Kec. Pulau Rakyat, Kab. Asahan<br />
                    Provinsi Sumatera Utara, 21271
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Telepon:</strong> 0877-2988-7794<br />
                    <strong>Email:</strong> privacy@astimiranda.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}