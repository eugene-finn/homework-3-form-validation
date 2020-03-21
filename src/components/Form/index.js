import React from 'react';
import './Form.css';
import jamesBondPicture from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {},
    isValid: false
  };

  checkForm = e => {
    e.preventDefault();
    // console.log('hi', e);
    const errors = {};
    const { firstname, lastname, password } = this.state;

    // errors.firstname =
    //   firstname === '' || firstname !== 'James'
    //     ? 'Нужно указать имя'
    //     : 'Имя указано не верно';

    // errors.lastname =
    //   lastname === '' || lastname === 'Bond'
    //     ? 'Нужно указать фамилия'
    //     : 'Имя указано не верно';

    // errors.password =
    //   password === '' || password !== '007'
    //     ? 'Нужно указать пароль'
    //     : 'Пароль указан не верно';

    if (firstname === '') {
      errors.firstname = 'Нужно указать имя';
    } else if (firstname !== 'James') {
      errors.firstname = 'Имя указано не верно';
    }

    if (lastname === '') {
      errors.lastname = 'Нужно указать фамилия';
    } else if (lastname !== 'Bond') {
      errors.lastname = 'Имя указано не верно';
    }

    if (password === '') {
      errors.password = 'Нужно указать пароль';
    }
    if (password !== '007') {
      errors.password = 'Пароль указан не верно';
    }
    const isValid = Object.keys(errors).length === 0;

    this.setState({ errors: errors, isValid: isValid });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app-container">
        {this.state.isValid ? (
          <img
            src={jamesBondPicture}
            alt="bond approve"
            className="t-bond-image"
          />
        ) : (
          <form className="form" onSubmit={this.checkForm}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}
              />

              <span className="field__error field-error t-error-firstname">
                {this.state.errors.firstname}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
              <span className="field__error field-error t-error-lastname">
                {this.state.errors.lastname}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <span className="field__error field-error t-error-password">
                {this.state.errors.password}
              </span>
            </p>
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
