import {View, ImageBackground, Image, Text, TextInput} from 'react-native';
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
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={45} />
          <Image
            source={require('../../Assets/memex.png')}
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              borderColor: '#fff',
            }}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'darkblack'}}>Hello Folks!</Text>
          <Text style={{color: 'darkblack', fontSize: 22, fontWeight: 'bold'}}>
            Search The City By Name
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Search city"
            style={{paddingHorizontal: 10}}></TextInput>

          <Icon
            name={'search'}
            size={22}
            color={'black'}
            style={{paddingVertical: 15}}
          />
        </View>
      </View>
    </View>
  );
}
