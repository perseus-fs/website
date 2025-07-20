'use client';

import cx from 'classnames';
import React, { ReactElement, useState } from 'react';

type TTabsProps = {
  children: React.ReactNode;
};

const Tabs = ({ children }: TTabsProps) => {
  const childArray = React.Children.toArray(
    children
  ) as ReactElement<TTabProps>[];

  const firstTitle = childArray[0]?.props?.title?.toString() ?? '';
  const [activeTab, setActiveTab] = useState<string>(firstTitle);

  return (
    <div className="flex gap-8 p-2">
      <div className="flex flex-col gap-2 w-96">
        {childArray.map(({ props: { title, icon, subtitle } }) => {
          const isActive = title?.toString() === activeTab;
          return (
            <div
              key={title?.toString()}
              className={cx(
                'flex flex-col p-4 cursor-pointer rounded-lg shadow-md hover:bg-zinc-700 transition-colors',
                isActive
                  ? 'bg-zinc-700 border-l-4 border-zinc-300'
                  : 'bg-zinc-800 border-l-4 border-transparent'
              )}
              onClick={() => setActiveTab(title?.toString() ?? '')}
            >
              <div className="flex items-center gap-2">
                {icon}
                <span className={cx(isActive && 'font-semibold')}>{title}</span>
              </div>
              <span className="text-sm text-current/60">{subtitle}</span>
            </div>
          );
        })}
      </div>

      <div className="flex-1 p-4 bg-zinc-800 rounded-lg shadow-inner h-[400px] overflow-y-auto">
        {
          childArray.find(
            (child) => child.props.title?.toString() === activeTab
          )?.props.children
        }
      </div>
    </div>
  );
};

type TTabProps = {
  title: React.ReactNode;
  icon: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
};

const Tab = ({ children }: TTabProps) => children;

export { Tab, Tabs };
