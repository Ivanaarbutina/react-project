import { AnimalType } from "./animals";
import Paw from "./../../assets/Paw_Print.svg";

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
            width={"100"}
            src={`https://source.unsplash.com/random/?${animal.name.replace(
              " ",
              "-"
            )}`}
          />
          <div>
            <div className="card__title">{name}</div>
            <div className="card__subtitle">{species}</div>
          </div>
        </div>

        <div className="card__row">
          <img width={24} src={Paw} />
          <span>{animalClass}</span>
        </div>
        <div className="card__row">
          <span>Icon</span>
          <span>{diet}</span>
        </div>

        <div className="card__row">
          <span>Icon</span>
          <span>{habitat}</span>
        </div>
      </div>
    </div>
  );
};
export default AnimalCard;
