import { Messages } from '@components/chat/Messages';
import { SendMessage } from '@components/chat/SendMessage';

interface Props {
  className?: string;
  name: string;
}

//TODO: Ocultar chat en tamaño sm si está abierta la lista

export const Chat = ({ className, name }: Props) => {
  return (
    <div
      className={ `flex flex-col flex-1 ${ className }` }
    >
      <h2
        className="text-2xl sm:text-3xl font-bold my-5 ml-20"
      >
        {name}
      </h2>

      <Messages
        className={`flex-1`}
      />

      <SendMessage />
    </div>
  );
};
