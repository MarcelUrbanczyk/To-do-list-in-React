import Section from "../../common/Section";
import Header from "../../common/Header";
import Portrait from "./Portrait";
import { Paragraph } from "./styled";

const Author = () => {
  return (
    <main>
      <Portrait />
      <Header title="Author" />
      <Section
        title="Marcel Urbańczyk"
        body={
          <Paragraph>
            Hello, my name is Marcel, and I'm 18 years old. My dream job is to
            become a programmer. From a young age, I've enjoyed solving puzzles,
            and I used to solve a variety of Rubik's cubes. This is one of the
            reasons why I'm drawn to programming – it feels like solving a
            complex puzzle. In addition, I have a keen interest in movies,
            particularly thrillers, as well as books and, of course, computer
            games. These hobbies not only entertain me but also fuel my
            creativity and passion for programming.
          </Paragraph>
        }
      ></Section>
    </main>
  );
};

export default Author;
