import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShowActions from 'actions/show'
import { ShowComponent } from 'components'

class ShowContainer extends React.Component {
  static propTypes = {
    getShow: PropTypes.func.isRequired,
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,

    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    props.getShow(props.match.params.id)
  }

  render() {
    const { show, markWatched, unmarkWatched } = this.props
    return <ShowComponent show={show} markWatched={markWatched} unmarkWatched={unmarkWatched} />
  }
}

const mapStateToProps = createStructuredSelector({
  show: createSelector(state => state.show, show => show),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShowActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)