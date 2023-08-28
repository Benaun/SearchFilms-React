import FilmCard from '../components/FilmCard';
import css from './FilmsList.module.css';

export default function FilmsList({ films }) {
    return (
        <div className={css.films__list}>
            {films.map((film) => (
                <FilmCard key={film.imdbID} film={film} />
            ))}
        </div>
    )
}