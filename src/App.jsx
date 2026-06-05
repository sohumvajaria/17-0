import { useState } from 'react';
import SlotMachine  from './components/SlotMachine';
import PlayerPicker from './components/PlayerPicker';
import Roster       from './components/Roster';
import Results      from './components/Results';

// ─── Game phases ──────────────────────────────────────────────────────────────
// 'home'    → title screen
// 'rolling' → slot machine spinning
// 'picking' → slot landed, player choosing a player
// 'results' → all 7 rounds done

const TOTAL_ROUNDS = 7;

export default function App() {
  // Which screen to show
  const [phase, setPhase] = useState('home');

  // Which round (0–6) we are filling
  const [round, setRound] = useState(0);

  // What the slot machine landed on this round
  const [slot, setSlot] = useState(null);   // { team, decade }

  // Players the user has picked so far: [{ player, team, decade }, ...]
  const [roster, setRoster] = useState([]);

  function startGame() {
    setRound(0);
    setRoster([]);
    setSlot(null);
    setPhase('rolling');
  }

  // Called by SlotMachine when its animation completes
  function handleLand(team, decade) {
    setSlot({ team, decade });
    // Short pause so the player sees the landed values before the picker appears
    setTimeout(() => setPhase('picking'), 700);
  }

  // Called by PlayerPicker when the user clicks a player card
  function handlePick(player) {
    const newRoster = [...roster, { player, team: slot.team, decade: slot.decade }];
    setRoster(newRoster);

    const nextRound = round + 1;
    if (nextRound >= TOTAL_ROUNDS) {
      setPhase('results');
    } else {
      setRound(nextRound);
      setPhase('rolling');
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-logo">17-0</div>
        <div className="header-sub">Build the perfect NFL season</div>
      </header>

      <main className="app-main">

        {/* ── Home screen ──────────────────────────────────────────────── */}
        {phase === 'home' && (
          <div className="home-screen">
            <div className="home-card">
              <h2 className="home-title">Can you go 17-0?</h2>
              <ul className="home-rules">
                <li>The slot machine spins to a random <strong>NFL team</strong> and <strong>era</strong>.</li>
                <li>Pick one player from that team's history.</li>
                <li>Do it <strong>7 times</strong>.</li>
                <li>High enough total rating → perfect season.</li>
              </ul>
              <button className="btn-primary btn-large" onClick={startGame}>
                Start Game
              </button>
            </div>
          </div>
        )}

        {/* ── Active game (rolling + picking) ──────────────────────────── */}
        {(phase === 'rolling' || phase === 'picking') && (
          <div className="game-layout">
            <Roster roster={roster} currentRound={round} />

            <div className="game-center">
              {/*
                key={round} is the trick that makes this work.
                When `round` changes, React sees a NEW SlotMachine (because the key
                changed) and throws away the old one. That re-runs the useEffect
                animation fresh each round instead of reusing the same instance.
              */}
              {phase === 'rolling' && (
                <SlotMachine key={round} onLand={handleLand} />
              )}

              {phase === 'picking' && (
                <PlayerPicker
                  team={slot.team}
                  decade={slot.decade}
                  round={round}
                  onPick={handlePick}
                />
              )}
            </div>
          </div>
        )}

        {/* ── Results screen ───────────────────────────────────────────── */}
        {phase === 'results' && (
          <Results roster={roster} onPlayAgain={startGame} />
        )}

      </main>
    </div>
  );
}
