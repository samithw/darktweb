
import { Award, Target, Eye, Gem, Users, Library, Mail, Phone, MapPin, Send, Video, Wallet, Gift, Youtube, Facebook, UserCheck } from 'lucide-react';

const TikTokIcon = () => (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
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
    price: '18,000 LKR',
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
    price: '15,000 LKR',
    features: [
      'Full access to private Google Drive content',
      'Over 100 short, structured video lessons',
      'Step-by-step explanations',
      'Watch anytime, from any device',
      'Ongoing support for your questions',
      'Perfect for independent learners',
    ],
    highlight: false,
  },
];

export const contactDetails = [
    { icon: Mail, text: "support@darktrader.com", href: "mailto:support@darktrader.com" },
    { icon: Phone, text: "+94760311037", href: "https://wa.me/94760311037" },
];

export const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@Dark_Trader_', handle: '@Dark_Trader_' },
    { icon: Facebook, href: 'https://www.facebook.com/sldarktrader/', handle: 'sldarktrader' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@darktrader__sl', handle: '@darktrader__sl' },
];

const freeTemplateMapping: { [key: string]: string } = {
  "Red Delta DOM Template": "/downloads/Sierra_Red(Delta)DOM.Cht",
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
  { fileName: "122-blue-red-footprint-1499.jpg", description: "Blue Red Footprint Template, Price LKR 1,499" }
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
    imageUrl: `./images/sierra-charts/${template.fileName}`,
    imageHint: 'chart template',
    downloadUrl,
  };
}).sort((a, b) => {
  const numA = parseInt(a.fileName.substring(0, 3), 10);
  const numB = parseInt(b.fileName.substring(0, 3), 10);
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
        price: isFree ? 'Download for free' : price,
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
