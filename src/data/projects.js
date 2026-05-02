export const projects = [
  {
    id: 1,
    title: 'AI Automation Simulator',
    problem: 'Businesses struggle to quantify ROI for AI adoption in manual workflows.',
    solution: 'Developed a Python-based diagnostic tool using Streamlit to quantify ROI for AI adoption, optimizing logic flows to provide 100% accurate tech stack recommendations.',
    value: 'Provides immediate, actionable technical roadmaps for business process optimization.',
    demoLink: 'https://lazzara-automation-simulator.streamlit.app/',
    tags: ['Python', 'Streamlit', 'Logic Modeling'],
    technicalDeepDive: 'Built with Python and Streamlit for rapid prototyping. Features input processing nodes that parse user workflow descriptions, an AI recommendation engine using pattern matching algorithms, logic flow optimizers that map business processes to automation strategies, and output formatters that generate implementation guides.',
    promptStrategy: 'Used structured prompts for AI analysis: "Analyze this workflow bottleneck and recommend Make.com scenarios with success metrics." Enabled precise tool recommendations based on user input patterns.'
  },
  {
    id: 2,
    title: 'Weather-Based Sales & Staffing Automation',
    problem: 'Retail businesses struggle to predict demand fluctuations based on weather patterns.',
    solution: 'Designed a data-driven system integrating external weather data with internal sales metrics using Google Sheets and Gemini AI to predict demand, reducing operational risk through robust error handling and automated reporting.',
    value: 'Reduces operational risk and improves demand prediction accuracy.',
    demoLink: 'https://gamma.app/docs/Automation-of-Weather-Based-Sales-and-Staffing-Decisions-ma97ay8pji1fd0z?mode=doc',
    tags: ['Google Sheets', 'Gemini AI', 'Weather APIs'],
    technicalDeepDive: 'Integrates OpenWeatherMap API with Google Sheets formulas. Uses Gemini AI for predictive analytics, combining historical sales data with real-time weather forecasts. Implements error handling for API failures and automated Slack notifications for demand alerts.',
    promptStrategy: 'Prompt engineering focused on data correlation: "Given weather pattern X and historical sales Y, predict demand Z with confidence intervals." Optimized for retail scenarios with seasonal adjustments.'
  },
  {
    id: 3,
    title: 'Morning Light Studio - Wellness E-commerce',
    problem: 'Wellness businesses needed high-converting digital storefronts with complex booking workflows.',
    solution: 'Engineered a responsive React application using Lovable and Claude 3.5 Sonnet, focusing on a high-conversion "Patient Journey" funnel with Tailwind CSS and Shadcn UI for a calming, high-trust aesthetic.',
    value: 'Created a seamless booking experience for wellness services with integrated payment processing.',
    demoLink: 'https://morning-light-studio.lovable.app/',
    tags: ['React', 'Lovable', 'Tailwind CSS', 'Supabase'],
    technicalDeepDive: 'React application with Supabase backend for real-time data. Implements patient journey funnels with conditional rendering, secure payment processing via Stripe integration, and appointment scheduling with availability checking. Uses behavioral psychology principles for UI design.',
    promptStrategy: 'UI/UX prompts for wellness design: "Design a calming booking interface that reduces anxiety and increases conversion using behavioral psychology principles." Generated component structures and styling recommendations.'
  },
  {
    id: 4,
    title: 'Paws & Shine - Pet Grooming Platform',
    problem: 'Pet grooming businesses needed modern digital storefronts with service bookings.',
    solution: 'Developed a service-centric application with Supabase backend for data storage, utilizing Midjourney and Adobe Firefly for brand assets and optimized for Local SEO.',
    value: 'Simplified booking process and improved customer engagement for pet care services.',
    demoLink: 'https://pawsandshine.lovable.app/',
    tags: ['React', 'Supabase', 'Midjourney', 'Adobe Firefly'],
    technicalDeepDive: 'Service booking platform with React frontend and Supabase database. Features customer profile management with pet details, automated email/SMS confirmations, and local SEO optimization. Integrates AI-generated brand assets and implements responsive design for mobile booking.',
    promptStrategy: 'Asset generation prompts: "Create pet grooming brand imagery with warm, trustworthy colors and playful elements." SEO prompts: "Optimize this page for local pet grooming services in [city] with schema markup."'
  }
];
