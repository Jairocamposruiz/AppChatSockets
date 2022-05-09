import { theme } from '@theme';

interface Props {
  className?: string;
}

export const SendMessage = ({ className }: Props) => {
  return (
    <div
      className={ `border-t-4 w-full h-40 p-4 flex gap-2 ${ className }` }
    >
      <textarea
        placeholder={'Mensaje...'}
        className={ `w-full h-full rounded-lg p-2 font-semibold resize-none ${theme.input}` }
      />

      <button
        className={`flex self-end rounded p-2 font-bold h-10 ${theme.buttonPrimary}`}
      >
        <p>Enviar</p>
      </button>
    </div>
  );
};
