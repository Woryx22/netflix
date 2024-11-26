import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return(
        <button className="reload-button" onClick={props.reloadMovies}>Načíst filmy</button>
    )
}
export default ReloadMovieButton