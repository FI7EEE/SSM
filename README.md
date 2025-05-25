# <img src="Desain UI-UX/Landing page .png">
# SSM (Smart Space Monitoring)
# Deskripsi Proyek: Smart Space Management
Smart Space Management adalah sebuah sistem inovatif yang dirancang untuk memudahkan proses pemesanan serta monitoring penggunaan ruangan secara real-time. Proyek ini bertujuan untuk meningkatkan efisiensi pemanfaatan ruang, khususnya di lingkungan perkantoran, kampus, atau fasilitas umum lainnya.
Sistem ini memanfaatkan antarmuka pengguna yang dirancang melalui Figma, yang memberikan tampilan pemesanan ruangan yang intuitif dan mudah digunakan. Pengguna dapat melihat ketersediaan ruangan, melakukan reservasi, serta memantau status ruangan secara langsung melalui dashboard yang telah disiapkan.

Untuk mendukung fungsionalitas monitoring, sistem ini dikombinasikan dengan beberapa sensor sebagai pengganti kamera, guna menjaga privasi namun tetap menyediakan informasi yang akurat:
DHT22: Sensor suhu dan kelembapan yang berguna untuk mengetahui kondisi lingkungan dalam ruangan secara real-time.
RCWL-0516: Sensor pendeteksi gerakan berbasis gelombang mikro yang berfungsi untuk mendeteksi keberadaan orang dalam ruangan tanpa menggunakan kamera.
Toggle Switch: Digunakan sebagai indikator manual kehadiran atau aktivitas di dalam ruangan, sekaligus sebagai alternatif input kondisi ruangan.

Dengan integrasi antara antarmuka digital dan sensor fisik ini, Smart Space Management menawarkan solusi yang efisien, ramah privasi, dan mudah diimplementasikan untuk manajemen ruang yang lebih cerdas dan terorganisir.


# Tujuan Proyek:
Merancang dan mengimplementasikan sistem manajemen ruang berbasis antarmuka digital (Figma) yang terintegrasi dengan sensor DHT22, RCWL-0516, dan toggle switch untuk memungkinkan proses pemesanan, pemantauan kondisi lingkungan, serta deteksi keberadaan pengguna secara real-time tanpa penggunaan kamera, guna meningkatkan efisiensi pemanfaatan ruang dan menjaga privasi.
### Support BY :
>- Dosen Pengampu : Akhmad Hendriawan ST., MT. (NIP.197501272002121003)<br>
>- Mata kuliah : Workshop Mikrokontroller<br>
>- Program Studi : D3 Teknik Elektronika<br>
>- Politeknik Elektronika Negeri Surabaya<br>
# Anggota Tim
# <img src="Assets/Foto TIM/Foto Anggota Tim.jpg">
|      NRP      |        Nama       |        Jobdesk        |                    Akun                  |
| :-----------: |:----------------: | :-------------------: | :---------------------------------------:|
| 2123500009    | Adrian Iqbal R    | Software              | [Adrian](https://github.com/AdrianIqbalR)
| 2123500016    | Royyan Firdaus M  | Hardware Specialist   | [Royyan](https://github.com/nataratungga)
| 2123500026    | Aditya Wahyu W    | 3D Design          | [Adit](https://github.com/AdityaWahyuW)
| 2123500029    | Khrisna P.Y       | Project Manager       | [Khrisna](https://github.com/Khrisnapy)
| 2123500033    | Bintang Firgi     | UI UX Design           | [Bintang](https://github.com/FI7EEE)
# Komponen 
>- RCWL 0516 / Sensor radar → untuk deteksi keberadaan orang.
>- DHT22 / Sensor suhu  → untuk mengukur suhu dan kelembaban udara.
>- Arduino nano / NodeMCU → mikrokontroler pengolah data sensor.
>- UART / MQTT / WiFi → komunikasi data antar perangkat.
>- Database (Firebase / MySQL) → menyimpan status ruangan dan data reservasi.
>- Web / Mobile App → untuk tampilan UI pengguna dan admin.
# Hardware
# <img src="Hardware/Skematik SSM.jpg">
# <img src="Hardware/Layout SSM.jpg">
# <img src="Hardware/3D hardware SSM.jpg">
# Desain 3D
# <img src="https://github.com/FI7EEE/SSM/blob/main/Desain%203D%20%5BSMM%5D/3D%20Komponen2.png"><center><br>
# <img src="https://github.com/FI7EEE/SSM/blob/main/Desain%203D%20%5BSMM%5D/Bawah.jpg"><center>
# Desain 3D case
# Cetak 3D
# Blok Diagram
# Diagram Arsitektur Sistem
# UI/UX
### Frontend
https://github.com/user-attachments/assets/d8675519-fc17-4f6d-9039-62dc81f8e6db
# Simulasi Program
### Python
https://github.com/user-attachments/assets/62945367-fcb9-4eea-a4f0-77a89578fbe8
### PicsimLab 
https://github.com/user-attachments/assets/db9ee1b4-200f-423a-942d-a19edf60ea9a
# Iklan Produk
# Uji Coba Sistem
https://github.com/user-attachments/assets/06786ef0-06cf-4453-9f95-b31134c98d04
##
Pada sistem SSM ini menggunakan 2 input sensor dan 1 kamera untuk mengetahui status/kondisi ruangan sedang terpakai maupun ruangan sedang kosong. Disini kami menggunakan sensor radar RCWL 0516 sebagai sensor pendeteksi gerakan, sensor DHT 22 sebagai monitoring suhu ruangan, dan switch disini sebagai pengganti kamera. Apabila switch bernilai logic 1 (true) maka diibaratkan sebagai kamera yang mendeteksi keberadaan orang/ruangan sedang terpakai, sebaliknya apabila switch bernilai logic 0 (false) diibaratkan ruangan sedang kosong/tidak terpakai. Lalu output/hasil pembacaan data oleh sensor dan switch tadi dikirim ke database dan akan ditampilkan pada web admin pengelola ruangan. Dari data data tersebut admin bisa mengetahui status ketersediaan ruangan.
# Panduan Penggunaan
1. Pastikan perangkat sudah terkoneksi dengan daya.
2. Akses web SSM pada Link berikut : https://smartspacemanagement-ba2ef.web.app/
3. Login sebagai user jika ingin reservasi ruangan.
4. Pada tampilan web user terdapat daftar ruangan yang tersedia ataupun sedang digunakan. Pada tampilan user juga terdapat fitur untuk reservasi yang akan terhubung ke web admin.
5. Jika ingin reservasi ruangan, kirim data ruangan dan jam yang dipilih, maka data akan terkirim ke admin dan menunggu persetujuan.
6. Login sebagai admin jika ingin mengakses web admin guna monitoring ruangan dan sistem.
7. Admin dapat melihat data ruangan yang tersedia dan yang sedang digunakan, admin juga dapat menyetujui maupun menolak reservasi dari user.
8. Jika permintaan di setujui maka user berhasil reservasi ruangan.
