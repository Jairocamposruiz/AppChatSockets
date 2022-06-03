import { InputText } from '@components/input/InputText';
import { alertError, alertSuccess } from '@helpers/alert';
import { useForm } from '@hooks/useForm';
import { Chat } from '@interfaces/models';
import { SocketContext } from '@store/Socket';
import { theme } from '@theme';
import { FormEvent, useContext, useState } from 'react';

import { ButtonOpenClose } from '@components/buttons/ButtonOpenClose';
import { ListChatItem } from '@components/chat/ListChatItem';
import { Title } from '@components/text/Title';

interface Props {
  className?: string;
  title: string;
  chats: Chat[];
  isPublic?: boolean;
}

export const ListChat = ({ className, title, chats, isPublic = false }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenClose = () => setIsOpen(!isOpen);
  const { socket, online } = useContext(SocketContext);
  const { name, onChange, clear } = useForm({ name: '' });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.length < 3) return;

    if(!online) {
      alertError('Error en la conexión', 'Comprueba tu conexión a internet');
    }

    const existChat = chats.find(chat => chat.name === name);
    if(existChat) {
      alertError('Error', 'Ya existe un chat con ese nombre');
      clear();
      return;
    }

    socket?.emit('create-chat', {
      name,
      icon: 'aaa' //TODO: Agregar opcion para cambiar icono
    });

    alertSuccess('La sala de chat se creó correctamente');

    clear();
  };

  return (
    <>
      <div
        className={ `h-full sm:w-6/12 md:w-4/12 border-r-2 ${ theme.borderColor } ${ (isOpen) ? 'flex-col' : 'hidden' } ${ className }` }
      >
        <div
          className="flex justify-between"
        >
          <Title
            className="text-center"
            label={ title }
          />
          <ButtonOpenClose
            onClick={ handleOpenClose }
            isOpen={ isOpen }
          />
        </div>

        <div
          className={ `h-full overflow-y-scroll pb-40` }
        >
          {
            chats.map((chat) => (
              <ListChatItem
                isPublic={isPublic}
                key={ chat.uid }
                chat={ chat }
              />
            ))
          }
          <form
            onSubmit={ onSubmit }
            className={ `place-content-center mt-4 ${ (isPublic) ? 'flex flex-col' : 'hidden' } ${ theme.bgCard }` }
          >
            <InputText
              onChange={ onChange }
              placeholder={ 'Nombre del nuevo chat público' }
              className={ 'mx-2' }
              name={ 'name' }
              value={ name }
              type={ 'text' }
              required
              minLength={ 3 }
              maxLength={ 24 }
            />
            <button
              type={ 'submit' }
              className={ `w-full text-center p-4 font-bold place-content-center ${ theme.textColor } ${ theme.buttonPrimary }` }
            >
              Nuevo Chat
            </button>
          </form>
        </div>
      </div>

      <ButtonOpenClose
        className={ `h-20 absolute ${ (isOpen) ? 'hidden' : 'flex' }` }
        onClick={ handleOpenClose }
        isOpen={ isOpen }
      />
    </>
  );
};
