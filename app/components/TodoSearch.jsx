import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from 'actions'


export  class TodoSearch extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    var {dispatch, showCompleted, searchText} = this.props;

    // Didn't work
    // if(searchText === undefined) {
    //   searchText = ''
    // }

    return (
      <div>
        <div className="container__header">
          <div>
            <input type="search"
              ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                  var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
              }}/>
          </div>
          <div>
            <label>
              <input type="checkbox"
                ref="showCompleted"
                checked={showCompleted}
                onChange={() => {
                  dispatch(actions.toggleShowCompleted());
                }}/>
              Show completed todos
            </label>
          </div>
        </div>
      </div>
    )
  }
}

TodoSearch.propTypes = {
  dispatch: PropTypes.func,
  showCompleted: PropTypes.bool,
  searchText: PropTypes.string,
}

// Connect TodoSearch to the Redux Store-- make it default
export default connect(
    (state) => {
      return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
      }
    }
    )(TodoSearch);



        {/* doesn't work yet <div>
  <input type="search"
    ref={(search) => this.searchText = search}
    placeholder="Search todos"
    value={this.searchText} onChange={() => {
      dispatch(actions.setSearchText(this.searchText));
    }}/>
</div> */}
