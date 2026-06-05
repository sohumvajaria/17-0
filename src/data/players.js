// ─────────────────────────────────────────────────────────────────────────────
// 17-0 Player Database  (placeholder — replace with your real dataset)
//
// Shape:
//   PLAYERS[teamName][decade] = array of player objects
//
// Each player object:
//   name     – display name (string)
//   position – short abbreviation: QB RB WR TE OL DL LB CB S K KR
//   rating   – 1–100  (90-99 = all-time great, 80-89 = Pro Bowl star,
//                       70-79 = solid starter, 60-69 = role player)
//
// To add a team/decade: just add a new key.  The slot machine only ever
// rolls combos that have at least one player, so missing combos are
// automatically skipped — you don't need to fill every cell.
// ─────────────────────────────────────────────────────────────────────────────

export const PLAYERS = {
  'Kansas City Chiefs': {
    '1960s': [
      { name: 'Len Dawson',      position: 'QB', rating: 88 },
      { name: 'Buck Buchanan',   position: 'DL', rating: 90 },
      { name: 'Otis Taylor',     position: 'WR', rating: 82 },
      { name: 'Bobby Bell',      position: 'LB', rating: 89 },
    ],
    '1970s': [
      { name: 'Willie Lanier',   position: 'LB', rating: 91 },
      { name: 'Emmitt Thomas',   position: 'CB', rating: 83 },
      { name: 'Ed Podolak',      position: 'RB', rating: 74 },
    ],
    '1990s': [
      { name: 'Derrick Thomas',  position: 'LB', rating: 95 },
      { name: 'Neil Smith',      position: 'DL', rating: 82 },
      { name: 'Marcus Allen',    position: 'RB', rating: 85 },
      { name: 'Tony Gonzalez',   position: 'TE', rating: 90 },
    ],
    '2000s': [
      { name: 'Tony Gonzalez',   position: 'TE', rating: 94 },
      { name: 'Priest Holmes',   position: 'RB', rating: 87 },
      { name: 'Trent Green',     position: 'QB', rating: 74 },
    ],
    '2010s': [
      { name: 'Patrick Mahomes', position: 'QB', rating: 98 },
      { name: 'Travis Kelce',    position: 'TE', rating: 96 },
      { name: 'Tyreek Hill',     position: 'WR', rating: 92 },
      { name: 'Eric Berry',      position: 'S',  rating: 88 },
    ],
    '2020s': [
      { name: 'Patrick Mahomes', position: 'QB', rating: 99 },
      { name: 'Travis Kelce',    position: 'TE', rating: 94 },
      { name: 'Chris Jones',     position: 'DL', rating: 90 },
      { name: 'Isiah Pacheco',   position: 'RB', rating: 78 },
    ],
  },

  'Dallas Cowboys': {
    '1960s': [
      { name: 'Don Meredith',    position: 'QB', rating: 78 },
      { name: 'Bob Lilly',       position: 'DL', rating: 93 },
      { name: 'Bob Hayes',       position: 'WR', rating: 86 },
    ],
    '1970s': [
      { name: 'Roger Staubach',  position: 'QB', rating: 95 },
      { name: 'Tony Dorsett',    position: 'RB', rating: 92 },
      { name: 'Drew Pearson',    position: 'WR', rating: 86 },
      { name: 'Randy White',     position: 'DL', rating: 93 },
      { name: 'Harvey Martin',   position: 'DL', rating: 83 },
    ],
    '1980s': [
      { name: 'Tony Dorsett',    position: 'RB', rating: 88 },
      { name: 'Too Tall Jones',  position: 'DL', rating: 85 },
      { name: 'Danny White',     position: 'QB', rating: 73 },
    ],
    '1990s': [
      { name: 'Troy Aikman',     position: 'QB', rating: 90 },
      { name: 'Emmitt Smith',    position: 'RB', rating: 96 },
      { name: 'Michael Irvin',   position: 'WR', rating: 92 },
      { name: 'Deion Sanders',   position: 'CB', rating: 96 },
      { name: 'Larry Allen',     position: 'OL', rating: 94 },
    ],
    '2000s': [
      { name: 'Jason Witten',    position: 'TE', rating: 86 },
      { name: 'DeMarcus Ware',   position: 'LB', rating: 93 },
      { name: 'Tony Romo',       position: 'QB', rating: 82 },
    ],
    '2010s': [
      { name: 'Dez Bryant',      position: 'WR', rating: 87 },
      { name: 'Zack Martin',     position: 'OL', rating: 91 },
      { name: 'DeMarcus Lawrence', position: 'DL', rating: 84 },
      { name: 'Ezekiel Elliott', position: 'RB', rating: 86 },
    ],
    '2020s': [
      { name: 'CeeDee Lamb',     position: 'WR', rating: 93 },
      { name: 'Micah Parsons',   position: 'LB', rating: 96 },
      { name: 'Dak Prescott',    position: 'QB', rating: 84 },
    ],
  },

  'San Francisco 49ers': {
    '1980s': [
      { name: 'Joe Montana',     position: 'QB', rating: 99 },
      { name: 'Jerry Rice',      position: 'WR', rating: 99 },
      { name: 'Roger Craig',     position: 'RB', rating: 87 },
      { name: 'Ronnie Lott',     position: 'S',  rating: 96 },
      { name: 'Charles Haley',   position: 'DL', rating: 88 },
    ],
    '1990s': [
      { name: 'Steve Young',     position: 'QB', rating: 96 },
      { name: 'Jerry Rice',      position: 'WR', rating: 98 },
      { name: 'Deion Sanders',   position: 'CB', rating: 95 },
      { name: 'Garrison Hearst', position: 'RB', rating: 79 },
    ],
    '2000s': [
      { name: 'Frank Gore',      position: 'RB', rating: 83 },
      { name: 'Patrick Willis',  position: 'LB', rating: 93 },
      { name: 'Alex Smith',      position: 'QB', rating: 74 },
    ],
    '2010s': [
      { name: 'Frank Gore',      position: 'RB', rating: 83 },
      { name: 'NaVorro Bowman',  position: 'LB', rating: 91 },
      { name: 'Richard Sherman', position: 'CB', rating: 88 },
      { name: 'Colin Kaepernick', position: 'QB', rating: 82 },
    ],
    '2020s': [
      { name: 'Christian McCaffrey', position: 'RB', rating: 94 },
      { name: 'Nick Bosa',       position: 'DL', rating: 93 },
      { name: 'Brock Purdy',     position: 'QB', rating: 85 },
      { name: 'Deebo Samuel',    position: 'WR', rating: 88 },
    ],
  },

  'Pittsburgh Steelers': {
    '1970s': [
      { name: 'Terry Bradshaw',  position: 'QB', rating: 91 },
      { name: 'Franco Harris',   position: 'RB', rating: 89 },
      { name: 'Lynn Swann',      position: 'WR', rating: 88 },
      { name: 'Jack Lambert',    position: 'LB', rating: 96 },
      { name: 'Mean Joe Greene', position: 'DL', rating: 97 },
      { name: 'Mel Blount',      position: 'CB', rating: 90 },
    ],
    '1980s': [
      { name: 'Mike Webster',    position: 'OL', rating: 91 },
      { name: 'Jack Ham',        position: 'LB', rating: 93 },
      { name: 'Louis Lipps',     position: 'WR', rating: 78 },
    ],
    '2000s': [
      { name: 'Ben Roethlisberger', position: 'QB', rating: 86 },
      { name: 'Hines Ward',      position: 'WR', rating: 83 },
      { name: 'Troy Polamalu',   position: 'S',  rating: 96 },
      { name: 'Jerome Bettis',   position: 'RB', rating: 86 },
    ],
    '2010s': [
      { name: 'Antonio Brown',   position: 'WR', rating: 93 },
      { name: "Le'Veon Bell",    position: 'RB', rating: 90 },
      { name: 'T.J. Watt',       position: 'LB', rating: 94 },
      { name: 'Maurkice Pouncey', position: 'OL', rating: 85 },
    ],
    '2020s': [
      { name: 'T.J. Watt',       position: 'LB', rating: 96 },
      { name: 'Minkah Fitzpatrick', position: 'S', rating: 90 },
      { name: 'Pat Freiermuth',  position: 'TE', rating: 78 },
    ],
  },

  'New England Patriots': {
    '1990s': [
      { name: 'Drew Bledsoe',    position: 'QB', rating: 80 },
      { name: 'Ben Coates',      position: 'TE', rating: 81 },
      { name: 'Curtis Martin',   position: 'RB', rating: 85 },
    ],
    '2000s': [
      { name: 'Tom Brady',       position: 'QB', rating: 96 },
      { name: 'Randy Moss',      position: 'WR', rating: 95 },
      { name: 'Wes Welker',      position: 'WR', rating: 86 },
      { name: 'Richard Seymour', position: 'DL', rating: 89 },
      { name: 'Ty Law',          position: 'CB', rating: 86 },
    ],
    '2010s': [
      { name: 'Tom Brady',       position: 'QB', rating: 97 },
      { name: 'Rob Gronkowski',  position: 'TE', rating: 97 },
      { name: 'Julian Edelman',  position: 'WR', rating: 84 },
      { name: "Dont'a Hightower", position: 'LB', rating: 84 },
    ],
    '2020s': [
      { name: 'Mac Jones',       position: 'QB', rating: 73 },
      { name: 'Matthew Judon',   position: 'LB', rating: 83 },
      { name: 'Rhamondre Stevenson', position: 'RB', rating: 76 },
    ],
  },

  'Green Bay Packers': {
    '1960s': [
      { name: 'Bart Starr',      position: 'QB', rating: 90 },
      { name: 'Jim Taylor',      position: 'RB', rating: 87 },
      { name: 'Paul Hornung',    position: 'RB', rating: 86 },
      { name: 'Ray Nitschke',    position: 'LB', rating: 92 },
      { name: 'Willie Davis',    position: 'DL', rating: 88 },
      { name: 'Forrest Gregg',   position: 'OL', rating: 89 },
    ],
    '1990s': [
      { name: 'Brett Favre',     position: 'QB', rating: 95 },
      { name: 'Reggie White',    position: 'DL', rating: 97 },
      { name: 'Antonio Freeman', position: 'WR', rating: 82 },
      { name: 'LeRoy Butler',    position: 'S',  rating: 84 },
    ],
    '2000s': [
      { name: 'Brett Favre',     position: 'QB', rating: 88 },
      { name: 'Ahman Green',     position: 'RB', rating: 82 },
      { name: 'Donald Driver',   position: 'WR', rating: 79 },
    ],
    '2010s': [
      { name: 'Aaron Rodgers',   position: 'QB', rating: 97 },
      { name: 'Jordy Nelson',    position: 'WR', rating: 87 },
      { name: 'Clay Matthews',   position: 'LB', rating: 86 },
      { name: 'Davante Adams',   position: 'WR', rating: 92 },
    ],
    '2020s': [
      { name: 'Aaron Rodgers',   position: 'QB', rating: 93 },
      { name: 'Davante Adams',   position: 'WR', rating: 96 },
      { name: "Za'Darius Smith", position: 'LB', rating: 84 },
      { name: 'Jordan Love',     position: 'QB', rating: 82 },
    ],
  },

  'Chicago Bears': {
    '1960s': [
      { name: 'Dick Butkus',     position: 'LB', rating: 99 },
      { name: 'Gale Sayers',     position: 'RB', rating: 96 },
      { name: 'Mike Ditka',      position: 'TE', rating: 89 },
    ],
    '1970s': [
      { name: 'Walter Payton',   position: 'RB', rating: 99 },
      { name: 'Dick Butkus',     position: 'LB', rating: 95 },
    ],
    '1980s': [
      { name: 'Walter Payton',   position: 'RB', rating: 97 },
      { name: 'Mike Singletary', position: 'LB', rating: 95 },
      { name: 'Richard Dent',    position: 'DL', rating: 88 },
      { name: 'Jim McMahon',     position: 'QB', rating: 79 },
    ],
    '2000s': [
      { name: 'Brian Urlacher',  position: 'LB', rating: 93 },
      { name: 'Devin Hester',    position: 'KR', rating: 88 },
      { name: 'Charles Tillman', position: 'CB', rating: 84 },
      { name: 'Rex Grossman',    position: 'QB', rating: 68 },
    ],
    '2010s': [
      { name: 'Alshon Jeffery',  position: 'WR', rating: 82 },
      { name: 'Matt Forte',      position: 'RB', rating: 87 },
      { name: 'Kyle Fuller',     position: 'CB', rating: 82 },
    ],
    '2020s': [
      { name: 'Justin Fields',   position: 'QB', rating: 80 },
      { name: "D'Andre Swift",   position: 'RB', rating: 84 },
      { name: 'Caleb Williams',  position: 'QB', rating: 81 },
    ],
  },

  'Miami Dolphins': {
    '1970s': [
      { name: 'Bob Griese',      position: 'QB', rating: 88 },
      { name: 'Larry Csonka',    position: 'RB', rating: 91 },
      { name: 'Paul Warfield',   position: 'WR', rating: 92 },
      { name: 'Nick Buoniconti', position: 'LB', rating: 89 },
      { name: 'Bob Kuechenberg', position: 'OL', rating: 84 },
    ],
    '1980s': [
      { name: 'Dan Marino',      position: 'QB', rating: 98 },
      { name: 'Mark Duper',      position: 'WR', rating: 84 },
      { name: 'Mark Clayton',    position: 'WR', rating: 83 },
    ],
    '1990s': [
      { name: 'Dan Marino',      position: 'QB', rating: 92 },
      { name: 'Irving Fryar',    position: 'WR', rating: 79 },
      { name: 'Bryan Cox',       position: 'LB', rating: 77 },
    ],
    '2000s': [
      { name: 'Jason Taylor',    position: 'DL', rating: 92 },
      { name: 'Zach Thomas',     position: 'LB', rating: 88 },
      { name: 'Ricky Williams',  position: 'RB', rating: 82 },
    ],
    '2010s': [
      { name: 'Jarvis Landry',   position: 'WR', rating: 82 },
      { name: 'Ndamukong Suh',   position: 'DL', rating: 84 },
      { name: 'Cameron Wake',    position: 'DL', rating: 86 },
    ],
    '2020s': [
      { name: 'Tyreek Hill',     position: 'WR', rating: 94 },
      { name: 'Tua Tagovailoa',  position: 'QB', rating: 82 },
      { name: 'Jaylen Waddle',   position: 'WR', rating: 86 },
      { name: 'Jalen Ramsey',    position: 'CB', rating: 84 },
    ],
  },
};

// Returns every { team, decade } pair that has at least one player.
// The slot machine uses this list so it never rolls an empty combo.
export function getAvailableCombos() {
  const combos = [];
  for (const team of Object.keys(PLAYERS)) {
    for (const decade of Object.keys(PLAYERS[team])) {
      if (PLAYERS[team][decade].length > 0) {
        combos.push({ team, decade });
      }
    }
  }
  return combos;
}

// Scoring thresholds
// With 7 players rated 1-100, max possible total = 700.
// You need an average of ~85 per pick to reach 17-0.
export const THRESHOLD = 595;             // minimum total for a perfect season
export const LOSS_UNIT = Math.ceil(THRESHOLD / 17); // points per loss (≈ 35)
