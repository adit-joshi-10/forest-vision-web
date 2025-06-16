
import React from 'react';
import { X, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  images?: string[];
  featured?: boolean;
  isCollage?: boolean;
  fullContent?: string;
}

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      // Handle bold text
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
            {paragraph.slice(2, -2)}
          </h3>
        );
      }
      
      // Handle bullet points
      if (paragraph.trim().startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700">
            {paragraph.trim().slice(2)}
          </li>
        );
      }
      
      // Handle quotes
      if (paragraph.trim().startsWith('"') && paragraph.trim().endsWith('"')) {
        return (
          <blockquote key={index} className="text-xl italic text-primary border-l-4 border-primary pl-4 my-6">
            {paragraph.trim()}
          </blockquote>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative">
          <img
            src={post.image || post.images?.[0]}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.fullContent ? (
              <div>{formatContent(post.fullContent)}</div>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostModal;
