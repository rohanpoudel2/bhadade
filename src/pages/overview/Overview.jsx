import Widgets from "../../components/widgets/Widgets"
import Sidebar from "../../components/sidebar/Sidebar"
import TopBar from "../../components/topbar/TopBar"
import './overview.scss';
import RecentChart from "../../components/recentsChart/RecentChart";
import RecentRent from "../../components/recentrent/RecentRent";
import Schedule from "../../components/schedule/Schedule";

const Overview = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <TopBar />
      <div className="overview">
        <div className="left">
          <Widgets />
          <RecentChart />
        </div>
        <div className="right">
          <RecentRent />
          <Schedule />
        </div>
      </div>
    </div>
  )
}

export default Overview