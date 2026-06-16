function Home() {
  return (
    <div className="page">
      <h1>FullStack Bootcamp — Task 3</h1>
      <p className="page-intro">
        This project demonstrates two core React concepts: client-side
        routing with <code>react-router-dom</code>, and the{' '}
        <code>useEffect</code> hook through two working examples. Use the
        navbar above to move between pages.
      </p>

      <div className="card-row">
        <div className="info-card">
          <h3>Routing</h3>
          <p>
            A persistent navbar lets you jump between Home, About,
            useEffect Demos, and Contact without a full page reload.
          </p>
        </div>
        <div className="info-card">
          <h3>useEffect</h3>
          <p>
            See a live timer and a window-resize listener side by side on
            the useEffect Demos page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
