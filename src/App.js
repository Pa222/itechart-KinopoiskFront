import { connect } from "react-redux";
import { moviesRequest } from "./Actions/index";

const App = props => {
  console.log({...props.state});
  return (
    <div>
      <input type="button" onClick={props.test} value="test"></input>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    test: () => dispatch(moviesRequest(1)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
