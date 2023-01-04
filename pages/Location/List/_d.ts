import { T_LocationCard } from "../Card";

export type T_List = T_LocationCard[] | [] | undefined;

export type T_LocationList = {
  data: T_List;
  handleReset: () => void;
};
