import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return res.json();
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;
