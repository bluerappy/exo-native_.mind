import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

const styles = StyleSheet.create ({
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: '#d2f7f1',
     width: '100%'
  },
  picture: {
    margin : 15,
    flex :1,
  },
  bio : {
    backgroundColor: 'white',
    margin : 5,
    height: 300,
  }
})

class UsersDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const userData = navigation.getParam('user', 'NO-ID');
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <View style={styles.picture}>
            <Avatar
              xlarge
              rounded
              source={{uri: userData.avatar}}
              activeOpacity={0.7}
              />
          </View>
          <View style={{ flex: 1, fontWeight: 'bold', justifyContent: 'center' }}>
            <Text>{userData.username}</Text>
            <Text>{userData.phone}</Text>
            <Text>{userData.email}</Text>
          </View>
        </View>
        <View style={{ margin : 5 }}>
          <Text>Company : {userData.company}</Text>
          <Text>Actual Job : {userData.job}</Text>
        </View>
        <ScrollView style={styles.bio}>
          <Text style={{alignItems: 'center', justifyContent: 'center' }}>
            {userData.bio}
          </Text>
        </ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
          <Button
              title=" + Add to Contact List"
              buttonStyle={{
              backgroundColor: "rgba(0, 0, 255, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
            }}
          />
        </View>
      </ScrollView>
    );
  }  
}

export default UsersDetails;
