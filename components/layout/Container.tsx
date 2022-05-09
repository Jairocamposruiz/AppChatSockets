import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <main
      className={ `w-full overflow-hidden grid place-content-center ${ className }` }
    >
      <div className="grid place-content-center max-w-7xl pt-8">
        { children }
      </div>
    </main>
  );
};
