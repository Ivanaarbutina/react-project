import { AnimalType } from "./animals";
import Paw from "./../../assets/Paw_Print.svg";
import Diet from "./../../assets/diet.png";
import Forest from "./../../assets/forest-svgrepo-com.svg";

type AnimalCardProp = {
  animal: AnimalType;
};

const AnimalCard = ({ animal }: AnimalCardProp) => {
  const { name, animalClass, diet, species, habitat } = animal;

  return (
    <div className="grid--primary">
      <div className="card">
        <div className="card__header">
          <img
           className="card__header__img"
            width={"100"}
            src={`https://source.unsplash.com/random/?${animal.name}`}
            alt="Animal image"
          />
          <div>
            <div className="card__title">{name}</div>
            <div className="card__subtitle">{species}</div>
          </div>
        </div>

        <div className="card__row">
          <img width={24} src={Paw} />
          <span className="card__row__text">{animalClass}</span>
        </div>
        <div className="card__row">
          <img src={Diet}/>
          <span className="card__row__text">{diet}</span>
        </div>

        <div className="card__row">
          <img src={Forest}/>
          <span className="card__row__text">{habitat}</span>
        </div>
      </div>
    </div>
  );
};
export default AnimalCard;
