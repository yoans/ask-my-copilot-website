# Ask My Copilot - AI Agent Setup Platform

A comprehensive website that guides visitors through the process of setting up AI agents for automation and useful work. The platform features step-by-step guides, AI chatbot assistance, payment systems for workshops and Docker images, and tools to help agents set up their own service access.

## 🚀 Features

- **Interactive Agent Setup Guide**: Step-by-step process for creating different types of AI agents
- **AI Chatbot Assistant**: 24/7 intelligent help for setup, troubleshooting, and platform questions
- **Premium Workshops**: Expert-led training sessions on AI agent development
- **Prebuilt Docker Images**: Ready-to-deploy containers for common use cases
- **Flexible Payment System**: Support donations, workshop bookings, and Docker image purchases
- **Automated Service Integration**: Agents can set up their own API access and configurations
- **Modern, Responsive Design**: Built with Next.js, TypeScript, and Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom React components
- **State Management**: React Hooks
- **Build Tool**: Next.js built-in tooling

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yoans/ask-my-copilot-website.git
cd ask-my-copilot-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📱 Key Components

### Hero Section
- Compelling value proposition
- Newsletter signup
- Interactive terminal demonstration

### Features Overview
- Guided setup process
- Automated API integration
- Prebuilt Docker images
- Expert workshops
- AI assistant chat
- Flexible pricing

### Agent Setup Guide
- Interactive step-by-step wizard
- Multiple agent types (Data Analyst, Content Creator, Customer Support, etc.)
- API configuration assistance
- Deployment options (Cloud vs Docker)
- Performance monitoring

### Pricing & Payments
- Free community tier
- Pro subscription plans
- Premium Docker images catalog
- Expert workshop bookings
- Donation system

### AI ChatBot
- Context-aware responses
- Setup assistance
- Troubleshooting help
- Quick action suggestions
- Simulated AI responses (extensible to real API)

## 🎯 Agent Types Supported

- **Data Analyst**: Analyze data and generate insights
- **Content Creator**: Generate and optimize content
- **Customer Support**: Handle customer inquiries
- **Code Reviewer**: Review and improve code quality
- **Social Media Manager**: Manage social media presence
- **Research Assistant**: Conduct research and summarize findings

## 💰 Monetization Features

- **Donations**: Support platform development
- **Workshops**: $99-199 expert training sessions
- **Docker Images**: $39-59 prebuilt automation containers
- **Pro Plans**: $29/month for unlimited agents and premium features
- **Enterprise**: Custom solutions and pricing

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Hero.tsx        # Landing page hero
│   ├── Features.tsx    # Features overview
│   ├── AgentSetupGuide.tsx # Interactive setup wizard
│   ├── Pricing.tsx     # Pricing plans and payments
│   ├── ChatBot.tsx     # AI assistant chat
│   └── Footer.tsx      # Site footer
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## 🚀 Deployment

The application can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Static site hosting
- **AWS/Google Cloud/Azure**: Full-featured cloud platforms
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🎉 Acknowledgments

- Built for the AI automation community
- Inspired by the need for accessible AI agent development
- Designed to democratize AI-powered workflow automation