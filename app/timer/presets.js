// Single source of truth for /timer/[preset] pages, the /timer hub, and sitemap.
// Each preset is a genuinely useful pre-configured countdown with unique copy —
// NOT a thin doorway page. Keep durations distinct and use-cases tailored.
//
// Fields:
//   answer  — a direct, self-contained answer paragraph (targets AI Overviews /
//             ChatGPT / Perplexity citation for "<duration> timer" queries).
//   faq     — 2-3 duration-specific Q&As, rendered visibly + as FAQPage JSON-LD.

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
    answer:
      "A 1 minute timer counts down from 60 seconds and sounds an alarm the moment it reaches zero. This one is pre-set to exactly one minute, so you just press Start — there is nothing to configure. It runs in your browser using the high-precision Performance API, keeps counting if you switch tabs, and works offline once the page has loaded. One minute is the standard interval for plank holds, timed brushing, breathing resets, and rehearsing a 60-second pitch.",
    useCases: [
      { icon: "🧊", title: "Planks & Holds", desc: "Hold a plank or wall-sit for a clean 60 seconds without watching a clock." },
      { icon: "🦷", title: "Brushing & Rinsing", desc: "Time a mouthwash rinse or a kid's hand-wash to a full minute." },
      { icon: "🗣️", title: "Elevator Pitch", desc: "Rehearse a 60-second pitch or intro and stay on time." },
    ],
    faq: [
      { q: "How long is a 1 minute timer?", a: "Exactly 60 seconds. This timer is pre-set to one minute, counts down to zero, and then plays a sound alarm — no adjusting required." },
      { q: "Does the 1 minute timer beep when it ends?", a: "Yes. A sound alarm plays automatically when the countdown reaches zero. You can mute it with the sound toggle if you need silent timing." },
      { q: "Is a minute long enough for a plank?", a: "A 60-second plank is a common fitness benchmark for core endurance. Beginners often start at 20-30 seconds and build up, while a clean one-minute hold is a solid intermediate goal." },
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
    answer:
      "A 2 minute timer counts down 120 seconds and rings an alarm when it finishes. This one is pre-set to two minutes, so a single tap of Start begins the countdown. Two minutes is the dentist-recommended toothbrushing time, a standard boxing round length, and about how long green tea should steep. It runs in your browser with millisecond accuracy, continues in background tabs, and needs no account or download.",
    useCases: [
      { icon: "🪥", title: "Toothbrushing", desc: "The dentist-recommended two minutes, timed automatically." },
      { icon: "🥊", title: "Quick Rounds", desc: "Run a 2-minute round for shadow boxing, stretching, or drills." },
      { icon: "☕", title: "Steeping Tea", desc: "Green tea and quick brews are ready in about two minutes." },
    ],
    faq: [
      { q: "How long is a 2 minute timer?", a: "120 seconds. It is pre-set to two minutes and sounds an alarm at zero, so you can start it with one click." },
      { q: "Why is 2 minutes recommended for brushing teeth?", a: "The American Dental Association recommends brushing for two minutes, twice a day, because that is roughly how long it takes to clean all tooth surfaces effectively — about 30 seconds per quadrant." },
      { q: "How long should green tea steep?", a: "Most green teas are best steeped for about two minutes in water below boiling. Longer steeping can turn green tea bitter, which is why a two-minute timer is handy." },
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
    answer:
      "A 3 minute timer counts down 180 seconds and plays an alarm when it reaches zero. This one is pre-set to three minutes and starts with a single tap. Three minutes is the classic window for steeping black tea, soft-boiling an egg for a runny yolk, and short exercise sets or breathing breaks. It uses your browser's Performance API for accuracy, keeps running in background tabs, and works with no signup.",
    useCases: [
      { icon: "🍵", title: "Steeping Tea", desc: "Most black teas are perfect at three minutes." },
      { icon: "🥚", title: "Soft-Boiled Eggs", desc: "Runny-yolk soft-boiled eggs land around three minutes." },
      { icon: "🧘", title: "Breathing Breaks", desc: "A short three-minute reset between tasks." },
    ],
    faq: [
      { q: "How long is a 3 minute timer?", a: "180 seconds. It is pre-set to three minutes and sounds an alarm at zero." },
      { q: "How long do you boil an egg for a soft yolk?", a: "For a soft-boiled egg with a runny yolk and set white, boil for about three minutes. Add a minute for a jammy centre, or more for firmer results." },
      { q: "Is 3 minutes right for steeping black tea?", a: "Yes. Most black teas are best steeped for three to five minutes; three minutes gives a brisk, balanced cup, while longer draws out more tannin and strength." },
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
    answer:
      "A 5 minute timer counts down 300 seconds and sounds an alarm at zero. This one is pre-set to five minutes and begins the instant you press Start. Five minutes is the classic short break between focus blocks, a firm \"five more minutes\" limit for kids, and a common interval for cooking steps like resting or steeping. It times with millisecond precision in your browser, continues in background tabs, and requires no account.",
    useCases: [
      { icon: "⏸️", title: "Short Breaks", desc: "The classic five-minute break after a focus block." },
      { icon: "🍳", title: "Cooking", desc: "Time simmering, resting, or steeping to five minutes." },
      { icon: "🎮", title: '"Five More Minutes"', desc: "Give kids (or yourself) a firm, honest five-minute limit." },
    ],
    faq: [
      { q: "How long is a 5 minute timer?", a: "300 seconds. It is pre-set to five minutes and plays a sound alarm when the countdown ends." },
      { q: "Is 5 minutes a good break length?", a: "Yes — a five-minute break is the standard short rest in the Pomodoro Technique, taken after each 25-minute focus sprint to recharge without losing momentum." },
      { q: "Can I keep the 5 minute timer running in another tab?", a: "Yes. The timer keeps counting accurately even when you switch tabs or apps, and it alarms at zero when you return." },
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
    answer:
      "A 10 minute timer counts down 600 seconds and rings an alarm when it hits zero. This one is pre-set to ten minutes and starts with one tap. Ten minutes is a natural length for a warm-up, a quick tidy-up, a short study sprint, or a hard-boiled egg. It runs on your browser's Performance API for accuracy, carries on in background tabs, and works offline once loaded — no signup needed.",
    useCases: [
      { icon: "🏃", title: "Warm-Ups", desc: "A quick ten-minute mobility or cardio warm-up." },
      { icon: "🧹", title: "10-Minute Tidy", desc: "Set the clock and blitz one room before it rings." },
      { icon: "📖", title: "Study Sprints", desc: "Short, focused ten-minute reading or revision bursts." },
    ],
    faq: [
      { q: "How long is a 10 minute timer?", a: "600 seconds. It is pre-set to ten minutes and sounds an alarm at zero." },
      { q: "Is ten minutes enough for a workout?", a: "A focused ten-minute session — such as a HIIT circuit or a mobility routine — can be an effective quick workout, especially on busy days when a longer session is not possible." },
      { q: "How long to hard-boil an egg?", a: "About ten minutes of boiling gives a fully firm yolk. For a softer, jammy centre, try the egg timer set to six to eight minutes instead." },
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
    answer:
      "A 15 minute timer counts down a quarter of an hour — 900 seconds — and sounds an alarm at zero. This one is pre-set to fifteen minutes and starts with a single tap. Fifteen minutes is a popular power-nap length, a manageable chore blitz, and a gentle focus block for hard-to-start tasks. It times accurately in your browser, keeps running in background tabs, and needs no account or install.",
    useCases: [
      { icon: "😴", title: "Power Naps", desc: "A short recharge that avoids deep-sleep grogginess." },
      { icon: "🧺", title: "Chores", desc: "Beat the clock on laundry, dishes, or inbox zero." },
      { icon: "🎯", title: "Focus Blocks", desc: "A gentle, sustainable focus sprint for hard tasks." },
    ],
    faq: [
      { q: "How long is a 15 minute timer?", a: "900 seconds — a quarter of an hour. It is pre-set to fifteen minutes and alarms at zero." },
      { q: "Is 15 minutes a good nap length?", a: "Yes. A 10-20 minute nap is often called a \"power nap\" because it refreshes alertness while keeping you in light sleep, so you avoid the grogginess of waking from deep sleep." },
      { q: "How can a 15 minute timer help me stop procrastinating?", a: "Committing to just fifteen minutes lowers the barrier to starting. Once the timer is running you often build momentum and keep going well past the alarm." },
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
    answer:
      "A 20 minute timer counts down 1,200 seconds and rings an alarm at zero. This one is pre-set to twenty minutes and starts with one tap. Twenty minutes is widely cited as the ideal power-nap length, and it also suits an express workout or a focused revision block. It runs with millisecond precision in your browser, continues while you switch tabs, and works with no signup.",
    useCases: [
      { icon: "😴", title: "The 20-Min Nap", desc: "Research favors ~20 minutes for an alert, refreshing nap." },
      { icon: "💪", title: "Quick Workouts", desc: "A full express workout or circuit in twenty minutes." },
      { icon: "📚", title: "Revision", desc: "A focused study block before a short break." },
    ],
    faq: [
      { q: "How long is a 20 minute timer?", a: "1,200 seconds — twenty minutes. It is pre-set and sounds an alarm when it reaches zero." },
      { q: "Why is 20 minutes the ideal nap?", a: "A roughly 20-minute nap keeps you in the lighter stages of sleep, so you wake feeling refreshed rather than groggy. Longer naps risk entering deep sleep and causing sleep inertia." },
      { q: "Should I set an alarm for a nap?", a: "Yes. Setting a 20-minute alarm lets you relax fully without worrying about oversleeping, which is exactly what a pre-set countdown timer is for." },
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
    answer:
      "A 30 minute timer counts down half an hour — 1,800 seconds — and sounds an alarm at zero. This one is pre-set to thirty minutes and starts with a single tap. Half an hour suits roasting and baking steps, a solid workout, or a deep-work block on one task. It times accurately using your browser's Performance API, keeps running in background tabs, and requires no account or download.",
    useCases: [
      { icon: "🍲", title: "Cooking & Baking", desc: "Roasts, bakes, and simmers timed to the half hour." },
      { icon: "🏋️", title: "Workouts", desc: "A solid thirty-minute training session, timed cleanly." },
      { icon: "📝", title: "Deep Work", desc: "A half-hour block for a single meaningful task." },
    ],
    faq: [
      { q: "How long is a 30 minute timer?", a: "1,800 seconds — half an hour. It is pre-set to thirty minutes and alarms at zero." },
      { q: "Is 30 minutes a good study or work block?", a: "Yes. A half-hour block is long enough for meaningful progress on a single task but short enough to stay focused, and it pairs well with a five-minute break afterwards." },
      { q: "Can I adjust the 30 minute timer?", a: "Yes. Use the up and down arrows to change the hours, minutes, and seconds before you press Start if you need a different duration." },
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
    answer:
      "A 45 minute timer counts down 2,700 seconds and rings an alarm at zero. This one is pre-set to forty-five minutes and starts with one tap. Forty-five minutes is the length of a standard class period or lesson, a focused practice session, and a long block of deep work. It runs with millisecond accuracy in your browser, continues in background tabs, and works offline once loaded.",
    useCases: [
      { icon: "🏫", title: "Class Periods", desc: "Mirror a standard 45-minute lesson or lecture." },
      { icon: "🎹", title: "Practice", desc: "A focused practice session for music or a skill." },
      { icon: "🧠", title: "Deep Focus", desc: "A long, distraction-free block for demanding work." },
    ],
    faq: [
      { q: "How long is a 45 minute timer?", a: "2,700 seconds — forty-five minutes. It is pre-set and sounds an alarm when it reaches zero." },
      { q: "Why is 45 minutes a common lesson length?", a: "Many schools use 45-minute periods because it is long enough to teach and practise a topic while matching typical attention spans before a change of activity." },
      { q: "Is 45 minutes good for focused work?", a: "Yes. A 45-minute block is a popular alternative to the 25-minute Pomodoro for people who prefer longer, deeper focus sessions before taking a break." },
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
    answer:
      "A 1 hour timer counts down 60 minutes — 3,600 seconds — and sounds an alarm at zero. This one is pre-set to one hour and starts with a single tap. A full hour suits slow cooking and roasting, a complete workout or swim, and keeping a meeting or study session to a strict sixty minutes. It times accurately in your browser, keeps counting in background tabs, and needs no account.",
    useCases: [
      { icon: "🍖", title: "Slow Cooking", desc: "Roasts and bakes that need a full hour, timed hands-free." },
      { icon: "🏊", title: "Workouts & Laps", desc: "A complete one-hour training or swim session." },
      { icon: "💼", title: "Meetings", desc: "Keep a call or workshop to a strict sixty minutes." },
    ],
    faq: [
      { q: "How long is a 1 hour timer?", a: "3,600 seconds — sixty minutes. It is pre-set to one hour and plays a sound alarm at zero." },
      { q: "Will the 1 hour timer keep running if I lock my phone or change tabs?", a: "Yes. It uses timestamp-based timing, so it stays accurate and alarms at the right moment even after you switch tabs or apps." },
      { q: "Can I use a 1 hour timer for meetings?", a: "Absolutely. Starting a visible sixty-minute countdown is a simple way to keep a call, workshop, or class on schedule." },
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
    answer:
      "A 90 minute timer counts down an hour and a half — 5,400 seconds — and rings an alarm at zero. This one is pre-set to ninety minutes and starts with one tap. Ninety minutes matches one full sleep cycle, the length of a football match, and a long deep-work session or a film. It runs with millisecond precision in your browser, continues in background tabs, and works with no signup.",
    useCases: [
      { icon: "🌙", title: "Sleep Cycles", desc: "One complete ~90-minute sleep cycle for smarter naps." },
      { icon: "⚽", title: "Match Length", desc: "Time a full 90-minute game or training session." },
      { icon: "🎬", title: "Focus & Films", desc: "A long, uninterrupted block for deep work or a movie." },
    ],
    faq: [
      { q: "How long is a 90 minute timer?", a: "5,400 seconds — one and a half hours. It is pre-set to ninety minutes and alarms at zero." },
      { q: "Why is 90 minutes linked to sleep?", a: "A full sleep cycle lasts roughly 90 minutes. Timing sleep or a long nap in 90-minute multiples aims to have you wake at the end of a cycle, in lighter sleep, feeling less groggy." },
      { q: "Is a 90 minute focus session too long?", a: "Some people work best in ~90-minute \"ultradian\" blocks followed by a proper break. If that feels long, try a 45-minute block or the 25-minute Pomodoro instead." },
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
    answer:
      "A Pomodoro timer runs a 25-minute focus sprint and sounds an alarm at the end, cueing a short break. This one is pre-set to 25 minutes so you can start immediately. The Pomodoro Technique, created by Francesco Cirillo in the late 1980s, breaks work into 25-minute intervals called \"pomodoros\" separated by 5-minute breaks, with a longer 15-30 minute break after every four. It runs accurately in your browser and needs no signup.",
    useCases: [
      { icon: "🍅", title: "Focus Sprints", desc: "25 minutes of single-tasking, no notifications, no multitasking." },
      { icon: "☕", title: "Short Breaks", desc: "After each Pomodoro, take five minutes off with the 5 minute timer." },
      { icon: "📈", title: "Beat Procrastination", desc: "A 25-minute commitment is small enough to just start." },
    ],
    faq: [
      { q: "How long is a Pomodoro?", a: "One Pomodoro is 25 minutes of focused work, followed by a 5-minute break. After four Pomodoros you take a longer break of 15 to 30 minutes." },
      { q: "Who invented the Pomodoro Technique?", a: "Francesco Cirillo developed it in the late 1980s as a university student, naming it after the tomato-shaped (pomodoro in Italian) kitchen timer he used." },
      { q: "What do I do when the Pomodoro timer ends?", a: "Take a five-minute break — stand up, stretch, or rest your eyes — then start another 25-minute Pomodoro. The short breaks are what keep the method sustainable." },
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
    answer:
      "A study timer runs a fixed, timeboxed study session and sounds an alarm when it ends, so you can focus without watching the clock. This one is pre-set to 30 minutes — a proven block length — but you can adjust it. Timeboxed studying with regular breaks beats marathon cramming because spaced, focused sessions improve retention and reduce burnout. It times accurately in your browser, keeps running in background tabs, and needs no account.",
    useCases: [
      { icon: "📚", title: "Timeboxed Study", desc: "A fixed block keeps revision focused and prevents burnout." },
      { icon: "🔁", title: "Study/Break Cycles", desc: "Pair 30 minutes of study with a short break, then repeat." },
      { icon: "🧪", title: "Practice Exams", desc: "Simulate timed conditions for questions and past papers." },
    ],
    faq: [
      { q: "How long should a study session be?", a: "Focused blocks of 25 to 50 minutes followed by a short break work well for most people. This study timer is pre-set to 30 minutes, and you can adjust it to fit your routine." },
      { q: "Why is timeboxing better than studying for hours?", a: "Fixed study blocks with breaks help maintain concentration, reduce fatigue, and improve long-term retention compared with unbroken marathon sessions." },
      { q: "Can I use the study timer for exam practice?", a: "Yes. Set it to your exam's time limit to simulate real conditions when working through past papers and practice questions." },
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
    answer:
      "An egg timer counts down your chosen boiling time and rings an alarm so your eggs come out exactly how you like them. This one is pre-set to 10 minutes for firm hard-boiled eggs; use the arrows to set 6 minutes for soft, runny yolks or 8 minutes for a jammy, medium centre. Start timing once the water reaches a rolling boil. It runs accurately in your browser with no signup.",
    useCases: [
      { icon: "🥚", title: "Soft (6 min)", desc: "Runny yolks and just-set whites — great for dipping." },
      { icon: "🍳", title: "Medium (8 min)", desc: "Jammy, custardy yolks that hold their shape." },
      { icon: "🥗", title: "Hard (10–12 min)", desc: "Fully firm yolks for salads and snacking." },
    ],
    faq: [
      { q: "How long do you boil eggs?", a: "From a rolling boil: about 6 minutes for soft (runny yolk), 8 minutes for medium (jammy), and 10 to 12 minutes for hard-boiled (firm yolk). This timer is pre-set to 10 minutes and adjustable." },
      { q: "When do I start the egg timer?", a: "Start it once the water reaches a full rolling boil and you lower the eggs in — not when you first put the pan on the heat." },
      { q: "How do I stop eggs from overcooking?", a: "When the alarm sounds, move the eggs into cold or iced water straight away. This stops the cooking and makes them easier to peel." },
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
    answer:
      "A meditation timer counts down your session and sounds a gentle alert at the end, so you can close your eyes and practise without checking the clock. This one is pre-set to 10 minutes — a sustainable daily length for beginners — and can be adjusted for longer sits. It suits breathwork, body scans, and mindfulness. It times accurately in your browser, keeps running in background tabs, and needs no account or app.",
    useCases: [
      { icon: "🧘", title: "Daily Sit", desc: "A sustainable ten-minute daily meditation habit." },
      { icon: "🌬️", title: "Breathwork", desc: "Time box-breathing or paced breathing exercises." },
      { icon: "🛌", title: "Body Scan", desc: "A short guided-style body scan to unwind." },
    ],
    faq: [
      { q: "How long should I meditate as a beginner?", a: "Ten minutes a day is a realistic, sustainable starting point. Consistency matters more than length, so a short daily sit beats occasional long ones." },
      { q: "Does the meditation timer have a bell?", a: "It plays a gentle sound alert when the countdown ends, so you are eased out of your session rather than jolted. You can mute it with the sound toggle if you prefer silence." },
      { q: "Can I set a longer meditation?", a: "Yes. Use the up arrows to increase the minutes before you start — many practitioners work up to 20 minutes or more over time." },
    ],
    related: ["5-minute-timer", "15-minute-timer", "20-minute-timer"],
  },
];

export const presetBySlug = Object.fromEntries(presets.map((p) => [p.slug, p]));

export const presetSlugs = presets.map((p) => p.slug);
