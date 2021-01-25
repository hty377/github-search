import { shallow } from "enzyme";
import ErrorHandle from "../components/ErrorHandler";

describe("Error", () => {
    it("should render Error Component", ()=>{
        const wrapper = shallow(
            <ErrorHandle error="No repositories found" />
        );
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});