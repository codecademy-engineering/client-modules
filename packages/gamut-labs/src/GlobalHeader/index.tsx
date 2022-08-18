import { Box } from '@codecademy/gamut';
import { useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';

import { AppHeader, AppHeaderMobile } from '..';
import {
  AppHeaderItem,
  isAppHeaderItemWithHref,
} from '../AppHeader/AppHeaderElements/types';
import {
  FormattedAppHeaderItems,
  FormattedMobileAppHeaderItems,
} from '../AppHeader/types';
import {
  anonDefaultHeaderItems,
  anonDefaultMobileHeaderItems,
  anonLandingHeaderItems,
  anonLandingMobileHeaderItems,
  anonLoginHeaderItems,
  anonLoginMobileHeaderItems,
  anonSignupHeaderItems,
  anonSignupMobileHeaderItems,
  freeHeaderItems,
  freeMobileHeaderItems,
  loadingHeaderItems,
  loadingMobileHeaderItems,
  proHeaderItems,
  proMobileHeaderItems,
} from './GlobalHeaderVariants';
import {
  AnonHeader,
  CrossDeviceItemId,
  FreeHeader,
  LoadingHeader,
  ProHeader,
} from './types';

export type GlobalHeaderProps =
  | AnonHeader
  | FreeHeader
  | ProHeader
  | LoadingHeader;

// Overloading getAppHeaderItems function to return different types based on mobile parameter
function getAppHeaderItems(
  props: GlobalHeaderProps,
  mobile: false
): FormattedAppHeaderItems;

function getAppHeaderItems(
  props: GlobalHeaderProps,
  mobile: true
): FormattedMobileAppHeaderItems;

function getAppHeaderItems(
  props: GlobalHeaderProps,
  mobile: Boolean
): FormattedAppHeaderItems | FormattedMobileAppHeaderItems {
  const { renderBookmarks, hidePricing } = props;
  switch (props.type) {
    case 'anon':
      switch (props.variant) {
        case 'landing':
          if (mobile) {
            return anonLandingMobileHeaderItems(
              hidePricing,
              props.user,
              renderBookmarks
            );
          }
          return anonLandingHeaderItems(
            hidePricing,
            props.user,
            renderBookmarks
          );
        case 'login':
          if (mobile) {
            return anonLoginMobileHeaderItems(
              hidePricing,
              props.user,
              renderBookmarks
            );
          }
          return anonLoginHeaderItems(hidePricing, props.user, renderBookmarks);
        case 'signup':
          if (mobile) {
            return anonSignupMobileHeaderItems(
              hidePricing,
              props.user,
              renderBookmarks
            );
          }
          return anonSignupHeaderItems(
            hidePricing,
            props.user,
            renderBookmarks
          );
        default:
          if (mobile) {
            return anonDefaultMobileHeaderItems(
              hidePricing,
              props.user,
              renderBookmarks
            );
          }
          return anonDefaultHeaderItems(
            hidePricing,
            props.user,
            renderBookmarks
          );
      }
    case 'free':
      if (mobile) {
        return freeMobileHeaderItems(props.user, hidePricing, renderBookmarks);
      }
      return freeHeaderItems(
        props.user,
        hidePricing,
        props.renderFavorites?.desktop,
        renderBookmarks
      );
    case 'pro':
      if (mobile) return proMobileHeaderItems(props.user, renderBookmarks);
      return proHeaderItems(
        props.user,
        props.renderFavorites?.desktop,
        renderBookmarks
      );
    case 'loading':
      if (mobile) return loadingMobileHeaderItems;
      return loadingHeaderItems;
  }
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
  const { action, onLinkAction } = props;
  const theme = useTheme();

  const combinedAction = useCallback(
    (event: React.MouseEvent, item: AppHeaderItem) => {
      action(event, item);
      if (isAppHeaderItemWithHref(item)) onLinkAction?.(event, item);
    },
    [action, onLinkAction]
  );

  // manages global toggle state for items (only 1 open at a time)
  const [openCrossDeviceItemId, setOpenCrossDeviceItemId] = useState(
    CrossDeviceItemId.UNSET
  );

  const { crossDeviceBookmarkParts } = props;

  return (
    <Box as="header" position="sticky" top={0} zIndex={theme.elements.headerZ}>
      <AppHeader
        action={combinedAction}
        items={getAppHeaderItems(props, false)}
        search={props.search}
        {...(props.type === 'anon'
          ? {
              redirectParam: props.redirectParam,
            }
          : props.type === 'loading'
          ? {}
          : {
              notifications: props.notifications,
            })}
        isAnon={props.type === 'anon'}
        openCrossDeviceItemId={openCrossDeviceItemId}
        setOpenCrossDeviceItemId={setOpenCrossDeviceItemId}
        crossDeviceBookmarkParts={crossDeviceBookmarkParts}
      />
      <AppHeaderMobile
        action={combinedAction}
        items={getAppHeaderItems(props, true)}
        {...(props.type === 'anon' || props.type === 'loading'
          ? {}
          : {
              notifications: props.notifications,
            })}
        onSearch={props.search.onSearch}
        redirectParam={props.type === 'anon' ? props.redirectParam : undefined}
        isAnon={props.type === 'anon'}
        openCrossDeviceItemId={openCrossDeviceItemId}
        setOpenCrossDeviceItemId={setOpenCrossDeviceItemId}
        crossDeviceBookmarkParts={crossDeviceBookmarkParts}
      />
      {props.children}
    </Box>
  );
};
