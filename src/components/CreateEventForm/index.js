import React from "react"
import { connect } from "react-redux"
import { createEvent } from "../../actions/events"
import CreateEventForm from "./CreateEventForm"

class CreateEventFormContainer extends React.Component {
  state = {
    name: "",
    date: "",
    description: "",
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      name: "",
      date: "",
      description: "",
    })
  }

  render() {
    return (
      <CreateEventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    )
  }
}

const mapDispatchToProps = {
  createEvent
}

export default connect(null, mapDispatchToProps)(CreateEventFormContainer)