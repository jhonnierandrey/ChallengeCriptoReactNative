import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCoinStyles} from './addCoinStyles';
import {getCoinMetrics} from '../../redux/actions/cryptoActions';

const AddCoin = ({navigation}) => {
  const dispatch = useDispatch();
  const [coinTicker, setCoinTicker] = useState('');
  const [isCoinAvailable, setIsCoinAvailable] = useState(false);

  // check if ticker is available
  useEffect(() => {
    if (coinTicker.length === 3) {
      verifyCoin(coinTicker);
    } else {
      setIsCoinAvailable(false);
    }
  }, [coinTicker]);

  // task - move this call into redux
  const verifyCoin = async (coin: string) => {
    const url = `https://data.messari.io/api/v1/assets/${coin}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result?.data?.symbol) {
      setIsCoinAvailable(true);
    } else {
      console.log('Unable to fetch.');
      setIsCoinAvailable(false);
    }
  };

  const addCoinHandler = () => {
    // get coin metrics
    // @ts-ignore
    dispatch(getCoinMetrics(coinTicker));

    // go to main screen
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={addCoinStyles.container}>
      <View style={addCoinStyles.main}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={addCoinStyles.navigationText}>{'<'} Back to list</Text>
        </TouchableOpacity>
        <View style={addCoinStyles.formBox}>
          <Text style={addCoinStyles.label}>Add a Cryptocurrency</Text>
          <TextInput
            style={addCoinStyles.input}
            placeholder={"Use ticker symbol like 'BTC'..."}
            placeholderTextColor={'#666666'}
            value={coinTicker}
            onChangeText={setCoinTicker}
          />
          <View>
            <Text style={addCoinStyles.coinChecker}>
              {isCoinAvailable ? 'Available' : null}
            </Text>
          </View>
          <View style={addCoinStyles.submitBox}>
            <Pressable
              style={addCoinStyles.btnAddCoin}
              onPress={addCoinHandler}>
              <Text
                style={[
                  addCoinStyles.btnAddCointText,
                  coinTicker.length === 3 &&
                    isCoinAvailable &&
                    addCoinStyles.btnStatusEnabled,
                ]}>
                Add
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCoin;
