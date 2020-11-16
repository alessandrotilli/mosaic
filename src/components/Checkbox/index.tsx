import React, { FC, useCallback } from "react";
import { Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel } from "@material-ui/core";

import { CheckboxSize, ICheckbox } from "../../types/Checkbox";
import { getComposedDataCy } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

export const DATA_CY_DEFAULT = "checkbox";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

export const SUBPARTS_MAP = {
  input: {
    label: "Input",
  },
};

// TODO: handle color
const Checkbox: FC<ICheckbox> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  intermediate = false,
  label,
  labelPlacement = "start",
  onChange,
  required = false,
  size = CheckboxSize.default,
  value = false,
}) => {
  const onChangeHandler = useCallback((event: any, checked: boolean) => onChange && onChange(checked), [onChange]);

  return (
    <MUIFormControlLabel
      control={
        <MUICheckbox
          checked={value}
          color="primary"
          data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.input)}
          disabled={disabled}
          indeterminate={intermediate}
          onChange={onChangeHandler}
          required={required}
          size={size}
        />
      }
      data-cy={dataCy}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export const CheckboxWithProps = Checkbox;

export default localized(Checkbox, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
