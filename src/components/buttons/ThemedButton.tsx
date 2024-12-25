import { useRouteTheme } from '../../hooks/useRouteTheme';

interface ThemedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  className?: string;
}

export function ThemedButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
}: ThemedButtonProps) {
  const theme = useRouteTheme();
  
  const baseStyles = 'flex-1 py-2 rounded-lg transition-colors';
  const variantStyles = variant === 'solid'
    ? `bg-[${theme.primary}] text-[${theme.text}] hover:bg-[${theme.hover}]`
    : `border border-[${theme.primary}] text-[${theme.primary}] hover:bg-gray-50`;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}