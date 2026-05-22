function ViniloCard({ vinilo }) {
    return (
       <article className="vinilo-card">
           <img src={vinilo.image} alt={vinilo.title} />
           <div className="vinilo-card-content">
               <h2>{vinilo.title}</h2>
               <p>{vinilo.genre} </p>
               <span>{vinilo.year}</span>
           </div>
       </article>
    )
}

export default ViniloCard;