import React from "react"
import { Link } from "react-router-dom"
import CreateEventFormContainer from "../CreateEventForm"

class EventsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.events.map(event =>
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>
                {event.name}
              </Link>
            </li>
          )}
        </ul>
        <CreateEventFormContainer />
      </div>
    )
  }
}

export default EventsList