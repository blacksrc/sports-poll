import { connect } from "react-redux";
import Event from "./Event.jsx";
//import Actions from "./../../redux/Actions";

const mapStateToProps = state => {
  return {
    sports: state.sport.sports
  };
};

export default connect(
  mapStateToProps,
)(Event);