import { ReactNode } from 'react';

import { AppHeaderItem } from '../AppHeader/AppHeaderElements/types';
import {
  FormattedAppHeaderItems,
  FormattedMobileAppHeaderItems,
} from '../AppHeader/types';
import {
  businessSolutions,
  catalogDropdown,
  communityDropdown,
  favorites,
  freeProfile,
  login,
  logo,
  myHome,
  pricingDropdown,
  pricingLink,
  proProfile,
  resourcesDropdown,
  signUp,
  tryProForFree,
  unpausePro,
  upgradeToPro,
} from './GlobalHeaderItems';
import { User } from './types';

// Simplify pricing dropdown to a normal link for users in India
const pricingComponent = (user?: User) =>
  user?.geo === 'IN' ? pricingLink : pricingDropdown;

const anonHeaderItems = (
  renderLogin: boolean,
  renderSignUp: boolean,
  hidePricing?: boolean,
  user?: User
): FormattedAppHeaderItems => {
  const leftItems: AppHeaderItem[] = [
    logo,
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    ...(hidePricing ? [] : [pricingComponent(user)]),
    businessSolutions,
  ];

  const rightItems: AppHeaderItem[] = [];
  if (renderLogin) {
    rightItems.push(login);
  }
  if (renderSignUp) {
    rightItems.push(signUp);
  }

  return {
    left: leftItems,
    right: rightItems,
  };
};

const anonMobileHeaderItems = (
  renderLogin: boolean,
  renderSignUp: boolean,
  hidePricing?: boolean,
  user?: User
): FormattedMobileAppHeaderItems => {
  const leftItems: AppHeaderItem[] = [logo];

  const rightItems: AppHeaderItem[] = [];
  if (renderLogin) {
    rightItems.push(login);
  }
  if (renderSignUp) {
    rightItems.push(signUp);
  }

  const mainMenuItems: AppHeaderItem[] = [
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    ...(hidePricing ? [] : [pricingComponent(user)]),
    businessSolutions,
  ];

  return {
    left: leftItems,
    right: rightItems,
    mainMenu: mainMenuItems,
  };
};

export const anonDefaultHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedAppHeaderItems => {
  return anonHeaderItems(true, true, hidePricing, user);
};

export const anonDefaultMobileHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedMobileAppHeaderItems => {
  return anonMobileHeaderItems(true, true, hidePricing, user);
};

export const anonLandingHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedAppHeaderItems => {
  return anonHeaderItems(true, false, hidePricing, user);
};

export const anonLandingMobileHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedMobileAppHeaderItems => {
  return anonMobileHeaderItems(true, false, hidePricing, user);
};

export const anonLoginHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedAppHeaderItems => {
  return anonHeaderItems(false, true, hidePricing, user);
};

export const anonLoginMobileHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedMobileAppHeaderItems => {
  return anonMobileHeaderItems(false, true, hidePricing, user);
};

export const anonSignupHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedAppHeaderItems => {
  return anonHeaderItems(true, false, hidePricing, user);
};

export const anonSignupMobileHeaderItems = (
  hidePricing?: boolean,
  user?: User
): FormattedMobileAppHeaderItems => {
  return anonMobileHeaderItems(true, false, hidePricing, user);
};

export const freeHeaderItems = (
  user: User,
  hidePricing?: boolean,
  renderFavorites?: () => ReactNode
): FormattedAppHeaderItems => {
  const specialLogo = { ...logo, checkMini: true };

  const leftItems: AppHeaderItem[] = [
    specialLogo,
    myHome,
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    ...(hidePricing ? [] : [pricingComponent(user)]),
    businessSolutions,
  ];

  const rightItems: AppHeaderItem[] = [];
  if (renderFavorites) {
    rightItems.push(favorites(renderFavorites));
  }
  rightItems.push(freeProfile(user));
  rightItems.push(
    user.showProUpgrade
      ? upgradeToPro(user.proCheckoutUrl)
      : tryProForFree(user.proCheckoutUrl)
  );

  return {
    left: leftItems,
    right: rightItems,
  };
};

export const freeMobileHeaderItems = (
  user: User,
  hidePricing?: boolean
): FormattedMobileAppHeaderItems => {
  const specialLogo = { ...logo, checkMini: true };
  const leftItems: AppHeaderItem[] = [specialLogo];
  const rightItems: AppHeaderItem[] = [];
  const mainMenuItems: AppHeaderItem[] = [
    myHome,
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    ...(hidePricing ? [] : [pricingComponent(user)]),
    businessSolutions,
    freeProfile(user, true),
    user.showProUpgrade
      ? upgradeToPro(user.proCheckoutUrl)
      : tryProForFree(user.proCheckoutUrl),
  ];

  return {
    left: leftItems,
    right: rightItems,
    mainMenu: mainMenuItems,
  };
};

export const proHeaderItems = (
  user: User,
  renderFavorites?: () => ReactNode
): FormattedAppHeaderItems => {
  const leftItems: AppHeaderItem[] = [
    logo,
    myHome,
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    businessSolutions,
  ];

  const rightItems: AppHeaderItem[] = [];
  if (renderFavorites) {
    rightItems.push(favorites(renderFavorites));
  }
  rightItems.push(proProfile(user));
  if (user.isPaused) {
    rightItems.push(unpausePro);
  }

  return {
    left: leftItems,
    right: rightItems,
  };
};

export const proMobileHeaderItems = (
  user: User
): FormattedMobileAppHeaderItems => {
  const leftItems: AppHeaderItem[] = [logo];
  const rightItems: AppHeaderItem[] = [];

  const mainMenuItems: AppHeaderItem[] = [
    myHome,
    catalogDropdown(user?.hideCareerPaths),
    resourcesDropdown,
    communityDropdown,
    businessSolutions,
    proProfile(user),
  ];

  if (user.isPaused) {
    mainMenuItems.push(unpausePro);
  }

  return {
    left: leftItems,
    right: rightItems,
    mainMenu: mainMenuItems,
  };
};

export const loadingHeaderItems: FormattedAppHeaderItems = {
  left: [logo],
  right: [],
};

export const loadingMobileHeaderItems: FormattedMobileAppHeaderItems = {
  left: [logo],
  right: [],
  mainMenu: [],
};
