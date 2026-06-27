/**
 * 🛠️ KINGZCARBON 核心外觀數據庫 (E 世代專屬分流數據庫檔案)
 */ 

// 1. 底盤代號與品牌自動綁定集群 (E 世代專屬)
const chassisMapping = {
  'BMW': [
    'E90 / E92 / E93 M3'
  ],
  'Toyota': [],
  'Nissan': []
};

// 2. 核心商品全庫存陣列 (1.8X倍率精算售價 + 免運優惠標籤 • 內嵌 Carbon)
const exteriorDatabase = [
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
