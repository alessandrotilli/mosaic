import React, { FC, Fragment, useMemo } from "react";
import { Tooltip as MUITooltip } from "@material-ui/core";

import { IAdornment, IAdornmentTooltipSubpart } from "../../../../types/Adornment";
import { getComposedDataCy, ISubpartMap, slugify } from "../../../../utils";

export const ADORNMENT_TOOLTIP_SUBPARTS: ISubpartMap<IAdornmentTooltipSubpart> = {
  tooltip: {
    label: "Tooltip",
  },
};

const DEFAULT_DATA_CY = "adornment-tooltip";

const AdornmentTooltip: FC<IAdornment> = ({ children, dataCy = DEFAULT_DATA_CY, tooltip }) => {
  const tooltipDataCy = useMemo(() => getComposedDataCy(dataCy, ADORNMENT_TOOLTIP_SUBPARTS.tooltip), [dataCy]);

  if (!tooltip) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <MUITooltip aria-label={slugify(tooltip)} data-cy={tooltipDataCy} title={tooltip}>
      <span>{children}</span>
    </MUITooltip>
  );
};

export default AdornmentTooltip;