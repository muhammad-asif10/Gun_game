/* ============================================
   SHADOW STRIKE — 3D Game Engine
   Full Three.js city defender shooter
   ============================================ */

// ===== SVG ICON LIBRARY =====
const ICONS = {
    pistol: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="4" y="12" width="22" height="7" rx="1.5" fill="#666"/><rect x="22" y="10" width="10" height="11" rx="2" fill="#555"/><rect x="16" y="19" width="6" height="10" rx="1" fill="#444"/><rect x="4" y="13.5" width="6" height="4" rx="1" fill="#777"/><circle cx="28" cy="11" r="1.5" fill="#333"/></svg>`,
    smg: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="2" y="13" width="28" height="6" rx="1.5" fill="#555"/><rect x="26" y="11" width="8" height="10" rx="2" fill="#444"/><rect x="14" y="19" width="5" height="9" rx="1" fill="#666"/><rect x="8" y="19" width="4" height="7" rx="1" fill="#666"/><rect x="2" y="14" width="4" height="4" rx=".5" fill="#777"/></svg>`,
    shotgun: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="1" y="14" width="30" height="5" rx="1" fill="#6b4226"/><rect x="1" y="13" width="30" height="2" rx="1" fill="#555"/><rect x="27" y="12" width="8" height="9" rx="2" fill="#4a2f1a"/><rect x="18" y="19" width="4" height="7" rx="1" fill="#444"/><circle cx="3" cy="15.5" r="1.5" fill="#333"/></svg>`,
    rifle: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="1" y="13" width="30" height="6" rx="1" fill="#555"/><rect x="27" y="11" width="8" height="10" rx="2" fill="#444"/><rect x="16" y="19" width="5" height="9" rx="1" fill="#666"/><rect x="1" y="14" width="8" height="3" rx=".5" fill="#777"/><rect x="6" y="10" width="3" height="3" rx=".5" fill="#888"/><rect x="1" y="12" width="4" height="2" rx=".5" fill="#666"/></svg>`,
    sniper: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="0" y="14" width="32" height="4" rx="1" fill="#555"/><rect x="28" y="12" width="7" height="8" rx="1.5" fill="#444"/><rect x="8" y="10" width="6" height="4" rx="3" fill="#336"/><rect x="10" y="11" width="2" height="2" rx="1" fill="#6af"/><rect x="20" y="18" width="4" height="8" rx="1" fill="#666"/><line x1="0" y1="16" x2="8" y2="16" stroke="#666" stroke-width=".8"/></svg>`,
    lmg: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="1" y="12" width="28" height="7" rx="1.5" fill="#555"/><rect x="25" y="10" width="10" height="11" rx="2" fill="#444"/><rect x="14" y="19" width="6" height="10" rx="1" fill="#666"/><rect x="8" y="19" width="4" height="6" rx="1" fill="#777"/><rect x="1" y="13" width="6" height="5" rx=".5" fill="#666"/><rect x="12" y="8" width="8" height="4" rx="1" fill="#555"/></svg>`,
    deagle: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="3" y="11" width="24" height="8" rx="2" fill="#777"/><rect x="23" y="9" width="10" height="12" rx="2.5" fill="#666"/><rect x="16" y="19" width="7" height="10" rx="1.5" fill="#555"/><rect x="3" y="13" width="6" height="4" rx="1" fill="#888"/><circle cx="29" cy="10.5" r="1.5" fill="#444"/></svg>`,
    rpg: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="0" y="14" width="28" height="5" rx="1" fill="#4a6"/><circle cx="3" cy="16.5" r="5" fill="#5a5" stroke="#484" stroke-width="1"/><polygon points="0,12 -3,16.5 0,21" fill="#a55"/><rect x="24" y="12" width="10" height="9" rx="1.5" fill="#484"/><rect x="16" y="19" width="4" height="7" rx="1" fill="#555"/></svg>`,
    frag: `<svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="20" r="9" fill="#484"/><circle cx="18" cy="20" r="7" fill="#555"/><rect x="16" y="7" width="4" height="6" rx="1.5" fill="#666"/><line x1="18" y1="5" x2="21" y2="2" stroke="#f80" stroke-width="2" stroke-linecap="round"/><circle cx="21.5" cy="1.5" r="2" fill="#fa0"/><line x1="14" y1="16" x2="22" y2="16" stroke="#444" stroke-width=".7"/><line x1="14" y1="20" x2="22" y2="20" stroke="#444" stroke-width=".7"/><line x1="14" y1="24" x2="22" y2="24" stroke="#444" stroke-width=".7"/></svg>`,
    fire: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="12" y="4" width="12" height="28" rx="4" fill="#4a2f1a"/><rect x="13" y="5" width="10" height="26" rx="3" fill="#6b4226"/><rect x="10" y="3" width="16" height="4" rx="2" fill="#555"/><path d="M16 6 Q18 1 20 6" fill="none" stroke="#f60" stroke-width="1.5"/><circle cx="18" cy="2" r="2" fill="#f80"/><circle cx="18" cy="2" r="1" fill="#ff0"/></svg>`,
    flash: `<svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="20" r="9" fill="#bbb"/><circle cx="18" cy="20" r="7" fill="#ddd"/><rect x="16" y="7" width="4" height="6" rx="1.5" fill="#999"/><circle cx="18" cy="20" r="3" fill="#fff"/><line x1="18" y1="12" x2="18" y2="14" stroke="#aaa" stroke-width="1"/><line x1="18" y1="26" x2="18" y2="28" stroke="#aaa" stroke-width="1"/><line x1="11" y1="20" x2="13" y2="20" stroke="#aaa" stroke-width="1"/><line x1="23" y1="20" x2="25" y2="20" stroke="#aaa" stroke-width="1"/></svg>`,
    sticky: `<svg viewBox="0 0 36 36" width="36" height="36"><rect x="8" y="10" width="20" height="16" rx="2" fill="#8b0000"/><rect x="10" y="12" width="16" height="12" rx="1" fill="#a22"/><rect x="14" y="15" width="8" height="6" rx="1" fill="#222"/><circle cx="18" cy="18" r="2" fill="#f00"/><rect x="16" y="6" width="4" height="5" rx="1" fill="#555"/><rect x="12" y="8" width="12" height="2" rx="1" fill="#666"/></svg>`,
    coin: `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="#f4c430" stroke="#c9a020" stroke-width="1.5"/><circle cx="12" cy="12" r="7" fill="none" stroke="#c9a020" stroke-width=".8"/><text x="12" y="16" text-anchor="middle" fill="#8a6f10" font-weight="bold" font-size="10" font-family="Arial">$</text></svg>`,
    skull: `<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="10" r="8" fill="#ccc"/><circle cx="9" cy="9" r="2.5" fill="#333"/><circle cx="15" cy="9" r="2.5" fill="#333"/><path d="M9 15 L10 14 L12 15 L14 14 L15 15" fill="none" stroke="#333" stroke-width="1.2"/><rect x="9" y="16" width="6" height="4" rx="1" fill="#ccc"/></svg>`,
    star: `<svg viewBox="0 0 24 24" width="20" height="20"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#ffd700" stroke="#c9a020" stroke-width=".5"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 21 C6 15 2 11 2 7.5 A5.5 5.5 0 0 1 12 5 A5.5 5.5 0 0 1 22 7.5 C22 11 18 15 12 21Z" fill="#e44"/></svg>`,
    crosshair: `<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="8" fill="none" stroke="#0f0" stroke-width="1.5"/><line x1="12" y1="2" x2="12" y2="8" stroke="#0f0" stroke-width="1.5"/><line x1="12" y1="16" x2="12" y2="22" stroke="#0f0" stroke-width="1.5"/><line x1="2" y1="12" x2="8" y2="12" stroke="#0f0" stroke-width="1.5"/><line x1="16" y1="12" x2="22" y2="12" stroke="#0f0" stroke-width="1.5"/><circle cx="12" cy="12" r="2" fill="#0f0"/></svg>`,
    timer: `<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="13" r="9" fill="none" stroke="#aaa" stroke-width="1.5"/><rect x="10" y="1" width="4" height="3" rx="1" fill="#aaa"/><line x1="12" y1="13" x2="12" y2="7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><line x1="12" y1="13" x2="16" y2="15" stroke="#ccc" stroke-width="1" stroke-linecap="round"/></svg>`,
    flame: `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2 C14 6 18 8 18 14 A6 6 0 0 1 6 14 C6 8 10 6 12 2Z" fill="#f80"/><path d="M12 8 C13 10 15 11 15 15 A3 3 0 0 1 9 15 C9 11 11 10 12 8Z" fill="#ff0"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" width="18" height="18"><polygon points="13,2 6,14 11,14 9,22 18,10 13,10" fill="#ff0" stroke="#ca0" stroke-width=".5"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 2 L22 6 L22 12 C22 18 12 22 12 22 C12 22 2 18 2 12 L2 6Z" fill="#38a" stroke="#2a7" stroke-width="1"/><path d="M12 6 L17 8 L17 12 C17 16 12 18 12 18 C12 18 7 16 7 12 L7 8Z" fill="#4ac"/></svg>`,
    heroBlue: `<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="8" r="5" fill="#2a6"/><rect x="6" y="13" width="12" height="10" rx="2" fill="#1a3a5c"/><circle cx="12" cy="8" r="3" fill="#c68642"/></svg>`,
    heroRed: `<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="8" r="5" fill="#a22"/><rect x="6" y="13" width="12" height="10" rx="2" fill="#5c1a1a"/><circle cx="12" cy="8" r="3" fill="#d2a679"/></svg>`
};

// Helper: get icon HTML by key, with optional size
function icon(key, size) {
    const svg = ICONS[key] || '';
    if (!size) return svg;
    return svg.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
}

const ENEMY_NAMES = [
    'Aqsa', 'Danish', 'Tabish', 'Naveed', 'Naeem',
    'Deen Muhammad', 'Ayoub Khan', 'Javiad Khan',
    'Jumma Khan', 'Shahid', 'Azher', 'Zahid', 'Ishaq'
];

const HEROES = [
    {
        id: 'hussnain',
        name: 'Hussnain Ali',
        title: 'THE SHADOW OPERATIVE',
        color: '#00aaff',
        skinColor: 0xc68642,
        shirtColor: 0x1a3a5c,
        pantsColor: 0x1a1a2e,
        avatar: 'heroBlue',
        stats: { speed: 85, health: 80, accuracy: 90, stealth: 95 },
        desc: 'Elite marksman with unmatched precision.'
    },
    {
        id: 'asif',
        name: 'Asif',
        title: 'THE IRON FORTRESS',
        color: '#ff4444',
        skinColor: 0xd2a679,
        shirtColor: 0x5c1a1a,
        pantsColor: 0x2e1a1a,
        avatar: 'heroRed',
        stats: { speed: 70, health: 100, accuracy: 75, stealth: 60 },
        desc: 'Heavy weapons expert built like a tank.'
    }
];

const WEAPONS = [
    {
        id: 'pistol', name: 'Pistol', icon: 'pistol', type: 'pistol',
        damage: 15, fireRate: 300, magSize: 15, reloadTime: 1200,
        range: 350, spread: 0.05, cost: 0, upgradeCost: 100,
        maxLevel: 5, bulletSpeed: 1.2
    },
    {
        id: 'smg', name: 'SMG Vector', icon: 'smg', type: 'smg',
        damage: 10, fireRate: 80, magSize: 30, reloadTime: 1500,
        range: 300, spread: 0.12, cost: 500, upgradeCost: 200,
        maxLevel: 5, bulletSpeed: 1.4
    },
    {
        id: 'shotgun', name: 'Shotgun M870', icon: 'shotgun', type: 'shotgun',
        damage: 8, fireRate: 700, magSize: 6, reloadTime: 2000,
        range: 200, spread: 0.3, pellets: 6, cost: 800, upgradeCost: 300,
        maxLevel: 5, bulletSpeed: 1.0
    },
    {
        id: 'rifle', name: 'Assault Rifle', icon: 'rifle', type: 'rifle',
        damage: 18, fireRate: 120, magSize: 30, reloadTime: 1800,
        range: 450, spread: 0.06, cost: 1200, upgradeCost: 400,
        maxLevel: 5, bulletSpeed: 1.6
    },
    {
        id: 'sniper', name: 'Sniper AWP', icon: 'sniper', type: 'sniper',
        damage: 80, fireRate: 1200, magSize: 5, reloadTime: 2500,
        range: 800, spread: 0.01, cost: 2000, upgradeCost: 500,
        maxLevel: 5, bulletSpeed: 2.5
    },
    {
        id: 'lmg', name: 'LMG Destroyer', icon: 'lmg', type: 'smg',
        damage: 14, fireRate: 90, magSize: 100, reloadTime: 3500,
        range: 400, spread: 0.1, cost: 3000, upgradeCost: 600,
        maxLevel: 5, bulletSpeed: 1.3
    },
    {
        id: 'deagle', name: 'Desert Eagle', icon: 'deagle', type: 'pistol',
        damage: 40, fireRate: 450, magSize: 7, reloadTime: 1500,
        range: 400, spread: 0.04, cost: 1500, upgradeCost: 350,
        maxLevel: 5, bulletSpeed: 1.5
    },
    {
        id: 'rpg', name: 'RPG-7', icon: 'rpg', type: 'shotgun',
        damage: 100, fireRate: 2000, magSize: 1, reloadTime: 3000,
        range: 500, spread: 0.02, cost: 5000, upgradeCost: 1000,
        maxLevel: 3, bulletSpeed: 0.8, explosive: true
    }
];

// Bomb shop items (consumable, not a weapon)
const BOMB_SHOP = [
    { id: 'frag',   name: 'Frag Grenade',    icon: 'frag', damage: 120, radius: 6,  cost: 150, desc: 'Standard frag — 6m blast radius' },
    { id: 'fire',   name: 'Molotov',         icon: 'fire', damage: 80,  radius: 8,  cost: 200, desc: 'Fire bomb — wider 8m burn area' },
    { id: 'flash',  name: 'Flashbang',       icon: 'flash', damage: 40,  radius: 10, cost: 100, desc: 'Stuns enemies in 10m for 3 seconds' },
    { id: 'sticky', name: 'C4 Sticky Bomb',  icon: 'sticky', damage: 200, radius: 5,  cost: 350, desc: 'Massive damage, tight 5m radius' }
];

// ===== ENVIRONMENT THEMES =====
const THEMES = {
    city: {
        name: 'City', icon: '🏙️',
        ground: 0x333333, road: 0x222222, roadLine: 0x555555,
        sidewalk: 0x444444,
        buildings: [0x2a3040, 0x303848, 0x283038, 0x3a3040, 0x2a2838, 0x384050, 0x303040],
        windowLit: 0xffdd44, windowDark: 0x1a2a3a,
        roofColor: 0x1a1a1a, lampPost: 0x555555, lampGlow: 0xffeeaa, lampLight: 0xffddaa,
        trunkColor: 0x5a3a1a, foliageColor: 0x2a5a2a, treeCount: 40,
        fogColor: 0x0a0a15, fogDensity: 0.012,
        ambientColor: 0x303050, ambientIntensity: 0.6,
        dirColor: 0xffeedd, dirIntensity: 0.5,
        moonColor: 0x4466aa, moonIntensity: 0.3,
        skyBottom: [0.04, 0.04, 0.08], skyTop: [0.02, 0.02, 0.12], starsEnabled: true
    },
    desert: {
        name: 'Desert', icon: '🏜️',
        ground: 0xc2a64e, road: 0x8a7a3a, roadLine: 0xa09050,
        sidewalk: 0xb09840,
        buildings: [0x9e8252, 0xb09060, 0xa08848, 0x8a7240, 0xc0a060, 0x907848, 0xb8a058],
        windowLit: 0xffe880, windowDark: 0x5a4a2a,
        roofColor: 0x6a5a30, lampPost: 0x8a7a50, lampGlow: 0xffeeaa, lampLight: 0xffddaa,
        trunkColor: 0x6a4a1a, foliageColor: 0x5a8a2a, treeCount: 15,
        fogColor: 0x8a7a50, fogDensity: 0.008,
        ambientColor: 0x907850, ambientIntensity: 0.8,
        dirColor: 0xffe4b0, dirIntensity: 0.9,
        moonColor: 0xffd080, moonIntensity: 0.2,
        skyBottom: [0.55, 0.42, 0.25], skyTop: [0.30, 0.50, 0.80], starsEnabled: false
    },
    snow: {
        name: 'Snow', icon: '❄️',
        ground: 0xd8dce8, road: 0x8090a0, roadLine: 0xb0b8c0,
        sidewalk: 0xc0c8d0,
        buildings: [0x506070, 0x5a6a7a, 0x485868, 0x607080, 0x4a5a6a, 0x6a7a8a, 0x586878],
        windowLit: 0xffcc55, windowDark: 0x2a3a4a,
        roofColor: 0xe0e8f0, lampPost: 0x7a8a9a, lampGlow: 0xffeedd, lampLight: 0xffeedd,
        trunkColor: 0x3a2a1a, foliageColor: 0x1a4a2a, treeCount: 25,
        fogColor: 0xb0b8c8, fogDensity: 0.015,
        ambientColor: 0x8090b0, ambientIntensity: 0.7,
        dirColor: 0xe8e8ff, dirIntensity: 0.6,
        moonColor: 0x8899cc, moonIntensity: 0.4,
        skyBottom: [0.60, 0.65, 0.75], skyTop: [0.35, 0.40, 0.55], starsEnabled: false
    },
    forest: {
        name: 'Forest', icon: '🌲',
        ground: 0x3a5a2a, road: 0x4a3a20, roadLine: 0x6a5a30,
        sidewalk: 0x4a4a2a,
        buildings: [0x3a3020, 0x4a4028, 0x2a2818, 0x5a4830, 0x3a3520, 0x4a3a28, 0x2a2a18],
        windowLit: 0xffaa44, windowDark: 0x1a1a0a,
        roofColor: 0x2a3a1a, lampPost: 0x4a3a2a, lampGlow: 0xffcc88, lampLight: 0xffcc88,
        trunkColor: 0x4a2a10, foliageColor: 0x1a6a1a, treeCount: 80,
        fogColor: 0x1a2a1a, fogDensity: 0.018,
        ambientColor: 0x2a4a2a, ambientIntensity: 0.5,
        dirColor: 0xccffaa, dirIntensity: 0.4,
        moonColor: 0x336633, moonIntensity: 0.3,
        skyBottom: [0.05, 0.12, 0.05], skyTop: [0.02, 0.06, 0.02], starsEnabled: true
    }
};

function generateLevels() {
    const levels = [];
    for (let i = 1; i <= 30; i++) {
        let diff, diffLabel, bombs;
        if (i <= 10) {
            diff = 'easy'; diffLabel = 'EASY';
            bombs = { frag: 3 + Math.floor(i / 3), fire: 1, flash: 2, sticky: 0 };
        } else if (i <= 20) {
            diff = 'medium'; diffLabel = 'MEDIUM';
            bombs = { frag: 2 + Math.floor(i / 5), fire: 1 + Math.floor(i / 7), flash: 1, sticky: 1 };
        } else {
            diff = 'hard'; diffLabel = 'HARD';
            bombs = { frag: 2, fire: 2, flash: 1, sticky: 1 + Math.floor((i - 20) / 5) };
        }
        const waveCount = Math.min(2 + Math.floor(i / 4), 6);
        const baseEnemies = 2 + Math.floor(i * 0.7);
        levels.push({
            num: i, difficulty: diff, diffLabel, waves: waveCount,
            enemiesPerWave: baseEnemies,
            enemyHpMult: 1 + (i - 1) * 0.06,
            enemyDmgMult: 1 + (i - 1) * 0.04,
            enemySpeedMult: 1 + (i - 1) * 0.015,
            coinReward: 50 + i * 20,
            bombs: bombs,
            name: `Mission ${i}`
        });
    }
    return levels;
}
const LEVELS = generateLevels();

