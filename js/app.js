/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Main Application Controller & UI State Orchestrator
 */

// Global State
const ChronosState = {
  currentEra: ERAS_DATA[4], // Default: 1985 Synthwave
  targetYear: 1985,
  targetMonth: 9, // Oct
  targetDay: 26,
  targetHour: 1,
  targetMin: 21,
  targetEra: "AD",
  
  lastDepartedYear: 1955,
  lastDepartedMonth: 10, // Nov
  lastDepartedDay: 5,
  lastDepartedHour: 6,
  lastDepartedMin: 0,
  lastDepartedEra: "AD",

  isWarping: false,
  soundEnabled: true,
  speedMph: 0.0,
  speedInterval: null
};

// Month Names Lookup
const MONTH_NAMES = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initLiveClocks();
  populatePresets();
  updateDestinationDisplay();
  updateDepartedDisplay();
  renderEraDossier(ChronosState.currentEra);
  setupEventListeners();
  setupTabs();
  
  if (typeof initWarpCanvas === "function") {
    initWarpCanvas();
  }
  if (typeof initJournal === "function") {
    initJournal();
  }
});

/**
 * Sync real-time present clock
 */
function initLiveClocks() {
  function updatePresentTime() {
    const now = new Date();
    const presMonth = document.getElementById("pres-month");
    const presDay = document.getElementById("pres-day");
    const presYear = document.getElementById("pres-year");
    const presHour = document.getElementById("pres-hour");
    const presMin = document.getElementById("pres-min");
    const presEra = document.getElementById("pres-era");

    if (presMonth) presMonth.textContent = MONTH_NAMES[now.getMonth()];
    if (presDay) presDay.textContent = String(now.getDate()).padStart(2, '0');
    if (presYear) presYear.textContent = String(now.getFullYear());
    if (presHour) presHour.textContent = String(now.getHours()).padStart(2, '0');
    if (presMin) presMin.textContent = String(now.getMinutes()).padStart(2, '0');
    if (presEra) presEra.textContent = "AD";
  }

  updatePresentTime();
  setInterval(updatePresentTime, 1000);
}

/**
 * Render Preset Epochs Buttons in UI
 */
function populatePresets() {
  const container = document.getElementById("preset-grid");
  if (!container) return;

  container.innerHTML = "";
  ERAS_DATA.forEach((era, idx) => {
    const btn = document.createElement("button");
    btn.className = `preset-btn ${era.id === ChronosState.currentEra.id ? 'active' : ''}`;
    btn.setAttribute("data-era-id", era.id);
    btn.setAttribute("title", `[Hotkey ${idx + 1}] Jump to ${era.name}`);

    btn.innerHTML = `
      <span class="preset-btn-era">${era.displayYear} ${era.era}</span>
      <span class="preset-btn-name">${era.name}</span>
    `;

    btn.addEventListener("click", () => {
      selectEraPreset(era.id);
      if (window.TemporalAudio) window.TemporalAudio.playBeep(440, 0.08);
    });

    container.appendChild(btn);
  });
}

/**
 * Select an era preset and update time destination circuits
 */
function selectEraPreset(eraId) {
  const era = getEraById(eraId);
  if (!era) return;

  ChronosState.currentEra = era;
  ChronosState.targetYear = Math.abs(era.year);
  ChronosState.targetMonth = era.month;
  ChronosState.targetDay = era.day;
  ChronosState.targetEra = era.era;

  // Sync Form inputs
  const customYear = document.getElementById("custom-year");
  const customMonth = document.getElementById("custom-month");
  const customDay = document.getElementById("custom-day");
  const customEra = document.getElementById("custom-era");

  if (customYear) customYear.value = era.year;
  if (customMonth) customMonth.value = era.month;
  if (customDay) customDay.value = era.day;
  if (customEra) customEra.value = era.era;

  // Update preset button active states
  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-era-id") === eraId);
  });

  updateDestinationDisplay();
  renderEraDossier(era);

  if (typeof updateParadoxScenarios === "function") {
    updateParadoxScenarios(era);
  }
}

/**
 * Update the Red Destination Time LED Readout
 */
function updateDestinationDisplay() {
  const destMonth = document.getElementById("dest-month");
  const destDay = document.getElementById("dest-day");
  const destYear = document.getElementById("dest-year");
  const destHour = document.getElementById("dest-hour");
  const destMin = document.getElementById("dest-min");
  const destEra = document.getElementById("dest-era");

  if (destMonth) destMonth.textContent = MONTH_NAMES[ChronosState.targetMonth] || "OCT";
  if (destDay) destDay.textContent = String(ChronosState.targetDay).padStart(2, '0');
  
  if (destYear) {
    const yrStr = String(ChronosState.targetYear);
    destYear.textContent = yrStr.length > 4 ? yrStr.slice(-4) : yrStr.padStart(4, '0');
  }

  if (destHour) destHour.textContent = String(ChronosState.targetHour).padStart(2, '0');
  if (destMin) destMin.textContent = String(ChronosState.targetMin).padStart(2, '0');
  if (destEra) destEra.textContent = ChronosState.targetEra;
}

