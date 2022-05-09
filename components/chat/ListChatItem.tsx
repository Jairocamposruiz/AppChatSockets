import { Icon } from '@components/icons/Icon';
import { theme } from '@theme';

interface Props {
  className?: string;
  name: string;
  icon: string;
  online: boolean;
}

export const ListChatItem = ({ className, name, icon, online }: Props) => {
  return (
    <div
      className={ `h-24 border-t-2 p-2 cursor-pointer flex ${theme.chatListItem} ${ className }` }
    >
      <Icon
        className={`h-full text-gray-400`}
        icon={icon}
      />

      <div className={`flex-1 ml-4`}>
        <p
          className={`text-xl font-medium text-gray-900`}
        >
          {name}
        </p>
        <p
          className={`mt-1 ${online ? 'text-green-500' : 'text-red-500'} text-lg`}
        >
          {online ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};
