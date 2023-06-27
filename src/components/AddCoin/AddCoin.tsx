import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {addCoinStyles} from './addCoinStyles';

const AddCoin = ({navigation}) => {
  const [coinTicker, setCoinTicker] = useState<string>('');

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
            placeholder={'Use a name or ticker symbol...'}
            placeholderTextColor={'#666666'}
            value={coinTicker}
            onChangeText={setCoinTicker}
          />
          <View style={addCoinStyles.submitBox}>
            <Pressable style={addCoinStyles.btnAddCoin}>
              <Text
                style={[
                  addCoinStyles.btnAddCointText,
                  coinTicker.length > 0 && addCoinStyles.btnStatusEnabled,
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
