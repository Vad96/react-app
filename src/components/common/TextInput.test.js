import React from 'react';
import TextInput from './TextInput';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<TextInput onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
