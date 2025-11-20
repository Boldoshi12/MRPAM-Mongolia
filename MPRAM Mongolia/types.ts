import React from 'react';

export type Language = 'mn' | 'en';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  trend?: number; // percentage
  icon: React.ElementType;
}

export interface NewsItem {
  id: number;
  title: string;
  title_en?: string;
  date: string;
  category: string;
  excerpt: string;
  excerpt_en?: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  icon: React.ElementType;
  link: string;
}

export interface LicenseData {
  id: string;
  holder: string;
  type: 'Mining' | 'Exploration' | 'Petroleum';
  location: string;
  area: number;
  expiry: string;
  status: 'Active' | 'Pending' | 'Expired';
}