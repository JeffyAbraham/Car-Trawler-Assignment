import { useState } from "react";
import CustomChecKBox from "../../components/custom-checkbox/custom-checkbox";
import Toggle from "../toggle-display/toggle-display";
import { filterByPrice } from "../../redux/car-reducer/car-action";
import { connect } from "react-redux";
function FilterContainer({ filterByPrice }) {
  //save the id of the current checkbox
  const [activePrice, setCurrent] = useState(0);
  var CheckBoxPrice = [
    {
      id: 1,
      name: "700",
      label: "Less than 700 €",
    },
    { id: 2, name: "800", label: "800 € to 900 €" },
    {
      id: 3,
      name: "900",
      label: "More than 900 €",
    },
  ];
  var BaggeCount = [{}];

  const handleChange = function (e) {
    console.log(e.target.id);
    setCurrent(e.target.id);
    filterByPrice(e.target.id);
  };

  return (
    <div>
      <Toggle>
        {CheckBoxPrice.map((checkbox) => {
          if (activePrice == checkbox.id) {
            return (
              <CustomChecKBox
                active="true"
                handleChange={handleChange}
                {...checkbox}
              />
            );
          } else {
            return (
              <CustomChecKBox
                active="false"
                handleChange={handleChange}
                {...checkbox}
              />
            );
          }
        })}
      </Toggle>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  filterByPrice: (id) => dispatch(filterByPrice(id)),
});

export default connect(null, mapDispatchToProps)(FilterContainer);
