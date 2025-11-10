import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function generateMetadata() {
  return {
    title: "Premier League Fixtures November 22-24, 2025: Complete Match Preview & Predictions | Stopwatch Blog",
    description: "Your complete guide to Premier League fixtures from November 22-24, 2025. Expert analysis, predictions, team news for all 10 matches including Arsenal vs Tottenham derby.",
    keywords: [
      "Premier League fixtures November 22 2025",
      "Premier League matchday",
      "EPL fixtures",
      "Premier League predictions",
      "football fixtures today",
      "Premier League schedule",
      "Arsenal vs Tottenham",
      "Manchester United fixtures",
      "Liverpool fixtures",
      "Newcastle vs Manchester City",
      "North London Derby",
      "Premier League live stream",
      "football predictions",
      "EPL match preview",
      "Premier League weekend"
    ],
    alternates: {
      canonical: "https://www.stopwatch.lol/blog/premier-league"
    },
    openGraph: {
      title: "Premier League Fixtures November 22-24, 2025: Complete Match Preview",
      description: "Expert analysis and predictions for all Premier League fixtures from November 22-24, 2025. North London Derby headlines the weekend.",
      type: "article",
      url: "https://www.stopwatch.lol/blog/premier-league",
      images: [
        { 
          url: "https://stopwatch.lol/images/premier-league.webp",
          width: 1200,
          height: 630,
          alt: "Premier League Fixtures November 22-24, 2025"
        }
      ],
      publishedTime: "2025-11-10T00:00:00Z",
      modifiedTime: "2025-11-10T00:00:00Z",
      authors: ["Football Insights Team"]
    },
    twitter: {
      card: "summary_large_image",
      title: "Premier League Fixtures November 22-24, 2025: Complete Preview",
      description: "Expert analysis and predictions for all Premier League matches this weekend including Arsenal vs Tottenham",
      images: ["https://stopwatch.lol/images/premier-league.webp"]
    }
  };
}

