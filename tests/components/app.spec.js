import {shallow} from "enzyme";
import App from "../../src/components/app";

describe("App", () => {
    let component;

    beforeEach(() => {
        component = shallow(<App/>);
    });

    it("renders something", () => {
        expect(component).to.exist;
    });
});
