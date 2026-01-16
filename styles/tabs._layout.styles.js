import { StyleSheet } from "react-native";
import { COLORS, FONTS } from './Theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    backgroundColor: COLORS.accent,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerContent: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: FONTS.xxlarge,
    fontWeight: FONTS.bold,
    letterSpacing: -1,
    color: COLORS.background,
  },
  tabBar: {
    height: 65
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: FONTS.semiBold,
    marginBottom: 15
  }
});