import WilderCard from "./WilderCard";
import "./WildersGrid.css";
import { useWilders } from "../contexts/WildersContext";

export default function WildersGrid() {
  const { wilders } = useWilders();

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder, index) => (
          <WilderCard
            key={index}
            name={wilder.name}
            id={wilder.id}
            skills={wilder.skills}
          />
        ))}
      </section>
    </main>
  );
}
