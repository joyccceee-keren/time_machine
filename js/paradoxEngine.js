/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Butterfly Effect & Timeline Paradox Simulator Engine
 */

(function() {
  let activeEra = null;

  document.addEventListener("DOMContentLoaded", () => {
    setupParadoxEngine();
  });

  function setupParadoxEngine() {
    const runBtn = document.getElementById("btn-run-simulation");
    if (runBtn) {
      runBtn.addEventListener("click", executeSimulation);
    }

    const testFromDossierBtn = document.getElementById("btn-test-paradox");
    if (testFromDossierBtn) {
      testFromDossierBtn.addEventListener("click", () => {
        // Switch to Paradox tab
        const paradoxTabBtn = document.getElementById("tab-btn-paradox");
        if (paradoxTabBtn) paradoxTabBtn.click();
        executeSimulation();
      });
    }

    // Initialize with current era
    if (window.ChronosState && window.ChronosState.currentEra) {
      updateParadoxScenarios(window.ChronosState.currentEra);
    }
  }

  /**
   * Update Paradox Scenario options based on current era
   */
  function updateParadoxScenarios(era) {
    activeEra = era;
    const select = document.getElementById("paradox-scenario-select");
    if (!select) return;

    select.innerHTML = "";

    if (!era.scenarios || era.scenarios.length === 0) {
      const opt = document.createElement("option");
      opt.value = "default";
      opt.textContent = `General timeline interference in ${era.name}`;
      select.appendChild(opt);
      return;
    }

    era.scenarios.forEach((sc, idx) => {
      const opt = document.createElement("option");
      opt.value = sc.id;
      opt.textContent = `[${era.displayYear} ${era.era}] ${sc.title}`;
      if (idx === 0) opt.selected = true;
      select.appendChild(opt);
    });

    // Reset gauge preview
    resetGauge();
  }

  function resetGauge() {
    const score = document.getElementById("divergence-score");
    const bar = document.getElementById("divergence-bar-fill");
    const cascadeList = document.getElementById("cascade-list");

    if (score) score.textContent = "0.0%";
    if (bar) bar.style.width = "0%";
    if (cascadeList) {
      cascadeList.innerHTML = `<li class="cascade-item neutral">Select a scenario and execute simulation to map alternate history branches in ${activeEra ? activeEra.name : 'this era'}.</li>`;
    }
  }

  /**
   * Execute Butterfly Effect Simulation
   */
  function executeSimulation() {
    const select = document.getElementById("paradox-scenario-select");
    const scoreDisplay = document.getElementById("divergence-score");
    const barFill = document.getElementById("divergence-bar-fill");
    const cascadeList = document.getElementById("cascade-list");

    if (!activeEra || !select) return;

    const selectedId = select.value;
    const scenario = (activeEra.scenarios || []).find(s => s.id === selectedId) || {
      title: "Microscopic Temporal Displacement",
      divergence: 52.4,
      type: "warning",
      cascade: [
        "Localized quantum fluctuation detected in background radiation.",
        "Slight alteration in historical birth rates over subsequent centuries.",
        "Timeline retains 94% prime structural cohesion."
      ]
    };

    // Trigger calculation audio
    if (window.TemporalAudio) {
      window.TemporalAudio.playParadoxCalc();
    }

    // Animate divergence gauge
    let currentScore = 0;
    const targetScore = scenario.divergence;
    const step = targetScore / 25;

    if (barFill) barFill.style.width = `${targetScore}%`;

    const timer = setInterval(() => {
      currentScore += step;
      if (currentScore >= targetScore) {
        currentScore = targetScore;
        clearInterval(timer);

        // If high risk, play warning
        if (targetScore > 75 && window.TemporalAudio) {
          window.TemporalAudio.playAlarm();
        }
      }
      if (scoreDisplay) scoreDisplay.textContent = `${currentScore.toFixed(1)}%`;
    }, 25);

    // Render ripple cascade steps
    if (cascadeList) {
      cascadeList.innerHTML = "";
      scenario.cascade.forEach((ripple, index) => {
        const item = document.createElement("li");
        item.className = `cascade-item ${scenario.type || 'warning'}`;
        item.innerHTML = `<strong>RIPPLE PHASE ${index + 1}:</strong> ${ripple}`;
        item.style.opacity = "0";
        item.style.transform = "translateX(-10px)";
        item.style.transition = "all 0.3s ease";
        cascadeList.appendChild(item);

        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, (index + 1) * 200);
      });
    }
  }

  // Export to window
  window.updateParadoxScenarios = updateParadoxScenarios;
  window.executeSimulation = executeSimulation;
})();
