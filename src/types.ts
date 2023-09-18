export interface ILocInfo {
  id: number;
  name: string;
  type: string;
  population: number;
  wealth: number;
  authority: string;
  numGuards: number;
  position: number[];
}

export interface infoBoxProps {
  locInfo: ILocInfo;
  infoBoxPosition: number[];
}
