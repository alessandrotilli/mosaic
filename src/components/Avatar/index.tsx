import React, { FC, memo } from "react";
import { Skeleton as MUISkeleton } from "@material-ui/lab";
import { IAvatar, AvatarVariant } from "../../types/Avatar";
import Icon from "../Icon";
import Typography from "../Typography";
import { StyledMUIAvatar } from "./styled";

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
        <StyledMUIAvatar />
      </MUISkeleton>
    );
  }

  return (
    <StyledMUIAvatar alt={text || alt} className={`data-cy-${dataCy}`} src={src || undefined} variant={variant}>
      {icon && <Icon name={icon} />}
      {!icon && text && <Typography>{text}</Typography>}
    </StyledMUIAvatar>
  );
};

export default memo(Avatar);
