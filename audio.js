/* ============================================
   SHADOW STRIKE — Audio Engine
   Cinematic procedural music & SFX via Web Audio API
   ============================================ */

class AudioEngine {
    constructor() {
        this.ctx = null;
        this.musicVol = 0.5;
        this.sfxVol = 0.7;
        this.musicGain = null;
        this.sfxGain = null;
        this.masterGain = null;
        this.isPlaying = false;
        this.currentNodes = [];
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 1.0;
        this.masterGain.connect(this.ctx.destination);
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = this.musicVol;
        this.musicGain.connect(this.masterGain);
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = this.sfxVol;
        this.sfxGain.connect(this.masterGain);
        this.initialized = true;
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMusicVolume(v) {
        this.musicVol = v;
        if (this.musicGain) this.musicGain.gain.value = v;
    }

    setSfxVolume(v) {
        this.sfxVol = v;
        if (this.sfxGain) this.sfxGain.gain.value = v;
    }

    // --- Cinematic Background Music (dark synth loop) ---
    playMenuMusic() {
        this.stopMusic();
        if (!this.ctx) return;
        this.isPlaying = true;
        this._menuLoop();
    }

    _menuLoop() {
        if (!this.isPlaying) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const bpm = 70;
        const beatLen = 60 / bpm;
        const barLen = beatLen * 4;
        const totalBars = 4;
        const loopLen = barLen * totalBars;

        // Dark pad
        const chords = [
            [130.81, 155.56, 196.00], // Cm
            [116.54, 138.59, 174.61], // Bbm
            [103.83, 130.81, 155.56], // Ab
            [116.54, 146.83, 174.61], // Bb
        ];

        chords.forEach((chord, i) => {
            chord.forEach(freq => {
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                const filter = ctx.createBiquadFilter();
                osc.type = 'sawtooth';
                osc.frequency.value = freq;
                filter.type = 'lowpass';
                filter.frequency.value = 400;
                filter.Q.value = 2;
                g.gain.setValueAtTime(0, now + i * barLen);
                g.gain.linearRampToValueAtTime(0.04, now + i * barLen + 0.3);
                g.gain.setValueAtTime(0.04, now + (i + 1) * barLen - 0.3);
                g.gain.linearRampToValueAtTime(0, now + (i + 1) * barLen);
                osc.connect(filter);
                filter.connect(g);
                g.connect(this.musicGain);
                osc.start(now + i * barLen);
                osc.stop(now + (i + 1) * barLen);
                this.currentNodes.push(osc);
            });
        });

        // Sub bass
        const bassNotes = [65.41, 58.27, 51.91, 58.27];
        bassNotes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            g.gain.setValueAtTime(0, now + i * barLen);
            g.gain.linearRampToValueAtTime(0.08, now + i * barLen + 0.1);
            g.gain.setValueAtTime(0.08, now + (i + 1) * barLen - 0.1);
            g.gain.linearRampToValueAtTime(0, now + (i + 1) * barLen);
            osc.connect(g);
            g.connect(this.musicGain);
            osc.start(now + i * barLen);
            osc.stop(now + (i + 1) * barLen);
            this.currentNodes.push(osc);
        });

        // Atmospheric high
        for (let i = 0; i < totalBars * 4; i++) {
            if (Math.random() > 0.6) {
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = 800 + Math.random() * 1200;
                g.gain.setValueAtTime(0, now + i * beatLen);
                g.gain.linearRampToValueAtTime(0.008, now + i * beatLen + 0.05);
                g.gain.exponentialRampToValueAtTime(0.001, now + i * beatLen + beatLen * 0.8);
                osc.connect(g);
                g.connect(this.musicGain);
                osc.start(now + i * beatLen);
                osc.stop(now + i * beatLen + beatLen);
                this.currentNodes.push(osc);
            }
        }

        // Kick-like hits
        for (let i = 0; i < totalBars * 4; i++) {
            if (i % 4 === 0 || i % 4 === 3) {
                const osc = ctx.createOscillator();
                const g = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(150, now + i * beatLen);
                osc.frequency.exponentialRampToValueAtTime(30, now + i * beatLen + 0.15);
                g.gain.setValueAtTime(0.12, now + i * beatLen);
                g.gain.exponentialRampToValueAtTime(0.001, now + i * beatLen + 0.2);
                osc.connect(g);
                g.connect(this.musicGain);
                osc.start(now + i * beatLen);
                osc.stop(now + i * beatLen + 0.3);
                this.currentNodes.push(osc);
            }
        }

