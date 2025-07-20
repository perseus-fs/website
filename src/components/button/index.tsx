import cx from 'classnames';
import { memo } from 'react';

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Variants = 'primary' | 'secondary' | 'danger' | 'outline';

const variantClasses: Record<Variants, string> = {
  primary:
    'bg-zinc-900 text-zinc-100 hover:bg-zinc-800 focus:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-zinc-600',
  secondary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600',
  danger:
    'bg-zinc-700 text-zinc-100 hover:bg-zinc-800 focus:ring-zinc-400 dark:bg-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600',
  outline:
    'bg-transparent border border-zinc-900 text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-400 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600'
};

interface ButtonProps extends TButtonProps {
  variant?: Variants;
  className?: string;
  leftSlot?: React.ReactNode;
}

const Button = memo(
  ({
    children,
    variant = 'primary',
    className = '',
    leftSlot,
    ...props
  }: ButtonProps) => {
    return (
      <button
        className={cx(
          'flex items-center font-normal px-4 py-2 text-sm cursor-pointer rounded-lg transition-colors duration-200 shadow-sm active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          'md:px-3 md:py-2 md:text-base',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {leftSlot && <span className="mr-2 flex items-center">{leftSlot}</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
