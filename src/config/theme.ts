import { ROUTES } from './routes';

export const routeColors = {
  [ROUTES.PERSONA]: {
    primary: '#A80303', // Red
    hover: '#8B0000',
    text: '#FFFFFF',
  },
  [ROUTES.CHALLENGE]: {
    primary: '#6B4E71', // Purple
    hover: '#5A4260',
    text: '#FFFFFF',
  },
  [ROUTES.ANSWER]: {
    primary: '#51b5b8', // Teal
    hover: '#429597',
    text: '#FFFFFF',
  }
} as const;

export type RouteTheme = typeof routeColors[keyof typeof routeColors];