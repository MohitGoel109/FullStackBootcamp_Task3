import Timer from '../components/Timer'
import WindowResize from '../components/WindowResize'
import UseEffectOne from '../components/UseEffectOne'
import './UseEffectDemos.css'

function UseEffectDemos() {
  return (
    <div className="page">
      <h1>useEffect Hook — Three Examples</h1>
      <p className="page-intro">
        All three components below use <code>useEffect</code>, but for
        different purposes: one runs a repeating timer, one listens to a
        browser event, and one reacts to a specific state value changing.
        Each manages its own dependency array and cleans up after itself
        where needed.
      </p>

      <div className="demo-grid">
        <div className="demo-card">
          <span className="demo-tag">Example 1</span>
          <p className="demo-note">
            Interval timer — <code>setInterval</code> inside the effect,
            cleared with <code>clearInterval</code> on cleanup.
          </p>
          <Timer />
        </div>

        <div className="demo-card">
          <span className="demo-tag">Example 2</span>
          <p className="demo-note">
            Window resize listener — subscribes on mount, unsubscribes on
            cleanup. Try resizing the browser window.
          </p>
          <WindowResize />
        </div>

        <div className="demo-card">
          <span className="demo-tag">Example 3</span>
          <p className="demo-note">
            Dependency-driven effect — runs only when <code>count</code>{' '}
            changes, ignoring <code>count2</code> entirely.
          </p>
          <UseEffectOne />
        </div>
      </div>
    </div>
  )
}

export default UseEffectDemos
