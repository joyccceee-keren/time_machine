/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Web Audio Temporal Sound Synthesizer Engine
 * Generates all sci-fi SFX procedurally via pure Web Audio API oscillators and gain envelopes.
 */

class TemporalAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute(isMuted) {
    this.muted = isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(isMuted ? 0 : 0.3, this.ctx.currentTime);
    }
  }

  /**
   * Short crisp UI click / blip
   */
  playBeep(freq = 440, duration = 0.05, type = "sine") {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio synthesis error", e);
    }
  }

  /**
   * Dual harmonic chime for coordinate locking
   */
  playTargetSet() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.12, "triangle");
      }, idx * 70);
    });
  }

  /**
   * Crystalline shimmer for relic inspections
   */
  playRelicInspect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [880, 1174.66, 1396.91, 1760];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.25, "sine");
      }, idx * 50);
    });
  }

  /**
   * Rapid calculation arpeggio for paradox computation
   */
  playParadoxCalc() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const randFreq = 300 + Math.random() * 800;
        this.playBeep(randFreq, 0.04, "square");
      }, i * 45);
    }
  }

  /**
   * Dual-tone red-alert paradox klaxon
   */
  playAlarm() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const tones = [880, 440, 880, 440];
    tones.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.15, "sawtooth");
      }, idx * 180);
    });
  }

  /**
   * Full procedural time warp sequence
   * Accelerating pitch sweep, white-noise wormhole rushing, and deep sonic boom upon arrival
   */
  playWarpSequence() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const duration = 3.2;

      // 1. Rising Tachyon Oscillator
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + duration * 0.85);

      oscGain.gain.setValueAtTime(0.01, now);
      oscGain.gain.linearRampToValueAtTime(0.25, now + duration * 0.7);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);

      // 2. White-noise wormhole whoosh
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      // Filter sweep
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(3500, now + duration * 0.8);
      filter.Q.setValueAtTime(3, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.3, now + duration * 0.75);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + duration);

      // 3. Sub-bass arrival impact at conclusion
      setTimeout(() => {
        this.playArrivalBoom();
      }, (duration - 0.2) * 1000);

    } catch (e) {
      console.warn("Warp sound generation error", e);
    }
  }

  /**
   * Heavy low-frequency arrival thud
   */
  playArrivalBoom() {
    if (this.muted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();

      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(120, now);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.8);

      subGain.gain.setValueAtTime(0.4, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      subOsc.connect(subGain);
      subGain.connect(this.masterGain);

      subOsc.start(now);
      subOsc.stop(now + 0.9);
    } catch (e) {
      console.warn("Boom audio error", e);
    }
  }
}

// Global instance
window.TemporalAudio = new TemporalAudioSynthesizer();
