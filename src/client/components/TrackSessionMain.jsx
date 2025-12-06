// import { useRef, useState } from "react";
import trackRight from "@/client/assets/img/track-right.jpg";

// Import file nhạc (demo)
import track1 from "@/client/assets/music/1.mp3";
import track2 from "@/client/assets/music/2.mp3";
import track3 from "@/client/assets/music/3.mp3";
import track4 from "@/client/assets/music/4.mp3";
import track5 from "@/client/assets/music/5.mp3";
import track6 from "@/client/assets/music/6.mp3";
import AudioPlayer from "./AudioPlayer";

const tracks = [
  { title: "David Guetta Miami Ultra", file: track1 },
  { title: "David Guetta Miami Ultra", file: track2 },
  { title: "David Guetta Miami Ultra", file: track3 },
  { title: "David Guetta Miami Ultra", file: track4 },
  { title: "David Guetta Miami Ultra", file: track5 },
  { title: "David Guetta Miami Ultra", file: track6 },
];

const TrackSection = () => {
  return (
    <section className="track spad">
      <div className="container">

        {/* TITLE */}
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title">
              <h2>Latest tracks</h2>
              <h1>Music podcast</h1>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="track__all">
              <a href="#" className="primary-btn border-btn">View all tracks</a>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="row">
          {/* LEFT LIST */}
          <div className="col-lg-7 p-0">
            <div className="track__content nice-scroll">
              {tracks.map((t, i) => (
                <AudioPlayer key={i} title={t.title} file={t.file} />
              ))}
            </div>
          </div>

          {/* RIGHT PICTURE */}
          <div className="col-lg-5 p-0">
            <div className="track__pic">
              <img src={trackRight} alt="track cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrackSection;
