import React, { createContext, useContext, useState, ReactNode, PropsWithChildren } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const translations = {
  mn: {
    nav: { 
      home: 'Нүүр', 
      licenses: 'Тусгай зөвшөөрөл', 
      services: 'Үйлчилгээ', 
      news: 'Мэдээ мэдээлэл', 
      transparency: 'Ил тод байдал' 
    },
    hero: {
      tag: 'Цахим шилжилт 2024',
      title: 'Эрдэс баялаг, Газрын тосны',
      subtitle: 'Нэгдсэн Мэдээллийн Систем',
      desc: 'Төрөөс үзүүлж буй үйлчилгээг ил тод, шуурхай, хүртээмжтэйгээр иргэд, аж ахуйн нэгжүүдэд хүргэх цахим портал.',
      searchPlaceholder: 'Тусгай зөвшөөрөл, тендер, хууль тогтоомж хайх...',
      searchButton: 'Хайх',
      popularTags: 'Түгээмэл хайлт:',
    },
    stats: {
      licenses: 'Тусгай зөвшөөрөл',
      export: 'Экспортын хувь',
      oil: 'Газрын тос (баррель)',
      territory: 'Нутаг дэвсгэр',
    },
    industry: {
      title: 'Хариуцлагатай Уул Уурхай',
      subtitle: 'Эдийн засгийн тулгуур, Хөгжлийн хурдасгуур',
      stat1: '80+ Эрдсийн төрөл',
      stat2: 'ДНБ-ий 24%',
      stat3: 'Экспортын 90%',
    },
    services: {
      title: 'Үйлчилгээ',
      subtitle: 'Төрийн үйлчилгээг цахимаар авах боломж',
      all: 'Бүх үйлчилгээ',
      more: 'Дэлгэрэнгүй',
      search: 'Үйлчилгээ хайх...',
    },
    news: {
      title: 'Мэдээ, Мэдээлэл',
      subtitle: 'Салбарын цаг үеийн онцлох үйл явдлууд',
      readMore: 'Дэлгэрэнгүй унших',
      back: 'Буцах',
      latest: 'Сүүлийн үеийн мэдээ'
    },
    transparency: {
      title: 'Ил тод байдал',
      subtitle: 'Төсөв, худалдан авалт, хүний нөөцийн нээлттэй мэдээлэл',
      tabs: {
        all: 'Бүгд',
        budget: 'Төсөв, санхүү',
        procurement: 'Худалдан авалт',
        hr: 'Хүний нөөц'
      },
      download: 'Татах',
      date: 'Огноо'
    },
    search: {
      title: 'Хайлтын үр дүн',
      query: '"{query}" илэрцүүд',
      noResults: '"{query}" хайлтаар илэрц олдсонгүй.',
      sections: {
        licenses: 'Тусгай зөвшөөрөл',
        services: 'Үйлчилгээ',
        news: 'Мэдээ мэдээлэл'
      }
    },
    home: {
      mapTitle: 'Кадастрын зураглал',
      viewLarge: 'Томоор харах',
      openMap: 'Интерактив газрын зураг нээх',
      chartTitle: 'Салбарын өсөлт',
      newsTitle: 'Мэдээ, мэдээлэл',
      viewAllNews: 'Бүгдийг үзэх',
      readMore: 'Дэлгэрэнгүй унших',
      subscribeTitle: 'Мэдээлэл тогтмол авах',
      subscribeDesc: 'Салбарын шинэ мэдээ, тендерийн зарыг имэйлээр аваарай.',
      emailPlaceholder: 'Имэйл хаяг...',
      subscribeButton: 'Бүртгүүлэх',
    },
    licenses: {
        title: 'Тусгай зөвшөөрлийн хайлт',
        subtitle: 'Хүчин төгөлдөр ашигт малтмал, газрын тосны тусгай зөвшөөрлүүдийн мэдээлэл.',
        placeholder: 'Зөвшөөрлийн дугаар, Эзэмшигчийн нэрээр хайх...',
        filter: 'Шүүлтүүр',
        download: 'Татах',
        search: 'Хайх',
        table: {
            id: 'ТЗ-ийн Дугаар',
            holder: 'Эзэмшигчийн нэр',
            type: 'Төрөл',
            location: 'Байршил',
            area: 'Талбай (га)',
            expiry: 'Хугацаа',
            status: 'Төлөв',
            action: 'Үйлдэл'
        },
        noResults: 'Илэрц олдсонгүй.',
        totalResults: 'Нийт {count} үр дүн',
        prev: 'Өмнөх',
        next: 'Дараах',
        types: {
            Mining: 'Ашиглалт',
            Exploration: 'Хайгуул',
            Petroleum: 'Газрын тос'
        },
        status: {
            Active: 'Идэвхтэй',
            Pending: 'Хүлээгдэж буй',
            Expired: 'Хугацаа дууссан'
        }
    },
    footer: {
        agencyName: 'АМГТГ',
        agencyDesc: 'Монгол Улсын эрдэс баялаг, газрын тосны салбарын төрийн бодлогыг хэрэгжүүлэгч агентлаг.',
        gov: 'Монгол Улсын Засгийн Газар',
        contact: 'Холбоо барих',
        links: 'Холбоос',
        systems: 'Системүүд',
        copyright: '© 2024 Ашигт малтмал, газрын тосны газар. Бүх эрх хуулиар хамгаалагдсан.',
        privacy: 'Нууцлалын бодлого',
        terms: 'Үйлчилгээний нөхцөл',
        address: 'Улаанбаатар хот 15170, Чингэлтэй дүүрэг, Барилгачдын талбай-3, Засгийн газрын XII байр'
    }
  },
  en: {
    nav: { 
      home: 'Home', 
      licenses: 'Licenses', 
      services: 'Services', 
      news: 'News', 
      transparency: 'Transparency' 
    },
    hero: {
      tag: 'Digital Transformation 2024',
      title: 'Mineral Resources and Petroleum',
      subtitle: 'Integrated Information System',
      desc: 'A digital portal delivering transparent, efficient, and accessible government services to citizens and businesses.',
      searchPlaceholder: 'Search licenses, tenders, laws...',
      searchButton: 'Search',
      popularTags: 'Popular searches:',
    },
    stats: {
      licenses: 'Special Licenses',
      export: 'Export Percentage',
      oil: 'Oil (barrels)',
      territory: 'Territory Coverage',
    },
    industry: {
      title: 'Responsible Mining',
      subtitle: 'Economic Pillar, Catalyst for Development',
      stat1: '80+ Mineral Types',
      stat2: '24% of GDP',
      stat3: '90% of Exports',
    },
    services: {
      title: 'Services',
      subtitle: 'Access government services online',
      all: 'All Services',
      more: 'Details',
      search: 'Search services...',
    },
    news: {
      title: 'News & Updates',
      subtitle: 'Latest highlights from the sector',
      readMore: 'Read More',
      back: 'Back',
      latest: 'Latest News'
    },
    transparency: {
      title: 'Transparency',
      subtitle: 'Open government data, budget, and reports',
      tabs: {
        all: 'All',
        budget: 'Budget & Finance',
        procurement: 'Procurement',
        hr: 'Human Resources'
      },
      download: 'Download',
      date: 'Date'
    },
    search: {
      title: 'Search Results',
      query: 'Results for "{query}"',
      noResults: 'No results found for "{query}".',
      sections: {
        licenses: 'Licenses',
        services: 'Services',
        news: 'News'
      }
    },
    home: {
      mapTitle: 'Cadastral Mapping',
      viewLarge: 'View Larger',
      openMap: 'Open Interactive Map',
      chartTitle: 'Sector Growth',
      newsTitle: 'News & Updates',
      viewAllNews: 'View All',
      readMore: 'Read More',
      subscribeTitle: 'Stay Updated',
      subscribeDesc: 'Receive industry news and tender announcements via email.',
      emailPlaceholder: 'Email address...',
      subscribeButton: 'Subscribe',
    },
    licenses: {
        title: 'License Search',
        subtitle: 'Information on valid mineral and petroleum licenses.',
        placeholder: 'Search by license number, holder name...',
        filter: 'Filter',
        download: 'Download',
        search: 'Search',
        table: {
            id: 'License ID',
            holder: 'Holder Name',
            type: 'Type',
            location: 'Location',
            area: 'Area (ha)',
            expiry: 'Expiry Date',
            status: 'Status',
            action: 'Action'
        },
        noResults: 'No results found.',
        totalResults: 'Total {count} results',
        prev: 'Previous',
        next: 'Next',
        types: {
            Mining: 'Mining',
            Exploration: 'Exploration',
            Petroleum: 'Petroleum'
        },
        status: {
            Active: 'Active',
            Pending: 'Pending',
            Expired: 'Expired'
        }
    },
    footer: {
        agencyName: 'MRPAM',
        agencyDesc: 'Implementing agency of the Government of Mongolia for mineral resources and petroleum sector policy.',
        gov: 'Government of Mongolia',
        contact: 'Contact',
        links: 'Quick Links',
        systems: 'Systems',
        copyright: '© 2024 Mineral Resources and Petroleum Authority. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        address: 'Government Building XII, Barilgachdiin Talbai-3, Chingeltei District, Ulaanbaatar 15170'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('mn');

  const t = (key: string, params?: Record<string, string | number>) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    if (!value) return key;
    
    if (params) {
        Object.entries(params).forEach(([k, v]) => {
            value = value.replace(`{${k}}`, String(v));
        });
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};