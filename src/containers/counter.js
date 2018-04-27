import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* eslint react/jsx-filename-extension: 0 */
/* eslint react/prop-types: 0 */

// this can be dumb or smart component - connect works with either
const Counter = (props) => {
  return (
    <div>
      {/* props.count. passed into props from Redux. */}
      Current Count: {props.count}
    </div>
  );
};

/* simple function that takes the full global
 * state as an argument and maps some part or
 * parts of it this components props. The mapping is a
 * simple object with key: value pairs. As is everything! */
// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    count: state.count,
  }
);

/* Gives you access to history and match in your component,
 * not required for Route components but is for (i.e.
 * <Route component={SomeConnectedThing}/>) connected redux components.
 * An unfortunate part of react-router4. */

/* connect function is the magic that connects the
 * component to Redux. It takes 2 arguments:
 * mapStateToProps and mapDispatchToProps and returns a new version
 * of the component. */
// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, null)(Counter));