// ===== GAME STATE (save/load) =====
class GameState {
    constructor() { this.loadSave(); }
    getDefault() {
        return {
            coins: 200, selectedHero: 'hussnain', equippedWeapon: 'pistol',
            ownedWeapons: { pistol: { level: 1 } }, levelsCompleted: {},
            maxLevelUnlocked: 1, selectedTheme: 'city',
            bombs: { frag: 3, fire: 0, flash: 1, sticky: 0 },
            equippedBomb: 'frag',
            checkin: { lastDate: null, streak: 0, history: [] },
            settings: { musicVol: 50, sfxVol: 70, showFps: false },
            totalKills: 0
        };
    }
    loadSave() {
        try {
            const saved = localStorage.getItem('shadowstrike_save');
            if (saved) {
                const data = JSON.parse(saved);
                const def = this.getDefault();
                this.data = { ...def, ...data };
                this.data.ownedWeapons = { ...def.ownedWeapons, ...(data.ownedWeapons || {}) };
                this.data.bombs = { ...def.bombs, ...(data.bombs || {}) };
                this.data.checkin = { ...def.checkin, ...(data.checkin || {}) };
                this.data.settings = { ...def.settings, ...(data.settings || {}) };
                this.data.levelsCompleted = data.levelsCompleted || {};
                if (!this.data.equippedBomb) this.data.equippedBomb = 'frag';
            } else { this.data = this.getDefault(); }
        } catch (e) { this.data = this.getDefault(); }
    }
    save() { try { localStorage.setItem('shadowstrike_save', JSON.stringify(this.data)); } catch(e){} }
    reset() { this.data = this.getDefault(); this.save(); }
    get coins() { return this.data.coins; }
    set coins(v) { this.data.coins = v; this.save(); }
    get hero() { return HEROES.find(h => h.id === this.data.selectedHero); }
    get theme() { return THEMES[this.data.selectedTheme] || THEMES.city; }
    get themeId() { return this.data.selectedTheme || 'city'; }
    selectTheme(id) { if (THEMES[id]) { this.data.selectedTheme = id; this.save(); } }
    get weapon() {
        const w = WEAPONS.find(w => w.id === this.data.equippedWeapon);
        const lvl = (this.data.ownedWeapons[w.id] || { level: 1 }).level;
        return { ...w, level: lvl };
    }
    getWeaponLevel(id) { return this.data.ownedWeapons[id] ? this.data.ownedWeapons[id].level : 0; }
    ownsWeapon(id) { return !!this.data.ownedWeapons[id]; }
    buyWeapon(id) {
        const w = WEAPONS.find(w => w.id === id);
        if (!w || this.ownsWeapon(id) || this.data.coins < w.cost) return false;
        this.data.coins -= w.cost;
        this.data.ownedWeapons[id] = { level: 1 };
        this.save(); return true;
    }
    upgradeWeapon(id) {
        const w = WEAPONS.find(w => w.id === id);
        if (!w || !this.ownsWeapon(id)) return false;
        const cur = this.data.ownedWeapons[id].level;
        if (cur >= w.maxLevel) return false;
        const cost = w.upgradeCost * cur;
        if (this.data.coins < cost) return false;
        this.data.coins -= cost;
        this.data.ownedWeapons[id].level++;
        this.save(); return true;
    }
    equipWeapon(id) { if (!this.ownsWeapon(id)) return false; this.data.equippedWeapon = id; this.save(); return true; }
    selectHero(id) { this.data.selectedHero = id; this.save(); }
    completeLevel(num, stars, score) {
        const prev = this.data.levelsCompleted[num];
        if (!prev || stars > prev.stars) this.data.levelsCompleted[num] = { stars, score };
        if (num >= this.data.maxLevelUnlocked && num < 30) this.data.maxLevelUnlocked = num + 1;
        this.save();
    }
    isLevelUnlocked(num) { return num <= this.data.maxLevelUnlocked; }
    getLevelResult(num) { return this.data.levelsCompleted[num] || null; }
    canCheckin() { return this.data.checkin.lastDate !== new Date().toDateString(); }
    doCheckin() {
        const today = new Date().toDateString();
        if (!this.canCheckin()) return 0;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        this.data.checkin.streak = this.data.checkin.lastDate === yesterday ? this.data.checkin.streak + 1 : 1;
        this.data.checkin.lastDate = today;
        const reward = 50 + Math.min(this.data.checkin.streak, 7) * 25;
        this.data.coins += reward;
        if (!this.data.checkin.history) this.data.checkin.history = [];
        this.data.checkin.history.push(today);
        this.save(); return reward;
    }
    // Bomb methods
    getBombCount(id) { return this.data.bombs[id] || 0; }
    get equippedBomb() { return BOMB_SHOP.find(b => b.id === this.data.equippedBomb) || BOMB_SHOP[0]; }
    equipBomb(id) { this.data.equippedBomb = id; this.save(); }
    buyBomb(id, qty = 1) {
        const b = BOMB_SHOP.find(b => b.id === id);
        if (!b) return false;
        const totalCost = b.cost * qty;
        if (this.data.coins < totalCost) return false;
        this.data.coins -= totalCost;
        this.data.bombs[id] = (this.data.bombs[id] || 0) + qty;
        this.save(); return true;
    }
    useBomb(id) {
        if ((this.data.bombs[id] || 0) <= 0) return false;
        this.data.bombs[id]--;
        this.save(); return true;
    }
    get totalBombs() {
        return Object.values(this.data.bombs).reduce((a, b) => a + b, 0);
    }
}
const state = new GameState();

// ===== MINECRAFT-STYLE 3D CHARACTER BUILDER =====
class CharacterBuilder {
    // Creates a blocky Minecraft-style human with pivoting arms & legs
    static createHuman(opts = {}) {
        const {
            skinColor = 0xc68642,
            shirtColor = 0x2244aa,
            pantsColor = 0x222244,
            shoeColor = 0x222222,
            hairColor = 0x111111,
            isEnemy = false,
            isHero = false,
            heroColor = 0x00aaff,
            enemyType = 'soldier'
        } = opts;

        const group = new THREE.Group();

        // Minecraft pixel-art materials — flat shading, no smoothing
        const skinMat  = new THREE.MeshLambertMaterial({ color: skinColor, flatShading: true });
        const shirtMat = new THREE.MeshLambertMaterial({ color: shirtColor, flatShading: true });
        const pantsMat = new THREE.MeshLambertMaterial({ color: pantsColor, flatShading: true });
        const shoeMat  = new THREE.MeshLambertMaterial({ color: shoeColor, flatShading: true });
        const hairMat  = new THREE.MeshLambertMaterial({ color: hairColor, flatShading: true });
        const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const pupilMat    = new THREE.MeshBasicMaterial({ color: isEnemy ? 0xff0000 : 0x222222 });
        const mouthMat    = new THREE.MeshBasicMaterial({ color: 0x3a1a1a });

        // ---- HEAD (8×8×8 px → 0.5 unit cube) ----
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), skinMat);
        head.position.y = 1.65;
        head.castShadow = true;
        group.add(head);

        // Hair block on top
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.52), hairMat);
        hair.position.y = 1.95;
        hair.castShadow = true;
        group.add(hair);
        // Hair sides
        const hairSide = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.3, 0.08), hairMat);
        hairSide.position.set(0, 1.78, -0.24);
        group.add(hairSide);

        // Eyes (flat quads on face)
        [-1, 1].forEach(side => {
            const eyeW = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.02), eyeWhiteMat);
            eyeW.position.set(side * 0.12, 1.68, 0.26);
            group.add(eyeW);
            const pupil = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.025), pupilMat);
            pupil.position.set(side * 0.12, 1.67, 0.272);
            group.add(pupil);
        });

        // Mouth
        const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.02), mouthMat);
        mouth.position.set(0, 1.55, 0.26);
        group.add(mouth);

        // Eyebrows (enemy = angry / hero = normal)
        const browMat = new THREE.MeshBasicMaterial({ color: hairColor });
        [-1, 1].forEach(side => {
            const brow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.025), browMat);
            brow.position.set(side * 0.12, 1.74, 0.262);
            if (isEnemy) brow.rotation.z = side * 0.3; // angry brows
            group.add(brow);
        });

        // ---- BODY / TORSO (8×12×4 px → 0.5 x 0.75 x 0.25) ----
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.75, 0.25), shirtMat);
        body.position.y = 1.025;
        body.castShadow = true;
        group.add(body);

        // Shirt detail — collar line
        const collar = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.26), skinMat);
        collar.position.y = 1.37;
        group.add(collar);

        // Belt
        const beltMat2 = new THREE.MeshLambertMaterial({ color: 0x4a3520, flatShading: true });
        const belt = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.06, 0.26), beltMat2);
        belt.position.y = 0.67;
        group.add(belt);
        // Belt buckle
        const buckleMat = new THREE.MeshBasicMaterial({ color: 0xccaa44 });
        const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.02), buckleMat);
        buckle.position.set(0, 0.67, 0.14);
        group.add(buckle);

        // ---- RIGHT ARM (pivots at shoulder) ----
        const rightArmPivot = new THREE.Group();
        rightArmPivot.position.set(-0.375, 1.35, 0); // shoulder joint
        // Upper arm (shirt)
        const rUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.375, 0.25), shirtMat);
        rUpperArm.position.y = -0.19;
        rUpperArm.castShadow = true;
        rightArmPivot.add(rUpperArm);
        // Lower arm (skin)
        const rLowerArm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), skinMat);
        rLowerArm.position.y = -0.56;
        rLowerArm.castShadow = true;
        rightArmPivot.add(rLowerArm);
        group.add(rightArmPivot);
        group.userData.rightArm = rightArmPivot;

        // ---- LEFT ARM ----
        const leftArmPivot = new THREE.Group();
        leftArmPivot.position.set(0.375, 1.35, 0);
        const lUpperArm = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.375, 0.25), shirtMat);
        lUpperArm.position.y = -0.19;
        lUpperArm.castShadow = true;
        leftArmPivot.add(lUpperArm);
        const lLowerArm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), skinMat);
        lLowerArm.position.y = -0.56;
        lLowerArm.castShadow = true;
        leftArmPivot.add(lLowerArm);
        group.add(leftArmPivot);
        group.userData.leftArm = leftArmPivot;

        // ---- RIGHT LEG (pivots at hip) ----
        const rightLegPivot = new THREE.Group();
        rightLegPivot.position.set(-0.125, 0.65, 0); // hip joint
        const rUpperLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), pantsMat);
        rUpperLeg.position.y = -0.19;
        rUpperLeg.castShadow = true;
        rightLegPivot.add(rUpperLeg);
        const rLowerLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), pantsMat);
        rLowerLeg.position.y = -0.56;
        rLowerLeg.castShadow = true;
        rightLegPivot.add(rLowerLeg);
        // Shoe
        const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.1, 0.32), shoeMat);
        rShoe.position.set(0, -0.8, 0.04);
        rShoe.castShadow = true;
        rightLegPivot.add(rShoe);
        group.add(rightLegPivot);
        group.userData.rightLeg = rightLegPivot;

        // ---- LEFT LEG ----
        const leftLegPivot = new THREE.Group();
        leftLegPivot.position.set(0.125, 0.65, 0);
        const lUpperLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), pantsMat);
        lUpperLeg.position.y = -0.19;
        lUpperLeg.castShadow = true;
        leftLegPivot.add(lUpperLeg);
        const lLowerLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.375, 0.24), pantsMat);
        lLowerLeg.position.y = -0.56;
        lLowerLeg.castShadow = true;
        leftLegPivot.add(lLowerLeg);
        const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.1, 0.32), shoeMat);
        lShoe.position.set(0, -0.8, 0.04);
        lShoe.castShadow = true;
        leftLegPivot.add(lShoe);
        group.add(leftLegPivot);
        group.userData.leftLeg = leftLegPivot;

        // ---- GUN (held in right hand — detailed blocky model) ----
        const gunGroup = new THREE.Group();
        const gunMat = new THREE.MeshLambertMaterial({ color: 0x333333, flatShading: true });
        const gunDarkMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a, flatShading: true });
        const gunAccent = new THREE.MeshLambertMaterial({ color: 0x555555, flatShading: true });

        // Receiver / main body
        const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.5), gunMat);
        gunGroup.add(gunBody);

        // Barrel — extends forward
        const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.22), gunDarkMat);
        barrel.position.set(0, 0.01, 0.35);
        gunGroup.add(barrel);

        // Muzzle tip
        const muzzle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.04), gunAccent);
        muzzle.position.set(0, 0.01, 0.47);
        gunGroup.add(muzzle);

        // Grip / handle
        const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.07), gunMat);
        grip.position.set(0, -0.1, -0.06);
        grip.rotation.x = 0.15;
        gunGroup.add(grip);

        // Trigger guard
        const triggerGuard = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.08), gunDarkMat);
        triggerGuard.position.set(0, -0.04, 0.02);
        gunGroup.add(triggerGuard);

        // Magazine
        const magMat = new THREE.MeshLambertMaterial({ color: 0x2a2a2a, flatShading: true });
        const magazine = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.14, 0.05), magMat);
        magazine.position.set(0, -0.1, 0.06);
        magazine.rotation.x = 0.08;
        gunGroup.add(magazine);

        // Stock (butt of gun)
        const stock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.18), gunMat);
        stock.position.set(0, 0.01, -0.32);
        gunGroup.add(stock);
        const stockPad = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.03), new THREE.MeshLambertMaterial({ color: 0x4a3520, flatShading: true }));
        stockPad.position.set(0, 0.01, -0.42);
        gunGroup.add(stockPad);

        // Top rail / scope mount
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.2), gunAccent);
        rail.position.set(0, 0.055, 0.05);
        gunGroup.add(rail);

        // Front sight post
        const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.04, 0.02), new THREE.MeshBasicMaterial({ color: 0xaaaaaa }));
        frontSight.position.set(0, 0.07, 0.28);
        gunGroup.add(frontSight);

        // Rear sight
        const rearSight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.02), new THREE.MeshBasicMaterial({ color: 0x888888 }));
        rearSight.position.set(0, 0.065, -0.05);
        gunGroup.add(rearSight);

        gunGroup.position.set(0, -0.55, 0.2);
        rightArmPivot.add(gunGroup);
        group.userData.gunGroup = gunGroup;

        // Animation time tracker
        group.userData.animTime = Math.random() * 100;
        group.userData.isMoving = false;

        // Enemy type scale differences
        if (isEnemy) {
            if (enemyType === 'heavy') {
                group.scale.set(1.25, 1.2, 1.25);
            } else if (enemyType === 'fast') {
                group.scale.set(0.85, 0.95, 0.85);
            }
        }

        // ---- HERO UNIQUE VISUALS ----
        if (isHero) {
            // Helmet visor — glowing band across eyes
            const visorMat = new THREE.MeshBasicMaterial({ color: heroColor, transparent: true, opacity: 0.7 });
            const visor = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.04), visorMat);
            visor.position.set(0, 1.68, 0.27);
            group.add(visor);

            // Shoulder pads — armored look
            const padMat = new THREE.MeshLambertMaterial({ color: heroColor, flatShading: true });
            [-1, 1].forEach(side => {
                const pad = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.3), padMat);
                pad.position.set(side * 0.38, 1.42, 0);
                pad.castShadow = true;
                group.add(pad);
            });

            // Cape — hanging from back shoulders
            const capeMat = new THREE.MeshLambertMaterial({ color: heroColor, flatShading: true, side: THREE.DoubleSide });
            const capeGeo = new THREE.BoxGeometry(0.44, 0.7, 0.04);
            const cape = new THREE.Mesh(capeGeo, capeMat);
            cape.position.set(0, 0.95, -0.16);
            cape.rotation.x = 0.08;
            cape.castShadow = true;
            group.add(cape);
            // Cape lower extension
            const capeLower = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.04), capeMat);
            capeLower.position.set(0, 0.5, -0.18);
            capeLower.rotation.x = 0.12;
            group.add(capeLower);

            // Ground glow ring
            const glowRing = new THREE.Mesh(
                new THREE.RingGeometry(0.4, 0.6, 16),
                new THREE.MeshBasicMaterial({ color: heroColor, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
            );
            glowRing.rotation.x = -Math.PI / 2;
            glowRing.position.y = 0.02;
            group.add(glowRing);
            group.userData.glowRing = glowRing;
        }

        return group;
    }

    // Animate the limbs — realistic walk with body bob, knee simulation, head sway
    static animateWalk(group, dt, isMoving, isShooting = false) {
        if (!group.userData.rightArm) return;
        const dtScale = dt / 16.667;
        group.userData.animTime += dtScale * 0.12;
        const t = group.userData.animTime;

        if (isMoving) {
            const walkCycle = t * 7;
            // Legs: smooth swing
            const legSwing = Math.sin(walkCycle) * 0.7;
            group.userData.rightLeg.rotation.x = legSwing;
            group.userData.leftLeg.rotation.x = -legSwing;

            // Arms
            if (!isShooting) {
                group.userData.leftArm.rotation.x = legSwing * 0.5;
                group.userData.leftArm.rotation.z = 0;
                group.userData.rightArm.rotation.x = -legSwing * 0.3 - 0.5;
                group.userData.rightArm.rotation.z = 0;
            }

            // Gentle body bob — reduced for stability
            group.userData._bodyBob = Math.abs(Math.sin(walkCycle)) * 0.03;

            // Very subtle torso lean — DON'T rotate the whole group
            group.rotation.x = 0;

            // Head counter-sway
            const head = group.children.find(c => c.isMesh && Math.abs(c.position.y - 1.65) < 0.1);
            if (head) {
                head.rotation.z = Math.sin(walkCycle) * 0.025;
                head.rotation.y = 0;
            }
        } else {
            // Idle — minimal breathing
            const idleT = t * 2;
            group.userData.rightLeg.rotation.x = 0;
            group.userData.leftLeg.rotation.x = 0;
            group.rotation.x = 0;

            if (!isShooting) {
                group.userData.leftArm.rotation.x = Math.sin(idleT) * 0.02;
                group.userData.leftArm.rotation.z = 0;
                group.userData.rightArm.rotation.x = -0.5;
                group.userData.rightArm.rotation.z = 0;
            }

            group.userData._bodyBob = Math.sin(idleT) * 0.005;

            const head = group.children.find(c => c.isMesh && Math.abs(c.position.y - 1.65) < 0.1);
            if (head) {
                head.rotation.z = 0;
                head.rotation.y = Math.sin(idleT * 0.7) * 0.015;
            }
        }

        // Shooting pose
        if (isShooting) {
            group.userData.rightArm.rotation.x = -1.2;
            group.userData.rightArm.rotation.z = 0.1;
            group.userData.leftArm.rotation.x = -1.15;
            group.userData.leftArm.rotation.z = -0.15;
        }
    }

    // Apply recoil kick to the gun arm — call on each shot
    static applyRecoil(group) {
        if (!group.userData.rightArm) return;
        const arm = group.userData.rightArm;
        const origX = arm.rotation.x;
        // Quick kick up
        arm.rotation.x = origX + 0.25;
        // Animate back smoothly
        const start = performance.now();
        const recoilDur = 120;
        const tick = () => {
            const elapsed = performance.now() - start;
            const progress = Math.min(elapsed / recoilDur, 1);
            // Ease out
            arm.rotation.x = origX + 0.25 * (1 - progress * progress);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    // Victory dance animation
    static animateDance(group, dt) {
        if (!group.userData.rightArm) return;
        const dtScale = dt / 16.667;
        group.userData.animTime += dtScale * 0.15;
        const t = group.userData.animTime;
        const danceCycle = t * 8;

        // Arms pump up and wave
        group.userData.rightArm.rotation.x = -2.5 + Math.sin(danceCycle) * 0.5;
        group.userData.rightArm.rotation.z = 0.3 + Math.sin(danceCycle * 0.5) * 0.3;
        group.userData.leftArm.rotation.x = -2.5 + Math.sin(danceCycle + Math.PI) * 0.5;
        group.userData.leftArm.rotation.z = -0.3 - Math.sin(danceCycle * 0.5) * 0.3;

        // Legs bounce and step
        group.userData.rightLeg.rotation.x = Math.sin(danceCycle * 2) * 0.4;
        group.userData.leftLeg.rotation.x = Math.sin(danceCycle * 2 + Math.PI) * 0.4;

        // Body bounce
        group.userData._bodyBob = Math.abs(Math.sin(danceCycle * 2)) * 0.12;

        // Hip twist
        group.rotation.y += Math.sin(danceCycle) * 0.02;

        // Head bob
        const head = group.children.find(c => c.isMesh && Math.abs(c.position.y - 1.65) < 0.1);
        if (head) {
            head.rotation.z = Math.sin(danceCycle * 2) * 0.1;
            head.rotation.y = Math.sin(danceCycle) * 0.08;
        }
    }

    static createMuzzleFlash() {
        // Blocky muzzle flash — Minecraft style
        const group = new THREE.Group();
        const mat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.9 });
        const core = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), mat);
        group.add(core);
        const outer = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.06),
            new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.6 }));
        group.add(outer);
        group.visible = false;
        return group;
    }
}

