import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Tag, Search, Filter } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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
      title: 'Building Sustainable Funding Models',
      excerpt: 'Best practices for creating diversified revenue streams that ensure long-term organizational sustainability.',
      category: 'Best Practices',
      author: 'James Williams',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Community Engagement in the Digital Age',
      excerpt: 'How organizations are adapting their community engagement strategies for the digital-first world.',
      category: 'Research',
      author: 'Emily Zhang',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Impact Measurement Framework 2024',
      excerpt: 'Our updated framework for measuring and communicating social impact effectively to stakeholders.',
      category: 'Best Practices',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto">
                    {featuredPost.isCollage ? (
                      <div className="grid grid-cols-2 gap-2 h-full p-2">
                        <img
                          src={featuredPost.images[0]}
                          alt="Mock Placement Drive - Featured"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <img
                          src={featuredPost.images[1]}
                          alt="Mock Placement Drive - Group Discussion"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : (
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
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
                      <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
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
                    <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
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

      <Footer />
    </div>
  );
};

export default Blog;
