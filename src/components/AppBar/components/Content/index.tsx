import React, { CSSProperties, FC, useMemo } from "react";

import { IAppBarContent } from "../../../../types/AppBar";
import { getComposedDataCy, ISubpartMap } from "../../../../utils";
import IconButton from "../../../IconButton";
import AppBarTitle, { APPBAR_TITLE_SUBPARTS } from "../Title";

export const APPBAR_CONTENT_SUBPARTS: ISubpartMap = {
  ...APPBAR_TITLE_SUBPARTS,
  menu: {
    label: "Menu",
  },
};

const DATA_CY_DEFAULT = "appbar-content";

const AppBarContent: FC<IAppBarContent> = ({ children, dataCy = DATA_CY_DEFAULT, menu, onTitleClick, title }) => {
  const mainMenuDataCy = useMemo(() => getComposedDataCy(dataCy, APPBAR_CONTENT_SUBPARTS.menu), [dataCy]);

  const mainMenu = useMemo(() => {
    if (!menu) {
      return null;
    }

    const { icon, onClick } = menu;
    return <IconButton dataCy={mainMenuDataCy} icon={icon} onClick={onClick} />;
  }, [mainMenuDataCy, menu]);

  const style = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
      flex: 1,
    }),
    []
  );

  return (
    <div style={style}>
      {mainMenu}
      <AppBarTitle dataCy={dataCy} onTitleClick={onTitleClick} title={title}>
        {children}
      </AppBarTitle>
    </div>
  );
};

export default AppBarContent;