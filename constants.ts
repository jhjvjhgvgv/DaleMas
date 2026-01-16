import { Program, Testimonial, FAQItem, Step } from './types';

export const BRAND = {
  name: "Dale Más Fitness 808",
  tagline: "Train Harder. Live Stronger. Island Mindset.",
  colors: {
    green: "#1DB954",
    orange: "#FF6B35"
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'online',
    title: "Online Workout Programs",
    price: "$47 - $97",
    description: "Structured flexibility for home or gym training.",
    features: [
      "Beginner to Advanced levels",
      "Full video demonstrations",
      "Weekly training structure",
      "Mobile app access"
    ],
    cta: "Get Started"
  },
  {
    id: 'challenge',
    title: "30-Day Challenge",
    price: "$97 - $197",
    description: "Fat loss, discipline, and maximum accountability.",
    features: [
      "Daily accountability group",
      "Weekly progress check-ins",
      "Nutrition guidelines",
      "Community support"
    ],
    cta: "Join the Challenge",
    popular: true
  },
  {
    id: 'coaching',
    title: "1-on-1 Coaching",
    price: "$297 - $497/mo",
    description: "The ultimate personalized fitness experience.",
    features: [
      "Custom workout plans",
      "Personalized nutrition guidance",
      "Direct 1-on-1 access",
      "Weekly strategy calls"
    ],
    cta: "Apply Now"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Keanu R.",
    quote: "I was tired of starting over every January. Dale Más gave me the structure I was missing.",
    result: "Lost 15lbs in 30 days",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    id: '2',
    name: "Sarah L.",
    quote: "The accountability group is a game changer. You actually feel part of a tribe.",
    result: "Dropped 2 dress sizes",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    id: '3',
    name: "David M.",
    quote: "Simple workouts, no fluff. Exactly what I needed as a busy dad.",
    result: "Gained lean muscle",
    image: "https://picsum.photos/id/1012/100/100"
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Commit",
    description: "Choose your program and secure your spot via Stripe."
  },
  {
    number: "02",
    title: "Onboard",
    description: "Receive your welcome email and access to the app instantly."
  },
  {
    number: "03",
    title: "Execute",
    description: "Follow the daily plan. Track your workouts. No excuses."
  },
  {
    number: "04",
    title: "Transform",
    description: "See real results in 30 days with consistent effort."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need a gym membership?",
    answer: "No. We have programs designed specifically for home workouts with minimal equipment, as well as full gym options."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely. The programs are scalable. Whether it's your first day or your 1000th, you will be challenged appropriately."
  },
  {
    question: "How does the accountability work?",
    answer: "You'll be added to a private WhatsApp/Telegram group where we share wins, check in daily, and keep the energy high."
  },
  {
    question: "What if I miss a workout?",
    answer: "We focus on consistency over perfection. If you miss one, you get back on track the very next day. We don't quit."
  }
];

export const BUSINESS_RESOURCES = {
  emailCopy: {
    welcome: `Subject: Welcome to Dale Más Fitness 808 💪\n\nWelcome to the tribe.\n\nYou just took the first step, and that’s often the hardest one. But let’s be real—buying the program is easy. Doing the work is what counts.\n\nHere is your access link to the app: [LINK]\nHere is the link to join our Accountability Group: [LINK]\n\nYour Day 1 starts now. Go to the grocery store, prep your mind, and get ready to sweat.\n\nNo excuses.\n- Dale Más Team`,
    upsell: `Subject: Ready for the next level?\n\nYou've crushed the last 21 days. Most people would have quit by now, but you're still here.\n\nIf you want to take these results and accelerate them, I have 2 spots open for 1-on-1 coaching starting next month.\n\nThis isn't just a plan; it's a partnership. We dial in your nutrition, your sleep, and your mindset.\n\nReply "I'M IN" if you want the details.\n\nStay strong.`
  },
  automationSteps: [
    "1. Connect Stripe to Zapier as the trigger (New Payment).",
    "2. Action: Add subscriber to MailerLite/ConvertKit group 'New Clients'.",
    "3. Action: Send Email (Welcome Sequence) from MailerLite.",
    "4. Action: Create Folder in Google Drive (if delivering PDFs) and email link.",
    "5. Action: Send Slack/Telegram notification to Admin (You) that a new sale occurred."
  ]
};
