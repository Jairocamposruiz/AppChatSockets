import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const ContainerScreen = ({ className, children }: Props) => {
  return (
    <main
      className={ `w-full h-full overflow-hidden grid ${ className }` }
    >
      <div className="w-screen h-full h-9/10">
        { children }
      </div>
    </main>
  );
};
