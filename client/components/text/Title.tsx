import { theme } from '@theme';

interface Props {
  className?: string;
  label: string;
}

export const Title = ({ className, label }: Props) => {
  return (
    <div
      className={ `group cursor-default w-fit flex flex-col my-4 mx-4 ${ className }` }
    >
      <div
        className={`h-1 w-10 group-hover:w-full duration-500 self-end ${theme.bgActive}`}
      />
      <h1 className={`text-3xl sm:text-4xl font-bold ${theme.textColor}`}>{ label }</h1>
      <div
        className={`h-1 w-10 mt-1 group-hover:w-full duration-500 ${theme.bgActive}`}
      />
    </div>
  );
};