// ===== 3D CITY MAP =====
class CityMap3D {
    constructor(scene, theme) {
        this.scene = scene;
        this.size = 120;
        this.buildings = [];
        this.buildingBoxes = [];
        this.theme = theme || THEMES.city;
        this.generate();
    }

    _addBox(x, z, w, d, h) {
        this.buildingBoxes.push(new THREE.Box3(
            new THREE.Vector3(x - w / 2 - 0.3, 0, z - d / 2 - 0.3),
            new THREE.Vector3(x + w / 2 + 0.3, h, z + d / 2 + 0.3)
        ));
        this.buildings.push({ x, z, w, d, h });
    }

    generate() {
        const id = Object.keys(THEMES).find(k => THEMES[k] === this.theme) || 'city';
        switch (id) {
            case 'desert': this._genDesert(); break;
            case 'snow':   this._genSnow(); break;
            case 'forest': this._genForest(); break;
            default:       this._genCity(); break;
        }
    }

    // ==================== CITY ====================
    _genCity() {
        const S = this.size, t = this.theme, BS = 16;
        // Ground
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(S, S), new THREE.MeshLambertMaterial({ color: t.ground }));
        ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; this.scene.add(ground);
        // Roads with markings
        const roadMat = new THREE.MeshLambertMaterial({ color: t.road });
        const lineMat = new THREE.MeshBasicMaterial({ color: t.roadLine });
        for (let i = -S / 2; i <= S / 2; i += BS) {
            const hr = new THREE.Mesh(new THREE.PlaneGeometry(S, 4), roadMat);
            hr.rotation.x = -Math.PI / 2; hr.position.set(0, 0.01, i); hr.receiveShadow = true; this.scene.add(hr);
            const vr = new THREE.Mesh(new THREE.PlaneGeometry(4, S), roadMat);
            vr.rotation.x = -Math.PI / 2; vr.position.set(i, 0.01, 0); vr.receiveShadow = true; this.scene.add(vr);
            for (let d = -S / 2; d < S / 2; d += 3) {
                const l1 = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 1.2), lineMat);
                l1.rotation.x = -Math.PI / 2; l1.position.set(i, 0.02, d); this.scene.add(l1);
                const l2 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), lineMat);
                l2.rotation.x = -Math.PI / 2; l2.position.set(d, 0.02, i); this.scene.add(l2);
            }
        }
        // Skyscrapers with windows
        const bC = t.buildings;
        for (let bx = -S / 2 + BS / 2; bx < S / 2; bx += BS) {
            for (let bz = -S / 2 + BS / 2; bz < S / 2; bz += BS) {
                const n = 1 + Math.floor(Math.random() * 2);
                for (let b = 0; b < n; b++) {
                    if (Math.random() < 0.15) continue;
                    const w = 3 + Math.random() * 5, d = 3 + Math.random() * 5, h = 3 + Math.random() * 20;
                    const ox = bx + (Math.random() - 0.5) * (BS - w - 5);
                    const oz = bz + (Math.random() - 0.5) * (BS - d - 5);
                    const bld = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color: bC[Math.floor(Math.random() * bC.length)] }));
                    bld.position.set(ox, h / 2, oz); bld.castShadow = true; bld.receiveShadow = true; this.scene.add(bld);
                    // Windows
                    const wg = new THREE.PlaneGeometry(0.4, 0.6);
                    [{ a: 'z', s: 1, fw: w }, { a: 'z', s: -1, fw: w }, { a: 'x', s: 1, fw: d }, { a: 'x', s: -1, fw: d }].forEach(f => {
                        const fd = f.a === 'z' ? d : w;
                        for (let wy = 2; wy < h - 1; wy += 1.8) for (let wx = -f.fw / 2 + 1; wx < f.fw / 2 - 0.5; wx += 1.5) {
                            const lit = Math.random() > 0.4;
                            const wm = new THREE.MeshBasicMaterial({ color: lit ? t.windowLit : t.windowDark, transparent: true, opacity: lit ? 0.7 : 0.9 });
                            const wi = new THREE.Mesh(wg, wm);
                            if (f.a === 'z') wi.position.set(ox + wx, wy, oz + f.s * (fd / 2 + 0.01));
                            else { wi.position.set(ox + f.s * (f.fw / 2 + 0.01), wy, oz + wx); wi.rotation.y = f.s > 0 ? Math.PI / 2 : -Math.PI / 2; }
                            this.scene.add(wi);
                        }
                    });
                    // Roof AC unit
                    const roof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.3, 0.8, d * 0.3), new THREE.MeshLambertMaterial({ color: t.roofColor }));
                    roof.position.set(ox, h + 0.4, oz); this.scene.add(roof);
                    this._addBox(ox, oz, w, d, h);
                }
            }
        }
        // Traffic lights at intersections
        const tlMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        for (let x = -S / 2; x <= S / 2; x += BS) {
            for (let z = -S / 2; z <= S / 2; z += BS) {
                if (Math.random() < 0.5) continue;
                const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 4.5, 5), tlMat);
                pole.position.set(x + 2.5, 2.25, z + 2.5); this.scene.add(pole);
                const box = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.7, 0.15), tlMat);
                box.position.set(x + 2.5, 4.6, z + 2.5); this.scene.add(box);
                // Red, yellow, green lights
                [0xff0000, 0xffaa00, 0x00ff00].forEach((c, i) => {
                    const l = new THREE.Mesh(new THREE.SphereGeometry(0.06, 5, 5), new THREE.MeshBasicMaterial({ color: c }));
                    l.position.set(x + 2.5, 4.85 - i * 0.22, z + 2.58); this.scene.add(l);
                });
            }
        }
        // Streetlights
        const pMat = new THREE.MeshLambertMaterial({ color: t.lampPost });
        const gMat = new THREE.MeshBasicMaterial({ color: t.lampGlow });
        for (let x = -S / 2 + 4; x < S / 2; x += BS) for (let z = -S / 2 + 4; z < S / 2; z += BS) {
            const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 4, 6), pMat); p.position.set(x, 2, z); this.scene.add(p);
            const la = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), gMat); la.position.set(x, 4.1, z); this.scene.add(la);
            this.scene.add(Object.assign(new THREE.PointLight(t.lampLight, 0.4, 12), { position: new THREE.Vector3(x, 4, z) }));
        }
        // Parked cars
        for (let i = 0; i < 20; i++) {
            const cx = (Math.random() - 0.5) * S * 0.8, cz = (Math.random() - 0.5) * S * 0.8;
            if (!this.isWalkable(cx, cz, 2)) continue;
            const carColors = [0x882222, 0x2244aa, 0x228844, 0x888888, 0xdddddd, 0x222222];
            const cc = carColors[Math.floor(Math.random() * carColors.length)];
            const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.6, 3.5), new THREE.MeshLambertMaterial({ color: cc }));
            body.position.set(cx, 0.5, cz); body.rotation.y = Math.random() * Math.PI; body.castShadow = true; this.scene.add(body);
            const top = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.8), new THREE.MeshLambertMaterial({ color: cc }));
            top.position.set(cx, 1.05, cz); top.rotation.y = body.rotation.y; this.scene.add(top);
            // Windows
            const cw = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.35, 1.75), new THREE.MeshBasicMaterial({ color: 0x334466, transparent: true, opacity: 0.6 }));
            cw.position.set(cx, 1.1, cz); cw.rotation.y = body.rotation.y; this.scene.add(cw);
            this._addBox(cx, cz, 2, 3.8, 1.3);
        }
        // Trees
        for (let i = 0; i < 40; i++) {
            const tx = (Math.random() - 0.5) * S * 0.85, tz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(tx, tz, 1.5)) continue;
            const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.15, 1.5, 6), new THREE.MeshLambertMaterial({ color: t.trunkColor }));
            tk.position.set(tx, 0.75, tz); tk.castShadow = true; this.scene.add(tk);
            const fo = new THREE.Mesh(new THREE.SphereGeometry(0.8 + Math.random() * 0.4, 6, 5), new THREE.MeshLambertMaterial({ color: t.foliageColor }));
            fo.position.set(tx, 2.2 + Math.random() * 0.3, tz); fo.castShadow = true; this.scene.add(fo);
        }
    }

    // ==================== DESERT ====================
    _genDesert() {
        const S = this.size, t = this.theme, BS = 20;
        // Sandy ground with bumps
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(S, S, 32, 32), new THREE.MeshLambertMaterial({ color: t.ground }));
        ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
        const gp = ground.geometry.attributes.position;
        for (let i = 0; i < gp.count; i++) gp.setZ(i, Math.sin(gp.getX(i) * 0.3) * Math.cos(gp.getY(i) * 0.3) * 0.15);
        gp.needsUpdate = true; ground.geometry.computeVertexNormals(); this.scene.add(ground);
        // Dirt paths
        const pathMat = new THREE.MeshLambertMaterial({ color: 0x9a8040 });
        for (let i = -S / 2; i <= S / 2; i += BS) {
            const h = new THREE.Mesh(new THREE.PlaneGeometry(S, 3), pathMat); h.rotation.x = -Math.PI / 2; h.position.set(0, 0.02, i); this.scene.add(h);
            const v = new THREE.Mesh(new THREE.PlaneGeometry(3, S), pathMat); v.rotation.x = -Math.PI / 2; v.position.set(i, 0.02, 0); this.scene.add(v);
        }
        // Sand dunes
        const duneMat = new THREE.MeshLambertMaterial({ color: 0xd4b85a });
        for (let i = 0; i < 20; i++) {
            const dx = (Math.random() - 0.5) * S * 0.8, dz = (Math.random() - 0.5) * S * 0.8;
            const dw = 4 + Math.random() * 6, dh = 1 + Math.random() * 2;
            const dune = new THREE.Mesh(new THREE.SphereGeometry(dw, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), duneMat);
            dune.scale.set(1, dh / dw, 1.2); dune.position.set(dx, 0, dz); dune.castShadow = true; this.scene.add(dune);
            this._addBox(dx, dz, dw * 1.2, dw * 1.4, dh);
        }
        // Mud/stone huts with cone roofs
        const hutWalls = [0x9e7a4a, 0xb08a50, 0x8a6a3a, 0xa07848];
        for (let bx = -S / 2 + BS / 2; bx < S / 2; bx += BS) for (let bz = -S / 2 + BS / 2; bz < S / 2; bz += BS) {
            if (Math.random() < 0.3) continue;
            const n = 1 + Math.floor(Math.random() * 2);
            for (let h = 0; h < n; h++) {
                const r = 1.5 + Math.random() * 2, hh = 2 + Math.random() * 2;
                const ox = bx + (Math.random() - 0.5) * 10, oz = bz + (Math.random() - 0.5) * 10;
                const wall = new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.2, hh, 8), new THREE.MeshLambertMaterial({ color: hutWalls[Math.floor(Math.random() * hutWalls.length)] }));
                wall.position.set(ox, hh / 2, oz); wall.castShadow = true; wall.receiveShadow = true; this.scene.add(wall);
                const rH = 1.5 + Math.random();
                const roofM = new THREE.Mesh(new THREE.ConeGeometry(r + 0.5, rH, 8), new THREE.MeshLambertMaterial({ color: 0x6a4a20 }));
                roofM.position.set(ox, hh + rH / 2, oz); roofM.castShadow = true; this.scene.add(roofM);
                // Door
                const door = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.4), new THREE.MeshLambertMaterial({ color: 0x3a2a10 }));
                door.position.set(ox, 0.7, oz + r + 0.02); this.scene.add(door);
                // Window
                const win = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.5 }));
                win.position.set(ox + r + 0.02, hh * 0.55, oz); win.rotation.y = Math.PI / 2; this.scene.add(win);
                this._addBox(ox, oz, r * 2, r * 2, hh + rH);
            }
        }
        // Rocky outcrops
        const rockMat = new THREE.MeshLambertMaterial({ color: 0x7a6a5a });
        for (let i = 0; i < 25; i++) {
            const rx = (Math.random() - 0.5) * S * 0.85, rz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(rx, rz, 2)) continue;
            const rw = 0.5 + Math.random() * 1.5, rh = 0.8 + Math.random() * 2;
            const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rw, 0), rockMat);
            rock.scale.set(1, rh / rw, 0.8 + Math.random() * 0.4);
            rock.rotation.set(Math.random() * 0.3, Math.random() * Math.PI, Math.random() * 0.3);
            rock.position.set(rx, rh * 0.4, rz); rock.castShadow = true; this.scene.add(rock);
            this._addBox(rx, rz, rw * 2, rw * 2, rh);
        }
        // Cacti with arms
        const cactusMat = new THREE.MeshLambertMaterial({ color: 0x2a7a2a });
        for (let i = 0; i < 50; i++) {
            const cx = (Math.random() - 0.5) * S * 0.85, cz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(cx, cz, 1)) continue;
            const ch = 1.5 + Math.random() * 2.5;
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, ch, 6), cactusMat);
            trunk.position.set(cx, ch / 2, cz); trunk.castShadow = true; this.scene.add(trunk);
            if (Math.random() > 0.5) {
                const aH = 0.6 + Math.random() * 0.8, aY = ch * 0.4 + Math.random() * ch * 0.3;
                const a1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, aH, 5), cactusMat);
                a1.position.set(cx + 0.4, aY + aH / 2, cz); a1.rotation.z = -0.3; this.scene.add(a1);
                const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.4, 5), cactusMat);
                c1.position.set(cx + 0.2, aY, cz); c1.rotation.z = Math.PI / 2; this.scene.add(c1);
            }
            if (Math.random() > 0.6) {
                const aH = 0.5 + Math.random() * 0.6, aY = ch * 0.5 + Math.random() * ch * 0.2;
                const a2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, aH, 5), cactusMat);
                a2.position.set(cx - 0.4, aY + aH / 2, cz); a2.rotation.z = 0.3; this.scene.add(a2);
                const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.4, 5), cactusMat);
                c2.position.set(cx - 0.2, aY, cz); c2.rotation.z = Math.PI / 2; this.scene.add(c2);
            }
        }
        // Wooden crates for cover
        const crateMat = new THREE.MeshLambertMaterial({ color: 0x6a5a3a });
        for (let i = 0; i < 15; i++) {
            const cx = (Math.random() - 0.5) * S * 0.7, cz = (Math.random() - 0.5) * S * 0.7;
            if (!this.isWalkable(cx, cz, 2)) continue;
            const cw = 1 + Math.random() * 1.5, cd = 1 + Math.random(), ch = 0.8 + Math.random() * 0.8;
            const crate = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, cd), crateMat);
            crate.position.set(cx, ch / 2, cz); crate.rotation.y = Math.random() * Math.PI; crate.castShadow = true; this.scene.add(crate);
            this._addBox(cx, cz, cw, cd, ch);
        }
        // Abandoned truck
        for (let i = 0; i < 5; i++) {
            const tx = (Math.random() - 0.5) * S * 0.6, tz = (Math.random() - 0.5) * S * 0.6;
            if (!this.isWalkable(tx, tz, 3)) continue;
            const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.2, 4.5), new THREE.MeshLambertMaterial({ color: 0x6a6a5a }));
            body.position.set(tx, 0.8, tz); body.rotation.y = Math.random() * Math.PI; body.castShadow = true; this.scene.add(body);
            const cab = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 1.5), new THREE.MeshLambertMaterial({ color: 0x5a5a4a }));
            cab.position.set(tx, 1.7, tz + 1.2); cab.rotation.y = body.rotation.y; this.scene.add(cab);
            this._addBox(tx, tz, 2.5, 5, 2);
        }
        // Torch lights
        for (let x = -S / 2 + 10; x < S / 2; x += BS) for (let z = -S / 2 + 10; z < S / 2; z += BS) {
            const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3, 5), new THREE.MeshLambertMaterial({ color: 0x5a3a1a }));
            p.position.set(x, 1.5, z); this.scene.add(p);
            const f = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 5), new THREE.MeshBasicMaterial({ color: 0xff6600 }));
            f.position.set(x, 3.2, z); this.scene.add(f);
            this.scene.add(Object.assign(new THREE.PointLight(0xff8833, 0.6, 15), { position: new THREE.Vector3(x, 3.2, z) }));
        }
        // Dry dead bushes
        const dryMat = new THREE.MeshLambertMaterial({ color: 0x8a7a3a });
        for (let i = 0; i < 30; i++) {
            const bx = (Math.random() - 0.5) * S * 0.9, bz = (Math.random() - 0.5) * S * 0.9;
            if (!this.isWalkable(bx, bz, 0.8)) continue;
            const br = 0.3 + Math.random() * 0.5;
            const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(br, 0), dryMat);
            bush.position.set(bx, br * 0.5, bz); bush.castShadow = true; this.scene.add(bush);
        }
    }

    // ==================== SNOW ====================
    _genSnow() {
        const S = this.size, t = this.theme, BS = 20;
        const snowMat = new THREE.MeshLambertMaterial({ color: 0xf0f4ff });
        // Snow ground
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(S, S, 24, 24), new THREE.MeshLambertMaterial({ color: 0xe8ecf4 }));
        ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
        const gp = ground.geometry.attributes.position;
        for (let i = 0; i < gp.count; i++) gp.setZ(i, Math.sin(gp.getX(i) * 0.2) * Math.cos(gp.getY(i) * 0.2) * 0.1);
        gp.needsUpdate = true; ground.geometry.computeVertexNormals(); this.scene.add(ground);
        // Icy paths
        const pathMat = new THREE.MeshLambertMaterial({ color: 0x8a9ab0 });
        for (let i = -S / 2; i <= S / 2; i += BS) {
            const h = new THREE.Mesh(new THREE.PlaneGeometry(S, 3), pathMat); h.rotation.x = -Math.PI / 2; h.position.set(0, 0.02, i); this.scene.add(h);
            const v = new THREE.Mesh(new THREE.PlaneGeometry(3, S), pathMat); v.rotation.x = -Math.PI / 2; v.position.set(i, 0.02, 0); this.scene.add(v);
        }
        // Frozen lake
        const lake = new THREE.Mesh(new THREE.CircleGeometry(12, 24), new THREE.MeshLambertMaterial({ color: 0x6688bb, transparent: true, opacity: 0.7 }));
        lake.rotation.x = -Math.PI / 2; lake.position.set(15, 0.03, 15); this.scene.add(lake);
        // Frozen lake cracks
        const crackMat = new THREE.MeshBasicMaterial({ color: 0x99bbdd });
        for (let i = 0; i < 8; i++) {
            const cl = 2 + Math.random() * 6;
            const cr = new THREE.Mesh(new THREE.PlaneGeometry(0.05, cl), crackMat);
            cr.rotation.x = -Math.PI / 2; cr.rotation.z = Math.random() * Math.PI;
            cr.position.set(15 + (Math.random() - 0.5) * 16, 0.04, 15 + (Math.random() - 0.5) * 16); this.scene.add(cr);
        }
        // Log cabins with snow roofs and chimneys
        const woodC = [0x5a3a1a, 0x6a4a2a, 0x4a2a10, 0x7a5a30];
        for (let bx = -S / 2 + BS / 2; bx < S / 2; bx += BS) for (let bz = -S / 2 + BS / 2; bz < S / 2; bz += BS) {
            if (Math.random() < 0.25) continue;
            const w = 3 + Math.random() * 3, d = 3 + Math.random() * 3, hh = 2.5 + Math.random() * 2;
            const ox = bx + (Math.random() - 0.5) * 8, oz = bz + (Math.random() - 0.5) * 8;
            const wc = woodC[Math.floor(Math.random() * woodC.length)];
            // Cabin walls
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), new THREE.MeshLambertMaterial({ color: wc }));
            cabin.position.set(ox, hh / 2, oz); cabin.castShadow = true; cabin.receiveShadow = true; this.scene.add(cabin);
            // Log texture lines
            for (let ly = 0.5; ly < hh; ly += 0.6) {
                const lf = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 0.05, 0.05), new THREE.MeshLambertMaterial({ color: wc - 0x111111 }));
                lf.position.set(ox, ly, oz + d / 2 + 0.01); this.scene.add(lf);
            }
            // Snow-covered roof
            const snowCap = new THREE.Mesh(new THREE.BoxGeometry(w + 1, 0.35, d + 1), snowMat);
            snowCap.position.set(ox, hh + 0.17, oz); this.scene.add(snowCap);
            // Pitched roof shape
            const roofH = 1.4;
            const roofPeak = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.65, roofH, 4), snowMat);
            roofPeak.position.set(ox, hh + roofH / 2 + 0.3, oz); roofPeak.rotation.y = Math.PI / 4; roofPeak.castShadow = true; this.scene.add(roofPeak);
            // Chimney with smoke hint
            if (Math.random() > 0.3) {
                const ch = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 0.5), new THREE.MeshLambertMaterial({ color: 0x6a5a4a }));
                ch.position.set(ox + w / 3, hh + roofH + 0.6, oz); this.scene.add(ch);
                // Smoke puff
                const smk = new THREE.Mesh(new THREE.SphereGeometry(0.25, 5, 5), new THREE.MeshBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.3 }));
                smk.position.set(ox + w / 3, hh + roofH + 2, oz); this.scene.add(smk);
            }
            // Warm glowing windows
            const wMat = new THREE.MeshBasicMaterial({ color: 0xffcc55, transparent: true, opacity: 0.8 });
            const w1 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.5), wMat); w1.position.set(ox - w / 4, hh * 0.5, oz + d / 2 + 0.02); this.scene.add(w1);
            const w2 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.5), wMat); w2.position.set(ox + w / 4, hh * 0.5, oz + d / 2 + 0.02); this.scene.add(w2);
            // Door
            const dr = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.5), new THREE.MeshLambertMaterial({ color: 0x4a2a10 }));
            dr.position.set(ox, 0.75, oz + d / 2 + 0.02); this.scene.add(dr);
            this._addBox(ox, oz, w, d, hh + roofH);
        }
        // Snowdrifts
        for (let i = 0; i < 30; i++) {
            const dx = (Math.random() - 0.5) * S * 0.85, dz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(dx, dz, 2)) continue;
            const dr = 1.5 + Math.random() * 3, dh = 0.5 + Math.random() * 1;
            const drift = new THREE.Mesh(new THREE.SphereGeometry(dr, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), snowMat);
            drift.scale.set(1, dh / dr, 1.3); drift.position.set(dx, 0, dz); drift.castShadow = true; this.scene.add(drift);
            if (dh > 0.8) this._addBox(dx, dz, dr * 1.5, dr * 1.5, dh);
        }
        // Snowman
        for (let i = 0; i < 4; i++) {
            const sx = (Math.random() - 0.5) * S * 0.5, sz = (Math.random() - 0.5) * S * 0.5;
            if (!this.isWalkable(sx, sz, 1.5)) continue;
            const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 7, 6), snowMat); b1.position.set(sx, 0.6, sz); this.scene.add(b1);
            const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 7, 6), snowMat); b2.position.set(sx, 1.5, sz); this.scene.add(b2);
            const b3 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 7, 6), snowMat); b3.position.set(sx, 2.15, sz); this.scene.add(b3);
            // Carrot nose
            const nose = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 5), new THREE.MeshLambertMaterial({ color: 0xff6600 }));
            nose.position.set(sx, 2.15, sz + 0.32); nose.rotation.x = Math.PI / 2; this.scene.add(nose);
            // Eyes
            const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
            const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), eyeMat); e1.position.set(sx - 0.1, 2.25, sz + 0.28); this.scene.add(e1);
            const e2 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), eyeMat); e2.position.set(sx + 0.1, 2.25, sz + 0.28); this.scene.add(e2);
        }
        // Snow-covered pine trees
        const pineMat = new THREE.MeshLambertMaterial({ color: 0x1a4a2a });
        for (let i = 0; i < 60; i++) {
            const tx = (Math.random() - 0.5) * S * 0.85, tz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(tx, tz, 1.5)) continue;
            const th = 3 + Math.random() * 3;
            const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.15, th * 0.4, 5), new THREE.MeshLambertMaterial({ color: 0x3a2a1a }));
            tk.position.set(tx, th * 0.2, tz); tk.castShadow = true; this.scene.add(tk);
            for (let l = 0; l < 3; l++) {
                const lr = 1.2 - l * 0.3 + Math.random() * 0.3, lh = 1.2 + Math.random() * 0.3, ly = th * 0.35 + l * 1.1;
                const cone = new THREE.Mesh(new THREE.ConeGeometry(lr, lh, 6), pineMat);
                cone.position.set(tx, ly, tz); cone.castShadow = true; this.scene.add(cone);
                const cap = new THREE.Mesh(new THREE.ConeGeometry(lr + 0.1, 0.2, 6), snowMat);
                cap.position.set(tx, ly + lh / 2, tz); this.scene.add(cap);
            }
        }
        // Ice rocks
        const iceMat = new THREE.MeshLambertMaterial({ color: 0x8899aa });
        for (let i = 0; i < 15; i++) {
            const rx = (Math.random() - 0.5) * S * 0.8, rz = (Math.random() - 0.5) * S * 0.8;
            if (!this.isWalkable(rx, rz, 1.5)) continue;
            const rr = 0.5 + Math.random() * 1.2;
            const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rr, 0), iceMat);
            rock.scale.set(1, 0.7, 0.9); rock.rotation.y = Math.random() * Math.PI;
            rock.position.set(rx, rr * 0.35, rz); rock.castShadow = true; this.scene.add(rock);
            if (rr > 0.8) this._addBox(rx, rz, rr * 2, rr * 2, rr);
        }
        // Lanterns
        for (let x = -S / 2 + 10; x < S / 2; x += BS) for (let z = -S / 2 + 10; z < S / 2; z += BS) {
            const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3.5, 5), new THREE.MeshLambertMaterial({ color: 0x4a3a2a }));
            p.position.set(x, 1.75, z); this.scene.add(p);
            const la = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), new THREE.MeshBasicMaterial({ color: 0xffeeaa }));
            la.position.set(x, 3.7, z); this.scene.add(la);
            this.scene.add(Object.assign(new THREE.PointLight(0xffeedd, 0.5, 14), { position: new THREE.Vector3(x, 3.7, z) }));
        }
    }

    // ==================== FOREST ====================
    _genForest() {
        const S = this.size, t = this.theme, BS = 22;
        // Grassy ground
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(S, S, 24, 24), new THREE.MeshLambertMaterial({ color: 0x3a6a2a }));
        ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
        const gp = ground.geometry.attributes.position;
        for (let i = 0; i < gp.count; i++) gp.setZ(i, Math.sin(gp.getX(i) * 0.15) * Math.cos(gp.getY(i) * 0.2) * 0.2);
        gp.needsUpdate = true; ground.geometry.computeVertexNormals(); this.scene.add(ground);
        // Dirt paths
        const pathMat = new THREE.MeshLambertMaterial({ color: 0x6a5a30 });
        for (let i = -S / 2; i <= S / 2; i += BS) {
            const h = new THREE.Mesh(new THREE.PlaneGeometry(S, 2.5), pathMat); h.rotation.x = -Math.PI / 2; h.position.set(0, 0.02, i); this.scene.add(h);
            const v = new THREE.Mesh(new THREE.PlaneGeometry(2.5, S), pathMat); v.rotation.x = -Math.PI / 2; v.position.set(i, 0.02, 0); this.scene.add(v);
        }
        // Stream / creek
        const streamMat = new THREE.MeshLambertMaterial({ color: 0x3a6a9a, transparent: true, opacity: 0.6 });
        for (let sz = -S / 2; sz < S / 2; sz += 3) {
            const sx = 20 + Math.sin(sz * 0.08) * 8;
            const st = new THREE.Mesh(new THREE.PlaneGeometry(3, 3.2), streamMat);
            st.rotation.x = -Math.PI / 2; st.position.set(sx, 0.03, sz); this.scene.add(st);
        }
        // Wooden bridge over stream
        for (let bz = -10; bz <= 10; bz += 10) {
            const bx = 20 + Math.sin(bz * 0.08) * 8;
            if (!this.isWalkable(bx, bz, 2)) continue;
            const plank = new THREE.Mesh(new THREE.BoxGeometry(4, 0.15, 2), new THREE.MeshLambertMaterial({ color: 0x6a4a20 }));
            plank.position.set(bx, 0.15, bz); this.scene.add(plank);
            // Rails
            const railMat = new THREE.MeshLambertMaterial({ color: 0x5a3a10 });
            const r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 4), railMat);
            r1.position.set(bx - 1.8, 0.5, bz); this.scene.add(r1);
            const r2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 4), railMat);
            r2.position.set(bx + 1.8, 0.5, bz); this.scene.add(r2);
        }
        // Wooden cabins with thatched roofs
        const woodC = [0x5a3a15, 0x6a4520, 0x4a2a0a, 0x7a5a28];
        for (let bx = -S / 2 + BS / 2; bx < S / 2; bx += BS) for (let bz = -S / 2 + BS / 2; bz < S / 2; bz += BS) {
            if (Math.random() < 0.35) continue;
            const w = 3 + Math.random() * 2, d = 3 + Math.random() * 2, hh = 2 + Math.random() * 1.5;
            const ox = bx + (Math.random() - 0.5) * 10, oz = bz + (Math.random() - 0.5) * 10;
            const wc = woodC[Math.floor(Math.random() * woodC.length)];
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), new THREE.MeshLambertMaterial({ color: wc }));
            cabin.position.set(ox, hh / 2, oz); cabin.castShadow = true; cabin.receiveShadow = true; this.scene.add(cabin);
            // Plank lines
            for (let ly = 0.4; ly < hh; ly += 0.5) {
                const pl = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 0.04, 0.04), new THREE.MeshLambertMaterial({ color: wc - 0x0a0a0a }));
                pl.position.set(ox, ly, oz + d / 2 + 0.01); this.scene.add(pl);
            }
            // Thatched roof
            const roofH = 1.2;
            const roofM = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.7, roofH, 4), new THREE.MeshLambertMaterial({ color: 0x4a5a2a }));
            roofM.position.set(ox, hh + roofH / 2, oz); roofM.rotation.y = Math.PI / 4; roofM.castShadow = true; this.scene.add(roofM);
            // Door
            const dr = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.3), new THREE.MeshLambertMaterial({ color: 0x3a1a05 }));
            dr.position.set(ox, 0.65, oz + d / 2 + 0.02); this.scene.add(dr);
            // Window
            const win = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.7 }));
            win.position.set(ox + w / 3, hh * 0.55, oz + d / 2 + 0.02); this.scene.add(win);
            this._addBox(ox, oz, w, d, hh + roofH);
        }
        // Dense trees — mixed deciduous + pine
        const trunkMat = new THREE.MeshLambertMaterial({ color: 0x4a2a10 });
        const folC = [0x1a6a1a, 0x2a7a1a, 0x1a5a2a, 0x2a6a2a, 0x1a7a2a];
        for (let i = 0; i < 120; i++) {
            const tx = (Math.random() - 0.5) * S * 0.9, tz = (Math.random() - 0.5) * S * 0.9;
            if (!this.isWalkable(tx, tz, 1.2)) continue;
            if (Math.random() < 0.5) {
                // Deciduous
                const th = 2 + Math.random() * 2;
                const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, th, 6), trunkMat);
                tk.position.set(tx, th / 2, tz); tk.castShadow = true; this.scene.add(tk);
                const fs = 1 + Math.random() * 0.8;
                const fc = folC[Math.floor(Math.random() * folC.length)];
                const fo = new THREE.Mesh(new THREE.SphereGeometry(fs, 7, 5), new THREE.MeshLambertMaterial({ color: fc }));
                fo.position.set(tx, th + fs * 0.5, tz); fo.castShadow = true; this.scene.add(fo);
                if (Math.random() > 0.4) {
                    const f2 = new THREE.Mesh(new THREE.SphereGeometry(fs * 0.7, 6, 4), new THREE.MeshLambertMaterial({ color: fc }));
                    f2.position.set(tx + fs * 0.5, th + fs * 0.2, tz + fs * 0.3); f2.castShadow = true; this.scene.add(f2);
                }
            } else {
                // Pine
                const th = 3 + Math.random() * 3;
                const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.14, th * 0.5, 5), trunkMat);
                tk.position.set(tx, th * 0.25, tz); tk.castShadow = true; this.scene.add(tk);
                for (let l = 0; l < 3; l++) {
                    const lr = 1.3 - l * 0.35, lh = 1.3;
                    const fc = folC[Math.floor(Math.random() * folC.length)];
                    const co = new THREE.Mesh(new THREE.ConeGeometry(lr, lh, 6), new THREE.MeshLambertMaterial({ color: fc }));
                    co.position.set(tx, th * 0.4 + l * 1, tz); co.castShadow = true; this.scene.add(co);
                }
            }
        }
        // Bushes
        const bushMat = new THREE.MeshLambertMaterial({ color: 0x2a5a1a });
        for (let i = 0; i < 60; i++) {
            const bx = (Math.random() - 0.5) * S * 0.9, bz = (Math.random() - 0.5) * S * 0.9;
            if (!this.isWalkable(bx, bz, 1)) continue;
            const br = 0.4 + Math.random() * 0.6;
            const bush = new THREE.Mesh(new THREE.SphereGeometry(br, 6, 4), bushMat);
            bush.position.set(bx, br * 0.6, bz); bush.castShadow = true; this.scene.add(bush);
        }
        // Rocks and boulders
        const rockMat = new THREE.MeshLambertMaterial({ color: 0x5a5a4a });
        for (let i = 0; i < 30; i++) {
            const rx = (Math.random() - 0.5) * S * 0.85, rz = (Math.random() - 0.5) * S * 0.85;
            if (!this.isWalkable(rx, rz, 1.5)) continue;
            const rr = 0.3 + Math.random() * 1;
            const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(rr, 0), rockMat);
            rock.scale.set(1, 0.6 + Math.random() * 0.4, 0.8 + Math.random() * 0.4);
            rock.rotation.y = Math.random() * Math.PI;
            rock.position.set(rx, rr * 0.3, rz); rock.castShadow = true; this.scene.add(rock);
            if (rr > 0.7) this._addBox(rx, rz, rr * 2, rr * 2, rr);
        }
        // Fallen logs
        const logMat = new THREE.MeshLambertMaterial({ color: 0x4a2a0a });
        for (let i = 0; i < 10; i++) {
            const lx = (Math.random() - 0.5) * S * 0.7, lz = (Math.random() - 0.5) * S * 0.7;
            if (!this.isWalkable(lx, lz, 2)) continue;
            const ll = 2 + Math.random() * 3;
            const log = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, ll, 6), logMat);
            log.position.set(lx, 0.22, lz); log.rotation.z = Math.PI / 2; log.rotation.y = Math.random() * Math.PI;
            log.castShadow = true; this.scene.add(log);
            this._addBox(lx, lz, ll, 0.5, 0.5);
        }
        // Mushrooms
        const mushroomCap = new THREE.MeshLambertMaterial({ color: 0xcc3333 });
        const mushroomStem = new THREE.MeshLambertMaterial({ color: 0xeeeecc });
        for (let i = 0; i < 20; i++) {
            const mx = (Math.random() - 0.5) * S * 0.8, mz = (Math.random() - 0.5) * S * 0.8;
            if (!this.isWalkable(mx, mz, 0.5)) continue;
            const ms = 0.1 + Math.random() * 0.15;
            const stem = new THREE.Mesh(new THREE.CylinderGeometry(ms * 0.3, ms * 0.4, ms * 2, 5), mushroomStem);
            stem.position.set(mx, ms, mz); this.scene.add(stem);
            const cap = new THREE.Mesh(new THREE.SphereGeometry(ms, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2), mushroomCap);
            cap.position.set(mx, ms * 2, mz); this.scene.add(cap);
        }
        // Campfires
        for (let i = 0; i < 6; i++) {
            const fx = (Math.random() - 0.5) * S * 0.6, fz = (Math.random() - 0.5) * S * 0.6;
            if (!this.isWalkable(fx, fz, 1.5)) continue;
            for (let s = 0; s < 6; s++) {
                const sa = (s / 6) * Math.PI * 2;
                const stone = new THREE.Mesh(new THREE.SphereGeometry(0.15, 4, 3), rockMat);
                stone.position.set(fx + Math.cos(sa) * 0.5, 0.1, fz + Math.sin(sa) * 0.5); this.scene.add(stone);
            }
            const fire = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 5), new THREE.MeshBasicMaterial({ color: 0xff6600 }));
            fire.position.set(fx, 0.3, fz); this.scene.add(fire);
            this.scene.add(Object.assign(new THREE.PointLight(0xff6622, 0.8, 10), { position: new THREE.Vector3(fx, 1, fz) }));
        }
        // Ambient forest lights
        for (let x = -S / 2 + 12; x < S / 2; x += BS) for (let z = -S / 2 + 12; z < S / 2; z += BS) {
            this.scene.add(Object.assign(new THREE.PointLight(0xaaff66, 0.3, 12), { position: new THREE.Vector3(x + Math.random() * 4, 2, z + Math.random() * 4) }));
        }
    }

    isWalkable(x, z, radius = 0.5) {
        const half = this.size / 2;
        if (x < -half + 1 || x > half - 1 || z < -half + 1 || z > half - 1) return false;
        const testPoint = new THREE.Vector3(x, 1, z);
        const testSphere = new THREE.Sphere(testPoint, radius);
        for (const box of this.buildingBoxes) {
            if (box.intersectsSphere(testSphere)) return false;
        }
        return true;
    }

    // Check if position is on top of a building
    isOnBuilding(x, z) {
        for (const b of this.buildings) {
            if (x >= b.x - b.w / 2 && x <= b.x + b.w / 2 &&
                z >= b.z - b.d / 2 && z <= b.z + b.d / 2) {
                return b;
            }
        }
        return null;
    }

    // Find nearest building to climb
    getNearestClimbable(x, z, maxDist = 2.5) {
        let nearest = null, bestDist = maxDist;
        for (const b of this.buildings) {
            if (b.h < 2) continue; // too short to climb
            const cx = Math.max(b.x - b.w / 2, Math.min(x, b.x + b.w / 2));
            const cz = Math.max(b.z - b.d / 2, Math.min(z, b.z + b.d / 2));
            const d = Math.sqrt((x - cx) ** 2 + (z - cz) ** 2);
            if (d < bestDist) { bestDist = d; nearest = b; }
        }
        return nearest;
    }

    // Get vehicle spawn positions (open areas)
    getVehicleSpawns(count = 4) {
        const spawns = [];
        for (let i = 0; i < 500 && spawns.length < count; i++) {
            const x = (Math.random() - 0.5) * this.size * 0.7;
            const z = (Math.random() - 0.5) * this.size * 0.7;
            if (this.isWalkable(x, z, 2.0)) {
                let tooClose = false;
                for (const s of spawns) {
                    if (Math.sqrt((x - s.x) ** 2 + (z - s.z) ** 2) < 25) { tooClose = true; break; }
                }
                if (!tooClose) spawns.push({ x, z });
            }
        }
        return spawns;
    }

    getSpawnPoint() {
        for (let i = 0; i < 500; i++) {
            const x = (Math.random() - 0.5) * this.size * 0.6;
            const z = (Math.random() - 0.5) * this.size * 0.6;
            if (this.isWalkable(x, z, 0.6)) return { x, z };
        }
        return { x: 0, z: 0 };
    }

    getEnemySpawn(px, pz, minDist = 20) {
        for (let i = 0; i < 200; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = minDist + Math.random() * 20;
            const x = px + Math.cos(angle) * dist;
            const z = pz + Math.sin(angle) * dist;
            if (this.isWalkable(x, z, 0.6)) return { x, z };
        }
        return this.getSpawnPoint();
    }
}

