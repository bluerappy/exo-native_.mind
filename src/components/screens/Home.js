import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection: 'column' ,
    justifyContent: 'center'
  },
  buttonStyle : {
    backgroundColor: 'rgba(0, 0, 255, 1)',
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5
  },
  buttonStyleRed : {
    backgroundColor: 'rgba(255, 0, 0, 1)',
  }
});


class Home extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    const { usersList } = this.props;
    if (!usersList && usersList.length === 0) {
      return (
        <View style={styles.container}>
          <Text>LOADING DATAS</Text>
        </View>
      )
    }
    else return (
      <View style={styles.container}>
        <View style={{ margin : 10, }}>
          <Button
            title='USERS LIST'
            onPress={() => {
              this.props.navigation.navigate('UsersList', {usersList});
            }}
            buttonStyle={styles.buttonStyle}
            />
        </View>
        <View style={{ margin : 10 }}>
          <Button
            buttonStyle={[styles.buttonStyle, styles.buttonStyleRed]}
            title='SAVED USERS LIST'
          />
      </View>
    </View>
    )
  }
};

export default Home;
