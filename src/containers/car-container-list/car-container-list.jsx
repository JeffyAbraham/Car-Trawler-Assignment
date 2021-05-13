import CarContainer from "../car-container/car-container";

export default function CarList({ carDetails }) {
  return (
    <div className='car-container-parent' style={{marginTop:'250px'}}>
      {carDetails.map((carData) => {
        return (
          <div>
            {" "}
            <CarContainer {...carData} />
          </div>
        );
      })}
    </div>
  );
}
