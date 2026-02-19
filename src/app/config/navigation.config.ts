// src/app/config/menu.config.ts

import { MenuItem } from '../shared/models/navigation.model';

export const MENU_ITEMS: MenuItem[] = [
  // Dashboard
  {
    id: 'dashboard',
    label: 'nav.dashboard', // i18n key
    icon: 'dashboard',
    route: '/dashboard',
  }
];
