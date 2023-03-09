import WilderCard from "./WilderCard";
import "./WildersGrid.css";
import wildersData from "../wildersData";

export default function WildersGrid() {
  console.log(wildersData);

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wildersData.map((wilder, index) => (
          <WilderCard
            key={index}
            name={wilder.name}
            city={wilder.city}
            skills={wilder.skills}
          />
        ))}
      </section>
    </main>
  );
}
