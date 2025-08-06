import CalendarApp from "./Components/CalendarApp" //This imports the CalendarApp component from the Components directory, there is no need to specify the file extension as it is assumed to be .jsx
import './Components/CalendarApp.css' //The CSS file is imported to style the CalendarApp component


const App = () => {
  return (
    <div className="container">
      <CalendarApp></CalendarApp>
    </div>
  )
}

export default App
