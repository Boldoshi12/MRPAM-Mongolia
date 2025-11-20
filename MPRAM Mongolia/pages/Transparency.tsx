import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';
import { TRANSPARENCY_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';

const Transparency: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'budget' | 'procurement' | 'hr'>('all');

  const filteredItems = activeTab === 'all' 
    ? TRANSPARENCY_ITEMS 
    : TRANSPARENCY_ITEMS.filter(item => item.type === activeTab);

  const tabs = [
    { id: 'all', label: 'tabs.all' },
    { id: 'budget', label: 'tabs.budget' },
    { id: 'procurement', label: 'tabs.procurement' },
    { id: 'hr', label: 'tabs.hr' },
  ] as const;

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 animate-fade-in">
          <h1 className="font-heading text-3xl font-bold text-mrpam-blue dark:text-white mb-3">{t('transparency.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">{t('transparency.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-slate-700 pb-1 animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors relative top-[1px] border-b-2 
                        ${activeTab === tab.id 
                            ? 'border-mrpam-blue text-mrpam-blue dark:border-sky-400 dark:text-sky-400 bg-white dark:bg-slate-800' 
                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                >
                    {t(`transparency.${tab.label}`)}
                </button>
            ))}
        </div>

        {/* List */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 font-medium uppercase text-xs border-b border-gray-200 dark:border-slate-700">
                        <tr>
                            <th className="px-6 py-4 w-2/3">{t('news.title')}</th>
                            <th className="px-6 py-4">{t('transparency.date')}</th>
                            <th className="px-6 py-4 text-right">{t('transparency.download')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                        {filteredItems.map((item, index) => (
                            <tr key={item.id} className="hover:bg-blue-50/20 dark:hover:bg-slate-700/30 transition-colors group opacity-0 animate-fade-in" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="p-2 rounded bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 mr-4 group-hover:bg-mrpam-blue group-hover:text-white dark:group-hover:bg-sky-600 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 dark:text-white text-base mb-1">
                                                {language === 'en' ? item.title_en : item.title}
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium bg-gray-100 dark:bg-slate-700 inline-block px-2 py-0.5 rounded">
                                                {item.type}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-mono">{item.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="outline" size="sm" icon={Download} className="text-xs h-8">
                                        {item.size}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                         {filteredItems.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                    No reports found for this category.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Transparency;