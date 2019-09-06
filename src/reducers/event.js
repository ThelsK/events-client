import { EVENT_FETCHED } from "../actions/events"

export default (state = null, action = {}) => {
  console.log("Event Reducer:", action)
  switch (action.type) {
    case EVENT_FETCHED:
      console.log("Reducer:", action.payload)
      return action.payload
    default:
      return state
  }
}