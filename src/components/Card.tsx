import "./css/card.css";
const Card = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={image}></img>
      <div className="descriptionContainer">
        <a href="#">link</a>
        <p className="para">{text}</p>
      </div>
    </div>
  );
};

export default Card;
