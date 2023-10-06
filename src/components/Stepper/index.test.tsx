import renderer from "react-test-renderer";

import { StepperType } from "../../types/Stepper";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Stepper, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<StepperType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "span",
  localized: true,
  props: {
    stepList: [
      { label: "PAGE", content: "CONTENT1" },
      { label: "PAGE2", content: "CONTENT2" },
      { label: "PAGE3w", content: "CONTENT1" },
    ],
    activeStep: 0,
    finishContent: "",
    onBackClick: jest.fn(),
    onNextClick: jest.fn(),
    onFinishClick: jest.fn(),
  },
};

const getStepperTestable = (options?: IPartialTestOptions<StepperType>) =>
  getTestableComponent(Stepper, DEFAULT_TEST_OPTIONS, options);

describe("Progress test suite:", () => {
  it("default", () => {
    const { element } = getStepperTestable();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("Final Content", () => {
    const { element } = getStepperTestable({ props: { finishContent: "FINAL CONTENT", activeStep: 3 } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});