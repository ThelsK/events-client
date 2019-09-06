import React from "react"
import { Route } from "react-router-dom"
//import Home from "./components/Home"
import EventsList from "./components/EventsList"
import EventDetails from "./components/EventDetails"

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={EventsList} />
        <Route path="/events/:id" component={EventDetails} />
      </div>
    )
  }
}

export default App