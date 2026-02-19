// Plan-based options
// Menu item interface
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  expanded?: boolean;
  locked?:boolean;
  children?: MenuItem[];
}