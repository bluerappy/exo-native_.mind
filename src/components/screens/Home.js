import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    const { usersList } = this.props;
    if (!usersList) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <Text>LOADING DATAS</Text>
        </View>
      )
    }
    else return (
      <View style={{flex : 1, flexDirection: 'column' , justifyContent: 'center',}}>
        <View style={{ margin : 10, }}>
          <Button
            title='USERS LIST'
            onPress={() => {
              this.props.navigation.navigate('UsersList', {usersList});
            }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}/>
        </View>
        <View style={{ margin : 10 }}>
          <Button
            buttonStyle={{
            backgroundColor: "rgba(255, 0, 0, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
            title='SAVED USERS LIST'
          />
      </View>
    </View>
    )
  }
};

export default Home;
