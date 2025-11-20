import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(s => {
    const title = language === 'en' ? (s.title_en || s.title) : s.title;
    const desc = language === 'en' ? (s.description_en || s.description) : s.description;
    const term = searchTerm.toLowerCase();
    return title.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
  });

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-mrpam-blue dark:text-white mb-4">{t('services.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('services.subtitle')}</p>
          
          <div className="mt-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('services.search')} 
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-mrpam-blue/20 focus:border-mrpam-blue dark:focus:border-sky-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-mrpam-blue/20 dark:hover:border-sky-500/30 transition-all duration-300 flex flex-col items-start transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-mrpam-blue/5 dark:bg-slate-700 text-mrpam-blue dark:text-sky-400 flex items-center justify-center mb-6 group-hover:bg-mrpam-blue group-hover:text-white dark:group-hover:bg-sky-600 transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-mrpam-blue dark:group-hover:text-sky-400 transition-colors">
                {language === 'en' ? service.title_en || service.title : service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                 {language === 'en' ? service.description_en || service.description : service.description}
              </p>
              <div className="w-full pt-6 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between text-sm font-bold text-mrpam-teal dark:text-teal-400">
                <span>{t('services.more')}</span>
                <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
          
          {filteredServices.length === 0 && (
             <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400 animate-fade-in">
                {t('search.noResults', { query: searchTerm })}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;