import {StyleSheet} from 'react-native';
import palette from '../../common/palette';

export const addCoinStyles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flex: 1,
    },
    main: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    navigationText: {
        fontWeight: '400',
        fontSize: 18,
        color: palette.blue,
        paddingVertical: 10,
    },
    formBox: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 28,
        color: palette.black,
        paddingBottom: 28,
    },
    input: {
        backgroundColor: palette.white,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: palette.grey,
    },
    submitBox: {
        width: '100%',
        alignItems: 'flex-end',
    },
    btnAddCoin: {
        marginVertical: 20,
        backgroundColor: palette.yellow,
        paddingVertical: 15,
        width: '50%',
        borderRadius: 5,
    },
    btnAddCointText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: palette.lightYellow,
    },
    btnStatusEnabled: {
        color: palette.blue,
    }
});