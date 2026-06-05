import { PLAYERS } from '../data/players';

// Maps a rating number to a CSS class name used for color coding
function ratingTier(rating) {
  if (rating >= 90) return 'tier-elite';
  if (rating >= 80) return 'tier-star';
  if (rating >= 70) return 'tier-solid';
  return 'tier-average';
}

// Maps a rating to a short label shown next to the number
function ratingLabel(rating) {
  if (rating >= 95) return 'Legend';
  if (rating >= 90) return 'Elite';
  if (rating >= 80) return 'Star';
  if (rating >= 70) return 'Starter';
  return 'Depth';
}

export default function PlayerPicker({ team, decade, round, onPick }) {
  // Optional chaining (?.) means "only look up [decade] if PLAYERS[team] exists"
  // The ?? [] fallback means "use empty array if the combo has no data"
  const players = PLAYERS[team]?.[decade] ?? [];

  return (
    <div className="player-picker">
      {/* Context banner showing what the slot landed on */}
      <div className="pick-context">
        <span className="pick-context-team">{team}</span>
        <span className="pick-context-decade">{decade}</span>
      </div>

      <h2 className="pick-heading">Round {round + 1} — Choose your player</h2>

      <div className="player-list">
        {players.map((player) => (
          <button
            key={player.name}
            className="player-card"
            onClick={() => onPick(player)}
          >
            <div className="player-card-left">
              {/* Position badge gets a CSS class like "pos-QB", "pos-WR", etc. */}
              <span className={`pos-badge pos-${player.position}`}>
                {player.position}
              </span>
              <span className="player-name">{player.name}</span>
            </div>

            <div className="player-card-right">
              <span className={`player-label ${ratingTier(player.rating)}`}>
                {ratingLabel(player.rating)}
              </span>
              <span className={`player-rating ${ratingTier(player.rating)}`}>
                {player.rating}
              </span>
            </div>
          </button>
        ))}

        {/* Safety net: shown only if we somehow roll an empty combo */}
        {players.length === 0 && (
          <p className="no-players">No player data for this era.</p>
        )}
      </div>
    </div>
  );
}
