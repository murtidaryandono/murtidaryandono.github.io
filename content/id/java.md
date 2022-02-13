---
title: "Teknologi Java"
language: "id"
next: "java.html"
---

**Java** adalah bahasa pemrograman berorientasi objek tingkat tinggi, berbasis kelas, yang dirancang untuk memiliki dependensi implementasi sesedikit mungkin. Ini adalah bahasa pemrograman tujuan umum yang dimaksudkan untuk memungkinkan pemrogram menulis sekali, berjalan di mana saja (WORA), yang berarti bahwa kode Java yang dikompilasi dapat berjalan di semua platform yang mendukung Java tanpa perlu dikompilasi ulang. Aplikasi Java biasanya dikompilasi ke bytecode yang dapat berjalan di mesin virtual Java (JVM) apa pun terlepas dari arsitektur komputer yang mendasarinya. Sintaks Java mirip dengan C dan C++, tetapi memiliki fasilitas tingkat rendah yang lebih sedikit daripada keduanya. Java runtime menyediakan kapabilitas dinamis (seperti refleksi dan modifikasi kode runtime) yang biasanya tidak tersedia dalam bahasa kompilasi tradisional. Pada 2019, Java adalah salah satu bahasa pemrograman paling populer yang digunakan menurut GitHub, terutama untuk aplikasi web client-server, dengan 9 juta pengembang yang dilaporkan.

Java awalnya dikembangkan oleh James Gosling di Sun Microsystems dan dirilis pada Mei 1995 sebagai komponen inti dari platform Java Sun Microsystems. Implementasi asli dan referensi kompiler Java, mesin virtual, dan perpustakaan kelas awalnya dirilis oleh Sun di bawah lisensi kepemilikan. Pada Mei 2007, sesuai dengan spesifikasi Proses Komunitas Java, Sun telah melisensikan kembali sebagian besar teknologi Java di bawah lisensi GPL-2.0 saja. Oracle menawarkan HotSpot Java Virtual Machine-nya sendiri, namun implementasi referensi resminya adalah OpenJDK JVM yang merupakan perangkat lunak sumber terbuka gratis dan digunakan oleh sebagian besar pengembang dan merupakan JVM default untuk hampir semua distribusi Linux.

Pada Oktober 2021, Java 17 adalah versi terbaru. Java 8, 11 dan 17 adalah versi dukungan jangka panjang (LTS) saat ini. Oracle merilis pembaruan publik tanpa biaya terakhir untuk versi lama Java 8 LTS pada Januari 2019 untuk penggunaan komersial, meskipun sebaliknya masih akan mendukung Java 8 dengan pembaruan publik untuk penggunaan pribadi tanpa batas waktu. Vendor lain telah mulai menawarkan pembuatan OpenJDK 8 dan 11 tanpa biaya yang masih menerima keamanan dan peningkatan lainnya.

Oracle (dan lainnya) sangat menyarankan untuk mencopot pemasangan versi Java yang sudah usang dan tidak didukung, karena masalah keamanan yang belum terselesaikan di versi lama.[22] Oracle menyarankan penggunanya untuk segera beralih ke versi yang didukung, seperti salah satu versi LTS (8, 11, 17).

Sumber : [Wikipedia](https://en.wikipedia.org/wiki/Java_(programming_language))

**Ilustrasi Java runtime**
<div class="mermaid">
graph TD
  subgraph Java runtime
  A[Kode sumber Java -> .java] --> |Kompilasi| B[Kode bit Java -> .class]
  B --> |Penterjemahan| C[Mesin virtual Java]
  C --> |Berjalan| D[Sistem operasi - Android]
  D --> |Native API| E[Smartphone]
  D --> |Native API| I[Tablet]
  C --> |Berjalan| F[Sistem operasi - Linux]
  F --> |Native API| G[PC/Laptop]
  F --> |Native API| H[Server]
  C --> |Berjalan| J[Sistem operasi - Windows]
  J --> |Native API| G[PC/Laptop]
  J --> |Native API| H[Server]
  end
</div>
