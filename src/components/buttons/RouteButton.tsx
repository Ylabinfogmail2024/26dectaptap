interface RouteButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  className?: string;
}

export function RouteButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
}: RouteButtonProps) {
  const baseStyles = 'flex-1 py-2 rounded-lg transition-colors';
  const variantStyles =
    variant === 'solid'
      ? 'bg-[#A80303] text-white hover:opacity-90'
      : 'border border-[#A80303] text-[#A80303] hover:bg-gray-50';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}