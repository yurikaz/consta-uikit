import './HeaderMinifyLoginExample.css';

import React, { useState } from 'react';

import { IconChat } from '../../../../../icons/IconChat/IconChat';
import { IconRing } from '../../../../../icons/IconRing/IconRing';
import { cn } from '../../../../../utils/bem';
import { Text } from '../../../../Text/Text';
import {
  Header,
  HeaderButton,
  HeaderLogin,
  HeaderLogo,
  HeaderMenu,
  HeaderModule,
  HeaderSearchBar,
} from '../../../Header';
import { SearchBarPropOnChange, SearchBarPropOnSearch } from '../../../SearchBar/HeaderSearchBar';

const cnExample = cn('HeaderMinifyLoginExample');

export function HeaderMinifyLoginExample() {
  const [value, setValue] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const handleChange: SearchBarPropOnChange = ({ value }) => setValue(value);
  // eslint-disable-next-line no-alert
  const handleSearch: SearchBarPropOnSearch = ({ value }) =>
    alert(`Произведен поиск, запрос - ${value} `);
  const handleLogin = () => setAuthorized(!authorized);

  const menuItems = [
    {
      label: 'Проекты',
      href: '#projects',
      active: true,
    },
    {
      label: 'Задачи',
      href: '#tasks',
    },
    {
      label: 'Какой-то пункт',
      onClick: () => alert('Какой-то пункт'),
    },
  ];

  return (
    <Header
      className={cnExample()}
      leftSide={
        <>
          <HeaderModule>
            <HeaderLogo>
              <Text as="p" size="l" weight="bold">
                Logotype
              </Text>
            </HeaderLogo>
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderSearchBar
              placeholder="я ищу"
              label="поиск"
              value={value}
              onChange={handleChange}
              onSearch={handleSearch}
            />
          </HeaderModule>
          <HeaderModule indent="l">
            <HeaderMenu items={menuItems} />
          </HeaderModule>
        </>
      }
      rightSide={
        <>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconChat} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderButton iconLeft={IconRing} />
          </HeaderModule>
          <HeaderModule indent="s">
            <HeaderLogin
              className={cnExample('Login', { authorized })}
              authorized={authorized}
              personName="Вадим Матвеев"
              personInfo="В другом офисе"
              personStatus="available"
              personAvatarUrl="https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png"
              onClick={handleLogin}
              isMinified
            />
          </HeaderModule>
        </>
      }
    />
  );
}
