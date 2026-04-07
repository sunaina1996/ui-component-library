import React, { useState } from 'react';

export interface NavItem {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface NavbarProps {
  logo?: string;
  title?: string;
  subtitle?: string;
  items: NavItem[];
  actionLabel?: string;
  onActionClick?: () => void;
  className?: string;
  containerClassName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  title,
  subtitle = 'Modern UI navigation',
  items,
  actionLabel,
  onActionClick,
  className = '',
  containerClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full border-b bg-white shadow-sm ${className}`}>
      <div className={`flex w-full max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 py-4`}>
        
        {/* Left */}
        <div className="flex items-center gap-3">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
          )}
          <div>
            {title && <p className="text-lg font-semibold text-slate-900">{title}</p>}
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.active
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          {actionLabel && (
            <button
              onClick={onActionClick}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm text-white hover:bg-slate-800"
            >
              {actionLabel}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border px-3 py-2 rounded"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};