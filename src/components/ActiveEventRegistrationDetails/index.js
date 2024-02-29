// Write your code here

import {Component} from 'react'

import './index.css'

const activecard = {
  yetToRegister: 'YET_TO_REGISTER',
  registred: 'REGISTERED',
  registerClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {activeEvent: this.props.activeEvent}

  defaultPage = () => {
    return (
      <div className="default-page">
        <p>Click on an event, to view its registration details</p>
      </div>
    )
  }

  yetRegister = () => {
    return (
      <div className="container-yet-to-registered">
        <div className="crad-yet-to-register">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register-image"
          />
          <p className="description-yet-register">
            A live performance brings so much to your relationship with dance.
            seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="buttn-register">Register Here</button>
        </div>
      </div>
    )
  }

  registrationClosed = () => {
    return (
      <div className="container-yet-to-registered">
        <div className="crad-yet-to-register">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="register-image"
          />
          <h1 className="heading-yet-registered-alredy">
            Registrations Are Closed Now!
          </h1>
          <p className="description-yet-register">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      </div>
    )
  }

  registeredAlready = () => {
    return (
      <div className="container-yet-to-registered">
        <div className="crad-yet-to-register">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt=" registered"
            className="register-image"
          />
          <h1 className="heading-yet-registered-alredy">
            You have already registered for the event
          </h1>
        </div>
      </div>
    )
  }

  render() {
    const {activeEvent} = this.props
    switch (activeEvent) {
      case activecard.yetToRegister:
        return this.yetRegister()
      case activecard.registred:
        return this.registeredAlready()
      case activecard.registerClosed:
        return this.registrationClosed()
      default:
        return this.defaultPage()
    }
  }
}
export default ActiveEventRegistrationDetails
