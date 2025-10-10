# Proyek: Template Dashboard Admin Modern

## 1. Ringkasan Proyek

Tujuan proyek ini adalah untuk membuat sebuah template dashboard admin yang modern, responsif, dan fungsional menggunakan **HTML, CSS, dan Vanilla JavaScript**. Template ini harus bersifat *technology-agnostic*, artinya tidak bergantung pada framework backend atau frontend tertentu, sehingga dapat diintegrasikan dengan mudah ke dalam proyek apa pun. Desain utama mengacu pada UI yang bersih dengan sidebar di sebelah kiri dan navbar di bagian atas.

## 2. Tech Stack

-   **HTML5**: Untuk struktur konten.
-   **CSS3**: Untuk styling, layout, dan responsivitas. Gunakan **Flexbox** dan **Grid** untuk layout modern.
-   **Vanilla JavaScript**: Untuk semua interaktivitas seperti toggle sidebar, dropdown, dan event lainnya.
-   **Ikon**: Gunakan [Font Awesome](https://fontawesome.com/) atau [Boxicons](https://boxicons.com/) untuk ikon. Sertakan melalui CDN.

## 3. Struktur File yang Direkomendasikan

```
/project-root
|-- index.html
|-- /css
|   |-- style.css
|-- /js
|   |-- main.js
|-- /assets
|   |-- /images
|       |-- logo.png
|       |-- profile.jpg
```

## 4. Requirement Implementasi

### Bagian A: Layout Utama (index.html & style.css)

1.  Buat struktur dasar HTML5 di `index.html`.
2.  Buat sebuah container utama yang membungkus dua elemen utama: `<aside id="sidebar">` dan `<main id="main-content">`.
3.  Gunakan CSS Grid atau Flexbox untuk mengatur layout agar sidebar berada di kiri dan konten utama di kanan.
4.  Pastikan layout bersifat *full-height* dan mengisi seluruh viewport.

### Bagian B: Sidebar (Elemen `<aside>`)

Ini adalah fitur paling penting. Berikan perhatian khusus pada detail berikut:

1.  **Struktur HTML Sidebar**:
    * Buat sebuah `div` untuk logo di bagian atas sidebar.
    * Buat daftar navigasi menggunakan `<ul>` dan `<li>`.
    * Setiap `<li>` harus berisi tag `<a>` untuk link.
    * Setiap link `<a>` harus berisi:
        * Elemen `<i>` untuk ikon.
        * Elemen `<span>` untuk teks menu (contoh: "Dashboard", "Appointments").
    * Untuk menu yang memiliki submenu (seperti "Doctors" dan "Patients"), tambahkan ikon panah di sebelah kanan dan sebuah `<ul>` baru di dalam `<li>` tersebut sebagai kontainer submenu.

2.  **Styling Sidebar**:
    * Sidebar memiliki posisi `fixed` di sebelah kiri dengan `height: 100vh`.
    * Berikan warna latar belakang hijau gelap (contoh: `#00845F`).
    * Teks dan ikon berwarna putih atau hijau muda agar kontras.
    * Buat *style* untuk link aktif (contoh: `background-color` yang sedikit berbeda atau border di sebelah kiri).
    * Submenu harus disembunyikan secara default (`display: none`).

3.  **Fungsionalitas JavaScript (main.js)**:
    * **Collapsible Sidebar**:
        * Buat sebuah tombol (hamburger icon) di navbar yang akan mengontrol sidebar.
        * Saat tombol diklik, tambahkan atau hapus kelas `.collapsed` pada elemen `<body>` atau `<aside>`.
        * Ketika kelas `.collapsed` aktif, lebar sidebar harus berkurang secara signifikan, dan teks menu (`<span>`) harus disembunyikan, hanya menyisakan ikon. Transisi CSS harus mulus (`transition: all 0.3s ease`).
        * Konten utama (`<main>`) harus menyesuaikan margin atau lebarnya saat sidebar di-collapse.
    * **Submenu Dropdown**:
        * Tambahkan *event listener* pada menu yang memiliki submenu.
        * Saat diklik, tampilkan atau sembunyikan submenu yang bersangkutan dengan efek transisi yang halus.
        * Pastikan hanya satu submenu yang bisa terbuka pada satu waktu.

### Bagian C: Navbar dan Konten Utama (Elemen `<main>`)

1.  **Struktur HTML Navbar**:
    * Buat elemen `<nav>` di dalam `<main id="main-content">`.
    * Gunakan Flexbox untuk menata item di navbar.
    * **Sisi Kiri**:
        * Tombol hamburger untuk *toggle* sidebar.
        * Input pencarian (`<input type="search">`) dengan ikon.
    * **Sisi Kanan**:
        * Dropdown untuk pilihan bahasa.
        * Ikon notifikasi.
        * Dropdown profil pengguna yang berisi gambar profil, nama, dan panah bawah.

2.  **Struktur HTML Konten**:
    * Di bawah `<nav>`, buat sebuah `div` sebagai kontainer utama untuk semua widget dashboard.
    * Buat *placeholder* (kerangka) untuk setiap komponen seperti yang terlihat di gambar:
        * Kartu statistik (Appointments, Doctors, Nurses, dll.).
        * Grafik "Hospital Survey".
        * Widget kalender.

3.  **Fungsionalitas JavaScript (main.js)**:
    * Implementasikan fungsionalitas dropdown untuk menu profil pengguna dan pilihan bahasa.

## 5. Instruksi Tambahan

-   Pastikan kode ditulis dengan rapi, diberi komentar jika perlu, dan mudah dibaca.
-   Gunakan variabel CSS (CSS Custom Properties) untuk warna, font, dan spasi agar mudah dimodifikasi di kemudian hari.
-   Desain harus responsif dan dapat bekerja dengan baik di perangkat desktop maupun tablet.