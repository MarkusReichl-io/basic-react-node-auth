import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const FIELDS = [
  {
    name: 'email',
    placeholder: 'E-Mail Adresse',
    type: 'text',
    errorMessage: 'Bitte trage deine E-Mail Adresse ein!'
  },
  {
    name: 'password',
    placeholder: 'Passwort',
    type: 'password',
    errorMessage: 'Bitte wähle ein Passwort!'
  },
  {
    name: 'passwordConfirm',
    placeholder: 'Passwort bestätigen',
    type: 'password',
    errorMessage: 'Bitte bestätige dein Passwort!'
  }
];

class Signup extends Component {
  renderFormFields() {
    return _.map(FIELDS, field => {
      return (
        <div key={field.name} className="input-field col s12">
          <Field {...field} component={this.renderComponentField} />
        </div>
      );
    });
  }

  renderComponentField(props) {
    return (
      <div>
        <input
          {...props.input}
          type={props.type}
          placeholder={props.placeholder}
        />
        {props.meta.touched &&
          props.meta.error &&
          <span className="red-text">
            {props.meta.error}
          </span>}
      </div>
    );
  }

  handleFormSubmit(user) {
    this.props.signupUser(user, this.props.history);
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
          <h2>Sign Up</h2>
          <div className="row">
            {this.renderFormFields()}
            <strong>
              <p className="red-text">
                {this.props.errorMessage}
              </p>
            </strong>
            <div className="col s12">
              <button className="btn btn-large green" type="submit">
                Sign Up
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

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm)
    errors.passwordConfirm = 'Passwort muss übereinstimmen';

  _.each(FIELDS, ({ name, errorMessage }) => {
    if (!formProps[name]) errors[name] = errorMessage;
  });

  return errors;
}

Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);

Signup = connect(mapStateToProps, actions)(withRouter(Signup));

export default Signup;
