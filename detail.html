<?php
include('config.php');

// Ambil id dari URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Query data berdasarkan id
$sql = "SELECT * FROM pengumuman WHERE id = $id";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
} else {
    $row = null;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail Pengumuman - Pemda Sukoharjo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">
</head>
<body class="bg-gray-50">

  <!-- Navbar sama seperti index.html -->
  <nav class="navbar navbar-expand-lg fixed-top floating-nav">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary" href="index.html">
        <i class="fas fa-landmark me-2"></i>Pemda Sukoharjo
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="index.html">Beranda</a></li>
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="profil.php">Profil Pemda</a></li>
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="layanan.php">Layanan Publik</a></li>
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="pariwisata.php">Pariwisata</a></li>
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="berita.php">Berita</a></li>
          <li class="nav-item"><a class="nav-link fw-medium px-3" href="kontak.php">Kontak</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="py-5 mt-5">
    <div class="container">
      <?php if ($row) { ?>
        <div class="card rounded-4 border-0 shadow p-4 mb-4">
        <div class="card-body">
            <h2 class="fw-bold text-primary mb-3"><?= htmlspecialchars($row['title']); ?></h2>
            <span class="badge bg-secondary mb-3">
            Diterbitkan pada: <?= date('d M Y', strtotime($row['created_at'] ?? date('Y-m-d'))); ?>
            </span>
            <hr class="my-3">
            <div class="fs-6 lh-lg text-gray-800">
            <?= nl2br(htmlspecialchars($row['content'])); ?>
            </div>
        </div>
        </div>
        <a href="javascript:history.back()" class="btn btn-outline-primary rounded-pill mt-2">
        <i class="fas fa-arrow-left me-1"></i> Kembali
        </a>

      <?php } else { ?>
        <div class="alert alert-warning">Pengumuman tidak ditemukan.</div>
      <?php } ?>
    </div>
  </section>

  <!-- Footer sama persis index.html -->
  <footer class="footer-gradient py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h5 class="fw-bold mb-4">
            <i class="fas fa-landmark me-2"></i>Pemda Sukoharjo
          </h5>
          <p class="mb-4">Melayani dengan hati untuk kemajuan dan kesejahteraan masyarakat Sukoharjo.</p>
          <div class="d-flex gap-3">
            <a href="#" class="text-white"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#" class="text-white"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#" class="text-white"><i class="fab fa-youtube fa-2x"></i></a>
          </div>
        </div>
        <div class="col-lg-2">
          <h6 class="fw-bold mb-4">Menu</h6>
          <ul class="list-unstyled">
            <li><a href="index.html" class="text-white-50">Beranda</a></li>
            <li><a href="profil.php" class="text-white-50">Profil</a></li>
            <li><a href="layanan.php" class="text-white-50">Layanan</a></li>
            <li><a href="pariwisata.php" class="text-white-50">Pariwisata</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h6 class="fw-bold mb-4">Layanan</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white-50">Pengajuan Izin</a></li>
            <li><a href="#" class="text-white-50">Permohonan KTP</a></li>
            <li><a href="#" class="text-white-50">Layanan Masyarakat</a></li>
            <li><a href="#" class="text-white-50">Pengaduan</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h6 class="fw-bold mb-4">Kontak</h6>
          <p class="text-white-50 mb-2">
            <i class="fas fa-map-marker-alt me-2"></i> Jl. Pemuda No.1, Sukoharjo
          </p>
          <p class="text-white-50 mb-2">
            <i class="fas fa-phone me-2"></i> (0271) 593156
          </p>
          <p class="text-white-50">
            <i class="fas fa-envelope me-2"></i> info@sukoharjo.go.id
          </p>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
        <p class="mb-0">&copy; 2025 Pemda Sukoharjo | All Rights Reserved | Made with <i class="fas fa-heart text-danger"></i> for Sukoharjo</p>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/index.js"></script>
</body>
</html>
