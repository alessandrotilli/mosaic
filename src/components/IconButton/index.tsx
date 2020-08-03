import React, { FC, useCallback } from "react";
import MUIIconButton from "@material-ui/core/IconButton";
import Icon from "../Icon";
import { IIconButton } from "../../types/IconButton";
import { IconSize } from "../../types/Icon";
import { Color } from "../../types/Base";
import { suppressEvent } from "../../utils";

export const DATA_CY_DEFAULT = "icon-button";

// TODO: handle color
const IconButton: FC<IIconButton> = ({
  dataCy = DATA_CY_DEFAULT,
  icon,
  onClick,
  disabled = false,
  size = IconSize.default,
}) => {
  const onClickHandler = useCallback((event: any) => {
    suppressEvent(event);
    onClick();
  }, []);

  return (
    <MUIIconButton color={Color.inherit} data-cy={dataCy} disabled={disabled} onClick={onClickHandler}>
      <Icon dataCy={`${dataCy}-icon`} name={icon} size={size} />
    </MUIIconButton>
  );
};

export default IconButton;
