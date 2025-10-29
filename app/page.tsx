'use client';

import { useState } from 'react';

interface VideoPrompt {
  title: string;
  hook: string;
  description: string;
  niche: string;
  format: string;
  tips: string[];
}

const niches = [
  { value: 'gaming', label: '🎮 Gaming', color: 'from-purple-500 to-pink-500' },
  { value: 'shorts', label: '📱 YouTube Shorts', color: 'from-red-500 to-orange-500' },
  { value: 'ai-tech', label: '🤖 AI & Technology', color: 'from-blue-500 to-cyan-500' },
  { value: 'reaction', label: '😱 Reaction Videos', color: 'from-yellow-500 to-red-500' },
  { value: 'education', label: '📚 Educational', color: 'from-green-500 to-teal-500' },
  { value: 'finance', label: '💰 Personal Finance', color: 'from-emerald-500 to-green-500' },
  { value: 'animals', label: '🐾 Animals', color: 'from-amber-500 to-yellow-500' },
  { value: 'true-crime', label: '🔍 True Crime', color: 'from-gray-700 to-gray-900' },
  { value: 'challenge', label: '🏆 Challenge Videos', color: 'from-orange-500 to-red-500' },
  { value: 'podcast', label: '🎙️ Podcast/Interview', color: 'from-indigo-500 to-purple-500' },
];

