import {StyleSheet} from 'react-native';
import palette from '../../common/palette';

export const headerStyles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        backgroundColor: palette.blue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 28,
        color: palette.white,
    },
});