import Nav from '../components/nav'
import Header from '../components/header'
import BillBoards from '../components/billboards'

const Home = ({}) => {
  
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      {/* <div className="founders">
        <div className="founders-item main">
          <img src="" alt="" />
        </div>
      </div> */}
      <BillBoards></BillBoards>
      <div className="gallery">
        <div className="gallery-heading">Fresh Favorites</div>
        <div className="gallery-row">
          <div className="gallery-row-item"><img src="https://i.pinimg.com/originals/d1/ed/e9/d1ede9ffa516577d02e30fdfd56b5703.jpg" alt="" /><span>Purple Rain</span></div>
          <div className="gallery-row-item"><img src="https://www.warehouseone.com/dw/image/v2/BBNZ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw20ebe690/who/1428100432~001~2.jpg?sw=454&sh=649&sm=fit" alt="" /><span>Classic Funny</span></div>
          <div className="gallery-row-item"><img src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BCTD_PRD/on/demandware.static/-/Sites-moncler-master-catalog/default/dw664b4144/image/products/G10928D7071083927999_F.jpg?sw=720&sh=912" alt="" /><span>ASG Events</span></div>
          <div className="gallery-row-item"><img src="https://scene7.zumiez.com/is/image/zumiez/cat_max/Cookies-Litty-Black-T-Shirt-_331589.jpg" alt="" /><span>Cookies</span></div>
          <div className="gallery-row-item"><img src="https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw3b600571/product_images/0103250500006NEW_00_001.jpg?sw=458&sh=710&sm=fit" alt="" /><span>Playboy</span></div>
        </div>
        <div className="gallery-button"><button>Shop Everything</button></div>
      </div>
    </>
  )
}

export default Home
