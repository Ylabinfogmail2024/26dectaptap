// src/hooks/useRouteColors.ts
import { useLocation } from 'react-router-dom';
import { routeColors } from '../config/theme';

export function useRouteColors() {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes('/challenge')) {
    return routeColors.challenge;
  }
  return routeColors.persona; // default/persona route
}
