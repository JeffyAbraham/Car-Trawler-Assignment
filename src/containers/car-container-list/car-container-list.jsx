import CarContainer from "../car-container/car-container";

export default function CarList({ carDetails }) {
  return (
    <div>
      {carDetails.map((carData) => {
        return <CarContainer {...carData} />;
      })}
    </div>
  );
}
