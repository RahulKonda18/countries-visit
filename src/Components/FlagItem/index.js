import './index.css'

const FlagItem = props => {
  const {details, onRemove} = props
  const {id, name, imageUrl} = details

  const remove = () => {
    onRemove(id)
  }
  return (
    <li className="flag-item">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="bottom">
        <p className="name">{name}</p>
        <button type="button" onClick={remove} className="button1">
          Remove
        </button>
      </div>
    </li>
  )
}

export default FlagItem
