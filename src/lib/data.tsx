
import { Award, Target, Eye, Gem, Users, Library, Send, Video, Wallet, Gift, UserCheck, School, Footprints, MessageSquare } from 'lucide-react';

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-primary flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 12.5C11 13.8807 10.1046 15 9 15C7.89543 15 7 13.8807 7 12.5C7 11.1193 7.89543 10 9 10C10.1046 10 11 11.1193 11 12.5ZM8.22293 12.5C8.22293 13.0365 8.57084 13.4713 9 13.4713C9.42916 13.4713 9.77707 13.0365 9.77707 12.5C9.77707 11.9635 9.42916 11.5287 9 11.5287C8.57084 11.5287 8.22293 11.9635 8.22293 12.5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15 15C16.1046 15 17 13.8807 17 12.5C17 11.1193 16.1046 10 15 10C13.8954 10 13 11.1193 13 12.5C13 13.8807 13.8954 15 15 15ZM15 13.4713C14.5708 13.4713 14.2229 13.0365 14.2229 12.5C14.2229 11.9635 14.5708 11.5287 15 11.5287C15.4292 11.5287 15.7771 11.9635 15.7771 12.5C15.7771 13.0365 15.4292 13.4713 15 13.4713Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.9864 3.33561C9.94083 3.06219 9.78382 2.81995 9.55284 2.66671C9.32186 2.51347 9.03764 2.46298 8.76801 2.52729C6.61476 3.04085 5.39826 3.471 3.47772 4.64723C3.33168 4.73668 3.21105 4.86214 3.1274 5.01158C1.9368 7.13867 1.14514 8.97344 0.657859 10.9416C0.171558 12.9058 1.51992e-05 14.9565 0 17.5C0 17.7652 0.105353 18.0196 0.292888 18.2071C1.35191 19.2661 2.45067 20.1002 3.71884 20.6638C4.99135 21.2294 6.3833 21.5 8 21.5C8.43043 21.5 8.81257 21.2246 8.94868 20.8162L9.62339 18.7921C10.3731 18.918 11.1769 19 12 19C12.8231 19 13.6269 18.918 14.3766 18.7921L15.0513 20.8162C15.1874 21.2246 15.5696 21.5 16 21.5C17.6167 21.5 19.0086 21.2294 20.2812 20.6638C21.5493 20.1002 22.6481 19.2661 23.7071 18.2071C23.8946 18.0196 24 17.7652 24 17.5C24 14.9565 23.8284 12.9058 23.3421 10.9416C22.8549 8.97344 22.0632 7.13867 20.8726 5.01158C20.789 4.86214 20.6683 4.73668 20.5223 4.64723C18.6017 3.471 17.3852 3.04085 15.232 2.52729C14.9624 2.46298 14.6781 2.51347 14.4472 2.66671C14.2162 2.81995 14.0592 3.06219 14.0136 3.33561L13.6356 5.60381C13.129 5.53843 12.5832 5.49994 12 5.49994C11.4168 5.49994 10.8709 5.53843 10.3644 5.60381L9.9864 3.33561ZM16.7135 19.4783L16.3365 18.3471C17.2221 18.0953 18.1008 17.7971 18.9331 17.4013C19.4309 17.1622 19.6405 16.5647 19.4014 16.0669C19.1622 15.5692 18.5647 15.3597 18.0669 15.5986C17.4725 15.8793 16.8456 16.1 16.2191 16.2953C15.0702 16.6535 13.5516 17 12 17C10.4484 17 8.92975 16.6535 7.78088 16.2953C7.15483 16.1001 6.53092 15.8781 5.93607 15.6C5.44219 15.3668 4.83698 15.5709 4.59864 16.0669C4.36123 16.561 4.57887 17.1681 5.0722 17.4039C5.90316 17.7978 6.77969 18.0958 7.66354 18.3471L7.28647 19.4783C6.22623 19.4118 5.33457 19.1933 4.53112 18.8362C3.65215 18.4455 2.83779 17.8709 2.00169 17.0797C2.02016 14.8272 2.19155 13.069 2.59925 11.4223C3.01458 9.74468 3.68586 8.13987 4.7452 6.2178C6.0043 5.46452 6.90106 5.0901 8.19227 4.73633L8.40706 6.02507C7.53196 6.29408 6.64115 6.64982 5.903 7.1977C5.46929 7.52129 5.37507 8.1667 5.7 8.59994C6.03024 9.04026 6.6539 9.1307 7.09547 8.80332C7.4639 8.53958 7.89071 8.34569 8.30889 8.17842C9.14624 7.84348 10.3952 7.49994 12 7.49994C13.6048 7.49994 14.8538 7.84348 15.6911 8.17842C16.1093 8.34568 16.5361 8.53955 16.9045 8.8033C17.3461 9.1307 17.9698 9.04027 18.3 8.59994C18.6241 8.16782 18.526 7.51604 18.0932 7.19491C17.3475 6.65617 16.4693 6.29447 15.5929 6.02507L15.8077 4.73633C17.0989 5.0901 17.9957 5.46452 19.2548 6.2178C20.3141 8.13987 20.9854 9.74468 21.4008 11.4223C21.8085 13.069 21.9798 14.8272 21.9983 17.0797C21.1622 17.8709 20.3479 18.4455 19.4689 18.8362C18.6654 19.1933 17.7738 19.4118 16.7135 19.4783Z" />
  </svg>
);


const TikTokIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
    </svg>
);

const MailIcon = () => (
    <svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 5L12 14L21 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const WhatsAppIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
        <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
    </svg>
);

const YoutubeIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
        <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4-1.4-116.5-2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.2-47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4-51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
    </svg>
);

const FacebookIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="-5 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" transform="translate(-329 -7239)"></path>
    </svg>
);


export const aboutValues = [
    {
        icon: Award,
        title: "Excellence",
        description: "We are committed to providing the highest quality education and tools to help traders succeed in complex market environments."
    },
    {
        icon: Target,
        title: "Discipline",
        description: "Our methodology is rooted in a disciplined, process-driven approach to trading, removing emotion and focusing on data."
    },
    {
        icon: Eye,
        title: "Clarity",
        description: "We demystify the market's mechanics, offering clear, actionable insights into order flow and auction market theory."
    }
];

export const mentorships = [
  {
    icon: Users,
    title: 'Live Mentorship Program',
    description:
      'For serious traders who want to master the real mechanics of the market in a group setting.',
    price: '21,000 LKR',
    priceDescription: 'Comprehensive group learning',
    features: [
      'Auction Market Theory & Market Structure',
      'Key Levels & Liquidity Zones',
      'Volume Spread Analysis (VSA)',
      'VWAP & Fair Value Concepts',
      'Fixed Range Volume Profile',
      'Market Profile Initial Balance & Value Area',
      'Volume Nodes & Standard Deviations',
      'Real Market Mechanism Explained',
      'Depth of Market - DOM',
      'Delta - Absorption & Exhaustion',
      'Footprint Orderflow Trading',
      'Reading professional statics bars',
      'Deep dive in to sierra charts',
    ],
    highlight: false,
  },
  {
    icon: Gem,
    title: 'Individual Orderflow Mentorship',
    description:
      'One-on-one program for traders who want straight focus and faster results.',
    price: '40,000 LKR',
    priceDescription: 'For dedicated individuals',
    features: [
      '100% personal attention',
      'Customized learning pace',
      'Learn only what matters — no wasted time',
      'Direct feedback and real market practice',
      'Flexible class times that fit your schedule',
      'Build deep understanding of Orderflow',
      'Perfect for traders who want to level up fast',
    ],
    highlight: true,
  },
  {
    icon: Library,
    title: 'Self-Study Orderflow Mentorship',
    description: 'Learn at your own pace with lifetime access to our content.',
    price: '20,000 LKR',
    priceDescription: 'Flexible and self-paced',
    features: [
      'Full access to private Google Drive content',
      'Over 100 short, structured video lessons',
      'Step-by-step explanations',
      'Watch anytime, from any device',
      'Ongoing support for your questions',
      'Perfect for independent learners',
    ],
    highlight: false,
    isGoogleDriveCourse: true,
  },
  {
    icon: School,
    title: 'Forex Beginner Course',
    description:
      'For absolute beginners who want to understand Forex from zero, trade with confidence, and avoid costly beginner mistakes.',
    price: '7,500 LKR',
    priceDescription: 'Your first step into Forex',
    isGoogleDriveCourse: true,
    features: [
      'What is Forex & How the Market Works',
      'Currency Pairs (Major, Minor & Exotic)',
      'Bid, Ask, Spread & Pips Explained',
      'How Forex Brokers Work',
      'Buy & Sell Logic',
      'Candlestick Basics & Price Movement',
      'Support & Resistance (Beginner Level)',
      'Trend, Range & Market Phases',
      'Stop Loss & Take Profit Basics',
      'basic trading view',
      'create brocker account',
      'create MT5 Account',
      'Demo Trading – How to Practice Properly',
      'Simple Trading Plan for Beginners'
    ],
    highlight: false,
  },
  {
    icon: Footprints,
    title: 'Footprint Course',
    description:
      'For serious traders who want to understand aggressive vs passive participants and the true story behind price movement.',
    price: '9,999 LKR',
    priceDescription: 'Unlock market internals',
    isGoogleDriveCourse: true,
    features: [
      'Bid & Ask',
      'Imbalance',
      'Market Participants',
      'Aggressive / Passive Orders',
      'Limit Orders',
      'Market Orders',
      'Finished / Unfinished Auction',
      'Failed / Successful Auction',
      'Delta (Maximum & Minimum)',
      'Delta Divergence',
      'Absorption',
      'Reading Statistical Bars',
      'Sierra Chart Basics',
      'Free Sierra Chart Templates',
    ],
    highlight: false,
  },
  {
    icon: DiscordIcon,
    title: 'Orderflow Discord Community',
    description: 'For traders who want to learn, share, and grow together inside Sri Lanka’s most active orderflow trading community.',
    price: 'Members only',
    priceDescription: 'Join the community',
    features: [
      'Learn orderflow trading from real traders',
      'Daily market talks & trade ideas',
      'Live chart analysis',
      'Ask questions and get clear answers',
      'Improve trading discipline and mindset',
      'Understand how the real market moves',
      'Share ideas and charts with other traders',
      'Stay motivated with a like-minded community',
      'Access learning materials & examples',
      'Beginner-friendly and advanced-friendly',
      'Learn from others’ mistakes',
      'Support during important market sessions',
      'Sri Lanka’s most active orderflow community'
    ],
    highlight: false,
  },
];

