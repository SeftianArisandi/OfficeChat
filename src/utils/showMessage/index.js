import { showMessage } from "react-native-flash-message";
import { colors } from "../colors";

export const showError = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: '#E06379',
        color: colors.white
    });
};

export const showSuccess = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white
    });
};