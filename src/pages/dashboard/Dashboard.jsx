import Widgets from '../../components/widgets/Widgets';
import Sidebar from '../../components/sidebar/Sidebar';
import TopBar from '../../components/topbar/TopBar';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <TopBar />
      <Widgets />
    </div>
  )
}

export default Dashboard