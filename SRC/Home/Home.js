import {View, ImageBackground} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../Dimentions/Dimention';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View>
      <ImageBackground
        source={require('../../Assets/weather.jpeg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 1, backgroundColor: 'black'}}
      />
      <View style={{position: 'absolute'}}>
        <View>
          <Icon name="menu" size={45} />
        </View>
      </View>
    </View>
  );
}
