import React, { FC, useCallback } from "react";
import { Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel } from "@material-ui/core";

import { ICheckbox } from "../../types/Checkbox";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

export const DATA_CY_DEFAULT = "checkbox";
export const DATA_CY_SHORTCUT = "label";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "label", type: "string" }];

export const SUBPARTS_MAP = {
  check: {
    label: "Check",
  },
  input: {
    label: "Input",
  },
};

const Checkbox: FC<ICheckbox> = ({
  dataCy = DATA_CY_DEFAULT,
  disabled = false,
  intermediate = false,
  label,
  labelPlacement = "start",
  onChange,
  required = false,
  size = "medium",
  style,
  value = false,
}) => {
  const onChangeHandler = useCallback(
    (event: any, checked: boolean) => {
      suppressEvent(event);
      onChange && onChange(checked);
    },
    [onChange]
  );

  return (
    <MUIFormControlLabel
      control={
        <MUICheckbox
          checked={value}
          color="primary"
          data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.check)}
          disabled={disabled}
          indeterminate={intermediate}
          inputProps={
            {
              "data-cy": getComposedDataCy(dataCy, SUBPARTS_MAP.input),
            } as any
          }
          onChange={onChangeHandler}
          required={required}
          size={size}
          style={style}
        />
      }
      data-cy={dataCy}
      label={label}
      labelPlacement={labelPlacement}
      style={{ ...(!label ? { margin: 0 } : {}) }}
    />
  );
};

export const CheckboxWithProps = Checkbox;

export default localized(Checkbox, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
