import './index.css'

const BrowseHistoryItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="list-items">
        <p className="time-access">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <div className="title-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button type="button" data-testid="delete" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default BrowseHistoryItem
