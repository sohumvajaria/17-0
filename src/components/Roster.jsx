const TOTAL_ROUNDS = 7;

function ratingTier(rating) {
  if (rating >= 90) return 'tier-elite';
  if (rating >= 80) return 'tier-star';
  if (rating >= 70) return 'tier-solid';
  return 'tier-average';
}

// roster is an array of { player, team, decade } objects built up over the game.
// currentRound is the 0-based index of the slot currently being filled.
export default function Roster({ roster, currentRound }) {
  return (
    <aside className="roster">
      <h3 className="roster-title">Your Roster</h3>

      <ul className="roster-slots">
        {/* Create 7 slots regardless of how many have been filled */}
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => {
          const pick = roster[i]; // undefined if not filled yet

          // Three visual states: filled, currently active, future empty
          let slotClass = 'roster-slot';
          if (pick)            slotClass += ' slot-filled';
          else if (i === currentRound) slotClass += ' slot-active';
          else                 slotClass += ' slot-empty';

          return (
            <li key={i} className={slotClass}>
              {pick ? (
                <>
                  <div className="slot-player-name">{pick.player.name}</div>
                  <div className="slot-player-meta">
                    <span className={`pos-badge pos-${pick.player.position}`}>
                      {pick.player.position}
                    </span>
                    <span className={`slot-rating ${ratingTier(pick.player.rating)}`}>
                      {pick.player.rating}
                    </span>
                  </div>
                  <div className="slot-player-team">
                    {pick.team} · {pick.decade}
                  </div>
                </>
              ) : (
                <span className="slot-placeholder">
                  {i === currentRound ? '▶ Round ' + (i + 1) : 'Round ' + (i + 1)}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Running total while the game is in progress */}
      {roster.length > 0 && (
        <div className="roster-total">
          Score: {roster.reduce((sum, p) => sum + p.player.rating, 0)}
          <span className="roster-total-max"> / {TOTAL_ROUNDS * 100}</span>
        </div>
      )}
    </aside>
  );
}