// ===== 3D BULLET =====
class Bullet3D {
    constructor(scene, pos, dir, weapon, isEnemy = false) {
        this.speed = weapon.bulletSpeed || 1.2;
        this.dir = dir.clone().normalize();
        this.damage = weapon.damage;
        this.range = weapon.range / 20; // Scale to 3D world
        this.traveled = 0;
        this.alive = true;
        this.isEnemy = isEnemy;
        this.explosive = weapon.explosive || false;

        const geo = new THREE.SphereGeometry(isEnemy ? 0.06 : 0.04, 4, 4);
        const mat = new THREE.MeshBasicMaterial({ color: isEnemy ? 0xff4444 : 0xffcc00 });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.copy(pos);
        scene.add(this.mesh);

        // Trail
        const trailGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.3, 3);
        const trailMat = new THREE.MeshBasicMaterial({
            color: isEnemy ? 0xff2222 : 0xffaa00,
            transparent: true, opacity: 0.4
        });
        this.trail = new THREE.Mesh(trailGeo, trailMat);
        this.trail.position.copy(pos);
        scene.add(this.trail);
    }

    update() {
        const move = this.dir.clone().multiplyScalar(this.speed);
        this.mesh.position.add(move);
        this.traveled += this.speed;
        // Trail follows
        this.trail.position.copy(this.mesh.position).add(this.dir.clone().multiplyScalar(-0.15));
        this.trail.lookAt(this.mesh.position);
        if (this.traveled > this.range) this.alive = false;
    }

    destroy(scene) {
        scene.remove(this.mesh);
        scene.remove(this.trail);
    }
}

