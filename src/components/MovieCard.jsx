import "./MovieCard.css";
import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "No-Poster.png"} alt={movie.title} />
            <h2 className="movie-title">{movie.title}</h2>

            <div className="content flex flex-col text-start justify-center bottom-0 top-0">
                <p className="line-clamp-3">{movie.overview}</p>
                <div className="rating">
                    <img src="./star.svg" alt="Star" />
                    <p>{movie.vote_average}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <span>{movie.release_date}</span>
                    <span>•</span>
                    <span>{movie.original_language}</span>
                </div>
            </div>
        </div>
    );
}
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
};