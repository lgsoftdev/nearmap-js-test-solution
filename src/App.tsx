import { useState, useEffect } from 'react';
import MapContents from './components/MapContents/MapContents';
import MapData from './assets/data/map-data.json';
import { ILocInfo } from './types';

const App = () => {
  const [locations, setLocations] = useState([] as ILocInfo[]);
  const [infoBoxPos, setInfoBoxPos] = useState([] as number[]);

  useEffect(() => {
    const getMapData = () => {
      const [boxPosition, ...locationDetails] = MapData;
      const locationDetailsWithId: ILocInfo[] = locationDetails.map(
        (item, index) => {
          return { id: index, ...item } as ILocInfo;
        }
      );
      setLocations(locationDetailsWithId);
      setInfoBoxPos(boxPosition['position']);
    };

    getMapData();
  }, []);

  return (
    <main>
      <MapContents locInfoArray={locations} infoBoxPosition={infoBoxPos} />
    </main>
  );
};

export default App;
