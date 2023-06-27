import React from 'react';
import {View, Image, Text} from 'react-native';
import {headerStyles} from './headerStyles';

import avatar from '../../assets/img/avatar.png';

const Header = () => {
  return (
    <>
      <View style={headerStyles.container}>
        <Text style={headerStyles.title}>Crypto Viewer</Text>
        <Image source={avatar} style={headerStyles.img} />
      </View>
    </>
  );
};

export default Header;
