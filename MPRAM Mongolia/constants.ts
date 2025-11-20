import { FileText, Map, Gavel, BarChart2, Users, Building2, Pickaxe, Droplets } from 'lucide-react';
import { ServiceItem, NavItem, LicenseData, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.licenses', path: '/licenses' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.news', path: '/news' },
  { label: 'nav.transparency', path: '/transparency' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Тусгай зөвшөөрөл',
    title_en: 'Licenses',
    description: 'Ашигт малтмал, газрын тосны тусгай зөвшөөрлийн бүртгэл, сунгалт.',
    description_en: 'Registration and renewal of mineral and petroleum special licenses.',
    icon: FileText,
    link: '/licenses'
  },
  {
    id: '2',
    title: 'Геологийн мэдээлэл',
    title_en: 'Geological Info',
    description: 'Геологийн судалгааны тайлан, зураглал, нээлттэй мэдээлэл.',
    description_en: 'Geological survey reports, mapping, and open data access.',
    icon: Map,
    link: '/geology'
  },
  {
    id: '3',
    title: 'Тендер шалгаруулалт',
    title_en: 'Tenders',
    description: 'Салбарын нээлттэй сонгон шалгаруулалт, тендерийн зар.',
    description_en: 'Open selection processes and tender announcements for the sector.',
    icon: Gavel,
    link: '/tenders'
  },
  {
    id: '4',
    title: 'Статистик мэдээ',
    title_en: 'Statistics',
    description: 'Олборлолт, экспорт, татварын орлогын нэгдсэн тайлан.',
    description_en: 'Consolidated reports on extraction, export, and tax revenue.',
    icon: BarChart2,
    link: '/stats'
  },
  {
    id: '5',
    title: 'Иргэдэд зориулсан',
    title_en: 'Public Services',
    description: 'Өргөдөл, гомдол гаргах, санал хүсэлт илгээх.',
    description_en: 'Submit applications, complaints, and feedback online.',
    icon: Users,
    link: '/public'
  },
  {
    id: '6',
    title: 'Байгууллагын цэс',
    title_en: 'Business Menu',
    description: 'ААН-үүдэд зориулсан цахим тайлангийн систем.',
    description_en: 'Online reporting system for business entities.',
    icon: Building2,
    link: '/business'
  }
];

export const MOCK_LICENSES: LicenseData[] = [
  { id: 'MV-001234', holder: 'Эрдэнэс Тавантолгой ХК', type: 'Mining', location: 'Өмнөговь, Цогтцэций', area: 12450.5, expiry: '2045-12-31', status: 'Active' },
  { id: 'XV-029384', holder: 'Монгол Алт МАК ХХК', type: 'Exploration', location: 'Дорноговь, Мандах', area: 5300.2, expiry: '2026-05-20', status: 'Active' },
  { id: 'PV-000452', holder: 'Петро Чайна Дачин Тамсаг', type: 'Petroleum', location: 'Дорнод, Матад', area: 89000.0, expiry: '2030-10-15', status: 'Active' },
  { id: 'MV-019283', holder: 'Оюу Толгой ХХК', type: 'Mining', location: 'Өмнөговь, Ханбогд', area: 8490.1, expiry: '2053-03-01', status: 'Active' },
  { id: 'XV-005921', holder: 'Саусгоби Сэндс ХХК', type: 'Exploration', location: 'Өмнөговь, Гурвантэс', area: 2100.8, expiry: '2025-01-10', status: 'Pending' },
  { id: 'MV-009911', holder: 'Энержи Ресурс ХХК', type: 'Mining', location: 'Өмнөговь, Цогтцэций', area: 6500.4, expiry: '2040-09-20', status: 'Active' },
  { id: 'XV-112233', holder: 'Алтжин Групп', type: 'Exploration', location: 'Төв, Заамар', area: 1200.0, expiry: '2023-12-31', status: 'Expired' },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Ашигт малтмалын тусгай зөвшөөрлийн сонгон шалгаруулалт зарлагдлаа',
    title_en: 'Mineral License Tender Announcement Released',
    date: '2024.05.12',
    category: 'Зарлал',
    excerpt: '2024 оны эхний хагас жилийн хайгуулын тусгай зөвшөөрлийн сонгон шалгаруулалтын талбайн солбицлыг нийтэд мэдээллээ.',
    excerpt_en: 'Coordinates for the first half of 2024 exploration license tenders have been released to the public.',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'Газрын тосны олборлолтын тайлан: 1-р улирал',
    title_en: 'Oil Extraction Report: Q1 2024',
    date: '2024.05.10',
    category: 'Статистик',
    excerpt: 'Энэ оны эхний улиралд 1.2 сая баррель газрын тос олборлож, төсөвт 54 тэрбум төгрөг төвлөрүүллээ.',
    excerpt_en: 'In the first quarter of this year, 1.2 million barrels of oil were extracted, contributing 54 billion MNT to the budget.',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: 'Геологийн суурь судалгааны ажлын явцтай танилцав',
    title_en: 'Review of Basic Geological Survey Progress',
    date: '2024.05.08',
    category: 'Мэдээ',
    excerpt: 'АМГТГ-ын дарга Л.Баярмандах Баянхонгор аймагт ажиллаж, геологийн 1:50000 масштабын зураглалын ажилтай танилцлаа.',
    excerpt_en: 'MRPAM Head L.Bayarmandakh worked in Bayankhongor province to review the progress of 1:50,000 scale geological mapping.',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: 'Ил тод байдлын тайлан 2023 он',
    title_en: 'Transparency Report 2023',
    date: '2024.04.20',
    category: 'Тайлан',
    excerpt: '2023 оны жилийн эцсийн байдлаарх салбарын ил тод байдлын нэгдсэн тайланг танилцуулж байна.',
    excerpt_en: 'Presenting the consolidated transparency report of the sector as of the end of 2023.',
    imageUrl: 'https://picsum.photos/800/400?random=4'
  }
];

export interface TransparencyItem {
  id: number;
  title: string;
  title_en: string;
  date: string;
  type: 'budget' | 'procurement' | 'hr';
  size: string;
}

export const TRANSPARENCY_ITEMS: TransparencyItem[] = [
  { id: 1, title: '2024 оны төсвийн төлөвлөгөө', title_en: '2024 Budget Plan', date: '2024-01-10', type: 'budget', size: '2.4 MB' },
  { id: 2, title: '2023 оны худалдан авалтын тайлан', title_en: '2023 Procurement Report', date: '2024-01-15', type: 'procurement', size: '1.8 MB' },
  { id: 3, title: '2024 оны худалдан авалтын төлөвлөгөө', title_en: '2024 Procurement Plan', date: '2024-01-20', type: 'procurement', size: '3.2 MB' },
  { id: 4, title: 'Хүний нөөцийн сул орон тооны зар', title_en: 'Human Resources Vacancy Announcement', date: '2024-03-05', type: 'hr', size: '0.5 MB' },
  { id: 5, title: '2023 оны шилэн дансны мэдээлэл', title_en: '2023 Glass Account Info', date: '2024-02-01', type: 'budget', size: '4.5 MB' },
];