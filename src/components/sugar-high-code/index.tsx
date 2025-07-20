import cx from 'classnames';
import { memo } from 'react';
import { highlight } from 'sugar-high';

type TSugarHighCodeProps = {
  code: string;
  language?: string;
  className?: string;
};

const SugarHighCode = memo(
  ({
    code,
    language = 'javascript',
    className = '',
    ...props
  }: TSugarHighCodeProps) => {
    const html = highlight(code);

    return (
      <pre
        className={cx(
          'bg-gray-100 dark:bg-zinc-800 rounded-lg text-sm overflow-x-auto',
          className
        )}
        {...props}
      >
        <code dangerouslySetInnerHTML={{ __html: html }}></code>
      </pre>
    );
  }
);
SugarHighCode.displayName = 'SugarHighCode';

export { SugarHighCode };
