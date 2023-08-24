import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../Dimentions/Dimention';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const [city, setCity] = useState(['']);
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
        <View style={{paddingHorizontal: 10, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'darkblack', textAlign: 'center'}}>
            Hello Folks!
          </Text>
          <Text
            style={{
              color: 'darkblack',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Search The City By Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <TextInput
            value={city}
            onChangeText={val => setCity(val)}
            placeholder="Search city"
            style={{paddingHorizontal: 10, fontSize: 16}}></TextInput>

          <TouchableOpacity onPress={() => {}}>
            <Icon
              name={'search'}
              size={22}
              style={{paddingVertical: 15, paddingHorizontal: 10}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 22, paddingHorizontal: 10}}>My Location</Text>
      </View>
    </View>
  );
}
