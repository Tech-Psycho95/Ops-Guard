import React from 'react';

const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="relative">
    <select
      className="h-10 w-full appearance-none rounded-md border border-gray-300 bg-transparent pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
        <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.434l2.904-2.886c.436-.446 1.144-.446 1.58 0 .436.446.436 1.167 0 1.613l-3.7 3.762c-.436.446-1.144.446-1.58 0l-3.7-3.762c-.436-.446-.436-1.167 0-1.613z" />
      </svg>
    </div>
  </div>
);

const SelectTrigger = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
);

const SelectValue = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span {...props}>{children}</span>
);

const SelectContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg" {...props}>
    {children}
  </div>
);

const SelectItem = ({ children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) => (
  <option {...props}>{children}</option>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
