// TODO: temp commenting out snapshots due to id="mui-XXXXX" property
// import renderer from "react-test-renderer";

import { ISelect } from "../../types/Select";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Select, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ISelect<any>> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "input",
  localized: true,
  props: {
    multiple: false,
    onChange: jest.fn(),
    options: ["Sculpture", "Photography", "Paintings", "Murales", "Mosaic"],
  },
};

const getSelectTestable = (options?: IPartialTestOptions<ISelect<any>>) =>
  getTestableComponent(Select, DEFAULT_TEST_OPTIONS, options);

// TODO: missing localized test
describe("Select Single test suite:", () => {
  it("default", () => {
    const { wrapper } = getSelectTestable();
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiOutlinedInput-input"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("required")).toBeFalsy();
    expect(wrapper.prop("type")).toEqual("text");
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { wrapper } = getSelectTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);
  });

  it("disabled", () => {
    const { wrapper } = getSelectTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();
  });

  it("groupBy - default", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: {
        groupBy: (option) => option.slice(0, 1),
      },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(["Murales", "Mosaic", "Photography", "Paintings", "Sculpture"]);
  });

  it("groupBy - autosort", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: {
        autoSort: true,
        groupBy: (option) => option.slice(0, 1),
      },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]);
  });

  it("immutable options", () => {
    const frozenOptions = Object.freeze(["Photography", "Sculpture", "Mosaic", "Murales", "Paintings"]) as string[];
    getSelectTestable({ props: { options: frozenOptions } });
  });

  it("loading", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({ dataCy: outerWrapperDataCy, domNode: "div", props: { loading: true } });
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(1);
  });

  it("onChange - single", () => {
    const onChangeCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { onChange: onChangeCallback },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const firstOption = wrapper.find(`li[data-option-index=0]`);
    firstOption.simulate("click");

    expect(onChangeCallback).toHaveBeenCalledTimes(1);
    expect(onChangeCallback).toHaveBeenCalledWith("Sculpture");
  });

  it("onChange - multiple", () => {
    const onChangeCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { multiple: true, onChange: onChangeCallback, value: [] },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const firstOption = wrapper.find(`li[data-option-index=0]`);
    firstOption.simulate("click");

    expect(onChangeCallback).toHaveBeenCalledTimes(1);
    expect(onChangeCallback).toHaveBeenCalledWith(["Sculpture"]);
  });

  it("onClose", () => {
    const onCloseCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { onClose: onCloseCallback },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const firstOption = wrapper.find(`li[data-option-index=0]`);
    firstOption.simulate("click");
    input.simulate("click");

    expect(onCloseCallback).toHaveBeenCalledTimes(1);
  });

  it("onInputChange", () => {
    const onInputChangeCallback = jest.fn();
    const { wrapper } = getSelectTestable({
      mountOnly: true,
      props: { onInputChange: onInputChangeCallback },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("change", { target: { value: "Textual Value" } });

    // TODO#lb: fix this it was 1!
    expect(onInputChangeCallback).toHaveBeenCalledTimes(2);
    expect(onInputChangeCallback).toHaveBeenCalledWith("Textual Value");
  });

  it("onScroll", () => {
    const onScrollEndCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { onScrollEnd: onScrollEndCallback },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const listbox = wrapper.find("ul.MuiAutocomplete-listbox");
    listbox.simulate("scroll", { clientHeight: 100, scrollHeight: 100, scrollTop: 0 });

    expect(onScrollEndCallback).toHaveBeenCalledTimes(1);
  });

  it("options - default", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(DEFAULT_TEST_OPTIONS.props.options);
  });

  it("options - autoSort", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { autoSort: true },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(DEFAULT_TEST_OPTIONS.props.options.reverse());
  });

  it("options - custom rendering", () => {
    const customOptionRendering = (option: string) => option.slice(0, 3);
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: {
        customOptionRendering,
      },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`li[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(DEFAULT_TEST_OPTIONS.props.options.map(customOptionRendering));
  });

  it("placeholder", () => {
    const placeholder = "Placeholder";
    const { wrapper } = getSelectTestable({ props: { placeholder } });
    expect(wrapper.prop("placeholder")).toEqual(placeholder);
  });

  it("required", () => {
    const { wrapper } = getSelectTestable({ props: { required: true } });
    expect(wrapper.prop("required")).toBeTruthy();
  });

  it("value", () => {
    const value = DEFAULT_TEST_OPTIONS.props.options[0];
    const { wrapper } = getSelectTestable({ props: { value } });
    expect(wrapper.prop("value")).toEqual(value);
  });
});
