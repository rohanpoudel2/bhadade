import './topbar.scss';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="searchbar">
          <input type="search" placeholder='Search...' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="right">
        <div className="icons">
          <div className="icon">
            <i class="fa-solid fa-message"></i>
            <div className="notification"> </div>
          </div>
          <div className="icon">
            <i class="fa-solid fa-bell"></i>
            <div className="notification">

            </div>
          </div>
        </div>
        <div className="user">
          <img
            src="https://thumbs.dreamstime.com/b/vector-cartoon-illustration-cute-girl-smiley-face-isolated-white-background-vector-cartoon-illustration-cute-girl-face-124677940.jpg"
            alt="userProfile"
          />
          <span>GharBeti</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar