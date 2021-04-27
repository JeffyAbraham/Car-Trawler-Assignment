import CarContainer from "../car-container/car-container";

export default function CarList({ carDetails }) {
  return (
    <div style={{marginTop:'250px'}}>
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
