function About() {
  return (
    <div className="page">
      <h1>About this Project</h1>
      <p className="page-intro">
        Built as Task 3 of the FullStack Bootcamp. The goal was to practice
        React Router for navigation and the useEffect hook for handling
        side effects like timers and browser event listeners.
      </p>
      <ul className="about-list">
        <li>React + Vite for the build setup</li>
        <li>react-router-dom for client-side routing</li>
        <li>Two useEffect examples: an interval timer and a resize listener</li>
      </ul>
    </div>
  )
}

export default About
