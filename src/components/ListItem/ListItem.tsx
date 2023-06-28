import React from 'react';
import {View, Image, Text} from 'react-native';

import {listItemStyles} from './listItemStyles';

import buyArrow from '../../assets/img/buy.png';
import sellArrow from '../../assets/img/sell.png';
import {Coin} from '../../types/types';

type ListItemPros = {
  item: Coin;
};

const ListItem = ({item}: ListItemPros) => {
  const imgURI = `https://asset-images.messari.io/images/${item.id}/64.png`;
  return (
    <>
      <View style={listItemStyles.container} key={item.id}>
        <View style={listItemStyles.leftBox}>
          <View style={listItemStyles.coinLogoBox}>
            <Image source={{uri: imgURI}} style={listItemStyles.coinLogo} />
          </View>
          <View style={listItemStyles.textBox}>
            <Text style={listItemStyles.coinName}>{item.name}</Text>
            <Text style={listItemStyles.coinSymbol}>{item.symbol}</Text>
          </View>
        </View>
        <View style={listItemStyles.rightBox}>
          <View>
            <Text style={listItemStyles.coinName}>
              $
              {item?.market_data?.price_usd.toLocaleString(undefined, {
                maximumFractionDigits: 6,
              })}
            </Text>
            <Text style={listItemStyles.coinHealth}>
              <Image
                style={listItemStyles.healthImg}
                source={
                  item?.market_data?.percent_change_usd_last_24_hours > 0
                    ? buyArrow
                    : sellArrow
                }
              />
              <Text
                style={
                  item?.market_data?.percent_change_usd_last_24_hours > 0
                    ? listItemStyles.healthBuy
                    : listItemStyles.healthSell
                }>
                {' '}
                {item?.market_data?.percent_change_usd_last_24_hours.toLocaleString(
                  undefined,
                  {maximumFractionDigits: 2},
                )}
                %
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ListItem;
