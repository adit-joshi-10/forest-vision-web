
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag, Search, Filter, X } from 'lucide-react';
import BlogPostModal from '../components/blog/BlogPostModal';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Impact Stories', 'Research', 'Best Practices', 'News & Updates', 'Events'];

  const blogPosts = [
    {
      id: 1,
      title: 'Mock Placement Drive 2.0: Preparing Future Industry Leaders',
      excerpt: 'An intensive industry simulation experience organized by 180 DC MUJ to bridge the gap between academic learning and professional requirements, helping students develop essential skills for corporate success.',
      category: 'Events',
      author: '180 DC MUJ Team',
      date: '2024-01-20',
      readTime: '6 min read',
      images: [
        '/lovable-uploads/c5884e2d-53da-4863-847f-b267701a0d53.png',
        '/lovable-uploads/bc7f2f1f-a1d4-47a0-90e8-84297df3a394.png'
      ],
      featured: true,
      isCollage: true
    },
    {
      id: 3,
      title: 'Alumni Network Consulting Masterclass: Bridging Experience with Innovation',
      excerpt: 'An exclusive virtual consulting session connecting 180 DC MUJ alumni with current students, sharing industry insights and strategic frameworks that drive real-world business impact.',
      category: 'Events',
      author: '180 DC MUJ Alumni Network',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/lovable-uploads/25a5e2d1-b75d-469a-abb1-f22e948cabae.png',
      featured: false
    },
    {
      id: 4,
      title: 'The Consulting Playbook: How Big Firms Solve Big Problems (Without Google)',
      excerpt: 'Sometimes, the smartest founder isn\'t the loudest – it\'s the one who asks McKinsey-style questions at 2AM. Discover the structured thinking approach that Fortune 500s use and how early-stage founders can apply these frameworks to solve real business bottlenecks.',
      category: 'Best Practices',
      author: 'Aaruush Kumar',
      date: '2025-06-12',
      readTime: '8 min read',
      image: '/lovable-uploads/737052df-5a69-40ed-8b7c-58fbcd020eeb.png',
      featured: false,
      fullContent: `"Sometimes, the smartest founder isn't the loudest – it's the one who asks McKinsey-style questions at 2AM."

If you've ever wondered what management consultants actually do – no, it's not just wearing suits and nodding during meetings – this one's for you.

From Bain to BCG, McKinsey to homegrown biggies like Kearney India or Praxis Global, consulting firms don't just give gyaan – they bring structured thinking to messy problems.

But what if I told you…

The same playbook used by Fortune 500s can also help early-stage founders, ops heads, and marketers solve real business bottlenecks without a single Instagram ad?

Let's break it down consulting-style.

**Step 1: Define the Real Problem (Not the One You Think You Have)**

Client: "Our sales are falling. We need more ads."

Consultant: "Your repeat rate is 8%. You don't need ads. You need better CX."

Lesson: Never solve symptoms. Solve the disease.

👉 Use the MECE framework – Mutually Exclusive, Collectively Exhaustive – to break problems into clean, non-overlapping parts.

**Step 2: Hypothesis > Data**

Contrary to popular belief, consultants don't start with data. They start with smart guesses and then test them.

"We think poor delivery timelines are killing conversions. Let's test this against NPS and churn rates."

This is called the Issue Tree approach – break the problem into branches and test each.

Early founders: You can use this to audit your churn, revenue drop, or even influencer campaigns.

**Step 3: 80/20 Every Problem**

Consulting isn't about perfection. It's about prioritization.

In a B2B SaaS firm, consultants won't fix all broken features. They'll fix the 2 that affect 80% of revenue.

Pareto is God.

Early-stage takeaway: You don't need 10 new features. You need the one that keeps clients from churning.

**Step 4: Slide It Like It's Hot**

Consultants don't just think. They communicate clearly.

Every recommendation fits into:
- Executive Summary
- Problem Tree
- Options/Scenarios
- Recommendations
- Action Plan

Even if your startup's just 5 people – learn to pitch like McKinsey. You're not selling slides. You're selling confidence.

**Step 5: Build Systems, Not Jugaad**

Consultants don't optimize campaigns. They optimize processes.

If your refund process needs 7 emails, no ad will save your CAC.

Consulting advice: Solve once. Solve well. Build a system that scales without burning out your ops.

**Why Most Founders Hate Consulting (Until They Need It)**

Yes, consulting sounds fluffy. But ask any unicorn founder – every single one has used consultants (or ex-consultants) to:
- Restructure orgs
- Audit GTM strategies
- Enter new markets
- Raise rounds
- Launch new verticals

Because chaos is sexy – but structure builds empires.

**But Consulting Won't Save You If…**
- You lack product-market fit
- You won't listen to uncomfortable truths
- You're too early (0 to 1 > 1 to 100 problems)

Remember: Consultants don't build. They scale.

**Final Takeaway:**

The consulting playbook works because it's boring, repeatable, and ruthlessly logical.

Whether you're at ₹5 lakh MRR or $5 million in ARR – A little bit of Bain-style thinking can go a long way in making your business... less chaotic.

"Don't hire consultants for ideas. Hire them to kill your bad ones."`
    },
    {
      id: 7,
      title: 'The Forgotten Growth Engine: Why Consulting Is the Real Moat for Modern Founders',
      excerpt: 'You know what\'s underrated in Indian startup culture? Consulting. Not the MBB resume-builder type, but the boots-on-ground, deep-dive, founder-to-founder kind of consulting that builds clarity and compound advantage.',
      category: 'Best Practices',
      author: 'Aaruush Kumar',
      date: '2025-06-11',
      readTime: '7 min read',
      image: '/lovable-uploads/2cd5fb34-1007-4dc6-b4e2-a835fc3ccaf5.png',
      featured: false,
      fullContent: `You know what's underrated in Indian startup culture?

Consulting.

Not the MBB resume-builder type. Not the slide-heavy, jargon-thick stuff either.

We're talking about the boots-on-ground, deep-dive, founder-to-founder kind of consulting. The kind where someone calls you not for execution, but for clarity.

Ironically, it's that clarity that builds the kind of brands money alone can't buy.

**🧠 Awareness: Let's Be Real Execution Is Overrated Without Insight**

India is flooded with D2C brands. New labels every week. New categories. New logos. New packaging. But here's the thing most of them sound the same.

Why?

Because execution without insight is just noise. And insight only comes from getting your hands dirty.

This is where consulting flips the script.

It lets you go deeper than product into behavior, distribution, market gaps, unit economics, trust.

If you've spent even six months consulting for a founder or brand, chances are:
- You've seen more growth problems than a newly hired CMO.
- You've pitched ideas that got implemented before contracts were signed.
- You've said "No, that's not your USP" more times than you can count.

You're not just building decks. You're building muscle memory for business.

**🤝 Trust: Why Founders Who Consult First Build Deeper Pull**

Let's say you helped a small skincare brand reposition their entire GTM. You didn't just get paid for strategy. You became their sounding board.

Now imagine doing that across 5–10 clients. You're not just doing projects you're training your intuition at scale.

Founders who operate this way don't chase LinkedIn virality. They build networks quietly. They get inbound without trying.

Because in India, trust > hype. Always has. Always will.

Consulting-led operators become known for one thing: clarity under pressure.

And in a noisy market, that is priceless.

**🚀 Conversion: From Clarity to Compounding**

Once you've built trust, conversion becomes easy.

Not just in terms of clients. But in leverage.

Consulting teaches you how to:
- Spot patterns across industries
- See which products will scale before they do
- Understand real CAC vs theoretical CAC
- Build brand narratives that stick

And here's the kicker you start attracting the kind of work that builds your brand.

The kind where:
- A VC refers you to a portfolio founder
- A brand you helped early wants you on their board
- People ask what you're launching next and how to invest

This is where consulting shifts from income to influence.

And influence is the real growth flywheel.

**📣 Advocacy: The Consulting-First Brand Doesn't Need to Shout**

In 2025, we're all building in public. But the best builders don't just talk. They get talked about.

Consulting-led brands have three key advantages:
- They get invited early. To product brainstorms, not just launch parties.
- They're remembered later. Not as freelancers, but as partners.
- They build brands people trust. Because they've already helped people win.

Your consulting projects aren't distractions. They're your distribution channels. Each one a micro-ambassador for how you think, how you solve, how you scale.

That's what makes consulting a long-term moat not just a service, but a signal.

**Consulting Is Not a Side Hustle. It's a Startup School You Get Paid to Attend.**

If you're a young founder, don't ignore it.

It gives you:
- A front-row seat to real growth challenges
- A testing ground for frameworks and ideas
- A slow, steady way to build trust at scale

Consulting isn't the endgame. But for many of us it's how the endgame begins.

It gives you the compound advantage of listening first, solving second, building third.

That's not a service economy.

That's founder-market fit in its rawest form.`
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleReadPost = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-forest text-white relative overflow-hidden">
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-in">
              Insights & <span className="text-accent">Stories</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover the latest insights, success stories, and thought leadership from our consulting work and community impact initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                />
              </div>
              <button className="p-2 border border-gray-300 rounded-full hover:border-primary transition-colors duration-200">
                <Filter className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    {featuredPost.isCollage ? (
                      <div className="grid grid-cols-2 gap-2 h-full p-2">
                        <img
                          src={featuredPost.images[0]}
                          alt="Mock Placement Drive - Featured"
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                        />
                        <img
                          src={featuredPost.images[1]}
                          alt="Mock Placement Drive - Group Discussion"
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ) : (
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute top-4 left-4 animate-bounce">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full animate-pulse">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <button 
                        onClick={() => handleReadPost(featuredPost)}
                        className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 transform hover:scale-105"
                      >
                        Read More
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <article
                key={post.id}
                className={`bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <button 
                      onClick={() => handleReadPost(post)}
                      className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 transform hover:scale-105"
                    >
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for the latest insights, stories, and updates from our community impact work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-accent text-gray-800"
              />
              <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={closeModal} />
      )}

      <Footer />
    </div>
  );
};

export default Blog;