/**
 * Update the Amber Last Time Departed LED Readout
 */
function updateDepartedDisplay() {
  const depMonth = document.getElementById("dep-month");
  const depDay = document.getElementById("dep-day");
  const depYear = document.getElementById("dep-year");
  const depHour = document.getElementById("dep-hour");
  const depMin = document.getElementById("dep-min");
  const depEra = document.getElementById("dep-era");

  if (depMonth) depMonth.textContent = MONTH_NAMES[ChronosState.lastDepartedMonth] || "NOV";
  if (depDay) depDay.textContent = String(ChronosState.lastDepartedDay).padStart(2, '0');
  
  if (depYear) {
    const yrStr = String(ChronosState.lastDepartedYear);
    depYear.textContent = yrStr.length > 4 ? yrStr.slice(-4) : yrStr.padStart(4, '0');
  }

  if (depHour) depHour.textContent = String(ChronosState.lastDepartedHour).padStart(2, '0');
  if (depMin) depMin.textContent = String(ChronosState.lastDepartedMin).padStart(2, '0');
  if (depEra) depEra.textContent = ChronosState.lastDepartedEra;
}

/**
 * Render Era Dossier in Right Panel
 */
function renderEraDossier(era) {
  if (!era) return;

  const badge = document.getElementById("dossier-badge");
  const title = document.getElementById("dossier-title");
  const tagline = document.getElementById("dossier-tagline");
  const climate = document.getElementById("dossier-climate");
  const pop = document.getElementById("dossier-population");
  const tech = document.getElementById("dossier-tech");
  const hazard = document.getElementById("dossier-hazard");
  const desc = document.getElementById("dossier-desc");
  const artifactsContainer = document.getElementById("dossier-artifacts");

  if (badge) badge.textContent = era.badge;
  if (title) title.textContent = era.name;
  if (tagline) tagline.textContent = era.tagline;
  if (climate) climate.textContent = era.climate;
  if (pop) pop.textContent = era.population;
  if (tech) tech.textContent = era.tech;
  if (hazard) hazard.textContent = era.hazard;
  if (desc) desc.textContent = era.description;

  if (artifactsContainer && era.artifacts) {
    artifactsContainer.innerHTML = "";
    era.artifacts.forEach(item => {
      const pill = document.createElement("div");
      pill.className = "artifact-pill";
      pill.innerHTML = `
        <span class="artifact-pill-icon">${item.icon}</span>
        <span class="artifact-pill-name">${item.name}</span>
      `;
      pill.addEventListener("click", () => showRelicModal(item));
      artifactsContainer.appendChild(pill);
    });
  }
}

/**
 * Relic Modal Controller
 */
function showRelicModal(item) {
  const modal = document.getElementById("relic-modal");
  const title = document.getElementById("relic-title");
  const icon = document.getElementById("relic-icon");
  const desc = document.getElementById("relic-desc");
  const origin = document.getElementById("relic-origin");
  const sign = document.getElementById("relic-significance");

  if (title) title.textContent = item.name;
  if (icon) icon.textContent = item.icon;
  if (desc) desc.textContent = item.desc;
  if (origin) origin.textContent = item.origin;
  if (sign) sign.textContent = item.significance;

  if (modal) modal.classList.add("active");
  if (window.TemporalAudio) window.TemporalAudio.playRelicInspect();
}

/**
 * Tab Navigation Setup
 */
function setupTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));

      btn.classList.add("active");
      const targetTabId = btn.getAttribute("data-tab");
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) targetContent.classList.add("active");

      if (window.TemporalAudio) window.TemporalAudio.playBeep(600, 0.04);
    });
  });
}

/**
 * Setup Button Clicks and Keyboard Shortcuts
 */
