'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChefHat, Users, Award, MapPin, Phone, Mail, Star, Leaf, Heart, Truck } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Makanan Tradisional Khas',
      category: 'traditional',
      description: 'Makanan tradisional dengan resep rahasia turun temurun',
      image: '/food-hero.jpg'
    },
    {
      id: 2,
      name: 'Makanan Modern Fusion',
      category: 'modern',
      description: 'Perpaduan cita rasa tradisional dan modern',
      image: '/food-modern.jpg'
    },
    {
      id: 3,
      name: 'Makanan Organik',
      category: 'organic',
      description: 'Produk makanan sehat dari bahan organik pilihan',
      image: '/food-organic.jpg'
    },
    {
      id: 4,
      name: 'Kue & Dessert',
      category: 'dessert',
      description: 'Aneka kue dan dessert manis untuk segala acara',
      image: '/food-dessert.jpg'
    }
  ];

  const values = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap produk dibuat dengan passion dan perhatian penuh pada detail'
    },
    {
      icon: <Leaf className="text-green-500" size={32} />,
      title: 'Bahan Berkualitas',
      description: 'Menggunakan bahan-bahan segar pilihan dari supplier terpercaya'
    },
    {
      icon: <Award className="text-yellow-500" size={32} />,
      title: 'Kualitas Terjamin',
      description: 'Standar kualitas tinggi dengan proses produksi yang higienis'
    },
    {
      icon: <Truck className="text-blue-500" size={32} />,
      title: 'Pengiriman Cepat',
      description: 'Layanan pengiriman tepat waktu untuk menjaga kesegaran produk'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Setia',
      content: 'Produk ASTI MIRANDA selalu berkualitas tinggi dan rasanya luar biasa!',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Partner Bisnis',
      content: 'Mitra bisnis yang terpercaya, selalu memberikan produk terbaik untuk restoran kami.',
      rating: 5
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Distributor',
      content: 'Kualitas produk konsisten dan layanan yang sangat memuaskan.',
      rating: 5
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <ChefHat className="mr-2" size={16} />
                Industri Makanan Terpercaya Sejak 2020
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-orange-600">ASTI MIRANDA</span><br />
                cita rasa autentik dalam setiap gigitan
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kami adalah produsen makanan terkemuka di Sumatera Utara yang berkomitmen untuk menyajikan produk berkualitas tinggi dengan bahan pilihan terbaik dan resep tradisional yang diwariskan secara turun temurun.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Lihat Produk Kami
                </button>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors hover:shadow-lg transform hover:scale-105 transition-transform"
                >
                  Hubungi Kami
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Setia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Varian Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">4.9</div>
                  <div className="text-sm text-gray-600">Rating Pelanggan</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/logo.png" 
                  alt="ASTI MIRANDA" 
                  className="w-full h-auto rounded-2xl shadow-2xl bg-white p-8"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-orange-600">ASTI MIRANDA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan produk terbaik dengan nilai-nilai yang kami pegang teguh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pilihan makanan berkualitas tinggi untuk memenuhi kebutuhan Anda
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'traditional', 'modern', 'organic', 'dessert'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category === 'all' && 'Semua'}
                {category === 'traditional' && 'Tradisional'}
                {category === 'modern' && 'Modern'}
                {category === 'organic' && 'Organik'}
                {category === 'dessert' && 'Dessert'}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-orange-600">ASTI MIRANDA</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ASTI MIRANDA adalah usaha industri makanan yang berlokasi di Desa Ofa Padang Mahondang, Kecamatan Pulau Rakyat, Kabupaten Asahan, Provinsi Sumatera Utara. Sejak didirikan, kami telah berkomitmen untuk menghasilkan produk makanan berkualitas tinggi yang memenuhi standar keamanan dan kehalalan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dengan dukungan tim yang berpengalaman dan bahan baku pilihan, kami terus berinovasi untuk memberikan produk terbaik kepada pelanggan setia kami di seluruh Sumatera Utara dan sekitarnya.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="text-orange-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">50+ Karyawan</div>
                    <div className="text-sm text-gray-600">Tim Profesional</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-orange-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Sertifikasi Halal</div>
                    <div className="text-sm text-gray-600">BPOM Terdaftar</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                  <p className="text-gray-600">
                    Menjadi produsen makanan terkemuka di Indonesia yang dikenal dengan kualitas, keamanan, dan inovasi produk.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Menghasilkan produk makanan berkualitas tinggi</li>
                    <li>• Memberikan kepuasan maksimal kepada pelanggan</li>
                    <li>• Berinovasi dalam pengembangan produk baru</li>
                    <li>• Mendukung perekonomian lokal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kami siap melayani kebutuhan makanan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-orange-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    DUSUN III, Desa/Kelurahan Ofa Padang Mahondang<br />
                    Kec. Pulau Rakyat, Kab. Asahan<br />
                    Provinsi Sumatera Utara, Kode Pos 21271
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-orange-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                  <p className="text-gray-600">0877-2988-7794</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-orange-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@astimiranda.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}