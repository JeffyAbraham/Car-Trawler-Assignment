import IconLegend from "./icon-legend.component";
import{shallow} from 'enzyme'
import Alamo from "../../assests/alamo.png";
var data = { title: "Some", icon: Alamo };
describe("Icon legend component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<IconLegend icon={Alamo} />);
  });

  it("it should render without errors", () => {
    const wrapper = component.find(".legend-flexbox");
    console.log(component.debug())
    expect(wrapper.length).toBe(1);
  });
  it('it should have image and title passed to it',()=>
  {
    const wrapper = component.find("img").prop("src");
    expect(wrapper).toBe(Alamo)
  })
});
