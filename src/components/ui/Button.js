import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-accent hover:bg-accent/90 text-text',
  secondary: 'bg-surface hover:bg-surface/90 text-text',
  outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  ghost: 'text-accent hover:bg-accent/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Reusable Button component with multiple variants and sizes
 * Supports navigation via React Router Link, external links via anchor tags, or button functionality
 */
const Button = memo(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link 
        to={to} 
        className={classes} 
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button; 