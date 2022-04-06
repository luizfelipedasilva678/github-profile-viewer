import React from 'react';
import { render } from '@testing-library/react';
import ProfileBox from './ProfileBox';
import UserContextProviderMock from '../../utils/user-context-provider-mock';

describe('<ProfileBox/>', () => {
  it('should render nothing', () => {
    const { container } = render(<ProfileBox />);
    const element = container.querySelector('div');
    expect(element).toBeNull();
  });

  it('should render div', () => {
    const { container } = render(
      <UserContextProviderMock>
        <ProfileBox />
      </UserContextProviderMock>,
    );
    const element = container.querySelector('div');
    expect(element).toBeDefined();
  });

  it('should render p', () => {
    const { container } = render(
      <UserContextProviderMock>
        <ProfileBox />
      </UserContextProviderMock>,
    );
    const element = container.querySelector('p');
    expect(element).toBeDefined();
  });
});
