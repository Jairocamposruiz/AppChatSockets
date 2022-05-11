interface Props {
  className?: string;
}

export const ChatUnselect = ({ className }: Props) => {
  return (
    <div
      className={ `grid place-content-center w-full ${ className }` }
    >
      <h2
        className={`text-2xl font-bold`}
      >Seleccione un Chat</h2>
    </div>
  );
};
