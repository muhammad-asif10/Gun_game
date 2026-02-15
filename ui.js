/* ============================================
   SHADOW STRIKE — UI Controller
   Menus, screens, navigation
   ============================================ */

// ===== SCREEN MANAGEMENT =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ===== LOADING =====
(function initLoading() {
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');
    const steps = [
        'Loading assets...', 'Generating city...', 'Initializing weapons...',
        'Calibrating audio...', 'Preparing operatives...', 'Ready.'
    ];
    let progress = 0;
    const interval = setInterval(() => {
        progress += 12 + Math.random() * 15;
        if (progress > 100) progress = 100;
        bar.style.width = progress + '%';
        text.textContent = steps[Math.min(Math.floor(progress / 20), steps.length - 1)];
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showScreen('main-menu');
                audio.init();
                audio.playMenuMusic();
                updateMenuInfo();
            }, 400);
        }
    }, 300);
})();

// ===== MENU INFO =====
function updateMenuInfo() {
    document.getElementById('menu-coins').textContent = state.coins;
    document.getElementById('menu-level').textContent = state.data.maxLevelUnlocked;
    document.getElementById('menu-hero').textContent = state.hero.name;
}

// ===== NOTIFICATIONS =====
function notify(msg, type = '') {
    const el = document.createElement('div');
    el.className = 'notification ' + type;
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 400);
    }, 2500);
}

// ===== MAIN MENU BUTTONS =====
document.getElementById('btn-play').addEventListener('click', () => {
    audio.resume();
    audio.playClick();
    showScreen('level-select');
    renderLevelSelect('easy');
});

document.getElementById('btn-shop').addEventListener('click', () => {
    audio.playClick();
    showScreen('shop-screen');
    renderShop();
});

document.getElementById('btn-checkin').addEventListener('click', () => {
    audio.playClick();
    showScreen('checkin-screen');
    renderCheckin();
});

document.getElementById('btn-heroes').addEventListener('click', () => {
    audio.playClick();
    showScreen('hero-select');
    renderHeroSelect();
});

document.getElementById('btn-themes').addEventListener('click', () => {
    audio.playClick();
    showScreen('theme-select');
    renderThemeSelect();
});

document.getElementById('btn-settings').addEventListener('click', () => {
    audio.playClick();
    showScreen('settings-screen');
    loadSettings();
});

