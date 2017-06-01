import React from 'react'
import PropTypes from 'prop-types'

class BaseComponent extends React.Component {
 _bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
 }
}

export default class TodoSearch extends BaseComponent{

  constructor(props) {
    super(props);
    this._bind('handleSearch');
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    var showCompleted = this.showCompleted.checked
    // console.log('from handleSearch show completed: ', showCompleted)
    var searchText = this.searchText.value
    this.props.onSearch(showCompleted, searchText)
  }

render(){
    return (
      <div className="container__header">
        <div>
          <input type="search" ref={(s)=>this.searchText=s}  placeholder="Search todos" onChange = {this.handleSearch}/>
        </div>

        <div>
          <label>
            <input type="checkbox" ref={(cb)=>this.showCompleted=cb}
              onChange = {this.handleSearch}/> Show completed todos
          </label>
        </div>
      </div>
      )
  }
}

TodoSearch.defaultProps = {searchText: '', showCompleted: false}
TodoSearch.propTypes = {
                        searchText: PropTypes.string,
                        showCompleted: PropTypes.bool,
                        onSearch: PropTypes.func
                        }
