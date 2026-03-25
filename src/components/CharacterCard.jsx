import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
    return (
        <article className="card">
            <img src={character.image} alt={character.name} className="card-image" />
            <div className="card-body">
                <h3 className="card-title">{character.name}</h3>
                <p className="card-meta">
                    <strong>Status:</strong> {character.status}
                    <strong>Species:</strong> {character.species}
                </p>
                <Link to={`/characters/${character.id}`} className="button">
                    View Details
                </Link>
            </div>
        </article>
    );
}