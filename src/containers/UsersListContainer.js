import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchUsers } from '../actions/usersAction';
import UserList from '../components/screens/UsersList';

export default connect(state => ({
  usersList: state.usersList.usersListStore
}), (dispatch) => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
}))(UserList);