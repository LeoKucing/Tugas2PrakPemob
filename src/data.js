// Data untuk Halaman Ringkasan Mata Kuliah
export const courses = [
  {
    id: "1",
    name: "Pemrograman Mobile",
    code: "IF-401",
    sks: 3,
    lecturer: "Dr. Ahmad Fauzi",
  },
  {
    id: "2",
    name: "Basis Data Lanjut",
    code: "IF-312",
    sks: 3,
    lecturer: "Dr. Sari Dewi",
  },
  {
    id: "3",
    name: "Kecerdasan Buatan",
    code: "IF-405",
    sks: 3,
    lecturer: "Dr. Rizal Hakim",
  },
  {
    id: "4",
    name: "Jaringan Komputer",
    code: "IF-308",
    sks: 2,
    lecturer: "Dr. Putri Indah",
  },
  {
    id: "5",
    name: "Rekayasa Perangkat Lunak",
    code: "IF-402",
    sks: 3,
    lecturer: "Dr. Hendra Putra",
  },
];

// Data untuk Halaman Daftar Pertemuan (Minimal 10 item)
export const meetings = [
  {
    id: "m1",
    course: "Pemrograman Mobile",
    meetNum: 1,
    topic: "Pengenalan React Native",
    date: "4 Sep 2025",
  },
  {
    id: "m2",
    course: "Basis Data Lanjut",
    meetNum: 1,
    topic: "Review SQL Dasar",
    date: "5 Sep 2025",
  },
  {
    id: "m3",
    course: "Kecerdasan Buatan",
    meetNum: 1,
    topic: "Intro AI & Machine Learning",
    date: "6 Sep 2025",
  },
  {
    id: "m4",
    course: "Pemrograman Mobile",
    meetNum: 2,
    topic: "Komponen & Props",
    date: "11 Sep 2025",
  },
  {
    id: "m5",
    course: "Jaringan Komputer",
    meetNum: 1,
    topic: "Topologi Jaringan",
    date: "12 Sep 2025",
  },
  {
    id: "m6",
    course: "Rekayasa Perangkat Lunak",
    meetNum: 1,
    topic: "SDLC",
    date: "13 Sep 2025",
  },
  {
    id: "m7",
    course: "Basis Data Lanjut",
    meetNum: 2,
    topic: "Normalisasi Database",
    date: "12 Sep 2025",
  },
  {
    id: "m8",
    course: "Kecerdasan Buatan",
    meetNum: 2,
    topic: "Algoritma Pencarian",
    date: "13 Sep 2025",
  },
  {
    id: "m9",
    course: "Pemrograman Mobile",
    meetNum: 3,
    topic: "State & Lifecycle",
    date: "18 Sep 2025",
  },
  {
    id: "m10",
    course: "Jaringan Komputer",
    meetNum: 2,
    topic: "OSI Layer",
    date: "19 Sep 2025",
  },
];

// Data untuk Halaman Jadwal per Hari
export const schedules = [
  {
    title: "Senin",
    data: [
      { course: "Pemrograman Mobile", room: "Ruang A201", time: "08.00-10.30" },
      { course: "Kecerdasan Buatan", room: "Ruang B102", time: "13.00-15.30" },
    ],
  },
  {
    title: "Selasa",
    data: [
      { course: "Basis Data Lanjut", room: "Ruang C301", time: "09.00-11.30" },
      {
        course: "Jaringan Komputer",
        room: "Lab Jaringan",
        time: "13.00-14.40",
      },
    ],
  },
  {
    title: "Rabu",
    data: [
      {
        course: "Rekayasa Perangkat Lunak",
        room: "Ruang A301",
        time: "10.00-12.30",
      },
    ],
  },
];
