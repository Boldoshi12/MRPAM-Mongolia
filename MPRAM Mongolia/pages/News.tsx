import React from 'react';
import { Link } from 'react-router-dom';
import { LATEST_NEWS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-gray-200 dark:border-slate-700 pb-8 animate-fade-in">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-mrpam-blue dark:text-white mb-2">{t('news.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('news.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Featured / Latest Grid */}
           <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {LATEST_NEWS.map((news, index) => (
                    <article key={news.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                        <div className="h-48 bg-gray-200 dark:bg-slate-700 overflow-hidden relative">
                            <img 
                                src={news.imageUrl} 
                                alt={news.title} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-mrpam-blue dark:text-white shadow-sm">
                                {news.category}
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                                <span>{news.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span>MRPAM</span>
                            </div>
                            <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug hover:text-mrpam-blue dark:hover:text-sky-400 transition-colors">
                                <Link to={`/news/${news.id}`}>
                                    {language === 'en' ? news.title_en || news.title : news.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                                {language === 'en' ? news.excerpt_en || news.excerpt : news.excerpt}
                            </p>
                            <Link to={`/news/${news.id}`} className="text-sm font-bold text-mrpam-teal dark:text-teal-400 hover:underline uppercase tracking-wide">
                                {t('news.readMore')} &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default News;