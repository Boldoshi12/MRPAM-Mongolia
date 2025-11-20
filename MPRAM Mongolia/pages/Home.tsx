import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Map as MapIcon, Pickaxe, Droplets, FileText, ChevronRight, Mountain, Zap, Factory } from 'lucide-react';
import { SERVICES, LATEST_NEWS } from '../constants';
import Button from '../components/Button';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const DATA = [
  { name: '2018', value: 4200 },
  { name: '2019', value: 4800 },
  { name: '2020', value: 4500 },
  { name: '2021', value: 5600 },
  { name: '2022', value: 6900 },
  { name: '2023', value: 7400 },
  { name: '2024', value: 8500 },
];

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="relative bg-mrpam-blue dark:bg-slate-950 overflow-hidden transition-colors duration-200">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* Soft Glowing Orbs */}
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-mrpam-gold/20 to-transparent blur-3xl dark:from-mrpam-gold/10"></div>
          <div className="absolute top-[10%] -left-[10%] w-[50%] h-[70%] rounded-full bg-gradient-to-tr from-mrpam-teal/20 to-transparent blur-3xl dark:from-mrpam-teal/10"></div>
          
          {/* Geometric Mineral/Crystal Fragments Pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Top Right Cluster */}
             <g opacity="0.8">
                 <path d="M1200 100 L1250 130 V190 L1200 220 L1150 190 V130 Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" strokeOpacity="0.5"/>
                 <path d="M1260 150 L1290 168 V204 L1260 222 L1230 204 V168 Z" stroke="white" strokeWidth="1" strokeOpacity="0.6"/>
                 <circle cx="1200" cy="160" r="3" fill="white" fillOpacity="0.9"/>
                 <line x1="1250" y1="160" x2="1290" y2="168" stroke="white" strokeOpacity="0.4"/>
             </g>

             {/* Left Floating Elements */}
             <g opacity="0.6">
                 <path d="M100 350 L130 368 V404 L100 422 L70 404 V368 Z" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="white" fillOpacity="0.02"/>
                 <rect x="150" y="320" width="8" height="8" fill="white" fillOpacity="0.4" transform="rotate(45 154 324)"/>
             </g>

             {/* Scattered Shards & Data Points */}
             <path d="M800 120 L820 130 L810 150 Z" stroke="white" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
             <path d="M500 600 L530 610 L510 640 Z" stroke="white" strokeOpacity="0.4" transform="rotate(45 515 620)"/>
             <rect x="950" y="250" width="15" height="15" stroke="white" strokeOpacity="0.4" transform="rotate(30 960 260)"/>
             
             {/* Network Lines */}
             <line x1="820" y1="130" x2="950" y2="250" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4"/>
             <line x1="130" y1="368" x2="500" y2="600" stroke="white" strokeOpacity="0.15" strokeDasharray="4 4"/>
             <line x1="1150" y1="190" x2="820" y2="130" stroke="white" strokeOpacity="0.15" strokeDasharray="4 4"/>
             
             {/* Tiny dots/nodes */}
             <circle cx="820" cy="130" r="2.5" fill="white" fillOpacity="0.7"/>
             <circle cx="960" cy="260" r="2.5" fill="white" fillOpacity="0.7"/>
             <circle cx="515" cy="620" r="2" fill="white" fillOpacity="0.7"/>
             <circle cx="300" cy="150" r="2" fill="white" fillOpacity="0.5"/>
             <circle cx="1050" cy="550" r="2" fill="white" fillOpacity="0.5"/>
             <circle cx="200" cy="650" r="3" fill="white" fillOpacity="0.3"/>
             
             {/* Tech Crosshairs */}
             <path d="M50 50 L80 50 M65 35 L65 65" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
             <path d="M1350 700 L1380 700 M1365 685 L1365 715" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
          </svg>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-mrpam-gold/80 rounded-full animate-pulse shadow-[0_0_10px_rgba(201,163,78,0.5)]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-mrpam-teal/70 rounded-full animate-pulse delay-700 shadow-[0_0_10px_rgba(15,95,99,0.5)]"></div>
          <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-white/80 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-mrpam-teal/30 border border-mrpam-teal/50 text-mrpam-gold text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm shadow-sm">
              {t('hero.tag')}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              {t('hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mrpam-gold to-yellow-200">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed delay-100 animate-fade-in-up opacity-0 drop-shadow-sm" style={{ animationFillMode: 'forwards' }}>
              {t('hero.desc')}
            </p>

            {/* Main Search - Glassmorphism with High Contrast Text */}
            <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md p-2 rounded-xl shadow-2xl max-w-2xl mx-auto flex items-center transform hover:-translate-y-1 transition-all duration-300 border border-white/20 delay-200 animate-fade-in-up opacity-0 group ring-1 ring-white/10" style={{ animationFillMode: 'forwards' }}>
              <Search className="w-6 h-6 text-gray-300 ml-3 group-focus-within:text-mrpam-gold transition-colors" />
              <input 
                type="text" 
                placeholder={t('hero.searchPlaceholder')} 
                className="flex-1 px-4 py-3 text-white placeholder-gray-300 focus:outline-none text-base bg-transparent font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" size="md" className="shrink-0 bg-mrpam-gold hover:bg-yellow-600 text-white border-none font-bold shadow-lg">{t('hero.searchButton')}</Button>
            </form>

            {/* Quick Tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm delay-300 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              <span className="text-slate-300 font-medium">{t('hero.popularTags')}</span>
              <Link to="/licenses" className="text-mrpam-gold hover:text-white hover:underline transition-colors font-medium">{t('nav.licenses')}</Link>
              <span className="text-slate-500">•</span>
              <Link to="/services" className="text-mrpam-gold hover:text-white hover:underline transition-colors font-medium">{t('services.title')}</Link>
              <span className="text-slate-500">•</span>
              <Link to="/transparency" className="text-mrpam-gold hover:text-white hover:underline transition-colors font-medium">{t('nav.transparency')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 relative z-20 -mt-8 container mx-auto rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-colors duration-200 animate-scale-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
        
        {/* Skyline Illustration on Top */}
        <div className="absolute bottom-full left-0 right-0 h-24 md:h-40 w-full pointer-events-none flex items-end justify-center overflow-hidden rounded-t-xl">
             <div className="w-full h-full max-w-7xl mx-auto relative">
                 <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="skyBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#38BDF8" />
                            <stop offset="1" stopColor="#0284C7" />
                        </linearGradient>
                        <linearGradient id="deepBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#1D4ED8" />
                        </linearGradient>
                        <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#FCD34D" />
                            <stop offset="1" stopColor="#F59E0B" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                           <feGaussianBlur stdDeviation="5" result="blur"/>
                           <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                        </filter>
                    </defs>

                    {/* 1. City Skyline (First to animate - Right) */}
                    <g className="opacity-0 animate-fade-in-down" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        <path d="M800 200 V100 L840 80 V200 H800 Z" fill="url(#deepBlue)"/>
                        <path d="M840 200 V60 L890 60 V200 H840 Z" fill="url(#skyBlue)"/>
                        <path d="M890 200 V120 L930 140 V200 H890 Z" fill="url(#deepBlue)"/>
                        <path d="M950 200 V160 L1000 160 V200 H950 Z" fill="url(#skyBlue)" opacity="0.8"/>
                        <path d="M1020 200 V90 L1050 90 V200 H1020 Z" fill="url(#deepBlue)"/>
                        
                        {/* Windows/Details */}
                        <rect x="850" y="70" width="30" height="120" fill="white" fillOpacity="0.1"/>
                        <rect x="810" y="110" width="20" height="80" fill="white" fillOpacity="0.1"/>
                    </g>

                    {/* 2. Mountains / Geology (Second to animate - Left) */}
                    <g className="opacity-0 animate-fade-in-down" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                        {/* Background Silhouette (Mountains) */}
                        <path d="M0 200 L0 150 L150 80 L350 160 L500 140 L700 200 H0 Z" fill="#1E293B" opacity="0.3"/>
                        <path d="M600 200 L750 120 L900 150 L1200 80 V200 H600 Z" fill="#1E293B" opacity="0.2"/>
                    </g>

                    {/* 3. Mechanics / Industry (Third to animate - Center/Left) */}
                    <g className="opacity-0 animate-fade-in-down" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                         {/* Excavator */}
                        <g>
                            <path d="M100 180 L140 180 L140 160 L120 145 L100 160 Z" fill="url(#goldAccent)"/>
                            <circle cx="110" cy="180" r="8" fill="#334155"/>
                            <circle cx="130" cy="180" r="8" fill="#334155"/>
                            <path d="M120 150 L160 110 L180 130" stroke="url(#goldAccent)" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M180 130 L170 145 L190 145 Z" fill="url(#goldAccent)"/>
                        </g>

                        {/* Headframe (Center Left) */}
                        <g>
                            <path d="M250 200 L270 100 L310 100 L330 200" stroke="url(#deepBlue)" strokeWidth="4" fill="none"/>
                            <line x1="280" y1="100" x2="280" y2="200" stroke="url(#deepBlue)" strokeWidth="2"/>
                            <line x1="260" y1="150" x2="320" y2="150" stroke="url(#deepBlue)" strokeWidth="2"/>
                            <circle cx="290" cy="110" r="5" fill="url(#goldAccent)" className="animate-pulse"/>
                        </g>

                        {/* Factory/Processing Plant (Center) */}
                        <g>
                            <rect x="400" y="140" width="60" height="60" fill="url(#deepBlue)"/>
                            <rect x="460" y="120" width="40" height="80" fill="url(#skyBlue)"/>
                            <rect x="410" y="150" width="10" height="40" fill="#1E293B" opacity="0.3"/>
                            <rect x="430" y="150" width="10" height="40" fill="#1E293B" opacity="0.3"/>
                            <rect x="470" y="130" width="20" height="10" fill="#1E293B" opacity="0.3"/>
                        </g>
                    </g>

                    {/* 4. Details: Smoke, Wires, Text (Last to animate) */}
                    <g className="opacity-0 animate-fade-in" style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
                         {/* Smoke */}
                        <circle cx="480" cy="100" r="5" fill="white" opacity="0.4" className="animate-ping"/>
                        <circle cx="490" cy="90" r="4" fill="white" opacity="0.3"/>
                        
                        {/* Connecting Lines / Power Lines */}
                        <path d="M330 120 Q400 140 460 120" stroke="#64748B" strokeWidth="1" fill="none"/>
                        <path d="M500 120 Q650 150 800 120" stroke="#64748B" strokeWidth="1" fill="none"/>

                        {/* MRPAM Text (Stylized integration) */}
                        <text x="650" y="180" fontFamily="Arial" fontWeight="bold" fontSize="24" fill="white" fillOpacity="0.1" letterSpacing="10">MRPAM</text>
                    </g>

                 </svg>
             </div>
        </div>

        <div className="flex items-center space-x-4 border-r border-gray-100 dark:border-slate-700 last:border-0 relative z-10">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-mrpam-blue dark:text-blue-400">
                <FileText className="w-6 h-6" />
            </div>
            <div>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">2,451</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">{t('stats.licenses')}</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 border-r border-gray-100 dark:border-slate-700 last:border-0 relative z-10">
            <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-mrpam-teal dark:text-teal-400">
                <Pickaxe className="w-6 h-6" />
            </div>
            <div>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">84.5%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">{t('stats.export')}</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 border-r border-gray-100 dark:border-slate-700 last:border-0 relative z-10">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg text-mrpam-gold dark:text-yellow-500">
                <Droplets className="w-6 h-6" />
            </div>
            <div>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">1.2M</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">{t('stats.oil')}</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 relative z-10">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                <MapIcon className="w-6 h-6" />
            </div>
            <div>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">{t('stats.territory')}</p>
            </div>
        </div>
      </div>

      {/* Main Content Grid (Bento) */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 animate-fade-in opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
          <div>
            <h2 className="font-heading text-3xl font-bold text-mrpam-blue dark:text-white mb-2">{t('services.title')}</h2>
            <p className="text-gray-500 dark:text-gray-400">{t('services.subtitle')}</p>
          </div>
          <Link to="/services" className="text-mrpam-blue dark:text-sky-400 font-medium hover:text-mrpam-gold dark:hover:text-mrpam-gold flex items-center transition-colors">
            {t('services.all')} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:border-mrpam-blue/20 dark:hover:border-sky-500/30 transition-all duration-300 flex flex-col items-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-lg bg-mrpam-blue/5 dark:bg-slate-700 text-mrpam-blue dark:text-sky-400 flex items-center justify-center mb-6 group-hover:bg-mrpam-blue group-hover:text-white dark:group-hover:bg-sky-600 transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-mrpam-blue dark:group-hover:text-sky-400 transition-colors">
                {language === 'en' ? service.title_en || service.title : service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                 {language === 'en' ? service.description_en || service.description : service.description}
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-mrpam-teal dark:text-teal-400 group-hover:translate-x-2 transition-transform">
                {t('services.more')} <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Dashboard / Maps / News Split */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Live Map & Data (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
                {/* Map Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden transition-colors duration-200 animate-fade-in-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
                    <div className="p-6 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                        <h3 className="font-heading font-bold text-lg text-mrpam-blue dark:text-white">{t('home.mapTitle')}</h3>
                        <Button variant="outline" size="sm">{t('home.viewLarge')}</Button>
                    </div>
                    <div className="relative bg-slate-100 dark:bg-slate-700 h-80 w-full group cursor-pointer transition-colors duration-200">
                        {/* Abstract Map Representation */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10">
                             <MapIcon className="w-24 h-24 text-gray-400 dark:text-gray-500" />
                        </div>
                        {/* Simulated Map Points */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white dark:border-slate-800 shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-mrpam-gold rounded-full border-2 border-white dark:border-slate-800 shadow-lg"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-mrpam-teal rounded-full border-2 border-white dark:border-slate-800 shadow-lg"></div>
                        
                        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-2 rounded shadow text-xs text-gray-600 dark:text-gray-300">
                            <div className="flex items-center mb-1"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> {t('licenses.types.Exploration')}</div>
                            <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-mrpam-teal mr-2"></span> {t('licenses.types.Mining')}</div>
                        </div>
                        
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 bg-white dark:bg-slate-800 dark:text-white px-4 py-2 rounded-full shadow font-medium text-sm transition-opacity">
                                {t('home.openMap')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Chart Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-200 animate-fade-in-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
                    <h3 className="font-heading font-bold text-lg text-mrpam-blue dark:text-white mb-6">{t('home.chartTitle')}</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={DATA}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0F5F63" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#0F5F63" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:stroke-slate-700" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'var(--tw-bg-opacity, #fff)', 
                                    borderRadius: '0.5rem', 
                                    border: 'none', 
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                                  }} 
                                />
                                <Area type="monotone" dataKey="value" stroke="#0F5F63" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Right: News (5 cols) */}
            <div className="lg:col-span-5">
                <div className="flex items-center justify-between mb-6 animate-fade-in opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
                    <h2 className="font-heading text-2xl font-bold text-mrpam-blue dark:text-white">{t('home.newsTitle')}</h2>
                    <Link to="/news" className="text-sm text-mrpam-teal dark:text-teal-400 hover:underline">{t('home.viewAllNews')}</Link>
                </div>
                <div className="space-y-6">
                    {LATEST_NEWS.map((news, index) => (
                        <article key={news.id} className="group flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 400}ms`, animationFillMode: 'forwards' }}>
                            <div className="w-full sm:w-1/3 h-32 bg-gray-200 dark:bg-slate-700 rounded-lg overflow-hidden shrink-0">
                                <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-mrpam-gold">{news.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{news.date}</span>
                                </div>
                                <h3 className="font-heading font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-mrpam-blue dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                                    {language === 'en' ? news.title_en || news.title : news.title}
                                </h3>
                                <Link to={`/news/${news.id}`} className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-auto group-hover:text-mrpam-teal dark:group-hover:text-teal-400">
                                    {t('home.readMore')}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Newsletter Box */}
                <div className="mt-8 bg-mrpam-blue dark:bg-sky-900/50 rounded-xl p-6 text-center text-white relative overflow-hidden border border-transparent dark:border-sky-800 animate-fade-in-up opacity-0 delay-700" style={{ animationFillMode: 'forwards' }}>
                    <div className="relative z-10">
                        <h3 className="font-heading font-bold text-lg mb-2">{t('home.subscribeTitle')}</h3>
                        <p className="text-sm text-blue-200 dark:text-blue-100 mb-4">{t('home.subscribeDesc')}</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder={t('home.emailPlaceholder')} className="flex-1 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none border-none" />
                            <Button size="sm" className="bg-mrpam-gold hover:bg-yellow-600 text-white border-none">{t('home.subscribeButton')}</Button>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;