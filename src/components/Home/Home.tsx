import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
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
import { getCoinMetrics } from '../../redux/actions/cryptoActions';

import { CryptoStore, Coin } from '../../types/types';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    
    const {savedCryptos} = useSelector((store : CryptoStore) => store.crypto);
    const [selectedCryptos, setSelectedCryptos] = useState<Coin[]>();
    
    useEffect(() =>{
        if(savedCryptos.length > 0){
            setSelectedCryptos(savedCryptos);
        }else{
            dispatch(getCoinMetrics('btc'));
        }
    }, []);
    
    useEffect(() => {
        if (savedCryptos.length >= 1) {
            setSelectedCryptos(savedCryptos);
        }
    }, [savedCryptos]);

    return (
        <>
            <SafeAreaView style={homeStyles.statusBar} />
            <SafeAreaView style={homeStyles.container}>
                <StatusBar barStyle="light-content" />
                <View style={homeStyles.main}>
                    <Header />
                    <View style={homeStyles.listContainer}>
                        {
                            selectedCryptos && (
                                <FlatList
                                    data={selectedCryptos}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => <ListItem item={item} />}
                                />
                            )
                        }
                    </View>
                    {/* <Counter /> */}
                    <View style={homeStyles.addView}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AddCoin') }}>
                            <Text style={homeStyles.btnAdd}>+ Add a Cryptocurrency</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Home;
