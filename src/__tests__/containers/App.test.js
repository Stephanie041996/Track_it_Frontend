import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import App from '../../containers/App';

afterEach(cleanup);

it("Takes website's snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
  ).toMatchSnapshot();
});

it("Displays app's title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const element = screen.getByText(/Track it/i);
  expect(element).toBeInTheDocument();
});

it('Displays username field', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const element = screen.getByPlaceholderText(/username/i);
  expect(element).toBeInTheDocument();
});

it('Displays login button', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const element = screen.getByText(/Login/i);
  expect(element).toBeInTheDocument();
});
