// component
import ServiceCard from "./features/ServiceCard";

// css
import "./styles/Service.css";

function Service() {
  return (
    <section id="service" className="service">
      <div className="service__layout">
        {/* start title */}
        <h2 className="service__title">服務項目</h2>
        {/* end title */}

        {/* start cards */}
        <div className="service__cards">
          <ServiceCard
            subtitle={"國內代購"}
            imageUrl={"var(--service-image-1)"}
            description={
              "我們提供全國範圍內的代購服務，無論是熱門商品還是生活必需品，我們都能迅速為您代購，確保您無需出門即可輕鬆購買。"
            }
          />

          <ServiceCard
            subtitle={"國外代購"}
            imageUrl={"var(--service-image-2)"}
            description={
              "想要購買海外商品？ \n我們的國際代購服務可以幫您輕鬆取得全球各地的產品，從美國到日本，我們將協助您順利完成國際購物。"
            }
          />

          <ServiceCard
            subtitle={"特別代購"}
            imageUrl={"var(--service-image-3)"}
            description={
              "有特殊需求？\n無論是限量商品還是特定品牌，我們的專業團隊會根據您的需求處理特殊訂單，確保您的購物要求得到滿足。"
            }
            note={
              "\u3000(註 : 特殊訂單請於商品販售、預購前2週聯絡恕不接受急單）"
            }
          />
        </div>
        {/* end cards */}
      </div>
    </section>
  );
}

export default Service;
