import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom"

import Scheduler from "./pages/Scheduler"
import Home from "./pages/Home"
import { SetLocation } from "./pages/screens/SetLocation"
import App from "./App"
import { SetDate } from "./pages/screens/SetDate"
import { SetBudget } from "./pages/screens/SetBudget"
import { Results } from "./pages/screens/Results"

export const AppRouter = () => {
  return (
    <div>
      <App />
      <Router>
        <Switch>
          <Route path="/" index Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/app/location" Component={SetLocation} />
          <Route path="/app/event-date" Component={SetDate} />
          <Route path="/app/budget" Component={SetBudget} />
          <Route path="/app/results" Component={Results} />
          <Route path="/scheduler" Component={Scheduler} />
        </Switch>
      </Router>
    </div>
  )
}
