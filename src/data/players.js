// ─────────────────────────────────────────────────────────────────────────────
// 17-0 Player Database
//
// Shape:  PLAYERS[teamName][decade] = [ { name, position, rating }, … ]
// Rating: 80–99   (99=GOAT, 95-98=first-ballot HOF, 90-94=HOF,
//                  85-89=Pro Bowl star, 80-84=Pro Bowl)
// Mode:   FREEFORM — positions are display labels only; any player fills any slot.
//
// Missing combos are auto-skipped by getAvailableCombos().
// Add a team/decade by inserting a new key — nothing else to change.
//
// ── THIN SPOTS (< 3 players) — fill these next ───────────────────────────────
//   Pittsburgh Steelers  : 1960s, 1990s
//   New England Patriots : 1960s, 1970s, 1980s
//   San Francisco 49ers  : 1960s, 1970s
//   Kansas City Chiefs   : 1980s
//   Dallas Cowboys       : (covered 1960s–2020s, solid)
// ─────────────────────────────────────────────────────────────────────────────

export const PLAYERS = {

  // ═══════════════════════════════════════════════════════════════════════════
  //  KANSAS CITY CHIEFS
  // ═══════════════════════════════════════════════════════════════════════════
  'Kansas City Chiefs': {
    '1960s': [
      { name: 'Len Dawson',      position: 'QB', rating: 89 },
      { name: 'Buck Buchanan',   position: 'DL', rating: 91 },
      { name: 'Bobby Bell',      position: 'LB', rating: 90 },
      { name: 'Otis Taylor',     position: 'WR', rating: 83 },
    ],
    '1970s': [
      { name: 'Willie Lanier',   position: 'LB', rating: 92 },
      { name: 'Emmitt Thomas',   position: 'CB', rating: 84 },
      { name: 'Ed Podolak',      position: 'RB', rating: 80 },
    ],
    '1990s': [
      { name: 'Derrick Thomas',  position: 'LB', rating: 96 },
      { name: 'Marcus Allen',    position: 'RB', rating: 87 },
      { name: 'Tony Gonzalez',   position: 'TE', rating: 91 },
      { name: 'Neil Smith',      position: 'DL', rating: 84 },
    ],
    '2000s': [
      { name: 'Tony Gonzalez',   position: 'TE', rating: 95 },
      { name: 'Priest Holmes',   position: 'RB', rating: 88 },
      { name: 'Larry Johnson',   position: 'RB', rating: 85 },
      { name: 'Trent Green',     position: 'QB', rating: 80 },
    ],
    '2010s': [
      { name: 'Patrick Mahomes', position: 'QB', rating: 98 },
      { name: 'Travis Kelce',    position: 'TE', rating: 97 },
      { name: 'Tyreek Hill',     position: 'WR', rating: 93 },
      { name: 'Eric Berry',      position: 'S',  rating: 89 },
    ],
    '2020s': [
      { name: 'Patrick Mahomes', position: 'QB', rating: 99 },
      { name: 'Travis Kelce',    position: 'TE', rating: 95 },
      { name: 'Chris Jones',     position: 'DL', rating: 92 },
      { name: 'Rashee Rice',     position: 'WR', rating: 82 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DALLAS COWBOYS
  // ═══════════════════════════════════════════════════════════════════════════
  'Dallas Cowboys': {
    '1960s': [
      { name: 'Bob Lilly',       position: 'DL', rating: 94 },
      { name: 'Bob Hayes',       position: 'WR', rating: 87 },
      { name: 'Don Meredith',    position: 'QB', rating: 81 },
      { name: 'Mel Renfro',      position: 'CB', rating: 84 },
    ],
    '1970s': [
      { name: 'Roger Staubach',  position: 'QB', rating: 95 },
      { name: 'Tony Dorsett',    position: 'RB', rating: 93 },
      { name: 'Randy White',     position: 'DL', rating: 93 },
      { name: 'Drew Pearson',    position: 'WR', rating: 87 },
      { name: 'Harvey Martin',   position: 'DL', rating: 84 },
    ],
    '1980s': [
      { name: 'Tony Dorsett',    position: 'RB', rating: 89 },
      { name: 'Too Tall Jones',  position: 'DL', rating: 86 },
      { name: 'Danny White',     position: 'QB', rating: 80 },
      { name: 'Michael Downs',   position: 'S',  rating: 80 },
    ],
    '1990s': [
      { name: 'Troy Aikman',     position: 'QB', rating: 91 },
      { name: 'Emmitt Smith',    position: 'RB', rating: 97 },
      { name: 'Michael Irvin',   position: 'WR', rating: 93 },
      { name: 'Deion Sanders',   position: 'CB', rating: 97 },
      { name: 'Larry Allen',     position: 'OL', rating: 95 },
    ],
    '2000s': [
      { name: 'DeMarcus Ware',   position: 'LB', rating: 93 },
      { name: 'Jason Witten',    position: 'TE', rating: 87 },
      { name: 'Tony Romo',       position: 'QB', rating: 84 },
      { name: 'Marion Barber',   position: 'RB', rating: 81 },
    ],
    '2010s': [
      { name: 'Dez Bryant',      position: 'WR', rating: 88 },
      { name: 'Zack Martin',     position: 'OL', rating: 92 },
      { name: 'Ezekiel Elliott', position: 'RB', rating: 87 },
      { name: 'DeMarcus Lawrence', position: 'DL', rating: 85 },
    ],
    '2020s': [
      { name: 'Micah Parsons',   position: 'LB', rating: 97 },
      { name: 'CeeDee Lamb',     position: 'WR', rating: 94 },
      { name: 'Dak Prescott',    position: 'QB', rating: 85 },
      { name: 'Trevon Diggs',    position: 'CB', rating: 87 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PITTSBURGH STEELERS
  // ═══════════════════════════════════════════════════════════════════════════
  'Pittsburgh Steelers': {
    // 1960s: thin — add players here
    '1970s': [
      { name: 'Mean Joe Greene', position: 'DL', rating: 98 },
      { name: 'Jack Lambert',    position: 'LB', rating: 97 },
      { name: 'Terry Bradshaw',  position: 'QB', rating: 91 },
      { name: 'Franco Harris',   position: 'RB', rating: 90 },
      { name: 'Lynn Swann',      position: 'WR', rating: 88 },
      { name: 'Mel Blount',      position: 'CB', rating: 91 },
    ],
    '1980s': [
      { name: 'Mike Webster',    position: 'OL', rating: 92 },
      { name: 'Jack Ham',        position: 'LB', rating: 94 },
      { name: 'Louis Lipps',     position: 'WR', rating: 82 },
      { name: 'Rod Woodson',     position: 'CB', rating: 93 },
    ],
    // 1990s: thin — add players here
    '2000s': [
      { name: 'Troy Polamalu',   position: 'S',  rating: 97 },
      { name: 'Ben Roethlisberger', position: 'QB', rating: 87 },
      { name: 'Hines Ward',      position: 'WR', rating: 84 },
      { name: 'Jerome Bettis',   position: 'RB', rating: 87 },
    ],
    '2010s': [
      { name: 'Antonio Brown',   position: 'WR', rating: 94 },
      { name: "Le'Veon Bell",    position: 'RB', rating: 91 },
      { name: 'T.J. Watt',       position: 'LB', rating: 94 },
      { name: 'Maurkice Pouncey', position: 'OL', rating: 86 },
    ],
    '2020s': [
      { name: 'T.J. Watt',       position: 'LB', rating: 96 },
      { name: 'Minkah Fitzpatrick', position: 'S', rating: 91 },
      { name: 'Najee Harris',    position: 'RB', rating: 82 },
      { name: 'Pat Freiermuth',  position: 'TE', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  SAN FRANCISCO 49ERS
  // ═══════════════════════════════════════════════════════════════════════════
  'San Francisco 49ers': {
    // 1960s: thin — add players here
    // 1970s: thin — add players here
    '1980s': [
      { name: 'Joe Montana',     position: 'QB', rating: 99 },
      { name: 'Jerry Rice',      position: 'WR', rating: 99 },
      { name: 'Ronnie Lott',     position: 'S',  rating: 97 },
      { name: 'Roger Craig',     position: 'RB', rating: 88 },
      { name: 'Charles Haley',   position: 'DL', rating: 89 },
    ],
    '1990s': [
      { name: 'Steve Young',     position: 'QB', rating: 97 },
      { name: 'Jerry Rice',      position: 'WR', rating: 99 },
      { name: 'Deion Sanders',   position: 'CB', rating: 96 },
      { name: 'Ricky Watters',   position: 'RB', rating: 84 },
      { name: 'Dana Stubblefield', position: 'DL', rating: 82 },
    ],
    '2000s': [
      { name: 'Patrick Willis',  position: 'LB', rating: 94 },
      { name: 'Frank Gore',      position: 'RB', rating: 85 },
      { name: 'Vernon Davis',    position: 'TE', rating: 85 },
      { name: 'Alex Smith',      position: 'QB', rating: 80 },
    ],
    '2010s': [
      { name: 'NaVorro Bowman',  position: 'LB', rating: 92 },
      { name: 'Richard Sherman', position: 'CB', rating: 89 },
      { name: 'Frank Gore',      position: 'RB', rating: 84 },
      { name: 'Colin Kaepernick', position: 'QB', rating: 83 },
      { name: 'Aldon Smith',     position: 'LB', rating: 86 },
    ],
    '2020s': [
      { name: 'Nick Bosa',       position: 'DL', rating: 95 },
      { name: 'Christian McCaffrey', position: 'RB', rating: 95 },
      { name: 'Deebo Samuel',    position: 'WR', rating: 89 },
      { name: 'Brock Purdy',     position: 'QB', rating: 86 },
      { name: 'Fred Warner',     position: 'LB', rating: 92 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  NEW ENGLAND PATRIOTS
  // ═══════════════════════════════════════════════════════════════════════════
  'New England Patriots': {
    // 1960s: thin — add players here
    // 1970s: thin — add players here
    // 1980s: thin — add players here
    '1990s': [
      { name: 'Drew Bledsoe',    position: 'QB', rating: 82 },
      { name: 'Curtis Martin',   position: 'RB', rating: 86 },
      { name: 'Ben Coates',      position: 'TE', rating: 83 },
      { name: 'Ty Law',          position: 'CB', rating: 87 },
    ],
    '2000s': [
      { name: 'Tom Brady',       position: 'QB', rating: 97 },
      { name: 'Randy Moss',      position: 'WR', rating: 96 },
      { name: 'Tedy Bruschi',    position: 'LB', rating: 85 },
      { name: 'Richard Seymour', position: 'DL', rating: 90 },
      { name: 'Wes Welker',      position: 'WR', rating: 87 },
    ],
    '2010s': [
      { name: 'Tom Brady',       position: 'QB', rating: 98 },
      { name: 'Rob Gronkowski',  position: 'TE', rating: 98 },
      { name: 'Julian Edelman',  position: 'WR', rating: 85 },
      { name: "Dont'a Hightower", position: 'LB', rating: 85 },
      { name: 'Stephen Gilmore', position: 'CB', rating: 91 },
    ],
    '2020s': [
      { name: 'Matthew Judon',   position: 'LB', rating: 84 },
      { name: 'Rhamondre Stevenson', position: 'RB', rating: 81 },
      { name: 'Mac Jones',       position: 'QB', rating: 80 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  GREEN BAY PACKERS
  // ═══════════════════════════════════════════════════════════════════════════
  'Green Bay Packers': {
    '1960s': [
      { name: 'Bart Starr',      position: 'QB', rating: 91 },
      { name: 'Ray Nitschke',    position: 'LB', rating: 93 },
      { name: 'Jim Taylor',      position: 'RB', rating: 88 },
      { name: 'Paul Hornung',    position: 'RB', rating: 87 },
      { name: 'Forrest Gregg',   position: 'OL', rating: 90 },
      { name: 'Willie Davis',    position: 'DL', rating: 88 },
    ],
    // 1970s: thin — add players here
    // 1980s: thin — add players here
    '1990s': [
      { name: 'Brett Favre',     position: 'QB', rating: 96 },
      { name: 'Reggie White',    position: 'DL', rating: 98 },
      { name: 'LeRoy Butler',    position: 'S',  rating: 85 },
      { name: 'Antonio Freeman', position: 'WR', rating: 83 },
    ],
    '2000s': [
      { name: 'Brett Favre',     position: 'QB', rating: 89 },
      { name: 'Ahman Green',     position: 'RB', rating: 83 },
      { name: 'Donald Driver',   position: 'WR', rating: 82 },
      { name: 'Al Harris',       position: 'CB', rating: 81 },
    ],
    '2010s': [
      { name: 'Aaron Rodgers',   position: 'QB', rating: 98 },
      { name: 'Davante Adams',   position: 'WR', rating: 93 },
      { name: 'Jordy Nelson',    position: 'WR', rating: 88 },
      { name: 'Clay Matthews',   position: 'LB', rating: 87 },
    ],
    '2020s': [
      { name: 'Aaron Rodgers',   position: 'QB', rating: 94 },
      { name: 'Davante Adams',   position: 'WR', rating: 97 },
      { name: 'Jordan Love',     position: 'QB', rating: 84 },
      { name: 'Christian Watson', position: 'WR', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  CHICAGO BEARS
  // ═══════════════════════════════════════════════════════════════════════════
  'Chicago Bears': {
    '1960s': [
      { name: 'Dick Butkus',     position: 'LB', rating: 99 },
      { name: 'Gale Sayers',     position: 'RB', rating: 97 },
      { name: 'Mike Ditka',      position: 'TE', rating: 90 },
      { name: 'Billy Wade',      position: 'QB', rating: 80 },
    ],
    '1970s': [
      { name: 'Walter Payton',   position: 'RB', rating: 99 },
      { name: 'Dick Butkus',     position: 'LB', rating: 93 },
      { name: 'Bob Avellini',    position: 'QB', rating: 80 },
    ],
    '1980s': [
      { name: 'Walter Payton',   position: 'RB', rating: 98 },
      { name: 'Mike Singletary', position: 'LB', rating: 96 },
      { name: 'Richard Dent',    position: 'DL', rating: 89 },
      { name: 'Jim McMahon',     position: 'QB', rating: 82 },
      { name: 'Willie Gault',    position: 'WR', rating: 81 },
    ],
    // 1990s: thin — add players here
    '2000s': [
      { name: 'Brian Urlacher',  position: 'LB', rating: 94 },
      { name: 'Devin Hester',    position: 'KR', rating: 89 },
      { name: 'Charles Tillman', position: 'CB', rating: 86 },
      { name: 'Thomas Jones',    position: 'RB', rating: 82 },
    ],
    '2010s': [
      { name: 'Khalil Mack',     position: 'LB', rating: 92 },
      { name: 'Matt Forte',      position: 'RB', rating: 89 },
      { name: 'Alshon Jeffery',  position: 'WR', rating: 84 },
      { name: 'Kyle Fuller',     position: 'CB', rating: 83 },
    ],
    '2020s': [
      { name: 'Caleb Williams',  position: 'QB', rating: 83 },
      { name: "D'Andre Swift",   position: 'RB', rating: 85 },
      { name: 'Cole Kmet',       position: 'TE', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MIAMI DOLPHINS
  // ═══════════════════════════════════════════════════════════════════════════
  'Miami Dolphins': {
    '1970s': [
      { name: 'Bob Griese',      position: 'QB', rating: 89 },
      { name: 'Larry Csonka',    position: 'RB', rating: 92 },
      { name: 'Paul Warfield',   position: 'WR', rating: 93 },
      { name: 'Nick Buoniconti', position: 'LB', rating: 90 },
      { name: 'Larry Little',    position: 'OL', rating: 86 },
    ],
    '1980s': [
      { name: 'Dan Marino',      position: 'QB', rating: 99 },
      { name: 'Dwight Stephenson', position: 'OL', rating: 93 },
      { name: 'Mark Duper',      position: 'WR', rating: 85 },
      { name: 'Mark Clayton',    position: 'WR', rating: 84 },
    ],
    '1990s': [
      { name: 'Dan Marino',      position: 'QB', rating: 93 },
      { name: 'Irving Fryar',    position: 'WR', rating: 82 },
      { name: 'Bryan Cox',       position: 'LB', rating: 80 },
    ],
    '2000s': [
      { name: 'Jason Taylor',    position: 'DL', rating: 93 },
      { name: 'Zach Thomas',     position: 'LB', rating: 89 },
      { name: 'Ricky Williams',  position: 'RB', rating: 84 },
      { name: 'Chris Chambers',  position: 'WR', rating: 81 },
    ],
    '2010s': [
      { name: 'Cameron Wake',    position: 'DL', rating: 88 },
      { name: 'Ndamukong Suh',   position: 'DL', rating: 86 },
      { name: 'Jarvis Landry',   position: 'WR', rating: 84 },
      { name: 'Ryan Tannehill',  position: 'QB', rating: 81 },
    ],
    '2020s': [
      { name: 'Tyreek Hill',     position: 'WR', rating: 95 },
      { name: 'Jaylen Waddle',   position: 'WR', rating: 88 },
      { name: 'Tua Tagovailoa',  position: 'QB', rating: 84 },
      { name: 'Jalen Ramsey',    position: 'CB', rating: 85 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  NEW YORK GIANTS
  // ═══════════════════════════════════════════════════════════════════════════
  'New York Giants': {
    '1960s': [
      { name: 'Y.A. Tittle',     position: 'QB', rating: 89 },
      { name: 'Frank Gifford',   position: 'WR', rating: 87 },
      { name: 'Sam Huff',        position: 'LB', rating: 91 },
      { name: 'Del Shofner',     position: 'WR', rating: 82 },
    ],
    // 1970s: thin — add players here (Harry Carson, Brad Van Pelt)
    '1980s': [
      { name: 'Lawrence Taylor', position: 'LB', rating: 99 },
      { name: 'Phil Simms',      position: 'QB', rating: 84 },
      { name: 'Carl Banks',      position: 'LB', rating: 86 },
      { name: 'Mark Bavaro',     position: 'TE', rating: 85 },
      { name: 'Joe Morris',      position: 'RB', rating: 83 },
    ],
    '1990s': [
      { name: 'Lawrence Taylor', position: 'LB', rating: 91 },
      { name: 'Jessie Armstead', position: 'LB', rating: 84 },
      { name: 'Dave Meggett',    position: 'RB', rating: 81 },
      { name: 'Michael Strahan', position: 'DL', rating: 90 },
    ],
    '2000s': [
      { name: 'Michael Strahan', position: 'DL', rating: 95 },
      { name: 'Tiki Barber',     position: 'RB', rating: 89 },
      { name: 'Eli Manning',     position: 'QB', rating: 84 },
      { name: 'Jeremy Shockey',  position: 'TE', rating: 85 },
    ],
    '2010s': [
      { name: 'Odell Beckham Jr.', position: 'WR', rating: 94 },
      { name: 'Saquon Barkley',  position: 'RB', rating: 93 },
      { name: 'Jason Pierre-Paul', position: 'DL', rating: 88 },
      { name: 'Eli Manning',     position: 'QB', rating: 83 },
    ],
    '2020s': [
      { name: 'Saquon Barkley',  position: 'RB', rating: 90 },
      { name: 'Dexter Lawrence', position: 'DL', rating: 89 },
      { name: 'Daniel Jones',    position: 'QB', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DENVER BRONCOS
  // ═══════════════════════════════════════════════════════════════════════════
  'Denver Broncos': {
    '1970s': [
      { name: 'Floyd Little',    position: 'RB', rating: 84 },
      { name: 'Haven Moses',     position: 'WR', rating: 81 },
      { name: 'Lyle Alzado',     position: 'DL', rating: 85 },
      { name: 'Randy Gradishar', position: 'LB', rating: 86 },
    ],
    '1980s': [
      { name: 'John Elway',      position: 'QB', rating: 92 },
      { name: 'Karl Mecklenburg', position: 'LB', rating: 86 },
      { name: 'Dennis Smith',    position: 'S',  rating: 83 },
      { name: 'Vance Johnson',   position: 'WR', rating: 81 },
    ],
    '1990s': [
      { name: 'John Elway',      position: 'QB', rating: 94 },
      { name: 'Terrell Davis',   position: 'RB', rating: 98 },
      { name: 'Shannon Sharpe',  position: 'TE', rating: 90 },
      { name: 'Rod Smith',       position: 'WR', rating: 84 },
      { name: 'Gary Zimmerman',  position: 'OL', rating: 88 },
    ],
    '2000s': [
      { name: 'Champ Bailey',    position: 'CB', rating: 95 },
      { name: 'Jake Plummer',    position: 'QB', rating: 81 },
      { name: 'Rod Smith',       position: 'WR', rating: 83 },
      { name: 'Mike Anderson',   position: 'RB', rating: 81 },
    ],
    '2010s': [
      { name: 'Peyton Manning',  position: 'QB', rating: 97 },
      { name: 'Von Miller',      position: 'LB', rating: 97 },
      { name: 'Demaryius Thomas', position: 'WR', rating: 88 },
      { name: 'Aqib Talib',      position: 'CB', rating: 88 },
      { name: 'Emmanuel Sanders', position: 'WR', rating: 84 },
    ],
    // 2020s: thin — add players here
    '2020s': [
      { name: 'Courtland Sutton', position: 'WR', rating: 83 },
      { name: 'Justin Simmons',  position: 'S',  rating: 85 },
      { name: 'Jerry Jeudy',     position: 'WR', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LAS VEGAS RAIDERS  (AFL Oakland Raiders → LA Raiders → Las Vegas)
  // ═══════════════════════════════════════════════════════════════════════════
  'Las Vegas Raiders': {
    '1960s': [
      { name: 'Jim Otto',        position: 'OL', rating: 89 },
      { name: 'Daryle Lamonica', position: 'QB', rating: 84 },
      { name: 'Clem Daniels',   position: 'RB', rating: 82 },
      { name: 'Art Powell',      position: 'WR', rating: 81 },
    ],
    '1970s': [
      { name: 'Ken Stabler',     position: 'QB', rating: 93 },
      { name: 'Gene Upshaw',     position: 'OL', rating: 93 },
      { name: 'Fred Biletnikoff', position: 'WR', rating: 88 },
      { name: 'Ted Hendricks',   position: 'LB', rating: 91 },
      { name: 'Willie Brown',    position: 'CB', rating: 89 },
      { name: 'Dave Casper',     position: 'TE', rating: 86 },
    ],
    '1980s': [
      { name: 'Marcus Allen',    position: 'RB', rating: 93 },
      { name: 'Howie Long',      position: 'DL', rating: 93 },
      { name: 'Todd Christensen', position: 'TE', rating: 85 },
      { name: 'Jim Plunkett',    position: 'QB', rating: 83 },
    ],
    // 1990s: thin — add players here
    '1990s': [
      { name: 'Tim Brown',       position: 'WR', rating: 87 },
      { name: 'Howie Long',      position: 'DL', rating: 83 },
      { name: 'Napoleon Kaufman', position: 'RB', rating: 81 },
    ],
    '2000s': [
      { name: 'Charles Woodson', position: 'CB', rating: 92 },
      { name: 'Rich Gannon',     position: 'QB', rating: 85 },
      { name: 'Tim Brown',       position: 'WR', rating: 83 },
      { name: 'Jerry Rice',      position: 'WR', rating: 83 },
    ],
    '2010s': [
      { name: 'Khalil Mack',     position: 'LB', rating: 96 },
      { name: 'Derek Carr',      position: 'QB', rating: 84 },
      { name: 'Amari Cooper',    position: 'WR', rating: 87 },
      { name: 'Marshawn Lynch',  position: 'RB', rating: 87 },
    ],
    '2020s': [
      { name: 'Davante Adams',   position: 'WR', rating: 93 },
      { name: 'Maxx Crosby',     position: 'DL', rating: 93 },
      { name: 'Josh Jacobs',     position: 'RB', rating: 87 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  MINNESOTA VIKINGS
  // ═══════════════════════════════════════════════════════════════════════════
  'Minnesota Vikings': {
    '1960s': [
      { name: 'Fran Tarkenton',  position: 'QB', rating: 89 },
      { name: 'Carl Eller',      position: 'DL', rating: 88 },
      { name: 'Mick Tingelhoff', position: 'OL', rating: 85 },
    ],
    '1970s': [
      { name: 'Alan Page',       position: 'DL', rating: 95 },
      { name: 'Fran Tarkenton',  position: 'QB', rating: 91 },
      { name: 'Carl Eller',      position: 'DL', rating: 87 },
      { name: 'Paul Krause',     position: 'S',  rating: 89 },
      { name: 'Chuck Foreman',   position: 'RB', rating: 85 },
    ],
    // 1980s: thin — add players here
    '1980s': [
      { name: 'Chris Doleman',   position: 'DL', rating: 89 },
      { name: 'Anthony Carter',  position: 'WR', rating: 83 },
      { name: 'Tommy Kramer',    position: 'QB', rating: 80 },
    ],
    '1990s': [
      { name: 'Randy Moss',      position: 'WR', rating: 98 },
      { name: 'Cris Carter',     position: 'WR', rating: 94 },
      { name: 'John Randle',     position: 'DL', rating: 93 },
      { name: 'Randall Cunningham', position: 'QB', rating: 88 },
      { name: 'Robert Smith',    position: 'RB', rating: 84 },
    ],
    '2000s': [
      { name: 'Adrian Peterson', position: 'RB', rating: 97 },
      { name: 'Randy Moss',      position: 'WR', rating: 91 },
      { name: 'Daunte Culpepper', position: 'QB', rating: 85 },
      { name: 'Kevin Williams',  position: 'DL', rating: 86 },
    ],
    '2010s': [
      { name: 'Adrian Peterson', position: 'RB', rating: 96 },
      { name: 'Harrison Smith',  position: 'S',  rating: 94 },
      { name: 'Stefon Diggs',    position: 'WR', rating: 89 },
      { name: 'Adam Thielen',    position: 'WR', rating: 88 },
      { name: 'Everson Griffen', position: 'DL', rating: 87 },
    ],
    '2020s': [
      { name: 'Justin Jefferson', position: 'WR', rating: 98 },
      { name: 'Dalvin Cook',     position: 'RB', rating: 89 },
      { name: 'Za\'Darius Smith', position: 'LB', rating: 86 },
      { name: 'Kirk Cousins',    position: 'QB', rating: 84 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  PHILADELPHIA EAGLES
  // ═══════════════════════════════════════════════════════════════════════════
  'Philadelphia Eagles': {
    '1960s': [
      { name: 'Chuck Bednarik',  position: 'LB', rating: 94 },
      { name: 'Sonny Jurgensen', position: 'QB', rating: 86 },
      { name: 'Tommy McDonald',  position: 'WR', rating: 85 },
      { name: 'Pete Retzlaff',   position: 'TE', rating: 82 },
    ],
    '1970s': [
      { name: 'Harold Carmichael', position: 'WR', rating: 85 },
      { name: 'Bill Bergey',     position: 'LB', rating: 85 },
      { name: 'Ron Jaworski',    position: 'QB', rating: 81 },
    ],
    '1980s': [
      { name: 'Reggie White',    position: 'DL', rating: 97 },
      { name: 'Randall Cunningham', position: 'QB', rating: 88 },
      { name: 'Mike Quick',      position: 'WR', rating: 85 },
      { name: 'Wilbert Montgomery', position: 'RB', rating: 84 },
      { name: 'Eric Allen',      position: 'CB', rating: 84 },
    ],
    '1990s': [
      { name: 'Reggie White',    position: 'DL', rating: 95 },
      { name: 'Randall Cunningham', position: 'QB', rating: 87 },
      { name: 'Clyde Simmons',   position: 'DL', rating: 85 },
      { name: 'Seth Joyner',     position: 'LB', rating: 83 },
    ],
    '2000s': [
      { name: 'Brian Dawkins',   position: 'S',  rating: 95 },
      { name: 'Terrell Owens',   position: 'WR', rating: 94 },
      { name: 'Donovan McNabb',  position: 'QB', rating: 91 },
      { name: 'Brian Westbrook', position: 'RB', rating: 90 },
      { name: 'Jason Peters',    position: 'OL', rating: 89 },
    ],
    '2010s': [
      { name: 'Jason Kelce',     position: 'OL', rating: 94 },
      { name: 'Fletcher Cox',    position: 'DL', rating: 92 },
      { name: 'Lane Johnson',    position: 'OL', rating: 91 },
      { name: 'Zach Ertz',       position: 'TE', rating: 88 },
      { name: 'Malcolm Jenkins', position: 'S',  rating: 86 },
    ],
    '2020s': [
      { name: 'Jason Kelce',     position: 'OL', rating: 96 },
      { name: 'A.J. Brown',      position: 'WR', rating: 94 },
      { name: 'Jalen Hurts',     position: 'QB', rating: 93 },
      { name: 'DeVonta Smith',   position: 'WR', rating: 90 },
      { name: 'Lane Johnson',    position: 'OL', rating: 92 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  BUFFALO BILLS
  // ═══════════════════════════════════════════════════════════════════════════
  'Buffalo Bills': {
    '1960s': [
      { name: 'Jack Kemp',       position: 'QB', rating: 83 },
      { name: 'Cookie Gilchrist', position: 'RB', rating: 86 },
      { name: 'Tom Sestak',      position: 'DL', rating: 84 },
      { name: 'Elbert Dubenion', position: 'WR', rating: 81 },
    ],
    '1970s': [
      { name: 'O.J. Simpson',    position: 'RB', rating: 97 },
      { name: 'Joe Ferguson',    position: 'QB', rating: 81 },
      { name: 'Ahmad Rashad',    position: 'WR', rating: 81 },
    ],
    '1980s': [
      { name: 'Bruce Smith',     position: 'DL', rating: 97 },
      { name: 'Jim Kelly',       position: 'QB', rating: 89 },
      { name: 'Andre Reed',      position: 'WR', rating: 89 },
      { name: 'Cornelius Bennett', position: 'LB', rating: 89 },
    ],
    '1990s': [
      { name: 'Bruce Smith',     position: 'DL', rating: 97 },
      { name: 'Thurman Thomas',  position: 'RB', rating: 94 },
      { name: 'Jim Kelly',       position: 'QB', rating: 92 },
      { name: 'Andre Reed',      position: 'WR', rating: 91 },
      { name: 'Darryl Talley',   position: 'LB', rating: 83 },
    ],
    // 2000s: thin — add players here
    '2000s': [
      { name: 'London Fletcher', position: 'LB', rating: 85 },
      { name: 'Eric Moulds',     position: 'WR', rating: 83 },
      { name: 'Takeo Spikes',    position: 'LB', rating: 83 },
    ],
    '2010s': [
      { name: 'LeSean McCoy',    position: 'RB', rating: 91 },
      { name: 'Stephon Gilmore', position: 'CB', rating: 90 },
      { name: 'Kyle Williams',   position: 'DL', rating: 86 },
      { name: 'Tre\'Davious White', position: 'CB', rating: 86 },
    ],
    '2020s': [
      { name: 'Josh Allen',      position: 'QB', rating: 97 },
      { name: 'Stefon Diggs',    position: 'WR', rating: 92 },
      { name: 'Von Miller',      position: 'LB', rating: 85 },
      { name: 'Tremaine Edmunds', position: 'LB', rating: 84 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  WASHINGTON COMMANDERS  (formerly Redskins)
  // ═══════════════════════════════════════════════════════════════════════════
  'Washington Commanders': {
    '1960s': [
      { name: 'Sonny Jurgensen', position: 'QB', rating: 88 },
      { name: 'Bobby Mitchell',  position: 'WR', rating: 89 },
      { name: 'Sam Huff',        position: 'LB', rating: 87 },
      { name: 'Charley Taylor',  position: 'WR', rating: 86 },
    ],
    '1970s': [
      { name: 'Charley Taylor',  position: 'WR', rating: 87 },
      { name: 'Chris Hanburger', position: 'LB', rating: 85 },
      { name: 'Larry Brown',     position: 'RB', rating: 84 },
      { name: 'Billy Kilmer',    position: 'QB', rating: 81 },
    ],
    '1980s': [
      { name: 'Darrell Green',   position: 'CB', rating: 92 },
      { name: 'John Riggins',    position: 'RB', rating: 92 },
      { name: 'Art Monk',        position: 'WR', rating: 90 },
      { name: 'Joe Theismann',   position: 'QB', rating: 85 },
      { name: 'Russ Grimm',      position: 'OL', rating: 88 },
    ],
    '1990s': [
      { name: 'Darrell Green',   position: 'CB', rating: 88 },
      { name: 'Art Monk',        position: 'WR', rating: 83 },
      { name: 'Mark Rypien',     position: 'QB', rating: 82 },
      { name: 'Brian Mitchell',  position: 'RB', rating: 82 },
    ],
    '2000s': [
      { name: 'Sean Taylor',     position: 'S',  rating: 95 },
      { name: 'LaVar Arrington', position: 'LB', rating: 88 },
      { name: 'Clinton Portis',  position: 'RB', rating: 87 },
      { name: 'Chris Cooley',    position: 'TE', rating: 83 },
    ],
    '2010s': [
      { name: 'Ryan Kerrigan',   position: 'LB', rating: 88 },
      { name: 'DeSean Jackson',  position: 'WR', rating: 87 },
      { name: 'Kirk Cousins',    position: 'QB', rating: 83 },
      { name: 'Jordan Reed',     position: 'TE', rating: 83 },
    ],
    // 2020s: thin — add players here
    '2020s': [
      { name: 'Terry McLaurin',  position: 'WR', rating: 89 },
      { name: 'Chase Young',     position: 'DL', rating: 84 },
      { name: 'Antonio Gibson',  position: 'RB', rating: 81 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  BALTIMORE RAVENS  (franchise est. 1996)
  // ═══════════════════════════════════════════════════════════════════════════
  'Baltimore Ravens': {
    '2000s': [
      { name: 'Ray Lewis',       position: 'LB', rating: 99 },
      { name: 'Ed Reed',         position: 'S',  rating: 98 },
      { name: 'Jonathan Ogden',  position: 'OL', rating: 97 },
      { name: 'Jamal Lewis',     position: 'RB', rating: 89 },
      { name: 'Terrell Suggs',   position: 'LB', rating: 89 },
    ],
    '2010s': [
      { name: 'Ray Lewis',       position: 'LB', rating: 93 },
      { name: 'Ed Reed',         position: 'S',  rating: 93 },
      { name: 'Haloti Ngata',    position: 'DL', rating: 91 },
      { name: 'Terrell Suggs',   position: 'LB', rating: 91 },
      { name: 'Joe Flacco',      position: 'QB', rating: 84 },
      { name: 'Steve Smith',     position: 'WR', rating: 85 },
    ],
    '2020s': [
      { name: 'Lamar Jackson',   position: 'QB', rating: 98 },
      { name: 'Mark Andrews',    position: 'TE', rating: 93 },
      { name: 'Roquan Smith',    position: 'LB', rating: 90 },
      { name: 'Ronnie Stanley',  position: 'OL', rating: 86 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  SEATTLE SEAHAWKS
  // ═══════════════════════════════════════════════════════════════════════════
  'Seattle Seahawks': {
    '1980s': [
      { name: 'Kenny Easley',    position: 'S',  rating: 93 },
      { name: 'Steve Largent',   position: 'WR', rating: 90 },
      { name: 'Curt Warner',     position: 'RB', rating: 85 },
      { name: 'Dave Krieg',      position: 'QB', rating: 82 },
    ],
    // 1990s: thin — add players here
    '1990s': [
      { name: 'Cortez Kennedy',  position: 'DL', rating: 93 },
      { name: 'Chris Warren',    position: 'RB', rating: 84 },
      { name: 'Joey Galloway',   position: 'WR', rating: 82 },
    ],
    '2000s': [
      { name: 'Walter Jones',    position: 'OL', rating: 95 },
      { name: 'Shaun Alexander', position: 'RB', rating: 90 },
      { name: 'Steve Hutchinson', position: 'OL', rating: 92 },
      { name: 'Matt Hasselbeck', position: 'QB', rating: 84 },
    ],
    '2010s': [
      { name: 'Richard Sherman', position: 'CB', rating: 96 },
      { name: 'Earl Thomas',     position: 'S',  rating: 96 },
      { name: 'Bobby Wagner',    position: 'LB', rating: 95 },
      { name: 'Russell Wilson',  position: 'QB', rating: 95 },
      { name: 'Marshawn Lynch',  position: 'RB', rating: 94 },
      { name: 'Michael Bennett', position: 'DL', rating: 89 },
    ],
    '2020s': [
      { name: 'DK Metcalf',      position: 'WR', rating: 91 },
      { name: 'Tyler Lockett',   position: 'WR', rating: 89 },
      { name: 'Bobby Wagner',    position: 'LB', rating: 88 },
      { name: 'Geno Smith',      position: 'QB', rating: 83 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LOS ANGELES RAMS  (LA Rams → St. Louis Rams → LA Rams)
  // ═══════════════════════════════════════════════════════════════════════════
  'Los Angeles Rams': {
    '1960s': [
      { name: 'Deacon Jones',    position: 'DL', rating: 98 },
      { name: 'Merlin Olsen',    position: 'DL', rating: 93 },
      { name: 'Roman Gabriel',   position: 'QB', rating: 85 },
      { name: 'Tom Fears',       position: 'WR', rating: 81 },
    ],
    '1970s': [
      { name: 'Jack Youngblood', position: 'DL', rating: 93 },
      { name: 'Lawrence McCutcheon', position: 'RB', rating: 83 },
      { name: 'Harold Jackson',  position: 'WR', rating: 84 },
      { name: 'Isiah Robertson', position: 'LB', rating: 81 },
    ],
    '1980s': [
      { name: 'Eric Dickerson',  position: 'RB', rating: 98 },
      { name: 'Kevin Greene',    position: 'LB', rating: 89 },
      { name: 'Jackie Slater',   position: 'OL', rating: 87 },
      { name: 'Henry Ellard',    position: 'WR', rating: 84 },
    ],
    '1990s': [
      { name: 'Kurt Warner',     position: 'QB', rating: 96 },
      { name: 'Marshall Faulk',  position: 'RB', rating: 98 },
      { name: 'Orlando Pace',    position: 'OL', rating: 96 },
      { name: 'Torry Holt',      position: 'WR', rating: 92 },
      { name: 'Isaac Bruce',     position: 'WR', rating: 90 },
    ],
    '2000s': [
      { name: 'Marshall Faulk',  position: 'RB', rating: 92 },
      { name: 'Torry Holt',      position: 'WR', rating: 88 },
      { name: 'Steven Jackson',  position: 'RB', rating: 86 },
      { name: 'Orlando Pace',    position: 'OL', rating: 88 },
    ],
    '2010s': [
      { name: 'Aaron Donald',    position: 'DL', rating: 99 },
      { name: 'Todd Gurley',     position: 'RB', rating: 91 },
      { name: 'Cooper Kupp',     position: 'WR', rating: 89 },
      { name: 'Jared Goff',      position: 'QB', rating: 84 },
    ],
    '2020s': [
      { name: 'Aaron Donald',    position: 'DL', rating: 99 },
      { name: 'Cooper Kupp',     position: 'WR', rating: 96 },
      { name: 'Matthew Stafford', position: 'QB', rating: 89 },
      { name: 'Puka Nacua',      position: 'WR', rating: 84 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TAMPA BAY BUCCANEERS
  // ═══════════════════════════════════════════════════════════════════════════
  'Tampa Bay Buccaneers': {
    '1970s': [
      { name: 'Lee Roy Selmon',  position: 'DL', rating: 93 },
      { name: 'Doug Williams',   position: 'QB', rating: 82 },
      { name: 'Ricky Bell',      position: 'RB', rating: 81 },
    ],
    // 1980s: thin — add players here
    '1980s': [
      { name: 'Lee Roy Selmon',  position: 'DL', rating: 90 },
      { name: 'James Wilder',    position: 'RB', rating: 84 },
      { name: 'Kevin House',     position: 'WR', rating: 81 },
    ],
    '1990s': [
      { name: 'Derrick Brooks',  position: 'LB', rating: 97 },
      { name: 'Warren Sapp',     position: 'DL', rating: 96 },
      { name: 'Hardy Nickerson', position: 'LB', rating: 85 },
      { name: 'Warrick Dunn',    position: 'RB', rating: 84 },
    ],
    '2000s': [
      { name: 'Derrick Brooks',  position: 'LB', rating: 97 },
      { name: 'Warren Sapp',     position: 'DL', rating: 94 },
      { name: 'John Lynch',      position: 'S',  rating: 90 },
      { name: 'Simeon Rice',     position: 'DL', rating: 89 },
      { name: 'Brad Johnson',    position: 'QB', rating: 82 },
    ],
    '2010s': [
      { name: 'Lavonte David',   position: 'LB', rating: 91 },
      { name: 'Mike Evans',      position: 'WR', rating: 89 },
      { name: 'Gerald McCoy',    position: 'DL', rating: 89 },
      { name: 'Chris Godwin',    position: 'WR', rating: 87 },
    ],
    '2020s': [
      { name: 'Tom Brady',       position: 'QB', rating: 97 },
      { name: 'Mike Evans',      position: 'WR', rating: 92 },
      { name: 'Chris Godwin',    position: 'WR', rating: 90 },
      { name: 'Lavonte David',   position: 'LB', rating: 89 },
      { name: 'Vita Vea',        position: 'DL', rating: 89 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  CINCINNATI BENGALS
  // ═══════════════════════════════════════════════════════════════════════════
  'Cincinnati Bengals': {
    '1970s': [
      { name: 'Ken Anderson',    position: 'QB', rating: 85 },
      { name: 'Isaac Curtis',    position: 'WR', rating: 86 },
      { name: 'Boobie Clark',    position: 'RB', rating: 81 },
    ],
    '1980s': [
      { name: 'Anthony Munoz',   position: 'OL', rating: 98 },
      { name: 'Boomer Esiason',  position: 'QB', rating: 87 },
      { name: 'Cris Collinsworth', position: 'WR', rating: 86 },
      { name: 'James Brooks',    position: 'RB', rating: 85 },
    ],
    // 1990s: thin — add players here
    '1990s': [
      { name: 'Corey Dillon',    position: 'RB', rating: 86 },
      { name: 'Carl Pickens',    position: 'WR', rating: 84 },
      { name: 'Jeff Blake',      position: 'QB', rating: 81 },
    ],
    '2000s': [
      { name: 'Chad Johnson',    position: 'WR', rating: 93 },
      { name: 'Carson Palmer',   position: 'QB', rating: 87 },
      { name: 'T.J. Houshmandzadeh', position: 'WR', rating: 84 },
      { name: 'Rudi Johnson',    position: 'RB', rating: 83 },
    ],
    '2010s': [
      { name: 'A.J. Green',      position: 'WR', rating: 93 },
      { name: 'Geno Atkins',     position: 'DL', rating: 92 },
      { name: 'Carlos Dunlap',   position: 'DL', rating: 85 },
      { name: 'Andy Dalton',     position: 'QB', rating: 82 },
    ],
    '2020s': [
      { name: "Ja'Marr Chase",   position: 'WR', rating: 97 },
      { name: 'Joe Burrow',      position: 'QB', rating: 96 },
      { name: 'Trey Hendrickson', position: 'DL', rating: 90 },
      { name: 'Tee Higgins',     position: 'WR', rating: 89 },
      { name: 'Joe Mixon',       position: 'RB', rating: 86 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  NEW YORK JETS
  // ═══════════════════════════════════════════════════════════════════════════
  'New York Jets': {
    '1960s': [
      { name: 'Joe Namath',      position: 'QB', rating: 95 },
      { name: 'Don Maynard',     position: 'WR', rating: 89 },
      { name: 'Matt Snell',      position: 'RB', rating: 82 },
      { name: 'George Sauer',    position: 'WR', rating: 81 },
    ],
    // 1970s: thin — add players here
    '1970s': [
      { name: 'Joe Namath',      position: 'QB', rating: 83 },
      { name: 'Wesley Walker',   position: 'WR', rating: 82 },
      { name: 'Richard Todd',    position: 'QB', rating: 80 },
    ],
    '1980s': [
      { name: 'Mark Gastineau',  position: 'DL', rating: 89 },
      { name: 'Al Toon',         position: 'WR', rating: 85 },
      { name: 'Freeman McNeil',  position: 'RB', rating: 84 },
      { name: 'Wesley Walker',   position: 'WR', rating: 81 },
    ],
    // 1990s: thin — add players here
    '1990s': [
      { name: 'Keyshawn Johnson', position: 'WR', rating: 86 },
      { name: 'Mo Lewis',        position: 'LB', rating: 83 },
      { name: 'Wayne Chrebet',   position: 'WR', rating: 81 },
    ],
    '2000s': [
      { name: 'Darrelle Revis',  position: 'CB', rating: 97 },
      { name: 'Curtis Martin',   position: 'RB', rating: 90 },
      { name: 'Nick Mangold',    position: 'OL', rating: 88 },
      { name: 'Chad Pennington', position: 'QB', rating: 83 },
    ],
    // 2010s: thin — add players here
    '2010s': [
      { name: 'Darrelle Revis',  position: 'CB', rating: 94 },
      { name: 'Muhammad Wilkerson', position: 'DL', rating: 86 },
      { name: 'Brandon Marshall', position: 'WR', rating: 85 },
    ],
    '2020s': [
      { name: 'Sauce Gardner',   position: 'CB', rating: 95 },
      { name: 'Garrett Wilson',  position: 'WR', rating: 91 },
      { name: 'Breece Hall',     position: 'RB', rating: 88 },
      { name: 'Aaron Rodgers',   position: 'QB', rating: 85 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  NEW ORLEANS SAINTS
  // ═══════════════════════════════════════════════════════════════════════════
  'New Orleans Saints': {
    // 1970s: thin — add players here
    '1970s': [
      { name: 'Archie Manning',  position: 'QB', rating: 84 },
      { name: 'Chuck Muncie',    position: 'RB', rating: 84 },
      { name: 'Danny Abramowicz', position: 'WR', rating: 81 },
    ],
    '1980s': [
      { name: 'Rickey Jackson',  position: 'LB', rating: 92 },
      { name: 'Pat Swilling',    position: 'LB', rating: 88 },
      { name: 'Sam Mills',       position: 'LB', rating: 86 },
      { name: 'Dalton Hilliard', position: 'RB', rating: 82 },
    ],
    // 1990s: thin — recognizable names scarce in this era
    '1990s': [
      { name: 'Willie Roaf',     position: 'OL', rating: 92 },
      { name: 'Rickey Jackson',  position: 'LB', rating: 87 },
      { name: 'Morten Andersen', position: 'K',  rating: 84 },
    ],
    '2000s': [
      { name: 'Drew Brees',      position: 'QB', rating: 94 },
      { name: 'Deuce McAllister', position: 'RB', rating: 86 },
      { name: 'Marques Colston', position: 'WR', rating: 85 },
      { name: 'Reggie Bush',     position: 'RB', rating: 85 },
    ],
    '2010s': [
      { name: 'Drew Brees',      position: 'QB', rating: 97 },
      { name: 'Michael Thomas',  position: 'WR', rating: 95 },
      { name: 'Alvin Kamara',    position: 'RB', rating: 93 },
      { name: 'Jimmy Graham',    position: 'TE', rating: 92 },
      { name: 'Cameron Jordan',  position: 'DL', rating: 91 },
    ],
    '2020s': [
      { name: 'Alvin Kamara',    position: 'RB', rating: 90 },
      { name: 'Cameron Jordan',  position: 'DL', rating: 89 },
      { name: 'Chris Olave',     position: 'WR', rating: 86 },
      { name: 'Derek Carr',      position: 'QB', rating: 82 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  CLEVELAND BROWNS
  // ═══════════════════════════════════════════════════════════════════════════
  'Cleveland Browns': {
    '1960s': [
      { name: 'Jim Brown',       position: 'RB', rating: 99 },
      { name: 'Paul Warfield',   position: 'WR', rating: 93 },
      { name: 'Leroy Kelly',     position: 'RB', rating: 90 },
      { name: 'Gene Hickerson',  position: 'OL', rating: 87 },
    ],
    '1970s': [
      { name: 'Ozzie Newsome',   position: 'TE', rating: 88 },
      { name: 'Greg Pruitt',     position: 'RB', rating: 84 },
      { name: 'Brian Sipe',      position: 'QB', rating: 82 },
    ],
    '1980s': [
      { name: 'Ozzie Newsome',   position: 'TE', rating: 91 },
      { name: 'Clay Matthews',   position: 'LB', rating: 86 },
      { name: 'Bernie Kosar',    position: 'QB', rating: 84 },
      { name: 'Kevin Mack',      position: 'RB', rating: 83 },
    ],
    // 1990s: thin — franchise relocated to Baltimore after 1995
    '1990s': [
      { name: 'Eric Metcalf',    position: 'RB', rating: 83 },
      { name: 'Vinny Testaverde', position: 'QB', rating: 81 },
    ],
    '2000s': [
      { name: 'Joe Thomas',      position: 'OL', rating: 98 },
      { name: 'Kellen Winslow Jr.', position: 'TE', rating: 84 },
      { name: 'Braylon Edwards', position: 'WR', rating: 83 },
    ],
    '2010s': [
      { name: 'Joe Thomas',      position: 'OL', rating: 98 },
      { name: 'Nick Chubb',      position: 'RB', rating: 92 },
      { name: 'Josh Gordon',     position: 'WR', rating: 88 },
      { name: 'Jarvis Landry',   position: 'WR', rating: 85 },
    ],
    '2020s': [
      { name: 'Myles Garrett',   position: 'DL', rating: 98 },
      { name: 'Nick Chubb',      position: 'RB', rating: 93 },
      { name: 'Amari Cooper',    position: 'WR', rating: 87 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  INDIANAPOLIS COLTS  (Baltimore Colts through 1983, Indianapolis 1984–)
  // ═══════════════════════════════════════════════════════════════════════════
  'Indianapolis Colts': {
    '1960s': [
      { name: 'Johnny Unitas',   position: 'QB', rating: 99 },
      { name: 'Gino Marchetti',  position: 'DL', rating: 95 },
      { name: 'Raymond Berry',   position: 'WR', rating: 91 },
      { name: 'Lenny Moore',     position: 'RB', rating: 89 },
      { name: 'John Mackey',     position: 'TE', rating: 90 },
    ],
    '1970s': [
      { name: 'Ted Hendricks',   position: 'LB', rating: 92 },
      { name: 'Bert Jones',      position: 'QB', rating: 85 },
      { name: 'Lydell Mitchell', position: 'RB', rating: 83 },
    ],
    // 1980s: thin post-move — add players here
    '1980s': [
      { name: 'Eric Dickerson',  position: 'RB', rating: 94 },
      { name: 'Duane Bickett',   position: 'LB', rating: 81 },
    ],
    '1990s': [
      { name: 'Marshall Faulk',  position: 'RB', rating: 92 },
      { name: 'Marvin Harrison', position: 'WR', rating: 89 },
      { name: 'Jim Harbaugh',    position: 'QB', rating: 81 },
    ],
    '2000s': [
      { name: 'Peyton Manning',  position: 'QB', rating: 99 },
      { name: 'Marvin Harrison', position: 'WR', rating: 97 },
      { name: 'Edgerrin James',  position: 'RB', rating: 92 },
      { name: 'Dwight Freeney',  position: 'DL', rating: 93 },
      { name: 'Reggie Wayne',    position: 'WR', rating: 91 },
    ],
    '2010s': [
      { name: 'Andrew Luck',     position: 'QB', rating: 93 },
      { name: 'Darius Leonard',  position: 'LB', rating: 93 },
      { name: 'T.Y. Hilton',     position: 'WR', rating: 88 },
      { name: 'Reggie Wayne',    position: 'WR', rating: 84 },
    ],
    '2020s': [
      { name: 'Jonathan Taylor', position: 'RB', rating: 95 },
      { name: 'Michael Pittman Jr.', position: 'WR', rating: 85 },
      { name: 'Zaire Franklin',  position: 'LB', rating: 82 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  LOS ANGELES CHARGERS  (San Diego Chargers through 2016)
  // ═══════════════════════════════════════════════════════════════════════════
  'Los Angeles Chargers': {
    '1960s': [
      { name: 'Lance Alworth',   position: 'WR', rating: 96 },
      { name: 'Ron Mix',         position: 'OL', rating: 89 },
      { name: 'John Hadl',       position: 'QB', rating: 85 },
      { name: 'Keith Lincoln',   position: 'RB', rating: 84 },
    ],
    '1970s': [
      { name: 'Dan Fouts',       position: 'QB', rating: 90 },
      { name: 'Charlie Joiner',  position: 'WR', rating: 85 },
      { name: 'Lydell Mitchell', position: 'RB', rating: 81 },
    ],
    '1980s': [
      { name: 'Dan Fouts',       position: 'QB', rating: 96 },
      { name: 'Kellen Winslow',  position: 'TE', rating: 95 },
      { name: 'Charlie Joiner',  position: 'WR', rating: 85 },
      { name: 'Wes Chandler',    position: 'WR', rating: 85 },
    ],
    '1990s': [
      { name: 'Junior Seau',     position: 'LB', rating: 97 },
      { name: 'Leslie O\'Neal',  position: 'DL', rating: 86 },
      { name: 'Natrone Means',   position: 'RB', rating: 85 },
      { name: 'Stan Humphries',  position: 'QB', rating: 81 },
    ],
    '2000s': [
      { name: 'LaDainian Tomlinson', position: 'RB', rating: 99 },
      { name: 'Antonio Gates',   position: 'TE', rating: 94 },
      { name: 'Philip Rivers',   position: 'QB', rating: 89 },
      { name: 'Drew Brees',      position: 'QB', rating: 86 },
      { name: 'Shawne Merriman', position: 'LB', rating: 86 },
    ],
    '2010s': [
      { name: 'Philip Rivers',   position: 'QB', rating: 90 },
      { name: 'Joey Bosa',       position: 'DL', rating: 91 },
      { name: 'Keenan Allen',    position: 'WR', rating: 90 },
      { name: 'Antonio Gates',   position: 'TE', rating: 86 },
      { name: 'Melvin Gordon',   position: 'RB', rating: 85 },
    ],
    '2020s': [
      { name: 'Justin Herbert',  position: 'QB', rating: 92 },
      { name: 'Keenan Allen',    position: 'WR', rating: 89 },
      { name: 'Joey Bosa',       position: 'DL', rating: 88 },
      { name: 'Austin Ekeler',   position: 'RB', rating: 87 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  ATLANTA FALCONS
  // ═══════════════════════════════════════════════════════════════════════════
  'Atlanta Falcons': {
    '1960s': [
      { name: 'Tommy Nobis',     position: 'LB', rating: 89 },
      { name: 'Randy Johnson',   position: 'QB', rating: 80 },
    ],
    '1970s': [
      { name: 'Claude Humphrey', position: 'DL', rating: 90 },
      { name: 'Steve Bartkowski', position: 'QB', rating: 82 },
      { name: 'Lynn Cain',       position: 'RB', rating: 80 },
    ],
    '1980s': [
      { name: 'Deion Sanders',   position: 'CB', rating: 90 },
      { name: 'Gerald Riggs',    position: 'RB', rating: 84 },
      { name: 'Mike Kenn',       position: 'OL', rating: 84 },
      { name: 'Billy Johnson',   position: 'WR', rating: 82 },
    ],
    '1990s': [
      { name: 'Deion Sanders',   position: 'CB', rating: 96 },
      { name: 'Jamal Anderson',  position: 'RB', rating: 85 },
      { name: 'Chris Chandler',  position: 'QB', rating: 83 },
      { name: 'Jessie Tuggle',   position: 'LB', rating: 83 },
    ],
    '2000s': [
      { name: 'Michael Vick',    position: 'QB', rating: 95 },
      { name: 'John Abraham',    position: 'LB', rating: 89 },
      { name: 'Roddy White',     position: 'WR', rating: 86 },
      { name: 'Warrick Dunn',    position: 'RB', rating: 84 },
    ],
    '2010s': [
      { name: 'Julio Jones',     position: 'WR', rating: 97 },
      { name: 'Matt Ryan',       position: 'QB', rating: 90 },
      { name: 'Grady Jarrett',   position: 'DL', rating: 86 },
      { name: 'Calvin Ridley',   position: 'WR', rating: 86 },
    ],
    '2020s': [
      { name: 'Bijan Robinson',  position: 'RB', rating: 89 },
      { name: 'Drake London',    position: 'WR', rating: 84 },
      { name: 'Grady Jarrett',   position: 'DL', rating: 85 },
      { name: 'Kyle Pitts',      position: 'TE', rating: 84 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  CAROLINA PANTHERS  (franchise est. 1995)
  // ═══════════════════════════════════════════════════════════════════════════
  'Carolina Panthers': {
    '1990s': [
      { name: 'Kevin Greene',    position: 'LB', rating: 89 },
      { name: 'Sam Mills',       position: 'LB', rating: 87 },
      { name: 'Wesley Walls',    position: 'TE', rating: 83 },
      { name: 'Kerry Collins',   position: 'QB', rating: 81 },
    ],
    '2000s': [
      { name: 'Steve Smith Sr.', position: 'WR', rating: 94 },
      { name: 'Julius Peppers',  position: 'DL', rating: 95 },
      { name: 'Jake Delhomme',   position: 'QB', rating: 84 },
      { name: 'DeShaun Foster',  position: 'RB', rating: 81 },
    ],
    '2010s': [
      { name: 'Luke Kuechly',    position: 'LB', rating: 98 },
      { name: 'Cam Newton',      position: 'QB', rating: 93 },
      { name: 'Greg Olsen',      position: 'TE', rating: 88 },
      { name: 'Josh Norman',     position: 'CB', rating: 88 },
      { name: 'Jonathan Stewart', position: 'RB', rating: 83 },
    ],
    '2020s': [
      { name: 'Christian McCaffrey', position: 'RB', rating: 96 },
      { name: 'Brian Burns',     position: 'DL', rating: 88 },
      { name: 'Bryce Young',     position: 'QB', rating: 82 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  TENNESSEE TITANS  (Houston Oilers through 1996, Tennessee Oilers 1997–98)
  // ═══════════════════════════════════════════════════════════════════════════
  'Tennessee Titans': {
    '1960s': [
      { name: 'George Blanda',   position: 'QB', rating: 88 },
      { name: 'Billy Cannon',    position: 'RB', rating: 85 },
      { name: 'Charlie Hennigan', position: 'WR', rating: 84 },
      { name: 'Elvin Bethea',    position: 'DL', rating: 86 },
    ],
    '1970s': [
      { name: 'Earl Campbell',   position: 'RB', rating: 97 },
      { name: 'Elvin Bethea',    position: 'DL', rating: 89 },
      { name: 'Ken Burrough',    position: 'WR', rating: 83 },
      { name: 'Dan Pastorini',   position: 'QB', rating: 81 },
    ],
    '1980s': [
      { name: 'Warren Moon',     position: 'QB', rating: 94 },
      { name: 'Earl Campbell',   position: 'RB', rating: 92 },
      { name: 'Mike Munchak',    position: 'OL', rating: 90 },
      { name: 'Drew Hill',       position: 'WR', rating: 84 },
      { name: 'Ernest Givins',   position: 'WR', rating: 83 },
    ],
    '1990s': [
      { name: 'Bruce Matthews',  position: 'OL', rating: 93 },
      { name: 'Steve McNair',    position: 'QB', rating: 89 },
      { name: 'Warren Moon',     position: 'QB', rating: 88 },
      { name: 'Eddie George',    position: 'RB', rating: 87 },
    ],
    '2000s': [
      { name: 'Steve McNair',    position: 'QB', rating: 91 },
      { name: 'Albert Haynesworth', position: 'DL', rating: 91 },
      { name: 'Eddie George',    position: 'RB', rating: 84 },
      { name: 'Keith Bulluck',   position: 'LB', rating: 85 },
    ],
    '2010s': [
      { name: 'Chris Johnson',   position: 'RB', rating: 93 },
      { name: 'Jurrell Casey',   position: 'DL', rating: 87 },
      { name: 'Delanie Walker',  position: 'TE', rating: 85 },
      { name: 'Marcus Mariota',  position: 'QB', rating: 83 },
    ],
    '2020s': [
      { name: 'Derrick Henry',   position: 'RB', rating: 97 },
      { name: 'A.J. Brown',      position: 'WR', rating: 91 },
      { name: 'Ryan Tannehill',  position: 'QB', rating: 83 },
      { name: 'Harold Landry',   position: 'LB', rating: 82 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  DETROIT LIONS
  // ═══════════════════════════════════════════════════════════════════════════
  'Detroit Lions': {
    '1960s': [
      { name: 'Lem Barney',      position: 'CB', rating: 90 },
      { name: 'Yale Lary',       position: 'S',  rating: 87 },
      { name: 'Dick LeBeau',     position: 'CB', rating: 84 },
      { name: 'Roger Brown',     position: 'DL', rating: 83 },
    ],
    '1970s': [
      { name: 'Charlie Sanders', position: 'TE', rating: 88 },
      { name: 'Lem Barney',      position: 'CB', rating: 85 },
      { name: 'Billy Sims',      position: 'RB', rating: 87 },
    ],
    '1980s': [
      { name: 'Barry Sanders',   position: 'RB', rating: 99 },
      { name: 'Billy Sims',      position: 'RB', rating: 86 },
      { name: 'Chris Spielman',  position: 'LB', rating: 87 },
      { name: 'Eddie Murray',    position: 'K',  rating: 81 },
    ],
    '1990s': [
      { name: 'Barry Sanders',   position: 'RB', rating: 99 },
      { name: 'Herman Moore',    position: 'WR', rating: 89 },
      { name: 'Chris Spielman',  position: 'LB', rating: 87 },
      { name: 'Brett Perriman',  position: 'WR', rating: 82 },
    ],
    '2000s': [
      { name: 'Calvin Johnson',  position: 'WR', rating: 95 },
      { name: 'Roy Williams',    position: 'WR', rating: 84 },
      { name: 'Kevin Jones',     position: 'RB', rating: 81 },
    ],
    '2010s': [
      { name: 'Calvin Johnson',  position: 'WR', rating: 98 },
      { name: 'Ndamukong Suh',   position: 'DL', rating: 93 },
      { name: 'Matthew Stafford', position: 'QB', rating: 86 },
      { name: 'DeAndre Levy',    position: 'LB', rating: 83 },
    ],
    '2020s': [
      { name: 'Aidan Hutchinson', position: 'DL', rating: 93 },
      { name: 'Amon-Ra St. Brown', position: 'WR', rating: 91 },
      { name: 'Jared Goff',      position: 'QB', rating: 89 },
      { name: 'Penei Sewell',    position: 'OL', rating: 88 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  ARIZONA CARDINALS  (Chicago Cardinals → St. Louis Cardinals → Arizona)
  // ═══════════════════════════════════════════════════════════════════════════
  'Arizona Cardinals': {
    '1960s': [
      { name: 'Sonny Randle',    position: 'WR', rating: 83 },
      { name: 'Charley Johnson', position: 'QB', rating: 81 },
      { name: 'Larry Wilson',    position: 'S',  rating: 90 },
    ],
    '1970s': [
      { name: 'Terry Metcalf',   position: 'RB', rating: 84 },
      { name: 'Mel Gray',        position: 'WR', rating: 82 },
      { name: 'Jim Hart',        position: 'QB', rating: 81 },
    ],
    '1980s': [
      { name: 'Neil Lomax',      position: 'QB', rating: 84 },
      { name: 'Roy Green',       position: 'WR', rating: 86 },
      { name: 'Ottis Anderson',  position: 'RB', rating: 85 },
      { name: 'E.J. Junior',     position: 'WR', rating: 80 },
    ],
    '1990s': [
      { name: 'Aeneas Williams', position: 'CB', rating: 94 },
      { name: 'Eric Swann',      position: 'DL', rating: 84 },
      { name: 'Jake Plummer',    position: 'QB', rating: 82 },
      { name: 'Rob Moore',       position: 'WR', rating: 82 },
    ],
    '2000s': [
      { name: 'Kurt Warner',     position: 'QB', rating: 92 },
      { name: 'Larry Fitzgerald', position: 'WR', rating: 96 },
      { name: 'Anquan Boldin',   position: 'WR', rating: 91 },
      { name: 'Adrian Wilson',   position: 'S',  rating: 88 },
    ],
    '2010s': [
      { name: 'Larry Fitzgerald', position: 'WR', rating: 94 },
      { name: 'Patrick Peterson', position: 'CB', rating: 95 },
      { name: 'Chandler Jones',  position: 'LB', rating: 91 },
      { name: 'David Johnson',   position: 'RB', rating: 90 },
    ],
    '2020s': [
      { name: 'DeAndre Hopkins', position: 'WR', rating: 93 },
      { name: 'J.J. Watt',       position: 'DL', rating: 91 },
      { name: 'Budda Baker',     position: 'S',  rating: 89 },
      { name: 'Kyler Murray',    position: 'QB', rating: 88 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  JACKSONVILLE JAGUARS  (franchise est. 1995)
  // ═══════════════════════════════════════════════════════════════════════════
  'Jacksonville Jaguars': {
    '1990s': [
      { name: 'Tony Boselli',    position: 'OL', rating: 93 },
      { name: 'Fred Taylor',     position: 'RB', rating: 88 },
      { name: 'Jimmy Smith',     position: 'WR', rating: 87 },
      { name: 'Mark Brunell',    position: 'QB', rating: 86 },
      { name: 'Kevin Hardy',     position: 'LB', rating: 83 },
    ],
    '2000s': [
      { name: 'Fred Taylor',     position: 'RB', rating: 85 },
      { name: 'Jimmy Smith',     position: 'WR', rating: 84 },
      { name: 'Marcus Stroud',   position: 'DL', rating: 84 },
      { name: 'Byron Leftwich',  position: 'QB', rating: 81 },
    ],
    '2010s': [
      { name: 'Calais Campbell', position: 'DL', rating: 90 },
      { name: 'Jalen Ramsey',    position: 'CB', rating: 93 },
      { name: 'Josh Allen',      position: 'LB', rating: 90 },
      { name: 'Myles Jack',      position: 'LB', rating: 83 },
    ],
    '2020s': [
      { name: 'Josh Allen',      position: 'LB', rating: 91 },
      { name: 'Trevor Lawrence', position: 'QB', rating: 89 },
      { name: 'Travis Etienne',  position: 'RB', rating: 88 },
      { name: 'Calvin Ridley',   position: 'WR', rating: 86 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  HOUSTON TEXANS  (franchise est. 2002)
  // ═══════════════════════════════════════════════════════════════════════════
  'Houston Texans': {
    '2000s': [
      { name: 'Andre Johnson',   position: 'WR', rating: 93 },
      { name: 'Mario Williams',  position: 'DL', rating: 91 },
      { name: 'DeMeco Ryans',    position: 'LB', rating: 84 },
      { name: 'Owen Daniels',    position: 'TE', rating: 82 },
    ],
    '2010s': [
      { name: 'J.J. Watt',       position: 'DL', rating: 99 },
      { name: 'DeAndre Hopkins', position: 'WR', rating: 96 },
      { name: 'Arian Foster',    position: 'RB', rating: 89 },
      { name: 'Deshaun Watson',  position: 'QB', rating: 91 },
      { name: 'Jadeveon Clowney', position: 'DL', rating: 88 },
    ],
    '2020s': [
      { name: 'C.J. Stroud',     position: 'QB', rating: 91 },
      { name: 'Stefon Diggs',    position: 'WR', rating: 89 },
      { name: 'Nico Collins',    position: 'WR', rating: 88 },
      { name: 'Will Anderson Jr.', position: 'DL', rating: 88 },
    ],
  },

};

// ─────────────────────────────────────────────────────────────────────────────
// Utilities — do not edit
// ─────────────────────────────────────────────────────────────────────────────

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

// 7 picks × avg 85 = 595 → 17-0
export const THRESHOLD = 595;
export const LOSS_UNIT = Math.ceil(THRESHOLD / 17);