export default function PremierLeagueFixturesBlog() {
  const saturdayFixtures = [
    {
      time: "12:30 PM GMT",
      home: "AFC Bournemouth",
      away: "West Ham United",
      stadium: "Vitality Stadium",
      prediction: "2-1",
      keyPlayers: ["Dominic Solanke", "Jarrod Bowen"],
      formHome: "W-D-L-W-W",
      formAway: "L-W-D-L-W"
    },
    {
      time: "3:00 PM GMT",
      home: "Brighton & Hove Albion",
      away: "Brentford",
      stadium: "Amex Stadium",
      prediction: "2-2",
      keyPlayers: ["Kaoru Mitoma", "Bryan Mbeumo"],
      formHome: "W-W-D-W-D",
      formAway: "W-D-L-W-D"
    },
    {
      time: "3:00 PM GMT",
      home: "Burnley",
      away: "Chelsea",
      stadium: "Turf Moor",
      prediction: "0-3",
      keyPlayers: ["Josh Brownhill", "Cole Palmer"],
      formHome: "L-L-D-L-L",
      formAway: "W-W-D-W-L"
    },
    {
      time: "3:00 PM GMT",
      home: "Fulham",
      away: "Sunderland",
      stadium: "Craven Cottage",
      prediction: "2-1",
      keyPlayers: ["Raúl Jiménez", "Ross Stewart"],
      formHome: "W-D-W-L-W",
      formAway: "W-W-L-D-W"
    },
    {
      time: "3:00 PM GMT",
      home: "Liverpool",
      away: "Nottingham Forest",
      stadium: "Anfield",
      prediction: "3-1",
      keyPlayers: ["Mohamed Salah", "Morgan Gibbs-White"],
      formHome: "W-W-W-W-D",
      formAway: "W-L-D-W-L"
    },
    {
      time: "5:30 PM GMT",
      home: "Newcastle United",
      away: "Manchester City",
      stadium: "St James&apos; Park",
      prediction: "1-2",
      keyPlayers: ["Alexander Isak", "Erling Haaland"],
      formHome: "W-D-W-L-W",
      formAway: "W-W-L-W-W"
    },
    {
      time: "3:00 PM GMT",
      home: "Wolverhampton Wanderers",
      away: "Crystal Palace",
      stadium: "Molineux Stadium",
      prediction: "1-1",
      keyPlayers: ["Matheus Cunha", "Eberechi Eze"],
      formHome: "L-L-D-L-W",
      formAway: "W-D-L-W-D"
    }
  ];

  const sundayFixtures = [
    {
      time: "2:00 PM GMT",
      home: "Arsenal",
      away: "Tottenham Hotspur",
      stadium: "Emirates Stadium",
      prediction: "2-1",
      keyPlayers: ["Bukayo Saka", "Son Heung-min"],
      formHome: "W-W-W-D-W",
      formAway: "W-W-L-D-W"
    },
    {
      time: "4:30 PM GMT",
      home: "Leeds United",
      away: "Aston Villa",
      stadium: "Elland Road",
      prediction: "1-2",
      keyPlayers: ["Patrick Bamford", "Ollie Watkins"],
      formHome: "W-L-D-L-W",
      formAway: "W-W-W-D-W"
    }
  ];

  const mondayFixtures = [
    {
      time: "8:00 PM GMT",
      home: "Manchester United",
      away: "Everton",
      stadium: "Old Trafford",
      prediction: "2-0",
      keyPlayers: ["Bruno Fernandes", "Dominic Calvert-Lewin"],
      formHome: "W-D-L-W-D",
      formAway: "L-D-L-W-D"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <article className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
          
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Premier League Fixtures Nov 22-24</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <time dateTime="2025-11-10">November 10, 2025</time>
              <span>•</span>
              <span>18 min read</span>
              <span>•</span>
              <span className="text-purple-400">⚽ Football</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-100 leading-tight">
              ⚽ Premier League Fixtures November 22-24, 2025: Complete Weekend Preview & Expert Predictions
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Get ready for an epic weekend of <a href="https://www.premierleague.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Premier League</a> football! 
              Our comprehensive guide covers all <strong className="text-purple-400">10 fixtures from Saturday, November 22 to Monday, November 24, 2025</strong>, 
              featuring the North London Derby, title race clashes, and expert analysis for every match. 
              Track match times with our <Link href="/" className="text-blue-400 hover:text-blue-300 underline">free online stopwatch</Link>.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚽🏆</div>
              <h2 className="text-3xl font-bold text-gray-100 mb-2">Premier League Weekend</h2>
              <p className="text-xl text-gray-300">November 22-24, 2025</p>
              <p className="text-sm text-purple-300 mt-2">10 Matches • 3 Days of Football</p>
            </div>
          </div>

          {/* Quick Schedule Overview */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/40 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">📅 Match Schedule Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/60 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400 mb-2">Saturday, Nov 22</p>
                <p className="text-3xl font-bold text-purple-400">7</p>
                <p className="text-xs text-gray-400 mt-1">12:30 PM - 5:30 PM</p>
              </div>
              <div className="bg-gray-900/60 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400 mb-2">Sunday, Nov 23</p>
                <p className="text-3xl font-bold text-red-400">2</p>
                <p className="text-xs text-gray-400 mt-1">2:00 PM & 4:30 PM</p>
              </div>
              <div className="bg-gray-900/60 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400 mb-2">Monday, Nov 24</p>
                <p className="text-3xl font-bold text-blue-400">1</p>
                <p className="text-xs text-gray-400 mt-1">Match @ 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-purple-900/20 border border-purple-700/40 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">📋 What&apos;s on This Page</h2>
            <nav className="space-y-2 text-gray-300">
              <a href="#weekend-overview" className="block hover:text-purple-400 transition-colors">1. Weekend Overview</a>
              <a href="#featured-match" className="block hover:text-purple-400 transition-colors">2. Featured Match: Arsenal vs Tottenham (North London Derby)</a>
              <a href="#saturday-fixtures" className="block hover:text-purple-400 transition-colors">3. Saturday&apos;s Full Schedule (7 Matches)</a>
              <a href="#sunday-fixtures" className="block hover:text-purple-400 transition-colors">4. Sunday&apos;s Big Games</a>
              <a href="#monday-fixture" className="block hover:text-purple-400 transition-colors">5. Monday Night Football</a>
              <a href="#title-race" className="block hover:text-purple-400 transition-colors">6. Title Race Implications</a>
              <a href="#how-to-watch" className="block hover:text-purple-400 transition-colors">7. How to Watch & Stream</a>
              <a href="#predictions" className="block hover:text-purple-400 transition-colors">8. Expert Predictions Summary</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">

            {/* Section 1: Weekend Overview */}
            <section id="weekend-overview">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">📅</span>
                Weekend Overview: Three Days of Premier League Action
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                The <strong className="text-purple-400">Premier League serves up a feast of football</strong> across 
                three days, with 10 crucial fixtures that could reshape the <a href="https://www.premierleague.com/tables" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Premier League table</a>. 
                From Saturday&apos;s action-packed schedule to the blockbuster 
                <strong> North London Derby</strong> on Sunday, this matchday has it all.
              </p>

              <div className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl">🔥</span>
                    <div>
                      <strong className="text-gray-100">North London Derby:</strong> <span className="text-gray-300">Arsenal host Tottenham in one of football&apos;s fiercest rivalries (Sunday 2:00 PM)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">⚡</span>
                    <div>
                      <strong className="text-gray-100">Title Race Clash:</strong> <span className="text-gray-300">Newcastle United welcome Manchester City to St James&apos; Park (Saturday 5:30 PM)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-2xl">🏰</span>
                    <div>
                      <strong className="text-gray-100">Anfield Action:</strong> <span className="text-gray-300">Liverpool face Nottingham Forest looking to maintain momentum (Saturday 3:00 PM)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">💚</span>
                    <div>
                      <strong className="text-gray-100">Old Trafford Finale:</strong> <span className="text-gray-300">Manchester United host Everton on Monday night (8:00 PM)</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed">
                This matchday features crucial encounters for <strong>title contenders</strong>, teams fighting for 
                European qualification, and clubs battling relegation. Learn more about <Link href="/blog/stopwatch-evolution" className="text-blue-400 hover:text-blue-300 underline">precision timing in football</Link>.
              </p>
            </section>

            {/* Section 2: Featured Match - North London Derby */}
            <section id="featured-match" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">🏆</span>
                Featured Match: Arsenal vs Tottenham Hotspur (North London Derby)
              </h2>

              <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-purple-700/40 rounded-2xl p-8 mb-6">
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-sm mb-2">Sunday, November 23 • 2:00 PM GMT • Emirates Stadium</p>
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🔴</div>
                      <p className="text-2xl font-bold text-red-400">Arsenal</p>
                      <p className="text-sm text-gray-400">W-W-W-D-W</p>
                    </div>
                    <div className="text-3xl font-bold text-gray-300">VS</div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">⚪</div>
                      <p className="text-2xl font-bold text-gray-200">Tottenham</p>
                      <p className="text-sm text-gray-400">W-W-L-D-W</p>
                    </div>
                  </div>
                  <div className="bg-gray-900/60 rounded-lg p-3 inline-block">
                    <p className="text-sm text-gray-400">Expert Prediction</p>
                    <p className="text-3xl font-bold text-purple-400">2-1</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-4">The Derby That Stops North London</h3>
              
              <p className="leading-relaxed mb-4">
                The <strong className="text-purple-400">North London Derby</strong> is one of the Premier League&apos;s 
                most intense and historically significant fixtures. This meeting at the <a href="https://www.arsenal.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Emirates Stadium</a> carries 
                massive implications for both clubs&apos; seasons, with <a href="https://www.arsenal.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Arsenal</a> pushing 
                for the title and <a href="https://www.tottenhamhotspur.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Tottenham</a> fighting 
                for Champions League qualification.
              </p>

              <div className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-100 mb-4">Key Matchup Analysis</h4>
                
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                    <h5 className="font-semibold text-red-300 mb-2">Arsenal&apos;s Strengths</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        <span><strong><a href="https://www.premierleague.com/players" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Bukayo Saka</a></strong> in scintillating form with 8 goals and 6 assists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        <span>Home fortress: Only 2 losses at Emirates all season</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        <span>Solid defensive record with William Saliba in imperious form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">▸</span>
                        <span>Martin Ødegaard pulling the strings in midfield</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-700/20 border border-gray-600/40 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-200 mb-2">Tottenham&apos;s Weapons</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">▸</span>
                        <span><strong><a href="https://www.premierleague.com/players" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Son Heung-min</a></strong> remains one of the league&apos;s deadliest forwards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">▸</span>
                        <span>Counter-attacking threat with pace in wide areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">▸</span>
                        <span>James Maddison&apos;s creativity in the final third</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">▸</span>
                        <span>Derby day motivation and big-game experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-200 mb-3">Derby Day Pressure</h4>
              
              <p className="leading-relaxed mb-4">
                The atmosphere at the Emirates will be electric. Arsenal&apos;s title credentials will be tested 
                against a Tottenham side desperate to prove they can compete with their fiercest rivals. Expect 
                an intense, high-tempo encounter with <strong>tactical battles</strong> across the pitch. The 
                midfield duel between <strong>Declan Rice</strong> and <strong>Yves Bissouma</strong> could be pivotal. 
                Discover <Link href="/blog/stopwatch-human-life" className="text-blue-400 hover:text-blue-300 underline">how pressure affects performance</Link>.
              </p>

              <div className="bg-purple-900/20 border border-purple-700/40 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">⚡ Match Prediction</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  <strong className="text-purple-400">Arsenal 2-1 Tottenham</strong> &mdash; The Gunners&apos; home 
                  advantage and superior form prove decisive. Saka opens the scoring before Son levels. A second-half 
                  winner from <strong>Gabriel Jesus</strong> secures three crucial points in a pulsating derby that 
                  lives up to its billing.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="bg-gray-800/60 rounded p-2">
                    <p className="text-gray-400">Arsenal Win</p>
                    <p className="text-lg font-bold text-red-400">50%</p>
                  </div>
                  <div className="bg-gray-800/60 rounded p-2">
                    <p className="text-gray-400">Draw</p>
                    <p className="text-lg font-bold text-gray-300">25%</p>
                  </div>
                  <div className="bg-gray-800/60 rounded p-2">
                    <p className="text-gray-400">Spurs Win</p>
                    <p className="text-lg font-bold text-gray-400">25%</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/40 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">📊 Derby Stats</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div>
                    <p className="text-yellow-400 font-bold">Last 5 Meetings</p>
                    <p>Arsenal: 3 wins, 2 draws</p>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-bold">Goals Galore</p>
                    <p>22 goals in last 5 games</p>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-bold">Home Record</p>
                    <p>Arsenal unbeaten in 8</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Saturday Fixtures */}
            <section id="saturday-fixtures" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">⚽</span>
                Saturday&apos;s Full Schedule: Seven Matches
              </h2>

              <p className="leading-relaxed mb-6">
                <strong className="text-purple-400">Saturday, November 22</strong> delivers seven exciting fixtures 
                spread across the day, from the early 12:30 PM kickoff to the prime-time 5:30 PM title race clash 
                at St James&apos; Park.
              </p>

              <div className="space-y-6">
                {saturdayFixtures.map((fixture, index) => (
                  <div key={index} className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{fixture.time} • {fixture.stadium}</p>
                        <h3 className="text-2xl font-bold text-gray-100">
                          {fixture.home} vs {fixture.away}
                        </h3>
                        {index === 5 && (
                          <p className="text-xs text-blue-400 font-bold mt-1">⚡ TITLE RACE CLASH</p>
                        )}
                        {index === 4 && (
                          <p className="text-xs text-red-400 font-bold mt-1">🔴 ANFIELD</p>
                        )}
                      </div>
                      <div className="bg-purple-900/30 border border-purple-700/40 rounded-lg px-4 py-2">
                        <p className="text-xs text-gray-400">Prediction</p>
                        <p className="text-xl font-bold text-purple-400">{fixture.prediction}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Recent Form</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{fixture.home}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formHome}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-300">{fixture.away}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formAway}</span>
                        </div>
                      </div>

                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Key Players to Watch</p>
                        {fixture.keyPlayers.map((player, idx) => (
                          <p key={idx} className="text-sm text-gray-300">⭐ {player}</p>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 italic">
                      {index === 0 && "Early kickoff as Bournemouth&apos;s attacking prowess meets West Ham&apos;s inconsistent away form."}
                      {index === 1 && "Two possession-based teams promise an entertaining tactical battle at the Amex."}
                      {index === 2 && "Chelsea travel to relegation-threatened Burnley looking to secure three points."}
                      {index === 3 && "Fulham welcome newly-promoted Sunderland in an intriguing London-Northeast clash."}
                      {index === 4 && "Liverpool&apos;s title charge continues as they face a resilient Forest side at Anfield."}
                      {index === 5 && "Saturday&apos;s headline fixture: St James&apos; Park hosts a title race showdown."}
                      {index === 6 && "A crucial relegation six-pointer as both teams desperately need points."}
                    </p>
                  </div>
                ))}
              </div>

              {/* Saturday Highlights */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/40 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">🔥 Saturday&apos;s Must-Watch Games</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/60 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-100 mb-2">⚡ Newcastle vs Manchester City (5:30 PM)</h4>
                    <p className="text-sm text-gray-300">
                      St James&apos; Park will be rocking as Eddie Howe&apos;s side look to derail City&apos;s title defense. 
                      The Magpies&apos; home record makes this a genuine banana skin for Pep Guardiola&apos;s men. Expect 
                      fireworks in the late kickoff!
                    </p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-100 mb-2">🔴 Liverpool vs Nottingham Forest (3:00 PM)</h4>
                    <p className="text-sm text-gray-300">
                      Liverpool can&apos;t afford any slip-ups at Anfield. Forest will make them work, but the Reds&apos; 
                      attacking firepower led by Mohamed Salah should prove too much in front of the Kop.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Sunday Fixtures */}
            <section id="sunday-fixtures" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">☀️</span>
                Sunday&apos;s Big Games
              </h2>

              <p className="leading-relaxed mb-6">
                <strong className="text-purple-400">Sunday, November 23</strong> features two high-quality fixtures, 
                headlined by the North London Derby. The afternoon provides contrasting narratives with derby drama 
                and a Yorkshire-Midlands clash.
              </p>

              <div className="space-y-6">
                {sundayFixtures.map((fixture, index) => (
                  <div key={index} className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-6 hover:border-red-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{fixture.time} • {fixture.stadium}</p>
                        <h3 className="text-2xl font-bold text-gray-100">
                          {fixture.home} vs {fixture.away}
                        </h3>
                        {index === 0 && (
                          <p className="text-xs text-red-400 font-bold mt-1">⚔️ NORTH LONDON DERBY</p>
                        )}
                      </div>
                      <div className="bg-red-900/30 border border-red-700/40 rounded-lg px-4 py-2">
                        <p className="text-xs text-gray-400">Prediction</p>
                        <p className="text-xl font-bold text-red-400">{fixture.prediction}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Recent Form</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{fixture.home}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formHome}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-300">{fixture.away}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formAway}</span>
                        </div>
                      </div>

                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Key Players to Watch</p>
                        {fixture.keyPlayers.map((player, idx) => (
                          <p key={idx} className="text-sm text-gray-300">⭐ {player}</p>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 italic">
                      {index === 0 && "The biggest derby in North London - intense rivalry, massive stakes, and unforgettable drama guaranteed."}
                      {index === 1 && "Leeds back in the top flight face in-form Villa at a raucous Elland Road."}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Monday Night Football */}
            <section id="monday-fixture" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">🌃</span>
                Monday Night Football: Old Trafford Showdown
              </h2>

              <p className="leading-relaxed mb-6">
                The weekend concludes at the <strong className="text-purple-400">Theatre of Dreams</strong> as 
                <a href="https://www.manutd.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline"> Manchester United</a> host 
                <a href="https://www.evertonfc.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline"> Everton</a> under 
                the Monday night lights.
              </p>

              <div className="space-y-6">
                {mondayFixtures.map((fixture, index) => (
                  <div key={index} className="bg-gray-800/60 border border-red-600/40 rounded-xl p-6 hover:border-red-500/70 transition-all">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">{fixture.time} • {fixture.stadium}</p>
                        <h3 className="text-2xl font-bold text-gray-100">
                          {fixture.home} vs {fixture.away}
                        </h3>
                        <p className="text-xs text-red-400 font-bold mt-1">🎥 MONDAY NIGHT FOOTBALL</p>
                      </div>
                      <div className="bg-red-900/30 border border-red-700/40 rounded-lg px-4 py-2">
                        <p className="text-xs text-gray-400">Prediction</p>
                        <p className="text-xl font-bold text-red-400">{fixture.prediction}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Recent Form</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{fixture.home}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formHome}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-300">{fixture.away}:</span>
                          <span className="text-sm font-mono text-gray-300">{fixture.formAway}</span>
                        </div>
                      </div>

                      <div className="bg-gray-900/40 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Key Players to Watch</p>
                        {fixture.keyPlayers.map((player, idx) => (
                          <p key={idx} className="text-sm text-gray-300">⭐ {player}</p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2">Match Analysis</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        United desperately need to bounce back after inconsistent form. Playing at Old Trafford under 
                        the lights should give them an advantage. Everton will be organized and difficult to break down, 
                        but United&apos;s quality in the final third should make the difference. Bruno Fernandes will be 
                        key to unlocking the Toffees&apos; defense, while Everton will look to Dominic Calvert-Lewin to 
                        hold up play and bring others into the game.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Title Race */}
            <section id="title-race" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">🏆</span>
                Title Race & Table Implications
              </h2>

              <p className="leading-relaxed mb-6">
                This weekend&apos;s fixtures carry <strong className="text-purple-400">massive implications</strong> for 
                the title race, European qualification, and relegation battle. Multiple storylines will unfold across 
                the three days.
              </p>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/40 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Current Top 4 Standings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-900/60 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-purple-400">1</span>
                      <div>
                        <p className="font-bold text-gray-100">Liverpool</p>
                        <p className="text-xs text-gray-400">12 matches played</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-100">31 pts</p>
                      <p className="text-xs text-gray-400">GD: +18</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900/60 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-blue-400">2</span>
                      <div>
                        <p className="font-bold text-gray-100">Manchester City</p>
                        <p className="text-xs text-gray-400">12 matches played</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-100">30 pts</p>
                      <p className="text-xs text-gray-400">GD: +22</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900/60 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-red-400">3</span>
                      <div>
                        <p className="font-bold text-gray-100">Arsenal</p>
                        <p className="text-xs text-gray-400">12 matches played</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-100">28 pts</p>
                      <p className="text-xs text-gray-400">GD: +15</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-900/60 rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-green-400">4</span>
                      <div>
                        <p className="font-bold text-gray-100">Aston Villa</p>
                        <p className="text-xs text-gray-400">12 matches played</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-100">26 pts</p>
                      <p className="text-xs text-gray-400">GD: +12</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">Key Weekend Storylines</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">1.</span>
                    <div>
                      <strong className="text-gray-100">Title Race Tightens:</strong> City&apos;s trip to Newcastle 
                      is their toughest remaining fixture this month. A loss could see them fall behind Liverpool.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">2.</span>
                    <div>
                      <strong className="text-gray-100">Arsenal&apos;s Statement:</strong> A win over Spurs would 
                      send a message that the Gunners mean business this season and keep pressure on the top two.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">3.</span>
                    <div>
                      <strong className="text-gray-100">Villa&apos;s Challenge:</strong> Unai Emery&apos;s side can 
                      cement their top-four credentials with a win at Leeds.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">4.</span>
                    <div>
                      <strong className="text-gray-100">Relegation Battle:</strong> Wolves vs Palace and Burnley vs 
                      Chelsea carry huge significance at the bottom of the table.
                    </div>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed">
                The race is incredibly tight at both ends of the table. Learn about <Link href="/blog/productivity-tips" className="text-blue-400 hover:text-blue-300 underline">managing pressure in competitive situations</Link>.
              </p>
            </section>

            {/* Section 7: How to Watch */}
            <section id="how-to-watch" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">📺</span>
                How to Watch & Stream
              </h2>

              <div className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">UK Viewers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">📅 Saturday, November 22</h4>
                    <ul className="space-y-2 text-sm text-gray-300 ml-4">
                      <li>• <strong>12:30 PM - Bournemouth vs West Ham:</strong> <a href="https://www.skysports.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Premier League</a></li>
                      <li>• <strong>3:00 PM Kickoffs:</strong> Not televised (listen on <a href="https://www.bbc.co.uk/sport/football" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">BBC Radio 5 Live</a>)</li>
                      <li>• <strong>5:30 PM - Newcastle vs Man City:</strong> <a href="https://www.skysports.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Main Event</a> & Premier League</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">📅 Sunday, November 23</h4>
                    <ul className="space-y-2 text-sm text-gray-300 ml-4">
                      <li>• <strong>2:00 PM - Arsenal vs Tottenham:</strong> <a href="https://www.skysports.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Main Event</a> & <a href="https://www.skysports.com/premier-league" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Premier League</a></li>
                      <li>• <strong>4:30 PM - Leeds vs Aston Villa:</strong> <a href="https://www.skysports.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Premier League</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">📅 Monday, November 24</h4>
                    <ul className="space-y-2 text-sm text-gray-300 ml-4">
                      <li>• <strong>8:00 PM - Man United vs Everton:</strong> <a href="https://www.skysports.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Sports Main Event</a></li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/40 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-gray-200 mb-3">🌐 Streaming Options</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <a href="https://www.skysports.com/watch" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sky Go</a> (Sky TV subscribers)</li>
                      <li>• <a href="https://www.nowtv.com/watch-sky-sports-online" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">NOW TV</a> Sports Day Pass (£11.99)</li>
                      <li>• <a href="https://www.premierleague.com/news/2914137" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Premier League App</a> (highlights only)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-700/40 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-300 mb-4">International Viewers</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">🇺🇸 USA</h4>
                    <p className="text-gray-300"><a href="https://www.peacocktv.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Peacock</a>, <a href="https://www.usanetwork.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">USA Network</a>, <a href="https://www.nbc.com/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">NBC</a></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">🇨🇦 Canada</h4>
                    <p className="text-gray-300"><a href="https://www.fubo.tv/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">FuboTV</a>, <a href="https://www.sportsnet.ca/" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Sportsnet</a></p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">🌍 Global</h4>
                    <p className="text-gray-300"><a href="https://www.premierleague.com/broadcast-partners" target="_blank" rel="dofollow" className="text-blue-400 hover:text-blue-300 underline">Check local listings</a></p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-700/40 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-300 mb-4">⏱️ Track Match Times Perfectly</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Never miss a kickoff across three days of action! Use our <Link href="/" className="text-blue-400 hover:text-blue-300 underline font-semibold">free online stopwatch</Link> to 
                  track match times, halftime breaks, and injury time. Perfect for following multiple fixtures!
                </p>
                <div className="grid grid-cols-3 gap-3 text-xs text-center">
                  <div className="bg-gray-800/40 rounded p-2">
                    <p className="text-gray-400">Half Length</p>
                    <p className="text-orange-400 font-bold">45 min</p>
                  </div>
                  <div className="bg-gray-800/40 rounded p-2">
                    <p className="text-gray-400">Halftime</p>
                    <p className="text-orange-400 font-bold">15 min</p>
                  </div>
                  <div className="bg-gray-800/40 rounded p-2">
                    <p className="text-gray-400">Added Time</p>
                    <p className="text-orange-400 font-bold">~5 min</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Predictions Summary */}
            <section id="predictions" className="pt-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Expert Predictions Summary
              </h2>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/40 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Weekend Predictions Recap</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Saturday, November 22</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Bournemouth <span className="text-purple-400 font-bold">2-1</span> West Ham</p>
                        <p className="text-xs text-gray-500">12:30 PM</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Brighton <span className="text-purple-400 font-bold">2-2</span> Brentford</p>
                        <p className="text-xs text-gray-500">3:00 PM</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Burnley <span className="text-purple-400 font-bold">0-3</span> Chelsea</p>
                        <p className="text-xs text-gray-500">3:00 PM</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Fulham <span className="text-purple-400 font-bold">2-1</span> Sunderland</p>
                        <p className="text-xs text-gray-500">3:00 PM</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Liverpool <span className="text-purple-400 font-bold">3-1</span> Nottingham Forest</p>
                        <p className="text-xs text-gray-500">3:00 PM</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Wolves <span className="text-purple-400 font-bold">1-1</span> Crystal Palace</p>
                        <p className="text-xs text-gray-500">3:00 PM</p>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-700/40 rounded-lg p-3">
                        <p className="text-gray-300"><strong>Newcastle</strong> <span className="text-blue-400 font-bold">1-2</span> <strong>Man City</strong></p>
                        <p className="text-xs text-blue-400">5:30 PM • TITLE CLASH</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Sunday, November 23</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-3">
                        <p className="text-gray-300"><strong>Arsenal</strong> <span className="text-red-400 font-bold">2-1</span> <strong>Tottenham</strong></p>
                        <p className="text-xs text-red-400">2:00 PM • NORTH LONDON DERBY</p>
                      </div>
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Leeds <span className="text-purple-400 font-bold">1-2</span> Aston Villa</p>
                        <p className="text-xs text-gray-500">4:30 PM</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Monday, November 24</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-900/60 rounded-lg p-3">
                        <p className="text-gray-300">Man United <span className="text-purple-400 font-bold">2-0</span> Everton</p>
                        <p className="text-xs text-gray-500">8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-900/20 border border-yellow-700/40 rounded-lg p-4">
                  <p className="text-sm text-yellow-300 text-center">
                    💡 <strong>Betting Tip:</strong> All predictions are for entertainment purposes. Please gamble responsibly.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Content */}
            <section className="pt-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">📖 Related Football Content</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/blog/fifa-international-break" className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <h3 className="font-semibold text-gray-100 mb-2">FIFA International Break</h3>
                  <p className="text-sm text-gray-400">Complete guide to international fixtures</p>
                </Link>
                <Link href="/blog/stopwatch-evolution" className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <h3 className="font-semibold text-gray-100 mb-2">The Evolution of the Stopwatch</h3>
                  <p className="text-sm text-gray-400">How timing devices have changed sports</p>
                </Link>
                <Link href="/blog/productivity-tips" className="bg-gray-800/60 border border-gray-600/40 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <h3 className="font-semibold text-gray-100 mb-2">Productivity Tips for Gamers</h3>
                  <p className="text-sm text-gray-400">Maximize your gaming performance</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
