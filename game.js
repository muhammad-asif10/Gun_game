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

function generateLevels() {
    const levels = [];
    for (let i = 1; i <= 30; i++) {
        let diff, diffLabel;
        if (i <= 10) { diff = 'easy'; diffLabel = 'EASY'; }
        else if (i <= 20) { diff = 'medium'; diffLabel = 'MEDIUM'; }
        else { diff = 'hard'; diffLabel = 'HARD'; }
        const waveCount = Math.min(2 + Math.floor(i / 3), 8);
        const baseEnemies = 3 + Math.floor(i * 1.2);
        levels.push({
            num: i, difficulty: diff, diffLabel, waves: waveCount,
            enemiesPerWave: baseEnemies,
            enemyHpMult: 1 + (i - 1) * 0.12,
            enemyDmgMult: 1 + (i - 1) * 0.08,
            enemySpeedMult: 1 + (i - 1) * 0.03,
            coinReward: 50 + i * 20,
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
            maxLevelUnlocked: 1,
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
    constructor(scene) {
        this.scene = scene;
        this.size = 120;
        this.buildings = [];
        this.buildingBoxes = [];
        this.generate();
    }

    generate() {
        const size = this.size;

        // Ground plane
        const groundGeo = new THREE.PlaneGeometry(size, size, 1, 1);
        const groundMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Road grid
        const roadMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
        const roadW = 4;
        const blockSize = 16;
        for (let i = -size / 2; i <= size / 2; i += blockSize) {
            // Horizontal roads
            const hRoad = new THREE.Mesh(new THREE.PlaneGeometry(size, roadW), roadMat);
            hRoad.rotation.x = -Math.PI / 2;
            hRoad.position.set(0, 0.01, i);
            hRoad.receiveShadow = true;
            this.scene.add(hRoad);
            // Vertical roads
            const vRoad = new THREE.Mesh(new THREE.PlaneGeometry(roadW, size), roadMat);
            vRoad.rotation.x = -Math.PI / 2;
            vRoad.position.set(i, 0.01, 0);
            vRoad.receiveShadow = true;
            this.scene.add(vRoad);

            // Road markings (dashed line)
            const lineMat = new THREE.MeshBasicMaterial({ color: 0x555555 });
            for (let d = -size / 2; d < size / 2; d += 3) {
                const line = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 1.2), lineMat);
                line.rotation.x = -Math.PI / 2;
                line.position.set(i, 0.02, d);
                this.scene.add(line);
                const line2 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), lineMat);
                line2.rotation.x = -Math.PI / 2;
                line2.position.set(d, 0.02, i);
                this.scene.add(line2);
            }
        }

        // Sidewalks
        const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0x444444 });

        // Buildings
        const buildingColors = [0x2a3040, 0x303848, 0x283038, 0x3a3040, 0x2a2838, 0x384050, 0x303040];
        const windowColor = 0xffdd44;
        const windowDarkColor = 0x1a2a3a;

        for (let bx = -size / 2 + blockSize / 2; bx < size / 2; bx += blockSize) {
            for (let bz = -size / 2 + blockSize / 2; bz < size / 2; bz += blockSize) {
                // Multiple buildings per block
                const numBuildings = 1 + Math.floor(Math.random() * 2);
                for (let b = 0; b < numBuildings; b++) {
                    if (Math.random() < 0.15) continue; // Some empty lots

                    const w = 3 + Math.random() * 5;
                    const d = 3 + Math.random() * 5;
                    const h = 3 + Math.random() * 20;
                    const ox = bx + (Math.random() - 0.5) * (blockSize - w - 5);
                    const oz = bz + (Math.random() - 0.5) * (blockSize - d - 5);

                    const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
                    const geo = new THREE.BoxGeometry(w, h, d);
                    const mat = new THREE.MeshLambertMaterial({ color });
                    const building = new THREE.Mesh(geo, mat);
                    building.position.set(ox, h / 2, oz);
                    building.castShadow = true;
                    building.receiveShadow = true;
                    this.scene.add(building);

                    // Windows on each face
                    const winGeo = new THREE.PlaneGeometry(0.4, 0.6);
                    const faces = [
                        { axis: 'z', sign: 1, width: w, rot: 0 },
                        { axis: 'z', sign: -1, width: w, rot: Math.PI },
                        { axis: 'x', sign: 1, width: d, rot: Math.PI / 2 },
                        { axis: 'x', sign: -1, width: d, rot: -Math.PI / 2 }
                    ];
                    faces.forEach(face => {
                        const faceWidth = face.width;
                        const faceDepth = face.axis === 'z' ? d : w;
                        for (let wy = 2; wy < h - 1; wy += 1.8) {
                            for (let wx = -faceWidth / 2 + 1; wx < faceWidth / 2 - 0.5; wx += 1.5) {
                                const lit = Math.random() > 0.4;
                                const winMat = new THREE.MeshBasicMaterial({
                                    color: lit ? windowColor : windowDarkColor,
                                    transparent: true,
                                    opacity: lit ? 0.7 : 0.9
                                });
                                const win = new THREE.Mesh(winGeo, winMat);
                                if (face.axis === 'z') {
                                    win.position.set(ox + wx, wy, oz + face.sign * (faceDepth / 2 + 0.01));
                                } else {
                                    win.position.set(ox + face.sign * (faceWidth / 2 + 0.01), wy, oz + wx);
                                    win.rotation.y = face.rot;
                                }
                                this.scene.add(win);
                            }
                        }
                    });

                    // Roof detail
                    const roofGeo = new THREE.BoxGeometry(w * 0.3, 0.8, d * 0.3);
                    const roofMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
                    const roof = new THREE.Mesh(roofGeo, roofMat);
                    roof.position.set(ox, h + 0.4, oz);
                    this.scene.add(roof);

                    // Collision box (slightly padded)
                    const box = new THREE.Box3(
                        new THREE.Vector3(ox - w / 2 - 0.3, 0, oz - d / 2 - 0.3),
                        new THREE.Vector3(ox + w / 2 + 0.3, h, oz + d / 2 + 0.3)
                    );
                    this.buildingBoxes.push(box);
                    this.buildings.push({ x: ox, z: oz, w, d, h });
                }
            }
        }

        // Streetlights
        const lightPostMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
        const lightGlowMat = new THREE.MeshBasicMaterial({ color: 0xffeeaa });
        for (let x = -size / 2 + 4; x < size / 2; x += blockSize) {
            for (let z = -size / 2 + 4; z < size / 2; z += blockSize) {
                const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 4, 6), lightPostMat);
                post.position.set(x, 2, z);
                this.scene.add(post);
                const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), lightGlowMat);
                lamp.position.set(x, 4.1, z);
                this.scene.add(lamp);
                const pointLight = new THREE.PointLight(0xffddaa, 0.4, 12);
                pointLight.position.set(x, 4, z);
                this.scene.add(pointLight);
            }
        }

        // Trees in some open areas
        for (let i = 0; i < 40; i++) {
            const tx = (Math.random() - 0.5) * size * 0.85;
            const tz = (Math.random() - 0.5) * size * 0.85;
            if (this.isWalkable(tx, tz, 1.5)) {
                const trunkGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.5, 6);
                const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5a3a1a });
                const trunk = new THREE.Mesh(trunkGeo, trunkMat);
                trunk.position.set(tx, 0.75, tz);
                trunk.castShadow = true;
                this.scene.add(trunk);
                const foliageGeo = new THREE.SphereGeometry(0.8 + Math.random() * 0.4, 6, 5);
                const foliageMat = new THREE.MeshLambertMaterial({ color: 0x2a5a2a });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.set(tx, 2.2 + Math.random() * 0.3, tz);
                foliage.castShadow = true;
                this.scene.add(foliage);
            }
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

        const seePlayer = dist < 30;

        if (seePlayer && dist < this.range) this.state = 'attack';
        else if (seePlayer) this.state = 'chase';
        else this.state = 'patrol';

        let mx = 0, mz = 0;
        let targetAngle = this.angle;

        if (this.state === 'chase' || this.state === 'attack') {
            targetAngle = Math.atan2(dx, dz);
            if (dist > 3) {
                mx = (dx / dist) * this.speed;
                mz = (dz / dist) * this.speed;
            }
            this.shootCooldown -= dt;
            if (this.state === 'attack' && this.shootCooldown <= 0) {
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
            if (!this.patrolTarget || dist2D(this.x, this.z, this.patrolTarget.x, this.patrolTarget.z) < 1) {
                this.patrolTarget = {
                    x: this.x + (Math.random() - 0.5) * 15,
                    z: this.z + (Math.random() - 0.5) * 15
                };
            }
            const pdx = this.patrolTarget.x - this.x;
            const pdz = this.patrolTarget.z - this.z;
            const pdist = Math.sqrt(pdx * pdx + pdz * pdz);
            if (pdist > 0.5) {
                mx = (pdx / pdist) * this.speed * 0.5;
                mz = (pdz / pdist) * this.speed * 0.5;
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

        // Movement: WAD + Arrow keys; Shoot: mouse-click or S or F key
        this.keys = { w: false, a: false, d: false, arrowup: false, arrowdown: false, arrowleft: false, arrowright: false };
        this.shooting = false;
        this.flashTimer = 0;
        this.bombCooldown = 0; // ms cooldown between throws

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

        let mx = 0, mz = 0;
        if (this.keys.w || this.keys.arrowup) mz -= 1;
        if (this.keys.arrowdown) mz += 1;
        if (this.keys.a || this.keys.arrowleft) mx -= 1;
        if (this.keys.d || this.keys.arrowright) mx += 1;
        if (mx !== 0 || mz !== 0) {
            const len = Math.sqrt(mx * mx + mz * mz);
            mx = (mx / len) * this.speed * dtScale;
            mz = (mz / len) * this.speed * dtScale;
        }

        const newX = this.x + mx;
        const newZ = this.z + mz;
        if (map.isWalkable(newX, this.z, this.radius)) this.x = newX;
        if (map.isWalkable(this.x, newZ, this.radius)) this.z = newZ;

        const half = map.size / 2 - 1;
        this.x = Math.max(-half, Math.min(half, this.x));
        this.z = Math.max(-half, Math.min(half, this.z));

        // Smooth angle transition — fast lerp for responsive aiming
        let angleDiff = aimAngle - this.angle;
        // Normalize to [-PI, PI]
        angleDiff = ((angleDiff + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
        // Fast lerp: 40% per frame at 60fps — snappy but smooth
        const lerpFactor = Math.min(0.4 * dtScale, 1);
        // Snap if very close to avoid tiny oscillations
        if (Math.abs(angleDiff) < 0.01) {
            this.angle = aimAngle;
        } else {
            this.angle += angleDiff * lerpFactor;
        }
        // Keep angle in [-PI, PI] range to avoid drift
        this.angle = ((this.angle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

        this.mesh.position.x = this.x;
        this.mesh.position.z = this.z;
        this.label.position.set(this.x, 2.3, this.z);

        // Walk animation
        const moving = (mx !== 0 || mz !== 0);
        CharacterBuilder.animateWalk(this.mesh, dt, moving, this.shooting);
        // Subtle body bob — only on mesh Y, small amount
        const bob = this.mesh.userData._bodyBob || 0;
        this.mesh.position.y = bob;

        // Set final rotation AFTER animation — prevents any axis corruption
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
                const bulletPos = new THREE.Vector3(this.x, 1.1, this.z).add(dir.clone().multiplyScalar(0.6));
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
        this.waveDelay = 0;
        this.gameTime = 0;
        this.coinsEarned = 0;
        this.lastTime = 0;
        this.killFeedTimer = 0;

        // Camera system
        this.cameraMode = 'tps'; // 'tps', 'fps', 'top'
        this.mouseX = 0;
        this.mouseY = 0;
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
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0x0a0a15);
        window.addEventListener('resize', () => {
            if (!this.renderer) return;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            if (this.camera) {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
            }
        });
    }

    start(levelNum) {
        this.initRenderer();
        this.currentLevel = LEVELS[levelNum - 1];
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x0a0a15, 0.012);

        // Camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
        this.cameraMode = 'tps';
        this.updateCameraBtnState();

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x303050, 0.6);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffeedd, 0.5);
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
        const moonLight = new THREE.DirectionalLight(0x4466aa, 0.3);
        moonLight.position.set(-20, 40, -30);
        this.scene.add(moonLight);

        // Skybox — gradient sphere
        const skyGeo = new THREE.SphereGeometry(100, 16, 16);
        const skyMat = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            uniforms: {},
            vertexShader: `varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPos.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
            fragmentShader: `varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition).y;
                    vec3 bottomColor = vec3(0.04, 0.04, 0.08);
                    vec3 topColor = vec3(0.02, 0.02, 0.12);
                    vec3 color = mix(bottomColor, topColor, max(h, 0.0));
                    // Stars
                    float star = step(0.998, fract(sin(dot(vWorldPosition.xz * 50.0, vec2(12.9898, 78.233))) * 43758.5453));
                    color += vec3(star * 0.6) * step(0.1, h);
                    gl_FragColor = vec4(color, 1.0);
                }`
        });
        this.scene.add(new THREE.Mesh(skyGeo, skyMat));

        // Map
        this.map = new CityMap3D(this.scene);

        // Player
        this.player = new Player3D(state.hero, state.weapon, this.map, this.scene);

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
            // S or F key = shoot (toggle on)
            if (k === 's' || k === 'f') this.player.shooting = true;
            if (k === 'v') {
                const modes = ['tps', 'fps', 'top'];
                const idx = (modes.indexOf(this.cameraMode) + 1) % modes.length;
                this.setCameraMode(modes[idx]);
            }
        };
        this._onKeyUp = (e) => {
            const k = e.key.toLowerCase();
            if (k in this.player.keys) this.player.keys[k] = false;
            if (k === 's' || k === 'f') this.player.shooting = false;
        };
        this._onMouseMove = (e) => {
            this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            const ch = document.getElementById('crosshair');
            ch.style.left = e.clientX + 'px';
            ch.style.top = e.clientY + 'px';
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
        const count = lvl.enemiesPerWave + Math.floor(this.wave * 1.5);
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
        // Calculate target position from aim
        this.raycaster.setFromCamera(new THREE.Vector2(this.mouseX, this.mouseY), this.camera);
        const targetPos = new THREE.Vector3();
        if (!this.raycaster.ray.intersectPlane(this.groundPlane, targetPos)) {
            targetPos.set(
                this.player.x + Math.sin(this.player.angle) * 10,
                0,
                this.player.z + Math.cos(this.player.angle) * 10
            );
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
        // Raycast from mouse to ground plane to get aim direction
        this.raycaster.setFromCamera(new THREE.Vector2(this.mouseX, this.mouseY), this.camera);
        const intersection = new THREE.Vector3();
        if (this.raycaster.ray.intersectPlane(this.groundPlane, intersection)) {
            const dx = intersection.x - this.player.x;
            const dz = intersection.z - this.player.z;
            this.aimAngle = Math.atan2(dx, dz);
        }

        // Normalize aimAngle to [-PI, PI]
        this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

        // Auto-aim assist: snap to nearest enemy when moving toward them
        const p = this.player;
        const moving = p.keys.w || p.keys.a || p.keys.d || p.keys.arrowup || p.keys.arrowdown || p.keys.arrowleft || p.keys.arrowright;
        if (moving && this.enemies.length > 0) {
            let bestEnemy = null;
            let bestScore = Infinity;
            const aimDir = new THREE.Vector2(Math.sin(this.aimAngle), Math.cos(this.aimAngle)).normalize();

            for (const e of this.enemies) {
                if (!e.alive) continue;
                const ex = e.x - p.x;
                const ez = e.z - p.z;
                const dist = Math.sqrt(ex * ex + ez * ez);
                if (dist > 30 || dist < 1) continue; // too far or too close

                // Direction from player to enemy
                const toEnemy = new THREE.Vector2(ex / dist, ez / dist);
                // Dot product: how aligned is enemy with our aim direction
                const dot = aimDir.dot(toEnemy);

                // Only assist if enemy is roughly in aim direction (within ~40°)
                if (dot > 0.75) {
                    // Score: prefer closer enemies that are more aligned
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
                this.aimAngle += diff * 0.12;
                // Keep normalized
                this.aimAngle = ((this.aimAngle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
            }
        }
    }

    updateCrosshairTarget() {
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
            const lerpSpeed = zoomed ? 0.12 : 0.06;
            // Smooth camera follow — no jitter
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
            const lerpSpeed = 0.06;
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
        if (this._shakeIntensity > 0) {
            this._shakeIntensity *= 0.9;
            if (this._shakeIntensity < 0.01) this._shakeIntensity = 0;
            const shakeX = (Math.random() - 0.5) * this._shakeIntensity;
            const shakeY = (Math.random() - 0.5) * this._shakeIntensity;
            this.camera.position.x += shakeX;
            this.camera.position.y += shakeY;
        }

        // Aim
        this.updateAim();

        // Crosshair enemy detection — highlight when aimed at enemy
        this.updateCrosshairTarget();

        // Update player
        this.player.update(this.map, dt, this.bullets, this.aimAngle);

        // Camera
        this.updateCamera();

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
        feed.textContent = feedMsg;
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
        document.getElementById('enemies-left').textContent = `Enemies: ${aliveCount} / ${this.kills + aliveCount}`;
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
