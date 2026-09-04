/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Chrono-Expedition Journal & Passport System
 */

(function() {
  const STORAGE_KEY = "chronos_x_travel_journal";
  let journalEntries = [];

  function initJournal() {
    loadJournal();
    setupJournalListeners();
    renderJournal();
  }

  function loadJournal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        journalEntries = JSON.parse(raw);
      } else {
        journalEntries = [];
      }
    } catch (e) {
      console.warn("Could not load journal from storage", e);
      journalEntries = [];
    }
  }

  function saveJournal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(journalEntries));
    } catch (e) {
      console.warn("Could not save journal to storage", e);
    }
  }

  function setupJournalListeners() {
    // Record log button in journal tab
    const btnSaveNote = document.getElementById("btn-save-note");
    if (btnSaveNote) {
      btnSaveNote.addEventListener("click", () => {
        const input = document.getElementById("traveler-note-input");
        const note = input ? input.value.trim() : "";
        if (note && window.ChronosState && window.ChronosState.currentEra) {
          addJournalEntry(window.ChronosState.currentEra, note);
          if (input) input.value = "";
        }
      });
    }

    // Stamp passport from Dossier tab
    const btnLogVisit = document.getElementById("btn-log-visit");
    if (btnLogVisit) {
      btnLogVisit.addEventListener("click", () => {
        if (window.ChronosState && window.ChronosState.currentEra) {
          addJournalEntry(window.ChronosState.currentEra, "Official expedition passport stamp applied.");
          // Switch to journal tab
          const journalTabBtn = document.getElementById("tab-btn-journal");
          if (journalTabBtn) journalTabBtn.click();
        }
      });
    }

    // Clear journal button
    const btnClear = document.getElementById("btn-clear-journal");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        if (confirm("Clear all recorded expedition logs from memory?")) {
          journalEntries = [];
          saveJournal();
          renderJournal();
          if (window.TemporalAudio) window.TemporalAudio.playBeep(220, 0.1);
        }
      });
    }
  }

  function addJournalEntry(era, note = "Expedition checkpoint reached.") {
    const entry = {
      id: "log_" + Date.now(),
      eraId: era.id,
      eraName: era.name,
      eraYear: era.displayYear || era.year,
      eraEpoch: era.era || "AD",
      note: note,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      dateStamp: new Date().toLocaleDateString()
    };

    journalEntries.unshift(entry);
    saveJournal();
    renderJournal();

    if (window.TemporalAudio) {
      window.TemporalAudio.playTargetSet();
    }
  }

  function renderJournal() {
    const listContainer = document.getElementById("journal-log-list");
    const countBadge = document.getElementById("journal-count");
    const statTotal = document.getElementById("stat-total-jumps");
    const statEras = document.getElementById("stat-eras-visited");
    const statOldest = document.getElementById("stat-oldest-era");

    if (countBadge) countBadge.textContent = journalEntries.length;
    if (statTotal) statTotal.textContent = journalEntries.length;

    // Calculate unique eras
    const uniqueEras = new Set(journalEntries.map(e => e.eraId));
    if (statEras) statEras.textContent = uniqueEras.size;

    // Calculate furthest jump back in time
    if (journalEntries.length > 0) {
      const hasBCE = journalEntries.some(e => e.eraEpoch === "BC" || e.eraEpoch === "BCE");
      if (hasBCE) {
        const bceEntries = journalEntries.filter(e => e.eraEpoch === "BC" || e.eraEpoch === "BCE");
        if (statOldest) statOldest.textContent = `${bceEntries[0].eraYear} BC`;
      } else {
        if (statOldest) statOldest.textContent = `${journalEntries[journalEntries.length - 1].eraYear} AD`;
      }
    } else {
      if (statOldest) statOldest.textContent = "-";
    }

    if (!listContainer) return;

    if (journalEntries.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-journal-notice">
          <span class="empty-icon">🧭</span>
          <p>No temporal jumps recorded yet. Calibrate coordinates and engage the warp drive to collect stamps and logs!</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = "";
    journalEntries.forEach(item => {
      const entryEl = document.createElement("div");
      entryEl.className = "journal-entry";
      entryEl.innerHTML = `
        <div class="journal-entry-left">
          <span class="journal-entry-era">🔖 ${item.eraYear} ${item.eraEpoch} &bull; ${item.eraName}</span>
          <span class="journal-entry-note">"${item.note}"</span>
        </div>
        <div class="journal-entry-time">${item.timestamp}</div>
      `;
      listContainer.appendChild(entryEl);
    });
  }

  // Global exports
  window.initJournal = initJournal;
  window.addJournalEntry = addJournalEntry;
})();
