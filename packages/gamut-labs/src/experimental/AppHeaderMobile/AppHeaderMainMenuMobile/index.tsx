import React, { useState } from 'react';

import {
  AppHeaderClickHandler,
  AppHeaderDropdownItem,
  AppHeaderItem,
} from '../../AppHeader/AppHeaderElements/types';
import { AppHeaderLinkMobile } from '../AppHeaderLinkMobile';
import { AppHeaderSubMenuMobile } from '../AppHeaderSubMenuMobile';
import { AppHeaderSubMenuTarget } from '../AppHeaderSubMenuTarget';

export type AppHeaderMainMenuMobileProps = {
  action: AppHeaderClickHandler;
  items: AppHeaderItem[];
};

export const AppHeaderMainMenuMobile: React.FC<AppHeaderMainMenuMobileProps> = ({
  items,
  action,
}) => {
  const [subMenuItem, setSubMenuItem] = useState<AppHeaderDropdownItem>();

  const openSubMenu = (
    event: React.MouseEvent,
    item: AppHeaderDropdownItem
  ) => {
    action(event, item); // handles the tracking
    setSubMenuItem(item);
  };

  const closeSubMenu = () => {
    setSubMenuItem(undefined);
  };

  const mapItemToElement = (
    item: AppHeaderItem,
    action: AppHeaderClickHandler
  ) => {
    switch (item.type) {
      case 'link':
        return <AppHeaderLinkMobile item={item} action={action} />;
      case 'dropdown':
        return <AppHeaderSubMenuTarget item={item} openSubMenu={openSubMenu} />;
    }
  };

  return (
    <>
      {!!subMenuItem ? (
        <AppHeaderSubMenuMobile
          handleClose={closeSubMenu}
          action={action}
          item={subMenuItem}
        />
      ) : (
        items.map((item) => mapItemToElement(item, action))
      )}
    </>
  );
};
