import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
    console.log(formState.email, formState.password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-page">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div class="tile is-ancestor is-flex">
            <div class="tile is-parent pt-5 mt-5">
              <article class="tile is-child box is-justify-content-center">
                <p class="title">Login</p>
                <p class="subtitle">Login to your account</p>

                <div class="content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="field">
                      <label htmlFor="email">Email:</label>
                      <input
                        placeholder=""
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="pwd">Password:</label>
                      <input
                        placeholder=""
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                      />
                    </div>
                    {error ? (
                      <div>
                        <p className="error-text">
                          The provided credentials are incorrect
                        </p>
                      </div>
                    ) : null}
                    <div className="control">
                      <button className="button is-link" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <Link to="/signup">← Go to Signup</Link>
              </article>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  );
}

export default Login;
