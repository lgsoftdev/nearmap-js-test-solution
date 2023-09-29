import { render, screen } from '@testing-library/react';
import LocationMarker from './LocationMarker';
import { locationsTestArray } from '../../utils/helper';
import { ILocInfo } from '../../types';

const locInfo: ILocInfo = locationsTestArray[1];

describe('Location Component', () => {
  test('renders a grey coloured location marker when there is currently no selected location, ie selectedLocation=null ', () => {
    render(
      <LocationMarker
        id={locInfo['id']}
        position={locInfo['position']}
        selectedLocation={null}
        onLocationClick={() => {}}
      />
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement.getAttribute('src')).not.toContain('selected');
  });

  test('renders a red coloured location marker when currently selected location is the same as the location marker being rendered, ie id=selectedLocation ', async () => {
    render(
      <LocationMarker
        id={locInfo['id']}
        position={locInfo['position']}
        selectedLocation={locInfo['id']}
        onLocationClick={() => {}}
      />
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement.getAttribute('alt')).toContain('selected');
  });
});
