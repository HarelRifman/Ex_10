import { StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "./Theme";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 30,
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
    logo: {
        fontSize: FONTS.xxlarge,
        fontWeight: FONTS.bold,
        color: '#1C1C1E'
    },
    subtitles: {
        fontSize: FONTS.standard,
        color: '#8E8E93',
        marginBottom: 40
    },
    input: {
        height: FONTS.inputHeight,
        backgroundColor: '#F2F2F7',
        borderRadius: SPACING.md,
        paddingHorizontal: SPACING.lg,
        fontSize: FONTS.standard,
        marginBottom: SPACING.lg
    }
});