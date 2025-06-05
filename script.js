function kirimData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const alamat = document.getElementById("alamat").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;
  const peminatan = document.querySelector('input[name="peminatan"]:checked')?.value || "Belum dipilih";

  if (!nama || !nim || !alamat || !tanggal) {
    alert("⚠️ Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  alert(
    `📋 Pendaftaran Berhasil!\n\n` +
    `👤 Nama     : ${nama}\n` +
    `🆔 NIM      : ${nim}\n` +
    `🎯 Peminatan : ${peminatan}\n` +
    `🏠 Alamat   : ${alamat}\n` +
    `🎓 Angkatan : ${angkatan}\n` +
    `📅 Tanggal  : ${tanggal}`
  );
}
