import { useEffect, useState } from 'react'
import './App.css'
import treeArtwork from './assets/hero.png'

const phases = [
  {
    id: 'beginning',
    number: '01',
    kicker: 'The beginning',
    title: <>Some things<br /><em>begin quietly.</em></>,
    text: 'A seed beneath the earth. A little rain. And enough time to grow.',
    tone: 'dawn',
  },
  {
    id: 'roots',
    number: '02',
    kicker: 'Taking root',
    title: <>Then it<br /><em>takes root.</em></>,
    text: 'Slowly, almost unseen, life settles into its place and reaches for the light.',
    tone: 'morning',
  },
  {
    id: 'growing',
    number: '03',
    kicker: 'Growing',
    title: <>Little by<br /><em>little.</em></>,
    text: 'A stem becomes a branch. A branch becomes shade. Time does the rest.',
    tone: 'golden',
  },
]

const leafCount = Array.from({ length: 20 }, (_, index) => index)
const breezeCount = Array.from({ length: 12 }, (_, index) => index)

function App() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('[data-phase]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActivePhase(Number(visible.target.dataset.phase))
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-10% 0px -10% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const phase = phases[activePhase]
  const moveToPhase = (index) => {
    document.getElementById(phases[index].id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={`sora tone-${phase.tone}`}>
      <header className="nav">
        <a className="logo" href="#beginning">SORA</a>
        <span className="navWhisper">a quiet place to grow</span>
      </header>

      <div className="ambient" aria-hidden="true">
        <div className="ambientTone toneDawn" />
        <div className="ambientTone toneMorning" />
        <div className="ambientTone toneGolden" />
        <div className="ambientVignette" />
      </div>

      <div className="treeStage" aria-hidden="true">
        <div className="treeHalo" />

        <div className="treeArtwork treeBase">
          <img src={treeArtwork} alt="" />
        </div>

        <div className="treeArtwork treeBack">
          <img src={treeArtwork} alt="" />
        </div>

        <div className="treeArtwork treeMain">
          <img src={treeArtwork} alt="" />
        </div>

        <div className="treeArtwork treeFront">
          <img src={treeArtwork} alt="" />
        </div>

        <div className="treeStructure">
          <img src={treeArtwork} alt="" />
        </div>

        <div className="windLayer">
          {breezeCount.map((item) => <i key={item} style={{ '--i': item }} />)}
        </div>

        <div className="leafLayer">
          {leafCount.map((item) => <i key={item} style={{ '--i': item }} />)}
        </div>

        <div className="mist mistOne" />
        <div className="mist mistTwo" />
      </div>

      <div className="phaseRail" aria-label="Story phases">
        {phases.map((item, index) => (
          <button
            key={item.id}
            className={index === activePhase ? 'active' : ''}
            onClick={() => moveToPhase(index)}
            type="button"
          >
            <span>{item.number}</span>
            <i />
          </button>
        ))}
      </div>

      {phases.map((item, index) => (
        <section className="story" id={item.id} data-phase={index} key={item.id}>
          <div className="storyCopy">
            <p className="eyebrow"><span>{item.number}</span> / {item.kicker}</p>
            <h1>{item.title}</h1>
            <p className="storyText">{item.text}</p>
            <button
              className="continue"
              onClick={() => moveToPhase(index === phases.length - 1 ? 0 : index + 1)}
              type="button"
            >
              {index === phases.length - 1 ? 'Start again' : 'Continue'}
              <span>{index === phases.length - 1 ? '↗' : '↓'}</span>
            </button>
          </div>
        </section>
      ))}

      <div className="treeCaption">{phase.kicker} · {phase.number}</div>
      <div className="grain" aria-hidden="true" />
    </main>
  )
}

export default App
