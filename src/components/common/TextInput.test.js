import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

it('renders correctly', () => {
  const tree = renderer
    .create(<TextInput onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
