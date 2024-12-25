interface ActionButtonProps {
  icon: string;
  iconBg?: string;
  border?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ActionButton({ 
  icon, 
  iconBg = "bg-white", 
  border = false,
  children,
  onClick,
  className = ""
}: ActionButtonProps) {
  const buttonClass = border 
    ? `w-full flex items-center gap-4 border-2 border-[#A80303] text-[#A80303] rounded-full py-2 px-4 ${className}`
    : `w-full flex items-center gap-4 bg-[#A80303] text-white rounded-full py-2 px-4 ${className}`;

  const iconClass = border
    ? "w-6 h-6 border-2 border-[#A80303] rounded-full flex items-center justify-center"
    : `w-6 h-6 ${iconBg} rounded-full flex items-center justify-center`;

  return (
    <button className={buttonClass} onClick={onClick}>
      <div className={iconClass}>
        <img src={icon} alt="" className="w-4 h-4" />
      </div>
      {children}
    </button>
  );
}