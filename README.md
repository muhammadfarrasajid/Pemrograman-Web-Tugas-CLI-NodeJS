# Aplikasi CLI Task Manager Sederhana

Ini adalah proyek tugas untuk membuat aplikasi task manager berbasis file JSON yang berjalan di command-line (CLI) menggunakan Node.js.

Proyek ini dibuat sebagai pembuktian konsep (proof of concept) untuk pemrograman asinkron menggunakan `fs/promises` dengan `async/await`.

## Fitur

* **Tambah Tugas**: Menambahkan tugas baru ke daftar.
* **Lihat Daftar Tugas**: Menampilkan semua tugas dengan status (selesai/belum).
* **Tandai Selesai**: Mengubah status tugas menjadi selesai.
* **Hapus Tugas**: Menghapus tugas dari daftar.

## Teknologi

* Node.js
* `fs/promises` (Async/Await)
* `path`
* `process.argv`

## Setup

Tidak ada dependensi eksternal yang perlu di-install (menggunakan modul bawaan Node.js).

1.  Pastikan Anda memiliki Node.js.
2.  Clone repository ini atau download file-filenya.
3.  Buka terminal di folder proyek.

## Cara Penggunaan

Gunakan `node index.js` diikuti dengan perintah yang diinginkan.

### Menambah Tugas Baru

Gunakan tanda kutip jika tugas mengandung spasi.

node index.js add "Mengerjakan tugas CLI"

### Melihat Daftar Tugas

node index.js list

### Menandai Selesai

node index.js done [ID_TUGAS]

Contoh:
node index.js done 1

### Menghapus Tugas

node index.js remove [ID_TUGAS]

Contoh:
node index.js remove 1