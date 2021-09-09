import {
  Box,
  FlexBox,
  Notification,
  NotificationList,
  Pattern,
  Text,
} from '@codecademy/gamut';
import { Background } from '@codecademy/gamut-styles';
import React from 'react';

import { NotificationsContentsProps } from './types';
import { useNotificationButtons } from './useNotificationButtons';

export const NotificationsContents: React.FC<NotificationsContentsProps> = (
  props
) => {
  const { actions, notifications } = props;
  const [
    clearButton,
    showButton,
    visibleNotifications,
  ] = useNotificationButtons(props);

  const onNotificationClick = (notification: Notification) => {
    actions.click(notification);

    if (notification.unread) {
      actions.read(notification);
    }
  };

  return (
    <Background
      aria-label={`My ${notifications.length} notifications`}
      bg="white"
      pb={24}
      pt={32}
      role="dialog"
      width={360}
    >
      <FlexBox
        alignItems="center"
        flexDirection="row"
        height="40"
        justifyContent="space-between"
        mb={16}
        px={32}
      >
        <Text as="h1" fontSize={22}>
          My Notifications
        </Text>
        {clearButton}
      </FlexBox>
      <Box px={32}>
        <Pattern name="checkerDense" height="1px" display="flex" />
      </Box>
      <Box maxHeight="520px" overflow="auto">
        <Box pb={16}>
          <NotificationList
            notifications={visibleNotifications}
            onDismiss={actions.dismiss}
            onNotificationClick={onNotificationClick}
          />
        </Box>
        {showButton}
      </Box>
    </Background>
  );
};
