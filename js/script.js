/* =========================================================
   ETERNITY LIBRARY — Path of Valley Wiki
   สคริปต์เมนู: เปิด/ปิดเมนูมือถือ
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  // กดปุ่ม ☰ เพื่อเปิด/ปิดเมนู (แสดงบนจอมือถือ)
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  // พอกดลิงก์ในเมนูแล้ว ให้เมนูมือถือหุบกลับอัตโนมัติ
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
    });
  });
});
