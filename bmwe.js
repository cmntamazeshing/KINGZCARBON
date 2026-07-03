/**
 * 🛠️ KINGZCARBON 核心外觀數據庫 (E 世代專屬分流數據庫檔案)
 * 💡 技術提示：變數必須直接掛載至 window 物件，確保前台跨域引擎完美讀取、絕不白屏！
 */ 

// ==========================================================================
// KINGZCARBON 全局統一車型選單配置矩陣 (跨檔案通用完全體)
// 排序鐵律：E 世代 -> F 普通 -> F M-Power -> G 普通 -> G M-Power -> 其他品牌
// ==========================================================================
window.chassisMapping = {
  'BMW': [
    // === E 世代性能集群 ===
    'E90 / E92 / E93 M3',

    // === F 世代普通車系集群 ===
    'F30 / F35 3-Series', 
    'F32 / F33 / F36 4-Series',
    'F34 3-Series GT', 
    'F10 / F18 5-Series',
    'F15 X5', 
    'F16 X6',

    // === F 世代頂級 M-Power 集群 ===
    'F87 M2 / M2C', 
    'F80 M3', 
    'F82 / F83 M4', 
    'F90 M5', 
    'F06 / F12 / F13 M6', 
    'F97 X3M / F98 X4M',

    // === G 世代普通車系集群 ===
    'G42 2-Series',
    'G20 / G28 3-Series', 
    'G22 4-Series',
    'G26 4-Series Gran Coupe', 
    'G30 / G38 5-Series',
    'G05 X5',
    'G06 X6',
    'G07 X7',

    // === G 世代頂級 M-Power 集群 ===
    'G87 M2', 
    'G80 M3', 
    'G82 M4'
  ],
  'Toyota': ['A90 Supra'],
  'Nissan': ['R35 GTR']
};

// 2. 核心商品全庫存陣列 (1.8X倍率精算售價 + 免運優惠標籤 • 內嵌 Carbon)
window.exteriorDatabase = [
  // === BMW E90 / E92 / E93 M3 專屬集群 (V2 FORMULA / AUTO-CARBON) ===
  { id: 406, brand: 'BMW', compat: ['E90', 'E92'], category: 'Rear Spoilers', title: 'BMW E90 / E92 M3 Carbon Rear Roof Spoiler', price: '$259 USD', saved: '$105 USD', image: 'https://i.imgur.com/gS1NH3x.jpeg' },
  { id: 407, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Fenders', title: 'BMW E90 / E92 / E93 M3 Carbon Front Fenders (OEM Style)', price: '$1539 USD', saved: '$360 USD', image: 'https://i.imgur.com/9t2uX0J.png' },
  { id: 408, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Mirror Covers', title: 'BMW E90 / E92 / E93 M3 Carbon Side Mirror Covers', price: '$279 USD', saved: '$105 USD', image: 'https://i.imgur.com/TEbSErJ.png' },
  { id: 409, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Hoods', title: 'BMW E90 / E92 / E93 M3 Carbon Fiber Custom Engine Hood', price: '$1899 USD', saved: '$360 USD', image: 'https://i.imgur.com/BE1Pxv2.png' },
  { id: 410, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Fenders', title: 'BMW E90 / E92 / E93 M3 Carbon Front Fenders (GT4 Style)', price: '$2189 USD', saved: '$360 USD', image: 'https://i.imgur.com/wCyui6k.png' },
  { id: 411, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Other', title: 'BMW E90 / E92 / E93 M3 Carbon Front Kidney Grilles', price: '$299 USD', saved: '$105 USD', image: 'https://i.imgur.com/O6EKE7d.png' },
  { id: 412, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Rear Diffusers', title: 'BMW E90 / E92 / E93 M3 Carbon Rear Diffuser (Varis Style)', price: '$1199 USD', saved: '$205 USD', image: 'https://i.imgur.com/X6eZfDi.png' },
  { id: 413, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Rear Spoilers', title: 'BMW E90 / E92 / E93 M3 Carbon GT Wing Spoiler', price: '$609 USD', saved: '$105 USD', image: 'https://i.imgur.com/gOTrbfZ.jpeg' },
  { id: 414, brand: 'BMW', compat: ['E92'], category: 'Rear Spoilers', title: 'BMW E92 M3 Carbon Rear Trunk Spoiler (PSM Style Spec)', price: '$429 USD', saved: '$105 USD', image: 'https://i.imgur.com/IPlHjKG.jpeg' },
  { id: 415, brand: 'BMW', compat: ['E92'], category: 'Rear Spoilers', title: 'BMW E92 M3 Carbon Rear Trunk Spoiler (CS Style Spec)', price: '$399 USD', saved: '$105 USD', image: 'https://i.imgur.com/m3AEJCY.png' },
  { id: 416, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Other', title: 'BMW E90 / E92 / E93 M3 Carbon Rear Bumper Side Splitters', price: '$299 USD', saved: '$105 USD', image: 'https://i.imgur.com/7VkGUNY.jpeg' },
  { id: 417, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Other', title: 'BMW E90 / E92 / E93 M3 Carbon Front Bumper Canards', price: '$299 USD', saved: '$105 USD', image: 'https://i.imgur.com/ldN2j2B.jpeg' },
  { id: 418, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Other', title: 'BMW E90 / E92 / E93 M3 Carbon Front Bumper Canards (GT4 Style)', price: '$299 USD', saved: '$105 USD', image: 'https://i.imgur.com/QUBm6yh.png' },
  { id: 419, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (CRT Style)', price: '$509 USD', saved: '$205 USD', image: 'https://i.imgur.com/nEfcw2F.png' },
  { id: 420, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Other', title: 'BMW E90 / E92 / E93 M3 Carbon Front Bumper Side Splitters', price: '$299 USD', saved: '$105 USD', image: 'https://i.imgur.com/UOpOoKG.jpeg' },
  { id: 421, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Rear Diffusers', title: 'BMW E90 / E92 / E93 M3 Carbon Rear Diffuser (H2 Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/xAnBeSb.jpeg' },
  { id: 422, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Rear Diffusers', title: 'BMW E90 / E92 / E93 M3 Carbon Rear Diffuser (HA Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/xF1hbaJ.jpeg' },
  { id: 423, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Rear Diffusers', title: 'BMW E90 / E92 / E93 M3 Carbon Rear Diffuser (V Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/kquaRtj.jpeg' },
  { id: 424, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Side Skirts', title: 'BMW E90 / E92 / E93 M3 Carbon Side Skirt Extensions (EXOT Style)', price: '$629 USD', saved: '$205 USD', image: 'https://i.imgur.com/4hxQD2R.jpeg' },
  { id: 425, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (GT4 Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/wNBhwAA.jpeg' },
  { id: 426, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (3D Style)', price: '$789 USD', saved: '$205 USD', image: 'https://i.imgur.com/ja7xFUk.jpeg' },
  { id: 427, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (V Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/PpTUVjx.jpeg' },
  { id: 428, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (AK Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/FFJgi74.jpeg' },
  { id: 429, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (HA Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/i4b1aHo.jpeg' },
  { id: 430, brand: 'BMW', compat: ['E90', 'E92', 'E93'], category: 'Front Lips', title: 'BMW E90 / E92 / E93 M3 Carbon Front Lip (GTS Style)', price: '$599 USD', saved: '$205 USD', image: 'https://i.imgur.com/7iikwKy.jpeg' }
];
