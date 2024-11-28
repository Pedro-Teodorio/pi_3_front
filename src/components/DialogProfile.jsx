import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export function DialogProfile({
  children,
  title,
  description,
  setIsOpen,
  isOpen,
  className
}) {
  return (
    <Dialog  open={isOpen} onOpenChange={setIsOpen}  >
      <DialogContent className={`bg-zinc-100 ${className}`} >
        <DialogHeader>
          <DialogTitle className="font-bold">{title}</DialogTitle>
          <DialogDescription className="font-semibold text-zinc-500">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
