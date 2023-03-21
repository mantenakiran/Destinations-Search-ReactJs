// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchList: ''}

  searchInput = event => {
    this.setState({searchList: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchList} = this.state
    const result = searchList.toLowerCase()

    const searchResult = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(result),
    )

    return (
      <div className="bg-container">
        <div className="destinations-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              value={searchList}
              className="inputEl"
              onChange={this.searchInput}
              placeholder="Search"
              type="search"
            />
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="list-container">
            {searchResult.map(eachUser => (
              <DestinationItem userDetails={eachUser} key={eachUser.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
