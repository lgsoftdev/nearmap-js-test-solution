import MapContents from './components/MapContents/MapContents';
import MapData from './assets/data/map-data.json';
import { ILocInfo } from './types';

const App = () => {
  const [boxPosition, ...locationDetails] = MapData;
  const locationDetailsWithId: ILocInfo[] = locationDetails.map(
    (item, index) => {
      return { id: index, ...item } as ILocInfo;
    }
  );

  return (
    <main>
      <MapContents
        locInfoArray={locationDetailsWithId}
        infoBoxPosition={boxPosition.position}
      />
    </main>
  );
};

export default App;
