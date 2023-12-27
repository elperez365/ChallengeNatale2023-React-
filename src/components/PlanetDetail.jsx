/* eslint-disable react/prop-types */
const PlanetDetail = ({
  name,
  image,
  title,
  description,
  distanceFromSun,
  diameter,
  gravity,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{distanceFromSun}</p>
      <p>{diameter}</p>
      <p>{gravity}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default PlanetDetail;
