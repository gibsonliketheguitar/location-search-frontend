import React from "react";
import { T_List } from "pages/Location/List";

export type T_Form = {
  setList: React.Dispatch<T_List>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type T_UploadForm = {
  keyword: string;
  location: string;
};

export type T_Radio_Location = {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};
