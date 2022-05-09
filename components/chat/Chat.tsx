interface Props {
  className?: string;
}

export const Chat = ({ className }: Props) => {
  return (
    <div
      className={ `${ className }` }
    >
      <h1>Chat</h1>
    </div>
  );
};
