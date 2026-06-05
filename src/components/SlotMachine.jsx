import { useEffect, useState } from 'react';
import { getAvailableCombos } from '../data/players';

// Animation constants
// Total spin time ≈ 300ms (initial pause) + Σ delays ≈ 2.8s per round
const TOTAL_TICKS = 24;   // how many display updates before landing
const BASE_DELAY = 55;    // ms between ticks at the start (fast)
const MAX_DELAY  = 260;   // ms between ticks at the end (slow)

// We pick the final combo BEFORE the animation starts so the player
// can't game it, then reveal it gradually as the animation slows down.

export default function SlotMachine({ onLand }) {
  const combos = getAvailableCombos();

  const [displayTeam,   setDisplayTeam]   = useState(combos[0].team);
  const [displayDecade, setDisplayDecade] = useState(combos[0].decade);
  const [isLanded,      setIsLanded]      = useState(false);

  useEffect(() => {
    // ── Why a closure variable instead of useRef ──────────────────────────
    // React 18 StrictMode mounts → unmounts → remounts every component in dev.
    // A useRef is shared across that cycle, so the cleanup sets it to false,
    // and the second mount's animation would see false and bail out immediately.
    // A `let` variable is local to THIS effect call, so each mount gets its own
    // independent alive flag — which is exactly what we want.
    let alive = true;

    // Pick the outcome before the animation begins
    const finalCombo = combos[Math.floor(Math.random() * combos.length)];

    let tick = 0;

    function runTick() {
      if (!alive) return;
      tick++;

      if (tick < TOTAL_TICKS - 5) {
        // Fast phase: flash a random combo each tick so it looks like a blur
        const r = combos[Math.floor(Math.random() * combos.length)];
        setDisplayTeam(r.team);
        setDisplayDecade(r.decade);
      } else {
        // Slow phase: show the real answer so the player watches it "land"
        setDisplayTeam(finalCombo.team);
        setDisplayDecade(finalCombo.decade);
      }

      if (tick >= TOTAL_TICKS) {
        setIsLanded(true);
        onLand(finalCombo.team, finalCombo.decade);
        return;
      }

      // Quadratic ease-out: starts at BASE_DELAY, curves up to MAX_DELAY
      // progress goes 0 → 1 over the course of TOTAL_TICKS
      const progress = tick / TOTAL_TICKS;
      const delay = BASE_DELAY + (MAX_DELAY - BASE_DELAY) * (progress * progress);
      setTimeout(runTick, delay);
    }

    // Brief pause before the reel starts spinning (builds anticipation)
    setTimeout(runTick, 300);

    // Cleanup: if this component unmounts while animating, stop the callbacks
    return () => { alive = false; };
  }, []); // empty deps = run once when this component first mounts

  return (
    <div className={`slot-machine ${isLanded ? 'slot-landed' : 'slot-spinning'}`}>
      <p className="slot-round-label">Spin the reel</p>

      <div className="slot-reels">
        <div className="slot-reel">
          <div className="slot-reel-label">TEAM</div>
          <div className={`slot-reel-value ${isLanded ? '' : 'blurred'}`}>
            {displayTeam}
          </div>
        </div>

        <div className="slot-reel-sep">×</div>

        <div className="slot-reel">
          <div className="slot-reel-label">ERA</div>
          <div className={`slot-reel-value ${isLanded ? '' : 'blurred'}`}>
            {displayDecade}
          </div>
        </div>
      </div>

      {isLanded && (
        <p className="slot-landed-hint">Picking from this era…</p>
      )}
    </div>
  );
}
