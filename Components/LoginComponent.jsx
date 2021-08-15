import React, { Component } from 'react';
import { addUserToLocal } from '../LocalStorage/userLocalStorage';
import { login } from '../Requsets/login';
import styles from '../styles/login.module.css';

class LoginComponent extends Component {
  state = {
    errorValue: '',
    errorState: false,
  };

  loginForm = async (e) => {
    e.preventDefault();

    await this.setState({ errorState: false });

    const res = await login(this.props.mail, this.props.password);
    if (res.message.description) {
      await this.setState({ errorState: true });
      await this.setState({ errorValue: res.message.description });
    }

    if (res.result.user) {
      await addUserToLocal(res.result.user);

      await this.props.router.push('/panel');
    }
  };

  render() {
    const { mail, setMail, password, setPassword } = this.props;

    const { errorState, errorValue } = this.state;

    return (
      <div className="flex h-vh100 text-center justify-center items-center w-full bg-gray-300 relative">
        {errorState ? (
          <div
            onClick={() => this.setState({ errorState: false })}
            className="absolute bg-red-500 cursor-pointer text-white text-center mx-6 p-5 sm:w-96 w-60 rounded-lg opacity-90 my-3 sm:top-7 top-0 shadow-lg hover:shadow-xl"
          >
            <p className="font-semibold text-lg text-center">{errorValue}</p>
          </div>
        ) : null}
        <form
          className="sm:p-10 p-7 w-10/12 sm:w-auto flex flex-col rounded-lg h-80 items-center justify-center shadow-lg hover:shadow-xl bg-gray-100"
          onSubmit={this.loginForm}
        >
          <h1 className="mb-6 text-center text-xl sm:text-3xl font-semibold text-gray-700">
            Log in
          </h1>

          <input
            type="email"
            className="mb-3 sm:w-80 w-full h-10 rounded-md placeholder-opacity-40 p-5 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-gray-200 transition-colors hover:shadow-md shadow-sm"
            placeholder="large@gmail.com"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            name="Mail"
          />
          <input
            type="password"
            placeholder="******"
            className="mb-6 sm:w-80 w-full h-10 rounded-md placeholder-opacity-40 focus:outline-none p-5 focus:ring-2 focus:ring-indigo-400 hover:bg-gray-200 transition-colors hover:shadow-md shadow-sm"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`${styles.btn} bg-indigo-500 h-10 rounded-md shadow-lg w-full hover:shadow-xl hover:bg-indigo-600 transition-all text-white`}
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
