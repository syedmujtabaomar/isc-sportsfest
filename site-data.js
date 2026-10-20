/* ============================================================================
   SITE DATA — edit this file only.
   Items marked TODO are placeholders waiting for real info from you.
   ========================================================================== */

const SITE = {
  // ---- 1. IDENTITY --------------------------------------------------------
  school: "Ibne Sina College",
  eventName: "Ibne Sina Charity Sportsfest",
  edition: "Ibne Sina College",
  presentedBy: "Intra School Sportsfest",
  audienceTag: "Boys’ edition",        // glossy pill next to the line above
  tagline: "One college. One roar. One champion.",

  logo: "assets/crest-burgundy.png",      // burgundy ink, used on white
  logoLight: "assets/crest-white.png",    // white ink, used on burgundy
  logoAlt: "Ibne Sina College crest",

  // ---- 2. DATES & VENUE ---------------------------------------------------
  // Sportsfest runs 7–8 November 2026. Format: YYYY-MM-DDTHH:mm:ss
  startDate: "2026-11-07T08:00:00",
  endDate: "2026-11-08T18:00:00",
  dateLabel: "NOVEMBER 7–8, 2026",
  venue: "IBNE SINA COLLEGE",

  // ---- 3. ABOUT -----------------------------------------------------------
  about: [
    "The Ibne Sina Charity Sportsfest brings the whole college together for eleven sports, from the futsal pitch to the chess board.",
    "Whether you play, cheer or compete from behind a screen, there is a place for you. Registration is at the desk in the hall during break: seniors on 23 October, juniors on 26 October.",
  ],
  stats: [
    { value: "11", label: "Sports" },
    { value: "23 OCT", label: "Registration desk" },
  ],

  // ---- 4. SPORTS ----------------------------------------------------------
  // "rules" and "sections" show in the pop-up. Add "venue" or "days" per sport if you want them shown.
  sports: [
    {
      name: "Futsal",
      categories: [],
      numbered: true,
      rules: [
        "Players: Each team plays with 5 players on the field, including the goalkeeper.",
        "Substitutions: Rolling substitutions are allowed, meaning a substituted player can enter the game again.",
        "Match Duration: Total duration is 20 minutes, with each half lasting 10 minutes. In semi-finals and finals, each half may be extended to 12 minutes if the schedule allows.",
        "Kick-off: The match begins with a kick-off from the centre spot. A coin toss determines which team takes the kick-off or chooses its starting half.",
        "Winning: The team scoring more goals wins. If the match is tied, it may end in a draw during the group stage. Knockout matches will have a penalty shootout.",
        "Offside: There is no offside.",
        "Ball Out of Bounds: When the ball goes out of bounds, play restarts with a kick-in rather than a throw-in.",
        "Free Kicks: Free kicks will be awarded as direct or indirect free kicks, depending on the offence.",
        "Back-pass Rule: If a teammate passes the ball to the goalkeeper, the goalkeeper cannot use their hands to hold the ball.",
        "Yellow Card: A yellow card is a warning for offences such as fouls.",
        "Red Card: A red card means the player is sent off for the remainder of the match.",
        "Referee's Decision: The referee's decision is final. Arguments with the referee can lead to the disqualification of the team.",
        "Studs: Studs are strictly prohibited.",
        "Accessories: Players cannot wear accessories such as jewellery or watches during the match.",
        "Late Arrival: If a team is late and does not arrive on time, a walkover will be awarded to the opposing team, meaning they win by default.",
      ],
    },
    {
      name: "Basketball",
      categories: ["5v5", "3v3"],
      sections: [
        {
          title: "5v5 rules",
          items: [
            "Each team has 5 players on the court.",
            "The game consists of 4 quarters of 10 minutes each under FIBA rules.",
            "The team with the most points wins.",
            "If the score is tied, a 5-minute overtime is played.",
            "A free throw is worth 1 point.",
            "A shot from inside the three-point line is worth 2 points.",
            "A shot from beyond the three-point line is worth 3 points.",
            "Travelling is taking illegal steps while holding the ball.",
            "Double dribbling is restarting a dribble after stopping or dribbling with both hands simultaneously.",
            "Carrying is illegally placing the hand underneath the ball while dribbling.",
            "A team must attempt a shot within 24 seconds.",
            "A team must move the ball into the frontcourt within 8 seconds.",
            "An attacking player cannot remain in the opponent’s restricted area for more than 3 consecutive seconds while their team controls the ball in the frontcourt.",
            "Certain situations, including some throw-ins, have a 5-second limit.",
            "The ball is out of bounds when it touches the boundary line or the area outside the court.",
            "Pushing, holding, and illegal physical contact can result in a personal foul.",
            "A shooting foul may result in free throws.",
            "A player must leave the game after 5 fouls under FIBA rules or 6 personal fouls under NBA rules.",
            "After a successful basket, the opposing team puts the ball back into play from behind its end line.",
            "The team that did not touch the ball last generally gets possession when it goes out of bounds.",
            "Players cannot illegally interfere with a shot near the basket (goaltending).",
            "Substitutions and timeouts are allowed according to the competition’s rules.",
            "The game begins with a jump ball.",
            "Under FIBA rules, alternating possession is used for most subsequent held-ball situations.",
            "Players must respect the referee’s decisions and avoid unsporting behaviour.",
          ],
        },
        {
          title: "3v3 rules",
          items: [
            "3v3 basketball is played by two teams of three players each.",
            "Each team has one substitute in official FIBA 3x3.",
            "The game is played on half a basketball court with one basket.",
            "The 3x3 game lasts 10 minutes.",
            "Each team has 12 seconds to attempt a shot.",
            "A shot made inside the arc earns 1 point.",
            "A shot made outside the arc earns 2 points.",
            "A successful free throw earns 1 point.",
            "A team wins early by reaching 21 points with at least a 2-point lead.",
            "If time runs out first, the team with the higher score wins.",
            "If the score is tied at the end, overtime is played.",
            "In overtime, the first team to score 2 points wins.",
            "A coin toss determines which team gets the first possession.",
            "Play begins with a check ball at the top of the arc.",
            "After a successful basket, the opposing team takes possession.",
            "After a defensive rebound or steal, the team must clear the ball beyond the arc.",
            "Players must clear the ball beyond the arc before attempting a shot after gaining possession.",
            "A check ball restarts play after most dead-ball situations.",
            "Players must dribble while moving with the ball.",
            "Travelling is a violation.",
            "Double dribbling is a violation.",
            "Stepping out of bounds can result in loss of possession.",
            "Offensive goaltending is prohibited.",
            "A team loses possession if it fails to attempt a shot within 12 seconds.",
            "Pushing, holding, and illegal physical contact are fouls.",
            "A shooting foul may result in free throws.",
            "A foul on a two-point shot generally results in two free throws.",
            "Team fouls are counted throughout the game.",
            "From the seventh team foul onward, penalties become more severe.",
            "Team fouls 7–9 generally result in two free throws.",
            "From the tenth team foul onward, the penalty generally includes two free throws and possession for the opposing team.",
            "Serious misconduct can lead to a player’s disqualification.",
            "Substitutions take place during dead-ball situations.",
          ],
        },
      ],
    },
    {
      name: "Athletics",
      categories: ["400 m", "100 m"],
      rulesTitle: "General rules",
      rules: [
        "All runners must report to the starting line before the race begins.",
        "Runners must remain in their assigned lanes throughout the race.",
        "The race begins only after the starter's signal.",
        "A false start may result in disqualification, according to the event rules.",
        "Runners must not obstruct, push, or interfere with other participants.",
        "The winner is the runner whose torso crosses the finish line first.",
        "The referee's decision will be final.",
      ],
      sections: [
        {
          title: "400 metres race",
          numbered: true,
          items: [
            "All runners must report to the starting line before the race begins.",
            "Each runner must stay in their assigned lane for the entire race.",
            "The race begins only after the starter's signal.",
            "A false start may result in disqualification, according to the event rules.",
            "Runners must not obstruct, push, or interfere with other participants.",
            "Participants must complete one full lap of the track (400 metres).",
            "The winner is the runner whose torso crosses the finish line first.",
            "The referee's decision will be final.",
          ],
        },
      ],
    },
    {
      name: "Dodgeball",
      categories: [],
      numbered: true,
      rules: [
        "Each team must have 5 players, with no substitutes allowed.",
        "All matches will follow a knockout format.",
        "A coin toss will decide which team starts on which side of the court.",
        "The game begins with both teams behind their respective end lines. Players may collect the balls when the referee signals the start.",
        "A player is eliminated if hit by a live ball below the shoulders before it touches the ground.",
        "A player is eliminated if an opponent catches their live throw before it touches the ground.",
        "Players must stay within the boundaries of the futsal court and must not cross the centre line.",
        "Players may block incoming balls using a ball they are holding, but dropping that ball as a result of the block eliminates them.",
        "Headshots are not allowed and do not count as eliminations.",
        "Eliminated players must leave the playing area immediately and may not interfere with the game.",
        "Physical contact, dangerous throws and unsportsmanlike conduct are prohibited.",
        "The team that eliminates all opposing players wins the round.",
        "If the time limit expires, the team with more players remaining wins. If tied, the referee will apply the tournament's tie-break rule.",
        "The referee's decisions are final.",
      ],
      sections: [
        {
          title: "Tie-breaking rule",
          text: "If both teams have the same number of players remaining when time expires, a 2-minute overtime will be played. If the teams are still tied, the team that eliminates the first opposing player wins.",
        },
      ],
    },
    {
      name: "Gaming",
      categories: ["FIFA only"],
      rules: [
        "Knockout matches will have two 4-minute halves, but semifinals and the final will have two 6-minute halves.",
        "Special teams will not be allowed (only clubs).",
        "Handball and injuries will be turned off.",
        "Only the default camera will be used.",
        "Customized formations will not be allowed.",
      ],
    },
    {
      name: "Badminton",
      categories: ["Singles", "Doubles"],
      sections: [
        {
          title: "Singles",
          numbered: true,
          items: [
            "Each match is played between two players.",
            "Players must serve diagonally into the opponent’s service court.",
            "Players must stay within the singles court boundaries.",
            "Players must not touch the net or interfere with the opponent.",
            "The shuttlecock must land within the court boundaries.",
          ],
        },
        {
          title: "Doubles",
          numbered: true,
          items: [
            "Each match is played between two teams of two players.",
            "Players must serve diagonally into the opponent’s service court.",
            "Players must follow the doubles court boundaries and correct serving rotation.",
            "Players must not touch the net or interfere with opponents.",
            "The shuttlecock must land within the court boundaries.",
          ],
        },
        {
          title: "General rule",
          text: "The referee’s decision is final.",
        },
      ],
    },
    {
      name: "Table Tennis",
      categories: ["Singles"],
      rules: [
        "A game is played to 11 points, and you must win by 2 points.",
        "Each player serves twice before the serve changes.",
        "At 10–10, the serve changes after every point.",
        "The serve must bounce on your side first, then on your opponent’s side.",
        "The ball must bounce once on your side before you return it.",
        "You lose a point if you hit the ball out or into the net.",
        "You lose a point if the ball bounces twice on your side.",
        "You cannot hit the ball before it bounces on your side.",
        "If the serve touches the net but lands correctly, the serve is replayed.",
      ],
    },
    {
      name: "Chess",
      categories: [],
      sections: [
        {
          title: "Touch to move",
          text: "You must move the piece you touch first on your turn. If you need to adjust a piece, say “adjust”.",
        },
        {
          title: "Clock",
          text: "You must press the clock with the same hand you used to make your move. If your time ends, you lose.",
        },
        {
          title: "No talking",
          text: "Talking to anyone except the arbiter is strictly prohibited.",
        },
        {
          title: "Illegal moves",
          text: "Only 1 illegal move is allowed. If you make an illegal move twice, you lose the game.",
        },
        {
          title: "How you can lose",
          numbered: true,
          items: [
            "Checkmate.",
            "Resignation.",
            "Making illegal moves twice.",
            "Notification or any sound from any digital device (except the clock).",
            "Talking to anyone, players or spectators.",
            "Signalling any spectators or players.",
          ],
        },
        {
          title: "Time control",
          text: "Rapid: 10 minutes per player with an additional 5 seconds per move.",
        },
        {
          title: "Result points",
          items: [
            "Win: 1 point.",
            "Draw: 0.5 points.",
            "Loss: 0 points.",
          ],
        },
        {
          title: "Note",
          text: "All FIDE rules will be applicable!",
        },
      ],
    },
    {
      name: "Volleyball",
      categories: [],
      rules: [
        "Players: 5 players on the court per team, with no substitutions allowed.",
        "Scoring: a point is awarded after every rally. The first team to reach 11 points wins the set.",
        "Touches: a team may touch the ball a maximum of 3 times before sending it over the net.",
        "Ball: the ball may touch any part of the body but must not be caught or thrown.",
        "Block: a block touch does not count as one of the team's three touches.",
        "Serve: the server has 8 seconds to serve after the whistle.",
        "General: other standard FIVB rules apply. The referee's decision is final.",
      ],
    },
    {
      name: "Tug of War",
      categories: [],
      numbered: true,
      rules: [
        "5 players per team.",
        "First team to cross the line in between wins.",
        "Pullers must hold the rope with bare hands using an ordinary grip (palms facing upward/inward).",
        "The rope must pass between the body and the upper arm.",
        "No knots, loops, or wrapping the rope around any part of the body is allowed (except for the Anchor).",
        "Pullers must use bare hands and no material that may improve their grip.",
      ],
    },
    {
      name: "Arm Wrestling",
      categories: [],
      rules: [
        "Both competitors must keep their elbows on the designated pads.",
        "The free hand must hold the table peg.",
        "The match starts on the referee’s command, “Ready, Go!”",
        "The aim is to pin the opponent’s hand onto the pin pad.",
        "Lifting the elbow, starting early, or breaking the grip illegally may result in a foul.",
        "The referee decides the winner and applies penalties for fouls.",
        "Stop immediately if the referee calls a halt or either competitor experiences pain.",
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

// Compatibility: an older app.js only understands "rules". Give it a flat copy of everything
// (headings included) so no sport ever shows an empty pop-up. The newer app.js ignores this copy.
SITE.sports.forEach((sp) => {
  if (!sp.sections) return;
  const flat = [...(sp.rules || [])];
  sp.sections.forEach((s) => {
    flat.push("<strong>" + s.title + "</strong>");
    (s.items || [s.text]).forEach((t) => flat.push(t));
  });
  sp.modernRules = sp.rules || [];
  sp.rules = flat;
});

window.SITE = SITE;