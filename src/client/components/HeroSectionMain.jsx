import heroBg from "@/client/assets/img/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="hero spad"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero__text">
              <span>New single</span>
              <h1>Feel the heart beats</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* PLAY BUTTON */}
              <a
                href="https://www.youtube.com/watch?v=K4DyBUG242c"
                className="play-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ICON SCROLL DOWN */}
      <div className="linear__icon">
        <i className="fa fa-angle-double-down"></i>
      </div>
    </section>
  );
};

export default HeroSection;
