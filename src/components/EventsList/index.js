import React from "react"
import { connect } from "react-redux"
import { loadEvents } from "../../actions/events"
import EventsList from "./EventsList"

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    if (!this.props.events) {
      return "Loading..."
    }
    return <EventsList events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = {
  loadEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)