function setupEventListeners() {
  // Sound Toggle Button
  const soundBtn = document.getElementById("btn-sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      ChronosState.soundEnabled = !ChronosState.soundEnabled;
      const soundLabel = document.getElementById("sound-label");
      if (soundLabel) {
        soundLabel.textContent = ChronosState.soundEnabled ? "AUDIO: ON" : "AUDIO: MUTED";
      }
      if (window.TemporalAudio) window.TemporalAudio.toggleMute(!ChronosState.soundEnabled);
    });
  }

  // Set Custom Target Form
  const btnSetCustom = document.getElementById("btn-set-custom");
  if (btnSetCustom) {
    btnSetCustom.addEventListener("click", () => {
      const yearVal = parseInt(document.getElementById("custom-year").value, 10) || 1985;
      const monthVal = parseInt(document.getElementById("custom-month").value, 10) || 0;
      const dayVal = parseInt(document.getElementById("custom-day").value, 10) || 1;
      const eraVal = document.getElementById("custom-era").value;

      ChronosState.targetYear = Math.abs(yearVal);
      ChronosState.targetMonth = monthVal;
      ChronosState.targetDay = dayVal;
      ChronosState.targetEra = eraVal;

      const closest = findClosestEra(yearVal, eraVal);
      ChronosState.currentEra = closest;

      updateDestinationDisplay();
      renderEraDossier(closest);

      if (typeof updateParadoxScenarios === "function") {
        updateParadoxScenarios(closest);
      }

      if (window.TemporalAudio) window.TemporalAudio.playTargetSet();
    });
  }

  // Engage Warp Button
  const btnEngageWarp = document.getElementById("btn-engage-warp");
  if (btnEngageWarp) {
    btnEngageWarp.addEventListener("click", triggerWarpSequence);
  }

  // Close Relic Modal
  const btnCloseRelic = document.getElementById("btn-close-relic");
  if (btnCloseRelic) {
    btnCloseRelic.addEventListener("click", () => {
      document.getElementById("relic-modal").classList.remove("active");
    });
  }

  const relicModal = document.getElementById("relic-modal");
  if (relicModal) {
    relicModal.addEventListener("click", (e) => {
      if (e.target === relicModal) relicModal.classList.remove("active");
    });
  }

  // Keyboard Shortcuts (Space to Warp, 1-7 for Presets)
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    if (e.code === "Space") {
      e.preventDefault();
      triggerWarpSequence();
    } else if (e.key >= '1' && e.key <= '7') {
      const idx = parseInt(e.key, 10) - 1;
      if (ERAS_DATA[idx]) {
        selectEraPreset(ERAS_DATA[idx].id);
      }
    }
  });
}

/**
 * Master Time Warp Activation Sequence
 */
function triggerWarpSequence() {
  if (ChronosState.isWarping) return;
  ChronosState.isWarping = true;

  // Record Previous Destination into Last Departed
  ChronosState.lastDepartedYear = ChronosState.targetYear;
  ChronosState.lastDepartedMonth = ChronosState.targetMonth;
  ChronosState.lastDepartedDay = ChronosState.targetDay;
  ChronosState.lastDepartedEra = ChronosState.targetEra;
  updateDepartedDisplay();

  const overlay = document.getElementById("warp-overlay");
  const speedDisplay = document.getElementById("overlay-speed-num");
  const tachyonReadout = document.getElementById("tachyon-speed-readout");
  const targetReadout = document.getElementById("overlay-target-text");
  const progressFill = document.getElementById("overlay-progress-fill");
  const statusBadge = document.getElementById("dest-status-badge");

  if (targetReadout) {
    targetReadout.textContent = `TARGET: ${ChronosState.currentEra.name.toUpperCase()} (${ChronosState.targetYear} ${ChronosState.targetEra})`;
  }
  if (statusBadge) {
    statusBadge.textContent = "WARPING...";
    statusBadge.classList.add("text-amber");
  }

  if (overlay) overlay.classList.add("active");
  if (window.TemporalAudio) window.TemporalAudio.playWarpSequence();
  if (window.setWarpCanvasSpeed) window.setWarpCanvasSpeed(true);

  // Accelerate to 88.0 MPH
  let currentSpeed = 0;
  let progress = 0;
  const durationMs = 3200;
  const intervalMs = 40;
  const steps = durationMs / intervalMs;
  const speedIncrement = 88.0 / (steps * 0.7);

  const warpTimer = setInterval(() => {
    progress += (100 / steps);
    if (progressFill) progressFill.style.width = `${Math.min(100, progress)}%`;

    if (currentSpeed < 88.0) {
      currentSpeed = Math.min(88.0, currentSpeed + speedIncrement);
    }
    
    const formattedSpeed = currentSpeed.toFixed(1);
    if (speedDisplay) speedDisplay.textContent = formattedSpeed;
    if (tachyonReadout) tachyonReadout.textContent = `${formattedSpeed} MPH`;

    if (progress >= 100) {
      clearInterval(warpTimer);
      completeWarpSequence();
    }
  }, intervalMs);
}

/**
 * Conclude Warp Sequence & Land in Target Era
 */
function completeWarpSequence() {
  const overlay = document.getElementById("warp-overlay");
  const tachyonReadout = document.getElementById("tachyon-speed-readout");
  const statusBadge = document.getElementById("dest-status-badge");

  if (overlay) overlay.classList.remove("active");
  if (window.setWarpCanvasSpeed) window.setWarpCanvasSpeed(false);
  if (tachyonReadout) tachyonReadout.textContent = "0.0 MPH";
  if (statusBadge) {
    statusBadge.textContent = "ARRIVED";
    statusBadge.classList.remove("text-amber");
    statusBadge.classList.add("text-emerald");
  }

  ChronosState.isWarping = false;

  // Auto-stamp passport entry upon arrival
  if (typeof addJournalEntry === "function") {
    addJournalEntry(ChronosState.currentEra, "Temporal jump completed successfully. Spacetime coordinates locked.");
  }
}
