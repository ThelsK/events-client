import React from "react"
import { connect } from "react-redux"
import { loadEvent, updateEvent, deleteEvent } from "../../actions/events"
import EventDetails from "./EventDetails"

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    console.log("EventDetailsContainer")
    if (!this.props.event) {
      return "Loading..."
    }
    return <EventDetails event={this.props.event} />
  }
}

const mapStateToProps = state => ({
  event: state.event
})

const mapDispatchToProps = {
  loadEvent,
  updateEvent,
  deleteEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)