import React from 'react';

import { NavBar } from '../NavBar';

interface IProps {
  children: React.ReactNode;
}

type Props = IProps;

function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
}

export default MainLayout;