export const contactDetails = [
    { icon: MailIcon, text: "sldarktrader@gmail.com", href: "mailto:sldarktrader@gmail.com" },
    { icon: WhatsAppIcon, text: "+94760311037", href: "https://wa.me/94760311037" },
];

export const socialLinks = [
    { icon: YoutubeIcon, href: 'https://www.youtube.com/@Dark_Trader_', handle: '@Dark_Trader_' },
    { icon: FacebookIcon, href: 'https://www.facebook.com/sldarktrader/', handle: 'sldarktrader' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@darktrader__sl', handle: '@darktrader__sl' },
];

const freeTemplateMapping: { [key: string]: string } = {
  "Red Delta DOM Template": "/downloads/Sierra_Red(Delta)DOM.Cht",
  "Dark Trader Footprint Template": "/downloads/Sierra_FreeDarkTraderFootprint.Cht",
  "Footprint DP Template": "/downloads/ATAS_FootprintDP.cts",
  "Footprint DA Template": "/downloads/ATAS_FootprintDA.cts",
  "Footprint + V. Template": "/downloads/ATAS_FootprintV.cts",
  "AppcapFX-Trade-Manager Template": "/downloads/MT5_AppcapFXTradeManager.ex5",
  "Better Volume 1.5 Template": "/downloads/MT5_BetterVolume15.ex5",
  "FundedNext SessionBar Template": "/downloads/MT5_FundedNextSessionBar.ex5",
  "FundedNext Trade Manager Template": "/downloads/MT5_FundedNextTradeManager.ex5",
  "Volume profile Template": "/downloads/MT5_VolumeProfile.ex5",
  "MaxMin DELTA Template": "/downloads/MT5_MaxMinDELTA.ex5",
  "Strategy Checklist Template": "/downloads/MT5_StrategyChecklist.ex5",
  "VWAP Template": "/downloads/MT5_VWAP.ex5",
  "Average volume Pro Template": "/downloads/MT5_AverageVolumePro.ex5",
  "Vwap DWM Template": "/downloads/MT5_VwapDWM.ex5"
};

export const sierraChartTemplates = [
  { fileName: "101-chart-cdv-999.jpg", description: "Chart - CDV Template, Price LKR 999" },
  { fileName: "102-red-delta-dom-free.jpg", description: "Red Delta DOM Template, Price LKR free" },
  { fileName: "103-xauusd-main-999.jpg", description: "XAUUSD Main Template, Price LKR 999" },
  { fileName: "104-main-delta-bars-1499.jpg", description: "Main-Delta Bars Template, Price LKR 1,499" },
  { fileName: "105-real-cdv-1499.jpg", description: "Real cdv Template, Price LKR 1,499" },
  { fileName: "106-delta-by-vol-1499.jpg", description: "Delta by Vol Template, Price LKR 1,499" },
  { fileName: "107-sin-delta-vol-1500.jpg", description: "Sin Delta - Vol Template, Price LKR 1,500" },
  { fileName: "108-tpo-999.jpg", description: "TPO Template, Price LKR 999" },
  { fileName: "109-heatmap-999.jpg", description: "HeatMap Template, Price LKR 999" },
  { fileName: "110-main-02-dom-1499.jpg", description: "Main 02 - DOM Template, Price LKR 1,499" },
  { fileName: "111-xauusd-fp-999.jpg", description: "XAUUSD FP Template, Price LKR 999" },
  { fileName: "112-xauusd-fp-advance-1499.jpg", description: "XAUUSD FP Advance Template, Price LKR 1,499" },
  { fileName: "113-tpo-2-advance-999.jpg", description: "TPO 2 Advance Template, Price LKR 999" },
  { fileName: "114-mod-dom-999.jpg", description: "Mod DOM Template, Price LKR 999" },
  { fileName: "115-btc-dom-bubble-999.jpg", description: "BTC DOM-Bubble Template, Price LKR 999" },
  { fileName: "116-carmine-dom-999.jpg", description: "Carmine DOM Template, Price LKR 999" },
  { fileName: "117-footprint-2-in-1-1499.jpg", description: "Footprint 2 in 1 Template, Price LKR 1,499" },
  { fileName: "118-hacker-footprint-1499.jpg", description: "Hacker Footprint Template, Price LKR 1,499" },
  { fileName: "119-powerfull-tpo-02-1999.jpg", description: "Powerful TPO 02 Template, Price LKR 1,999" },
  { fileName: "120-powerfull-tpo-01-2499.jpg", description: "Powerful TPO 01 Template, Price LKR 2,499" },
  { fileName: "121-low-vol-node-1499.jpg", description: "Low Vol Node Template, Price LKR 1,499" },
  { fileName: "122-blue-red-footprint-1499.jpg", description: "Blue Red Footprint Template, Price LKR 1,499" },
  { fileName: "123-dark-trader-footprint-free.jpg", description: "Dark Trader Footprint Template, Price LKR free" },
  { fileName: "hacker-delta-bars-1499.jpg", description: "Hacker Delta Bars Template, Price LKR 1,499" },
  { fileName: "hacker-delta-heatmap-1499.jpg", description: "Hacker Delta Heatmap Template, Price LKR 1,499" },
  { fileName: "mpvp-arbitrage-strategy-1999.jpg", description: "MP+VP = Arbitrage Strategy Template, Price LKR 1,999" },
  { fileName: "tpo-frvp-1999.jpg", description: "TPO+FRVP Template, Price LKR 1,999" },
  { fileName: "zoom-to-footprint-999.jpg", description: "Zoom to Footprint Template, Price LKR 999" }
].map(template => {
  const parts = template.description.split(', Price ');
  const name = parts[0];
  const price = parts[1];
  const isFree = price.toLowerCase().includes('free');
  const downloadUrl = isFree ? freeTemplateMapping[name] : undefined;
  return {
    ...template,
    name,
    price: isFree ? 'Download for free' : price.replace(/(\d+)/, (_, num) => parseInt(num).toLocaleString('en-US')),
    isFree,
    imageUrl: `./images/sierra-charts/${template.fileName}`,
    imageHint: 'chart template',
    downloadUrl,
  };
}).sort((a, b) => {
  const numA = parseInt(a.fileName.substring(0, 3), 10);
  const numB = parseInt(b.fileName.substring(0, 3), 10);
  if (isNaN(numA) && isNaN(numB)) return a.fileName.localeCompare(b.fileName);
  if (isNaN(numA)) return 1;
  if (isNaN(numB)) return -1;
  return numA - numB;
});

export const mt5Templates = [
    { fileName: "101-appcapfx-trade-manager-free_800x406.jpg", description: "AppcapFX-Trade-Manager Template, Price LKR free" },
    { fileName: "102-better-volume-1-5-free_800x406.jpg", description: "Better Volume 1.5 Template, Price LKR free" },
    { fileName: "103-gold-heatmap-red-4999_800x406.jpg", description: "Gold HeatMap - red Template, Price LKR 4,999" },
    { fileName: "104-gold-heatmap-blue-4999_800x406.jpg", description: "Gold HeatMap - Blue Template, Price LKR 4,999" },
    { fileName: "105-cdv-heik-v2-999_800x406.jpg", description: "CDV - Heik - v2 Template, Price LKR 999" },
    { fileName: "106-fundednext-sessionbar-free_800x406.jpg", description: "FundedNext SessionBar Template, Price LKR free" },
    { fileName: "107-fundednext-trade-manager-free_800x406.jpg", description: "FundedNext Trade Manager Template, Price LKR free" },
    { fileName: "108-volume-profile-free_800x406.jpg", description: "Volume profile Template, Price LKR Free" },
    { fileName: "109-maxmin-delta-free_800x406.jpg", description: "MaxMin DELTA Template, Price LKR Free" },
    { fileName: "110-strategy-checklist-free_800x406.jpg", description: "Strategy Checklist Template, Price LKR Free" },
    { fileName: "111-vwap-free_800x406.jpg", description: "VWAP Template, Price LKR Free" },
    { fileName: "112-average-volume-pro-free_800x406.jpg", description: "Average volume Pro Template, Price LKR free" },
    { fileName: "113-volume-profile-pro-999_800x406.jpg", description: "Volume profile Pro Template, Price LKR 999" },
    { fileName: "114-vwap-dwm-free_800x410.jpg", description: "Vwap DWM Template, Price LKR Free" },
    { fileName: "115-darktrader-vwap-999_800x401.jpg", description: "Darktrader Vwap Template, Price LKR 999" },
].map(template => {
    const parts = template.description.split(', Price ');
    const name = parts[0];
    const price = parts[1];
    const isFree = price.toLowerCase().includes('free');
    const downloadUrl = isFree ? freeTemplateMapping[name] : undefined;
    return {
        ...template,
        name,
        price: isFree ? 'Download for free' : price.replace(/(\d+)/, (_, num) => parseInt(num).toLocaleString('en-US')),
        isFree,
        imageUrl: `./images/mt5-templates/${template.fileName}`,
        imageHint: 'mt5 template',
        downloadUrl
    };
}).sort((a, b) => {
    const numA = parseInt(a.fileName.substring(0, 3), 10);
    const numB = parseInt(b.fileName.substring(0, 3), 10);
    return numA - numB;
});

export const atasTemplates = [
  { fileName: "101-footprint-dp-free_800x428.jpg", description: "Footprint DP Template, Price LKR free" },
  { fileName: "102-footprint-da-free_800x428.jpg", description: "Footprint DA Template, Price LKR free" },
  { fileName: "103-footprint-v-free_800x428.jpg", description: "Footprint + V. Template, Price LKR free" }
].map(template => {
    const parts = template.description.split(', Price ');
    const name = parts[0];
    const price = parts[1];
    const isFree = price.toLowerCase().includes('free');
    const downloadUrl = isFree ? freeTemplateMapping[name] : undefined;
    return {
        ...template,
        name,
        price: isFree ? 'Download for free' : price,
        isFree,
        imageUrl: `./images/atas-templates/${template.fileName}`,
        imageHint: 'atas template',
        downloadUrl
    };
}).sort((a, b) => {
    const numA = parseInt(a.fileName.substring(0, 3), 10);
    const numB = parseInt(b.fileName.substring(0, 3), 10);
    return numA - numB;
});


export const commonBenefits = [
  {
    icon: Send,
    title: "Classes on Telegram",
    description: "All live and individual mentorship sessions are conducted via Telegram for smooth communication and real-time learning."
  },
  {
    icon: Video,
    title: "Class Recordings",
    description: "Every session is recorded — watch anytime and never miss a lesson."
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description: "No need to pay all at once! Easy instalment plans are available to make it simple and stress-free."
  },
  {
    icon: UserCheck,
    title: "Personal Guidance",
    description: "I’ll personally guide and support you throughout the mentorship, ensuring all your trading questions are clearly answered."
  },
  {
    icon: Gift,
    title: "After Completing the Orderflow Mentorship",
    description: "Get exclusive access to the best Sri Lankan Orderflow Discord community and receive 14GB of premium English mentorship content from top professional traders on Google Drive.",
    subPoints: [
      "Get exclusive access to the best Sri Lankan Orderflow Discord community — connect, discuss, and grow with active traders.",
      "Receive free 14GB of premium English mentorship content from top professional traders on Google Drive — your next level of learning, absolutely free."
    ]
  }
];

    




    


