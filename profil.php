<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Profil Pemda Sukoharjo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>
    body { font-family: 'Poppins', sans-serif; }
    .section-title { color: #4F46E5; font-weight: 700; }
  </style>
</head>
<body class="bg-gray-50">

<!-- Navbar -->
<nav class="navbar navbar-expand-lg fixed-top floating-nav shadow-sm bg-white">
  <div class="container">
    <a class="navbar-brand fw-bold text-primary" href="index.html">
      <i class="fas fa-landmark me-2"></i> Pemda Sukoharjo
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link px-3" href="index.html">Beranda</a></li>
        <li class="nav-item"><a class="nav-link px-3 active fw-semibold text-primary" href="profil.php">Profil Pemda</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="layanan.php">Layanan Publik</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="skpd.php">SKPD</a></li>

        <li class="nav-item"><a class="nav-link px-3" href="pariwisata.php">Pariwisata</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="berita.php">Berita</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="kontak.php">Kontak</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Content -->
<section class="container py-5 mt-5">
  <div class="text-center mb-5">
    <h2 class="section-title">Profil Pemda Sukoharjo</h2>
    <p class="text-muted">Informasi tentang sejarah, struktur, dan kontak Pemda Sukoharjo</p>
  </div>

  <div class="row g-4">
  <!-- Card Sejarah -->
  <div class="col-lg-6">
    <div class="card border-0 shadow-sm rounded-4 h-100 hover:shadow-lg transition">
      <div class="card-body p-4 position-relative border-start border-4 border-primary">
        <div class="d-flex align-items-center mb-3">
          <i class="fas fa-history text-primary fa-2x me-3"></i>
          <h5 class="card-title fw-semibold mb-0">Sejarah Pemda</h5>
        </div>
        <p>
          Pemda Sukoharjo adalah pemerintahan kabupaten dengan visi dan misi untuk meningkatkan kesejahteraan masyarakat,
          membangun infrastruktur berkelanjutan, serta mewujudkan pelayanan publik yang berkualitas.
        </p>
      </div>
    </div>
  </div>

  <!-- Card Struktur Organisasi -->
  <div class="col-lg-6">
    <div class="card border-0 shadow-sm rounded-4 h-100 hover:shadow-lg transition">
      <div class="card-body p-4 position-relative border-start border-4 border-success">
        <div class="d-flex align-items-center mb-3">
          <i class="fas fa-sitemap text-success fa-2x me-3"></i>
          <h5 class="card-title fw-semibold mb-0">Struktur Organisasi</h5>
        </div>
        <p>
          Struktur organisasi Pemda Sukoharjo terdiri dari berbagai SKPD yang bersinergi memberikan layanan
          terbaik bagi masyarakat.
        </p>
        <a href="#" class="btn btn-success btn-sm mt-3 rounded-pill">Lihat Detail Struktur</a>
      </div>
    </div>
  </div>

  <!-- Card Lokasi & Kontak -->
  <div class="col-lg-6">
    <div class="card border-0 shadow-sm rounded-4 h-100 hover:shadow-lg transition">
      <div class="card-body p-4 position-relative border-start border-4 border-warning">
        <div class="d-flex align-items-center mb-3">
          <i class="fas fa-map-marker-alt text-warning fa-2x me-3"></i>
          <h5 class="card-title fw-semibold mb-0">Lokasi & Kontak</h5>
        </div>
        <p>Alamat: Jalan Pemda No.1, Sukoharjo</p>
        <p>Telepon: (0271) 123456</p>
        <p>Email: info@pemdasukoharjo.go.id</p>
        <a href="https://maps.google.com/?q=Jalan+Pemda+No.1,+Sukoharjo" target="_blank"
          class="btn btn-outline-warning btn-sm mt-2 rounded-pill">
          <i class="fas fa-map me-1"></i> Lihat di Google Maps
        </a>
      </div>
    </div>
  </div>
</div>

  
  </div>
</section>

<!-- Footer -->
<footer class="footer-gradient py-5 mt-5 bg-primary text-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4">
        <h5 class="fw-bold mb-3"><i class="fas fa-landmark me-2"></i>Pemda Sukoharjo</h5>
        <p>Melayani dengan hati untuk kesejahteraan masyarakat Sukoharjo.</p>
        <div class="d-flex gap-3">
          <a href="#" class="text-white"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="#" class="text-white"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="#" class="text-white"><i class="fab fa-youtube fa-2x"></i></a>
        </div>
      </div>
      <div class="col-lg-2 mb-4">
        <h6 class="fw-bold mb-3">Menu</h6>
        <ul class="list-unstyled">
          <li><a href="index.html" class="text-white-50">Beranda</a></li>
          <li><a href="profil.php" class="text-white-50">Profil</a></li>
          <li><a href="layanan.php" class="text-white-50">Layanan</a></li>
          <li><a href="skpd.php" class="text-white-50">SKPD</a></li>
          <li><a href="pariwisata.php" class="text-white-50">Pariwisata</a></li>
        </ul>
      </div>
      <div class="col-lg-3 mb-4">
        <h6 class="fw-bold mb-3">Kontak</h6>
        <p class="text-white-50 mb-2"><i class="fas fa-map-marker-alt me-2"></i>Jl. Pemuda No.1, Sukoharjo</p>
        <p class="text-white-50 mb-2"><i class="fas fa-phone me-2"></i>(0271) 593156</p>
        <p class="text-white-50"><i class="fas fa-envelope me-2"></i>info@sukoharjo.go.id</p>
      </div>
    </div>
    <hr class="border-white-50 my-4"/>
    <div class="text-center text-white-50">
      &copy; 2025 Pemda Sukoharjo | Made with <i class="fas fa-heart text-danger"></i> for Sukoharjo
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