const prompts: Record<string, VideoPrompt[]> = {
  gaming: [
    {
      title: "I Spent 100 Days in Minecraft's Hardest Mod and Here's What Happened",
      hook: "If I don't find diamonds in 10 minutes, I delete my world...",
      description: "Document an extreme gaming challenge with high stakes, showcasing progression, failures, and ultimate triumph. Use dramatic editing and time-lapses.",
      niche: "Gaming",
      format: "Long-form (15-30 min)",
      tips: [
        "Create artificial tension with self-imposed rules",
        "Show genuine reactions to wins and losses",
        "Edit dynamically with quick cuts during action",
        "Include a satisfying payoff at the end"
      ]
    },
    {
      title: "Dress to Impress: I Let My 5-Year-Old Sister Choose My Outfit",
      hook: "She made me wear a hot dog costume to a fashion battle...",
      description: "Combine trending Roblox game Dress to Impress with real-life challenge format. Show game footage alongside reaction cam.",
      niche: "Gaming",
      format: "YouTube Shorts Series + Full Video",
      tips: [
        "Clip best moments for Shorts to drive traffic",
        "Show contrast between expectations vs reality",
        "Include wholesome/funny moments",
        "Appeal to gamers AND non-gamers"
      ]
    },
    {
      title: "Exposing Pay-to-Win Games: I Spent $10,000 So You Don't Have To",
      hook: "This mobile game literally asked me to pay $500 for a sword...",
      description: "Investigative gaming content exposing predatory monetization. Show receipts, gameplay, and data analysis.",
      niche: "Gaming",
      format: "Documentary-style (20-40 min)",
      tips: [
        "Lead with shocking statistics",
        "Interview other players if possible",
        "Provide educational value beyond entertainment",
        "End with actionable advice"
      ]
    }
  ],
  shorts: [
    {
      title: "Mini Vlog: My Entire Morning Routine in 60 Seconds",
      hook: "How do I get ready this fast? Let me show you...",
      description: "Hyper-speed morning routine with satisfying transitions and upbeat music. Show authentic daily life in condensed format.",
      niche: "YouTube Shorts",
      format: "Short-form (30-60 sec)",
      tips: [
        "Use trending sounds/music",
        "Keep transitions smooth and fast-paced",
        "Make it relatable and authentic",
        "Post consistently at same time daily"
      ]
    },
    {
      title: "Teaching My Dog Tricks Until One Goes Viral",
      hook: "Day 47: She finally did the backflip...",
      description: "Series showing daily dog training attempts with one trick per Short. Build anticipation across multiple videos.",
      niche: "YouTube Shorts",
      format: "Short-form series (15-60 sec each)",
      tips: [
        "Number the days to create continuity",
        "Show both fails and successes",
        "Use trending audio that matches energy",
        "Encourage comments asking for specific tricks"
      ]
    },
    {
      title: "Social Experiment: Asking Strangers Their Biggest Regret",
      hook: "His answer made me cry...",
      description: "Deep question social experiment in public. Capture genuine emotional responses with permission.",
      niche: "YouTube Shorts",
      format: "Short-form (60 sec)",
      tips: [
        "Always get consent to film",
        "Ask thought-provoking questions",
        "Show diverse range of responses",
        "End with most powerful answer"
      ]
    }
  ],
  'ai-tech': [
    {
      title: "I Let AI Control My Life for 24 Hours (It Got Weird)",
      hook: "The AI told me to quit my job at 3am...",
      description: "Use AI tools to make all decisions for a day. Document the chaos and unexpected outcomes. Blend entertainment with AI education.",
      niche: "AI & Technology",
      format: "Long-form (15-25 min)",
      tips: [
        "Use multiple AI tools (ChatGPT, Claude, etc.)",
        "Show both funny and genuinely useful moments",
        "Explain the AI's reasoning",
        "Include disclaimer about staged vs real decisions"
      ]
    },
    {
      title: "AI Just Changed Everything: GPT-5 Features Nobody Is Talking About",
      hook: "This feature literally replaced my entire workflow...",
      description: "Break down latest AI developments in accessible way. Show real use cases and demonstrations.",
      niche: "AI & Technology",
      format: "Explainer (8-15 min)",
      tips: [
        "Lead with most shocking capability",
        "Demonstrate with screen recordings",
        "Compare to previous versions",
        "Predict future implications"
      ]
    },
    {
      title: "Building a Viral App Using Only AI in 60 Minutes",
      hook: "I've never coded before, but AI just built me an app worth $10k...",
      description: "Speed-run app development using AI coding assistants. Show the entire process from idea to deployment.",
      niche: "AI & Technology",
      format: "Challenge (12-20 min)",
      tips: [
        "Use time-lapse for repetitive coding",
        "Explain what AI is doing in layman's terms",
        "Show failures and debugging",
        "End with working demo"
      ]
    }
  ],
  reaction: [
    {
      title: "Professional Chef Reacts to Viral TikTok Food Hacks (I'm Done)",
      hook: "Did they really just put THAT in a microwave?",
      description: "Expert reaction to trending content in your niche. Provide genuine analysis, humor, and expertise.",
      niche: "Reaction Videos",
      format: "Reaction (10-20 min)",
      tips: [
        "Choose controversial or polarizing viral content",
        "Add genuine expertise and commentary",
        "Show your personality and authentic reactions",
        "Create clippable moments for Shorts"
      ]
    },
    {
      title: "React to My Old Videos (Why Did I Post This?)",
      hook: "I found my first YouTube video and I want to disappear...",
      description: "React to your own cringey old content. Self-aware comedy showing growth and evolution.",
      niche: "Reaction Videos",
      format: "Reaction (8-15 min)",
      tips: [
        "Be genuinely self-deprecating but not mean",
        "Show how you've improved",
        "Include throwback clips throughout",
        "Engage audience by asking them to find more"
      ]
    },
    {
      title: "Lawyers React to True Crime YouTubers Getting It Wrong",
      hook: "As a lawyer, this video physically hurt me to watch...",
      description: "Expert correcting misinformation in viral content. Educational but entertaining debunking.",
      niche: "Reaction Videos",
      format: "Educational Reaction (15-25 min)",
      tips: [
        "Be respectful but firm on facts",
        "Explain WHY something is wrong",
        "Use graphics to illustrate correct info",
        "Offer to educate rather than just criticize"
      ]
    }
  ],
  education: [
    {
      title: "I Learned [Skill] in 30 Days Using Only Free Resources (Full Timeline)",
      hook: "Day 1: I can't even hold the guitar. Day 30: Watch this...",
      description: "Document skill acquisition journey from zero to competent. Show daily progress, setbacks, and methods.",
      niche: "Educational",
      format: "Documentary (20-35 min)",
      tips: [
        "Film yourself from day one",
        "Show the struggles, not just wins",
        "List all resources in description",
        "Prove results with final demonstration"
      ]
    },
    {
      title: "The History They Don't Teach You: [Controversial Historical Event]",
      hook: "Your textbook lied to you. Here's what actually happened...",
      description: "Deep dive into lesser-known historical facts with engaging storytelling and visuals.",
      niche: "Educational",
      format: "Mini-Documentary (12-20 min)",
      tips: [
        "Use animations and reenactment footage",
        "Cite all sources clearly",
        "Make complex topics accessible",
        "Draw connections to modern day"
      ]
    },
    {
      title: "I Animated the Entire Physics of [Complex Concept]",
      hook: "This is why you can't actually fall into a black hole...",
      description: "Complex scientific concept explained through custom animations and metaphors.",
      niche: "Educational",
      format: "Explainer (8-15 min)",
      tips: [
        "Use analogies everyone understands",
        "Build from simple to complex gradually",
        "Include stunning visuals",
        "Address common misconceptions"
      ]
    }
  ],
  finance: [
    {
      title: "I Tried Every Side Hustle for 30 Days: Here's How Much I Actually Made",
      hook: "One of these made me $3,000 in a week. Another cost me money...",
      description: "Test multiple trending side hustles, document real earnings/losses, provide honest assessment.",
      niche: "Personal Finance",
      format: "Challenge (20-30 min)",
      tips: [
        "Show bank statements/receipts as proof",
        "Calculate actual time vs money earned",
        "Be honest about failures",
        "Rank them at the end"
      ]
    },
    {
      title: "The $0 to $100k Plan Nobody Talks About (Realistic Timeline)",
      hook: "Forget dropshipping. This actually works but takes 3 years...",
      description: "Realistic wealth-building strategy with actual numbers, timelines, and actionable steps.",
      niche: "Personal Finance",
      format: "Strategy Guide (15-25 min)",
      tips: [
        "Show your own journey as proof",
        "Break down into quarterly goals",
        "Address common obstacles",
        "Provide free downloadable plan"
      ]
    },
    {
      title: "Reacting to Millionaire Morning Routines (As an Actual Millionaire)",
      hook: "No millionaire wakes up at 4am to do ice baths...",
      description: "Debunk hustle culture myths with real wealthy person perspective. Mix reaction with education.",
      niche: "Personal Finance",
      format: "Reaction + Education (12-18 min)",
      tips: [
        "Verify your credentials upfront",
        "Share what actually built wealth for you",
        "Call out harmful advice",
        "Keep it entertaining not preachy"
      ]
    }
  ],
  animals: [
    {
      title: "Rescue Dog Transformation: Week 1 to Week 52",
      hook: "She wouldn't even look at me. Now watch this...",
      description: "Heartwarming year-long transformation of rescue animal. Show trust building and training journey.",
      niche: "Animals",
      format: "Long-form (15-25 min)",
      tips: [
        "Film consistently from day one",
        "Show emotional moments authentically",
        "Include training tips throughout",
        "Partner with rescue organizations"
      ]
    },
    {
      title: "My Cat Reviews Amazon Products (She's Brutally Honest)",
      hook: "She destroyed the $200 cat bed and chose the cardboard box...",
      description: "Funny cat product testing with anthropomorphized commentary. Show genuine reactions.",
      niche: "Animals",
      format: "Comedy Review (8-12 min)",
      tips: [
        "Test variety of price points",
        "Let the cat's natural behavior drive comedy",
        "Add funny voiceover or captions",
        "Include affiliate links"
      ]
    },
    {
      title: "Wildlife Photographer Reacts to Insane Animal Encounters",
      hook: "That lion should NOT have done that...",
      description: "Expert reacts to viral wildlife videos, explains animal behavior, shares own stories.",
      niche: "Animals",
      format: "Educational Reaction (10-18 min)",
      tips: [
        "Choose dramatic viral clips",
        "Explain what animals are actually thinking",
        "Share your own close calls",
        "Promote wildlife conservation"
      ]
    }
  ],
  'true-crime': [
    {
      title: "The Case Police Didn't Want You To Know About [Year]",
      hook: "The detective who solved this was fired 24 hours later...",
      description: "Deep dive into obscure true crime case with thorough research, timeline, and analysis.",
      niche: "True Crime",
      format: "Documentary (30-50 min)",
      tips: [
        "Research extensively with primary sources",
        "Present facts chronologically",
        "Use maps, timelines, and photos",
        "Be respectful to victims"
      ]
    },
    {
      title: "Former FBI Agent Explains How Criminals Get Caught",
      hook: "The dumbest criminal I ever caught did this one thing...",
      description: "Expert insider perspective on criminal psychology and investigation techniques.",
      niche: "True Crime",
      format: "Educational (15-25 min)",
      tips: [
        "Verify credentials clearly",
        "Use case studies as examples",
        "Explain investigation techniques",
        "Make it engaging not dry"
      ]
    },
    {
      title: "Solved: The Internet Mystery That Haunted Reddit for 10 Years",
      hook: "I found the answer in a 1987 newspaper nobody digitized...",
      description: "Internet mystery/rabbit hole investigation with revelation. Show the research process.",
      niche: "True Crime",
      format: "Investigation (20-35 min)",
      tips: [
        "Build suspense throughout",
        "Show your research methodology",
        "Include community involvement",
        "Have a satisfying resolution"
      ]
    }
  ],
  challenge: [
    {
      title: "I Survived 50 Hours Buried Alive (EXTREME)",
      hook: "Hour 32: I started hallucinating...",
      description: "Extreme endurance challenge with safety measures. Document physical and mental journey.",
      niche: "Challenge Videos",
      format: "Long-form (20-40 min)",
      tips: [
        "ALWAYS prioritize safety with medical supervision",
        "Show preparation and safety measures",
        "Document physical/mental changes",
        "Have a compelling reason for doing it"
      ]
    },
    {
      title: "Last to Leave [Location] Wins $10,000",
      hook: "It's been 3 days and nobody is giving up...",
      description: "Group endurance challenge with high stakes. Show interpersonal dynamics and strategy.",
      niche: "Challenge Videos",
      format: "Long-form (25-45 min)",
      tips: [
        "Cast interesting mix of personalities",
        "Include mini-challenges within main challenge",
        "Show strategy and alliances",
        "Make the prize meaningful"
      ]
    },
    {
      title: "I Recreated Viral TikTok Challenges From 2020-2025",
      hook: "The cinnamon challenge aged terribly...",
      description: "Nostalgic compilation attempting every major viral challenge. Commentary on internet culture evolution.",
      niche: "Challenge Videos",
      format: "Compilation (15-25 min)",
      tips: [
        "Skip dangerous challenges",
        "Add historical context for each",
        "Show how trends evolved",
        "React to your own attempts"
      ]
    }
  ],
  podcast: [
    {
      title: "Interviewing My Childhood Bully 15 Years Later",
      hook: "He didn't remember me at all...",
      description: "Emotionally charged interview with unexpected reunion. Raw conversation about past trauma.",
      niche: "Podcast/Interview",
      format: "Long-form Interview (30-60 min)",
      tips: [
        "Let conversation flow naturally",
        "Don't script emotional moments",
        "Include context for viewers",
        "Show growth and resolution"
      ]
    },
    {
      title: "CEO Reveals What Actually Happens in Silicon Valley [Company]",
      hook: "We burned $10 million in 6 months and nobody cared...",
      description: "Candid insider interview about industry secrets. Focus on controversial or unknown details.",
      niche: "Podcast/Interview",
      format: "Interview (40-90 min)",
      tips: [
        "Research guest thoroughly",
        "Ask questions others won't",
        "Create clippable moments for Shorts",
        "Let guest tell full stories"
      ]
    },
    {
      title: "Hot Takes: I Argue With a [Expert] About [Controversial Topic]",
      hook: "She just said the most offensive thing I've ever heard...",
      description: "Debate-style podcast with respectful disagreement. Choose polarizing but important topics.",
      niche: "Podcast/Interview",
      format: "Debate (30-50 min)",
      tips: [
        "Find guests who genuinely disagree",
        "Keep it respectful despite conflict",
        "Use split-screen reaction shots",
        "Let both sides make full arguments"
      ]
    }
  ]
};

