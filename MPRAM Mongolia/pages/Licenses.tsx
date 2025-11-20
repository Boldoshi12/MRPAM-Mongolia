import React, { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { MOCK_LICENSES } from '../constants';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const Licenses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, language } = useLanguage();

  const filtered = MOCK_LICENSES.filter(l => 
    l.holder.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 animate-fade-in">
          <h1 className="font-heading text-3xl font-bold text-mrpam-blue dark:text-white mb-2">{t('licenses.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('licenses.subtitle')}</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between transition-colors duration-200 animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('licenses.placeholder')} 
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-mrpam-blue/20 focus:border-mrpam-blue dark:focus:border-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" icon={Filter}>{t('licenses.filter')}</Button>
            <Button variant="outline" icon={Download}>{t('licenses.download')}</Button>
            <Button variant="primary">{t('licenses.search')}</Button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden transition-colors duration-200 animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 uppercase font-medium text-xs">
                <tr>
                  <th className="px-6 py-4 tracking-wider">{t('licenses.table.id')}</th>
                  <th className="px-6 py-4 tracking-wider">{t('licenses.table.holder')}</th>
                  <th className="px-6 py-4 tracking-wider">{t('licenses.table.type')}</th>
                  <th className="px-6 py-4 tracking-wider">{t('licenses.table.location')}</th>
                  <th className="px-6 py-4 tracking-wider text-right">{t('licenses.table.area')}</th>
                  <th className="px-6 py-4 tracking-wider">{t('licenses.table.expiry')}</th>
                  <th className="px-6 py-4 tracking-wider text-center">{t('licenses.table.status')}</th>
                  <th className="px-6 py-4 tracking-wider text-center">{t('licenses.table.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                {filtered.length > 0 ? filtered.map((license, index) => (
                  <tr key={license.id} className="hover:bg-blue-50/30 dark:hover:bg-slate-700/50 transition-colors opacity-0 animate-fade-in" style={{ animationDelay: `${index * 50 + 300}ms`, animationFillMode: 'forwards' }}>
                    <td className="px-6 py-4 font-mono font-medium text-mrpam-blue dark:text-sky-400">{license.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{license.holder}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${license.type === 'Mining' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' : 
                          license.type === 'Petroleum' ? 'bg-gray-800 text-white dark:bg-slate-700 dark:text-slate-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'}`}>
                        {t(`licenses.types.${license.type}`)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{license.location}</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-700 dark:text-gray-300">{license.area.toLocaleString()}</td>
                    <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-400">{license.expiry}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${license.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                      <span className="sr-only">{t(`licenses.status.${license.status}`)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-gray-400 hover:text-mrpam-blue dark:hover:text-sky-400 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      {t('licenses.noResults')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800/50 px-6 py-4 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{t('licenses.totalResults', { count: filtered.length })}</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 dark:text-gray-300 disabled:opacity-50" disabled>{t('licenses.prev')}</button>
              <button className="px-3 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600">{t('licenses.next')}</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Licenses;