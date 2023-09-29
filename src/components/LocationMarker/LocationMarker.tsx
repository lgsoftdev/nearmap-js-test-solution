import Marker from '../../assets/images/marker.png';
import MarkerSelected from '../../assets/images/marker-selected.png';
import styles from '../../utils/styles.module.scss';

const LocationMarker = (props: {
  id: number;
  position: number[];
  selectedLocation: number | null;
  onLocationClick: (id: number) => void;
}) => {
  const handleLocationClick = () => {
    props.onLocationClick(props.id);
  };

  return (
    <img
      className={styles.pos_absolute}
      style={{
        left: props.position[0],
        top: props.position[1],
      }}
      src={props.selectedLocation === props.id ? MarkerSelected : Marker}
      alt={
        props.selectedLocation === props.id ? 'location selected' : 'location'
      }
      onClick={handleLocationClick}
    />
  );
};

export default LocationMarker;
