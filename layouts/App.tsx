import { ReactNode } from 'react';
import { Header, Navigator } from '@/components';

interface FrameProps {
  app: ReactNode;
  sidebar: ReactNode;
  detail: ReactNode;
}
const Frame = ({ app, sidebar, detail }: FrameProps) => (
  <div className='grid grid-cols-[minmax(0,_1fr)_300px] grid-rows-[minmax(900px,_1fr)_300px]'>
    <div>{app}</div>
    <div className='row-span-2'>{sidebar}</div>
    <div>{detail}</div>
  </div>
);

const AppLayout = ({ app, sidebar, detail }: FrameProps) => {
  return (
    <>
      <Header />
      <Navigator />
      <Frame app={app} sidebar={sidebar} detail={detail} />
    </>
  );
};

export default AppLayout;