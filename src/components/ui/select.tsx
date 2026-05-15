import React, { createContext, useContext, useState } from 'react';

interface SelectContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onValueChange?: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelect must be used within a SelectProvider');
  }
  return context;
};

const Select = ({
  children,
  value: controlledValue,
  onValueChange,
}: {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState('');

  const value = controlledValue ?? uncontrolledValue;
  const setValue = onValueChange ?? setUncontrolledValue;

  return (
    <SelectContext.Provider value={{ open, setOpen, value, setValue: setValue as React.Dispatch<React.SetStateAction<string>>, onValueChange }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { setOpen } = useSelect();
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = useSelect();
  return <span>{value || placeholder}</span>;
};

const SelectContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { open } = useSelect();
  if (!open) return null;
  return (
    <div
      className={`absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const SelectItem = ({
  value,
  children,
  className,
  ...props
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { setValue, setOpen, onValueChange } = useSelect();
  const handleClick = () => {
    setValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
    setOpen(false);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
