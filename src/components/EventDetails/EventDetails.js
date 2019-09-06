import React from "react"
// import CreateEventFormContainer from "../CreateEventForm"

class EventDetails extends React.Component {
  render() {
    return (
      <div>
        <p><strong>Name:</strong> {this.props.event.name}</p>
        <p><strong>Date:</strong> {this.props.event.date}</p>
        <p><strong>Description:</strong> {this.props.event.description}</p>
      </div>
    )
  }
}

export default EventDetails