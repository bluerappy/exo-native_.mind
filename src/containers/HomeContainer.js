import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchUsers } from '../actions/usersAction';
import Home from '../components/screens/Home';

export default connect(state => ({
  usersList: state.usersList
}), (dispatch) => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
}))(Home);