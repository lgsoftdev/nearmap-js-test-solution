import { infoBoxProps } from '../../types';
import TableRow from './TableRow';
import { FormatDisplayValue, GetTextLabel } from '../../utils/helper';
import styles from './InfoBox.module.scss';

const InfoBox = ({ locInfo, infoBoxPosition }: infoBoxProps) => {
  return (
    <div
      className={styles.InfoBox}
      style={{
        left: infoBoxPosition[0],
        top: infoBoxPosition[1],
      }}
    >
      <table>
        <tbody>
          {Object.entries(locInfo).map(
            ([attribute, value], index) =>
              attribute.toLowerCase() !== 'id' && (
                <TableRow
                  key={index}
                  label={GetTextLabel(attribute)}
                  value={FormatDisplayValue(value)}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InfoBox;
