import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name?: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5' }) => {
  if (!name) {
    return <LucideIcons.Sparkles className={className} />;
  }

  // Look up icon in lucide-react exports
  const IconComponent = (LucideIcons as Record<string, any>)[name] || LucideIcons.Sparkles;

  return <IconComponent className={className} />;
};