        this._menuTimeout = setTimeout(() => this._menuLoop(), loopLen * 1000);
    }

    playGameMusic() {
        this.stopMusic();
        if (!this.ctx) return;
        this.isPlaying = true;
        this._gameLoop();
    }

    _gameLoop() {
        if (!this.isPlaying) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const bpm = 120;
        const beatLen = 60 / bpm;
        const barLen = beatLen * 4;
        const totalBars = 4;
        const loopLen = barLen * totalBars;

        // Aggressive bass
        const bassPattern = [65.41, 0, 65.41, 73.42, 0, 65.41, 0, 82.41,
                            65.41, 0, 65.41, 73.42, 0, 82.41, 0, 65.41];
        bassPattern.forEach((freq, i) => {
            if (freq === 0) return;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            const dist = ctx.createWaveShaperFunction ? null : null;
            osc.type = 'square';
            osc.frequency.value = freq;
            g.gain.setValueAtTime(0.06, now + i * beatLen);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * beatLen + beatLen * 0.8);
            osc.connect(g);
            g.connect(this.musicGain);
            osc.start(now + i * beatLen);
            osc.stop(now + i * beatLen + beatLen);
            this.currentNodes.push(osc);
        });

        // Hi-hat pattern (noise)
        for (let i = 0; i < totalBars * 8; i++) {
            const bufferSize = this.ctx.sampleRate * 0.05;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let s = 0; s < bufferSize; s++) data[s] = Math.random() * 2 - 1;
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            const g = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.value = 8000;
            g.gain.setValueAtTime(i % 2 === 0 ? 0.04 : 0.02, now + i * (beatLen / 2));
            g.gain.exponentialRampToValueAtTime(0.001, now + i * (beatLen / 2) + 0.05);
            noise.connect(filter);
            filter.connect(g);
            g.connect(this.musicGain);
            noise.start(now + i * (beatLen / 2));
            noise.stop(now + i * (beatLen / 2) + 0.06);
            this.currentNodes.push(noise);
        }

        // Heavy kick
        for (let i = 0; i < totalBars * 4; i++) {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, now + i * beatLen);
            osc.frequency.exponentialRampToValueAtTime(25, now + i * beatLen + 0.12);
            g.gain.setValueAtTime(0.15, now + i * beatLen);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * beatLen + 0.15);
            osc.connect(g);
            g.connect(this.musicGain);
            osc.start(now + i * beatLen);
            osc.stop(now + i * beatLen + 0.2);
            this.currentNodes.push(osc);
        }

        // Tension string
        const tensionNotes = [196.00, 185.00, 196.00, 220.00];
        tensionNotes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            osc.type = 'sawtooth';
            osc.frequency.value = freq;
            filter.type = 'lowpass';
            filter.frequency.value = 600;
            g.gain.setValueAtTime(0.025, now + i * barLen);
            g.gain.setValueAtTime(0.025, now + (i+1) * barLen - 0.1);
            g.gain.linearRampToValueAtTime(0, now + (i+1) * barLen);
            osc.connect(filter);
            filter.connect(g);
            g.connect(this.musicGain);
            osc.start(now + i * barLen);
            osc.stop(now + (i+1) * barLen);
            this.currentNodes.push(osc);
        });

        this._gameTimeout = setTimeout(() => this._gameLoop(), loopLen * 1000 - 50);
    }

    stopMusic() {
        this.isPlaying = false;
        clearTimeout(this._menuTimeout);
        clearTimeout(this._gameTimeout);
        this.currentNodes.forEach(n => {
            try { n.stop(); } catch(e) {}
        });
        this.currentNodes = [];
    }

    // --- SFX ---
    playShoot(weaponType = 'pistol') {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;

        if (weaponType === 'shotgun') {
            for (let s = 0; s < 3; s++) {
                const bufSize = ctx.sampleRate * 0.08;
                const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
                const d = buf.getChannelData(0);
                for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * (1 - i/bufSize);
                const src = ctx.createBufferSource();
                src.buffer = buf;
                const g = ctx.createGain();
                g.gain.setValueAtTime(0.3, now + s * 0.02);
                g.gain.exponentialRampToValueAtTime(0.001, now + s * 0.02 + 0.1);
                src.connect(g);
                g.connect(this.sfxGain);
                src.start(now + s * 0.02);
            }
        } else if (weaponType === 'sniper') {
            const bufSize = ctx.sampleRate * 0.15;
            const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i/bufSize, 0.5);
            const src = ctx.createBufferSource();
            src.buffer = buf;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.35, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            src.connect(g);
            g.connect(this.sfxGain);
            src.start(now);
            // Low thud
            const osc = ctx.createOscillator();
            const g2 = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.1);
            g2.gain.setValueAtTime(0.2, now);
            g2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            osc.connect(g2);
            g2.connect(this.sfxGain);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (weaponType === 'smg' || weaponType === 'rifle') {
            const bufSize = ctx.sampleRate * 0.04;
            const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * (1 - i/bufSize);
            const src = ctx.createBufferSource();
            src.buffer = buf;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.18, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
            src.connect(g);
            g.connect(this.sfxGain);
            src.start(now);
        } else {
            // Pistol — sharp crack with metallic ring
            const bufSize = ctx.sampleRate * 0.06;
            const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i/bufSize, 2);
            const src = ctx.createBufferSource();
            src.buffer = buf;
            const hp = ctx.createBiquadFilter();
            hp.type = 'highpass';
            hp.frequency.value = 800;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.25, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            src.connect(hp);
            hp.connect(g);
            g.connect(this.sfxGain);
            src.start(now);
            // Metallic ping
            const ping = ctx.createOscillator();
            const pg = ctx.createGain();
            ping.type = 'sine';
            ping.frequency.setValueAtTime(2200, now);
            ping.frequency.exponentialRampToValueAtTime(800, now + 0.04);
            pg.gain.setValueAtTime(0.08, now);
            pg.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
            ping.connect(pg);
            pg.connect(this.sfxGain);
            ping.start(now);
            ping.stop(now + 0.07);
        }
    }

    playHit() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
        g.gain.setValueAtTime(0.15, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.15);
    }

    playEnemyDeath() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
        g.gain.setValueAtTime(0.1, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;
        osc.connect(filter);
        filter.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.4);
    }

    playPlayerHit() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.25);
    }

    playReload() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Click
        const osc1 = ctx.createOscillator();
        const g1 = ctx.createGain();
        osc1.type = 'square';
        osc1.frequency.value = 2000;
        g1.gain.setValueAtTime(0.08, now);
        g1.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        osc1.connect(g1);
        g1.connect(this.sfxGain);
        osc1.start(now);
        osc1.stop(now + 0.03);
        // Slide
        const osc2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(300, now + 0.2);
        osc2.frequency.linearRampToValueAtTime(600, now + 0.35);
        g2.gain.setValueAtTime(0.05, now + 0.2);
        g2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc2.connect(g2);
        g2.connect(this.sfxGain);
        osc2.start(now + 0.2);
        osc2.stop(now + 0.45);
    }

    playPickup() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = f;
            g.gain.setValueAtTime(0.1, now + i * 0.08);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.15);
            osc.connect(g);
            g.connect(this.sfxGain);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.2);
        });
    }

    playLevelComplete() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const melody = [523.25, 659.25, 783.99, 1046.50];
        melody.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = f;
            g.gain.setValueAtTime(0.1, now + i * 0.15);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.3);
            osc.connect(g);
            g.connect(this.sfxGain);
            osc.start(now + i * 0.15);
            osc.stop(now + i * 0.15 + 0.35);
        });
    }

    playGameOver() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const melody = [392, 349.23, 293.66, 261.63];
        melody.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.value = f;
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 800;
            g.gain.setValueAtTime(0.06, now + i * 0.25);
            g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.25 + 0.4);
            osc.connect(filter);
            filter.connect(g);
            g.connect(this.sfxGain);
            osc.start(now + i * 0.25);
            osc.stop(now + i * 0.25 + 0.45);
        });
    }

    playClick() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 1200;
        g.gain.setValueAtTime(0.06, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.05);
    }

    playExplosion() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Low boom
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(20, now + 0.5);
        g.gain.setValueAtTime(0.5, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.7);
        // Noise burst (debris / crackle)
        const bufSize = Math.floor(ctx.sampleRate * 0.4);
        const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
            d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 1.5);
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const g2 = ctx.createGain();
        g2.gain.setValueAtTime(0.35, now);
        g2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(600, now);
        lp.frequency.exponentialRampToValueAtTime(100, now + 0.4);
        src.connect(lp);
        lp.connect(g2);
        g2.connect(this.sfxGain);
        src.start(now);
        // Secondary rumble
        const osc2 = ctx.createOscillator();
        const g3 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(50, now + 0.05);
        osc2.frequency.exponentialRampToValueAtTime(15, now + 0.4);
        g3.gain.setValueAtTime(0.15, now + 0.05);
        g3.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc2.connect(g3);
        g3.connect(this.sfxGain);
        osc2.start(now + 0.05);
        osc2.stop(now + 0.5);
    }

    playBombThrow() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Whoosh sound
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.3);
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(g);
        g.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.35);
    }

    playScope() {
        if (!this.ctx) return;
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Mechanical click + lens zoom sound
        const click = ctx.createOscillator();
        const cg = ctx.createGain();
        click.type = 'square';
        click.frequency.setValueAtTime(2000, now);
        click.frequency.exponentialRampToValueAtTime(800, now + 0.04);
        cg.gain.setValueAtTime(0.08, now);
        cg.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        click.connect(cg);
        cg.connect(this.sfxGain);
        click.start(now);
        click.stop(now + 0.08);
        // Low servo hum
        const servo = ctx.createOscillator();
        const sg = ctx.createGain();
        servo.type = 'sine';
        servo.frequency.setValueAtTime(120, now + 0.03);
        servo.frequency.exponentialRampToValueAtTime(200, now + 0.12);
        sg.gain.setValueAtTime(0.05, now + 0.03);
        sg.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        servo.connect(sg);
        sg.connect(this.sfxGain);
        servo.start(now + 0.03);
        servo.stop(now + 0.18);
    }
}

const audio = new AudioEngine();
