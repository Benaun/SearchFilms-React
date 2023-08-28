import css from './FilmCard.module.css';

export default function FilmCard({ film }) {
  return (
    <div className={css.film__card}>
      <h3 className={css.film__title}>{film.Title} {film.Year}</h3>
      <img className={css.film__img} src={film.Poster} alt={film.Title} />
    </div>
  )
}