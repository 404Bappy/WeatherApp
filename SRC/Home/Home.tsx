import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../Dimentions/Dimention';

export default function Home() {
  return (
    <View>
      <ImageBackground
        source={require('../../Assets/pngtree-hd-cool-background-illustration-picture-image_1131674.jpeg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
    </View>
  );
}
