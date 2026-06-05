import { THRESHOLD, LOSS_UNIT } from '../data/players';

function ratingTier(rating) {
  if (rating >= 90) return 'tier-elite';
  if (rating >= 80) return 'tier-star';
  if (rating >= 70) return 'tier-solid';
  return 'tier-average';
}

// Turns a total score into an NFL-season record.
// Math breakdown:
//   - THRESHOLD (595) is the minimum total for 17-0.
//   - LOSS_UNIT (≈35) is how many rating points equal one loss.
//   - Math.ceil rounds up so you need to earn every win.
function calcRecord(total) {
  if (total >= THRESHOLD) return { wins: 17, losses: 0 };
  const deficit = THRESHOLD - total;
  const losses  = Math.min(17, Math.ceil(deficit / LOSS_UNIT));
  return { wins: 17 - losses, losses };
}

export default function Results({ roster, onPlayAgain }) {
  const total     = roster.reduce((sum, pick) => sum + pick.player.rating, 0);
  const maxTotal  = roster.length * 100;
  const { wins, losses } = calcRecord(total);
  const isPerfect = losses === 0;

  return (
    <div className="results">
      {/* Big record display */}
      <div className={`record-display ${isPerfect ? 'record-perfect' : ''}`}>
        <span className="record-wins">{wins}</span>
        <span className="record-dash">-</span>
        <span className="record-losses">{losses}</span>
      </div>

      {isPerfect ? (
        <p className="record-label perfect-label">PERFECT SEASON — 17-0</p>
      ) : (
        <p className="record-label">
          {wins >= 14 ? 'Strong season.' : wins >= 10 ? 'Respectable.' : 'Tough year.'}
          {' '}You needed {THRESHOLD - total} more points for 17-0.
        </p>
      )}

      {/* Breakdown of each pick */}
      <div className="results-roster">
        <h3 className="results-roster-title">Your picks</h3>
        {roster.map((pick, i) => (
          <div key={i} className="results-row">
            <span className="results-round">{i + 1}</span>
            <span className={`pos-badge pos-${pick.player.position}`}>
              {pick.player.position}
            </span>
            <span className="results-name">{pick.player.name}</span>
            <span className="results-source">
              {pick.team} · {pick.decade}
            </span>
            <span className={`results-rating ${ratingTier(pick.player.rating)}`}>
              {pick.player.rating}
            </span>
          </div>
        ))}

        <div className="results-total-row">
          <span className="results-total-label">Total</span>
          <span className="results-total-value">{total} / {maxTotal}</span>
        </div>
      </div>

      <button className="btn-primary" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}
