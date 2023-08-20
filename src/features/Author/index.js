import Section from "../../common/Section";
import Header from "../../common/Header";
import Portrait from "./Portrait";

const Author = () => {
  return (
    <main>
      <Portrait />
      <Header title="Author" />
      <Section title="Marcel Urbańczyk"></Section>
    </main>
  );
};

export default Author;
