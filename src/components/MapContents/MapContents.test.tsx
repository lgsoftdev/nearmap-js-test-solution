import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MapContents from './MapContents';
import { locationsTestArray, infoBoxPosTestArray } from '../../utils/helper';

describe('MapContents Component', () => {
  test('renders the background-map image plus image markers for the locations', () => {
    render(
      <MapContents
        locInfoArray={locationsTestArray}
        infoBoxPosition={infoBoxPosTestArray}
      />
    );
    const imgElements = screen.getAllByRole('img');
    expect(imgElements.length).toEqual(locationsTestArray.length + 1);
  });

  test('existing grey coloured location marker changes color to red and an info box appears when the marker is clicked ', async () => {
    render(
      <MapContents
        locInfoArray={locationsTestArray}
        infoBoxPosition={infoBoxPosTestArray}
      />
    );

    //No display of location details when a marker has not been clicked.
    const tableElements = screen.queryAllByText('Population');
    expect(tableElements.length).toEqual(0);

    const index: number = 1;
    const imgElements = screen.getAllByRole('img');
    await userEvent.click(imgElements[index]);
    //There should be one red location marker.
    const imgElementsAfterClick = screen.getAllByRole('img');
    expect(imgElementsAfterClick[index].getAttribute('alt')).toEqual(
      'location selected'
    );

    //There should be a display of location details when a marker is clicked.
    const tableElementsAfterClick = screen.queryAllByText('Population');
    expect(tableElementsAfterClick.length).toEqual(1);
  });

  test('a visible info box can be closed by clicking on the background map ', async () => {
    render(
      <MapContents
        locInfoArray={locationsTestArray}
        infoBoxPosition={infoBoxPosTestArray}
      />
    );

    const markerIndex: number = 1;
    const imgElements = screen.getAllByRole('img');
    await userEvent.click(imgElements[markerIndex]);

    //There should be a display of location details when a marker is clicked.
    const tableElementsAfterClick = screen.queryAllByText('Population');
    expect(tableElementsAfterClick.length).toEqual(1);

    const mapIndex: number = 0;
    const imgElements2 = screen.getAllByRole('img');
    await userEvent.click(imgElements2[mapIndex]);

    //Info box disappears when a red location marker is clicked.
    const tableElements2 = screen.queryAllByText('Population');
    expect(tableElements2.length).toEqual(0);
  });
});
