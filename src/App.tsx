import { Facebook, Instagram, Youtube, Phone, Mail, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is our platform about?",
      answer: "Our platform connects Nepali businesses with social media influencers to create effective marketing collaborations."
    },
    {
      question: "Who can join our platform?",
      answer: "Influencers: Any influencer with active social media accounts (Instagram, TikTok, Facebook) can join to find business collaborations.\n\nBusinesses: Any business looking to promote their products or services through influencer marketing can sign up."
    },
    {
      question: "Are there any fees for joining?",
      answer: "Signing up is free for both businesses and influencers. We may charge a commission or service fee for successful collaborations depending on the specific terms."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with Nepal's Top Influencers</h1>
              <p className="text-xl mb-8">Boost your brand with authentic collaborations</p>
              <div className="space-x-4">
                <a href="https://forms.gle/a5MMWkrgXHJ7fuVD7" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Register Business</a>
                <a href="https://forms.gle/noEwAYMB1KQbmVXi7" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">Join as Influencer</a>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="https://res.cloudinary.com/makegharghaderi/image/upload/v1737980876/pngtree-referral-and-affiliate-marketing-partnership-program-with-businessman-shout-on-megaphone-png-image_7303492_ckrxxu.png" alt="Hero" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">See How It Works</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/k4EmUTPK0Qc" 
            title="How It Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Influencer Nepal</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={20} />
                  <a href="mailto:puribijay@gmail.com">puribijay@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <a href="tel:9840052107">9840052107</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61572455916555" className="hover:text-blue-400 transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-pink-400 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-red-500 transition">
                  <Youtube size={24} />
                </a>
                <a href="#" className="hover:text-black transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
                    <path d="M15 9c4 0 6 3 6 9H3c0-6 2-9 6-9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 Influencer Nepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
