"use client";

import { useEffect, useState } from "react";

const BASE_URL = "https://superheroapi.com/api.php/4995282617154105/";

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  const fetchHero = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();
      return {
        name: data.name,
        intelligence: data.powerstats.intelligence,
        strength: data.powerstats.strength,
        image: data.image.url,
      };
    } catch (error) {
      console.error("Error fetching hero data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const heroIds = [200, 465];
      const heroData = await Promise.all(heroIds.map((id) => fetchHero(id)));
      setHeroes(heroData.filter((hero) => hero)); // Filtra valores nulos
    };

    fetchData();
  }, []);

  return (
    <div id="heroes">
      {heroes.map((hero, index) => (
        <article key={index}>
          <img src={hero.image} alt={`${hero.name} image`} />
          <h1>{hero.name}</h1>
          <p>
            Intelligence: 
            <span style={{ width: `${hero.intelligence}%`, backgroundColor: "#F9B32F" }}></span>
          </p>
          <p>
            Strength: 
            <span style={{ width: `${hero.strength}%`, backgroundColor: "#FF7C6C" }}></span>
          </p>
        </article>
      ))}
    </div>
  );
}
