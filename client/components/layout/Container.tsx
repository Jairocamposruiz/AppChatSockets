import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
  center?: boolean;
}

export const Container = ({ className, children, center }: Props) => {
  return (
    <main
      className={ `w-screen h-full overflow-hidden flex place-content-center ${ className }` }
    >
      <div className={ `flex flex-col w-screen max-w-3xl py-8 ${ (center) ? 'items-center justify-center' : '' }` }>
        { children }
      </div>
    </main>
  );
};
