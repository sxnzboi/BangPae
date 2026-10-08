/* ═══════════════════════════════════════════════════
   WATSUP SHARED DATA & UTILITIES
═══════════════════════════════════════════════════ */

const ACTIVITIES = [
  { id:'gaming',  label:'Gaming',      icon:'fa-gamepad',            color:'#A855F7', bg:'rgba(168,85,247,.2)',  count:142, badge:'hot'  },
  { id:'sport',   label:'กีฬา',        icon:'fa-futbol',             color:'#22C55E', bg:'rgba(34,197,94,.2)',   count:98,  badge:'hot'  },
  { id:'food',    label:'Food & Drink', icon:'fa-utensils',           color:'#F97316', bg:'rgba(249,115,22,.2)', count:76,  badge:''     },
  { id:'music',   label:'Music',        icon:'fa-music',              color:'#EC4899', bg:'rgba(236,72,153,.2)', count:55,  badge:'new'  },
  { id:'hangout', label:'Hangout',      icon:'fa-martini-glass',      color:'#6C63FF', bg:'rgba(108,99,255,.2)', count:120, badge:'hot'  },
  { id:'study',   label:'Study',        icon:'fa-book-open',          color:'#06B6D4', bg:'rgba(6,182,212,.2)',  count:33,  badge:''     },
  { id:'travel',  label:'Travel',       icon:'fa-plane',              color:'#FBBF24', bg:'rgba(251,191,36,.2)', count:44,  badge:'new'  },
  { id:'fitness', label:'Fitness',      icon:'fa-dumbbell',           color:'#F43F5E', bg:'rgba(244,63,94,.2)',  count:61,  badge:''     },
  { id:'badmin',  label:'Badminton',    icon:'fa-table-tennis-paddle-ball', color:'#14B8A6', bg:'rgba(20,184,166,.2)', count:28, badge:'' },
  { id:'photo',   label:'Photography',  icon:'fa-camera',             color:'#8B5CF6', bg:'rgba(139,92,246,.2)', count:19,  badge:'new'  },
];

const POSTS = [
  {
    id: 1,
    user: 'NimAura',
    avatar: 'fa-gamepad',
    time: '2m ago',
    verified: true,
    online: true,
    activity: 'gaming',
    activityLabel: 'Gaming',
    text: 'ใครอยากเล่น Valorant ด้วยกันบ้าง? กำลังหาทีม 5 คน เล่น Ranked ได้เลย! มีไมค์ด้วยนะ',
    location: 'กรุงเทพฯ · 0.8km',
    likes: 42,
    comments: 2,
    reposts: 3,
    hasImg: false,
    commentList: [
      { id: 101, user: 'TonMaster', avatar: 'fa-table-tennis-paddle-ball', time: '1m ago', text: 'ว่างครับ เล่น Duelist ได้นะ ชวนได้เลย!' },
      { id: 102, user: 'MilkTea27', avatar: 'fa-mug-hot', time: 'เพิ่งเมื่อกี้', text: 'มีที่ว่างอีกไหมคะ ขอแจมด้วยคน 🎮' }
    ]
  },
  {
    id: 2,
    user: 'TonMaster',
    avatar: 'fa-table-tennis-paddle-ball',
    time: '15m ago',
    verified: false,
    online: true,
    activity: 'sport',
    activityLabel: 'กีฬา',
    text: 'หาคู่แบดมินตันช่วงบ่าย 3-5 โมงวันนี้! สนามแจ้งวัฒนะ มีคนว่างมั้ย? ลงชื่อด้านล่างเลย',
    location: 'แจ้งวัฒนะ · 1.2km',
    likes: 28,
    comments: 2,
    reposts: 5,
    hasImg: false,
    commentList: [
      { id: 201, user: 'GolfSport', avatar: 'fa-futbol', time: '10m ago', text: 'พร้อมครับ คอร์ตไหนครับเดี๋ยวตามไป' },
      { id: 202, user: 'TonFit', avatar: 'fa-dumbbell', time: '5m ago', text: 'เตรียมไม้รอแล้ว เจอกันครับ 🏸' }
    ]
  },
  {
    id: 3,
    user: 'MilkTea27',
    avatar: 'fa-mug-hot',
    time: '32m ago',
    verified: false,
    online: false,
    activity: 'food',
    activityLabel: 'Food',
    text: 'ใครอยากไปกินชาบูด้วยกันคืนนี้บ้าง? ร้านชอบๆ แถวรัชดา ราคาไม่แพง มีโปร all-you-can-eat!',
    location: 'รัชดา · 2.1km',
    likes: 67,
    comments: 1,
    reposts: 11,
    hasImg: true,
    imgIcon: 'fa-utensils',
    imgBg: '#2d1800',
    commentList: [
      { id: 301, user: 'SkyHangout', avatar: 'fa-moon', time: '20m ago', text: 'ร้านโปรดเลย ไปด้วยคนครับ!' }
    ]
  },
  {
    id: 4,
    user: 'BeamRhythm',
    avatar: 'fa-music',
    time: '1h ago',
    verified: true,
    online: true,
    activity: 'music',
    activityLabel: 'Music',
    text: 'ใครสนใจ Jam session วันเสาร์นี้? ผมเล่น Bass มีกีตาร์แล้ว ขาดกลองกับคีย์บอร์ด DM มาได้เลย!',
    location: 'ลาดพร้าว · 3.4km',
    likes: 19,
    comments: 1,
    reposts: 2,
    hasImg: false,
    commentList: [
      { id: 401, user: 'JayCode', avatar: 'fa-laptop-code', time: '40m ago', text: 'ผมเล่นคีย์บอร์ดได้ครับ ส่งลิสต์เพลงมาได้เลย' }
    ]
  },
  {
    id: 5,
    user: 'SkyHangout',
    avatar: 'fa-moon',
    time: '2h ago',
    verified: false,
    online: false,
    activity: 'hangout',
    activityLabel: 'Hangout',
    text: 'มีงาน Rooftop party คืนศุกร์นี้! บรรยากาศดี วิวสวย มีโซน DJ ใครสนใจทักมาได้เลย จะได้ไปด้วยกัน',
    location: 'สีลม · 4.7km',
    likes: 93,
    comments: 1,
    reposts: 19,
    hasImg: true,
    imgIcon: 'fa-city',
    imgBg: '#1a1440',
    commentList: [
      { id: 501, user: 'PimTravel', avatar: 'fa-plane', time: '1h ago', text: 'น่าไปมากกก ชวนเพื่อนไปด้วยได้ไหมคะ' }
    ]
  },
  {
    id: 6,
    user: 'CodeJay',
    avatar: 'fa-laptop-code',
    time: '3h ago',
    verified: false,
    online: true,
    activity: 'study',
    activityLabel: 'Study',
    text: 'ใครอยาก Study together ที่ร้านกาแฟแถว Ekkamai วันอาทิตย์บ้าง? ทำ project คนเดียวเหงาแล้ว',
    location: 'เอกมัย · 2.8km',
    likes: 14,
    comments: 1,
    reposts: 1,
    hasImg: false,
    commentList: [
      { id: 601, user: 'NimAura', avatar: 'fa-gamepad', time: '2h ago', text: 'วันอาทิตย์บ่ายว่างพอดีเลย ไปด้วยครับ!' }
    ]
  }
];

