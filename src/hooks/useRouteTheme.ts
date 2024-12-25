import { useLocation } from 'react-router-dom';
import { routeColors } from '../config/theme';
import { ROUTES } from '../config/routes';
import type { RouteTheme } from '../config/theme';

export function useRouteTheme(): RouteTheme {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes('/challenge')) {
    return routeColors[ROUTES.CHALLENGE];
  }
  if (path.includes('/card')) {
    return routeColors[ROUTES.PERSONA];
  }
  return routeColors[ROUTES.ANSWER]; // default theme
}