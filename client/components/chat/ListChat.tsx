import { ButtonOpenClose } from '@components/buttons/ButtonOpenClose';
import { ListChatItem } from '@components/chat/ListChatItem';
import { Title } from '@components/text/Title';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';
import { useContext, useState } from 'react';

interface Props {
  className?: string;
  title: string;
}

export const ListChat = ({ className, title }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenClose = () => setIsOpen(!isOpen);

  const { chatState } = useContext(ChatContext);
  const { uid } = useContext(AuthContext);
  const chats = chatState

  return (
    <>
      <div
        className={ `h-full sm:w-6/12 md:w-4/12 border-r-2 ${(isOpen) ? 'flex-col' : 'hidden'} ${ className }` }
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
            isOpen={isOpen}
          />
        </div>

        <div
          className={ `h-full overflow-y-scroll` }
        >
          <ListChatItem
            name={'Fotografía'}
            icon={'user'}
            online={true}
          />
          <ListChatItem
            name={'Fotografía'}
            icon={'user'}
            online={true}
          />
          <ListChatItem
            name={'Fotografía'}
            icon={'user'}
            online={true}
          />
          <ListChatItem
            name={'Fotografía'}
            icon={'user'}
            online={false}
          />

        </div>
      </div>

      <ButtonOpenClose
        className={`h-20 absolute ${(isOpen) ? 'hidden' : 'flex'}`}
        onClick={ handleOpenClose }
        isOpen={isOpen}
      />
    </>
  );
};
