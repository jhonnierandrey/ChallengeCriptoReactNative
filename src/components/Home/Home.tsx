import React, {useState} from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import {homeStyles} from './homeStyles';

import { Header, ListItem } from '../index';

const hardcodedCryptos = [
    {
        id: '1e31218a-e44e-4285-820c-8282ee222035',
        name: 'Bitcoin',
        symbol: 'BTC',
        market_data: {
            price_usd: 7215.68,
            percent_change_usd_last_24_hours: 1.82
        }
    },
    {
        id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
        name: 'Ethereum',
        symbol: 'ETH',
        market_data: {
            price_usd: 146.83,
            percent_change_usd_last_24_hours: 1.46,
        }
    },
    {
        id: '97775be0-2608-4720-b7af-f85b24c7eb2d',
        name: 'XRP',
        symbol: 'XRP',
        market_data: {
            price_usd: 0.220568,
            percent_change_usd_last_24_hours: -2.47,
        }
    },
    {
        id: 'c7c3697d-1b9c-42bf-9664-a366634ce2b3',
        name: 'Litecoin',
        symbol: 'LTC',
        market_data: {
            price_usd: 45.94,
            percent_change_usd_last_24_hours: 1.47,
        }
    },
];

const Home = ({navigation}) => {
    const [selectedCryptos, setSelectedCryptos] = useState(hardcodedCryptos);
    return (
        <>
            <SafeAreaView style={homeStyles.statusBar} />
            <SafeAreaView style={homeStyles.container}>
                <StatusBar barStyle="light-content" />
                <View style={homeStyles.main}>
                    <Header />
                    <View style={homeStyles.listContainer}>
                        <FlatList
                            data={selectedCryptos}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <ListItem item={item} />}
                        />
                    </View>
                    <View style={homeStyles.addView}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddCoin')}>
                            <Text style={homeStyles.btnAdd}>+ Add a Cryptocurrency</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Home;
