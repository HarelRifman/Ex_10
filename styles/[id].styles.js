import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONTS } from './Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: SPACING.xl
  },
  title: {
    fontSize: 24,
    fontWeight: FONTS.bold,
    marginBottom: 5
  },
  subtitle: {
    fontSize: FONTS.standard,
    fontWeight: FONTS.lightBold,
    marginBottom: 15
  },
  body: {
    fontSize: FONTS.standard,
    lineHeight: 24,
    color: COLORS.primary
  }
});