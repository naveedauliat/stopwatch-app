// Single source of truth for /timer/[preset] pages, the /timer hub, and sitemap.
// Each preset is a genuinely useful pre-configured countdown with unique copy —
// NOT a thin doorway page. Keep durations distinct and use-cases tailored.

export const presets = [
  {
    slug: "1-minute-timer",
    h: 0, m: 1, s: 0, label: "1 Minute Timer",
    title: "1 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 1 minute timer online. Click start and it counts down 60 seconds with a sound alarm. No signup, works on mobile and desktop.",
    h1: "1 Minute Timer",
    intro:
      "A ready-to-go 60-second countdown. Press start and it runs a full minute, then plays an alarm — perfect for quick drills, plank holds, and short breaks.",
    useCases: [
      { icon: "🧊", title: "Planks & Holds", desc: "Hold a plank or wall-sit for a clean 60 seconds without watching a clock." },
      { icon: "🦷", title: "Brushing & Rinsing", desc: "Time a mouthwash rinse or a kid's hand-wash to a full minute." },
      { icon: "🗣️", title: "Elevator Pitch", desc: "Rehearse a 60-second pitch or intro and stay on time." },
    ],
    related: ["2-minute-timer", "3-minute-timer", "5-minute-timer"],
  },
  {
    slug: "2-minute-timer",
    h: 0, m: 2, s: 0, label: "2 Minute Timer",
    title: "2 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 2 minute timer online with an alarm sound. Start a 120-second countdown instantly — no signup, works offline once loaded.",
    h1: "2 Minute Timer",
    intro:
      "A pre-set two-minute countdown with a sound alert. Great for timed brushing, quick rounds, and short focus sprints.",
    useCases: [
      { icon: "🪥", title: "Toothbrushing", desc: "The dentist-recommended two minutes, timed automatically." },
      { icon: "🥊", title: "Quick Rounds", desc: "Run a 2-minute round for shadow boxing, stretching, or drills." },
      { icon: "☕", title: "Steeping Tea", desc: "Green tea and quick brews are ready in about two minutes." },
    ],
    related: ["1-minute-timer", "3-minute-timer", "5-minute-timer"],
  },
  {
    slug: "3-minute-timer",
    h: 0, m: 3, s: 0, label: "3 Minute Timer",
    title: "3 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 3 minute timer online. Instant 180-second countdown with a sound alarm. Perfect for tea, eggs, and short exercises.",
    h1: "3 Minute Timer",
    intro:
      "A three-minute countdown ready to start. Plays an alarm at zero — ideal for steeping tea, soft-boiling eggs, and quick sets.",
    useCases: [
      { icon: "🍵", title: "Steeping Tea", desc: "Most black teas are perfect at three minutes." },
      { icon: "🥚", title: "Soft-Boiled Eggs", desc: "Runny-yolk soft-boiled eggs land around three minutes." },
      { icon: "🧘", title: "Breathing Breaks", desc: "A short three-minute reset between tasks." },
    ],
    related: ["1-minute-timer", "5-minute-timer", "egg-timer"],
  },
  {
    slug: "5-minute-timer",
    h: 0, m: 5, s: 0, label: "5 Minute Timer",
    title: "5 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 5 minute timer online with a sound alarm. Start a 5-minute countdown in one click — no signup, works on any device.",
    h1: "5 Minute Timer",
    intro:
      "A five-minute countdown, pre-set and ready. Press start and it alarms when time's up — the go-to for breaks, drills, and quick tasks.",
    useCases: [
      { icon: "⏸️", title: "Short Breaks", desc: "The classic five-minute break after a focus block." },
      { icon: "🍳", title: "Cooking", desc: "Time simmering, resting, or steeping to five minutes." },
      { icon: "🎮", title: '"Five More Minutes"', desc: "Give kids (or yourself) a firm, honest five-minute limit." },
    ],
    related: ["10-minute-timer", "3-minute-timer", "pomodoro-timer"],
  },
  {
    slug: "10-minute-timer",
    h: 0, m: 10, s: 0, label: "10 Minute Timer",
    title: "10 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 10 minute timer online. Instant 10-minute countdown with an alarm sound. Great for workouts, study breaks, and cooking.",
    h1: "10 Minute Timer",
    intro:
      "A ten-minute countdown ready to run, with a sound alert at zero. Ideal for warm-ups, tidy-ups, and short study sprints.",
    useCases: [
      { icon: "🏃", title: "Warm-Ups", desc: "A quick ten-minute mobility or cardio warm-up." },
      { icon: "🧹", title: "10-Minute Tidy", desc: "Set the clock and blitz one room before it rings." },
      { icon: "📖", title: "Study Sprints", desc: "Short, focused ten-minute reading or revision bursts." },
    ],
    related: ["5-minute-timer", "15-minute-timer", "20-minute-timer"],
  },
  {
    slug: "15-minute-timer",
    h: 0, m: 15, s: 0, label: "15 Minute Timer",
    title: "15 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 15 minute timer online with a sound alarm. Start a quarter-hour countdown instantly — no signup, works offline.",
    h1: "15 Minute Timer",
    intro:
      "A fifteen-minute countdown, pre-set and one click from starting. Alarms at zero — a favorite for power naps, chores, and focus blocks.",
    useCases: [
      { icon: "😴", title: "Power Naps", desc: "A short recharge that avoids deep-sleep grogginess." },
      { icon: "🧺", title: "Chores", desc: "Beat the clock on laundry, dishes, or inbox zero." },
      { icon: "🎯", title: "Focus Blocks", desc: "A gentle, sustainable focus sprint for hard tasks." },
    ],
    related: ["10-minute-timer", "20-minute-timer", "30-minute-timer"],
  },
  {
    slug: "20-minute-timer",
    h: 0, m: 20, s: 0, label: "20 Minute Timer",
    title: "20 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 20 minute timer online. Instant 20-minute countdown with an alarm. Perfect for naps, workouts, and study sessions.",
    h1: "20 Minute Timer",
    intro:
      "A twenty-minute countdown ready to go, with a sound alert when it ends. Great for the ideal power nap and mid-length focus work.",
    useCases: [
      { icon: "😴", title: "The 20-Min Nap", desc: "Research favors ~20 minutes for an alert, refreshing nap." },
      { icon: "💪", title: "Quick Workouts", desc: "A full express workout or circuit in twenty minutes." },
      { icon: "📚", title: "Revision", desc: "A focused study block before a short break." },
    ],
    related: ["15-minute-timer", "30-minute-timer", "pomodoro-timer"],
  },
  {
    slug: "30-minute-timer",
    h: 0, m: 30, s: 0, label: "30 Minute Timer",
    title: "30 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 30 minute timer online with a sound alarm. Start a half-hour countdown in one click — no signup, works on any device.",
    h1: "30 Minute Timer",
    intro:
      "A thirty-minute countdown, pre-set and ready. Plays an alarm at zero — ideal for cooking, workouts, and half-hour focus sessions.",
    useCases: [
      { icon: "🍲", title: "Cooking & Baking", desc: "Roasts, bakes, and simmers timed to the half hour." },
      { icon: "🏋️", title: "Workouts", desc: "A solid thirty-minute training session, timed cleanly." },
      { icon: "📝", title: "Deep Work", desc: "A half-hour block for a single meaningful task." },
    ],
    related: ["20-minute-timer", "45-minute-timer", "1-hour-timer"],
  },
  {
    slug: "45-minute-timer",
    h: 0, m: 45, s: 0, label: "45 Minute Timer",
    title: "45 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 45 minute timer online. Instant 45-minute countdown with an alarm sound. Great for classes, workouts, and study blocks.",
    h1: "45 Minute Timer",
    intro:
      "A forty-five-minute countdown ready to start, with a sound alert at zero — the length of a class period, a lesson, or a long focus block.",
    useCases: [
      { icon: "🏫", title: "Class Periods", desc: "Mirror a standard 45-minute lesson or lecture." },
      { icon: "🎹", title: "Practice", desc: "A focused practice session for music or a skill." },
      { icon: "🧠", title: "Deep Focus", desc: "A long, distraction-free block for demanding work." },
    ],
    related: ["30-minute-timer", "1-hour-timer", "study-timer"],
  },
  {
    slug: "1-hour-timer",
    h: 1, m: 0, s: 0, label: "1 Hour Timer",
    title: "1 Hour Timer - Free Online 60 Minute Countdown with Alarm",
    description:
      "A free 1 hour timer online with a sound alarm. Start a 60-minute countdown in one click — no signup, works offline once loaded.",
    h1: "1 Hour Timer",
    intro:
      "A sixty-minute countdown, pre-set and one click from starting. Alarms at zero — perfect for long cooking, workouts, and hour-long focus sessions.",
    useCases: [
      { icon: "🍖", title: "Slow Cooking", desc: "Roasts and bakes that need a full hour, timed hands-free." },
      { icon: "🏊", title: "Workouts & Laps", desc: "A complete one-hour training or swim session." },
      { icon: "💼", title: "Meetings", desc: "Keep a call or workshop to a strict sixty minutes." },
    ],
    related: ["30-minute-timer", "45-minute-timer", "90-minute-timer"],
  },
  {
    slug: "90-minute-timer",
    h: 1, m: 30, s: 0, label: "90 Minute Timer",
    title: "90 Minute Timer - Free Online Countdown with Alarm",
    description:
      "A free 90 minute timer online. Instant 90-minute countdown with an alarm — great for sleep cycles, films, and long focus sessions.",
    h1: "90 Minute Timer",
    intro:
      "A ninety-minute countdown ready to run, with a sound alert at zero. Matches one full sleep cycle and the length of a football match or a film.",
    useCases: [
      { icon: "🌙", title: "Sleep Cycles", desc: "One complete ~90-minute sleep cycle for smarter naps." },
      { icon: "⚽", title: "Match Length", desc: "Time a full 90-minute game or training session." },
      { icon: "🎬", title: "Focus & Films", desc: "A long, uninterrupted block for deep work or a movie." },
    ],
    related: ["1-hour-timer", "45-minute-timer", "study-timer"],
  },
  {
    slug: "pomodoro-timer",
    h: 0, m: 25, s: 0, label: "Pomodoro Timer",
    title: "Pomodoro Timer - Free Online 25 Minute Focus Timer",
    description:
      "A free Pomodoro timer online: a 25-minute focus countdown with a sound alarm. Work in focused sprints, then take a break. No signup.",
    h1: "Pomodoro Timer (25 Minutes)",
    intro:
      "The Pomodoro Technique in one click: a focused 25-minute work sprint with an alarm at the end. Work, hear the bell, then take a 5-minute break and repeat.",
    useCases: [
      { icon: "🍅", title: "Focus Sprints", desc: "25 minutes of single-tasking, no notifications, no multitasking." },
      { icon: "☕", title: "Short Breaks", desc: "After each Pomodoro, take five minutes off with the 5 minute timer." },
      { icon: "📈", title: "Beat Procrastination", desc: "A 25-minute commitment is small enough to just start." },
    ],
    related: ["5-minute-timer", "20-minute-timer", "study-timer"],
  },
  {
    slug: "study-timer",
    h: 0, m: 30, s: 0, label: "Study Timer",
    title: "Study Timer - Free Online Countdown Timer for Studying",
    description:
      "A free study timer online: a 30-minute focus countdown with a sound alarm. Timeboxing beats endless studying — start a focused session now.",
    h1: "Study Timer",
    intro:
      "A pre-set thirty-minute study countdown with a sound alert. Timeboxed study sessions beat marathon cramming — study hard, hear the alarm, then rest.",
    useCases: [
      { icon: "📚", title: "Timeboxed Study", desc: "A fixed block keeps revision focused and prevents burnout." },
      { icon: "🔁", title: "Study/Break Cycles", desc: "Pair 30 minutes of study with a short break, then repeat." },
      { icon: "🧪", title: "Practice Exams", desc: "Simulate timed conditions for questions and past papers." },
    ],
    related: ["pomodoro-timer", "45-minute-timer", "20-minute-timer"],
  },
  {
    slug: "egg-timer",
    h: 0, m: 10, s: 0, label: "Egg Timer",
    title: "Egg Timer - Free Online Countdown for Perfect Boiled Eggs",
    description:
      "A free online egg timer with a sound alarm. Pre-set to 10 minutes for hard-boiled eggs — adjust for soft (6 min) or medium (8 min). No signup.",
    h1: "Egg Timer",
    intro:
      "A ready-to-go egg timer with a sound alert. It's set to 10 minutes for firm hard-boiled eggs — tap the arrows to dial it to your preferred doneness.",
    useCases: [
      { icon: "🥚", title: "Soft (6 min)", desc: "Runny yolks and just-set whites — great for dipping." },
      { icon: "🍳", title: "Medium (8 min)", desc: "Jammy, custardy yolks that hold their shape." },
      { icon: "🥗", title: "Hard (10–12 min)", desc: "Fully firm yolks for salads and snacking." },
    ],
    related: ["3-minute-timer", "5-minute-timer", "10-minute-timer"],
  },
  {
    slug: "meditation-timer",
    h: 0, m: 10, s: 0, label: "Meditation Timer",
    title: "Meditation Timer - Free Online Countdown with Bell",
    description:
      "A free meditation timer online with a gentle end alarm. Pre-set to 10 minutes so you can meditate without checking the clock. No signup.",
    h1: "Meditation Timer",
    intro:
      "A calm ten-minute meditation countdown that sounds a soft alert when you're done, so you can close your eyes and stop watching the clock.",
    useCases: [
      { icon: "🧘", title: "Daily Sit", desc: "A sustainable ten-minute daily meditation habit." },
      { icon: "🌬️", title: "Breathwork", desc: "Time box-breathing or paced breathing exercises." },
      { icon: "🛌", title: "Body Scan", desc: "A short guided-style body scan to unwind." },
    ],
    related: ["5-minute-timer", "15-minute-timer", "20-minute-timer"],
  },
];

export const presetBySlug = Object.fromEntries(presets.map((p) => [p.slug, p]));

export const presetSlugs = presets.map((p) => p.slug);
