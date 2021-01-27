import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.bgcolor}>
        <View style={styles.ano}>
            <Swiper dot={
                <View
                  style={{
                    backgroundColor: '#ccccc8',
                    width: 10,
                    height: 10,
                    borderRadius: 7,
                    marginBottom: -70,
                    marginLeft: 7,
                    marginRight: 7
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#333332',
                    width: 10,
                    height: 10,
                    borderRadius: 7,
                    marginBottom: -70,
                    marginLeft: 7,
                    marginRight: 7
                  }}
                />
              }showsButtons={false} autoplay={true}>
                <View>
                  <Image
                    style={styles.images_s}
                  　source={{uri: 'https://sp.seibulions.jp/cmn/images/news/19/06/12/ph_ticket01.jpg'}}
                  />
                </View>
                <View>
                  <Image
                    style={styles.images_s}
                  　source={{uri: 'https://sp.seibulions.jp/cmn/images/news/19/06/12/ph_ticket01.jpg'}}
                  />
                </View>
                <View>
                  <Image
                    style={styles.images_s}
                  　source={{uri: 'https://sp.seibulions.jp/cmn/images/news/19/06/12/ph_ticket01.jpg'}}
                  />
                </View>
            </Swiper>
        </View>
        <View style={styles.room3}></View> 
        <View style={styles.room}>
          <Text style={styles.room1}>ライブラリに追加したコンテンツ</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano1}></View>
        
        <View style={styles.room}>
          <Text style={styles.room1}>月間ランキング</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>
 
        <View style={styles.room}>
          <Text style={styles.room1}>文化</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>

        <View style={styles.room}>
          <Text style={styles.room1}>経済/経営</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>

        <View style={styles.room}>
          <Text style={styles.room1}>政治/法律</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>

        <View style={styles.room}>
          <Text style={styles.room1}>情報通信</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>

        <View style={styles.room}>
          <Text style={styles.room1}>教育</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>

        <View style={styles.room}>
          <Text style={styles.room1}>科学</Text>
          <ScrollView showsHorizontalScrollIndicator={false}　horizontal={true} style={{ flexDirection: 'row'}}>
          <Image
          style={styles.images}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
          <Image
          style={styles.images1}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81ioLw0PYmL.jpg'}}
          />
        </ScrollView>
        <View style={styles.ano2}></View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bgcolor:{
    backgroundColor: '#fff'
  },
  icons:{
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:-42,
      color:'#fff'
  },

  icons1:{
      marginLeft:'auto',
      marginRight:20,
      marginTop:-38,
      color:'#fff'
  },

  ano:{
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    width: 'auto',
    height: 200,
    borderWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },

  images_s:{
      height: 210,
      width: 'auto',
  },

  ano1:{
      marginTop: 20,
      marginLeft: 20,
      marginRight: 0,
      width: 'auto',
      height: 0.2,
      borderWidth: 0.2,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },

  ano2:{
      marginTop: 20,
      marginLeft: 20,
      marginRight: 0,
      width: 'auto',
      height: 1,
      borderWidth: 0.2,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },

  room:{
    marginTop: 20,
    left: 0,
    right: 0,
  },

  room1:{
      fontWeight: 'bold',
      marginLeft: 20,
      fontSize:15
    },

  room3:{
      marginTop: 10,
    },

  images:{
      marginTop: 10,
      width: 140,
      height: 200,
      marginLeft: 20,
  },

  images1:{
      marginTop: 10,
      width: 140,
      height: 200,
      marginLeft: 10,
  },

  });