const NEARBY_FRIENDS = [
  { name:'NimAura',   icon:'fa-gamepad',    color:'#A855F7', dist:'0.4km', activity:'Gaming',    status:'online',  match:95 },
  { name:'TonFit',    icon:'fa-dumbbell',   color:'#22C55E', dist:'0.8km', activity:'Badminton', status:'online',  match:88 },
  { name:'MilkTea',   icon:'fa-mug-hot',    color:'#F97316', dist:'1.2km', activity:'Food',      status:'online',  match:72 },
  { name:'BeamBass',  icon:'fa-music',      color:'#EC4899', dist:'1.9km', activity:'Music',     status:'away',    match:65 },
  { name:'SkyPanda',  icon:'fa-martini-glass', color:'#6C63FF', dist:'2.4km', activity:'Hangout', status:'online', match:80 },
  { name:'JayCode',   icon:'fa-laptop-code',color:'#06B6D4', dist:'3.1km', activity:'Study',     status:'offline', match:58 },
  { name:'PimTravel', icon:'fa-plane',       color:'#FBBF24', dist:'3.7km', activity:'Travel',   status:'away',    match:70 },
  { name:'GolfSport', icon:'fa-futbol',      color:'#22C55E', dist:'4.5km', activity:'Sport',    status:'online',  match:62 },
];

const TRENDING_EVENTS = [
  { name:'Game Night',    icon:'fa-gamepad',   iconColor:'#A855F7', bg:'#1e1650', cat:'Gaming', when:'คืนนี้ 20:00',   count:18 },
  { name:'Badminton Open',icon:'fa-table-tennis-paddle-ball', iconColor:'#22C55E', bg:'#1a3020', cat:'Sport', when:'พรุ่งนี้ 07:00', count:12 },
  { name:'Food Crawl',    icon:'fa-utensils',  iconColor:'#F97316', bg:'#2d1800', cat:'Food',   when:'เสาร์ 18:00',    count:25 },
  { name:'Jam Session',   icon:'fa-music',     iconColor:'#EC4899', bg:'#2a0a20', cat:'Music',  when:'อาทิตย์ 14:00',  count:9  },
];

const STORY_USERS = [
  { name:'NimAura', icon:'fa-gamepad',   color:'#A855F7', online:true  },
  { name:'TonFit',  icon:'fa-dumbbell',  color:'#22C55E', online:true  },
  { name:'MilkTea', icon:'fa-mug-hot',   color:'#F97316', online:false },
  { name:'Beam',    icon:'fa-music',     color:'#EC4899', online:true  },
  { name:'Sky',     icon:'fa-moon',      color:'#8B85FF', online:false },
  { name:'Jay',     icon:'fa-laptop-code',color:'#06B6D4',online:true  },
];

