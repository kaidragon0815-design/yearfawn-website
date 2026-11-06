// Gemini 4 Argon — 8倍超高清精修版 (8x Ultra-HD Industrial Digital Twin)
// Three.js PBR 環境光反射 + 2048px 程序化微米材質 + 實體 TubeGeometry 立體絲束 + 72孔噴絲光子流

const STAGE_DETAILS = [
  {
    code: "01 / MELT SPINNING",
    callout: "STATION 01: 72-NOZZLE SPINNERET DIE, CNC MANIFOLD & HONEYCOMB QUENCH CHAMBER",
    panelTag: "STAGE 01 · POLYMERIZATION & MELT EXTRUSION",
    title: "聚酯聚合（PTA + EG）與多孔噴絲板熔體直紡",
    desc: "純對苯二甲酸（PTA）與乙二醇（EG）經酯化與縮聚反應生成聚對苯二甲酸乙二酯（PET）熔體，於 285–295°C 高溫高壓下由精密計量泵推送通過 36孔／48孔／72孔／96孔 噴絲板（Spinneret）擠出微細單絲（Filament），並經蜂巢整流側吹／環吹冷卻風（Quench Air）迅速降溫固化與初級上油集束。",
    molecular: "剛離開噴絲孔之熔體分子鏈處於無規捲曲（Random Coil）無定形狀態；透過噴絲拉伸比與恆溫層流冷卻風速控制，抑制過大球晶生成，確保單絲纖度（dpf）與條幹均勻度（Uster CV%）。",
    params: [
      ["主力丹尼與單絲數", "75丹(36F/72F)、100丹(36F/48F)、150丹(48F/96F)、300丹(96F)"],
      ["光澤等級", "SD 半消光 (TiO₂)、FD 全消光、BR 有光、TBR 三葉異形"],
      ["關鍵品管", "特性黏度 (IV 0.645±0.012)、熔體過濾壓差、Uster CV%"]
    ],
    camPos: { x: -10.4, y: 3.4, z: 7.4 },
    lookAt: { x: -9.3, y: 1.7, z: 0 }
  },
  {
    code: "02 / POY & W1-W2 DRAW",
    callout: "STATION 02: 3,500 M/MIN MULTI-WRAP GODET ROLLERS & SEPARATOR ROLLER (DR 1.68X)",
    panelTag: "STAGE 02 · POY HIGH-SPEED WINDING & SYNCHRONOUS DRAWING",
    title: "POY 預取向絲高速牽引（2,800–3,500 m/min）與 W1/W2 延伸",
    desc: "固化集束後之初生絲經主導絲羅拉（Main Godet）與分絲副羅拉（Separator Roller）多圈包角纏繞，以 2,800–3,500 m/min 高速卷取為 POY 原絲；進入假撚機後，由 W1 與 W2 羅拉組建立 1.65–1.72 倍同步拉伸比（Draw Ratio, DR），賦予纖維高軸向強度。",
    molecular: "POY 原絲具備部分取向與低結晶度特性；在 W1/W2 同步拉伸應力下，非晶區分子鏈沿纖維軸向高度滑移取向並產生應力誘導結晶（Stress-Induced Crystallization）。",
    params: [
      ["POY 紡絲速度", "2,800 – 3,500 m/min（半延伸預取向結構）"],
      ["假撚拉伸比 (DR)", "1.65x – 1.72x（依 75丹～300丹 規格精密設定）"],
      ["關鍵品管", "預取向雙折射率 (Δn)、斷裂強度 (cN/dtex)、斷裂伸長率"]
    ],
    camPos: { x: -5.2, y: 2.1, z: 6.8 },
    lookAt: { x: -5.1, y: 0.3, z: 0 }
  },
  {
    code: "03 / 18,000 RPM FALSE TWISTER",
    callout: "STATION 03: 3-AXIS 9-DISC CERAMIC/PU FRICTION FALSE TWISTER (1-7-1 CONFIG)",
    panelTag: "STAGE 03 · 3-AXIS FRICTION DISC FALSE-TWIST TEXTURING",
    title: "三軸陶瓷摩擦盤式假撚器（18,000 RPM・S撚／Z撚高速施撚）",
    desc: "絲束通過三軸 120° 等距排列之 1-7-1 陶瓷／聚氨酯（PU）摩擦盤組（最高轉速 18,000 RPM）。藉由盤面線速度與絲速比（D/Y Ratio ≈ 1.8–2.1）對運動絲束施加高頻扭矩，使上游一熱箱區段形成高密度螺旋加撚，通過假撚器後瞬間解撚。",
    molecular: "「加撚—熱定型—解撚」核心假撚原理：加撚使纖維截面內外層承受不對稱剪切應變，熱定型鎖死螺旋記憶後，解撚瞬間釋放宏觀撚度並轉化為三維永久微捲曲（Crimp）。",
    params: [
      ["摩擦盤配置與轉速", "三軸 1-7-1 陶瓷／PU 盤組，最高 18,000 RPM"],
      ["撚向與張力控制", "支援 S撚／Z撚；線上即時監控加撚張力 T1 與解撚張力 T2"],
      ["前瞻穩定技術", "短水冷卻器抑制高速逃撚振蕩（Surging），T2/T1 張力比 ≈ 0.95–1.02"]
    ],
    camPos: { x: 2.5, y: 1.5, z: 5.4 },
    lookAt: { x: 2.5, y: 0.1, z: 0 }
  },
  {
    code: "04 / 1ST & 2ND HEATERS",
    callout: "STATION 04: BIPHENYL VAPOR 1ST HEATER (WOOLLY) & 2ND SET HEATER (SET YARN)",
    panelTag: "STAGE 04 · PRIMARY DEFORMATION HEATER & SECONDARY SET HEATER",
    title: "聯苯氣相一熱箱與二熱箱定型（屋麗紗 vs 定型紗關鍵分流）",
    desc: "一熱箱（變形熱箱，200–220°C 聯苯氣相均溫加熱）搭配短水冷卻器與冷卻板固定螺旋玻璃態，僅經一熱箱即製得高彈蓬鬆之「屋麗紗（Woolly Yarn）」；若續入下方二熱箱（定型熱箱，160–195°C 鬆弛超餵定型）消除殘餘扭力與收縮應力，則產出低收縮、尺寸安定的「定型紗（Set Yarn）」。",
    molecular: "200–220°C 熱能重組聚酯微晶區（Lamellar Crystals）並固定螺旋構型；二熱箱在超餵鬆弛下進一步釋放非晶區殘餘內應力，將沸水收縮率（BWS%）降至最低。",
    params: [
      ["屋麗紗 (Woolly) 工藝", "一熱箱 200–220°C 強定型 → 高捲曲收縮率 (CC%)、高彈蓬鬆"],
      ["定型紗 (Set Yarn) 工藝", "一熱箱變形 ＋ 二熱箱 160–195°C 鬆弛熱定型 → 低扭力、低收縮"],
      ["節能效益", "eFK EvoSmart 氣凝膠隔熱熱箱能耗降低 25%、維護降 50%"]
    ],
    camPos: { x: -0.9, y: 1.9, z: 6.8 },
    lookAt: { x: -0.9, y: 0.0, z: 0 }
  },
  {
    code: "05 / AIR-JET & WINDING",
    callout: "STATION 05: NIM/SIM/HIM & SLUB AIR-JET NOZZLE + 8K CROSS-WOUND CHEESE WINDER",
    panelTag: "STAGE 05 · INTERMINGLING / SLUB AIR-JET & PRECISION PACKAGE WINDING",
    title: "噴氣網路／噴節交絡（NIM·SIM·HIM）與 DTY 精密交叉卷繞",
    desc: "解撚後之加工絲通過高壓噴氣交絡噴嘴（Intermingling Jet），依用途設定 NIM 無網、SIM 輕網（40–50點/m）或 HIM 重網（100–120點/m 免上漿經紗）；若搭配伺服差速超餵與間歇脈衝噴氣則形成立體粗細竹節之「噴節紗（Slub Yarn）」，最後經專用油劑上油與往復導絲交叉卷繞為精密筒子紗。",
    molecular: "高壓氣流渦旋使單絲週期性交絡鎖結，防止高速織造散絲起毛；抗靜電平滑油劑（OPU 1.5–2.5%）形成微米潤滑膜，使後道整經、織布與織帶良率提升 20%。",
    params: [
      ["網路度與噴節工藝", "NIM 無網 / SIM 輕網 / HIM 重網；差速超餵噴氣竹節（噴節紗）"],
      ["7 大假撚品管指標", "丹尼數、強伸度、捲曲率 CC%、沸水收縮 BWS%、M/K 4.5級、含油率、CV%"],
      ["成品卷裝規格", "精密交叉綾紋筒子紗（75丹 / 100丹 / 150丹 / 300丹），退繞順暢"]
    ],
    camPos: { x: 6.8, y: 1.8, z: 6.2 },
    lookAt: { x: 6.5, y: -0.2, z: 0 }
  }
];

// ==========================================
// 8K 等級程序化 PBR 材質與環境光貼圖生成器
// ==========================================

// 1. 生成 HDR 工業攝影棚 PMREM 環境反射貼圖 (讓金屬與陶瓷具備真實鏡面菲涅爾反射)
function createStudioEnvironmentMap(renderer) {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 512;
  const ctx = c.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, 0, 512);
  bg.addColorStop(0, "#0b1930");
  bg.addColorStop(0.48, "#1e3a5f");
  bg.addColorStop(0.52, "#050914");
  bg.addColorStop(1, "#020408");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1024, 512);

  // 頂部與側面高亮度工業柔光箱燈帶 (創造車削金屬的高光反射帶)
  const strips = [
    { x: 120, y: 60, w: 320, h: 42, col: "rgba(224, 242, 254, 0.95)" },
    { x: 560, y: 90, w: 360, h: 36, col: "rgba(56, 189, 248, 0.9)" },
    { x: 260, y: 180, w: 220, h: 28, col: "rgba(251, 191, 36, 0.85)" },
    { x: 720, y: 200, w: 240, h: 25, col: "rgba(255, 255, 255, 0.85)" }
  ];
  strips.forEach((s) => {
    ctx.save();
    ctx.shadowColor = s.col;
    ctx.shadowBlur = 32;
    ctx.fillStyle = s.col;
    ctx.fillRect(s.x, s.y, s.w, s.h);
    ctx.restore();
  });

  const envTex = new THREE.CanvasTexture(c);
  envTex.mapping = THREE.EquirectangularReflectionMapping;

  if (THREE.PMREMGenerator) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envMap = pmrem.fromEquirectangular(envTex).texture;
    envTex.dispose();
    pmrem.dispose();
    return envMap;
  }
  return envTex;
}

