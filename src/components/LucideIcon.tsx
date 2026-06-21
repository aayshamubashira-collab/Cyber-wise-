import * as Icons from "lucide-react";
import React from "react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  key?: React.Key;
}

export default function LucideIcon({ name, className, size = 20, style }: LucideIconProps) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} style={style} />;
  }
  return <IconComponent className={className} size={size} style={style} />;
}

