import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/index';
import Link from '../Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visbilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
