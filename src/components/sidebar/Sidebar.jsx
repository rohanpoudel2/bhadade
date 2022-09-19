import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>GharBeti</h1>
      </div>
      <div className="sidebar-items">
        <div className="sidebar-item active">
          <i class="fa-solid fa-house"></i>
          <span>Overview</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-building"></i>
          <span>Properties</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-dollar-sign"></i>
          <span>Activity</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-people-carry-box"></i>
          <span>Tenants</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-gear"></i>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar