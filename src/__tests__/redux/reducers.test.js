import { cleanup } from '@testing-library/react';
import store from '../../store';

afterEach(cleanup);

it('should return initial state for measurements', () => {
  expect(store.getState().measurements).toBeInstanceOf(Object);
});
