import { connect } from "react-redux";
import Poll from "./Poll.jsx";
import Actions from "./../../redux/Actions";

const mapStateToProps = state => {
  return {
    sports: state.sports
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSports: sports => dispatch(Actions.sports.setSports(sports)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