export default function Home() {
  const [selectedNiche, setSelectedNiche] = useState<string>('gaming');
  const [currentPrompt, setCurrentPrompt] = useState<VideoPrompt | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generatePrompt = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const nichePrompts = prompts[selectedNiche];
      const randomPrompt = nichePrompts[Math.floor(Math.random() * nichePrompts.length)];
      setCurrentPrompt(randomPrompt);
      setIsAnimating(false);
    }, 300);
  };

  const copyToClipboard = () => {
    if (!currentPrompt) return;

    const text = `${currentPrompt.title}

Hook: ${currentPrompt.hook}

Description: ${currentPrompt.description}

Format: ${currentPrompt.format}

Tips:
${currentPrompt.tips.map((tip, i) => `${i + 1}. ${tip}`).join('\n')}`;

    navigator.clipboard.writeText(text);

    const btn = document.querySelector('.copy-btn');
    if (btn) {
      btn.textContent = '✓ Copied!';
      setTimeout(() => {
        btn.textContent = '📋 Copy Prompt';
      }, 2000);
    }
  };

  const getNicheColor = () => {
    return niches.find(n => n.value === selectedNiche)?.color || 'from-blue-500 to-purple-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                🎬 Viral Video Generator
              </h1>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Generate eye-catching prompts based on 2025's hottest YouTube trends
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trending Stats Banner */}
        <div className="mb-12 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🔥 2025 YouTube Trends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-black/40 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">7.2B+</div>
              <div className="text-gray-400">Views on GRWM Shorts</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">4B+</div>
              <div className="text-gray-400">Skincare Short Views</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">4B+</div>
              <div className="text-gray-400">Dress to Impress Views</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">#1</div>
              <div className="text-gray-400">Shorts Format Growth</div>
            </div>
          </div>
        </div>

        {/* Niche Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Select Your Niche
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {niches.map((niche) => (
              <button
                key={niche.value}
                onClick={() => setSelectedNiche(niche.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedNiche === niche.value
                    ? `border-transparent bg-gradient-to-r ${niche.color} shadow-lg shadow-${niche.color}/50`
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
              >
                <div className="text-2xl mb-2">{niche.label.split(' ')[0]}</div>
                <div className="text-sm font-medium">
                  {niche.label.split(' ').slice(1).join(' ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={generatePrompt}
            className={`px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r ${getNicheColor()} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl animate-gradient`}
          >
            ⚡ Generate Viral Video Prompt
          </button>
        </div>

        {/* Generated Prompt Display */}
        {currentPrompt && (
          <div
            className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Prompt Header */}
            <div className={`bg-gradient-to-r ${getNicheColor()} p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-black/30 rounded-full text-xs font-semibold mb-3">
                    {currentPrompt.niche} • {currentPrompt.format}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                    {currentPrompt.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Prompt Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Hook */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎣</span>
                  <h4 className="font-bold text-red-400">Opening Hook</h4>
                </div>
                <p className="text-lg italic text-gray-300">"{currentPrompt.hook}"</p>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📝</span>
                  <h4 className="font-bold text-xl">Video Description</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">{currentPrompt.description}</p>
              </div>

              {/* Tips */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-bold text-xl">Pro Tips</h4>
                </div>
                <ul className="space-y-3">
                  {currentPrompt.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-300 flex-1">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-700">
                <button
                  onClick={copyToClipboard}
                  className="copy-btn flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
                >
                  📋 Copy Prompt
                </button>
                <button
                  onClick={generatePrompt}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors duration-200"
                >
                  🔄 Generate Another
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Initial State */}
        {!currentPrompt && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🎥</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-3">
              Ready to Go Viral?
            </h3>
            <p className="text-gray-500">
              Select a niche and click the button to generate your viral video prompt
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p className="mb-2">
            Based on real 2025 YouTube trends and viral video analysis
          </p>
          <p>
            Data sources: YouTube Trends, VidIQ, Epidemic Sound, and social media analytics
          </p>
        </div>
      </main>
    </div>
  );
}
