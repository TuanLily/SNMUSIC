import aboutImg from "@/client/assets/img/about/about.png";

const AboutSection = () => {
  return (
    <section className="about spad">
      <div className="container">
        <div className="row">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="about__pic">
              <img src={aboutImg} alt="About DJ" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-6">
            <div className="about__text">

              <div className="section-title">
                <h2>DJ Alexandra Rud</h2>
                <h1>About me</h1>
              </div>

              <p>
                DJ Rainflow knows how to move your mind, body and soul by delivering tracks 
                that stand out from the norm. As if this impressive succession of high impact, 
                floor-filling bombs wasn’t enough to sustain.
              </p>

              <a href="#" className="primary-btn">CONTACT ME</a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
