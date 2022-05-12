import { Messages } from '@components/chat/Messages';
import { SendMessage } from '@components/chat/SendMessage';
import { theme } from '@theme';

interface Props {
  className?: string;
  isPublic?: boolean;
  name: string;
}

//TODO: Ocultar chat en tamaño sm si está abierta la lista

export const Chat = ({ className, name, isPublic = false }: Props) => {
  return (
    <div
      className={ `flex flex-col flex-1 ${ className }` }
    >
      <h2
        className={ `text-2xl sm:text-3xl font-bold my-5 ml-20 ${theme.textColor}` }
      >
        {name}
      </h2>

      <Messages
        isPublic={isPublic}
        className={`flex-1`}
      />

      <SendMessage
        isPublic={isPublic}
      />
    </div>
  );
};
