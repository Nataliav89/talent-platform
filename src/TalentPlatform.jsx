import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Check, Star, Globe, Users, TrendingDown, Clock, Shield, Award, Briefcase, Code, Headphones, BarChart3, Pencil, DollarSign } from 'lucide-react';

export default function TalentPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = [
    { 
      title: "Executive Assistant", 
      icon: Briefcase, 
      savings: "76%", 
      salary: "$15,000/yr",
      description: "Experienced professionals managing schedules, communications, and executive support"
    },
    { 
      title: "Software Developer", 
      icon: Code, 
      savings: "70%", 
      salary: "$25,000/yr",
      description: "Full-stack developers skilled in modern frameworks and technologies"
    },
    { 
      title: "Customer Support", 
      icon: Headphones, 
      savings: "80%", 
      salary: "$12,000/yr",
      description: "Dedicated support specialists delivering exceptional customer experiences"
    },
    { 
      title: "Sales Development Rep", 
      icon: BarChart3, 
      savings: "75%", 
      salary: "$18,000/yr",
      description: "Driven SDRs focused on lead generation and pipeline growth"
    },
    { 
      title: "Content Writer", 
      icon: Pencil, 
      savings: "78%", 
      salary: "$14,000/yr",
      description: "Skilled writers creating engaging content across all formats"
    },
    { 
      title: "Finance Specialist", 
      icon: DollarSign, 
      savings: "72%", 
      salary: "$20,000/yr",
      description: "Accounting and finance professionals managing your financial operations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "CEO, TechFlow",
      content: "We've scaled our team by 40% while reducing costs by 65%. The talent quality is exceptional and our remote team integrates seamlessly.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Founder, GrowthLabs",
      content: "Finding qualified developers was always our bottleneck. Now we have a world-class engineering team at a fraction of the cost.",
      rating: 5
    },
    {
      name: "Emily Roberts",
      role: "VP Operations, ScaleUp Inc",
      content: "The support throughout the hiring process was incredible. We hired 8 people in 3 months and saved over $300K annually.",
      rating: 5
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "Share your hiring needs, budget, and timeline. We'll align on the right markets and skill requirements."
    },
    {
      step: "02",
      title: "Talent Matching",
      description: "Our recruiters screen hundreds of candidates and present only the top 1% who match your exact needs."
    },
    {
      step: "03",
      title: "Interviews & Selection",
      description: "Review profiles, conduct interviews, and we'll support you through negotiations and offer stages."
    },
    {
      step: "04",
      title: "Seamless Onboarding",
      description: "We handle contracts, payroll, compliance, and IT setup so your new hire can start day one."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@600;700;900&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        h1, h2, h3, h4, .heading {
          font-family: 'Fraunces', serif;
          font-weight: 700;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.3); }
          50% { box-shadow: 0 0 40px rgba(74, 222, 128, 0.6); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #4ade80 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%);
        }

        .mesh-gradient {
          background: 
            radial-gradient(at 0% 0%, rgba(74, 222, 128, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(34, 211, 238, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(74, 222, 128, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(34, 211, 238, 0.1) 0px, transparent 50%);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(74, 222, 128, 0.2);
        }

        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-green-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold heading">
              <span className="gradient-text">GlobalTalent</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              <a href="#roles" className="hover:text-green-400 transition-colors">Roles</a>
              <a href="#process" className="hover:text-green-400 transition-colors">Process</a>
              <a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-green-400 transition-colors">Testimonials</a>
              <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
                Start Hiring
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeInUp">
              <a href="#services" className="block hover:text-green-400 transition-colors">Services</a>
              <a href="#roles" className="block hover:text-green-400 transition-colors">Roles</a>
              <a href="#process" className="block hover:text-green-400 transition-colors">Process</a>
              <a href="#pricing" className="block hover:text-green-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="block hover:text-green-400 transition-colors">Testimonials</a>
              <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-semibold w-full">
                Start Hiring
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center mesh-gradient noise">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                💼 Save up to 80% on payroll costs
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hire Elite <span className="gradient-text">Global Talent</span> in Days, Not Months
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Access the world's top 1% of remote professionals. Build your dream team across 20+ countries while slashing costs by up to 80%. No upfront fees — you only pay when you hire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 animate-glow">
                  Get Started Free
                  <ChevronRight size={20} />
                </button>
                <button className="border-2 border-green-500 hover:bg-green-500/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
                  View Success Stories
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold gradient-text">4,000+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold gradient-text">$250M+</div>
                  <div className="text-sm text-gray-400">Saved in Costs</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-gradient-to-br from-green-500/20 to-cyan-500/20 p-8 rounded-3xl backdrop-blur-sm border border-green-500/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">Pre-vetted candidates</div>
                      <div className="text-xl font-bold">Top 1% talent only</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                      <TrendingDown size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">Cost savings</div>
                      <div className="text-xl font-bold">Save 70-80% vs US hires</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <Clock size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">Time to hire</div>
                      <div className="text-xl font-bold">Candidates in 5 days</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                      <Shield size={24} className="text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">Quality guarantee</div>
                      <div className="text-xl font-bold">6-month perfect hire</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Hiring Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From direct hires to full employer of record services, we handle everything so you can focus on growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direct Hire</h3>
              <p className="text-gray-400 mb-6">
                Find, vet, and hire top talent directly. We present pre-screened candidates tailored to your needs, and you handle employment directly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Pre-vetted top 1% candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">5-day candidate delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6-month hire guarantee</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Employer of Record</h3>
              <p className="text-gray-400 mb-6">
                We become the legal employer, handling payroll, benefits, compliance, and HR — you manage the work and enjoy the talent.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Full compliance & legal coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Payroll & benefits management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Local HR expertise</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-6">
                <Award size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Talent On-Demand</h3>
              <p className="text-gray-400 mb-6">
                Need talent fast for short-term projects? Access our network of specialists available on-demand for contract work.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Immediate availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Flexible contract terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Specialized skill sets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 mesh-gradient noise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Popular Roles</span> We Fill
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From technical to creative, administrative to strategic — we source exceptional talent across all functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl card-hover cursor-pointer"
                  onClick={() => setActiveRole(index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-black" />
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-bold">
                      Save {role.savings}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{role.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-2xl font-bold gradient-text">{role.salary}</span>
                    <span className="text-sm text-gray-500">avg. annual</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-green-500 hover:bg-green-500/10 px-8 py-3 rounded-full font-semibold transition-all">
              View All 50+ Roles
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A streamlined process designed to get you from job posting to perfect hire in record time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-2xl h-full">
                  <div className="text-6xl font-bold text-green-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-green-500/30" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-3">Zero Risk Guarantee</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              You pay nothing unless you hire. Our success fee is only charged when you've found your perfect candidate and they've accepted your offer.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
              Start Your Search Today
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 mesh-gradient noise">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No hidden fees. No recurring charges. Just one straightforward fee when you hire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Direct Hire</h3>
              <div className="text-4xl font-bold gradient-text mb-6">
                One-time Fee
              </div>
              <p className="text-gray-400 mb-8">
                Pay only when you successfully hire. Fee is a percentage of first-year salary.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Full recruitment service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">6-month guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Unlimited candidates</span>
                </li>
              </ul>
              <button className="w-full border-2 border-green-500 hover:bg-green-500/10 py-3 rounded-full font-semibold transition-all">
                Get Started
              </button>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-2xl relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-6 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">EOR Service</h3>
              <div className="text-4xl font-bold gradient-text mb-6">
                Monthly Rate
              </div>
              <p className="text-gray-400 mb-8">
                All-inclusive employer of record service with payroll, benefits, and compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Full legal compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Payroll & benefits admin</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">HR support included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Equipment management</span>
                </li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded-full font-bold transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <div className="p-8 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">On-Demand</h3>
              <div className="text-4xl font-bold gradient-text mb-6">
                Hourly/Project
              </div>
              <p className="text-gray-400 mb-8">
                Flexible contract talent for short-term projects and specialized needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Immediate availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Flexible terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Specialized experts</span>
                </li>
              </ul>
              <button className="w-full border-2 border-green-500 hover:bg-green-500/10 py-3 rounded-full font-semibold transition-all">
                Get Started
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Have questions about pricing? <a href="#" className="text-green-400 hover:text-green-300 underline">Contact our team</a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what companies are saying about their experience hiring global talent with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-2xl card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-green-400 text-green-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mesh-gradient noise relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Dream Team?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 4,000+ companies saving millions while accessing world-class talent. Start hiring today with zero risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Start Hiring Now
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-green-500 hover:bg-green-500/10 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Schedule a Call
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • Free consultation • Pay only when you hire
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold heading mb-4">
                <span className="gradient-text">GlobalTalent</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting companies with elite global talent since 2020.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Direct Hire</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Employer of Record</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Talent On-Demand</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Equipment Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Salary Guide</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Hiring Guide</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 GlobalTalent. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
