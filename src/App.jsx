import { useEffect, useState } from 'react'
import './App.css'
import treeArtwork from './assets/hero.png'

const phases = [
  { id: 'beginning', number: '01', kicker: 'The beginning', title: <>Some things<br /><em>begin quietly.</em></>, text: 'A seed beneath the earth. A little rain. And enough time to grow.', accent: 'dawn' },
  { id: 'roots', number: '02', kicker: 'Taking root', title: <>Then it<br /><em>takes root.</em></>, text: 'Slowly, almost unseen, life settles into its place and reaches for the light.', accent: 'morning' },
  { id: 'growing', number: '03', kicker: 'Growing', title: <>Little by<br /><em>little.</em></>, text: 'A stem becomes a branch. A branch becomes shade. Time does the rest.', accent: 'golden' },
]

function App() {
  const [activePhase, setActivePhase] = useState(0)
  const [musicOn, setMusicOn] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('[data-phase]')
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActivePhase(Number(visible.target.dataset.phase))
    }, { threshold: [0.25, 0.5, 0.75], rootMargin: '-10% 0px -10% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const phase = phases[activePhase]
  const moveToPhase = (index) => document.getElementById(phases[index].id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className={`sora theme-${phase.accent}`}>
      <header className="nav">
        <a className="logo" href="#beginning">SORA</a>
        <div className="navRight">
          <span className="season">A quiet place to grow</span>
          <button className={`sound ${musicOn ? 'on' : ''}`} onClick={() => setMusicOn((value) => !value)}>
            <span className="soundIcon">◌</span>{musicOn ? '37%' : 'Sound'}
          </button>
        </div>
      </header>

      <div className="ambient" aria-hidden="true" />

      <div className="treeStage" aria-hidden="true">
        <div className="treeHalo" />
        <div className="treeBreath"><img src={treeArtwork} alt="" className="realTree" /></div>
        <div className="windLayer">{Array.from({ length: 11 }, (_, index) => <i key={index} style={{ '--i': index }} />)}</div>
        <div className="leafLayer">{Array.from({ length: 14 }, (_, index) => <i key={index} style={{ '--i': index }} />)}</div>
        <div className="mist mistOne" /><div className="mist mistTwo" />
      </div>

      <div className="phaseRail">
        {phases.map((item, index) => <button key={item.id} className={index === activePhase ? 'active' : ''} onClick={() => moveToPhase(index)}><span>{item.number}</span><i /></button>)}
      </div>

      <section className="story" id="beginning" data-phase="0">
        <div className="storyCopy">
          <p className="eyebrow"><span>{phase.number}</span> / {phase.kicker}</p>
          <h1>{phase.title}</h1>
          <p className="storyText">{phase.text}</p>
          <button className="continue" onClick={() => moveToPhase(1)}>Begin the journey <span>↓</span></button>
        </div>
      </section>

      <section className="story" id="roots" data-phase="1">
        <div className="storyCopy"><p className="eyebrow">02 / Taking root</p><h2>Then it<br /><em>takes root.</em></h2><p className="storyText">Slowly, almost unseen, life settles into its place and reaches for the light.</p><button className="continue" onClick={() => moveToPhase(2)}>Keep going <span>↓</span></button></div>
      </section>

      <section className="story" id="growing" data-phase="2">
        <div className="storyCopy"><p className="eyebrow">03 / Growing</p><h2>Little by<br /><em>little.</em></h2><p className="storyText">A stem becomes a branch. A branch becomes shade. Time does the rest.</p><button className="continue" onClick={() => moveToPhase(0)}>Start again <span>↗</span></button></div>
      </section>

      <div className="treeCaption">{phase.kicker} · {phase.number}</div>
      <div className="grain" aria-hidden="true" />
    </main>
  )
}

export default App
