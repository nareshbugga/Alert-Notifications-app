// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="sub-flex-container">
      <div>{children}</div>
      <div>
        <GrFormClose className="close-icon" />
      </div>
    </div>
  )
}
export default Notification
