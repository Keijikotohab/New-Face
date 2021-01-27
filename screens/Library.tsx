import * as React from 'react';
import { StyleSheet,ScrollView, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Container, Left, Body, Right, Title, Button } from 'native-base';
import { Content, List, ListItem, Icon, Switch, Thumbnail } from 'native-base';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Container　style={styles.title}>  
          <List style={styles.library}>
            <View>
              <ListItem>
              </ListItem>
            </View>
            <View style={styles.title1}>
              <ListItem style={styles.height}>
                <Left>
                  <Text style={styles.bold}>全てのコンテンツ</Text>
                </Left>
                <Right>
                  <Icon name="chevron-down" style={styles.icon}/>
                </Right>
              </ListItem>

              <ListItem style={styles.height}>
                <Left>
                  <Text style={styles.bold}>分野別</Text>
                </Left>
                <Right>
                  <Icon name="chevron-down" style={styles.icon}/>
                </Right>
              </ListItem>

              <ListItem style={styles.height}>
                <Left>
                  <Text style={styles.bold}>ダウンロード済み</Text>
                </Left>
                <Right>
                  <Icon name="chevron-down" style={styles.icon}/>
                </Right>
              </ListItem>

              <ListItem style={styles.height}>
                <Left>
                  <Text style={styles.bold}>購入済み</Text>
                </Left>
                <Right>
                  <Icon name="chevron-down" style={styles.icon}/>
                </Right>
              </ListItem>
            </View>
           </List>

           <View>
            <ListItem  style={styles.title2}>
              <Body>
                <Text style={styles.title4}>最近追加したコンテンツ</Text>
              </Body>
            </ListItem>
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
          </View>

          <View style={styles.title3}>
          <ListItem>
              <Body>
                  <Text style={styles.title5}>最近再生したコンテンツ</Text>
              </Body>
          </ListItem>
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
        </Container>
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
  library:{
    marginTop: 0
},

icon: {
    transform:[{rotate: '270 deg'}]
},

height:{
    height:60
},

bold:{
    fontWeight: 'bold'
},

title:{
    backgroundColor:'#f5f5f5'
},

title1:{
    backgroundColor:'#fff',
    borderColor:'#c0c0c0',
    borderWidth:0.8,
    borderBottomWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
},

title2:{
    borderColor:'#c0c0c0',
    borderWidth:0.8,
    marginLeft:0,
    borderBottomWidth:0.8,
    borderTopWidth:0.8,
    borderLeftWidth:0,
    borderRightWidth:0
},

title3:{
    marginTop:20,
    borderColor:'#c0c0c0',
    borderWidth:0.8,
    borderLeftWidth:0,
    borderRightWidth:0
},

title4:{
    marginLeft:20,
    color:'#696969',
    fontSize: moderateScale(14)
},

title5:{
    marginLeft:4,
    color:'#696969',
    fontSize: moderateScale(14)
},

acount1:{
    height:50,
  },

acount:{
    height:50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},

ano:{
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    width: 'auto',
    height: 200,
    borderWidth: 0.2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
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
}
});
