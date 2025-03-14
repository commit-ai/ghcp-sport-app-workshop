import { NextRequest, NextResponse } from "next/server";

/**
 * Retrieves a list of press conferences from the NBA.
 * 
 * This endpoint returns an array of press conference objects containing details about
 * various NBA post-game and pre-game conferences. Each conference includes:
 * - Title of the press conference
 * - Date and time of the conference
 * - Location where it was held
 * - Full transcription of the conference
 * 
 * @param request - The incoming Next.js request object
 * @returns A JSON response containing an array of press conference objects
 * 
 * @example
 * // Example response structure:
 * [
 *   {
 *     title: string,
 *     date: string, // Format: "YYYY-MM-DD"
 *     time: string, // Format: "HH:MM AM/PM"
 *     location: string,
 *     transcription: string
 *   },
 *   ...
 * ]
 */
export async function GET(request: NextRequest) {
  const pressConferences = [
    {
      title:
        "Post-Game Conference: Los Angeles Lakers vs. Golden State Warriors",
      date: "2024-11-02",
      time: "10:30 PM",
      location: "Crypto.com Arena, Los Angeles, CA",
      transcription:
        "Moderator: Thank you for joining us tonight. We have LeBron James, Anthony Davis, and Head Coach Darvin Ham with us to discuss tonight’s thrilling game. \n\nLeBron James: This was definitely a challenging game. The Warriors came out aggressive, as they always do. Steph and Klay were making their shots, and we knew they’d put us to the test. But the important thing was staying focused. We kept our defense tight and capitalized on turnovers. This team has a lot of depth, and it’s nights like this that show our strength.\n\nReporter 1: LeBron, in the fourth quarter, we saw an impressive 15-point comeback. What changed the momentum?\n\nLeBron James: Honestly, it was the bench. They came in and brought energy, especially Austin Reaves and Rui Hachimura. Our bench has been putting in work, and it’s great to see their effort pay off. When they bring that spark, it fires up everyone on the floor. I told the guys to keep pushing, keep grinding. We started hitting our shots, and our defense really clicked in those final minutes.\n\nAnthony Davis: And it wasn’t just about scoring. Our defense won us this game. We knew if we could disrupt their rhythm and force some key turnovers, we’d create scoring opportunities. Defense has been a big focus in our practices, and tonight it paid off. Our defensive rotations were smooth, and we got those rebounds when it counted.\n\nReporter 2: Coach, what were your thoughts on the team’s performance, particularly in the second half?\n\nCoach Darvin Ham: I’m proud of our guys. We’ve talked about resilience, and tonight, we showed it. We started the game a bit slow, and Golden State took advantage. But as the game progressed, I saw our players come together, adjust to their game plan, and support each other. Defense became the focal point. Once we committed to closing out on their shooters and fighting for those boards, the game turned in our favor.\n\nReporter 3: Anthony, you seemed particularly aggressive in the paint tonight. Was that a strategic decision?\n\nAnthony Davis: Definitely. We knew Golden State didn’t have the same size we do, so we wanted to make sure we controlled the paint. I wanted to be a force down low, whether it was grabbing rebounds or getting those put-backs. My teammates were feeding me the ball, and I just focused on finishing.\n\nReporter 4: Coach, do you see this victory as a confidence booster for the rest of the season?\n\nCoach Darvin Ham: Absolutely. Every win matters, especially against a top team like Golden State. We’ll take this momentum, learn from what went right and wrong, and apply it in upcoming games. The season is long, but wins like this show us what we’re capable of. If we keep building, stay focused, and keep supporting each other, I believe we’re in for a strong season.\n\nModerator: Thank you, everyone. That’s all for tonight. We appreciate your time and support.",
    },
    {
      title: "Pre-Game Conference: Boston Celtics vs. Miami Heat",
      date: "2024-11-05",
      time: "6:30 PM",
      location: "TD Garden, Boston, MA",
      transcription:
        "Moderator: Good evening, everyone. We’re here with Coach Joe Mazzulla and Jayson Tatum ahead of the Boston Celtics’ matchup with the Miami Heat. \n\nJayson Tatum: We know the Heat is always a formidable opponent. They play with physicality and intensity, and they never back down. It’s all about preparing for a tough battle. We’ve been practicing our sets, focusing on movement and how to exploit any gaps in their defense. Miami plays a disciplined game, so we need to be sharp.\n\nReporter 1: Jayson, how are you preparing for your matchup against Jimmy Butler?\n\nJayson Tatum: Jimmy’s an amazing player. We know he’s a competitor and brings his best every time. My focus is on sticking to our game plan and not letting him disrupt our rhythm. We’ll have to communicate a lot on defense and not give him easy lanes. If I’m matched up with him, it’s about playing smart and taking calculated shots.\n\nReporter 2: Coach, are there any particular strategies to counter Miami’s defensive schemes?\n\nCoach Joe Mazzulla: Miami is known for their zone defense, and we’re prepared to face it. We’ve studied how they rotate and set screens, and our game plan involves a lot of movement off the ball. Our focus is on staying patient, moving the ball around, and looking for high-percentage shots. We don’t want to rush anything, as that plays into their hands.\n\nReporter 3: Will we see a different lineup in tonight's game?\n\nCoach Joe Mazzulla: There may be some adjustments. We want to experiment with different rotations and see how they match up with Miami. Our depth is our strength, and I want to utilize that as much as possible. This team is ready, and I have confidence in everyone who steps on the floor.\n\nReporter 4: Jayson, with the team’s recent winning streak, how is the morale in the locker room?\n\nJayson Tatum: It’s high, definitely. We’re all pushing each other to be better. There’s a strong sense of unity in the locker room, and that shows on the court. We’re not just playing for ourselves; we’re playing for each other, and that makes a huge difference.\n\nCoach Joe Mazzulla: That camaraderie is key. The guys are motivated, and it’s not just about the individual stats—it’s about the team. Every player on this roster is dedicated to the larger goal, and that commitment is why I believe we’ll keep seeing positive results.\n\nModerator: Thank you, Coach and Jayson. We’ll see you all at the game tomorrow night.",
    },
    {
      title: "Post-Game Conference: Chicago Bulls vs. Brooklyn Nets",
      date: "2024-11-10",
      time: "11:00 PM",
      location: "United Center, Chicago, IL",
      transcription:
        "Moderator: Welcome, everyone. We’re here with Chicago Bulls Head Coach Billy Donovan and DeMar DeRozan following their win against the Brooklyn Nets.\n\nDeMar DeRozan: It was a battle tonight. The Nets brought a lot of energy, and they’re a tough team to beat, especially with their offensive firepower. We had to be locked in defensively and make smart decisions on offense. We’ve been focusing on creating more scoring opportunities without sacrificing our defensive integrity, and tonight it showed.\n\nReporter 1: DeMar, you scored 35 points tonight. What was your mindset coming into this game?\n\nDeMar DeRozan: Just to be aggressive, plain and simple. When you’re up against a team like Brooklyn, you can’t hold back. I wanted to push the pace, take advantage of any openings, and make sure we stayed in control. My teammates were setting great screens and giving me the ball in good spots, so it made my job easier.\n\nCoach Billy Donovan: This was one of our better defensive games, no question. Our goal was to limit Brooklyn’s open looks and contest every shot. Defense has been a focus for us all season, and the guys really executed tonight. We communicated well, rotated effectively, and stayed disciplined.\n\nReporter 2: Coach, what adjustments did you make at halftime?\n\nCoach Billy Donovan: We talked about controlling the tempo. Brooklyn thrives on fast breaks, so we wanted to slow them down and make them work for every point. I reminded the guys to stay patient on offense, wait for the right shot, and not rush anything. The team responded well, and that control made a huge difference in the second half.\n\nReporter 3: DeMar, the fans were really into the game tonight. How much did their energy impact the team?\n\nDeMar DeRozan: The fans here are incredible. You feel their passion from the moment you step on the court. Their energy gives us an extra push, especially during those tough stretches. Knowing they’re behind us makes every play feel more important. We feed off that energy, and it definitely plays a part in how we perform.\n\nCoach Billy Donovan: Having a home crowd like this is a huge advantage. They keep us motivated, keep us focused. It’s not just about the cheers; it’s about the sense of pride they bring to every game. We want to win for them, and it’s a powerful motivator.\n\nModerator: Thank you, Coach Donovan and DeMar. Congratulations on the win.",
    },
  ];

  return NextResponse.json(pressConferences);
}
