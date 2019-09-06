import React from "react"

class CreateEventForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.props.values.name}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Date:
          <input
            name="date"
            type="text"
            value={this.props.values.date}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.props.values.description}
            onChange={this.props.onChange}
          />
        </label>
        <button>
          Add event
        </button>
      </form>
    )
  }
}

export default CreateEventForm