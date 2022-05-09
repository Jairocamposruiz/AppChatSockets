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
      <div className="w-screen flex h-full h-content">
        { children }
      </div>
    </main>
  );
};
