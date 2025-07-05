<?php
include('config.php'); // koneksi DB
$query = isset($_GET['query']) ? trim($_GET['query']) : '';
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hasil Pencarian - Pemda Sukoharjo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/index.css"/>
  <style>
    .search-highlight { color: #667eea; font-weight: 600; }
    .search-section { padding-top: 6rem; padding-bottom: 3rem; }
    .search-card { transition: transform 0.3s ease; }
    .search-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
  </style>
</head>
<body class="bg-gray-50">

<!-- Header (navbar) -->
<nav class="navbar navbar-expand-lg fixed-top floating-nav">
  <div class="container">
    <a class="navbar-brand fw-bold text-primary" href="index.php">
      <i class="fas fa-landmark me-2"></i> Pemda Sukoharjo
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="index.php">Beranda</a></li>
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="profil.php">Profil Pemda</a></li>
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="layanan.php">Layanan Publik</a></li>
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="pariwisata.php">Pariwisata</a></li>
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="berita.php">Berita</a></li>
        <li class="nav-item"><a class="nav-link fw-medium px-3" href="kontak.php">Kontak</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Search Results -->
<section class="search-section container">
  <?php if ($query) : ?>
    <div class="text-center mb-5 py-4 px-3 rounded shadow-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
  <h2 class="fw-bold mb-0 d-flex justify-content-center align-items-center gap-2">
    <i class="fas fa-search"></i>
    <span>Hasil Pencarian</span>
  </h2>
  <p class="mt-2 mb-0 fs-6">Menampilkan hasil untuk: 
    <span class="fw-semibold"><?= htmlspecialchars($query) ?></span>
  </p>
</div>

    <?php
    $sql = "SELECT * FROM pengumuman WHERE title LIKE ? OR content LIKE ?";
    $stmt = mysqli_prepare($conn, $sql);
    $param = "%$query%";
    mysqli_stmt_bind_param($stmt, 'ss', $param, $param);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) :
    ?>
      <div class="row g-4 mt-4">
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
          <div class="col-md-6 col-lg-4">
            <div class="card search-card h-100 rounded-4 border-0 shadow hover:shadow-lg transition">
            <div class="card-body d-flex flex-column p-4">
                <h5 class="card-title fw-semibold text-primary mb-2"><?= htmlspecialchars($row['title']) ?></h5>
                <p class="card-text text-muted flex-grow-1 mb-3"><?= substr(strip_tags($row['content']), 0, 120) ?>...</p>
                <a href="detail.php?id=<?= $row['id'] ?>" class="btn btn-outline-primary btn-sm mt-auto rounded-pill">
                Baca Selengkapnya <i class="fas fa-arrow-right ms-1"></i>
                </a>
            </div>
            </div>

          </div>
        <?php endwhile; ?>
      </div>
    <?php
    else :
      echo "<div class='alert alert-warning text-center mt-4'>Tidak ada hasil ditemukan untuk <strong>".htmlspecialchars($query)."</strong></div>";
    endif;
    ?>
  <?php else : ?>
    <div class="alert alert-info text-center mt-4">
      Silakan masukkan kata kunci untuk pencarian.
    </div>
  <?php endif; ?>
</section>

<!-- Footer -->
<footer class="footer-gradient py-5 mt-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4">
        <h5 class="fw-bold mb-3"><i class="fas fa-landmark me-2"></i>Pemda Sukoharjo</h5>
        <p class="mb-3">Melayani dengan hati untuk kemajuan dan kesejahteraan masyarakat Sukoharjo.</p>
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
          <li><a href="index.php" class="text-white-50">Beranda</a></li>
          <li><a href="profil.php" class="text-white-50">Profil</a></li>
          <li><a href="layanan.php" class="text-white-50">Layanan</a></li>
          <li><a href="pariwisata.php" class="text-white-50">Pariwisata</a></li>
        </ul>
      </div>
      <div class="col-lg-3 mb-4">
        <h6 class="fw-bold mb-3">Layanan</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white-50">Pengajuan Izin</a></li>
          <li><a href="#" class="text-white-50">Permohonan KTP</a></li>
          <li><a href="#" class="text-white-50">Layanan Masyarakat</a></li>
          <li><a href="#" class="text-white-50">Pengaduan</a></li>
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
<script src="js/index.js"></script>
</body>
</html>
