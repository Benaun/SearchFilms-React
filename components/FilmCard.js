import css from './FilmCard.module.css';

export default function FilmCard({ film }) {
  return (
    <div className={css.film__card}>
      <a className={css.film__link} href='#'>
        <img className={css.film__img} src={film.Poster} alt={film.Title} />
        <div className={css.film__description}>
          <h3 className={css.film__title}>{film.Title}</h3>
          <p className={css.film__subtitle}> Release: {film.Year}</p>
        </div>
      </a>


    </div>
  )
}