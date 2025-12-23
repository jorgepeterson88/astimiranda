import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Syarat & Ketentuan
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat & Ketentuan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di website ASTI MIRANDA. Dengan mengakses dan menggunakan website kami, 
                  Anda menerima dan menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak 
                  menyetujui syarat ini, jangan gunakan website kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi Perusahaan</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Website ini dioperasikan oleh:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Nama Perusahaan:</strong> ASTI MIRANDA<br />
                    <strong>Alamat:</strong> DUSUN III, Desa Ofa Padang Mahondang, Kec. Pulau Rakyat, 
                    Kab. Asahan, Provinsi Sumatera Utara, 21271<br />
                    <strong>Telepon:</strong> 0877-2988-7794<br />
                    <strong>Email:</strong> info@astimiranda.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Produk dan Layanan</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  ASTI MIRANDA menyediakan berbagai produk makanan termasuk:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Makanan tradisional khas</li>
                  <li>Makanan modern fusion</li>
                  <li>Makanan organik</li>
                  <li>Kue dan dessert</li>
                  <li>Produk makanan kustom sesuai permintaan</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Kami berhak mengubah ketersediaan produk tanpa pemberitahuan sebelumnya.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pemesanan dan Pembayaran</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Proses Pemesanan</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Untuk melakukan pemesanan:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Pilih produk yang diinginkan</li>
                  <li>Isi formulir pemesanan dengan lengkap</li>
                  <li>Konfirmasi pesanan Anda</li>
                  <li>Lakukan pembayaran sesuai metode yang tersedia</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Metode Pembayaran</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Kami menerima metode pembayaran berikut:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Transfer bank</li>
                  <li>E-wallet (GoPay, OVO, Dana)</li>
                  <li>Pembayaran tunai (COD untuk area tertentu)</li>
                  <li>Kartu kredit/debit</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Konfirmasi Pembayaran</h3>
                <p className="text-gray-700 leading-relaxed">
                  Semua pembayaran akan dikonfirmasi sebelum pengiriman produk. 
                  Pesanan akan diproses setelah pembayaran berhasil diverifikasi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pengiriman dan Pengambilan</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Pengiriman</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Layanan pengiriman:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Area Pulau Rakyat dan sekitarnya: 1-2 hari kerja</li>
                  <li>Kabupaten Asahan: 2-3 hari kerja</li>
                  <li>Luar area: sesuai kesepakatan</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Biaya Pengiriman</h3>
                <p className="text-gray-700 leading-relaxed">
                  Biaya pengiriman dihitung berdasarkan jarak dan berat produk. 
                  Informasi biaya akan ditampilkan saat checkout.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Pengambilan Langsung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pelanggan dapat mengambil pesanan langsung di alamat kami 
                  pada jam operasional: Senin-Sabtu, 08:00 - 17:00 WIB.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kebijakan Pengembalian</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Pengembalian produk dapat dilakukan jika:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Produk rusak saat diterima</li>
                  <li>Produk tidak sesuai pesanan</li>
                  <li>Produk kedaluwarsa</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Syarat pengembalian:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Melaporkan maksimal 24 jam setelah penerimaan</li>
                  <li>Menyertakan bukti foto/video kerusakan</li>
                  <li>Produk masih dalam kondisi asli</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kualitas dan Keamanan Produk</h2>
                <p className="text-gray-700 leading-relaxed">
                  ASTI MIRANDA berkomitmen untuk menyediakan produk makanan yang:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Halal dan bersertifikat MUI</li>
                  <li>Terdaftar di BPOM</li>
                  <li>Diproduksi dengan standar kebersihan tinggi</li>
                  <li>Menggunakan bahan-bahan berkualitas dan segar</li>
                  <li>Tidak mengandung bahan pengawat berbahaya</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
                <p className="text-gray-700 leading-relaxed">
                  Semua konten di website ini termasuk teks, gambar, logo, dan desain 
                  adalah milik ASTI MIRANDA dan dilindungi oleh hukum hak cipta. 
                  Dilarang menyalin, mendistribusikan, atau menggunakan konten tanpa izin tertulis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privasi Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami melindungi privasi data pelanggan sesuai dengan Kebijakan Privasi kami. 
                  Dengan menggunakan website ini, Anda menyetujui pengumpulan dan penggunaan 
                  data sesuai kebijakan yang berlaku.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Batasan Tanggung Jawab</h2>
                <p className="text-gray-700 leading-relaxed">
                  ASTI MIRANDA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Keterlambatan pengiriman di luar kendali kami</li>
                  <li>Kerusakan produk akibat handling pihak ketiga</li>
                  <li>Alergi atau reaksi kesehatan terhadap produk</li>
                  <li>Kehilangan data akibat masalah teknis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat & Ketentuan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kami berhak mengubah Syarat & Ketentuan ini kapan saja. 
                  Perubahan akan berlaku efektif setelah dipublikasikan di website. 
                  Penggunaan website yang berkelanjutan menunjukkan penerimaan terhadap perubahan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Penyelesaian Sengketa</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Sengketa yang timbul dari penggunaan website ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Musyawarah dan mufakat antara kedua belah pihak</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Penyelesaian melalui pengadilan di wilayah hukum Kabupaten Asahan</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Kontak Kami</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
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
                    <strong>Email:</strong> legal@astimiranda.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Pernyataan Akhir</h2>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan website ASTI MIRANDA, Anda mengakui bahwa telah 
                  membaca, memahami, dan menyetujui untuk terikat oleh Syarat & Ketentuan ini. 
                  Terima kasih telah mempercayai ASTI MIRANDA sebagai mitra kuliner Anda.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}