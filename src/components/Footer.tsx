import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="ASTI MIRANDA Logo" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-2xl font-bold">ASTI MIRANDA</h3>
                <p className="text-orange-100">Industri Makanan Berkualitas</p>
              </div>
            </div>
            <p className="text-orange-100 mb-4 max-w-md">
              Kami adalah produsen makanan terpercaya yang berkomitmen untuk menyajikan produk berkualitas tinggi dengan bahan pilihan terbaik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-orange-100 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/#about" className="text-orange-100 hover:text-white transition-colors" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const element = document.querySelector('#about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}>Tentang Kami</a></li>
              <li><a href="/#products" className="text-orange-100 hover:text-white transition-colors" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const element = document.querySelector('#products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}>Produk</a></li>
              <li><a href="/#contact" className="text-orange-100 hover:text-white transition-colors" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}>Kontak</a></li>
              <li><a href="/privacy" className="text-orange-100 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="/terms" className="text-orange-100 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-orange-200" />
                <span className="text-orange-100 text-sm">
                  DUSUN III, Desa Ofa Padang Mahondang<br />
                  Kec. Pulau Rakyat, Kab. Asahan<br />
                  Provinsi Sumatera Utara 21271
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-200" />
                <span className="text-orange-100 text-sm">0877-2988-7794</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-200" />
                <span className="text-orange-100 text-sm">info@astimiranda.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-orange-100">
            © {new Date().getFullYear()} ASTI MIRANDA. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}