// ===== 3D THROWN BOMB =====
class Bomb3D {
    constructor(scene, startPos, targetPos, bombDef) {
        this.scene = scene;
        this.bombDef = bombDef;
        this.alive = true;
        this.exploded = false;
        this.flightTime = 0;
        this.totalFlight = 0.6; // seconds to reach target

        this.startPos = startPos.clone();
        this.targetPos = targetPos.clone();
        this.targetPos.y = 0;

        // Blocky grenade mesh
        const bodyGeo = new THREE.BoxGeometry(0.18, 0.25, 0.18);
        const colors = { frag: 0x3a5a2a, fire: 0xaa3300, flash: 0xdddddd, sticky: 0x444444 };
        const mat = new THREE.MeshLambertMaterial({ color: colors[bombDef.id] || 0x3a5a2a, flatShading: true });
        this.mesh = new THREE.Mesh(bodyGeo, mat);
        this.mesh.position.copy(startPos);
        this.mesh.position.y = 1.2;
        scene.add(this.mesh);

        // Pin / cap detail
        const capGeo = new THREE.BoxGeometry(0.08, 0.06, 0.08);
        const capMat = new THREE.MeshLambertMaterial({ color: 0x888888, flatShading: true });
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.y = 0.15;
        this.mesh.add(cap);
    }

    update(dt) {
        if (!this.alive) return;
        this.flightTime += dt / 1000;
        const t = Math.min(this.flightTime / this.totalFlight, 1);

        // Parabolic arc
        const x = this.startPos.x + (this.targetPos.x - this.startPos.x) * t;
        const z = this.startPos.z + (this.targetPos.z - this.startPos.z) * t;
        const y = 1.2 + Math.sin(t * Math.PI) * 4; // arc height
        this.mesh.position.set(x, y, z);
        this.mesh.rotation.x += 0.15;
        this.mesh.rotation.z += 0.1;

        if (t >= 1) {
            this.alive = false;
            this.exploded = true;
        }
    }

    getPosition() { return this.mesh.position; }

    destroy() {
        this.scene.remove(this.mesh);
    }
}

// ===== 3D EXPLOSION EFFECT =====
class Explosion3D {
    constructor(scene, pos, radius, bombId) {
        this.scene = scene;
        this.alive = true;
        this.timer = 0;
        this.duration = 600; // ms
        this.meshes = [];

        const colors = { frag: 0xff6600, fire: 0xff2200, flash: 0xffffff, sticky: 0xff8800 };
        const color = colors[bombId] || 0xff6600;

        // Core fireball
        const coreGeo = new THREE.SphereGeometry(radius * 0.3, 8, 8);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0.9 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.position.copy(pos); core.position.y = 0.5;
        scene.add(core);
        this.meshes.push(core);

        // Outer blast
        const outerGeo = new THREE.SphereGeometry(radius * 0.6, 8, 8);
        const outerMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 });
        const outer = new THREE.Mesh(outerGeo, outerMat);
        outer.position.copy(pos); outer.position.y = 0.3;
        scene.add(outer);
        this.meshes.push(outer);

        // Shockwave ring
        const ringGeo = new THREE.RingGeometry(radius * 0.2, radius * 0.8, 16);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.copy(pos); ring.position.y = 0.1;
        scene.add(ring);
        this.meshes.push(ring);

        // Blocky debris particles
        for (let i = 0; i < 12; i++) {
            const dGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
            const dMat = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? 0xff8800 : 0x444444,
                transparent: true, opacity: 0.8
            });
            const d = new THREE.Mesh(dGeo, dMat);
            d.position.copy(pos);
            d.position.y = 0.5 + Math.random();
            d.userData.vel = new THREE.Vector3(
                (Math.random() - 0.5) * 0.3,
                Math.random() * 0.2,
                (Math.random() - 0.5) * 0.3
            );
            scene.add(d);
            this.meshes.push(d);
        }
    }

    update(dt) {
        this.timer += dt;
        const progress = this.timer / this.duration;
        if (progress >= 1) { this.alive = false; return; }

        // Scale up then fade
        const scale = 1 + progress * 2;
        const opacity = Math.max(0, 1 - progress * 1.5);

        // Core & outer expand and fade
        if (this.meshes[0]) { this.meshes[0].scale.setScalar(scale); this.meshes[0].material.opacity = opacity; }
        if (this.meshes[1]) { this.meshes[1].scale.setScalar(scale * 1.2); this.meshes[1].material.opacity = opacity * 0.6; }
        // Ring expands
        if (this.meshes[2]) { this.meshes[2].scale.setScalar(1 + progress * 3); this.meshes[2].material.opacity = opacity * 0.4; }
        // Debris fly outward
        for (let i = 3; i < this.meshes.length; i++) {
            const d = this.meshes[i];
            d.position.add(d.userData.vel);
            d.userData.vel.y -= 0.008; // gravity
            d.rotation.x += 0.1; d.rotation.z += 0.08;
            d.material.opacity = opacity;
        }
    }

    destroy() {
        for (const m of this.meshes) this.scene.remove(m);
    }
}

// ===== 3D ENEMY =====
class Enemy3D {
    constructor(scene, x, z, level, hpMult, dmgMult, speedMult) {
        this.name = ENEMY_NAMES[Math.floor(Math.random() * ENEMY_NAMES.length)];
        this.alive = true;
        this.x = x;
        this.z = z;

        const types = ['soldier', 'heavy', 'fast'];
        this.type = types[Math.floor(Math.random() * types.length)];

        this.maxHp = Math.floor((30 + level * 5) * hpMult);
        this.damage = Math.floor(8 * dmgMult);
        this.speed = (0.04 + Math.random() * 0.015) * speedMult;
        this.range = 15 + Math.random() * 5;
        this.shootCooldown = 0;
        this.shootRate = 1500 + Math.random() * 1500;
        this.angle = Math.random() * Math.PI * 2;
        this.flashTimer = 0;
        this.state = 'patrol';
        this.patrolTarget = null;
        this.radius = 0.5;

        if (this.type === 'heavy') {
            this.maxHp *= 1.5; this.speed *= 0.7; this.damage *= 1.3; this.radius = 0.7;
        } else if (this.type === 'fast') {
            this.speed *= 1.5; this.maxHp *= 0.7; this.shootRate *= 1.3;
        }
        this.hp = this.maxHp;

        // Enemy appearance: varied skin tones + hostile clothing
        const skinTones = [0xc68642, 0xd2a679, 0x8d5524, 0xf1c27d, 0xb5651d];
        const enemyShirts = [0x4a2222, 0x3a3a22, 0x2a2a2a, 0x5a3a1a, 0x333322];
        this.mesh = CharacterBuilder.createHuman({
            skinColor: skinTones[Math.floor(Math.random() * skinTones.length)],
            shirtColor: enemyShirts[Math.floor(Math.random() * enemyShirts.length)],
            pantsColor: 0x2a2a1a,
            hairColor: [0x111111, 0x2a1a0a, 0x1a0a00][Math.floor(Math.random() * 3)],
            isEnemy: true,
            enemyType: this.type
        });
        this.mesh.position.set(x, 0, z);
        scene.add(this.mesh);

        // Name label sprite
        this.label = this._createLabel(this.name);
        this.label.position.set(x, 2.2, z);
        scene.add(this.label);

        // HP bar sprite
        this.hpBar = this._createHPBar();
        this.hpBar.position.set(x, 2.0, z);
        scene.add(this.hpBar);
    }

    _createLabel(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 256; canvas.height = 48;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ff4444';
        ctx.font = 'bold 22px Orbitron, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, 128, 30);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(1.8, 0.35, 1);
        return sprite;
    }

    _createHPBar() {
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 16;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, 128, 16);
        ctx.fillStyle = '#00ff88';
        ctx.fillRect(1, 1, 126, 14);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(1.2, 0.12, 1);
        sprite.userData.canvas = canvas;
        sprite.userData.texture = tex;
        return sprite;
    }

    _updateHPBar() {
        const canvas = this.hpBar.userData.canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 128, 16);
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, 128, 16);
        const ratio = this.hp / this.maxHp;
        const color = ratio > 0.5 ? '#00ff88' : ratio > 0.25 ? '#ffaa00' : '#ff2244';
        ctx.fillStyle = color;
        ctx.fillRect(1, 1, 126 * ratio, 14);
        this.hpBar.userData.texture.needsUpdate = true;
    }

    update(player, map, dt, scene, bullets) {
        if (!this.alive) return;

        const dx = player.x - this.x;
        const dz = player.z - this.z;
        const dist = Math.sqrt(dx * dx + dz * dz);

        if (this.flashTimer > 0) this.flashTimer -= dt;

        const seePlayer = dist < 35;
        const hpRatio = this.hp / this.maxHp;

        // Flee when hurt or player is close — enemies try to run away
        if (seePlayer && hpRatio < 0.5 && dist < 20) this.state = 'flee';
        else if (seePlayer && dist < 12) this.state = 'flee'; // run when too close
        else if (seePlayer && dist < this.range) this.state = 'attack';
        else if (seePlayer) this.state = 'flee'; // default: run away from hero
        else this.state = 'patrol';

        let mx = 0, mz = 0;
        let targetAngle = this.angle;

        if (this.state === 'flee') {
            // Run AWAY from player
            const fleeAngle = Math.atan2(-dx, -dz);
            // Add some zigzag to make it interesting
            const zigzag = Math.sin(performance.now() * 0.003 + this.x * 10) * 0.4;
            targetAngle = fleeAngle + zigzag;
            const fleeSpeed = this.speed * 1.4; // run faster when scared
            mx = Math.sin(targetAngle) * fleeSpeed;
            mz = Math.cos(targetAngle) * fleeSpeed;

            // Occasionally shoot back while fleeing (30% chance per cooldown)
            this.shootCooldown -= dt;
            if (this.shootCooldown <= 0 && dist < this.range * 1.5 && Math.random() < 0.3) {
                this.shootCooldown = this.shootRate * 1.5;
                const dir = new THREE.Vector3(dx, 0, dz).normalize();
                dir.x += (Math.random() - 0.5) * 0.25;
                dir.z += (Math.random() - 0.5) * 0.25;
                dir.normalize();
                const bulletPos = new THREE.Vector3(this.x, 1.1, this.z).add(dir.clone().multiplyScalar(0.5));
                bullets.push(new Bullet3D(scene, bulletPos, dir, {
                    damage: this.damage, range: this.range * 20, bulletSpeed: 0.5, explosive: false
                }, true));
                CharacterBuilder.applyRecoil(this.mesh);
            }
        } else if (this.state === 'attack') {
            targetAngle = Math.atan2(dx, dz);
            // Keep some distance while attacking
            if (dist < 8) {
                mx = (-dx / dist) * this.speed * 0.5;
                mz = (-dz / dist) * this.speed * 0.5;
            }
            this.shootCooldown -= dt;
            if (this.shootCooldown <= 0) {
                this.shootCooldown = this.shootRate;
                const dir = new THREE.Vector3(dx, 0, dz).normalize();
                dir.x += (Math.random() - 0.5) * 0.15;
                dir.z += (Math.random() - 0.5) * 0.15;
                dir.normalize();
                const bulletPos = new THREE.Vector3(this.x, 1.1, this.z).add(dir.clone().multiplyScalar(0.5));
                bullets.push(new Bullet3D(scene, bulletPos, dir, {
                    damage: this.damage, range: this.range * 20, bulletSpeed: 0.5, explosive: false
                }, true));
                CharacterBuilder.applyRecoil(this.mesh);
            }
        } else {
            // Patrol — wander randomly, looking nervous
            if (!this.patrolTarget || dist2D(this.x, this.z, this.patrolTarget.x, this.patrolTarget.z) < 1) {
                this.patrolTarget = {
                    x: this.x + (Math.random() - 0.5) * 20,
                    z: this.z + (Math.random() - 0.5) * 20
                };
            }
            const pdx = this.patrolTarget.x - this.x;
            const pdz = this.patrolTarget.z - this.z;
            const pdist = Math.sqrt(pdx * pdx + pdz * pdz);
            if (pdist > 0.5) {
                mx = (pdx / pdist) * this.speed * 0.7;
                mz = (pdz / pdist) * this.speed * 0.7;
                targetAngle = Math.atan2(pdx, pdz);
            }
        }

        // Smooth rotation — prevent snapping
        let aDiff = targetAngle - this.angle;
        aDiff = ((aDiff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
        if (Math.abs(aDiff) < 0.01) {
            this.angle = targetAngle;
        } else {
            this.angle += aDiff * 0.15;
        }
        this.angle = ((this.angle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

        const newX = this.x + mx;
        const newZ = this.z + mz;
        if (map.isWalkable(newX, this.z, this.radius)) this.x = newX;
        if (map.isWalkable(this.x, newZ, this.radius)) this.z = newZ;

        this.mesh.position.set(this.x, 0, this.z);
        this.label.position.set(this.x, 2.2, this.z);
        this.hpBar.position.set(this.x, 2.0, this.z);

        // Minecraft walk animation — enhanced with shooting pose
        const moving = (mx !== 0 || mz !== 0);
        const enemyShooting = (this.state === 'attack' && this.shootCooldown > this.shootRate * 0.8);
        CharacterBuilder.animateWalk(this.mesh, dt, moving, enemyShooting);
        const bob = this.mesh.userData._bodyBob || 0;
        this.mesh.position.y = bob;

        // Set final rotation AFTER animation — clean Y-axis only
        this.mesh.rotation.set(0, this.angle, 0);
    }

    takeDamage(dmg) {
        this.hp -= dmg;
        this.flashTimer = 150;
        this._updateHPBar();
        // Flash white
        this.mesh.traverse(child => {
            if (child.isMesh && child.material) {
                child.userData.origColor = child.userData.origColor || child.material.color.getHex();
                child.material.color.setHex(0xffffff);
            }
        });
        setTimeout(() => {
            if (!this.alive) return;
            this.mesh.traverse(child => {
                if (child.isMesh && child.userData.origColor !== undefined) {
                    child.material.color.setHex(child.userData.origColor);
                }
            });
        }, 100);
        if (this.hp <= 0) { this.hp = 0; this.alive = false; }
    }

    destroy(scene) {
        scene.remove(this.mesh);
        scene.remove(this.label);
        scene.remove(this.hpBar);
    }
}

// ===== 3D VEHICLE =====
class Vehicle3D {
    constructor(scene, x, z, type) {
        this.scene = scene;
        this.x = x; this.z = z;
        this.type = type; // 'jeep' or 'car'
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0;
        this.maxSpeed = type === 'car' ? 0.35 : 0.22;
        this.accel = type === 'car' ? 0.012 : 0.008;
        this.turnSpeed = type === 'car' ? 0.04 : 0.035;
        this.occupied = false;
        this.radius = 1.2;
        this.hp = type === 'car' ? 80 : 150;
        this.maxHp = this.hp;

        this.mesh = this._createMesh();
        this.mesh.position.set(x, 0, z);
        this.mesh.rotation.y = this.angle;
        scene.add(this.mesh);

        // Interaction prompt
        this.prompt = this._createPrompt();
        this.prompt.position.set(x, 3, z);
        this.prompt.visible = false;
        scene.add(this.prompt);
    }

    _createMesh() {
        const g = new THREE.Group();
        if (this.type === 'jeep') {
            // Jeep body
            const bodyMat = new THREE.MeshLambertMaterial({ color: 0x3a5a2a, flatShading: true });
            const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 3.2), bodyMat);
            body.position.y = 0.6; body.castShadow = true; g.add(body);
            // Cabin
            const cabinMat = new THREE.MeshLambertMaterial({ color: 0x2a4a1a, flatShading: true });
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 1.4), cabinMat);
            cabin.position.set(0, 1.35, -0.4); cabin.castShadow = true; g.add(cabin);
            // Windshield
            const glassMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
            const ws = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 0.06), glassMat);
            ws.position.set(0, 1.3, 0.27); g.add(ws);
            // Wheels
            const wheelMat = new THREE.MeshLambertMaterial({ color: 0x222222, flatShading: true });
            [[-0.9, 0.3, 1.1], [0.9, 0.3, 1.1], [-0.9, 0.3, -1.1], [0.9, 0.3, -1.1]].forEach(p => {
                const w = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 8), wheelMat);
                w.rotation.z = Math.PI / 2; w.position.set(...p); w.castShadow = true; g.add(w);
            });
            // Headlights
            const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffaa });
            [-0.6, 0.6].forEach(x => {
                const hl = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.06), hlMat);
                hl.position.set(x, 0.7, 1.63); g.add(hl);
            });
            // Roll bar
            const barMat = new THREE.MeshLambertMaterial({ color: 0x444444, flatShading: true });
            [-0.75, 0.75].forEach(x => {
                const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.08), barMat);
                bar.position.set(x, 1.4, -0.9); g.add(bar);
            });
            const topBar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.08), barMat);
            topBar.position.set(0, 1.8, -0.9); g.add(topBar);
        } else {
            // Sports car
            const bodyMat = new THREE.MeshLambertMaterial({ color: 0xcc2222, flatShading: true });
            const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 3.4), bodyMat);
            body.position.y = 0.45; body.castShadow = true; g.add(body);
            // Hood slope
            const hood = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 1.2), bodyMat);
            hood.position.set(0, 0.55, 1.0); g.add(hood);
            // Cabin
            const cabinMat = new THREE.MeshLambertMaterial({ color: 0x991111, flatShading: true });
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.0), cabinMat);
            cabin.position.set(0, 0.95, -0.3); cabin.castShadow = true; g.add(cabin);
            // Windshield
            const glassMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
            const ws = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.4, 0.06), glassMat);
            ws.position.set(0, 0.95, 0.17); g.add(ws);
            // Rear window
            const rw = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.06), glassMat);
            rw.position.set(0, 0.9, -0.77); g.add(rw);
            // Wheels
            const wheelMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a, flatShading: true });
            [[-0.85, 0.25, 1.2], [0.85, 0.25, 1.2], [-0.85, 0.25, -1.2], [0.85, 0.25, -1.2]].forEach(p => {
                const w = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.18, 8), wheelMat);
                w.rotation.z = Math.PI / 2; w.position.set(...p); w.castShadow = true; g.add(w);
            });
            // Headlights
            const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            [-0.55, 0.55].forEach(x => {
                const hl = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 0.06), hlMat);
                hl.position.set(x, 0.5, 1.73); g.add(hl);
            });
            // Tail lights
            const tlMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            [-0.55, 0.55].forEach(x => {
                const tl = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.06), tlMat);
                tl.position.set(x, 0.45, -1.73); g.add(tl);
            });
            // Spoiler
            const spoilerMat = new THREE.MeshLambertMaterial({ color: 0x222222, flatShading: true });
            [-0.6, 0.6].forEach(x => {
                const post = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.3, 0.06), spoilerMat);
                post.position.set(x, 0.85, -1.5); g.add(post);
            });
            const wing = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.3), spoilerMat);
            wing.position.set(0, 1.0, -1.5); g.add(wing);
        }
        return g;
    }

    _createPrompt() {
        const canvas = document.createElement('canvas');
        canvas.width = 256; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00ff88';
        ctx.font = 'bold 24px Orbitron, Arial';
        ctx.textAlign = 'center';
        ctx.fillText('[E] ENTER ' + this.type.toUpperCase(), 128, 40);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(2.5, 0.6, 1);
        return sprite;
    }

    update(playerX, playerZ, dt) {
        if (this.occupied) {
            this.mesh.position.set(this.x, 0, this.z);
            this.mesh.rotation.y = this.angle;
            this.prompt.visible = false;
        } else {
            const d = dist2D(playerX, playerZ, this.x, this.z);
            this.prompt.visible = d < 3.5;
            this.prompt.position.set(this.x, 3, this.z);
        }
    }

    drive(keys, dt, map) {
        const dtScale = dt / 16.667;
        const forward = keys.w || keys.arrowup;
        const backward = keys.s || keys.arrowdown;
        const left = keys.a || keys.arrowleft;
        const right = keys.d || keys.arrowright;

        if (forward) this.speed = Math.min(this.speed + this.accel * dtScale, this.maxSpeed);
        else if (backward) this.speed = Math.max(this.speed - this.accel * 1.5 * dtScale, -this.maxSpeed * 0.4);
        else this.speed *= 0.96; // friction

        if (Math.abs(this.speed) < 0.001) this.speed = 0;

        if (left) this.angle += this.turnSpeed * dtScale * (this.speed > 0 ? 1 : this.speed < 0 ? -1 : 0);
        if (right) this.angle -= this.turnSpeed * dtScale * (this.speed > 0 ? 1 : this.speed < 0 ? -1 : 0);

        const newX = this.x + Math.sin(this.angle) * this.speed * dtScale;
        const newZ = this.z + Math.cos(this.angle) * this.speed * dtScale;

        if (map.isWalkable(newX, this.z, this.radius)) this.x = newX;
        else this.speed *= -0.3;
        if (map.isWalkable(this.x, newZ, this.radius)) this.z = newZ;
        else this.speed *= -0.3;

        const half = map.size / 2 - 2;
        this.x = Math.max(-half, Math.min(half, this.x));
        this.z = Math.max(-half, Math.min(half, this.z));

        this.mesh.position.set(this.x, 0, this.z);
        this.mesh.rotation.y = this.angle;
    }

    destroy() {
        this.scene.remove(this.mesh);
        this.scene.remove(this.prompt);
    }
}

