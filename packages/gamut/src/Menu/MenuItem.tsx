import { GamutIconProps } from '@codecademy/gamut-icons';
import { ComponentProps, forwardRef, MutableRefObject } from 'react';

import {
  ListButton,
  ListItem,
  ListItemProps,
  ListLink,
  ListLinkProps,
} from './elements';
import { useMenuContext } from './MenuContext';

const activePropnames = {
  navigation: 'active-navlink',
  action: 'active',
  select: 'selected',
};

const activeAriaProps = {
  navigation: 'location',
  action: 'true',
  select: 'true',
};

export const MenuItem = forwardRef<
  HTMLLIElement | HTMLAnchorElement | HTMLButtonElement,
  Omit<
    ComponentProps<typeof ListItem>,
    'variant' | 'selected' | 'active-navlink'
  > &
    Partial<Pick<HTMLAnchorElement, 'href' | 'target' | 'rel'>> & {
      icon?: React.ComponentType<GamutIconProps>;
    }
>(({ href, target, children, active, icon: Icon, ...props }, ref) => {
  const { variant, ...rest } = useMenuContext();
  const activeProp = activePropnames[variant];
  const computed = {
    ...props,
    ...rest,
    // variant: variant === 'select' ? 'select' : 'link',
    role: 'menuitem',
    [activeProp]: active,
    'aria-current': active ? activeAriaProps[variant] : undefined,
  } as ListItemProps;

  const content = (
    <>
      {Icon && (
        <Icon
          size={rest.spacing === 'condensed' ? 16 : 24}
          mr={12}
          data-testid="menuitem-icon"
        />
      )}
      {children}
    </>
  );

  if (href) {
    const linkRef = ref as MutableRefObject<HTMLAnchorElement>;

    return (
      <ListItem role="none">
        <ListLink
          // {...(computed as ListLinkProps)}
          role="menuitem"
          aria-current={active ? 'location' : undefined}
          href={href}
          ref={linkRef}
          target={target}
        >
          {content}
        </ListLink>
      </ListItem>
    );
  }

  if (props.onClick) {
    const buttonRef = ref as MutableRefObject<HTMLButtonElement>;

    return (
      <ListItem role="none">
        <ListButton {...(computed as ListLinkProps)} ref={buttonRef}>
          {content}
        </ListButton>
      </ListItem>
    );
  }

  const liRef = ref as MutableRefObject<HTMLLIElement>;

  return (
    <ListItem {...computed} ref={liRef}>
      {content}
    </ListItem>
  );
});
