import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AgentSetupGuide from '@/components/AgentSetupGuide'
import Pricing from '@/components/Pricing'
import ChatBot from '@/components/ChatBot'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AgentSetupGuide />
      <Pricing />
      <ChatBot />
      <Footer />
    </main>
  )
}