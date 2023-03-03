// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Alert Notifications </h1>
        <Notification>
          <div>
            <div className="flex-container">
              <AiFillCheckCircle className="success icon-style" />
              <h1 className="success heading">Success</h1>
            </div>
            <p className="description">
              You can access all the files in the folder{' '}
            </p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="flex-container">
              <RiErrorWarningFill className="failure icon-style" />
              <h1 className="failure heading">Error</h1>
            </div>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="flex-container">
              <MdWarning className="warning icon-style" />
              <h1 className="warning heading">Warning</h1>
            </div>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="flex-container">
              <MdInfo className="info icon-style" />
              <h1 className="info heading">Info</h1>
            </div>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </Notification>
      </div>
    )
  }
}
export default AlertNotifications
