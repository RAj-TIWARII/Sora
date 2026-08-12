import { useEffect, useRef, useState } from 'react'
import './App.css'

const phases = [
  {
    number: '01',
    title: <>Some things<br />begin <em>quietly.</em></>,
    body: <>A seed beneath the earth.<br />A little rain.<br />And enough time to grow.</>,
  },
  {
    number: '02',
    title: <>Then it<br />takes <em>root.</em></>,
    body: <>Slowly, almost unseen,<br />life begins to settle into place.</>,
  },
  {
    number: '03',
    title: <>Little by<br /><em>little.</em></>,
    body: <>A stem becomes a branch.<br />A branch reaches for the light.</>,
  },
]

function App() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        setPhaseIndex((index) => Math.min(index + 1, phases.length - 1))
      }
      if (event.key === 'ArrowUp') {
        setPhaseIndex((index) => Math.max(index - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.37

    try {
      if (audio.paused) {
        await audio.play()
        setPlaying(true)
      } else {
        audio.pause()
        setPlaying(false)
      }
    } catch {
      setPlaying(false)
    }
  }

  const currentPhase = phases[phaseIndex]

  return (
    <main className="sora">
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />

      <section className="hero">
        <header className="nav">
          <div className="logo">SORA</div>

          <button className="sound" type="button" onClick={toggleMusic}>
            <span className={`sound-dot ${playing ? 'is-playing' : ''}`} />
            {playing ? 'Sound on · 37%' : 'Sound off · 37%'}
          </button>
        </header>

        <div className="phaseArea">
          <div className="phase" key={phaseIndex}>
            <div className="phaseLabel">
              <span>{currentPhase.number}</span>
              <span className="line" />
              <span>THE BEGINNING</span>
            </div>

            <h1>{currentPhase.title}</h1>

            <p>{currentPhase.body}</p>

            <button
              className="journey"
              type="button"
              onClick={() => setPhaseIndex((index) => Math.min(index + 1, phases.length - 1))}
            >
              {phaseIndex === phases.length - 1 ? 'Stay awhile' : 'Continue'}
              <span>↘</span>
            </button>
          </div>
        </div>

        <div className="treeArea" aria-hidden="true">
          <div className="warmGlow" />

          <div className="leafDrift leafDriftOne">🍂</div>
          <div className="leafDrift leafDriftTwo">🍂</div>
          <div className="leafDrift leafDriftThree">🍂</div>
          <div className="leafDrift leafDriftFour">🍂</div>

          <div className="treeScene">
            <img src="/images/tree.png" className="tree" alt="" />
          </div>
        </div>

        <div className="phaseRail" aria-label="Story phases">
          {phases.map((phase, index) => (
            <button
              key={phase.number}
              type="button"
              aria-label={`Go to phase ${phase.number}`}
              className={index === phaseIndex ? 'active' : ''}
              onClick={() => setPhaseIndex(index)}
            >
              {phase.number}
            </button>
          ))}
        </div>

        <div className="scrollHint">
          <span>SCROLL</span>
          <div className="scrollLine" />
        </div>
      </section>
    </main>
  )
}

export default App
