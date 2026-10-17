/* ============================================================================
   SITE DATA — edit this file only.
   Items marked TODO are placeholders waiting for real info from you.
   ========================================================================== */

const SITE = {
  // ---- 1. IDENTITY --------------------------------------------------------
  school: "Ibne Sina College",
  eventName: "ISC Intra Sportsfest",
  edition: "Ibne Sina College",
  presentedBy: "Ibne Sina College proudly presents",
  tagline: "One college. One roar. One champion.",

  logo: "assets/crest-burgundy.png",      // burgundy ink, used on white
  logoLight: "assets/crest-white.png",    // white ink, used on burgundy
  logoAlt: "Ibne Sina College crest",

  // ---- 2. DATES & VENUE ---------------------------------------------------
  // Sportsfest runs 6–7 November 2026. Format: YYYY-MM-DDTHH:mm:ss
  startDate: "2026-11-06T08:00:00",
  endDate: "2026-11-07T18:00:00",
  dateLabel: "NOVEMBER 7–8, 2026",
  venue: "IBNE SINA COLLEGE",

  // ---- 3. ABOUT -----------------------------------------------------------
  about: [
    "The ISC Intra Sportsfest brings the whole college together for nine sports, from the futsal pitch to the chess board.",
    "Whether you play, cheer or compete from behind a screen, there is a place for you. Registration opens at the school registration desk on 23 October.",
  ],
  stats: [
    { value: "09", label: "Sports" },
    { value: "23 OCT", label: "Registration desk" },
  ],

  // ---- 4. SPORTS ----------------------------------------------------------
  // TODO: add real dates and venues per sport. "rules" show in the pop-up.
  sports: [
        {
      name: "Futsal",
      days: "Dates TBA",
      categories: [],
      rules: [
        "5-a-side, 3 rolling substitutes.",
        "Yellow card: cautions a player for unsporting behaviour, dissent or persistent fouls. The team plays short-handed for two minutes or until a goal is conceded.",
        "Red card: ejection for serious foul play or two yellow cards. The team plays one player down for two full minutes; the sent-off player cannot return or be substituted.",
        "5-metre rule: all opposing players must retreat at least 5 metres from the ball on restarts (free kicks, kick-ins, corner kicks, kick-offs) until the ball is back in play.",
        "The team taking a restart has 4 seconds to play the ball once ready, or possession passes to the opponent.",
      ],
    },
        {
      name: "Basketball",
      days: "Dates TBA",
      categories: [],
      rules: [
        "5-a-side, with a maximum of 5 substitutions.",
        "Field goals: shots inside the three-point arc are worth 2 points; shots from behind the arc are worth 3.",
        "Free throws: worth 1 point each, awarded after specific fouls.",
        "Game length: four 8-minute quarters.",
        "Traveling: taking more than two steps without dribbling the ball.",
        "Double dribble: stopping a dribble and starting it again, or dribbling with both hands at once.",
        "Carrying: placing your hand underneath the ball while dribbling.",
        "Out-of-bounds: stepping on or outside the boundary lines while holding the ball.",
        "Shot clock violation: 24 seconds from gaining possession. The 3-second and 8-second rules also apply.",
        "Other standard FIBA rules apply.",
      ],
    },
        {
      name: "Athletics",
      days: "Dates TBA",
      categories: ["400 m", "100 m"],
    },
        {
      name: "Dodgeball",
      days: "Dates TBA",
      categories: [],
      rules: [
        "Each team must have 7 players, with up to 2 substitutions.",
        "Knockout format for all games.",
        "The serve and the side of the court are decided by a coin flip.",
        "Serves must be diagonal; crossing the line while serving is a foul.",
        "If the serve hits the net, it must be restarted.",
        "Throwing the ball into the dead zone is against the rules; cutting the zone line is also a penalty.",
        "Any bodily contact, double touch or fumble is a foul.",
        "If the ball is not tossed within three seconds, it is a foul.",
        "Jump smashes are allowed.",
        "After a deuce, a side must win 2 points in a row to take the set.",
        "Each match is three sets of 11 points.",
      ],
    },
        {
      name: "Gaming",
      days: "Dates TBA",
      categories: ["FIFA only"],
      rules: [
        "Only approved game settings may be used.",
        "Cheating results in immediate disqualification.",
        "Tournament officials' decisions are final.",
      ],
    },
        {
      name: "Badminton",
      days: "Dates TBA",
      categories: ["Doubles", "Singles"],
      rules: [
        "Standard serving, general faults and play rules apply.",
      ],
    },
        {
      name: "Table Tennis",
      days: "Dates TBA",
      categories: [],
      rules: [
        "Standard serving, general faults and play rules apply.",
      ],
    },
        {
      name: "Chess",
      days: "Dates TBA",
      categories: [],
      rules: [
        "Standard chess rules apply.",
        "Touch-move rule is enforced.",
        "Time control: 10 + 5.",
        "Players must respect the time controls.",
      ],
    },
        {
      name: "Volleyball",
      days: "Dates TBA",
      categories: [],
      rules: [
        "Players: 6 on the court per team, with a total squad of 8.",
        "Scoring: a point is awarded after every rally. Best of three sets, 15 points each.",
        "Touches: a team may touch the ball a maximum of 3 times before sending it over the net.",
        "Ball: it may touch any part of the body but must not be caught or thrown.",
        "Block: a block touch does not count as one of the team's three touches.",
        "Serve: the server has 8 seconds to serve after the whistle.",
        "Other standard FIVB rules apply.",
      ],
    },
  ],

  // ---- 5. SCHEDULE --------------------------------------------------------
  // TODO: which sport is on which day, and the times, are placeholders.
  schedule: [
    {
      day: "Day 01",
      date: "NOV 07",
      items: [
        { time: "TBA", title: "Opening ceremony" },
        { time: "TBA", title: "Futsal" },
        { time: "TBA", title: "Basketball" },
        { time: "TBA", title: "Table Tennis" },
        { time: "TBA", title: "Chess" },
      ],
    },
    {
      day: "Day 02",
      date: "NOV 08",
      items: [
        { time: "TBA", title: "Badminton" },
        { time: "TBA", title: "Volleyball" },
        { time: "TBA", title: "Dodgeball" },
        { time: "TBA", title: "Gaming" },
        { time: "TBA", title: "Athletics" },
        { time: "TBA", title: "Prize distribution & closing" },
      ],
    },
  ],

  // ---- 6. CODE OF CONDUCT -------------------------------------------------
  conduct: [
    "Every participant must carry their school ID card during the event.",
    "Wear appropriate sports apparel.",
    "Report to your event desk 15 minutes before your scheduled slot.",
    "Respect the referee. Only the team captain may question a call.",
    "Abusive language, sledging or fighting means instant disqualification.",
    "Spectators stay behind the barriers and keep the playing area clear.",
    "Play fair in every sport, including gaming and chess.",
    "Leave the ground cleaner than you found it.",
  ],

  // ---- 7. TEAM ------------------------------------------------------------
  // Add phone / email to any person and it will appear on their card.
  team: [
    { name: "Mujtaba Omar", role: "Event Head", phone: "0322 7176386" },
    { name: "Daniyal Kamran", role: "Co-Head", phone: "0316 7797851" },
    { name: "Shayan ul Haq", role: "Co-Head", phone: "0326 1442440" },
  ],

  // ---- 8. FOOTER ----------------------------------------------------------
  // Add { label: "Instagram", url: "https://..." } here when you have links.
  socials: [],
  footerNote: "Organised by the ISC Sportsfest team.",
  footerMotto: "Learn. Understand. Implement.",
};

window.SITE = SITE;
