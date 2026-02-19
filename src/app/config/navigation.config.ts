// src/app/config/menu.config.ts

import { MenuItem } from '../shared/models/navigation.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard', // i18n key
    icon: 'dashboard',
    route: '/dashboard',
  },
  {
    id: 'employees',
    label: 'Employees', // i18n key
    icon: 'people',
    route: '/employees',
  }
];