// ===== 3D PARACHUTE =====
class Parachute3D {
    constructor(scene) {
        this.scene = scene;
        this.active = false;
        this.mesh = this._create();
        this.mesh.visible = false;
        scene.add(this.mesh);
    }

    _create() {
        const g = new THREE.Group();
        // Canopy — dome shape using half sphere
        const canopyMat = new THREE.MeshLambertMaterial({ color: 0xff6600, flatShading: true, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
        const canopy = new THREE.Mesh(new THREE.SphereGeometry(1.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), canopyMat);
        canopy.position.y = 3.5;
        canopy.scale.set(1, 0.5, 1);
        g.add(canopy);
        // Stripes
        const stripeMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, side: THREE.DoubleSide, transparent: true, opacity: 0.7 });
        const stripe = new THREE.Mesh(new THREE.SphereGeometry(1.52, 8, 6, Math.PI / 4, Math.PI / 4, 0, Math.PI / 2), stripeMat);
        stripe.position.y = 3.5;
        stripe.scale.set(1, 0.5, 1);
        g.add(stripe);
        // Cords
        const cordMat = new THREE.MeshBasicMaterial({ color: 0x888888 });
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const cordGeo = new THREE.CylinderGeometry(0.015, 0.015, 3.2, 3);
            const cord = new THREE.Mesh(cordGeo, cordMat);
            const topX = Math.sin(angle) * 1.2;
            const topZ = Math.cos(angle) * 1.2;
            cord.position.set(topX / 2, 2.0, topZ / 2);
            cord.lookAt(new THREE.Vector3(0, 0.5, 0));
            cord.rotateX(Math.PI / 2);
            g.add(cord);
        }
        return g;
    }

    deploy(x, y, z) {
        this.active = true;
        this.mesh.visible = true;
        this.mesh.position.set(x, y, z);
    }

    updatePosition(x, y, z) {
        if (!this.active) return;
        this.mesh.position.set(x, y, z);
        this.mesh.rotation.y += 0.005; // slow spin
    }

    retract() {
        this.active = false;
        this.mesh.visible = false;
    }

    destroy() {
        this.scene.remove(this.mesh);
    }
}

// ===== CONFETTI EFFECT =====
class ConfettiEffect {
    constructor(scene, pos) {
        this.scene = scene;
        this.particles = [];
        this.timer = 0;
        this.duration = 4000;
        this.alive = true;
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xffa500, 0xffd700];
        for (let i = 0; i < 60; i++) {
            const geo = new THREE.BoxGeometry(0.08, 0.08, 0.02);
            const mat = new THREE.MeshBasicMaterial({ color: colors[Math.floor(Math.random() * colors.length)], transparent: true });
            const p = new THREE.Mesh(geo, mat);
            p.position.copy(pos);
            p.position.y += 2;
            p.userData.vel = new THREE.Vector3(
                (Math.random() - 0.5) * 0.15,
                0.08 + Math.random() * 0.12,
                (Math.random() - 0.5) * 0.15
            );
            p.userData.rotSpeed = new THREE.Vector3(
                Math.random() * 0.2, Math.random() * 0.2, Math.random() * 0.2
            );
            scene.add(p);
            this.particles.push(p);
        }
    }

    update(dt) {
        this.timer += dt;
        if (this.timer > this.duration) { this.alive = false; return; }
        const progress = this.timer / this.duration;
        for (const p of this.particles) {
            p.position.add(p.userData.vel);
            p.userData.vel.y -= 0.003; // gravity
            p.rotation.x += p.userData.rotSpeed.x;
            p.rotation.y += p.userData.rotSpeed.y;
            p.rotation.z += p.userData.rotSpeed.z;
            p.material.opacity = Math.max(0, 1 - progress);
        }
    }

    destroy() {
        for (const p of this.particles) this.scene.remove(p);
    }
}

// ===== 3D PICKUP =====
class Pickup3D {
    constructor(scene, x, z, type) {
        this.x = x; this.z = z; this.type = type;
        this.alive = true; this.radius = 0.6;
        this.bobOffset = Math.random() * Math.PI * 2;

        let color;
        switch (type) {
            case 'health': color = 0x00ff88; break;
            case 'ammo': color = 0xffaa00; break;
            case 'coin': color = 0xffd700; break;
        }
        const geo = type === 'coin'
            ? new THREE.CylinderGeometry(0.2, 0.2, 0.05, 12)
            : new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const mat = new THREE.MeshBasicMaterial({ color });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, 0.5, z);
        scene.add(this.mesh);

        // Glow
        const glowGeo = new THREE.SphereGeometry(0.4, 8, 8);
        const glowMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.15 });
        this.glow = new THREE.Mesh(glowGeo, glowMat);
        this.glow.position.copy(this.mesh.position);
        scene.add(this.glow);
    }

    update() {
        const bob = Math.sin(Date.now() * 0.003 + this.bobOffset) * 0.15;
        this.mesh.position.y = 0.5 + bob;
        this.mesh.rotation.y += 0.02;
        this.glow.position.y = this.mesh.position.y;
    }

    destroy(scene) {
        scene.remove(this.mesh);
        scene.remove(this.glow);
    }
}

// ===== 3D PLAYER =====
class Player3D {
    constructor(hero, weapon, map, scene) {
        this.hero = hero;
        this.weaponDef = weapon;
        this.weaponLevel = weapon.level || 1;
        this.scene = scene;

        const spawn = map.getSpawnPoint();
        this.x = spawn.x; this.z = spawn.z;
        this.y = 0; // height for climbing/parachute
        this.angle = 0;
        this.radius = 0.5;

        const statMult = hero.stats;
        this.maxHp = Math.floor(100 * (statMult.health / 80));
        this.hp = this.maxHp;
        this.speed = 0.08 * (statMult.speed / 80);

        this.ammo = weapon.magSize;
        this.maxAmmo = weapon.magSize;
        this.reloading = false;
        this.reloadTimer = 0;
        this.shootCooldown = 0;

        // Movement: WASD + Arrow keys; Shoot: mouse-click or F key
        this.keys = { w: false, a: false, s: false, d: false, arrowup: false, arrowdown: false, arrowleft: false, arrowright: false };
        this.shooting = false;
        this.flashTimer = 0;
        this.bombCooldown = 0;

        // Vehicle state
        this.inVehicle = false;
        this.currentVehicle = null;

        // Climbing state
        this.climbing = false;
        this.climbTarget = null; // building being climbed
        this.onRooftop = false;
        this.rooftopHeight = 0;

        // Parachute state
        this.parachuting = false;
        this.parachuteY = 0; // current Y while floating down

        // 3D model — hero gets unique cape, visor, shoulder pads
        this.mesh = CharacterBuilder.createHuman({
            skinColor: hero.skinColor,
            shirtColor: hero.shirtColor,
            pantsColor: hero.pantsColor,
            hairColor: 0x111111,
            isEnemy: false,
            isHero: true,
            heroColor: parseInt(hero.color.replace('#', ''), 16)
        });
        this.mesh.position.set(this.x, 0, this.z);
        scene.add(this.mesh);

        // Muzzle flash — attach to gun on right arm
        this.muzzleFlash = CharacterBuilder.createMuzzleFlash();
        this.muzzleFlash.position.set(0, -0.55, 0.55);
        if (this.mesh.userData.rightArm) {
            this.mesh.userData.rightArm.add(this.muzzleFlash);
        } else {
            this.muzzleFlash.position.set(0.3, 1.1, 0.5);
            this.mesh.add(this.muzzleFlash);
        }

        // Name label
        this.label = this._createLabel(hero.name, hero.color);
        this.label.position.set(this.x, 2.3, this.z);
        scene.add(this.label);
    }

    _createLabel(text, color) {
        const canvas = document.createElement('canvas');
        canvas.width = 256; canvas.height = 48;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.font = 'bold 20px Orbitron, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, 128, 30);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(1.8, 0.35, 1);
        return sprite;
    }

    getEffectiveWeapon() {
        const w = { ...this.weaponDef };
        const lvl = this.weaponLevel;
        w.damage = Math.floor(w.damage * (1 + (lvl - 1) * 0.15));
        w.magSize = Math.floor(w.magSize * (1 + (lvl - 1) * 0.1));
        w.range = Math.floor(w.range * (1 + (lvl - 1) * 0.05));
        return w;
    }

    update(map, dt, bullets, aimAngle) {
        const dtScale = dt / 16.667; // 1.0 at 60fps

        // Skip normal movement if in vehicle
        if (this.inVehicle) {
            // Position follows vehicle
            this.mesh.visible = false;
            this.label.visible = false;
            return;
        }
        this.mesh.visible = true;
        this.label.visible = true;

        // Parachute floating
        if (this.parachuting) {
            let mx = 0, mz = 0;
            if (this.keys.w || this.keys.arrowup) mz += 1;
            if (this.keys.s || this.keys.arrowdown) mz -= 1;
            if (this.keys.a || this.keys.arrowleft) mx -= 1;
            if (this.keys.d || this.keys.arrowright) mx += 1;
            if (mx !== 0 || mz !== 0) {
                const len = Math.sqrt(mx * mx + mz * mz);
                mx /= len; mz /= len;
                const sinA = Math.sin(aimAngle), cosA = Math.cos(aimAngle);
                mx = (mx * cosA + mz * sinA) * this.speed * 0.6 * dtScale;
                mz = (-mx * sinA + mz * cosA) * this.speed * 0.6 * dtScale;
            }
            this.x += mx; this.z += mz;
            this.y -= 0.04 * dtScale; // descend slowly
            if (this.y <= 0) {
                this.y = 0;
                this.parachuting = false;
                this.onRooftop = false;
            }
            this.angle = aimAngle;
            this.mesh.position.set(this.x, this.y, this.z);
            this.label.position.set(this.x, this.y + 2.3, this.z);
            this.mesh.rotation.set(0, this.angle, 0);
            if (this.flashTimer > 0) this.flashTimer -= dt;
            if (this.bombCooldown > 0) this.bombCooldown -= dt;
            return;
        }

        // Climbing animation
        if (this.climbing && this.climbTarget) {
            this.y += 0.08 * dtScale;
            if (this.y >= this.climbTarget.h) {
                this.y = this.climbTarget.h;
                this.climbing = false;
                this.onRooftop = true;
                this.rooftopHeight = this.climbTarget.h;
            }
            this.mesh.position.set(this.x, this.y, this.z);
            this.label.position.set(this.x, this.y + 2.3, this.z);
            CharacterBuilder.animateWalk(this.mesh, dt, true, false);
            this.mesh.rotation.set(0, this.angle, 0);
            return;
        }

        let mx = 0, mz = 0;
        if (this.keys.w || this.keys.arrowup) mz += 1;    // forward
        if (this.keys.s || this.keys.arrowdown) mz -= 1;  // backward
        if (this.keys.a || this.keys.arrowleft) mx -= 1;  // strafe left
        if (this.keys.d || this.keys.arrowright) mx += 1;  // strafe right

        const isMoving = (mx !== 0 || mz !== 0);

        if (isMoving) {
            const len = Math.sqrt(mx * mx + mz * mz);
            mx /= len;
            mz /= len;

            // Rotate movement relative to facing direction (aimAngle)
            const sinA = Math.sin(aimAngle);
            const cosA = Math.cos(aimAngle);
            const relX = mx * cosA + mz * sinA;
            const relZ = -mx * sinA + mz * cosA;

            mx = relX * this.speed * dtScale;
            mz = relZ * this.speed * dtScale;
        }

        // On rooftop: check if walking off edge
        if (this.onRooftop) {
            const newX = this.x + mx;
            const newZ = this.z + mz;
            // Check if still on the rooftop building
            const onBuilding = map.isOnBuilding(newX, newZ);
            if (onBuilding) {
                this.x = newX; this.z = newZ;
            } else {
                // Walked off edge — start falling/parachute opportunity
                this.onRooftop = false;
                this.x = newX; this.z = newZ;
                // Auto-trigger parachute when falling from building
                this.parachuting = true;
            }
        } else {
            const newX = this.x + mx;
            const newZ = this.z + mz;
            if (map.isWalkable(newX, this.z, this.radius)) this.x = newX;
            if (map.isWalkable(this.x, newZ, this.radius)) this.z = newZ;
        }

        const half = map.size / 2 - 1;
        this.x = Math.max(-half, Math.min(half, this.x));
        this.z = Math.max(-half, Math.min(half, this.z));

        // Hero always faces aim direction
        this.angle = aimAngle;
        this.angle = ((this.angle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

        this.mesh.position.x = this.x;
        this.mesh.position.y = this.y;
        this.mesh.position.z = this.z;
        this.label.position.set(this.x, this.y + 2.3, this.z);

        // Walk animation
        const moving = (mx !== 0 || mz !== 0);
        CharacterBuilder.animateWalk(this.mesh, dt, moving, this.shooting);
        const bob = this.mesh.userData._bodyBob || 0;
        this.mesh.position.y = this.y + bob;

        // Set final rotation AFTER animation
        this.mesh.rotation.set(0, this.angle, 0);

        // Reload
        if (this.reloading) {
            this.reloadTimer -= dt;
            if (this.reloadTimer <= 0) {
                this.reloading = false;
                const w = this.getEffectiveWeapon();
                this.ammo = w.magSize;
                this.maxAmmo = w.magSize;
            }
        }

        // Shoot
        this.shootCooldown -= dt;
        if (this.shooting && !this.reloading && this.ammo > 0 && this.shootCooldown <= 0) {
            const w = this.getEffectiveWeapon();
            this.shootCooldown = w.fireRate;
            const pellets = w.pellets || 1;
            for (let p = 0; p < pellets; p++) {
                const spread = (Math.random() - 0.5) * w.spread;
                const accMult = 1 - (this.hero.stats.accuracy - 70) / 200;
                const dir = new THREE.Vector3(
                    Math.sin(this.angle + spread * accMult), 0,
                    Math.cos(this.angle + spread * accMult)
                ).normalize();
                const bulletPos = new THREE.Vector3(this.x, this.y + 1.1, this.z).add(dir.clone().multiplyScalar(0.6));
                bullets.push(new Bullet3D(this.scene, bulletPos, dir, w));
            }
            this.ammo--;
            audio.playShoot(w.type);
            this.showMuzzleFlash();
            if (this.ammo <= 0) this.startReload();
        }

        if (this.flashTimer > 0) this.flashTimer -= dt;
        if (this.bombCooldown > 0) this.bombCooldown -= dt;
    }

    showMuzzleFlash() {
        this.muzzleFlash.visible = true;
        setTimeout(() => { this.muzzleFlash.visible = false; }, 60);
        CharacterBuilder.applyRecoil(this.mesh);
    }

    startReload() {
        if (this.reloading) return;
        const w = this.getEffectiveWeapon();
        if (this.ammo >= w.magSize) return;
        this.reloading = true;
        this.reloadTimer = this.weaponDef.reloadTime;
        audio.playReload();
    }

    takeDamage(dmg) {
        this.hp -= dmg;
        this.flashTimer = 200;
        if (this.hp < 0) this.hp = 0;
        // Flash
        this.mesh.traverse(child => {
            if (child.isMesh && child.material) {
                child.userData.origColor = child.userData.origColor || child.material.color.getHex();
                child.material.color.setHex(0xff0000);
            }
        });
        setTimeout(() => {
            this.mesh.traverse(child => {
                if (child.isMesh && child.userData.origColor !== undefined) {
                    child.material.color.setHex(child.userData.origColor);
                }
            });
        }, 120);
    }

    destroy(scene) {
        scene.remove(this.mesh);
        scene.remove(this.label);
    }
}

// ===== MAIN 3D GAME =====
class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.miniCanvas = document.getElementById('minimap-canvas');
        this.miniCtx = this.miniCanvas.getContext('2d');
        this.miniCanvas.width = 160;
        this.miniCanvas.height = 160;

        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.running = false;
        this.paused = false;
        this.currentLevel = null;
        this.wave = 0;
        this.enemies = [];
        this.bullets = [];
        this.bombs = [];
        this.explosions = [];
        this.pickups = [];
        this.player = null;
        this.map = null;
        this.score = 0;
        this.kills = 0;
        this.totalSpawned = 0;
        this.waveDelay = 0;
        this.gameTime = 0;
        this.coinsEarned = 0;
        this.lastTime = 0;
        this.killFeedTimer = 0;

        // Camera system
        this.cameraMode = 'tps'; // 'tps', 'fps', 'top'
        this.mouseX = 0;
        this.mouseY = 0;
        this._rawMouseX = window.innerWidth / 2;
        this._rawMouseY = window.innerHeight / 2;
        this.aimAngle = 0;

        // Scope zoom
        this.scoped = false;
        this.scopeZoom = 2;
        this.defaultFov = 60;

        // Screen shake
        this._shakeIntensity = 0;

        // Raycaster for aim
        this.raycaster = new THREE.Raycaster();
        this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    }

