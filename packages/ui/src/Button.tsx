import cx from 'classnames';

export const Button = ({
  primary,
  label,
  size,
  backgroundColor = '#cf2d6c',
  color = 'white',
  link,
}: {
  primary?: boolean;
  label: string;
  size?: 'sm' | 'lg';
  backgroundColor?: string;
  color?: string;
  link?: string;
}) => {
  return (
    <a href={link}>
      <button
        style={{ backgroundColor, color }}
        className={cx(
          'ui-rounded-md ui-border-2 ui-font-medium ui-no-underline hover:ui-bg-gray-300 md:ui-px-10 md:ui-py-3 md:ui-text-lg md:ui-leading-6',
          {
            'ui-px-8 ui-py-3 ui-text-2xl': size === 'lg',
            'ui-px-4 ui-py-2 ui-text-base': size === 'sm',
            'ui-border-transparent': primary === true,
            'ui-border-black': primary === false,
          }
        )}
      >
        {label}
      </button>
    </a>
  );
};
