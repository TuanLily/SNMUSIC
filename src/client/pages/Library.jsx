import Header from '@/client/components/Header'
import Footer from '@/client/components/Footer'
import Breadcrumb from '@/client/components/Breadcrumb'

const tabs = ['Overview', 'Likes', 'Playlist', 'Albums', 'Stations', 'Following', 'History']

const sections = [
  { title: 'Recently played', count: 5 },
  { title: 'Likes', subtitle: 'Browse trending playlists', count: 12 },
  { title: 'Playlists', subtitle: 'Browse trending playlists', count: 5 },
  { title: 'Albums', subtitle: 'Browse trending playlists', count: 5 },
  { title: 'Liked stations', subtitle: 'Browse trending playlists', count: 5 },
  { title: 'Following', subtitle: 'Browse trending playlists', count: 5 },
]

function Library() {
  return (
    <>
      <Header />

      <main className="tracklist-page">
        <section className="tracklist-hero">
          <div className="container py-2">
            <div className="section-title center-title">
              <h2>Library</h2>
              <h1>Your music library</h1>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-2">
              <Breadcrumb mapLabels={{ library: 'Library', tracklist: 'Tracklist' }} />
            </div>

            {/* Search and Filter controls */}
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
              <div className="tracklist-tabs flex-grow-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`tracklist-tab${tab === 'Overview' ? ' active' : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search and Alphabet filter */}
              <div className="d-flex align-items-center ms-auto gap-2">
                {/* Search box */}
                <div className="library-searchbox">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search in library..."
                    // You may want to wire up this value to a state for real filtering
                  />
                </div>

                {/* Alphabet Dropdown */}
                <div className="library-alpha-dropdown dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="alphaDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Alphabet
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="alphaDropdown" style={{maxHeight: "300px", overflowY: "auto"}}>
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                      <li key={letter}>
                        <button
                          type="button"
                          className="dropdown-item"
                          // Add selected style and filter handling as needed
                        >
                          {letter}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tracklist-content">
          <div className="container">
            {sections.map((section) => (
              <div key={section.title} className="tracklist-section">
                <div className="tracklist-section__header">
                  <div>
                    <h3>{section.title}</h3>
                    {section.subtitle ? (
                      <p className="tracklist-subtitle">
                        You have no {section.title.toLowerCase()} yet — <a href="#">{section.subtitle}</a>
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="tracklist-grid">
                  {Array.from({ length: section.count }).map((_, idx) => (
                    <div key={`${section.title}-${idx}`} className="tracklist-card">
                      <div className="tracklist-card__thumb" />
                      <div className="tracklist-card__meta">
                        <div className="tracklist-card__title">Title</div>
                        <div className="tracklist-card__desc">Artist or description</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Library

