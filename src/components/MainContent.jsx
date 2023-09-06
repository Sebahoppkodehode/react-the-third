const geckos = [
  {
    id: 1,
    name: "Leopard Gecko",
    description:
      "Leopard geckos are nocturnal, ground-dwelling geckos that can be found in desert environments in Afghanistan, Iran, Pakistan and parts of India. They are generally docile and easy to tame. They do not have the sticky toe pads like other geckos, so they do not climb walls, but unlike other geckos, they do have eyelids.",
    image: "/pictures/leo.jpg",
  },
  {
    id: 2,
    name: "Crested Gecko",
    description:
      "Crested geckos are naturally found on the islands of New Caledonia, located near Australia and Fiji. Crested geckos are arboreal, meaning that they like climbing trees and shrubs in their natural environment. Crested geckos have sticky pads on their toes which allows them to climb smooth surfaces, including glass.",
    image: "/pictures/crested-gecko.avif",
  },
  {
    id: 3,
    name: "Day Gecko",
    description:
      "Day geckos do not have claws, but their toes have thin, broad, adhesive scales (called lemellae), which allow them to climb smooth surfaces. Their eyes are large, with round pupils ringed in bright blue. Their tails are as long (or longer) than their bodies. Adults can grow up to 10 inches (25 centimeters) long.",
    image: "/pictures/day-gecko.avif",
  },
];

function MainContent() {
  return (
    <main>
      <section>
        <h2>List of Geckos!</h2>
        <div className="gecko-list">
          {geckos.map((gecko) => (
            <div key={gecko.id} className="gecko-card">
              <img src={gecko.image} alt={gecko.name} />
              <h3>{gecko.name}</h3>
              <p>{gecko.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default MainContent;
