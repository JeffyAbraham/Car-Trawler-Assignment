import Avis from "../../assests/avis.png";

export default function ServiceProvider({ image, name, handleClick }) {
  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      style={{ marginLeft: "10px", marginTop: "20px" }}
    >
      <img name={name} src={Avis} width="64px" alt="services" />
    </div>
  );
}
