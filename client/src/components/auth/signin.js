import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Signin extends Component {
  handleFormSubmit(user) {
    this.props.signinUser(user, this.props.history);
  }

  render() {
    //Kommen von redux Form, welche unten deklariert wurde
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col s3" />
        <form
          className="col s6"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <h2>Sign In</h2>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="E-Mail Adresse"
              />
            </div>
            <div className="input-field col s12">
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Passwort"
              />
            </div>
            <strong>
              <p className="red-text">
                {this.props.errorMessage}
              </p>
            </strong>
            <div className="col s12">
              <button className="btn btn-large green" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin'
})(Signin);

Signin = connect(mapStateToProps, actions)(withRouter(Signin));

export default Signin;
