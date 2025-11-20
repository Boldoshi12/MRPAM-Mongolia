import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-mrpam-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Agency Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-white font-bold text-lg mb-4">{t('footer.agencyName')}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {t('footer.agencyDesc')}
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/2560px-Flag_of_Mongolia.svg.png" alt="Mongolia Flag" className="h-6 w-auto" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t('footer.gov')}</span>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-mrpam-gold shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-mrpam-gold shrink-0" />
                <span>(+976) 51-263701</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-mrpam-gold shrink-0" />
                <span>info@mrpam.gov.mn</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-mrpam-gold transition-colors">{t('nav.transparency')}</a></li>
              <li><a href="#" className="hover:text-mrpam-gold transition-colors">{t('services.title')}</a></li>
              <li><a href="#" className="hover:text-mrpam-gold transition-colors">{t('nav.news')}</a></li>
            </ul>
          </div>

          {/* Column 4: External Systems */}
          <div>
            <h3 className="font-heading text-white font-bold text-lg mb-4">{t('footer.systems')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center group">
                  <span className="group-hover:text-mrpam-gold transition-colors">E-Mongolia</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <span className="group-hover:text-mrpam-gold transition-colors">CMCS - Кадастрын систем</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <span className="group-hover:text-mrpam-gold transition-colors">E-Tender</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;