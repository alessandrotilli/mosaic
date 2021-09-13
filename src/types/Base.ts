import { CSSProperties } from "react";

import { ISubpart } from "../utils";

export interface IBase {
  dataCy?: string;
  style?: CSSProperties;
}

export interface IClickable extends IBase {
  onClick: () => void;
}

export type IPartialClickable = Partial<IClickable>;

export interface ILoadable extends IBase {
  loading?: boolean;
}

// TODO: door open to allow explicit property localization
export interface ILocalizable extends IBase {
  localized?: boolean;
}

export interface ISubpartItem extends IBase {
  dataCy: string;
  subpart: ISubpart;
}
