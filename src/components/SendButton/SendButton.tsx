import * as React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {useTheme} from '../../hooks';

import {L10nContext} from '../../utils';
import {SendIcon} from '../../assets/icons';

export interface SendButtonPropsAdditionalProps {
  touchableOpacityProps?: TouchableOpacityProps;
  color?: string;
}

export interface SendButtonProps extends SendButtonPropsAdditionalProps {
  /** Callback for send button tap event */
  onPress: () => void;
}

export const SendButton = ({
  onPress,
  color,
  touchableOpacityProps,
}: SendButtonProps) => {
  const l10n = React.useContext(L10nContext);
  const theme = useTheme();
  const handlePress = (event: GestureResponderEvent) => {
    onPress();
    touchableOpacityProps?.onPress?.(event);
  };

  return (
    <TouchableOpacity
      accessibilityLabel={l10n.components.sendButton.accessibilityLabel}
      accessibilityRole="button"
      testID="send-button"
      {...touchableOpacityProps}
      onPress={handlePress}
      style={[styles.sendButton, theme.dark && styles.sendButtonCoral]}>
      {theme.icons?.sendButtonIcon?.() ?? (
        <SendIcon
          stroke={
            theme.dark ? '#1A1A1A' : (color ?? theme.colors.inverseOnSurface)
          }
          width={20}
          height={20}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sendButton: {
    marginLeft: 16,
    // Minimum 40pt touch target for accessibility
    minHeight: 40,
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonCoral: {
    marginLeft: 8,
    height: 32,
    width: 32,
    minHeight: 32,
    minWidth: 32,
    borderRadius: 16,
    backgroundColor: '#F08A6E',
  },
});
