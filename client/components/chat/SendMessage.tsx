import { FormEvent, useContext } from 'react';

import { useForm } from '@hooks/useForm';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';
import { SocketContext } from '@store/Socket';
import { theme } from '@theme';

interface Props {
  className?: string;
}

export const SendMessage = ({ className }: Props) => {
  const { message, onChange, setFormValues } = useForm({
    message: '',
  });
  const { uid } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const { chatState } = useContext(ChatContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;

    setFormValues({
      message: '',
    });

    socket?.emit('private-message', {
      from: uid,
      to: chatState.activeChat?.uid,
      message,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className={ `border-t-4 w-full h-40 p-4 flex gap-2 ${ className }` }
    >
      <textarea
        name={'message'}
        value={message}
        onChange={onChange}
        placeholder={ 'Mensaje...' }
        className={ `w-full h-full rounded-lg p-2 font-semibold resize-none ${ theme.input }` }
      />

      <button
        type={'submit'}
        className={ `flex self-end rounded p-2 font-bold h-10 ${ theme.buttonPrimary }` }
      >
        <p>Enviar</p>
      </button>
    </form>
  );
};
