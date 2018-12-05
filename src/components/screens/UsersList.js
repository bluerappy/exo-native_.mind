import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableHighlight } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

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
        search : "",
        refreshing: false,
    }
};

componentDidMount () {
  const { navigation } = this.props;
  const usersList = navigation.getParam('usersList');
  this.setState({data : usersList})
};

loadMoreUsers = () => {
  console.log('Scroll')
  this.props.fetchUsers();
}

setSearchText(username){
  this.setState({ search : username })
};

_renderFlatList = () => {
  const {navigate} = this.props.navigation;
  const filterData = this.state.data.filter(search => 
        search.username.match(this.state.search)
  );

  return (
      <FlatList
        onEndReached={this.loadMoreUsers}
        onEndReachedThreshold={0.01}
        data={filterData}
        keyExtractor={item => item.uuid}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigate('Details', {item})}>
            <ListItem
              roundAvatar
              title={item.username}
              subtitle={item.email}
              avatar={{ uri: item.avatar }}
            />
          </TouchableHighlight>
          )}
      />
    )
};

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          onChangeText={(username) => this.setSearchText(username)}
        />
        {this._renderFlatList()}
    </ScrollView>
    )
  }
}

export default UserList;
