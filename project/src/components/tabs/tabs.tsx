import React, { ReactNode } from 'react';
type TabProps = {
  title?: string;
  children?: ReactNode;
}

const Tabs: React.FunctionComponent<TabProps> = ({title, children}) =>
  (
    <>
      {title}
      {children}
    </>
  );

export default Tabs;
