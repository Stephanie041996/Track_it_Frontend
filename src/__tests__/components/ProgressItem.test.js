import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProgressItem from '../../components/ProgressItem';
import store from '../../store';

afterEach(cleanup);

it('displays ProgressItem', () => {
  render(
    <Provider store={store}>
      <ProgressItem
        date="2021-10-06T11:43:45.134Z"
        data={23.6}
      />
    </Provider>,
  );
  expect(screen.getByText('6 October 2021')).toBeTruthy();
});
