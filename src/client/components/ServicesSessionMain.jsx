import serviceLeft from "@/client/assets/img/services/service-left.jpg";
import service1 from "@/client/assets/img/services/service-1.png";
import service2 from "@/client/assets/img/services/service-2.png";
import service3 from "@/client/assets/img/services/service-3.png";
import service4 from "@/client/assets/img/services/service-4.png";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="row">

          {/* LEFT SIDE VIDEO */}
          <div className="col-lg-6 p-0">
            <div
              className="services__left"
              style={{
                backgroundImage: `url(${serviceLeft})`,
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                className="play-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="col-lg-6 p-0">
            <div className="row services__list">

              {/* ITEM 1 */}
              <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                <div className="service__item deep-bg">
                  <img src={service1} alt="Wedding" />
                  <h4>Wedding</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                <div className="service__item">
                  <img src={service2} alt="Clubs and bar" />
                  <h4>Clubs and bar</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                <div className="service__item deep-bg">
                  <img src={service4} alt="DJ lessons" />
                  <h4>DJ lessons</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                <div className="service__item">
                  <img src={service3} alt="Corporate events" />
                  <h4>Corporate events</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