const CHAT_LIST_DATA = [
  {
    id: 1, name: 'NimAura', icon: 'fa-gamepad', color: '#A855F7', status: 'online',
    lastMsg: 'ไปด้วยกันได้เลย!', time: 'เมื่อกี้', unread: 3,
    messages: [
      { from: 'them', text: 'สวัสดีค้าบ! มีแผนอะไรคืนนี้มั้ย?', time: '18:30' },
      { from: 'me',   text: 'ยังไม่มีเลย คิดอยู่ว่าจะเล่นเกมน่ะ', time: '18:31' },
      { from: 'them', text: 'เล่น Valorant ด้วยกันมั้ย! กำลังหาคนอยู่พอดีเลย', time: '18:32' },
      { from: 'me',   text: 'โอเคเลย! กี่โมง?', time: '18:33' },
      { from: 'them', text: 'สัก 2 ทุ่มได้มั้ย?', time: '18:34' },
      { from: 'me',   text: 'ได้เลยๆ', time: '18:35' },
      { from: 'them', text: 'เย้! ไปด้วยกันได้เลย!', time: '18:36' },
    ]
  },
  {
    id: 2, name: 'TonFit', icon: 'fa-dumbbell', color: '#22C55E', status: 'online',
    lastMsg: 'พรุ่งนี้เช้า 7 โมงเจอกันที่สนาม', time: '18:15', unread: 1,
    messages: [
      { from: 'them', text: 'ว่าง เล่นแบดด้วยกันมั้ยพรุ่งนี้?', time: '17:00' },
      { from: 'me',   text: 'ว่างนะ ที่ไหนครับ?', time: '17:05' },
      { from: 'them', text: 'สนามแจ้งวัฒนะ คอร์ตที่ 3', time: '17:06' },
      { from: 'me',   text: 'โอเค เจอกันกี่โมง?', time: '17:07' },
      { from: 'them', text: 'พรุ่งนี้เช้า 7 โมงเจอกันที่สนาม', time: '17:08' },
    ]
  },
  {
    id: 3, name: 'MilkTea', icon: 'fa-mug-hot', color: '#F97316', status: 'away',
    lastMsg: 'ร้านนี้อร่อยมากเลยนะ!', time: '17:00', unread: 0,
    messages: [
      { from: 'me',   text: 'หิวข้าวแล้ว ไปกินด้วยกันมั้ย?', time: '16:00' },
      { from: 'them', text: 'ไปเลย! อยากกินอะไร?', time: '16:01' },
      { from: 'me',   text: 'ชาบูดีมั้ย? แถวรัชดา', time: '16:02' },
      { from: 'them', text: 'โอเคค! ไปเลย', time: '16:03' },
      { from: 'them', text: 'ร้านนี้อร่อยมากเลยนะ!', time: '16:45' },
    ]
  },
  {
    id: 4, name: 'BeamBass', icon: 'fa-music', color: '#EC4899', status: 'offline',
    lastMsg: 'ขอบคุณนะ เดี๋ยวติดต่อกลับ', time: 'เมื่อวาน', unread: 0,
    messages: [
      { from: 'them', text: 'สวัสดีครับ สนใจ Jam Session มั้ยครับ?', time: 'เมื่อวาน 14:00' },
      { from: 'me',   text: 'สนใจนะ เล่นอะไรบ้าง?', time: 'เมื่อวาน 14:05' },
      { from: 'them', text: 'มีกีตาร์, Bass, กลอง ขาดคีย์บอร์ดน่ะครับ', time: 'เมื่อวาน 14:06' },
      { from: 'me',   text: 'โอเค น่าสนใจมากเลย แต่ตอนนี้ยังไม่แน่ใจ', time: 'เมื่อวาน 14:10' },
      { from: 'them', text: 'ขอบคุณนะ เดี๋ยวติดต่อกลับ', time: 'เมื่อวาน 14:11' },
    ]
  },
  {
    id: 5, name: 'SkyPanda', icon: 'fa-martini-glass', color: '#6C63FF', status: 'online',
    lastMsg: 'เดี๋ยวส่งตำแหน่งให้นะ', time: '16:30', unread: 2,
    messages: [
      { from: 'them', text: 'มีงาน rooftop party คืนนี้นะ มาด้วยกันมั้ย?', time: '16:00' },
      { from: 'me',   text: 'อยู่ที่ไหนครับ?', time: '16:20' },
      { from: 'them', text: 'เดี๋ยวส่งตำแหน่งให้นะ', time: '16:30' },
    ]
  },
  {
    id: 6, name: 'JayCode', icon: 'fa-laptop-code', color: '#06B6D4', status: 'online',
    lastMsg: 'ใช้ React กับ TailwindCSS น่ะ ง่ายดี', time: '15:00', unread: 0,
    messages: [
      { from: 'me',   text: 'ทำ project อะไรอยู่ครับ?', time: '14:00' },
      { from: 'them', text: 'ทำ web app ส่ง ม. น่ะ', time: '14:05' },
      { from: 'me',   text: 'ใช้ tech stack อะไร?', time: '14:06' },
      { from: 'them', text: 'ใช้ React กับ TailwindCSS น่ะ ง่ายดี', time: '15:00' },
    ]
  }
];

// Helper Toast
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--lime)"></i> <span>${msg}</span>`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}
