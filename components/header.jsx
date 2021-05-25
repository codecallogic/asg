
const Header = ({}) => {
  
  return (
    <div className="header">
      <div className="header-bg-video">
        <video className="header-bg-video-content" autoPlay muted loop>
          <source src="asg-background.mp4" type="video/mp4" />
          <source src="asg-background.mp4" type="video/webm"/>
          Your browser is not supported!
        </video>
        <div className="header-bg-video-filter"></div>
      </div>
      <div className="header-content">
        <div className="header-content-subtitle">WeASG</div>
        <h1 className="header-content-title">WeASG's Community Style In One Spot</h1>
        <span className="header-content-quote">"New styles in retail" - The Boston Globe</span>
        <button className="header-content-button" onClick={() => window.location.href = '/shop'}>Shop Now</button>
      </div>
    </div>
  )
}

export default Header
