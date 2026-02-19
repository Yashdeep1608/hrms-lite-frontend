import { MenuItem } from '../../shared/models/navigation.model';

export class MenuUtils {
  static isVisible(
    item: MenuItem
  ): boolean {
    // Fallback: check userPermissions (user-specific from backend)
    return true
  }

  static filterMenu(
  items: MenuItem[],
  role?: string
): MenuItem[] {
  return items
    .map((item) => {
      const visibleChildren = item.children
        ? this.filterMenu(item.children)
        : undefined;

      const isItemVisible = this.isVisible(item);

      // ✅ Case 1: Item visible (normal behavior)
      if (isItemVisible || (visibleChildren && visibleChildren.length > 0)) {
        const filteredItem: MenuItem = {
          ...item,
          ...(visibleChildren?.length ? { children: visibleChildren } : {}),
        };
        return filteredItem;
      }

      // ✅ Case 2: Not visible, but role is admin → mark locked
      if (role === "admin") {
        const lockedItem: MenuItem = {
          ...item,
          locked: true,
        };
        return lockedItem;
      }

      // ✅ Case 3: Not visible, non-admin → hide
      return null;
    })
    .filter((item): item is MenuItem => item !== null);
}
  static expandMenusForRoute(
    menuItems: MenuItem[],
    currentRoute: string
  ): MenuItem[] {
    return menuItems.map((item) => {
      if (item.children?.length) {
        const expanded = item.children.some((child) =>
          currentRoute.startsWith(child.route || '')
        );

        return {
          ...item,
          expanded,
          children: this.expandMenusForRoute(item.children, currentRoute),
        };
      }
      return item;
    });
  }
}
