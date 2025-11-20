import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES, LATEST_NEWS, MOCK_LICENSES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronRight, FileText, Map, Gavel, User, Search as SearchIcon } from 'lucide-react';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t, language } = useLanguage();

  const lowerQuery = query.toLowerCase();

  // Filter logic
  const services = SERVICES.filter(s => {
      const title = language === 'en' ? (s.title_en || s.title) : s.title;
      const desc = language === 'en' ? (s.description_en || s.description) : s.description;
      return title.toLowerCase().includes(lowerQuery) || desc.toLowerCase().includes(lowerQuery);
  });

  const news = LATEST_NEWS.filter(n => {
      const title = language === 'en' ? (n.title_en || n.title) : n.title;
      const excerpt = language === 'en' ? (n.excerpt_en || n.excerpt) : n.excerpt;
      return title.toLowerCase().includes(lowerQuery) || excerpt.toLowerCase().includes(lowerQuery);
  });

  const licenses = MOCK_LICENSES.filter(l => 
      l.holder.toLowerCase().includes(lowerQuery) || l.id.toLowerCase().includes(lowerQuery)
  );

  const totalResults = services.length + news.length + licenses.length;

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 animate-fade-in">
          <h1 className="font-heading text-3xl font-bold text-mrpam-blue dark:text-white mb-2">{t('search.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {totalResults > 0 ? t('search.query', { query }) : t('search.noResults', { query })}
          </p>
        </div>

        <div className="space-y-12">
            
            {/* Services Results */}
            {services.length > 0 && (
                <section className="animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
                        {t('search.sections.services')}
                        <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{services.length}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map(service => (
                            <Link key={service.id} to={service.link} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:border-mrpam-blue dark:hover:border-sky-500 transition-colors flex items-center">
                                <div className="p-3 rounded bg-blue-50 dark:bg-slate-700 text-mrpam-blue dark:text-sky-400 mr-4">
                                    <service.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        {language === 'en' ? service.title_en || service.title : service.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                                        {language === 'en' ? service.description_en || service.description : service.description}
                                    </p>
                                </div>
                                <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Licenses Results */}
            {licenses.length > 0 && (
                <section className="animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
                        {t('search.sections.licenses')}
                        <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{licenses.length}</span>
                    </h2>
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                                {licenses.map(l => (
                                    <tr key={l.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                                        <td className="px-4 py-3 font-mono text-mrpam-blue dark:text-sky-400 font-medium">{l.id}</td>
                                        <td className="px-4 py-3 text-gray-900 dark:text-white">{l.holder}</td>
                                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-right">
                                            <Link to="/licenses" className="text-xs text-mrpam-teal hover:underline">View</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* News Results */}
            {news.length > 0 && (
                <section className="animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
                        {t('search.sections.news')}
                        <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{news.length}</span>
                    </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {news.map(n => (
                            <Link key={n.id} to={`/news/${n.id}`} className="flex gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 bg-gray-200 dark:bg-slate-700 rounded shrink-0 overflow-hidden">
                                    <img src={n.imageUrl} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">{n.date}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white leading-snug mb-1 line-clamp-2">
                                        {language === 'en' ? n.title_en || n.title : n.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                     </div>
                </section>
            )}

            {totalResults === 0 && query && (
                 <div className="text-center py-20 animate-fade-in">
                    <div className="bg-gray-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SearchIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                    <p className="text-gray-500 dark:text-gray-400">We couldn't find anything matching "{query}". Try searching for something else.</p>
                    <div className="mt-6">
                        <Link to="/" className="text-mrpam-blue dark:text-sky-400 hover:underline">Go back home</Link>
                    </div>
                 </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Search;