import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { AvatarVariant, Icon, Typography } from "../..";
import { IAvatar } from "../../types/Avatar";
import { StyledMUIAvatar } from "./styled";
import { getDataCyForSubComponent } from "../../utils";

export const DATA_CY_DEFAULT = "avatar";

const Avatar: FC<IAvatar> = ({
  alt = "avatar",
  dataCy = DATA_CY_DEFAULT,
  icon,
  loading = false,
  src,
  text,
  variant = AvatarVariant.default,
}) => {
  if (loading) {
    return (
      <MUISkeleton variant="circle">
        <StyledMUIAvatar data-cy={getDataCyForSubComponent(dataCy, "loading")} />
      </MUISkeleton>
    );
  }

  return (
    <StyledMUIAvatar alt={text || alt} data-cy={dataCy} src={src} variant={variant}>
      {icon && <Icon dataCy={getDataCyForSubComponent(dataCy, "icon")} name={icon} />}
      {!icon && text && <Typography dataCy={getDataCyForSubComponent(dataCy, "text")}>{text}</Typography>}
    </StyledMUIAvatar>
  );
};

export const AvatarWithProps = Avatar;

export default memo(Avatar);
