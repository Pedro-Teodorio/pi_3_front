import * as Icons from 'lucide-react';
export const Icon = ({ name, size, color }) => {
  const IconComponent = Icons[name];
  return IconComponent ? (
    <IconComponent className={`size-${size} ${color}`} />
  ) : null;
};
