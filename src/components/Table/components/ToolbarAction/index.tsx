import React, { CSSProperties, FC, useCallback, useMemo } from "react";

import { Icons } from "../../../../types/Icon";
import { ITableToolbarAction, TableActionPosition } from "../../../../types/Table";
import { getComposedDataCy } from "../../../../utils";
import { logWarn } from "../../../../utils/logger";
import Button from "../../../Button";
import IconButton from "../../../IconButton";

const TableToolbarAction: FC<ITableToolbarAction> = ({
  callback,
  data,
  dataCy: externalDataCy,
  disabled: externalDisabled,
  icon: externalIcon,
  index,
  label,
  position,
  subpart,
}) => {
  const dataCy = useMemo(() => getComposedDataCy(externalDataCy, subpart, label), [externalDataCy, subpart, label]);

  const disabled = useMemo(() => {
    if (typeof externalDisabled === "function") {
      logWarn(
        "Table",
        "Invalid type for disabled property: action won't be disabled as type function is valid only for TableActionPosition.row"
      );
      return false;
    }

    return externalDisabled;
  }, [externalDisabled]);

  const onClick = useCallback(() => callback(data), [callback, data]);

  const secondary = useMemo(() => position === TableActionPosition.icon, [position]);

  const style = useMemo((): CSSProperties => ({ marginLeft: index > 0 ? "8px" : "none" }), [index]);

  if (secondary) {
    return (
      <IconButton
        dataCy={dataCy}
        disabled={disabled}
        icon={externalIcon || Icons.settings}
        onClick={onClick}
        style={style}
      />
    );
  }

  const icon = typeof externalIcon === "string" ? { name: externalIcon } : { component: externalIcon };
  return <Button dataCy={dataCy} disabled={disabled} icon={icon} label={label} onClick={onClick} style={style} />;
};

export default TableToolbarAction;