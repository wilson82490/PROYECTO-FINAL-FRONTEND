import { vinilos } from "../data/discos";
import ViniloCard from "../components/ViniloCard";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <img src="https://picsum.photos/1100/200" alt="Lorem Picsum" />
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de Vinilos</h1>
          <p>
            Explora nuestra colección de vinilos, consulta sus detalles y administra el
            contenido desde un panel privado.
          </p>
          <a className="button" href="#">
            Ver catálogo
          </a>
        </div>
      </section>

      {/* <div style={{ width: "300", border: "solid red" }}>
        <img src="https://picsum.photos/300/100" alt="Lorem Picsum" />
      </div> */}

      <img src="https://picsum.photos/2200/300" alt="Lorem Picsum" />
      <section featured-section >
        <div className="container"> 
            <h2>Vinilos Destacados</h2>
        <div className="vinilos-list">
          {vinilos.slice(0, 4).map((vinilo) => (
            <ViniloCard key={vinilo.id} vinilo={vinilo} />
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;