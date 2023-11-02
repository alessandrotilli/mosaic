import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { expect, jest } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { configure, userEvent, within } from "@storybook/testing-library";

import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import BreadCrumbs, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "BreadCrumbs";
BreadCrumbs.displayName = COMPONENT_NAME;

const meta = {
  title: "Navigation/BreadCrumbs",
  component: BreadCrumbs,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI BreadCrumbs Component",
          url: "https://mui.com/material-ui/react-breadcrumbs/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const linksMock = [
  { label: "page1", href: "//google.com/page1" },
  { label: "page2", href: "//google.com/page2" },
  { label: "page3", href: "//google.com/page3" },
];

let onMockClicks = 0;
const onClickMock = jest.fn(() => onMockClicks++);

export const Primary: Story = {
  args: {
    dataCy: DATA_CY_DEFAULT,
    links: linksMock,
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const firstIndex = 0;
    const firstLinkDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.links, firstIndex);
    const firstLink = canvas.getAllByTestId(firstLinkDataCy).at(0);
    if (firstLink) {
      await userEvent.click(firstLink);
      await expect(onClickMock).toHaveBeenCalledTimes(onMockClicks);
      await expect(onClickMock).toHaveBeenCalledWith(linksMock[firstIndex].href);
    }

    const lastIndex = linksMock.length - 1;
    const lastLinkDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.links, lastIndex);
    const lastLink = canvas.getAllByTestId(lastLinkDataCy).at(0);
    if (lastLink) {
      await userEvent.click(lastLink);
      await expect(onClickMock).toHaveBeenCalledTimes(onMockClicks);
    }
  },
};

export const CustomSeparator: Story = {
  args: {
    ...Primary.args,
    separator: ">",
  },
};

export const SizeMedium: Story = {
  args: {
    ...Primary.args,
    size: "medium",
  },
};

export const SizeLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const WithIcons: Story = {
  args: {
    links: linksMock.map((link, index) => ({ ...link, icon: index % 2 === 0 ? Icons.clock : <AccessibilityIcon /> })),
  },
};

export const Localized: Story = {
  args: {
    localized: true,
    links: linksMock.map((link) => ({ ...link, label: `locale.${link.label}` })),
  },
};
