import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { Container, Left, Body, Right, Title, Button } from 'native-base';
import { Content, List, ListItem, Icon, Switch, Thumbnail } from 'native-base';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabthreeScreen() {
  return (
    <View>
      <ScrollView>
      <Container>
      <List>
        <View style={styles.title}>
        <ListItem>
          <Body>
            <Text>アカウント情報</Text>
          </Body>
        </ListItem>
        </View>
        <ListItem style={styles.acount1}>
          <Left>
            <Text>お名前</Text>
            <List>
                <Text>  〇〇</Text>
            </List>
          </Left>
        </ListItem>
        <ListItem style={styles.acount1}>
          <Left>
            <Text>メールアドレス</Text>
            <List>
                <Text>  〇〇</Text>
            </List>
          </Left>
        </ListItem>
    
        <ListItem style={styles.acount}>
            <Text style={{color:'red'}}>ログアウト</Text>   
        </ListItem>
      </List>

      <List>
        <View style={styles.title}>
          <ListItem>
            <Body>
              <Text>ご契約中のプラン</Text>
            </Body>
          </ListItem>
        </View>
        <ListItem style={styles.acount1}>
          <Left>
            <Text>プラン名</Text>
            <List>
                <Text>　〇〇</Text>
            </List>
          </Left>
        </ListItem>
        <ListItem>
          <Left>
            <Text>プランの変更</Text>
          </Left>
          <Right>
            <Icon name="chevron-down" style={styles.icon}/>
          </Right>
        </ListItem>
      </List>

      <List>
        <View style={styles.title}>
        <ListItem>
          <Body>
            <Text>ヘルプ</Text>
          </Body>
        </ListItem>
        </View>
        <ListItem>
          <Left>
            <Text>お問い合わせ</Text>
          </Left>
          <Right>
            <Icon name="chevron-down" style={styles.icon}/>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>よくある質問</Text>
          </Left>
          <Right>
            <Icon name="chevron-down" style={styles.icon}/>
          </Right>
        </ListItem>
        </List>

        <List>
          <View style={styles.title}>
            <ListItem>
              <Body>
                <Text>情報</Text>
              </Body>
            </ListItem>
          </View>

          <ListItem>
            <Left>
              <Text>利用規約</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>プライバシーポリシー</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>特定商取引法に基づく表示</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>資金決済法に基づき表示</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>オープンソースライセンス</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>バージョン</Text>
            </Left>
            <Right>
              <Icon name="chevron-down" style={styles.icon}/>
            </Right>
          </ListItem>
          </List>
        
      </Container>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
icon: {
    transform:[{rotate: '270 deg'}]
},

title:{
    backgroundColor:'#f5f5f5'
},

acount1:{
    height:50,
  },

acount:{
  height:50,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
  
  
});