import { Chat } from '@interfaces/models';
import { theme } from '@theme';
import { useState } from 'react';

import { ButtonOpenClose } from '@components/buttons/ButtonOpenClose';
import { ListChatItem } from '@components/chat/ListChatItem';
import { Title } from '@components/text/Title';

interface Props {
  className?: string;
  title: string;
  chats: Chat[];
}

export const ListChat = ({ className, title, chats }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenClose = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={ `h-full sm:w-6/12 md:w-4/12 border-r-2 ${theme.borderColor} ${ (isOpen) ? 'flex-col' : 'hidden' } ${ className }` }
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
                key={ chat.uid }
                chat={ chat }
              />
            ))
          }
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
