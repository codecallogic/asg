
const BillBoards = ({}) => {
  
  return (
    <div className="billboards">
      <div className="billboards-row">
        <div className="billoboards-row-left">
          <img className="billoboards-row-left-image"src="https://images.unsplash.com/photo-1612986568842-42f75cc9e36a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Billbaord" />
        </div>
        <div className="billboards-row-right">
          <div className="billboards-row-right-container">
            <div className="billboards-row-right-subtitle">ASG</div>
            <div className="billboards-row-right-title">Racks</div>
            <div className="billboards-row-right-text">Shop unique items & shirts. Enjoy world-wide shipping!</div>
            <button className="billboards-row-right-button" onClick={() => window.location.href = '/shop'}>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="billboards-row">
        <div className="billboards-row-right">
          <div className="billboards-row-right-container flex-right">
            <div className="billboards-row-right-subtitle">ASG</div>
            <div className="billboards-row-right-title">Racks</div>
            <div className="billboards-row-right-text">Shop unique items & shirts. Enjoy world-wide shipping!</div>
            <button className="billboards-row-right-button" onClick={() => window.location.href = '/shop'}>Shop Now</button>
          </div>
        </div>
        <div className="billoboards-row-left">
          <img className="billoboards-row-left-image"src="https://images.unsplash.com/photo-1483335584694-fb0f729b0f9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="Billbaord" />
        </div>
      </div>
      <div className="billboards-row">
        <div className="billoboards-row-left">
          <img className="billoboards-row-left-image"src="https://images.unsplash.com/photo-1611353229944-bcf22ddcdf09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Billbaord" />
        </div>
        <div className="billboards-row-right">
          <div className="billboards-row-right-container">
            <div className="billboards-row-right-subtitle">ASG</div>
            <div className="billboards-row-right-title">Racks</div>
            <div className="billboards-row-right-text">Shop unique items & shirts. Enjoy world-wide shipping!</div>
            <button className="billboards-row-right-button" onClick={() => window.location.href = '/shop'}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillBoards
