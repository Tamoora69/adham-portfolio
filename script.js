/* ===== Upgraded Portfolio CSS (Glass + Neon) ===== */
body {
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at top, #111 0%, #000 100%);
  font-family: 'Poppins', sans-serif;
  color: #e6f7ff;
  text-align: center;
  overflow-x: hidden;
}

/* HERO SECTION */
.hero {
  padding: 80px 20px;
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  background: #00bfff33;
  filter: blur(120px);
  border-radius: 50%;
  z-index: -1;
}
.profile {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 5px solid #00bfff;
  box-shadow: 0 0 30px #00bfff55;
  object-fit: cover;
  transition: 0.4s;
}
.profile:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 0 0 50px #00bfffaa;
}
.subtitle {
  margin-top: -5px;
  color: #9ddcff;
  font-size: 18px;
  text-shadow: 0 0 8px #00bfff66;
}

/* SECTIONS */
section {
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
  opacity: 0;
  transition: 1s ease;
}

/* SKILLS */
.skills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.skill-box {
  padding: 12px 25px;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  border: 1px solid #00bfff55;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px #00bfff33;
  transition: 0.3s;
}
.skill-box:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 0 25px #00bfff88;
}

/* CONTACT */
.contact a {
  color: #00d5ff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.contact a:hover {
  color: white;
  text-shadow: 0 0 10px #00bfff;
}
