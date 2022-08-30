import { useCharacters } from "@/api/characters";

type Character = {
  id: number;
  name: string;
};

export const ListPage = () => {
  const { data = {} } = useCharacters();

  const { info = {}, results = [] } = data;

  return (
    <main>
      <h1>List Page</h1>
      <ul>
        {results.map((result: Character) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </main>
  );
};
