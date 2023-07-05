import { AnimalType } from "./animals";
import Paw from "./../../assets/Paw_Print.svg";
import Diet from "./../../assets/diet.png";
import Forest from "./../../assets/forest-svgrepo-com.svg";
import Button from "../../components/button";

type AnimalCardProp = {
  animal: AnimalType;
  onDelete: (id:string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProp) => {
  const { name, animalClass, diet, species, habitat, id } = animal;

  return (
    <div>
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
          <img src={Diet} />
          <span className="card__row__text">{diet}</span>
        </div>

        <div className="card__row">
          <img src={Forest} />
          <span className="card__row__text">{habitat}</span>
        </div>
        <Button size="sm" text="delete" onClick={() => onDelete(id)} color="red" />
      </div>
    
    </div>
  );
};
export default AnimalCard;
