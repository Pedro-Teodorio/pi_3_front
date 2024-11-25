import * as Icons from 'lucide-react';

export const Icon = ({ name, className, ...props }) => {
  const IconComponent = Icons[name];
  return IconComponent ? (
    <IconComponent {...props} className={className} />
  ) : null;
};