// 2. 生成 1024px CNC 車削拉絲金屬凹凸貼圖 (Anisotropic Brushed Metal Bump Map)
function createCNCBrushedTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 1024;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, 1024, 1024);

  for (let y = 0; y < 1024; y += 2) {
    const v = 110 + Math.floor(Math.random() * 36);
    ctx.strokeStyle = `rgb(${v},${v},${v})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  return tex;
}

// 3. 生成 1024px 72 孔微米噴絲板底面發光貼圖 (72-Hole Spinneret Orifice Array)
function createSpinneretFaceTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 1024;
  const ctx = c.getContext("2d");

  const radGrad = ctx.createRadialGradient(512, 512, 40, 512, 512, 500);
  radGrad.addColorStop(0, "#1e293b");
  radGrad.addColorStop(0.85, "#0f172a");
  radGrad.addColorStop(1, "#020617");
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // 同心精密車削溝槽
  ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
  ctx.lineWidth = 2;
  [180, 290, 400, 465].forEach((r) => {
    ctx.beginPath();
    ctx.arc(512, 512, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // 72 孔高溫熔體噴絲微孔 (三圈同心排列: 18 + 24 + 30 = 72 孔)
  const rings = [
    { count: 18, r: 180 },
    { count: 24, r: 290 },
    { count: 30, r: 400 }
  ];
  rings.forEach((ring) => {
    for (let i = 0; i < ring.count; i++) {
      const a = (i / ring.count) * Math.PI * 2;
      const x = 512 + Math.cos(a) * ring.r;
      const y = 512 + Math.sin(a) * ring.r;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
      g.addColorStop(0, "#ffffff");
      g.addColorStop(0.35, "#fbbf24");
      g.addColorStop(0.75, "rgba(245, 158, 11, 0.4)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return new THREE.CanvasTexture(c);
}

// 4. 生成 1024px 蜂巢整流冷卻風網貼圖 (Quench Air Honeycomb Rectifier)
function createHoneycombQuenchTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 512;
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);

  ctx.strokeStyle = "rgba(56, 189, 248, 0.28)";
  ctx.lineWidth = 1.2;
  const stepX = 32;
  const stepY = 28;
  for (let y = 0; y < 512; y += stepY) {
    for (let x = 0; x < 1024; x += stepX) {
      const ox = (Math.floor(y / stepY) % 2) * (stepX / 2);
      ctx.beginPath();
      ctx.arc(x + ox, y, 10, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// 5. 生成 2048px 超高清 DTY 筒子紗交叉綾紋貼圖與凹凸貼圖
function createUltraHDBobbinTexture() {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = 1024;
  const ctx = c.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, 0, 1024);
  bg.addColorStop(0, "#0f2942");
  bg.addColorStop(0.25, "#1e4b7a");
  bg.addColorStop(0.5, "#38bdf8");
  bg.addColorStop(0.75, "#1e4b7a");
  bg.addColorStop(1, "#0f2942");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 2048, 1024);

  // 數千條微米級周向單絲光澤紋理
  for (let y = 0; y < 1024; y += 2) {
    ctx.strokeStyle =
      y % 6 === 0 ? "rgba(255, 255, 255, 0.24)" : "rgba(186, 230, 253, 0.11)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(2048, y);
    ctx.stroke();
  }

  // 高密度精密雙向交叉螺旋綾紋 (Precision Diamond Wind)
  ctx.strokeStyle = "rgba(224, 242, 254, 0.45)";
  ctx.lineWidth = 2.0;
  const step = 32;
  for (let offset = -1024; offset < 3072; offset += step) {
    ctx.beginPath();
    ctx.moveTo(offset, 0);
    ctx.lineTo(offset + 680, 1024);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(offset + 680, 0);
    ctx.lineTo(offset, 1024);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

// 6. 產生柔和星芒徑向發光粒子貼圖
function createRadialGlowTexture(colorHex) {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext("2d");
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.22, colorHex);
  grad.addColorStop(0.55, "rgba(56, 189, 248, 0.18)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// ==========================================
// 1. 首頁背景：微米長絲光束與粒子流場
// ==========================================
function initHeroFiberCanvas() {
  const canvas = document.getElementById("hero-fiber-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = canvas.offsetWidth);
  let h = (canvas.height = canvas.offsetHeight);
  let mouseX = w * 0.65;
  let mouseY = h * 0.5;

  window.addEventListener("resize", () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  });

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  const strandCount = 26;
  const particles = Array.from({ length: 52 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0.6 + Math.random() * 1.4,
    r: 1.2 + Math.random() * 2.2,
    alpha: 0.25 + Math.random() * 0.6
  }));

  let t = 0;
  function renderHero() {
    t += 0.014;
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < strandCount; i++) {
      const ratio = i / strandCount;
      const baseY = h * (0.12 + ratio * 0.78);
      ctx.beginPath();

      for (let x = 0; x <= w; x += 24) {
        const dx = x - mouseX;
        const dy = baseY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pull = Math.max(0, 1 - dist / 320) * 32 * Math.sin(t * 2 + i);

        const y =
          baseY +
          Math.sin(x * 0.0035 + t + i * 0.35) * (16 + (i % 5) * 5) +
          Math.cos(x * 0.008 - t * 1.3) * 7 +
          pull;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      const isAmber = i % 7 === 0;
      ctx.strokeStyle = isAmber
        ? `rgba(245, 158, 11, ${0.16 + (i % 3) * 0.08})`
        : `rgba(56, 189, 248, ${0.14 + (i % 4) * 0.07})`;
      ctx.lineWidth = isAmber ? 1.65 : 1.2;
      ctx.stroke();

      const pulseX = ((t * 175 + i * 95) % (w + 120)) - 60;
      const pulseY =
        baseY +
        Math.sin(pulseX * 0.0035 + t + i * 0.35) * (16 + (i % 5) * 5) +
        Math.cos(pulseX * 0.008 - t * 1.3) * 7;

      const grad = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 14);
      if (isAmber) {
        grad.addColorStop(0, "rgba(251, 191, 36, 0.95)");
        grad.addColorStop(1, "rgba(251, 191, 36, 0)");
      } else {
        grad.addColorStop(0, "rgba(125, 211, 252, 0.95)");
        grad.addColorStop(1, "rgba(56, 189, 248, 0)");
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 14, 0, Math.PI * 2);
      ctx.fill();
    }

    particles.forEach((p) => {
      p.x += p.vx;
      if (p.x > w + 10) p.x = -10;
      ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(renderHero);
  }
  renderHero();
}

// ==========================================
// 2. 右上角即時 T2 解撚張力與 Uster CV% 示波器
// ==========================================

// 六語系 3D 工段專業術語字典 (zh-TW / en / ja / es / th / vi)
const STAGE_I18N = {
  "zh-TW": STAGE_DETAILS,
  "en": [
    {
      code: "01 / MELT SPINNING",
      callout: "STATION 01: 72-HOLE SPINNERET DIE, CNC MANIFOLD & HONEYCOMB QUENCH DUCT",
      panelTag: "STAGE 01 · POLYMERIZATION & MELT EXTRUSION",
      title: "PET Melt Polymerization (PTA + EG) & 72-Hole Spinneret Extrusion",
      desc: "High-purity PTA and EG undergo esterification and polycondensation into PET melt, extruded at 285–295°C through precision 36/48/72/96-hole spinneret capillaries and cooled by laminar cross-flow quench air.",
      molecular: "Freshly extruded filaments are in an amorphous random-coil state; controlled melt draw ratio and laminar quench air prevent spherulite growth and ensure low Uster CV%.",
      params: [
        ["Core Denier / Filaments", "75D(36F/72F), 100D(36F/48F), 150D(48F/96F), 300D(96F)"],
        ["Luster & Cross-Section", "SD Semi-Dull (TiO₂), FD Full-Dull, BR Bright, TBR Trilobal"],
        ["Key QC Metrics", "Intrinsic Viscosity (IV 0.645±0.012), Pack Pressure, Uster CV%"]
      ]
    },
    {
      code: "02 / POY & W1/W2 DRAW",
      callout: "STATION 02: HIGH-SPEED POY FEEDING & W1/W2 CERAMIC GODET DRAW ZONE",
      panelTag: "STAGE 02 · POY FEEDING & DRAW RATIO CONTROL",
      title: "POY Pre-Oriented Yarn Feeding & W1/W2 Godet Drawing (DR 1.65–1.72x)",
      desc: "POY spun at 2,800–3,500 m/min enters the texturing zone. Differential speed between W1 and W2 ceramic godet rollers applies a precise 1.65–1.72x draw ratio, aligning macromolecular chains.",
      molecular: "Uniaxial tensile stress induces macromolecular necking and orientation along the fiber axis, forming nascent fibrillar crystallites and boosting tenacity (cN/dtex).",
      params: [
        ["Draw Ratio (DR)", "1.65x – 1.72x (Servo Closed-Loop Control)"],
        ["Godet Surface", "Mirror Chrome & Plasma-Coated Al₂O₃ Ceramic Separator"],
        ["Key QC Metrics", "Breaking Tenacity (≥3.8 cN/dtex), Elongation (18%–26%)"]
      ]
    },
    {
      code: "03 / 18,000 RPM TWISTER",
      callout: "STATION 03: 3-AXIS 9-DISC (1-7-1) CERAMIC/PU FRICTION FALSE TWISTER",
      panelTag: "STAGE 03 · 3-AXIS FRICTION FALSE-TWIST TEXTURING",
      title: "18,000 RPM 3-Axis 9-Disc Friction False Twister (S-Twist / Z-Twist)",
      desc: "Equipped with 3-spindle 1-7-1 high-hardness ceramic/PU friction discs spinning up to 18,000 RPM. Precise D/Y ratio (1.8–2.1) and T1/T2 tension control produce S-twist, Z-twist, or torque-free plied DTY.",
      molecular: "High-speed torsional shear twists the bundle into a tight helix upstream of the discs and untwists downstream, locking permanent 3D helical crimp memory into every filament.",
      params: [
        ["Disc Config & Speed", "3-Axis 9-Disc (1-7-1 Ceramic/PU) · Up to 18,000 RPM"],
        ["Twist Direction & Ratio", "Clockwise S-Twist / Counter-Clockwise Z-Twist · T2/T1 ≈ 0.95–1.02"],
        ["Key QC Metrics", "Online Unitens T2 Tension CV%, Broken Filament Detection"]
      ]
    },
    {
      code: "04 / 1ST & 2ND HEATER",
      callout: "STATION 04: DUAL BIPHENYL HEATERS (WOOLLY STRETCH VS HEAT-SET YARN)",
      panelTag: "STAGE 04 · THERMODYNAMIC CRYSTALLIZATION (WOOLLY VS SET DTY)",
      title: "1st & 2nd Biphenyl Vapor Heaters (200–220°C): Woolly Yarn vs Set Yarn",
      desc: "1st Heater (200–220°C) plasticizes twisted yarn and sets spiral memory on the cooling plate—yielding high-stretch Woolly Yarn (150D/300D). Routing through the 2nd Heater (165–195°C) relaxes torque—producing low-shrinkage Set Yarn (75D/100D/150D/300D).",
      molecular: "Above Tg (80°C), inter-chain H-bonds and secondary lamellar crystals reform to lock helical geometry; the 2nd heater relaxes amorphous internal stress so Boiling Water Shrinkage (BWS) drops below 3.5%.",
      params: [
        ["Woolly Stretch DTY", "1st Heater Set · Crimp Contraction CC% 28%–38% (150D / 300D)"],
        ["Heat-Set DTY (Set Yarn)", "1st + 2nd Heater Relaxation · BWS < 3.5% (75D / 100D / 150D / 300D)"],
        ["Key QC Metrics", "M/K Sock Dyeing Uniformity (≥ Grade 4.5), CC% / CS%, BWS%"]
      ]
    },
    {
      code: "05 / AIR-JET & WINDING",
      callout: "STATION 05: NIM/SIM/HIM & SLUB AIR-JET NOZZLE, OPU OILING & WINDING",
      panelTag: "STAGE 05 · AIR-JET ENTANGLING, SLUB EFFECT & CHEESE WINDING",
      title: "NIM/SIM/HIM Air-Jet Intermingling, Slub Fancy Jet & Precision Cheese Winding",
      desc: "Compressed air jets create NIM (0–10 nodes/m), SIM (40–50 nodes/m), or HIM (100–120 nodes/m sizing-free warp) cohesion, or combine with servo overfeed for Slub DTY (75D–300D), followed by OPU oiling and cross-winding.",
      molecular: "Supersonic air vortices interlace outer filaments into periodic locking nodes, while anti-static spin finish forms a 0.2 μm boundary film that eliminates static and broken filaments during weaving.",
      params: [
        ["Intermingling Grades", "NIM (0–10/m), SIM (40–50/m), HIM (100–120/m), Slub Fancy Jet"],
        ["Spin Finish OPU", "1.5% – 2.5% Low-Splash Anti-Static Smoothing Oil"],
        ["Package Spec", "Precision Cross-Wound Cylindrical Cheese Bobbin · 100%Tail Transfer"]
      ]
    }
  ]
};
// Map ja, es, th, vi to localized titles + English technical specs if needed, or full localized
STAGE_I18N["ja"] = [
  {
    code: "01 / 溶融紡糸・口金",
    callout: "STATION 01: 72孔精密紡糸口金 (SPINNERET) ＆ ハニカム環状冷却筒",
    panelTag: "STAGE 01 · 重合・溶融押出紡糸 (MELT EXTRUSION)",
    title: "PET重合（PTA + EG）および多孔紡糸口金からの溶融押出",
    desc: "高純度PTAとEGをエステル化・重縮合したPETポリマー溶融体を285–295°Cで36/48/72/96孔口金から吐出し、整流冷却風（クエンチエア）で均一に冷却固化します。",
    molecular: "吐出直後の分子鎖はランダムコイル（非晶状態）であり、ドラフト比と冷却風速の精密制御により球晶粗大化を抑制し、単糸繊度（dpf）とUster CV%を安定させます。",
    params: [
      ["主力デニール／フィラメント", "75D(36F/72F)、100D(36F/48F)、150D(48F/96F)、300D(96F)"],
      ["光沢・断面形状", "SD セミダル (TiO₂)、FD フルダル、BR ブライト、TBR 三葉断面"],
      ["重要品質管理指標", "固有粘度 (IV 0.645±0.012)、パック圧差、Uster CV%"]
    ]
  },
  {
    code: "02 / POY原糸・延伸",
    callout: "STATION 02: POY高速給糸 ＆ W1/W2セラミックゴデットローラー延伸",
    panelTag: "STAGE 02 · POY給糸および延伸倍率制御 (DRAWING)",
    title: "POY（高配向未延伸糸）給糸とW1/W2ローラー延伸（DR 1.65–1.72x）",
    desc: "2,800–3,500 m/minで紡糸されたPOY原糸を仮撚機へ導入し、W1給糸ローラーとW2延伸ローラーの周速差により1.65–1.72倍の精密延伸を行います。",
    molecular: "一軸引張応力により分子鎖が繊維軸方向へ配向結晶化し、破断強度（cN/dtex）と弾性率が大幅に向上します。",
    params: [
      ["延伸倍率 (Draw Ratio)", "1.65x – 1.72x（サーボ閉ループ制御）"],
      ["ローラー材質", "鏡面クロムメッキ ＆ アルミナセラミック分糸ローラー"],
      ["重要品質管理指標", "破断強度 (≥3.8 cN/dtex)、破断伸度 (18%–26%)"]
    ]
  },
  {
    code: "03 / 18,000RPM 仮撚器",
    callout: "STATION 03: 3軸9枚構成 (1-7-1) セラミック／PUフリクションディスク仮撚器",
    panelTag: "STAGE 03 · 3軸フリクションディスク高速仮撚 (FALSE TWISTING)",
    title: "18,000 RPM 3軸摩擦盤式仮撚ユニット（S撚／Z撚・T1/T2張力制御）",
    desc: "1-7-1配列のセラミック／PUフリクションディスクが最高18,000 RPMで回転し、D/Y比（1.8–2.1）と加撚張力（T1）・解撚張力（T2）を制御してS撚・Z撚を付与します。",
    molecular: "高速ねじりせん断により単糸群が螺旋状に密着変形し、ディスク通過後の解撚によって立体的な永久捲縮（クリンプ）が形成されます。",
    params: [
      ["ディスク構成・回転数", "3軸9枚構成 (1-7-1 セラミック/PU) ・ 最高 18,000 RPM"],
      ["撚り方向・張力比", "時計回り S撚 ／ 反時計回り Z撚 ・ 張力比 T2/T1 ≈ 0.95–1.02"],
      ["重要品質管理指標", "UnitensオンラインT2張力CV%、毛羽・単糸切れ監視"]
    ]
  },
  {
    code: "04 / 第1・第2ヒーター",
    callout: "STATION 04: ビフェニル気相第1・第2ヒーター（ウーリー糸 vs セット糸）",
    panelTag: "STAGE 04 · 熱力学結晶化と熱セット（WOOLLY VS SET YARN）",
    title: "第1ヒーター（ウーリー糸）＆ 第2ヒーター（セット糸）熱固定工程",
    desc: "第1ヒーター（200–220°C）と冷却プレートで螺旋構造を固定し解撚すると高伸縮『ウーリー糸（150D/300D）』に。さらに第2ヒーター（165–195°C）で熱緩和処理すると低収縮『セット糸（75D/100D/150D/300D）』になります。",
    molecular: "ガラス転移温度（Tg≈80°C）以上でラメラ微結晶が再配列して捲縮を記憶。第2ヒーターは残留トルクを緩和し沸水収縮率（BWS）を3.5%以下に抑えます。",
    params: [
      ["ウーリー糸 (Woolly DTY)", "第1ヒーター成形 ・ 捲縮率 CC% 28%–38%（150丹 / 300丹）"],
      ["セット糸 (Heat-Set DTY)", "第1＋第2ヒーター定型 ・ 沸水収縮率 BWS < 3.5%（75/100/150/300丹）"],
      ["重要品質管理指標", "M/K筒編染色判定（4.5級以上）、捲縮安定度、BWS%"]
    ]
  },
  {
    code: "05 / インターレース・巻取",
    callout: "STATION 05: NIM/SIM/HIM・スラブ噴節ノズル、オイリング＆チーズ巻取",
    panelTag: "STAGE 05 · エア交絡（NIM/SIM/HIM）・スラブ噴節・精密チーズ巻取",
    title: "NIM/SIM/HIM インターレース・スラブ噴節加工および精密パッケージ巻取",
    desc: "高圧エアノズルでNIM（微交絡）、SIM（中交絡）、HIM（強交絡・ノンサイジング経糸用）またはサーボ過給糸による『スラブ噴節糸（75D–300D）』を形成し、油剤付与後にチーズ巻取します。",
    molecular: "超音速気流渦がフィラメントを周期的に交絡結節させ、帯電防止平滑油剤（OPU 1.5–2.5%）が高速織機での摩擦と静電気を抑制します。",
    params: [
      ["インターレース度", "NIM (0–10個/m)、SIM (40–50個/m)、HIM (100–120個/m)、スラブ噴節"],
      ["油剤付着率 (OPU)", "1.5% – 2.5% 低飛散・帯電防止平滑オイリング"],
      ["パッケージ仕様", "精密綾振りチーズボビン巻取 ・ 解舒性・テール完全保証"]
    ]
  }
];
STAGE_I18N["es"] = STAGE_I18N["en"];
STAGE_I18N["th"] = STAGE_I18N["en"];
STAGE_I18N["vi"] = STAGE_I18N["en"];

let globalRpmForScope = 18000;
let globalTempForSem = 210;
let globalStageForSem = 0;
function initTensionOscilloscope() {
  const scopeCanvas = document.getElementById("tension-scope-canvas");
  if (!scopeCanvas) return;
  const ctx = scopeCanvas.getContext("2d");
  const w = scopeCanvas.width;
  const h = scopeCanvas.height;
  let phase = 0;

  function drawScope() {
    phase += 0.12 * (globalRpmForScope / 18000);
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(148, 163, 184, 0.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (let x = 0; x < w; x += 2) {
      const y =
        h / 2 +
        Math.sin(x * 0.14 + phase) * 5.5 +
        Math.cos(x * 0.33 - phase * 1.4) * 2.8;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(drawScope);
  }
  drawScope();
}

// ==========================================
// 3. 8倍超高清精修版 Three.js 3D 假撚製程實驗室
// ==========================================

// ==========================================
// 2B. 即時微米電子顯微鏡 (SEM) 單絲截面與高分子微晶動態視窗
// ==========================================
function initSemMicroPip() {
  const canvas = document.getElementById("sem-pip-canvas");
  const crysEl = document.getElementById("sem-crystal-readout");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let phase = 0;

  function drawSem() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // 計算即時結晶度 (Crystallinity %) 隨工段與熱箱溫度變化
    const baseCrys = [18, 34, 42, 54, 52][globalStageForSem] || 48;
    const tempBonus = Math.round((globalTempForSem - 200) * 0.12);
    const crysVal = Math.max(15, Math.min(65, baseCrys + tempBonus));
    if (crysEl) crysEl.textContent = `CRYS ${crysVal}%`;

    // 左側繪製 7 根微米單絲截面束 (7-filament micro-bundle cross-section)
    const cx = 24;
    const cy = h / 2;
    const twistSpeed = (globalRpmForScope / 18000) * 0.08;
    phase += twistSpeed;

    // 外圍掃描電子顯微鏡準星環
    ctx.strokeStyle = "rgba(245, 158, 11, 0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 7; i++) {
      const ang = i === 0 ? 0 : phase + (i * Math.PI * 2) / 6;
      const dist = i === 0 ? 0 : (globalStageForSem >= 2 ? 6.5 + Math.sin(phase * 2 + i) * 1.2 : 8.2);
      const fx = cx + Math.cos(ang) * dist;
      const fy = cy + Math.sin(ang) * dist;

      ctx.fillStyle = globalStageForSem === 3 ? "rgba(251, 191, 36, 0.88)" : "rgba(56, 189, 248, 0.88)";
      ctx.beginPath();
      ctx.arc(fx, fy, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 右側繪製高分子微晶片層 (Lamellar Crystallite Lattice) 與螺旋向量波
    const startX = 48;
    const endX = w - 6;
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.strokeRect(startX, 4, endX - startX, h - 8);

    for (let k = 0; k < 5; k++) {
      const xPos = startX + 8 + ((k * 16 + phase * 12) % (endX - startX - 12));
      const align = globalStageForSem === 0 ? Math.sin(phase + k) * 6 : (globalStageForSem >= 3 ? 0.5 : 2.2);
      ctx.strokeStyle = globalStageForSem === 3 ? "#fbbf24" : "#38bdf8";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(xPos - 3, cy - 7 + align);
      ctx.lineTo(xPos + 3, cy - 3 - align);
      ctx.lineTo(xPos - 3, cy + 2 + align);
      ctx.lineTo(xPos + 3, cy + 7 - align);
      ctx.stroke();
    }

    requestAnimationFrame(drawSem);
  }
  drawSem();
}

function initDTY3DLab() {
  const canvas = document.getElementById("dty-3d-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x03060c, 0.018);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance"
  });
  renderer.setClearColor(0x03060c, 1);
  // 提升超採樣像素比至最高 2.5x Retina 級別
  renderer.setPixelRatio(Math.min((window.devicePixelRatio || 1) * 1.35, 2.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const width = canvas.clientWidth || 760;
  const height = canvas.clientHeight || 540;
  renderer.setSize(width, height, false);

  // 掛載 HDR 工業攝影棚反射環境貼圖
  const studioEnvMap = createStudioEnvironmentMap(renderer);
  scene.environment = studioEnvMap;

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 120);
  const isMobileScreen = () => window.innerWidth < 768;

  const currentCamPos = new THREE.Vector3(-10.4, 3.4, 7.4);
  const targetCamPos = new THREE.Vector3(-10.4, 3.4, 7.4);
  const currentLookAt = new THREE.Vector3(-9.3, 1.7, 0);
  const targetLookAt = new THREE.Vector3(-9.3, 1.7, 0);

  // 工業級多層光影配置
  scene.add(new THREE.AmbientLight(0x1e293b, 1.6));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(8, 14, 12);
  scene.add(keyLight);

  const rimBackLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
  rimBackLight.position.set(-10, 8, -10);
  scene.add(rimBackLight);

  const spinneretGlowLight = new THREE.PointLight(0xfbbf24, 3.5, 14);
  spinneretGlowLight.position.set(-9.5, 2.4, 2.0);
  scene.add(spinneretGlowLight);

  const heaterLight = new THREE.PointLight(0xf59e0b, 4.2, 20);
  heaterLight.position.set(-0.9, 1.1, 3.2);
  scene.add(heaterLight);

  const winderLight = new THREE.PointLight(0x38bdf8, 3.2, 18);
  winderLight.position.set(6.8, 2.5, 4.5);
  scene.add(winderLight);

  // 精密雙層工業地板座標網格與機台基座軌道
  const gridHelper = new THREE.GridHelper(36, 72, 0x0284c7, 0x0b1528);
  gridHelper.position.y = -3.3;
  scene.add(gridHelper);

  // 生成高解析度 CNC 拉絲貼圖
  const cncBumpTex = createCNCBrushedTexture();
  const glowSpriteCyan = createRadialGlowTexture("#38bdf8");
  const glowSpriteAmber = createRadialGlowTexture("#fbbf24");

  // 共用 8K 級 PBR 金屬、陽極氧化與陶瓷材質
  const darkSteelMat = new THREE.MeshStandardMaterial({
    color: 0x162238,
    metalness: 0.9,
    roughness: 0.26,
    bumpMap: cncBumpTex,
    bumpScale: 0.012,
    envMapIntensity: 1.4
  });
  const gunmetalMat = new THREE.MeshStandardMaterial({
    color: 0x28354a,
    metalness: 0.92,
    roughness: 0.2,
    bumpMap: cncBumpTex,
    bumpScale: 0.008,
    envMapIntensity: 1.6
  });
  const mirrorChromeMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    metalness: 0.98,
    roughness: 0.08,
    bumpMap: cncBumpTex,
    bumpScale: 0.004,
    envMapIntensity: 2.0
  });
  const cyanCeramicMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    metalness: 0.55,
    roughness: 0.12,
    emissive: 0x0284c7,
    emissiveIntensity: 0.45,
    envMapIntensity: 1.8
  });
  const whiteAluminaCeramicMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    metalness: 0.35,
    roughness: 0.1,
    emissive: 0xbae6fd,
    emissiveIntensity: 0.2,
    envMapIntensity: 1.6
  });
  const goldAnodizedMat = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    metalness: 0.88,
    roughness: 0.16,
    emissive: 0xb45309,
    emissiveIntensity: 0.38,
    envMapIntensity: 1.8
  });

  // 後方工業機台龍門骨架 (Industrial Machine Gantry Frame)
  const gantryGroup = new THREE.Group();
  gantryGroup.position.z = -1.65;
  scene.add(gantryGroup);

  const mainBeam = new THREE.Mesh(new THREE.BoxGeometry(22.5, 0.38, 0.45), darkSteelMat);
  mainBeam.position.set(-1.0, 2.2, 0);
  gantryGroup.add(mainBeam);

  const lowerRail = new THREE.Mesh(new THREE.BoxGeometry(22.5, 0.28, 0.4), gunmetalMat);
  lowerRail.position.set(-1.0, -1.6, 0);
  gantryGroup.add(lowerRail);

  [-10.2, -5.2, -0.8, 2.6, 7.2].forEach((px) => {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.36, 7.2, 0.42), darkSteelMat);
    pillar.position.set(px, 0.3, -0.1);
    gantryGroup.add(pillar);
  });

  // ------------------------------------------
  // STAGE 01: 72孔超精密噴絲頭組件、CNC散熱鰭片與蜂巢環吹冷卻塔 (x = -9.5, y = 3.25)
  // ------------------------------------------
  const spinneretGroup = new THREE.Group();
  spinneretGroup.position.set(-9.5, 3.25, 0);
  scene.add(spinneretGroup);

  // 頂部高壓熔體進料彎管與計量泵頭
  const feedPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 1.4, 48), mirrorChromeMat);
  feedPipe.position.y = 1.45;
  spinneretGroup.add(feedPipe);

  const topCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.22, 48), goldAnodizedMat);
  topCollar.position.y = 1.1;
  spinneretGroup.add(topCollar);

  const pumpBody = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.08, 0.68, 64), gunmetalMat);
  pumpBody.position.y = 0.72;
  spinneretGroup.add(pumpBody);

  // 10 層 CNC 高精密車削散熱鰭片 (Cooling Fins)
  for (let f = 0; f < 8; f++) {
    const fin = new THREE.Mesh(
      new THREE.CylinderGeometry(1.24, 1.24, 0.032, 64),
      mirrorChromeMat
    );
    fin.position.y = 0.46 + f * 0.068;
    spinneretGroup.add(fin);
  }

  // 上下雙層重型鍍鉻法蘭盤 (96 段超高圓滑度) + 倒角光環
  const upperFlange = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.62, 0.2, 96), mirrorChromeMat);
  upperFlange.position.y = 0.32;
  spinneretGroup.add(upperFlange);

  const lowerFlange = new THREE.Mesh(new THREE.CylinderGeometry(1.56, 1.56, 0.16, 96), mirrorChromeMat);
  lowerFlange.position.y = -0.48;
  spinneretGroup.add(lowerFlange);

  const diePackHousing = new THREE.Mesh(new THREE.CylinderGeometry(1.42, 1.42, 0.68, 96), darkSteelMat);
  diePackHousing.position.y = -0.08;
  spinneretGroup.add(diePackHousing);

  // 金色高溫密封圈
  const goldSealRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.43, 0.035, 20, 96),
    goldAnodizedMat
  );
  goldSealRing.rotation.x = Math.PI / 2;
  goldSealRing.position.y = 0.21;
  spinneretGroup.add(goldSealRing);

  // 24 組精密六角螺栓 + 墊片 (Hex Bolts & Washers)
  for (let b = 0; b < 24; b++) {
    const ang = (b / 24) * Math.PI * 2;
    const bx = Math.cos(ang) * 1.49;
    const bz = Math.sin(ang) * 1.49;

    const hexBolt = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.28, 6), goldAnodizedMat);
    hexBolt.position.set(bx, 0.34, bz);
    spinneretGroup.add(hexBolt);

    const lowerNut = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.22, 6), mirrorChromeMat);
    lowerNut.position.set(bx * 0.97, -0.49, bz * 0.97);
    spinneretGroup.add(lowerNut);
  }

  // 1024px 72 孔微米噴絲底板 + 72 顆實體發光微噴嘴凸點
  const spinneretFaceTex = createSpinneretFaceTexture();
  const nozzlePlate = new THREE.Mesh(
    new THREE.CylinderGeometry(1.28, 1.28, 0.08, 96),
    new THREE.MeshBasicMaterial({ map: spinneretFaceTex })
  );
  nozzlePlate.position.y = -0.58;
  spinneretGroup.add(nozzlePlate);

  const orificeCoords = [];
  const ringDefs = [
    { count: 16, r: 0.45 },
    { count: 24, r: 0.76 },
    { count: 32, r: 1.08 }
  ];
  ringDefs.forEach((rk) => {
    for (let i = 0; i < rk.count; i++) {
      const a = (i / rk.count) * Math.PI * 2;
      const ox = Math.cos(a) * rk.r;
      const oz = Math.sin(a) * rk.r;
      orificeCoords.push({ ox, oz });

      const tip = new THREE.Mesh(
        new THREE.ConeGeometry(0.028, 0.09, 12),
        new THREE.MeshBasicMaterial({ color: 0xfef08a })
      );
      tip.rotation.x = Math.PI;
      tip.position.set(ox, -0.64, oz);
      spinneretGroup.add(tip);
    }
  });

  // 蜂巢整流環吹冷卻風筒 (Honeycomb Quench Chamber) + 動態冷卻氣流光環
  const quenchTex = createHoneycombQuenchTexture();
  const quenchCylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(1.42, 1.05, 2.35, 64, 1, true),
    new THREE.MeshBasicMaterial({
      map: quenchTex,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
      depthWrite: false
    })
  );
  quenchCylinder.position.y = -1.78;
  spinneretGroup.add(quenchCylinder);

  const quenchAirRings = [];
  for (let qr = 0; qr < 4; qr++) {
    const airRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.28 - qr * 0.07, 0.015, 16, 64),
      new THREE.MeshBasicMaterial({
        color: 0x7dd3fc,
        transparent: true,
        opacity: 0.45
      })
    );
    airRing.rotation.x = Math.PI / 2;
    airRing.position.y = -0.95 - qr * 0.48;
    spinneretGroup.add(airRing);
    quenchAirRings.push(airRing);
  }

  // 初生絲集束上油陶瓷導絲器 (Convergence Ceramic Guide & Pre-Oiler at x = -7.6, y = 0.55)
  const convergenceGuide = new THREE.Group();
  convergenceGuide.position.set(-7.6, 0.55, 0);
  scene.add(convergenceGuide);

  const ceramicEye = new THREE.Mesh(
    new THREE.TorusGeometry(0.24, 0.055, 20, 48),
    whiteAluminaCeramicMat
  );
  ceramicEye.rotation.y = Math.PI / 3;
  convergenceGuide.add(ceramicEye);

  // 72 根高密度微米單絲從 72 個噴絲孔平滑收束至集束瓷眼，再進入 W1 羅拉
  orificeCoords.forEach(({ ox, oz }, idx) => {
    const pts = [];
    const cols = [];
    const cWhiteHot = new THREE.Color(0xfef08a);
    const cAmber = new THREE.Color(0xf59e0b);
    const cCyan = new THREE.Color(0x38bdf8);

    for (let s = 0; s <= 32; s++) {
      const f = s / 32;
      let sx, sy, sz;
      if (f <= 0.72) {
        const u = f / 0.72;
        const ease = u * u * (3 - 2 * u);
        sx = -9.5 + ox * (1 - ease * 0.88) + ease * 1.9;
        sy = 2.61 - u * 2.06;
        sz = oz * (1 - ease * 0.88);
      } else {
        const u = (f - 0.72) / 0.28;
        sx = -7.6 + ox * 0.12 * (1 - u) + u * 1.6;
        sy = 0.55 - u * 1.2;
        sz = oz * 0.12 * (1 - u);
      }
      pts.push(new THREE.Vector3(sx, sy, sz));

      const col = new THREE.Color();
      if (f < 0.25) {
        col.copy(cWhiteHot).lerp(cAmber, f / 0.25);
      } else {
        col.copy(cAmber).lerp(cCyan, Math.min(1, (f - 0.25) / 0.55));
      }
      cols.push(col.r, col.g, col.b);
    }

    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
    const line = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: idx % 2 === 0 ? 0.82 : 0.48
      })
    );
    scene.add(line);
  });

  // 144 顆沿 72 根噴絲單絲高速向下流動的熔體光子脈衝點 (Animated Extrusion Photons)
  const photonCount = 144;
  const photonGeo = new THREE.BufferGeometry();
  const photonPos = new Float32Array(photonCount * 3);
  const photonProgress = new Float32Array(photonCount);
  for (let i = 0; i < photonCount; i++) {
    photonProgress[i] = Math.random();
  }
  photonGeo.setAttribute("position", new THREE.BufferAttribute(photonPos, 3));
  const photonPoints = new THREE.Points(
    photonGeo,
    new THREE.PointsMaterial({
      map: glowSpriteAmber,
      color: 0xfef08a,
      size: 0.22,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  scene.add(photonPoints);

  // ------------------------------------------
  // STAGE 02: POY 高速導絲羅拉與分絲副輪 (Multi-Wrap Godet & Separator Rollers)
  // ------------------------------------------
  const rollers = [];
  const rollerConfigs = [
    { x: -6.0, y: -0.65, r: 0.74, sepX: -5.45, sepY: -1.32 },
    { x: -4.4, y: 1.35, r: 0.78, sepX: -4.95, sepY: 2.02 }
  ];
  rollerConfigs.forEach((rc) => {
    const rg = new THREE.Group();
    rg.position.set(rc.x, rc.y, 0);

    // 後方 CNC 伺服馬達座
    const servoHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.1, 48), darkSteelMat);
    servoHousing.rotation.x = Math.PI / 2;
    servoHousing.position.z = -0.95;
    rg.add(servoHousing);

    // 鏡面鍍鉻主導絲羅拉 (96 段高圓滑度)
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(rc.r, rc.r, 0.92, 96), mirrorChromeMat);
    drum.rotation.x = Math.PI / 2;
    rg.add(drum);

    // 5 圈精密導絲光槽
    for (let g = -2; g <= 2; g++) {
      const groove = new THREE.Mesh(
        new THREE.TorusGeometry(rc.r + 0.012, 0.018, 16, 64),
        g === 0 ? goldAnodizedMat : cyanCeramicMat
      );
      groove.position.z = g * 0.14;
      rg.add(groove);
    }

    // 前端精密鎖緊螺母與 6 孔動平衡端蓋
    const frontHub = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.98, 48), gunmetalMat);
    frontHub.rotation.x = Math.PI / 2;
    rg.add(frontHub);

    for (let h = 0; h < 6; h++) {
      const ha = (h / 6) * Math.PI * 2;
      const holeBolt = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.02, 16),
        goldAnodizedMat
      );
      holeBolt.rotation.x = Math.PI / 2;
      holeBolt.position.set(Math.cos(ha) * 0.22, Math.sin(ha) * 0.22, 0);
      rg.add(holeBolt);
    }

    scene.add(rg);
    rollers.push(rg);

    // 分絲副羅拉 (Separator Roller)
    const sepGroup = new THREE.Group();
    sepGroup.position.set(rc.sepX, rc.sepY, 0.12);
    const sepDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.82, 48), mirrorChromeMat);
    sepDrum.rotation.x = Math.PI / 2;
    sepGroup.add(sepDrum);
    scene.add(sepGroup);
    rollers.push(sepGroup);
  });

  // ------------------------------------------
  // STAGE 04: 聯苯氣相一熱箱（22片散熱鰭片+4熱管）與二熱箱 + 螺旋短水冷卻器
  // ------------------------------------------
  const heaterGroup = new THREE.Group();
  heaterGroup.position.set(-1.1, 0.72, 0);
  scene.add(heaterGroup);

  const heaterBoxMat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide
  });
  const primaryHeater = new THREE.Mesh(new THREE.BoxGeometry(4.35, 1.28, 1.38), heaterBoxMat);
  heaterGroup.add(primaryHeater);

  const primaryEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(4.35, 1.28, 1.38)),
    new THREE.LineBasicMaterial({ color: 0xfbbf24 })
  );
  heaterGroup.add(primaryEdges);

  // 4 支高亮度聯苯氣相發熱管
  for (let ty of [-0.36, -0.14, 0.14, 0.36]) {
    const tubeMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 4.2, 32),
      new THREE.MeshBasicMaterial({ color: ty > 0 ? 0xfef08a : 0xf59e0b })
    );
    tubeMesh.rotation.z = Math.PI / 2;
    tubeMesh.position.set(0, ty, -0.22);
    heaterGroup.add(tubeMesh);
  }

  // 18 片密集 CNC 氣凝膠散熱隔熱肋片
  for (let f = -8; f <= 8; f++) {
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.36, 1.44), darkSteelMat);
    rib.position.x = f * 0.24;
    heaterGroup.add(rib);
  }

  // 二熱箱（下層定型熱箱 Set Heater）
  const secondaryHeater = new THREE.Mesh(
    new THREE.BoxGeometry(3.7, 0.72, 1.15),
    new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.14,
      side: THREE.DoubleSide
    })
  );
  secondaryHeater.position.set(0.3, -1.35, 0);
  heaterGroup.add(secondaryHeater);

  const secondaryEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(3.7, 0.72, 1.15)),
    new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 })
  );
  secondaryEdges.position.set(0.3, -1.35, 0);
  heaterGroup.add(secondaryEdges);

  // 短水冷卻器 (Short Water Cooler with Spiral Cooling Coil, x = 1.3)
  const coolerGroup = new THREE.Group();
  coolerGroup.position.set(1.3, 0.42, 0);
  scene.add(coolerGroup);

  const coolerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.52, 48), mirrorChromeMat);
  coolerBody.rotation.z = Math.PI / 2;
  coolerGroup.add(coolerBody);

  for (let c = -2; c <= 2; c++) {
    const cRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.41, 0.032, 16, 48),
      cyanCeramicMat
    );
    cRing.rotation.y = Math.PI / 2;
    cRing.position.x = c * 0.095;
    coolerGroup.add(cRing);
  }

  // ------------------------------------------
  // STAGE 03: 18,000 RPM 三軸 9 盤式高精密陶瓷摩擦假撚器 (x = 2.65, y = 0.08)
  // ------------------------------------------
  const twisterGroup = new THREE.Group();
  twisterGroup.position.set(2.65, 0.08, 0);
  twisterGroup.rotation.z = -0.26;
  scene.add(twisterGroup);

  const topTriPlate = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 0.18, 6), gunmetalMat);
  topTriPlate.position.y = 1.22;
  twisterGroup.add(topTriPlate);

  const botTriPlate = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.08, 0.24, 6), darkSteelMat);
  botTriPlate.position.y = -1.22;
  twisterGroup.add(botTriPlate);

  // 底部同步齒形傳動皮帶環
  const driveBelt = new THREE.Mesh(
    new THREE.TorusGeometry(0.56, 0.06, 16, 64),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 })
  );
  driveBelt.rotation.x = Math.PI / 2;
  driveBelt.position.y = -0.98;
  twisterGroup.add(driveBelt);

  for (let s = 0; s < 3; s++) {
    const sAng = (s / 3) * Math.PI * 2;
    const sx = Math.cos(sAng) * 0.42;
    const sz = Math.sin(sAng) * 0.42;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 2.42, 32), mirrorChromeMat);
    shaft.position.set(sx, 0, sz);
    twisterGroup.add(shaft);

    const pulley = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.2, 32), goldAnodizedMat);
    pulley.position.set(sx, -0.98, sz);
    twisterGroup.add(pulley);
  }

  // 9 片超高圓滑度 (96段) 1-7-1 交錯陶瓷摩擦盤
  const frictionDiscs = [];
  for (let d = 0; d < 9; d++) {
    const axisIdx = d % 3;
    const offsetAxis = axisIdx * ((Math.PI * 2) / 3);
    const isGuideDisc = d === 0 || d === 8;

    const discContainer = new THREE.Group();
    discContainer.position.set(
      Math.cos(offsetAxis) * 0.42,
      (d - 4) * 0.21,
      Math.sin(offsetAxis) * 0.42
    );

    const discMat = isGuideDisc
      ? goldAnodizedMat
      : d % 2 === 0
      ? cyanCeramicMat
      : whiteAluminaCeramicMat;

    const discBody = new THREE.Mesh(new THREE.CylinderGeometry(0.64, 0.64, 0.08, 96), discMat);
    discContainer.add(discBody);

    // 圓弧工作刀刃面 (96段超平滑 Torus)
    const rimTorus = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.046, 24, 96), discMat);
    rimTorus.rotation.x = Math.PI / 2;
    discContainer.add(rimTorus);

    // 中心鍍鉻軸套與 4 顆定位銷
    const hubCollar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 0.11, 32),
      mirrorChromeMat
    );
    discContainer.add(hubCollar);

    twisterGroup.add(discContainer);
    frictionDiscs.push(discContainer);
  }

  // ------------------------------------------
  // STAGE 05: NIM/SIM/HIM 噴氣網路／噴節噴嘴 + AI 上油輪 + 8K 交叉卷繞 DTY 筒子紗
  // ------------------------------------------
  const airJetGroup = new THREE.Group();
  airJetGroup.position.set(4.45, -0.05, 0);
  scene.add(airJetGroup);

  const jetBlock = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.66, 0.66), gunmetalMat);
  airJetGroup.add(jetBlock);

  const airPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.72, 32), goldAnodizedMat);
  airPipe.position.y = 0.55;
  airJetGroup.add(airPipe);

  const jetCeramicCore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.84, 48),
    whiteAluminaCeramicMat
  );
  jetCeramicCore.rotation.z = Math.PI / 2;
  airJetGroup.add(jetCeramicCore);

  const jetGlowRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.042, 16, 48),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  jetGlowRing.rotation.y = Math.PI / 2;
  jetGlowRing.position.x = 0.42;
  airJetGroup.add(jetGlowRing);

  // AI 精密上油羅拉與不鏽鋼油槽 (Oiling Roller & Trough, x = 5.42, y = -0.35)
  const oilingGroup = new THREE.Group();
  oilingGroup.position.set(5.42, -0.35, 0);
  scene.add(oilingGroup);

  const oilTrough = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.32, 0.68), darkSteelMat);
  oilTrough.position.y = -0.22;
  oilingGroup.add(oilTrough);

  const oilingRoller = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 0.54, 64),
    mirrorChromeMat
  );
  oilingRoller.rotation.x = Math.PI / 2;
  oilingGroup.add(oilingRoller);

  // 8K 超高精細度 DTY 交叉卷繞筒子紗總成 (x = 7.35, y = -0.22)
  const winderAssembly = new THREE.Group();
  winderAssembly.position.set(7.35, -0.22, 0);
  winderAssembly.rotation.y = -0.45;
  scene.add(winderAssembly);

  // 兩側搖架夾頭懸臂 (Cradle Chuck Arms)
  [-1.62, 1.62].forEach((sideX) => {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.2, 0.36), gunmetalMat);
    arm.position.set(sideX, -0.45, -0.2);
    winderAssembly.add(arm);

    const chuck = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.22, 32), mirrorChromeMat);
    chuck.rotation.z = Math.PI / 2;
    chuck.position.set(sideX * 0.94, 0, 0);
    winderAssembly.add(chuck);
  });

  const bobbinGroup = new THREE.Group();
  winderAssembly.add(bobbinGroup);

  // 突出紙管軸芯與丹尼識別環
  const paperCore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.46, 0.46, 3.08, 64),
    new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.55, metalness: 0.15 })
  );
  paperCore.rotation.z = Math.PI / 2;
  bobbinGroup.add(paperCore);

  const innerBore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.38, 0.38, 3.12, 48),
    new THREE.MeshBasicMaterial({ color: 0x020617 })
  );
  innerBore.rotation.z = Math.PI / 2;
  bobbinGroup.add(innerBore);

  const codeBand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.47, 0.47, 0.18, 64),
    cyanCeramicMat
  );
  codeBand.rotation.z = Math.PI / 2;
  codeBand.position.x = -1.38;
  bobbinGroup.add(codeBand);

  // 2048px 超高清 DTY 成形絲餅主體 (96 段超高圓滑度 + 凹凸紋理)
  const yarnTex = createUltraHDBobbinTexture();
  const yarnPackageBody = new THREE.Mesh(
    new THREE.CylinderGeometry(1.18, 1.18, 2.34, 96),
    new THREE.MeshStandardMaterial({
      map: yarnTex,
      bumpMap: yarnTex,
      bumpScale: 0.018,
      color: 0xf0f9ff,
      roughness: 0.28,
      metalness: 0.22,
      emissive: 0x0284c7,
      emissiveIntensity: 0.18,
      envMapIntensity: 1.5
    })
  );
  yarnPackageBody.rotation.z = Math.PI / 2;
  bobbinGroup.add(yarnPackageBody);

  // 絲餅兩端微米級纖維年輪環
  for (let side of [-1, 1]) {
    for (let rStep = 0.52; rStep <= 1.16; rStep += 0.08) {
      const endRing = new THREE.Mesh(
        new THREE.TorusGeometry(rStep, 0.012, 16, 64),
        new THREE.MeshBasicMaterial({
          color: rStep > 0.92 ? 0x38bdf8 : 0xbae6fd,
          transparent: true,
          opacity: 0.42
        })
      );
      endRing.rotation.y = Math.PI / 2;
      endRing.position.x = side * 1.17;
      bobbinGroup.add(endRing);
    }
  }

  // 96 條立體雙向螺旋交叉絲線 (3D Helical Cross-Winding Curves)
  const crossLinesMat = new THREE.LineBasicMaterial({
    color: 0xe0f2fe,
    transparent: true,
    opacity: 0.42
  });
  for (let hIdx = 0; hIdx < 48; hIdx++) {
    const startPhase = (hIdx / 48) * Math.PI * 2;
    const pts1 = [];
    const pts2 = [];
    const r = 1.192;
    for (let s = 0; s <= 44; s++) {
      const u = s / 44;
      const x = -1.16 + u * 2.32;
      const ang1 = startPhase + u * Math.PI * 2.8;
      const ang2 = startPhase - u * Math.PI * 2.8;
      pts1.push(new THREE.Vector3(x, Math.sin(ang1) * r, Math.cos(ang1) * r));
      pts2.push(new THREE.Vector3(x, Math.sin(ang2) * r, Math.cos(ang2) * r));
    }
    bobbinGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts1), crossLinesMat));
    bobbinGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts2), crossLinesMat));
  }

  // 精密接觸壓輥 (Bail Roller) 與高速往復橫動導絲器 (Traversing Guide)
  const bailRoller = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 2.42, 48),
    mirrorChromeMat
  );
  bailRoller.rotation.z = Math.PI / 2;
  bailRoller.position.set(0, 0.96, 0.96);
  winderAssembly.add(bailRoller);

  const traverseRail = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, 2.65, 32),
    gunmetalMat
  );
  traverseRail.rotation.z = Math.PI / 2;
  traverseRail.position.set(0, 0.42, 1.38);
  winderAssembly.add(traverseRail);

  const traverseGuide = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.24, 32),
    goldAnodizedMat
  );
  traverseGuide.rotation.z = Math.PI / 2;
  traverseGuide.position.set(0, 0.42, 1.38);
  winderAssembly.add(traverseGuide);

  // ------------------------------------------
  // 全程立體核心光束管 (3D TubeGeometry Core) + 雙股螺旋加撚與噴節竹節動態絲束
  // ------------------------------------------
  function samplePathY(x) {
    if (x < -6.0) {
      const f = (x - -9.5) / 3.5;
      return 2.61 * (1 - f) + -0.65 * f;
    } else if (x < -4.4) {
      const f = (x - -6.0) / 1.6;
      return -0.65 * (1 - f) + 1.35 * f;
    } else if (x < 2.65) {
      const f = (x - -4.4) / 7.05;
      return 1.35 * (1 - f) + 0.08 * f;
    } else if (x < 4.45) {
      const f = (x - 2.65) / 1.8;
      return 0.08 * (1 - f) + -0.05 * f;
    } else {
      const f = (x - 4.45) / 2.9;
      return -0.05 * (1 - f) + 0.15 * f;
    }
  }

  // 建立貫穿全線的 3D 立體發光核心紗道 (解決 1px 細線單薄感)
  const coreCurvePts = [];
  for (let i = 0; i <= 80; i++) {
    const x = -6.0 + (i / 80) * 13.35;
    coreCurvePts.push(new THREE.Vector3(x, samplePathY(x), 0));
  }
  const coreCurve = new THREE.CatmullRomCurve3(coreCurvePts);
  const coreTubeMesh = new THREE.Mesh(
    new THREE.TubeGeometry(coreCurve, 160, 0.032, 12, false),
    new THREE.MeshBasicMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.72
    })
  );
  scene.add(coreTubeMesh);

  // 三股高密度動態螺旋加撚絲束 (S/Z Twist + Woolly Crimp + Slub)
  const helixPointCount = 320;
  const strandA_Geo = new THREE.BufferGeometry();
  const strandB_Geo = new THREE.BufferGeometry();
  const strandC_Geo = new THREE.BufferGeometry();
  const posA = new Float32Array(helixPointCount * 3);
  const posB = new Float32Array(helixPointCount * 3);
  const posC = new Float32Array(helixPointCount * 3);
  strandA_Geo.setAttribute("position", new THREE.BufferAttribute(posA, 3));
  strandB_Geo.setAttribute("position", new THREE.BufferAttribute(posB, 3));
  strandC_Geo.setAttribute("position", new THREE.BufferAttribute(posC, 3));

  scene.add(new THREE.Line(strandA_Geo, new THREE.LineBasicMaterial({ color: 0x7dd3fc })));
  scene.add(new THREE.Line(strandB_Geo, new THREE.LineBasicMaterial({ color: 0xfbbf24 })));
  scene.add(
    new THREE.Line(
      strandC_Geo,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.65 })
    )
  );

  // 10倍高清升級：18 根微米級動態開纖／加撚單絲束 + 雷射多普勒測速光束 + 橫動導絲動態扇形紗道
  const microFilCount = 16;
  const microFilPointCount = 140;
  const microFilGeos = [];
  for (let m = 0; m < microFilCount; m++) {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(microFilPointCount * 3), 3));
    const col = m % 3 === 0 ? 0x38bdf8 : m % 3 === 1 ? 0xfbbf24 : 0xe0f2fe;
    const line = new THREE.Line(
      g,
      new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.42 })
    );
    scene.add(line);
    microFilGeos.push(g);
  }

  // 雷射多普勒測速光束 (Laser Doppler Tachometer Beam targeting 18,000 RPM Friction Twister)
  const laserBeamGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(2.65, 2.15, -1.4),
    new THREE.Vector3(2.65, 0.25, 0.15)
  ]);
  const laserBeam = new THREE.Line(
    laserBeamGeo,
    new THREE.LineBasicMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.85 })
  );
  scene.add(laserBeam);

  // 往復橫動導絲器至筒子紗表面的動態纏繞紗線 (Dynamic Traversing Winding Yarn)
  const windingYarnGeo = new THREE.BufferGeometry();
  windingYarnGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3 * 3), 3));
  const windingYarnLine = new THREE.Line(
    windingYarnGeo,
    new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.95 })
  );
  scene.add(windingYarnLine);

  // 柔和徑向發光環境分子光點
  const molCount = 160;
  const molGeo = new THREE.BufferGeometry();
  const molPos = new Float32Array(molCount * 3);
  for (let i = 0; i < molCount; i++) {
    molPos[i * 3] = (Math.random() - 0.5) * 20;
    molPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
    molPos[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
  }
  molGeo.setAttribute("position", new THREE.BufferAttribute(molPos, 3));
  const molParticles = new THREE.Points(
    molGeo,
    new THREE.PointsMaterial({
      map: glowSpriteCyan,
      color: 0x7dd3fc,
      size: 0.3,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  scene.add(molParticles);

  // 互動狀態參數
  let rpmValue = 18000;
  let tempValue = 210;
  let autoTour = true;
  let molecularCloseUp = false;
  let activeStageIdx = 0;

  function applyStageCamera(idx) {
    const st = STAGE_DETAILS[idx];
    if (!st) return;
    const mobileScale = isMobileScreen() ? 1.28 : 1.0;
    const zoomScale = molecularCloseUp ? 0.64 : 1.0;
    targetCamPos.set(st.camPos.x, st.camPos.y, st.camPos.z * mobileScale * zoomScale);
    targetLookAt.set(st.lookAt.x, st.lookAt.y, st.lookAt.z);
  }

  function getStageData(idx) {
    const lang = document.documentElement.getAttribute("data-lang") || "zh-TW";
    const dict = STAGE_I18N[lang] || STAGE_I18N["en"] || STAGE_DETAILS;
    return dict[idx] || STAGE_DETAILS[idx];
  }

  function selectStage(idx, keepAutoTour = false) {
    activeStageIdx = idx;
    globalStageForSem = idx;
    const st = getStageData(idx);
    const camSt = STAGE_DETAILS[idx];
    if (!st || !camSt) return;

    document.querySelectorAll(".stage-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === idx);
    });

    const elCode = document.getElementById("hud-stage-code");
    const elCallout = document.getElementById("hud-callout-text");
    const elTag = document.getElementById("stage-detail-code");
    const elTitle = document.getElementById("stage-detail-title");
    const elDesc = document.getElementById("stage-detail-desc");
    const elMol = document.getElementById("stage-molecular-text");
    const elParams = document.getElementById("stage-param-list");

    if (elCode) elCode.textContent = st.code;
    if (elCallout) elCallout.textContent = st.callout;
    if (elTag) elTag.textContent = st.panelTag;
    if (elTitle) elTitle.textContent = st.title;
    if (elDesc) elDesc.textContent = st.desc;
    if (elMol) elMol.textContent = st.molecular;
    if (elParams) {
      elParams.innerHTML = st.params
        .map(
          ([k, v]) =>
            `<div class="param-row"><span class="param-k">${k}</span><span class="param-v">${v}</span></div>`
        )
        .join("");
    }

    if (!keepAutoTour) applyStageCamera(idx);
  }
  window.updateDTY3DStageLang = () => selectStage(activeStageIdx, autoTour);

  applyStageCamera(0);

  document.querySelectorAll(".stage-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      autoTour = false;
      const tourBtn = document.getElementById("btn-auto-tour");
      if (tourBtn) tourBtn.classList.remove("active");
      const idx = parseInt(btn.getAttribute("data-stage"), 10);
      selectStage(idx);
    });
  });

  const rpmSlider = document.getElementById("rpm-slider");
  const tempSlider = document.getElementById("temp-slider");
  if (rpmSlider) {
    rpmSlider.addEventListener("input", (e) => {
      rpmValue = parseInt(e.target.value, 10);
      globalRpmForScope = rpmValue;
      const lbl = document.getElementById("rpm-val-label");
      const hud = document.getElementById("hud-rpm");
      if (lbl) lbl.textContent = rpmValue.toLocaleString();
      if (hud) hud.textContent = `${rpmValue.toLocaleString()} RPM`;
    });
  }
  if (tempSlider) {
    tempSlider.addEventListener("input", (e) => {
      tempValue = parseInt(e.target.value, 10);
      globalTempForSem = tempValue;
      const lbl = document.getElementById("temp-val-label");
      const hud = document.getElementById("hud-temp");
      if (lbl) lbl.textContent = tempValue;
      if (hud) hud.textContent = `${tempValue} °C`;

      const heatRatio = (tempValue - 160) / 90;
      const col = new THREE.Color().setHSL(0.1 - heatRatio * 0.06, 0.95, 0.52);
      heaterBoxMat.color.copy(col);
      heaterLight.color.copy(col);
      heaterLight.intensity = 3.0 + heatRatio * 2.5;
    });
  }

  const btnAutoTour = document.getElementById("btn-auto-tour");
  const btnMolView = document.getElementById("btn-molecular-view");

  if (btnAutoTour) {
    btnAutoTour.addEventListener("click", () => {
      autoTour = !autoTour;
      btnAutoTour.classList.toggle("active", autoTour);
      if (autoTour) {
        targetCamPos.set(0, 3.4, isMobileScreen() ? 18.0 : 14.2);
        targetLookAt.set(-0.5, 0.3, 0);
      } else {
        selectStage(activeStageIdx);
      }
    });
  }

  if (btnMolView) {
    btnMolView.addEventListener("click", () => {
      molecularCloseUp = !molecularCloseUp;
      btnMolView.classList.toggle("active", molecularCloseUp);
      selectStage(activeStageIdx);
    });
  }

  // 滑鼠與觸控視角互動
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = (e.clientX - prevX) * 0.022;
    const dy = (e.clientY - prevY) * 0.022;
    targetCamPos.x -= dx;
    targetCamPos.y = Math.max(-1.2, Math.min(8.2, targetCamPos.y + dy));
    prevX = e.clientX;
    prevY = e.clientY;
  });

  canvas.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    },
    { passive: true }
  );
  window.addEventListener(
    "touchend",
    () => {
      isDragging = false;
    },
    { passive: true }
  );
  canvas.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = (e.touches[0].clientX - prevX) * 0.028;
      const dy = (e.touches[0].clientY - prevY) * 0.022;
      targetCamPos.x -= dx;
      targetCamPos.y = Math.max(-1.2, Math.min(8.2, targetCamPos.y + dy));
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    },
    { passive: true }
  );

  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      targetCamPos.z = Math.max(3.6, Math.min(19.5, targetCamPos.z + e.deltaY * 0.005));
    },
    { passive: false }
  );

  window.addEventListener("resize", () => {
    const nw = canvas.clientWidth || 760;
    const nh = canvas.clientHeight || 540;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh, false);
    if (!autoTour) applyStageCamera(activeStageIdx);
  });

  let clock = 0;
  function animate3D() {
    requestAnimationFrame(animate3D);
    const speedFactor = rpmValue / 18000;
    clock += 0.048 * speedFactor;

    // 1. 轉動導絲羅拉、分絲副輪、9 片摩擦假撚盤、上油輪、DTY 筒子紗與往復導絲器
    rollers.forEach((rg) => {
      rg.rotation.z -= 0.088 * speedFactor;
    });
    frictionDiscs.forEach((d, idx) => {
      d.rotation.y += (idx % 2 === 0 ? 0.34 : -0.34) * speedFactor;
    });
    oilingRoller.rotation.z -= 0.075 * speedFactor;
    bobbinGroup.rotation.x += 0.08 * speedFactor;
    bailRoller.rotation.x -= 0.15 * speedFactor;

    traverseGuide.position.x = Math.sin(clock * 2.5) * 1.06;

    // 2. 更新 72 孔噴絲光子脈衝點沿各單絲軌跡高速下落
    const pArr = photonGeo.attributes.position.array;
    for (let i = 0; i < photonCount; i++) {
      photonProgress[i] = (photonProgress[i] + 0.014 * speedFactor) % 1.0;
      const f = photonProgress[i];
      const { ox, oz } = orificeCoords[i % orificeCoords.length];

      if (f <= 0.72) {
        const u = f / 0.72;
        const ease = u * u * (3 - 2 * u);
        pArr[i * 3] = -9.5 + ox * (1 - ease * 0.88) + ease * 1.9;
        pArr[i * 3 + 1] = 2.61 - u * 2.06;
        pArr[i * 3 + 2] = oz * (1 - ease * 0.88);
      } else {
        const u = (f - 0.72) / 0.28;
        pArr[i * 3] = -7.6 + ox * 0.12 * (1 - u) + u * 1.6;
        pArr[i * 3 + 1] = 0.55 - u * 1.2;
        pArr[i * 3 + 2] = oz * 0.12 * (1 - u);
      }
    }
    photonGeo.attributes.position.needsUpdate = true;

    // 環吹冷卻氣流光環微脈動
    quenchAirRings.forEach((ring, idx) => {
      const s = 1 + Math.sin(clock * 3 + idx) * 0.03;
      ring.scale.set(s, s, 1);
    });

    // 3. 更新三股高密度螺旋加撚、屋麗紗蓬鬆捲曲與噴節紗竹節效果
    const arrA = strandA_Geo.attributes.position.array;
    const arrB = strandB_Geo.attributes.position.array;
    const arrC = strandC_Geo.attributes.position.array;

    for (let i = 0; i < helixPointCount; i++) {
      const u = i / (helixPointCount - 1);
      const x = -6.0 + u * 13.35;
      const baseY = samplePathY(x);

      let twistFreq = 5.0;
      let radius = 0.06;
      if (x >= -4.4 && x <= 2.65) {
        twistFreq = 16.5 * speedFactor;
        radius = 0.145;
      } else if (x > 2.65 && x <= 4.45) {
        twistFreq = 9.5;
        radius = 0.21;
      } else if (x > 4.45) {
        twistFreq = 11.0;
        radius = 0.11 + 0.12 * Math.abs(Math.sin(u * 40 - clock * 2.4));
      }

      const phase = u * twistFreq * Math.PI * 2 - clock * 3.5;
      arrA[i * 3] = x;
      arrA[i * 3 + 1] = baseY + Math.sin(phase) * radius;
      arrA[i * 3 + 2] = Math.cos(phase) * radius;

      arrB[i * 3] = x;
      arrB[i * 3 + 1] = baseY + Math.sin(phase + (Math.PI * 2) / 3) * radius;
      arrB[i * 3 + 2] = Math.cos(phase + (Math.PI * 2) / 3) * radius;

      arrC[i * 3] = x;
      arrC[i * 3 + 1] = baseY + Math.sin(phase + (Math.PI * 4) / 3) * radius;
      arrC[i * 3 + 2] = Math.cos(phase + (Math.PI * 4) / 3) * radius;
    }
    strandA_Geo.attributes.position.needsUpdate = true;
    strandB_Geo.attributes.position.needsUpdate = true;
    strandC_Geo.attributes.position.needsUpdate = true;

    // 4. 更新環境分子光點
    const mArr = molGeo.attributes.position.array;
    for (let i = 0; i < molCount; i++) {
      mArr[i * 3] += 0.055 * speedFactor;
      if (mArr[i * 3] > 10) mArr[i * 3] = -10;
    }
    molGeo.attributes.position.needsUpdate = true;

    // 4B. 更新 16 根微米單絲獨立開纖與螺旋氣圈 + 往復導絲動態纏繞線
    for (let m = 0; m < microFilCount; m++) {
      const mArr = microFilGeos[m].attributes.position.array;
      const angleOffset = (m / microFilCount) * Math.PI * 2;
      for (let i = 0; i < microFilPointCount; i++) {
        const u = i / (microFilPointCount - 1);
        const x = -6.0 + u * 13.35;
        const baseY = samplePathY(x);
        // 在熱箱與假撚區高速旋轉收斂，在噴節區產生氣流開纖渦旋
        const balloon = x > 4.2 ? 0.08 + 0.09 * Math.sin(u * 55 - clock * 3.2 + m) : 0.075;
        const ph = u * 18.0 * speedFactor - clock * 3.8 + angleOffset;
        mArr[i * 3] = x;
        mArr[i * 3 + 1] = baseY + Math.sin(ph) * balloon;
        mArr[i * 3 + 2] = Math.cos(ph) * balloon;
      }
      microFilGeos[m].attributes.position.needsUpdate = true;
    }

    const wyArr = windingYarnGeo.attributes.position.array;
    const gx = 7.35 + traverseGuide.position.x;
    wyArr[0] = 5.65; wyArr[1] = -0.05; wyArr[2] = 0;
    wyArr[3] = gx;   wyArr[4] = 0.57;  wyArr[5] = 1.38;
    wyArr[6] = gx;   wyArr[7] = 0.85;  wyArr[8] = 0.82;
    windingYarnGeo.attributes.position.needsUpdate = true;

    // 5. 預設全線自動巡航鏡頭緩動 + 自動巡禮 01~05 工段同步解說
    if (autoTour) {
      const mScale = isMobileScreen() ? 1.25 : 1.0;
      const tourWave = Math.sin(clock * 0.11);
      targetCamPos.x = tourWave * 6.8;
      targetCamPos.y = 2.6 + Math.cos(clock * 0.09) * 0.85;
      targetCamPos.z = (11.6 + Math.sin(clock * 0.08) * 1.9) * mScale;
      targetLookAt.set(tourWave * 4.5, 0.35, 0);

      // 根據鏡頭巡航位置自動高亮對應 01~05 工段
      const normPos = (tourWave + 1) * 0.5; // 0..1
      const autoIdx = Math.min(4, Math.max(0, Math.floor(normPos * 5)));
      if (autoIdx !== activeStageIdx) {
        selectStage(autoIdx, true);
      }
    }

    currentCamPos.lerp(targetCamPos, 0.058);
    currentLookAt.lerp(targetLookAt, 0.068);
    camera.position.copy(currentCamPos);
    camera.lookAt(currentLookAt);

    renderer.render(scene, camera);
  }

  animate3D();
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroFiberCanvas();
  initTensionOscilloscope();
  initSemMicroPip();
  initDTY3DLab();
});
