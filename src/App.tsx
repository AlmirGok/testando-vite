import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Repo {
  name: string;
  description: string;
}

function App() {
  const [count, setCount] = useState(0);

  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);

  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  console.log("RENDERIZOUUH");

  useEffect(() => {
    fetch("https://api.github.com/users/almirgok/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  const filteredRepos =
    search.length > 0
      ? repos.filter((repos) => repos.name.includes(search))
      : [];

  // useEffect(() => {
  //   if (search.length) {
  //     setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  //   }
  // }, [search]);

  return (
    <>
      <div>
        <input
          name="search"
          type="text"
          placeholder="Buscar....."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        {search.length > 0 ? (
          <ul>
            {filteredRepos.map((repo) => {
              return <li key={repo.name}>{repo.name}</li>;
            })}
          </ul>
        ) : (
          <ul>
            {repos.map((repo) => {
              return <li key={repo.name}>{repo.name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
