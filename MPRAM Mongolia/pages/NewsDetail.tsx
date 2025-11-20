import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { LATEST_NEWS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  
  const newsItem = LATEST_NEWS.find(n => n.id === Number(id));

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <Link to="/news" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-mrpam-blue dark:text-gray-400 dark:hover:text-white mb-8 transition-colors animate-fade-in">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('news.back')}
        </Link>

        <article className="animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-mrpam-blue dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                        <Tag className="w-3 h-3 mr-2" />
                        {newsItem.category}
                    </span>
                    <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {newsItem.date}
                    </span>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                    {language === 'en' ? newsItem.title_en || newsItem.title : newsItem.title}
                </h1>

                <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8 bg-gray-200 dark:bg-slate-800">
                    <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-full object-cover animate-scale-up" />
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="font-medium text-xl text-gray-800 dark:text-gray-100 mb-6">
                    {language === 'en' ? newsItem.excerpt_en || newsItem.excerpt : newsItem.excerpt}
                </p>
                {/* Mock Content */}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3>Strategic Implementation</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                    Share this article:
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" icon={Share2}>Share</Button>
                </div>
            </div>
        </article>

      </div>
    </div>
  );
};

export default NewsDetail;