import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocationMarker from './LocationMarker';
import { locationsTestArray } from '../../utils/helper';
import { ILocInfo } from '../../types';

const locInfo: ILocInfo = locationsTestArray[1];

describe('Location Component', () => {
  test('renders a grey coloured location marker at initial load ', () => {
    render(
      <LocationMarker
        id={locInfo['id']}
        position={locInfo['position']}
        selectedLocation={null}
        onLocationClick={() => {}}
      />
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement.getAttribute('alt')).toEqual('location inactive');
  });

  test('renders a red coloured location marker when marker is clicked for the first time ', async () => {
    render(
      <LocationMarker
        id={locInfo['id']}
        position={locInfo['position']}
        selectedLocation={locInfo['id']}
        onLocationClick={() => {}}
      />
    );
    const imgElement = screen.getByRole('img');
    await userEvent.click(imgElement);
    const imgElementClicked = screen.getByRole('img');
    expect(imgElementClicked.getAttribute('alt')).toEqual('location active');
  });
});
