type MovieBackdropProps = {
  path: string
  className?: string,
  width?: 200 | 300 | 400 | 500
}

const MovieBackdrop = ({ path, className, width = 200 }: MovieBackdropProps) => {
  return <img src={`https://image.tmdb.org/t/p/w${width}/${path}`} className={className} />
}

export default MovieBackdrop
