// NewsPage.jsx
import React from "react";

const newsItems = [
  {
    id: 1,
    title: "Joint Training Exercise with Allied Air Forces",
    date: "2025-11-10",
    category: "Operations",
    audience: "Public & Defense Partners",
    summary:
      "Ghana Air Force aircraft and crews completed a multinational exercise to improve regional air security and interoperability.",
  },
  {
    id: 2,
    title: "New Pilot Wings Ceremony Held at Air Force Base",
    date: "2025-10-28",
    category: "Institutional",
    audience: "Service Members & Families",
    summary:
      "Newly qualified pilots received their wings during a parade attended by senior leadership and families.",
  },
  {
    id: 3,
    title: "Air Force Supports Flood Relief Operations",
    date: "2025-09-15",
    category: "Humanitarian",
    audience: "General Public",
    summary:
      "Transport aircraft and helicopters airlifted relief items and evacuated civilians from affected communities.",
  },
  {
    id: 4,
    title: "Public Notice: Temporary Airspace Restrictions",
    date: "2025-08-02",
    category: "Public Information",
    audience: "General Public",
    summary:
      "Airspace restrictions will apply during scheduled training flights over designated areas.",
  },
];

const NewsPage = () => {
  return (
    <main className="news-page">
      {/* Header: explains audience and focus */}
      <section className="news-hero">
        <h1>Ghana Air Force News</h1>
        <p>
          Official updates for the public, service members, and partners on
          operations, institutional developments, and public information.
        </p>
      </section>

      {/* Simple filters (display only, no interactivity yet) */}
      <section className="news-meta">
        <div>
          <h2>Target audience</h2>
          <ul>
            <li>Ghanaian public and media</li>
            <li>Service members, recruits, and families</li>
            <li>National and international defense partners</li>
          </ul>
        </div>
        <div>
          <h2>Coverage focus</h2>
          <ul>
            <li>Operational updates and missions</li>
            <li>Institutional news and leadership messages</li>
            <li>Humanitarian support and community outreach</li>
            <li>Public notices and press releases</li>
          </ul>
        </div>
      </section>

      {/* News cards */}
      <section className="news-list">
        {newsItems.map((item) => (
          <article key={item.id} className="news-card">
            <header>
              <span className="news-category">{item.category}</span>
              <span className="news-date">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </header>

            <h3>{item.title}</h3>

            <p className="news-summary">{item.summary}</p>

            <p className="news-audience">
              Intended audience: <strong>{item.audience}</strong>
            </p>

            {/* Later you can link to /news/:id */}
            <button className="news-read-more">Read more</button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default NewsPage;
