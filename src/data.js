// Data untuk Halaman Ringkasan Mata Kuliah
export const courses = [
  {
    id: "1",
    name: "Algoritma dan Struktur Data",
    code: "IF-201",
    sks: 3,
    lecturer: "Budi Santoso, M.Kom.",
  },
  {
    id: "2",
    name: "Pemrograman Web",
    code: "IF-301",
    sks: 3,
    lecturer: "Siti Aminah, M.T.",
  },
  {
    id: "3",
    name: "Sistem Operasi",
    code: "IF-403",
    sks: 3,
    lecturer: "Dr. Wahyu Hidayat",
  },
  {
    id: "4",
    name: "Interaksi Manusia dan Komputer",
    code: "IF-305",
    sks: 2,
    lecturer: "Rina Marlina, S.T., M.Kom.",
  },
  {
    id: "5",
    name: "Grafika Komputer",
    code: "IF-502",
    sks: 3,
    lecturer: "Dr. Agus Setiawan",
  },
];

// Data untuk Halaman Daftar Pertemuan (Minimal 10 item)
export const meetings = [
  {
    id: "m1",
    course: "Pemrograman Web",
    meetNum: 1,
    topic: "Pengenalan HTML & CSS Dasar",
    date: "7 Sep 2026",
  },
  {
    id: "m2",
    course: "Algoritma dan Struktur Data",
    meetNum: 1,
    topic: "Konsep Array dan Pointer",
    date: "8 Sep 2026",
  },
  {
    id: "m3",
    course: "Sistem Operasi",
    meetNum: 1,
    topic: "Konsep Dasar OS",
    date: "9 Sep 2026",
  },
  {
    id: "m4",
    course: "Interaksi Manusia dan Komputer",
    meetNum: 1,
    topic: "Pengantar UI/UX",
    date: "10 Sep 2026",
  },
  {
    id: "m5",
    course: "Grafika Komputer",
    meetNum: 1,
    topic: "Pengenalan OpenGL",
    date: "11 Sep 2026",
  },
  {
    id: "m6",
    course: "Pemrograman Web",
    meetNum: 2,
    topic: "JavaScript dan DOM Manipulation",
    date: "14 Sep 2026",
  },
  {
    id: "m7",
    course: "Algoritma dan Struktur Data",
    meetNum: 2,
    topic: "Implementasi Linked List",
    date: "15 Sep 2026",
  },
  {
    id: "m8",
    course: "Sistem Operasi",
    meetNum: 2,
    topic: "Manajemen Proses dan Thread",
    date: "16 Sep 2026",
  },
  {
    id: "m9",
    course: "Interaksi Manusia dan Komputer",
    meetNum: 2,
    topic: "Ragam Dialog dan Evaluasi",
    date: "17 Sep 2026",
  },
  {
    id: "m10",
    course: "Pemrograman Web",
    meetNum: 3,
    topic: "ReactJS Fundamentals",
    date: "21 Sep 2026",
  },
];

// Data untuk Halaman Jadwal per Hari
export const schedules = [
  {
    title: "Senin",
    data: [
      {
        course: "Pemrograman Web",
        room: "Lab Komputer Terpadu",
        time: "08.00-10.30",
      },
    ],
  },
  {
    title: "Selasa",
    data: [
      {
        course: "Algoritma dan Struktur Data",
        room: "Ruang C202",
        time: "10.00-12.30",
      },
      { course: "Sistem Operasi", room: "Ruang C203", time: "13.30-16.00" },
    ],
  },
  {
    title: "Rabu",
    data: [
      {
        course: "Interaksi Manusia dan Komputer",
        room: "Ruang B101",
        time: "08.00-09.40",
      },
    ],
  },
  {
    title: "Kamis",
    data: [
      {
        course: "Grafika Komputer",
        room: "Lab Desain & Multimedia",
        time: "13.00-15.30",
      },
    ],
  },
];