    initRenderer() {
        if (this.renderer) return;
        const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: !isMobile,
            powerPreference: isMobile ? 'high-performance' : 'default'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        this.renderer.shadowMap.enabled = !isMobile;
        if (!isMobile) this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0x0a0a15);
        const onResize = () => {
            if (!this.renderer) return;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            if (this.camera) {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
            }
        };
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', () => setTimeout(onResize, 150));
    }

    start(levelNum) {
        this.initRenderer();
        this.currentLevel = LEVELS[levelNum - 1];
        this.scene = new THREE.Scene();

        const theme = state.theme;
        this.scene.fog = new THREE.FogExp2(theme.fogColor, theme.fogDensity);

        // Camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
        this.cameraMode = 'tps';
        this.updateCameraBtnState();

        // Lighting
        const ambientLight = new THREE.AmbientLight(theme.ambientColor, theme.ambientIntensity);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(theme.dirColor, theme.dirIntensity);
        dirLight.position.set(30, 50, 20);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 120;
        dirLight.shadow.camera.left = -60;
        dirLight.shadow.camera.right = 60;
        dirLight.shadow.camera.top = 60;
        dirLight.shadow.camera.bottom = -60;
        this.scene.add(dirLight);

        // Moon/sky light
        const moonLight = new THREE.DirectionalLight(theme.moonColor, theme.moonIntensity);
        moonLight.position.set(-20, 40, -30);
        this.scene.add(moonLight);

        // Skybox — gradient sphere
        const skyGeo = new THREE.SphereGeometry(100, 16, 16);
        const sb = theme.skyBottom, st = theme.skyTop;
        const starsOn = theme.starsEnabled ? 1.0 : 0.0;
        const skyMat = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            uniforms: {
                bottomColor: { value: new THREE.Vector3(sb[0], sb[1], sb[2]) },
                topColor: { value: new THREE.Vector3(st[0], st[1], st[2]) },
                starsEnabled: { value: starsOn }
            },
            vertexShader: `varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPos.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
            fragmentShader: `uniform vec3 bottomColor;
                uniform vec3 topColor;
                uniform float starsEnabled;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition).y;
                    vec3 color = mix(bottomColor, topColor, max(h, 0.0));
                    float star = step(0.998, fract(sin(dot(vWorldPosition.xz * 50.0, vec2(12.9898, 78.233))) * 43758.5453));
                    color += vec3(star * 0.6) * step(0.1, h) * starsEnabled;
                    gl_FragColor = vec4(color, 1.0);
                }`
        });
        this.scene.add(new THREE.Mesh(skyGeo, skyMat));

        // Map
        this.map = new CityMap3D(this.scene, theme);

        // Player
        this.player = new Player3D(state.hero, state.weapon, this.map, this.scene);

        // Allocate level bombs
        const lvlBombs = this.currentLevel.bombs;
        if (lvlBombs) {
            this._levelBombs = { ...lvlBombs };
            for (const [id, count] of Object.entries(lvlBombs)) {
                state.data.bombs[id] = (state.data.bombs[id] || 0) + count;
            }
            state.save();
        }

        // Reset state
        this.enemies = [];
        this.bullets = [];
        this.bombs = [];
        this.explosions = [];
        this.pickups = [];
        this.score = 0;
        this.kills = 0;
        this.killedEnemies = [];
        this.wave = 0;
        this.waveDelay = 0;
        this.totalSpawned = 0;
        this.gameTime = 0;
        this.coinsEarned = 0;
        this.paused = false;
        this.running = true;
        this.lastTime = performance.now();
        this._lastKillCount = 0;
        this._fpsFrames = 0;
        this._fpsLast = 0;
        this._fpsEl = document.getElementById('fps-counter');
        this._comboEl = document.getElementById('combo-display');

        // Combo / streak system
        this.comboCount = 0;
        this.comboTimer = 0;
        this.bestCombo = 0;
        this.killStreak = 0;
        this.achievements = [];

        this.bindInput();
        this.spawnWave();
        audio.playGameMusic();
        this.loop();
    }

    stop() {
        this.running = false;
        this.unbindInput();
        audio.stopMusic();
        // Cleanup
        if (this.scene) {
            while (this.scene.children.length > 0) {
                this.scene.remove(this.scene.children[0]);
            }
        }
    }

    setCameraMode(mode) {
        this.cameraMode = mode;
        this.updateCameraBtnState();
        // Show/hide player mesh in FPS
        if (this.player) {
            this.player.mesh.visible = mode !== 'fps';
            this.player.label.visible = mode !== 'fps';
        }
    }

    updateCameraBtnState() {
        document.querySelectorAll('.cam-btn').forEach(b => b.classList.remove('active'));
        const id = { tps: 'btn-cam-tps', fps: 'btn-cam-fps', top: 'btn-cam-top' }[this.cameraMode];
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    }

    bindInput() {
        this._onKeyDown = (e) => {
            const k = e.key.toLowerCase();
            // Arrow keys mapped to movement
            if (k === 'arrowup' || k === 'arrowdown' || k === 'arrowleft' || k === 'arrowright') {
                e.preventDefault();
                this.player.keys[k] = true;
            }
            if (k in this.player.keys) this.player.keys[k] = true;
            if (k === 'r') this.player.startReload();
            if (k === 'g') this.throwBomb();
            if (k === 'escape') this.togglePause();
            // F key = shoot (toggle on)
            if (k === 'f') this.player.shooting = true;
            if (k === 'v') {
                const modes = ['tps', 'fps', 'top'];
                const idx = (modes.indexOf(this.cameraMode) + 1) % modes.length;
                this.setCameraMode(modes[idx]);
            }
        };
        this._onKeyUp = (e) => {
            const k = e.key.toLowerCase();
            if (k in this.player.keys) this.player.keys[k] = false;
            if (k === 'f') this.player.shooting = false;
        };
        this._onMouseMove = (e) => {
            // Smooth mouse position — prevents micro-jitter from high-DPI mice
            const targetMX = (e.clientX / window.innerWidth) * 2 - 1;
            const targetMY = -(e.clientY / window.innerHeight) * 2 + 1;
            // Light smoothing: 70% new + 30% old
            this.mouseX = this.mouseX * 0.3 + targetMX * 0.7;
            this.mouseY = this.mouseY * 0.3 + targetMY * 0.7;
            this._rawMouseX = e.clientX;
            this._rawMouseY = e.clientY;
        };
        this._onMouseDown = (e) => {
            if (e.button === 0) this.player.shooting = true;
            if (e.button === 2) this.toggleScope(true);
        };
        this._onMouseUp = (e) => {
            if (e.button === 0) this.player.shooting = false;
            if (e.button === 2) this.toggleScope(false);
        };
        this._onContext = (e) => e.preventDefault();

        document.addEventListener('keydown', this._onKeyDown);
        document.addEventListener('keyup', this._onKeyUp);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('mousedown', this._onMouseDown);
        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('contextmenu', this._onContext);

        // Camera buttons
        document.getElementById('btn-cam-tps').addEventListener('click', () => this.setCameraMode('tps'));
        document.getElementById('btn-cam-fps').addEventListener('click', () => this.setCameraMode('fps'));
        document.getElementById('btn-cam-top').addEventListener('click', () => this.setCameraMode('top'));

        // ===== MOBILE TOUCH CONTROLS =====
        this.isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        this._joystickActive = false;
        this._joystickTouchId = null;
        this._aimTouchId = null;
        this._lastAimX = 0;
        this._lastAimY = 0;

        if (this.isMobile) {
            this._setupMobileControls();
        }
    }

    _setupMobileControls() {
        const joystickZone = document.getElementById('joystick-zone');
        const joystickBase = document.getElementById('joystick-base');
        const joystickThumb = document.getElementById('joystick-thumb');
        const aimZone = document.getElementById('mobile-aim-zone');
        const baseRect = () => joystickBase.getBoundingClientRect();
        const baseRadius = 60;
        const thumbRadius = 23;

        // --- JOYSTICK: movement + auto-rotate toward movement ---
        const onJoystickMove = (cx, cy) => {
            const r = baseRect();
            const centerX = r.left + r.width / 2;
            const centerY = r.top + r.height / 2;
            let dx = cx - centerX;
            let dy = cy - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = baseRadius - thumbRadius;
            if (dist > maxDist) { dx = (dx / dist) * maxDist; dy = (dy / dist) * maxDist; }
            joystickThumb.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
            joystickThumb.classList.add('active');

            const normX = dx / maxDist;
            const normY = dy / maxDist;
            const deadZone = 0.25;

            // Set movement keys
            this.player.keys.arrowleft = normX < -deadZone;
            this.player.keys.arrowright = normX > deadZone;
            this.player.keys.arrowup = normY < -deadZone;
            this.player.keys.arrowdown = normY > deadZone;
            this.player.keys.a = normX < -deadZone;
            this.player.keys.d = normX > deadZone;
            this.player.keys.w = normY < -deadZone;

            // Auto-rotate aim toward joystick direction when no aim touch active
            if (this._aimTouchId === null && (Math.abs(normX) > deadZone || Math.abs(normY) > deadZone)) {
                // Convert joystick direction to world angle relative to current aim
                // Screen up (-Y) = forward along aimAngle, screen right (+X) = right of aimAngle
                const moveAngle = Math.atan2(normX, -normY); // screen coords to angle
                const worldAngle = this.aimAngle + moveAngle;
                // Lerp aim toward movement direction
                let diff = worldAngle - this.aimAngle;
                diff = ((diff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
                this.aimAngle += diff * 0.15;
                this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
            }
        };

        const resetJoystick = () => {
            joystickThumb.style.transform = 'translate(-50%, -50%)';
            joystickThumb.classList.remove('active');
            this.player.keys.arrowleft = false;
            this.player.keys.arrowright = false;
            this.player.keys.arrowup = false;
            this.player.keys.arrowdown = false;
            this.player.keys.w = false;
            this.player.keys.a = false;
            this.player.keys.d = false;
            this._joystickActive = false;
            this._joystickTouchId = null;
        };

        joystickZone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this._joystickTouchId !== null) return;
            const t = e.changedTouches[0];
            this._joystickTouchId = t.identifier;
            this._joystickActive = true;
            onJoystickMove(t.clientX, t.clientY);
        }, { passive: false });

        joystickZone.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (const t of e.changedTouches) {
                if (t.identifier === this._joystickTouchId) {
                    onJoystickMove(t.clientX, t.clientY);
                }
            }
        }, { passive: false });

        joystickZone.addEventListener('touchend', (e) => {
            for (const t of e.changedTouches) {
                if (t.identifier === this._joystickTouchId) resetJoystick();
            }
        });
        joystickZone.addEventListener('touchcancel', (e) => {
            for (const t of e.changedTouches) {
                if (t.identifier === this._joystickTouchId) resetJoystick();
            }
        });

        // --- AIM: drag anywhere on screen to rotate (fullscreen catch-all) ---
        aimZone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (this._aimTouchId !== null) return;
            const t = e.changedTouches[0];
            this._aimTouchId = t.identifier;
            this._lastAimX = t.clientX;
            this._lastAimY = t.clientY;
        }, { passive: false });

        aimZone.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (const t of e.changedTouches) {
                if (t.identifier === this._aimTouchId) {
                    const dx = t.clientX - this._lastAimX;
                    // Higher sensitivity for responsive aiming
                    const sensitivity = 0.012;
                    this.aimAngle -= dx * sensitivity;
                    this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
                    this._lastAimX = t.clientX;
                    this._lastAimY = t.clientY;
                }
            }
        }, { passive: false });

        aimZone.addEventListener('touchend', (e) => {
            for (const t of e.changedTouches) {
                if (t.identifier === this._aimTouchId) this._aimTouchId = null;
            }
        });
        aimZone.addEventListener('touchcancel', (e) => {
            for (const t of e.changedTouches) {
                if (t.identifier === this._aimTouchId) this._aimTouchId = null;
            }
        });

        // --- ACTION BUTTONS ---
        const shootBtn = document.getElementById('btn-mobile-shoot');
        const bombBtn = document.getElementById('btn-mobile-bomb');
        const reloadBtn = document.getElementById('btn-mobile-reload');
        const scopeBtn = document.getElementById('btn-mobile-scope');
        const pauseBtn = document.getElementById('btn-mobile-pause');

        // Shoot: hold to fire
        shootBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.player.shooting = true;
            shootBtn.classList.add('pressed');
        }, { passive: false });
        shootBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.player.shooting = false;
            shootBtn.classList.remove('pressed');
        });
        shootBtn.addEventListener('touchcancel', () => {
            this.player.shooting = false;
            shootBtn.classList.remove('pressed');
        });

        // Bomb: tap
        bombBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.throwBomb();
        }, { passive: false });

        // Reload: tap
        reloadBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.player.startReload();
        }, { passive: false });

        // Scope: toggle
        let scopeActive = false;
        scopeBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            scopeActive = !scopeActive;
            this.toggleScope(scopeActive);
            scopeBtn.classList.toggle('pressed', scopeActive);
        }, { passive: false });

        // Pause
        pauseBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.togglePause();
        }, { passive: false });
    }

    unbindInput() {
        document.removeEventListener('keydown', this._onKeyDown);
        document.removeEventListener('keyup', this._onKeyUp);
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('mousedown', this._onMouseDown);
        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('contextmenu', this._onContext);
    }

    togglePause() {
        this.paused = !this.paused;
        if (this.paused && this.scoped) this.toggleScope(false);
        document.getElementById('pause-menu').classList.toggle('hidden', !this.paused);
    }

    spawnWave() {
        this.wave++;
        if (this.wave > this.currentLevel.waves) { this.levelComplete(); return; }
        const lvl = this.currentLevel;
        const count = lvl.enemiesPerWave + Math.floor(this.wave * 0.8);
        this.totalSpawned += count;
        for (let i = 0; i < count; i++) {
            const spawn = this.map.getEnemySpawn(this.player.x, this.player.z);
            this.enemies.push(new Enemy3D(this.scene, spawn.x, spawn.z, lvl.num,
                lvl.enemyHpMult, lvl.enemyDmgMult, lvl.enemySpeedMult));
        }
        this.updateHUD();
    }

    throwBomb() {
        if (!this.player || this.player.bombCooldown > 0) return;
        const bombDef = state.equippedBomb;
        if (state.getBombCount(bombDef.id) > 0) {
            state.useBomb(bombDef.id);
            this._doThrow(bombDef);
            return;
        }
        // Try any bomb type the player has
        const available = BOMB_SHOP.find(b => state.getBombCount(b.id) > 0);
        if (!available) return;
        state.useBomb(available.id);
        this._doThrow(available);
    }

    _doThrow(bombDef) {
        this.player.bombCooldown = 1000;
        const targetPos = new THREE.Vector3();
        if (this.isMobile) {
            // On mobile, throw in facing direction
            targetPos.set(
                this.player.x + Math.sin(this.player.angle) * 10,
                0,
                this.player.z + Math.cos(this.player.angle) * 10
            );
        } else {
            this.raycaster.setFromCamera(new THREE.Vector2(this.mouseX, this.mouseY), this.camera);
            if (!this.raycaster.ray.intersectPlane(this.groundPlane, targetPos)) {
                targetPos.set(
                    this.player.x + Math.sin(this.player.angle) * 10,
                    0,
                    this.player.z + Math.cos(this.player.angle) * 10
                );
            }
        }
        // Clamp throw distance to 15 units
        const dx = targetPos.x - this.player.x;
        const dz = targetPos.z - this.player.z;
        const throwDist = Math.sqrt(dx * dx + dz * dz);
        if (throwDist > 15) {
            targetPos.x = this.player.x + (dx / throwDist) * 15;
            targetPos.z = this.player.z + (dz / throwDist) * 15;
        }
        const startPos = new THREE.Vector3(this.player.x, 1.2, this.player.z);
        this.bombs.push(new Bomb3D(this.scene, startPos, targetPos, bombDef));
        audio.playBombThrow();
        this.updateHUD();
    }

    updateAim() {
        // On mobile, aim is controlled by touch drag — skip raycast
        if (!this.isMobile) {
            this.raycaster.setFromCamera(new THREE.Vector2(this.mouseX, this.mouseY), this.camera);
            const intersection = new THREE.Vector3();
            if (this.raycaster.ray.intersectPlane(this.groundPlane, intersection)) {
                const dx = intersection.x - this.player.x;
                const dz = intersection.z - this.player.z;
                // Only update if cursor is far enough from player to get stable angle
                if (dx * dx + dz * dz > 0.5) {
                    const rawAngle = Math.atan2(dx, dz);
                    // Smooth the aim angle — prevents jittery snapping
                    let diff = rawAngle - this.aimAngle;
                    diff = ((diff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
                    if (Math.abs(diff) < 0.005) {
                        this.aimAngle = rawAngle;
                    } else {
                        this.aimAngle += diff * 0.5; // 50% lerp — responsive but smooth
                    }
                }
            }
            // Update crosshair position smoothly
            const ch = document.getElementById('crosshair');
            if (ch && this._rawMouseX !== undefined) {
                ch.style.left = this._rawMouseX + 'px';
                ch.style.top = this._rawMouseY + 'px';
            }
        }

        // Normalize aimAngle to [-PI, PI]
        this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

        // Auto-aim: lock onto nearest visible enemy
        const p = this.player;
        const moving = p.keys.w || p.keys.a || p.keys.d || p.keys.arrowup || p.keys.arrowdown || p.keys.arrowleft || p.keys.arrowright;

        if (this.enemies.length > 0) {
            let bestEnemy = null;
            let bestScore = Infinity;
            const aimDir = new THREE.Vector2(Math.sin(this.aimAngle), Math.cos(this.aimAngle)).normalize();

            for (const e of this.enemies) {
                if (!e.alive) continue;
                const ex = e.x - p.x;
                const ez = e.z - p.z;
                const dist = Math.sqrt(ex * ex + ez * ez);
                if (dist > 30 || dist < 1) continue;

                const toEnemy = new THREE.Vector2(ex / dist, ez / dist);
                const dot = aimDir.dot(toEnemy);

                // Wider cone when moving (120°), normal cone when still (80°)
                const cone = moving ? 0.0 : 0.5;
                if (dot > cone) {
                    // Strongly prefer closer + aligned enemies
                    const score = dist * (2 - dot);
                    if (score < bestScore) {
                        bestScore = score;
                        bestEnemy = e;
                    }
                }
            }

            if (bestEnemy) {
                const targetAngle = Math.atan2(bestEnemy.x - p.x, bestEnemy.z - p.z);
                let diff = targetAngle - this.aimAngle;
                diff = ((diff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
                // Stronger lerp when moving — snaps gun toward enemy quickly
                const lerpStr = moving ? 0.25 : (this.isMobile ? 0.2 : 0.1);
                this.aimAngle += diff * lerpStr;
                this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
            }
        }
    }

    updateCrosshairTarget() {
        if (this.isMobile) return; // crosshair hidden on mobile
        const ch = document.getElementById('crosshair');
        const zoomDot = document.querySelector('.scope-zoom-dot');
        let onTarget = false;
        // Check if any alive enemy is near the aim line
        for (const e of this.enemies) {
            if (!e.alive) continue;
            const screenPos = new THREE.Vector3(e.x, 1.0, e.z).project(this.camera);
            const sx = (screenPos.x + 1) / 2;
            const sy = (-screenPos.y + 1) / 2;
            const mx = (this.mouseX + 1) / 2;
            const my = (-this.mouseY + 1) / 2;
            const dist = Math.sqrt((sx - mx) ** 2 + (sy - my) ** 2);
            if (dist < 0.04 && screenPos.z < 1) {
                onTarget = true;
                break;
            }
        }
        if (onTarget) {
            ch.classList.add('on-target');
            if (zoomDot) zoomDot.classList.add('on-target');
        } else {
            ch.classList.remove('on-target');
            if (zoomDot) zoomDot.classList.remove('on-target');
        }
    }

    updateCamera() {
        const p = this.player;
        const zoomed = this.scoped;
        if (this.cameraMode === 'tps') {
            const camDist = zoomed ? 4 : 8;
            const camHeight = zoomed ? 3.5 : 6;
            const targetX = p.x - Math.sin(p.angle) * camDist;
            const targetZ = p.z - Math.cos(p.angle) * camDist;
            // Faster lerp reduces aim-camera feedback jitter
            const lerpSpeed = zoomed ? 0.18 : 0.12;
            this.camera.position.x += (targetX - this.camera.position.x) * lerpSpeed;
            this.camera.position.y += (camHeight - this.camera.position.y) * lerpSpeed;
            this.camera.position.z += (targetZ - this.camera.position.z) * lerpSpeed;
            this.camera.lookAt(p.x, 1.2, p.z);
        } else if (this.cameraMode === 'fps') {
            this.camera.position.set(p.x, 1.6, p.z);
            const fwdX = p.x + Math.sin(p.angle) * 10;
            const fwdZ = p.z + Math.cos(p.angle) * 10;
            this.camera.lookAt(fwdX, 1.4, fwdZ);
        } else if (this.cameraMode === 'top') {
            const topHeight = zoomed ? 15 : 25;
            const lerpSpeed = 0.12;
            this.camera.position.x += (p.x - this.camera.position.x) * lerpSpeed;
            this.camera.position.y += (topHeight - this.camera.position.y) * lerpSpeed;
            this.camera.position.z += ((p.z + 5) - this.camera.position.z) * lerpSpeed;
            this.camera.lookAt(p.x, 0, p.z);
        }
    }

    toggleScope(on) {
        this.scoped = on;
        const overlay = document.getElementById('scope-overlay');
        const crosshair = document.getElementById('crosshair');
        if (on) {
            overlay.classList.remove('hidden');
            crosshair.style.display = 'none';
            // Zoom in — reduce FOV
            this.camera.fov = this.defaultFov / this.scopeZoom;
            this.camera.updateProjectionMatrix();
            audio.playScope();
        } else {
            overlay.classList.add('hidden');
            crosshair.style.display = '';
            this.camera.fov = this.defaultFov;
            this.camera.updateProjectionMatrix();
        }
    }

    loop() {
        if (!this.running) return;
        requestAnimationFrame(() => this.loop());
        if (this.paused) return;

        const now = performance.now();
        const rawDt = now - this.lastTime;
        this.lastTime = now;
        // Cap dt to prevent huge jumps; target 60fps baseline
        const dt = Math.min(rawDt, 50);
        const dtScale = dt / 16.667; // 1.0 at 60fps
        this.gameTime += dt;

        // Combo timer decay
        if (this.comboTimer > 0) {
            this.comboTimer -= dt;
            if (this.comboTimer <= 0) {
                this.comboCount = 0;
            }
        }

        // Screen shake decay

        // Aim — uses current camera position for raycast
        this.updateAim();

        // Crosshair enemy detection — highlight when aimed at enemy
        this.updateCrosshairTarget();

        // Update player
        this.player.update(this.map, dt, this.bullets, this.aimAngle);

        // Camera follows player — single update per frame
        this.updateCamera();

        // Screen shake — cosmetic offset AFTER final camera position
        if (this._shakeIntensity > 0) {
            this._shakeIntensity *= 0.9;
            if (this._shakeIntensity < 0.01) this._shakeIntensity = 0;
            this.camera.position.x += (Math.random() - 0.5) * this._shakeIntensity;
            this.camera.position.y += (Math.random() - 0.5) * this._shakeIntensity;
        }

        // Enemies
        for (const e of this.enemies) {
            e.update(this.player, this.map, dt, this.scene, this.bullets);
        }

        // Bullets
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];
            b.update();

            // Map collision
            if (!this.map.isWalkable(b.mesh.position.x, b.mesh.position.z, 0.1)) {
                b.alive = false;
            }

            if (!b.alive) {
                if (b.explosive) {
                    // Explosion damage
                    for (const e of this.enemies) {
                        if (!e.alive) continue;
                        const d = dist2D(b.mesh.position.x, b.mesh.position.z, e.x, e.z);
                        if (d < 4) {
                            e.takeDamage(Math.floor(b.damage * (1 - d / 4)));
                            if (!e.alive) this.onEnemyKilled(e);
                        }
                    }
                }
                b.destroy(this.scene);
                this.bullets.splice(i, 1);
                continue;
            }

            if (b.isEnemy) {
                const d = dist2D(b.mesh.position.x, b.mesh.position.z, this.player.x, this.player.z);
                if (d < this.player.radius + 0.3) {
                    this.player.takeDamage(b.damage);
                    b.alive = false;
                    b.destroy(this.scene);
                    this.bullets.splice(i, 1);
                    audio.playPlayerHit();
                    this.showDamageOverlay();
                    if (this.player.hp <= 0) { this.gameOver(); return; }
                }
            } else {
                for (const e of this.enemies) {
                    if (!e.alive) continue;
                    const d = dist2D(b.mesh.position.x, b.mesh.position.z, e.x, e.z);
                    if (d < e.radius + 0.2) {
                        e.takeDamage(b.damage);
                        b.alive = false;
                        b.destroy(this.scene);
                        this.bullets.splice(i, 1);
                        audio.playHit();
                        if (!e.alive) this.onEnemyKilled(e);
                        break;
                    }
                }
            }
        }

        // Pickups
        for (let i = this.pickups.length - 1; i >= 0; i--) {
            const p = this.pickups[i];
            p.update();
            if (dist2D(p.x, p.z, this.player.x, this.player.z) < this.player.radius + p.radius) {
                switch (p.type) {
                    case 'health': this.player.hp = Math.min(this.player.maxHp, this.player.hp + 25); break;
                    case 'ammo':
                        const w = this.player.getEffectiveWeapon();
                        this.player.ammo = Math.min(w.magSize, this.player.ammo + Math.ceil(w.magSize / 2));
                        break;
                    case 'coin': this.coinsEarned += 10; this.score += 50; break;
                }
                audio.playPickup();
                p.destroy(this.scene);
                this.pickups.splice(i, 1);
            }
        }

        // Clean up dead enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            if (!this.enemies[i].alive && this.enemies[i]._removed) {
                this.enemies.splice(i, 1);
            }
        }

        // Update bombs in flight
        for (let i = this.bombs.length - 1; i >= 0; i--) {
            const bomb = this.bombs[i];
            bomb.update(dt);
            if (!bomb.alive && bomb.exploded) {
                const pos = bomb.getPosition().clone();
                const def = bomb.bombDef;
                bomb.destroy();
                this.bombs.splice(i, 1);

                // Create explosion visual
                this.explosions.push(new Explosion3D(this.scene, pos, def.radius, def.id));
                audio.playExplosion();

                // Deal damage to enemies in radius
                for (const e of this.enemies) {
                    if (!e.alive) continue;
                    const d = dist2D(pos.x, pos.z, e.x, e.z);
                    if (d < def.radius) {
                        const falloff = 1 - (d / def.radius) * 0.5;
                        const dmg = Math.floor(def.damage * falloff);
                        e.takeDamage(dmg);
                        if (def.id === 'flash' && e.alive) {
                            // Flashbang stun — freeze enemy for 3 seconds
                            const origSpeed = e.speed;
                            e.speed = 0;
                            e.shootCooldown = 3000;
                            e._stunned = true;
                            setTimeout(() => {
                                if (e.alive) { e.speed = origSpeed; e._stunned = false; }
                            }, 3000);
                        }
                        if (!e.alive) this.onEnemyKilled(e);
                    }
                }
                // Player self-damage if too close
                const playerDist = dist2D(pos.x, pos.z, this.player.x, this.player.z);
                if (playerDist < def.radius * 0.5) {
                    const selfDmg = Math.floor(def.damage * 0.3 * (1 - playerDist / (def.radius * 0.5)));
                    this.player.takeDamage(selfDmg);
                    this.showDamageOverlay();
                    if (this.player.hp <= 0) { this.gameOver(); return; }
                }
            }
        }

        // Update explosions
        for (let i = this.explosions.length - 1; i >= 0; i--) {
            this.explosions[i].update(dt);
            if (!this.explosions[i].alive) {
                this.explosions[i].destroy();
                this.explosions.splice(i, 1);
            }
        }

        // Wave check
        const aliveEnemies = this.enemies.filter(e => e.alive).length;
        if (this.waveDelay > 0) {
            this.waveDelay -= dt;
            if (this.waveDelay <= 0) this.spawnWave();
        } else if (aliveEnemies === 0 && this.wave < this.currentLevel.waves) {
            this.waveDelay = 2000;
        } else if (aliveEnemies === 0 && this.wave >= this.currentLevel.waves) {
            this.levelComplete();
            return;
        }

        // Render
        this.renderer.render(this.scene, this.camera);
        this.renderMinimap();
        this.updateHUD();
    }

    onEnemyKilled(enemy) {
        this.kills++;
        this.killStreak++;

        // Combo system — kills within 3 seconds chain together
        this.comboCount++;
        this.comboTimer = 3000;
        if (this.comboCount > this.bestCombo) this.bestCombo = this.comboCount;

        // Score multiplier based on combo
        const comboMult = Math.min(this.comboCount, 5);
        const baseScore = 100;
        const earnedScore = baseScore * comboMult;
        this.score += earnedScore;
        this.coinsEarned += 5 * comboMult;

        this.killedEnemies.push({ name: enemy.name, type: enemy.type, time: Math.floor(this.gameTime / 1000) });
        audio.playEnemyDeath();

        // Kill feed
        const feed = document.getElementById('kill-feed');
        let feedMsg = `${icon('skull', 14)} ${enemy.name} eliminated`;
        if (this.comboCount >= 3) feedMsg += ` — ${this.comboCount}x COMBO!`;
        else if (this.comboCount === 2) feedMsg += ' — DOUBLE KILL!';
        feed.innerHTML = feedMsg;
        feed.classList.add('show');
        setTimeout(() => feed.classList.remove('show'), 2500);

        // Floating damage number at enemy position
        this._spawnDamageText(enemy.x, enemy.z, `+${earnedScore}`, this.comboCount >= 3 ? '#ffd700' : '#00ff88');

        // Screen shake
        this._shakeIntensity = Math.min(0.15 + this.comboCount * 0.05, 0.5);

        // Achievement checks
        if (this.kills === 10 && !this.achievements.includes('first_blood_10')) {
            this.achievements.push('first_blood_10');
            this._showAchievement('🎖 FIRST BLOOD', '10 kills!');
        }
        if (this.kills === 50 && !this.achievements.includes('slayer_50')) {
            this.achievements.push('slayer_50');
            this._showAchievement('💀 SLAYER', '50 kills!');
        }
        if (this.comboCount === 5 && !this.achievements.includes('combo_5')) {
            this.achievements.push('combo_5');
            this._showAchievement(`${icon('flame', 16)} COMBO MASTER`, '5x combo!');
        }
        if (this.killStreak >= 10 && !this.achievements.includes('streak_10')) {
            this.achievements.push('streak_10');
            this._showAchievement(`${icon('bolt', 16)} UNSTOPPABLE`, '10 kill streak!');
        }

        // Death animation — sink into ground
        const sinkInterval = setInterval(() => {
            enemy.mesh.position.y -= 0.02;
            enemy.mesh.rotation.z += 0.05;
            if (enemy.mesh.position.y < -1) {
                clearInterval(sinkInterval);
                enemy.destroy(this.scene);
                enemy._removed = true;
            }
        }, 16);

        // Drop pickup — higher chance with combos
        const dropChance = Math.min(0.35 + this.comboCount * 0.05, 0.7);
        if (Math.random() < dropChance) {
            const types = ['health', 'ammo', 'coin', 'coin'];
            const type = types[Math.floor(Math.random() * types.length)];
            this.pickups.push(new Pickup3D(this.scene, enemy.x, enemy.z, type));
        }
    }

    _spawnDamageText(x, z, text, color) {
        // Create a floating sprite that rises and fades
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 48;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.font = 'bold 28px Orbitron, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, 64, 34);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(1.2, 0.45, 1);
        sprite.position.set(x, 2.5, z);
        this.scene.add(sprite);
        const startTime = performance.now();
        const animate = () => {
            const elapsed = performance.now() - startTime;
            if (elapsed > 1200) { this.scene.remove(sprite); return; }
            sprite.position.y += 0.015;
            mat.opacity = 1 - elapsed / 1200;
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }

    _showAchievement(title, desc) {
        // Use notification system
        const el = document.createElement('div');
        el.className = 'notification achievement';
        el.innerHTML = `<strong>${title}</strong> — ${desc}`;
        document.body.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        audio.playLevelComplete();
        setTimeout(() => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 500);
        }, 3500);
    }

    renderMinimap() {
        const ctx = this.miniCtx;
        const w = 160, h = 160;
        const mapSize = this.map.size;
        const scale = w / mapSize;

        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(0, 0, w, h);

        // Buildings
        ctx.fillStyle = '#333';
        for (const b of this.map.buildings) {
            const bx = (b.x + mapSize / 2) * scale;
            const bz = (b.z + mapSize / 2) * scale;
            ctx.fillRect(bx - b.w / 2 * scale, bz - b.d / 2 * scale,
                b.w * scale, b.d * scale);
        }

        // Player
        ctx.fillStyle = '#00ff88';
        const px = (this.player.x + mapSize / 2) * scale;
        const pz = (this.player.z + mapSize / 2) * scale;
        ctx.beginPath();
        ctx.arc(px, pz, 3, 0, Math.PI * 2);
        ctx.fill();
        // Direction line
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, pz);
        ctx.lineTo(px + Math.sin(this.player.angle) * 8, pz + Math.cos(this.player.angle) * 8);
        ctx.stroke();

        // Enemies
        ctx.fillStyle = '#ff2244';
        let enemyIdx = 0;
        for (const e of this.enemies) {
            if (!e.alive) continue;
            enemyIdx++;
            const ex = (e.x + mapSize / 2) * scale;
            const ez = (e.z + mapSize / 2) * scale;
            // Distance from player
            const d = Math.sqrt((e.x - this.player.x) ** 2 + (e.z - this.player.z) ** 2);
            // Pulsing dot for nearby enemies
            const rad = d < 15 ? 3 + Math.sin(performance.now() * 0.005) * 1 : 2;
            ctx.beginPath();
            ctx.arc(ex, ez, rad, 0, Math.PI * 2);
            ctx.fill();
            // Number label
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 7px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(enemyIdx, ex, ez - 4);
            ctx.fillStyle = '#ff2244';
        }

        // Enemy count on minimap
        const aliveCount = this.enemies.filter(e => e.alive).length;
        ctx.fillStyle = aliveCount <= 2 ? '#ff2244' : '#ff8800';
        ctx.font = 'bold 11px Orbitron, Arial';
        ctx.textAlign = 'right';
        ctx.fillText(`× ${aliveCount}`, w - 4, 12);

        // Border
        ctx.strokeStyle = '#444';
        ctx.strokeRect(0, 0, w, h);
    }

    showDamageOverlay() {
        const el = document.getElementById('damage-overlay');
        el.classList.add('flash');
        setTimeout(() => el.classList.remove('flash'), 200);
    }

    updateHUD() {
        document.getElementById('health-bar').style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
        document.getElementById('health-text').textContent = Math.ceil(this.player.hp);
        const w = this.player.getEffectiveWeapon();
        document.getElementById('ammo-text').textContent = `${this.player.ammo} / ${w.magSize}`;
        document.getElementById('wave-text').textContent = `WAVE ${this.wave} / ${this.currentLevel.waves}`;
        const aliveCount = this.enemies.filter(e => e.alive).length;
        document.getElementById('enemies-left').textContent = `Enemies: ${aliveCount} / ${this.totalSpawned}`;
        document.getElementById('enemies-left').style.color = aliveCount <= 2 ? '#ff2244' : aliveCount <= 5 ? '#ffaa00' : '#00f0ff';
        document.getElementById('score-text').textContent = this.score;
        document.getElementById('game-coins').textContent = this.coinsEarned;
        document.getElementById('weapon-name').textContent = `${this.player.weaponDef.name} Lv.${this.player.weaponLevel}`;
        document.getElementById('reload-indicator').classList.toggle('hidden', !this.player.reloading);
        // Bomb count
        const bombEl = document.getElementById('bomb-count');
        if (bombEl) bombEl.textContent = state.totalBombs;
        // Kill list — only update when kills change
        if (this._lastKillCount !== this.killedEnemies.length) {
            this._lastKillCount = this.killedEnemies.length;
            const killListBody = document.getElementById('kill-list-body');
            if (killListBody) {
                let html = '';
                for (let i = this.killedEnemies.length - 1; i >= Math.max(0, this.killedEnemies.length - 50); i--) {
                    const k = this.killedEnemies[i];
                    html += `<div class="kill-entry"><span class="kill-x">${icon('skull', 14)}</span> ${k.name} <span class="kill-type">${k.type}</span> <span class="kill-time">${k.time}s</span></div>`;
                }
                killListBody.innerHTML = html;
                const badge = document.getElementById('kill-count-badge');
                if (badge) badge.textContent = this.killedEnemies.length;
            }
        }
        // FPS counter
        if (state.data.settings.showFps) {
            if (!this._fpsEl) {
                this._fpsEl = document.getElementById('fps-counter');
            }
            if (this._fpsEl) {
                this._fpsFrames = (this._fpsFrames || 0) + 1;
                const now = performance.now();
                if (!this._fpsLast) this._fpsLast = now;
                if (now - this._fpsLast >= 500) {
                    this._fpsEl.textContent = `${Math.round(this._fpsFrames / ((now - this._fpsLast) / 1000))} FPS`;
                    this._fpsFrames = 0;
                    this._fpsLast = now;
                }
                this._fpsEl.classList.remove('hidden');
            }
        } else if (this._fpsEl) {
            this._fpsEl.classList.add('hidden');
        }
        // Low health warning
        const hpRatio = this.player.hp / this.player.maxHp;
        document.getElementById('damage-overlay').classList.toggle('low-health', hpRatio < 0.25);
        // Combo display
        if (this._comboEl) {
            if (this.comboCount >= 2) {
                this._comboEl.textContent = `${this.comboCount}x COMBO!`;
                this._comboEl.classList.remove('hidden');
            } else {
                this._comboEl.classList.add('hidden');
            }
        }
    }

    levelComplete() {
        this.running = false;
        if (this.scoped) this.toggleScope(false);
        this.unbindInput();
        audio.stopMusic();
        audio.playLevelComplete();

        const lvl = this.currentLevel;
        const timeMins = Math.floor(this.gameTime / 60000);
        const timeSecs = Math.floor((this.gameTime % 60000) / 1000);
        const coinReward = lvl.coinReward + this.coinsEarned;

        const hpPercent = this.player.hp / this.player.maxHp;
        let stars = 1;
        if (hpPercent > 0.5) stars = 2;
        if (hpPercent > 0.8) stars = 3;

        state.coins += coinReward;
        state.data.totalKills += this.kills;
        state.completeLevel(lvl.num, stars, this.score);

        document.getElementById('results-content').innerHTML = `
            <div class="stat-line">${icon('star', 18)} ${['', '★', '★★', '★★★'][stars]}</div>
            <div class="stat-line">${icon('skull', 16)} Kills: ${this.kills}</div>
            <div class="stat-line">${icon('flame', 16)} Best Combo: ${this.bestCombo}x</div>
            <div class="stat-line">${icon('crosshair', 16)} Score: ${this.score}</div>
            <div class="stat-line">${icon('timer', 16)} Time: ${timeMins}:${timeSecs.toString().padStart(2, '0')}</div>
            <div class="stat-line">${icon('coin', 18)} Coins: +${coinReward}</div>
            <div class="stat-line">${icon('heart', 16)} HP: ${Math.ceil(this.player.hp)}</div>`;

        document.getElementById('level-complete').classList.remove('hidden');
        const nextBtn = document.getElementById('btn-next-level');
        if (lvl.num >= 30) {
            nextBtn.textContent = 'ALL MISSIONS COMPLETE!';
            nextBtn.disabled = true;
        } else {
            nextBtn.textContent = 'NEXT MISSION →';
            nextBtn.disabled = false;
            nextBtn.onclick = () => {
                document.getElementById('level-complete').classList.add('hidden');
                this.start(lvl.num + 1);
            };
        }
    }

    gameOver() {
        this.running = false;
        if (this.scoped) this.toggleScope(false);
        this.unbindInput();
        audio.stopMusic();
        audio.playGameOver();

        const partialCoins = Math.floor(this.coinsEarned * 0.5);
        state.coins += partialCoins;
        state.data.totalKills += this.kills;
        state.save();

        document.getElementById('game-over-msg').textContent =
            `Kills: ${this.kills} | Score: ${this.score} | Coins: +${partialCoins}`;
        document.getElementById('game-over').classList.remove('hidden');
    }
}

function dist2D(x1, z1, x2, z2) {
    const dx = x2 - x1;
    const dz = z2 - z1;
    return Math.sqrt(dx * dx + dz * dz);
}

const game = new Game();
