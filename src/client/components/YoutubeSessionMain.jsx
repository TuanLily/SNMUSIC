import { useState } from "react";
import "@/client/assets/css/youtube.css";

// Import ảnh đúng chuẩn Vite
import yt1 from "@/client/assets/img/youtube/youtube-1.jpg";
import yt2 from "@/client/assets/img/youtube/youtube-2.jpg";
import yt3 from "@/client/assets/img/youtube/youtube-3.jpg";

const videos = [
  {
    id: 1,
    img: yt1,
    url: "https://www.youtube.com/embed/yJg-Y5byMMw?autoplay=1",
    title: "David Guetta Miami Ultra Music Festival 2019",
  },
  {
    id: 2,
    img: yt2,
    url: "https://www.youtube.com/embed/K4DyBUG242c?autoplay=1",
    title: "Martin Garrix (Full live-set) | SLAM!Koningsdag",
  },
  {
    id: 3,
    img: yt3,
    url: "https://www.youtube.com/embed/S19UcWdOA-I?autoplay=1",
    title: "Dimitri Vegas, Steve Aoki & Like Mike — 3 Are Legend",
  },
];

export default function YoutubeSection() {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <section className="youtube spad">
      <div className="container">
        {/* Tiêu đề */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Youtube feed</h2>
              <h1>Latest videos</h1>
            </div>
          </div>
        </div>

        {/* Danh sách video */}
        <div className="row">
          {videos.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
              <div className="youtube__item">
                <div className="youtube__item__pic">
                  <img src={item.img} alt={item.title} />

                  <button
                    className="play-btn"
                    onClick={() => setVideoUrl(item.url)}
                  >
                    <i className="fa fa-play"></i>
                  </button>
                </div>

                <div className="youtube__item__text">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup video */}
      {videoUrl && (
        <div className="video-modal" onClick={() => setVideoUrl(null)}>
          <div className="video-modal-content">
            <iframe
              src={videoUrl}
              title="YouTube Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
