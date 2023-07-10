import Container from "./container";
import Flowers from "./../assets/gorgeous-arrangement-flowers-wallpaper.jpg";

type HomeType = {
  id: number;
  text: string;
};

const selectText: HomeType[] = [
  {
    id: 1,
    text: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ill cupiditate repellendus, in molestias libero ipsam, dolorum porrovoluptatem rem, corrupti quibusdam odio quo unde accusamus. Rerumnumquam quae aperiam!",
  },
  {
    id: 2,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur odio ex dolor dolorem nobis quam accusamus ab, minus temporibus alias esse est expedita labore distinctio cumque! Expedita, fugit inventore.",
  },
  {
    id: 3,
    text: " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio optio facilis accusamus esse praesentium. Culpa vero suscipit architecto laboriosam ex, officia, aperiam est dolorem, a in libero cum facilis facere!",
  },
];
const NewHome = () => {
  return (
    <Container>
      <div className="New">
        <h2>Last project in school</h2>
        <header className="new__header">
          <span className="material-symbols-outlined">
            settings_accessibility
          </span>
          <nav className="new__nav">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </nav>
        </header>
        <section className="new__about">
          <h3>About last project</h3>
          <div>
            {selectText.map((select) => {
              return (
                <div key={select.id} className="new__desc">
                  {select.text}
                </div>
              );
            })}
          </div>
          <img className="new__flowers" src={Flowers} />
        </section>
        <footer className="new__footer">
          <div>
            Image by{" "}
            <a href="https://www.freepik.com/free-photo/gorgeous-arrangement-flowers-wallpaper_16855075.htm#&position=24&from_view=search">
              Freepik
            </a>
          </div>
          <span>10.07.2023</span>
        </footer>
      </div>
    </Container>
  );
};

export default NewHome;
