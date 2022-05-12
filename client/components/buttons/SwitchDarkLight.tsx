import { useEffect, useState, useContext } from 'react';

import { UIContext } from '@store/UI';
import { Icon } from '@components/icons/Icon';

export interface Props {
  className?: string;
}

const light = {
  type: 'light',
  colorBack: 'bg-gray-800',
  colorFront: 'bg-blue-600',
  colorIcon: 'text-yellow-400',
  position: 'left-0',
};

const dark = {
  type: 'dark',
  colorBack: 'bg-slate-200',
  colorFront: 'bg-blue-600',
  colorIcon: 'text-blue-600',
  position: 'right-0',
};

export const SwitchDarkLight = ({ className }: Props) => {

  const { theme, setDarkTheme, setLightTheme } = useContext(UIContext);
  const [stateSwitch, setStateSwitch] = useState(light);

  const handleClick = () => {
    if (stateSwitch.type === 'light') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      setStateSwitch(light);
    } else {
      setStateSwitch(dark);
    }
  }, [theme]);

  return (
    <div
      className={ `${ className } cursor-pointer` }
      onClick={ handleClick }
    >
      <div className={ `${ stateSwitch.colorBack } h-6 w-12 rounded-full relative transition` }>
        <div
          className={ `${ stateSwitch.colorFront } ${ stateSwitch.position } w-6 h-6 rounded-full absolute transition z-10` }
        />
        <Icon icon={ 'moon' } className={ `${ stateSwitch.colorIcon } w-5 absolute left-0.5 top-1` } />
        <Icon icon={ 'sun' } className={ `${ stateSwitch.colorIcon } w-5 absolute right-0.5 top-1` } />
      </div>
    </div>
  );
};
