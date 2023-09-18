import { useState } from 'react';
import { ILocInfo } from '../../types';
import LocationMarker from '../LocationMarker/LocationMarker';
import InfoBox from '../InfoBox/InfoBox';
import BackgroundMap from '../../assets/images/background-map.jpg';
import styles from './MapContents.module.scss';

const MapContents = (props: {
  locInfoArray: ILocInfo[];
  infoBoxPosition: number[];
}) => {
  const [selectedLocation, setSelectedLocation] = useState(
    null as number | null
  );

  const handleLocationClick = (locationId: number | null) => {
    selectedLocation === locationId
      ? setSelectedLocation(null)
      : setSelectedLocation(locationId);
  };

  const handleMapClick = () => {
    handleLocationClick(null);
  };

  return (
    <div className={styles.pos_fixed}>
      <img
        className={styles.pos_absolute}
        src={BackgroundMap}
        alt="map"
        onClick={handleMapClick}
      />
      {props.locInfoArray.map((item, index) => (
        <LocationMarker
          key={index}
          id={item['id']}
          position={item['position']}
          selectedLocation={selectedLocation}
          onLocationClick={handleLocationClick}
        />
      ))}
      <InfoBox
        locInfo={
          selectedLocation !== null
            ? props.locInfoArray[selectedLocation]
            : ({} as ILocInfo)
        }
        infoBoxPosition={props.infoBoxPosition}
      />
    </div>
  );
};

export default MapContents;
