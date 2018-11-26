import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

class UserList extends React.Component {
  constructor(){
    super();
    this.state = {
        data : [],
        dataBackup : [],
        search : ""
    }
}

componentDidMount () {
  const { navigation } = this.props;
  const usersList = navigation.getParam('usersList');
  this.setState({data : usersList})
}

setSearchText(username){
  this.setState({ search : username })
  
   }

  usersMap = () => {
    const filterData = this.state.data.filter(search => 
      search.username.match(this.state.search)
    );
    const {navigate} = this.props.navigation;
    return filterData.map((user, id) => {
      return (
          <View style={styles.container} key={id} >      
            <Image source={{ uri: user.avatar}} style={styles.photo} />
            <Text style={styles.text} onPress={() => navigate('Details', {user})}>
              {user.username}
            </Text>
          </View>  
      );
    });
  }

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          onChangeText={(username) => this.setSearchText(username)}
        />
        {this.usersMap()}
      </ScrollView>
    );
  }  
}

export default UserList;
