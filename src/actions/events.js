import request from "superagent"
const baseUrl = "http://localhost:4000"

export const EVENTS_FETCHED = "EVENTS_FETCHED"
export const EVENT_FETCHED = "EVENT_FETCHED"
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS"

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  payload: event
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
})

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return

  request(`${baseUrl}/event`)
    .then(res => {
      dispatch(eventsFetched(res.body))
    })
    .catch(console.error)
}

export const loadEvent = id => (dispatch, getState) => {

  console.log("loadEvent 1")
  const event = getState().events &&
    getState().events.find(event => event.id === id)
  if (event) {
    console.log("Action:", event)
    dispatch(eventFetched(event))
    return
  }
  console.log("loadEvent 2")

  request(`${baseUrl}/event/${id}`)
    .then(res => {
      dispatch(eventFetched(res.body))
    })
    .catch(console.error)
}

export const createEvent = data => dispatch => {
  request.post(`${baseUrl}/event`).send(data)
    .then(res => {
      dispatch(eventCreateSuccess(res.body))
    })
    .catch(console.error)
}

export const updateEvent = () => (dispatch, getState) => {
}

export const deleteEvent = () => (dispatch, getState) => {
}