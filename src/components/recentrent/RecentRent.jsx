import RentReceivedCard from '../rentreceivedcard/RentReceivedCard'
import './recentrent.scss'

const RecentRent = () => {
  return (
    <div className="recentrent">
      <div className="recent-rent-title">
        <span>Recent Rents</span>
      </div>
      <div className="rents">
        <RentReceivedCard status='pending' />
        <RentReceivedCard status='paid' />
        <RentReceivedCard status='paid' />
        <RentReceivedCard status='paid' />
        <RentReceivedCard status='pending' />
      </div>
    </div>
  )
}

export default RecentRent