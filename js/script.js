// Fungsi untuk menghitung BMI
function calculateBMI() {
    // Ambil nilai dari input user
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Konversi cm ke meter

    // Validasi input: Jika ada nilai kosong atau salah, tampilkan pesan error
    if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Harap masukkan semua nilai dengan benar!");
    return;
    }

    // Rumus BMI: Berat badan (kg) / (Tinggi (m) ^ 2)
    const bmi = (weight / (height * height)).toFixed(1);

    // Elemen HTML untuk hasil BMI
    const resultElement = document.getElementById("result");
    const bmiResult = document.getElementById("bmiResult");
    const advice = document.getElementById("advice");

    // Tampilkan hasil BMI
    bmiResult.textContent = `BMI Anda adalah ${bmi}`;
    
    // Berikan saran berdasarkan kategori BMI
    if (bmi < 18.5) {
    advice.textContent = "Anda berada dalam kategori kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
    advice.textContent = "Anda berada dalam kategori berat badan normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
    advice.textContent = "Anda berada dalam kategori kelebihan berat badan.";
    } else {
    advice.textContent = "Anda berada dalam kategori obesitas.";
    }

    // Tampilkan hasil di layar
    resultElement.style.display = "block";
}