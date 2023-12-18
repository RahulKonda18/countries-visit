import './index.css'

const CountryItem = props => {
  const {details, onVisited} = props
  const {name, isVisited} = details

  const remove = () => {
    onVisited(details)
  }
  return (
    <li className="list">
      <div className="row">
        <p className="country">{name}</p>
        {isVisited ? (
          <p className="country2">Visited</p>
        ) : (
          <button type="button" onClick={remove} className="button2">
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
