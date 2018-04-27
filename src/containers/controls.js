import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//  importing the 2 ActionCreators we created earlier.
import { increment, decrement } from '../actions';

/* eslint react/jsx-filename-extension: 0 */
/* eslint react/prop-types: 0 */

const Controls = (props) => {
  return (
    <div>
      {/* props.increment/decrement:
        * You must call the connected version of the
        * actionCreator methods in props rather than
        * calling them directly. If you just call the
        * methods directly nothing will happen
        * (as Redux doesn’t know about them.
        * However the versions of the versions that are
        * passed into props will get passed down into the reducer. */}
      <button onClick={props.increment} className="btn btn-info">+</button>
      <button onClick={props.decrement} className="btn btn-warning">-</button>
    </div>
  );
};

// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
/* note the second argument to connect,
 * this can either be a function mapDispatchToProps,
 * or a simple dictionary mapping. This makes sure that
 * connected versions of the increment and decrement
 * actioncreators are passed into props for us. */
export default withRouter(connect(null, { increment, decrement })(Controls));
