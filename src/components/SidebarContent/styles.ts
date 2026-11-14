import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';

export const DRAWER_CORAL = '#F08A6E';

export const createStyles = (theme: Theme) => {
  const ink = theme.dark ? '#FFFFFF' : theme.colors.onSurface;
  const muted = theme.dark
    ? 'rgba(255,255,255,0.55)'
    : theme.colors.onSurfaceVariant;
  const hairline = theme.dark ? 'rgba(255,255,255,0.22)' : theme.colors.outline;

  return StyleSheet.create({
    sidebarContainer: {
      flex: 1,
      backgroundColor: theme.dark ? '#000000' : theme.colors.surface,
    },
    divider: {
      marginHorizontal: 16,
      backgroundColor: hairline,
      height: StyleSheet.hairlineWidth,
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 12,
    },
    title: {
      color: ink,
      fontSize: 34,
      lineHeight: 40,
      fontFamily: 'Inter-SemiBold',
    },
    iconButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: hairline,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchField: {
      marginHorizontal: 20,
      marginBottom: 8,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: hairline,
      paddingHorizontal: 12,
      paddingVertical: 8,
      color: ink,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
    },
    menuRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 22,
      paddingVertical: 11,
      gap: 16,
    },
    menuLabel: {
      color: ink,
      fontSize: 17,
      lineHeight: 22,
      fontFamily: 'Inter-Regular',
    },
    sessionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 10,
      gap: 12,
    },
    sessionRowActive: {
      backgroundColor: theme.dark
        ? 'rgba(255,255,255,0.08)'
        : theme.colors.menuBackgroundActive,
    },
    sessionLabel: {
      flex: 1,
      color: ink,
      fontSize: 16,
      lineHeight: 21,
      fontFamily: 'Inter-Regular',
    },
    drawerSection: {
      marginTop: 16,
    },
    dateLabel: {
      paddingLeft: 22,
      paddingBottom: 6,
      color: muted,
      fontSize: 13,
      fontFamily: 'Inter-Medium',
    },
    scrollViewContent: {
      flexGrow: 1,
      paddingBottom: 12,
    },
    sessionList: {
      flex: 1,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 10,
    },
    chatPill: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: DRAWER_CORAL,
      borderRadius: 24,
      paddingHorizontal: 16,
      paddingVertical: 12,
      gap: 8,
    },
    chatPillLabel: {
      color: '#1A1A1A',
      fontSize: 17,
      lineHeight: 22,
      fontFamily: 'Inter-SemiBold',
    },
    menu: {
      width: 170,
    },
    sessionTouchable: {
      flex: 1,
    },
    selectionModeHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: hairline,
      backgroundColor: theme.dark ? '#000000' : theme.colors.surface,
    },
    selectedCountText: {
      fontSize: 16,
      fontWeight: '600',
      color: ink,
      flex: 1,
      textAlign: 'center',
    },
    sessionItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    sessionCheckbox: {
      marginLeft: 8,
      marginRight: 4,
    },
    menuDivider: {
      marginVertical: 4,
    },
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    headerActionButton: {
      padding: 4,
    },
    headerActionButtonDisabled: {
      opacity: 0.4,
    },
    selectAllRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: theme.dark ? '#000000' : theme.colors.surface,
    },
    selectAllCheckbox: {
      marginRight: 12,
    },
    selectAllText: {
      fontSize: 16,
      color: ink,
    },
    selectAllDivider: {
      backgroundColor: hairline,
    },
  });
};