// Back buttons
document.getElementById('btn-hero-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });
document.getElementById('btn-theme-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });
document.getElementById('btn-level-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });
document.getElementById('btn-shop-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });
document.getElementById('btn-checkin-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });
document.getElementById('btn-settings-back').addEventListener('click', () => { audio.playClick(); showScreen('main-menu'); updateMenuInfo(); });

// ===== HERO SELECT =====
function renderHeroSelect() {
    const container = document.getElementById('hero-cards');
    container.innerHTML = '';
    HEROES.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card' + (state.data.selectedHero === hero.id ? ' selected' : '');
        card.innerHTML = `
            <div class="hero-avatar">${hero.avatar}</div>
            <div class="hero-name">${hero.name}</div>
            <div class="hero-title">${hero.title}</div>
            <div class="hero-stats">
                ${Object.entries(hero.stats).map(([key, val]) => `
                    <div class="hero-stat">
                        <span>${key.toUpperCase()}</span>
                        <div class="stat-bar-bg">
                            <div class="stat-bar-fill" style="width:${val}%;background:${val > 80 ? '#00ff88' : val > 60 ? '#ffaa00' : '#ff4444'}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <p style="margin-top:12px;font-size:12px;color:#888;position:relative;z-index:1">${hero.desc}</p>
        `;
        card.addEventListener('click', () => {
            audio.playClick();
            state.selectHero(hero.id);
            renderHeroSelect();
            notify(`${hero.name} selected!`);
        });
        container.appendChild(card);
    });
}

// ===== THEME SELECT =====
function renderThemeSelect() {
    const container = document.getElementById('theme-cards');
    container.innerHTML = '';
    Object.entries(THEMES).forEach(([id, theme]) => {
        const card = document.createElement('div');
        card.className = 'theme-card' + (state.themeId === id ? ' selected' : '');
        const hexStr = (c) => '#' + c.toString(16).padStart(6, '0');
        card.innerHTML = `
            <div class="theme-icon">${theme.icon}</div>
            <div class="theme-name">${theme.name}</div>
            <div class="theme-preview">
                <div class="theme-swatch" style="background:${hexStr(theme.ground)}"></div>
                <div class="theme-swatch" style="background:${hexStr(theme.buildings[0])}"></div>
                <div class="theme-swatch" style="background:${hexStr(theme.buildings[2])}"></div>
                <div class="theme-swatch" style="background:${hexStr(theme.foliageColor)}"></div>
            </div>
        `;
        card.addEventListener('click', () => {
            audio.playClick();
            state.selectTheme(id);
            renderThemeSelect();
            notify(`${theme.name} theme selected!`);
        });
        container.appendChild(card);
    });
}

// ===== LEVEL SELECT =====
function renderLevelSelect(difficulty) {
    const grid = document.getElementById('levels-grid');
    grid.innerHTML = '';

    const ranges = { easy: [1, 10], medium: [11, 20], hard: [21, 30] };
    const [start, end] = ranges[difficulty];

    for (let i = start; i <= end; i++) {
        const lvl = LEVELS[i - 1];
        const unlocked = state.isLevelUnlocked(i);
        const result = state.getLevelResult(i);

        const card = document.createElement('div');
        card.className = 'level-card' + (!unlocked ? ' locked' : '') + (result ? ' completed' : '');
        const bombTotal = lvl.bombs ? Object.values(lvl.bombs).reduce((a, b) => a + b, 0) : 0;
        card.innerHTML = `
            <div class="level-num">${i}</div>
            <div class="level-stars">${result ? '★'.repeat(result.stars) + '☆'.repeat(3 - result.stars) : '☆☆☆'}</div>
            <div class="level-diff">${lvl.diffLabel}</div>
            <div class="level-bombs">💣 ${bombTotal}</div>
        `;
        if (unlocked) {
            card.addEventListener('click', () => {
                audio.playClick();
                startLevel(i);
            });
        }
        grid.appendChild(card);
    }
}

// Difficulty tabs
document.querySelectorAll('.diff-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.diff-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        audio.playClick();
        renderLevelSelect(tab.dataset.diff);
    });
});

// ===== START LEVEL =====
function startLevel(num) {
    if (!state.hero) {
        notify('Select a hero first!');
        return;
    }
    audio.stopMusic();
    showScreen('game-screen');
    // Hide overlays
    document.getElementById('pause-menu').classList.add('hidden');
    document.getElementById('level-complete').classList.add('hidden');
    document.getElementById('game-over').classList.add('hidden');
    game.start(num);
}

// ===== GAME UI =====
document.getElementById('btn-resume').addEventListener('click', () => {
    audio.playClick();
    game.togglePause();
});

document.getElementById('btn-quit-game').addEventListener('click', () => {
    audio.playClick();
    game.stop();
    showScreen('main-menu');
    audio.playMenuMusic();
    updateMenuInfo();
});

document.getElementById('btn-retry').addEventListener('click', () => {
    audio.playClick();
    document.getElementById('game-over').classList.add('hidden');
    game.start(game.currentLevel.num);
});

document.getElementById('btn-go-menu').addEventListener('click', () => {
    audio.playClick();
    document.getElementById('game-over').classList.add('hidden');
    game.stop();
    showScreen('main-menu');
    audio.playMenuMusic();
    updateMenuInfo();
});

document.getElementById('btn-back-menu').addEventListener('click', () => {
    audio.playClick();
    document.getElementById('level-complete').classList.add('hidden');
    game.stop();
    showScreen('main-menu');
    audio.playMenuMusic();
    updateMenuInfo();
});

// ===== SHOP =====
function renderShop() {
    const container = document.getElementById('shop-content');
    document.getElementById('shop-coins').textContent = state.coins;
    container.innerHTML = '';

    WEAPONS.forEach(w => {
        const owned = state.ownsWeapon(w.id);
        const equipped = state.data.equippedWeapon === w.id;
        const level = state.getWeaponLevel(w.id);
        const upgradeCost = owned ? w.upgradeCost * level : 0;
        const canUpgrade = owned && level < w.maxLevel;

        const card = document.createElement('div');
        card.className = 'weapon-card' + (owned ? ' owned' : '') + (equipped ? ' equipped' : '');
        card.innerHTML = `
            ${equipped ? '<span class="weapon-tag equipped-tag">EQUIPPED</span>' :
              owned ? '<span class="weapon-tag owned-tag">OWNED</span>' : ''}
            <div class="weapon-icon">${w.icon}</div>
            <div class="weapon-name">${w.name}</div>
            ${owned ? `<div style="text-align:center;font-size:12px;color:#00f0ff;margin-bottom:5px">Level ${level} / ${w.maxLevel}</div>` : ''}
            <div class="weapon-stats">
                <div class="weapon-stat"><span>Damage</span><span>${Math.floor(w.damage * (1 + (Math.max(1,level) - 1) * 0.15))}</span></div>
                <div class="weapon-stat"><span>Fire Rate</span><span>${w.fireRate}ms</span></div>
                <div class="weapon-stat"><span>Mag Size</span><span>${Math.floor(w.magSize * (1 + (Math.max(1,level) - 1) * 0.1))}</span></div>
                <div class="weapon-stat"><span>Range</span><span>${w.range}</span></div>
                <div class="weapon-stat"><span>Reload</span><span>${(w.reloadTime/1000).toFixed(1)}s</span></div>
                ${w.pellets ? `<div class="weapon-stat"><span>Pellets</span><span>${w.pellets}</span></div>` : ''}
                ${w.explosive ? `<div class="weapon-stat"><span>Explosive</span><span>✓</span></div>` : ''}
            </div>
            ${!owned ? `<button class="weapon-action buy-btn" data-action="buy" data-id="${w.id}">🪙 BUY — ${w.cost}</button>` :
              equipped ? `<button class="weapon-action equipped-btn">✓ EQUIPPED</button>` :
              `<button class="weapon-action" data-action="equip" data-id="${w.id}">EQUIP</button>`}
            ${canUpgrade ? `<button class="weapon-action upgrade-btn" data-action="upgrade" data-id="${w.id}">⬆ UPGRADE — 🪙 ${upgradeCost}</button>` : ''}
        `;
        container.appendChild(card);
    });

    // ===== BOMB SHOP SECTION =====
    const bombHeader = document.createElement('div');
    bombHeader.className = 'shop-section-header';
    bombHeader.innerHTML = `<h3 style="text-align:center;color:#ff8800;font-family:'Orbitron',sans-serif;font-size:18px;margin:20px 0 10px;letter-spacing:3px;text-shadow:0 0 10px rgba(255,136,0,0.5)">
        💣 BOMB SHOP 💣</h3>`;
    container.appendChild(bombHeader);

    BOMB_SHOP.forEach(b => {
        const count = state.getBombCount(b.id);
        const isEquipped = state.equippedBomb && state.equippedBomb.id === b.id;
        const card = document.createElement('div');
        card.className = 'weapon-card bomb-card' + (isEquipped ? ' equipped' : '');
        card.innerHTML = `
            ${isEquipped ? '<span class="weapon-tag equipped-tag">EQUIPPED</span>' : ''}
            <div class="weapon-icon" style="font-size:32px">${b.icon || '💣'}</div>
            <div class="weapon-name">${b.name}</div>
            <div style="text-align:center;font-size:12px;color:#ff8800;margin-bottom:5px">Owned: ${count}</div>
            <div class="weapon-stats">
                <div class="weapon-stat"><span>Damage</span><span>${b.damage}</span></div>
                <div class="weapon-stat"><span>Radius</span><span>${b.radius}m</span></div>
            </div>
            <button class="weapon-action buy-btn" data-action="buy-bomb" data-id="${b.id}">🪙 BUY — ${b.cost}</button>
            ${count > 0 && !isEquipped ? `<button class="weapon-action" data-action="equip-bomb" data-id="${b.id}">EQUIP</button>` : ''}
        `;
        container.appendChild(card);
    });

    // Event delegation
    container.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.action;
            const id = btn.dataset.id;
            audio.playClick();

            if (action === 'buy') {
                if (state.buyWeapon(id)) {
                    notify(`${WEAPONS.find(w => w.id === id).name} purchased!`, 'reward');
                    audio.playPickup();
                    renderShop();
                } else {
                    notify('Not enough coins!');
                }
            } else if (action === 'equip') {
                state.equipWeapon(id);
                notify(`${WEAPONS.find(w => w.id === id).name} equipped!`);
                renderShop();
            } else if (action === 'upgrade') {
                const w = WEAPONS.find(w => w.id === id);
                if (state.upgradeWeapon(id)) {
                    notify(`${w.name} upgraded to Level ${state.getWeaponLevel(id)}!`, 'reward');
                    audio.playPickup();
                    renderShop();
                } else {
                    notify('Not enough coins!');
                }
            } else if (action === 'buy-bomb') {
                const bomb = BOMB_SHOP.find(b => b.id === id);
                if (bomb && state.buyBomb(id, 1)) {
                    notify(`${bomb.name} purchased! (${state.getBombCount(id)} owned)`, 'reward');
                    audio.playPickup();
                    renderShop();
                } else {
                    notify('Not enough coins!');
                }
            } else if (action === 'equip-bomb') {
                const bomb = BOMB_SHOP.find(b => b.id === id);
                if (bomb) {
                    state.equipBomb(id);
                    notify(`${bomb.name} equipped!`);
                    renderShop();
                }
            }
        });
    });
}

// ===== DAILY CHECK-IN =====
function renderCheckin() {
    const container = document.getElementById('checkin-content');
    const streak = state.data.checkin.streak || 0;
    const canClaim = state.canCheckin();
    const today = new Date().toDateString();
    const history = state.data.checkin.history || [];

    // Build 7-day calendar
    const dayRewards = [75, 100, 125, 150, 175, 200, 300];
    const dayNames = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

    let html = `
        <h3 style="font-family:'Orbitron';font-size:20px;letter-spacing:3px;color:#ffd700;margin-bottom:5px">DAILY REWARDS</h3>
        <p class="streak-info">🔥 Current Streak: ${streak} days</p>
        <div class="checkin-grid">
    `;

    for (let i = 0; i < 7; i++) {
        const dayIdx = i + 1;
        const isClaimed = streak > i || (streak === i && !canClaim);
        const isToday = streak === i && canClaim;

        html += `
            <div class="checkin-day ${isClaimed ? 'claimed' : ''} ${isToday ? 'today' : ''}">
                <div class="day-num">${dayNames[i]}</div>
                <div class="day-reward">${isClaimed ? '✅' : '🪙'}</div>
                <div class="day-amount">${dayRewards[i]}</div>
            </div>
        `;
    }

    html += `</div>`;
    html += `<button class="checkin-btn" id="btn-claim" ${!canClaim ? 'disabled' : ''}>
        ${canClaim ? '🎁 CLAIM REWARD' : '✅ ALREADY CLAIMED TODAY'}
    </button>`;

    if (state.data.checkin.lastDate) {
        html += `<p style="margin-top:15px;color:#666;font-size:12px">Last check-in: ${state.data.checkin.lastDate}</p>`;
    }

    container.innerHTML = html;

    // Bind claim button
    const claimBtn = document.getElementById('btn-claim');
    if (claimBtn && canClaim) {
        claimBtn.addEventListener('click', () => {
            audio.resume();
            const reward = state.doCheckin();
            if (reward > 0) {
                audio.playPickup();
                notify(`+${reward} coins earned!`, 'reward');
                renderCheckin();
                updateMenuInfo();
            }
        });
    }
}

// ===== SETTINGS =====
function loadSettings() {
    document.getElementById('music-vol').value = state.data.settings.musicVol;
    document.getElementById('sfx-vol').value = state.data.settings.sfxVol;
    document.getElementById('show-fps').checked = state.data.settings.showFps;
}

document.getElementById('music-vol').addEventListener('input', (e) => {
    const v = parseInt(e.target.value);
    state.data.settings.musicVol = v;
    audio.setMusicVolume(v / 100);
    state.save();
});

document.getElementById('sfx-vol').addEventListener('input', (e) => {
    const v = parseInt(e.target.value);
    state.data.settings.sfxVol = v;
    audio.setSfxVolume(v / 100);
    state.save();
});

document.getElementById('show-fps').addEventListener('change', (e) => {
    state.data.settings.showFps = e.target.checked;
    state.save();
});

document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Are you sure? This will erase ALL progress, coins, and weapons!')) {
        state.reset();
        notify('All data reset!');
        updateMenuInfo();
        audio.playClick();
    }
});

// ===== INITIAL AUDIO INIT ON FIRST INTERACTION =====
document.addEventListener('click', function initAudioOnce() {
    audio.init();
    audio.resume();
    audio.setMusicVolume(state.data.settings.musicVol / 100);
    audio.setSfxVolume(state.data.settings.sfxVol / 100);
    if (!audio.isPlaying) {
        audio.playMenuMusic();
    }
    document.removeEventListener('click', initAudioOnce);
}, { once: true });
