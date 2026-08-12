import { useEffect, useState } from 'react'
import './App.css'

const phases = [
  { id: 'beginning', number: '01', label: 'The beginning', title: <>Some things<br /><em>begin quietly.</em></>, text: 'A seed beneath the earth. A little rain. And enough time to grow.' },
  { id: 'roots', number: '02', label: 'Taking root', title: <>Then it<br /><em>takes root.</em></>, text: 'Slowly, almost unseen, life settles into its place and reaches for the light.' },
  { id: 'growing', number: '03', label: 'Growing', title: <>Little by<br /><em>little.</em></>, text: 'A stem becomes a branch. A branch becomes shade. Time does the rest.' },
]

function TreeScene() {
  const leaves = Array.from({ length: 12 }, (_, index) => index)

  return (
    <div className="treeWorld" aria-hidden="true">
      <div className="starField">
        {Array.from({ length: 20 }, (_, index) => <i key={index} style={{ '--star': index }} />)}
      </div>
      <div className="treeAura" />
      {leaves.map((leaf) => <span className={`floatingLeaf floatingLeaf-${leaf % 5}`} key={leaf} style={{ '--leaf': leaf }} />)}

      <svg className="treeArt" viewBox="0 0 760 900" role="img" aria-label="A cozy illustrated tree at night">
        <defs>
          <linearGradient id="trunkFill" x1="0" x2="1">
            <stop offset="0" stopColor="#251d20" />
            <stop offset="0.45" stopColor="#5b4039" />
            <stop offset="1" stopColor="#21191b" />
          </linearGradient>
          <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#566b63" />
            <stop offset="0.5" stopColor="#314943" />
            <stop offset="1" stopColor="#202f2d" />
          </linearGradient>
          <linearGradient id="leafWarm" x1="0" x2="1">
            <stop offset="0" stopColor="#72877b" />
            <stop offset="1" stopColor="#3a554e" />
          </linearGradient>
          <filter id="treeShadow"><feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#05070b" floodOpacity=".42" /></filter>
          <filter id="fireflyGlow" x="-500%" y="-500%" width="1000%" height="1000%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse className="treeShadow" cx="392" cy="820" rx="204" ry="25" />
        <g className="treeGroup" filter="url(#treeShadow)">
          <g className="backCanopy">
            <path fill="url(#leafFill)" d="M153 317C142 238 192 170 270 178C305 112 389 103 441 154C512 126 587 168 585 244C654 256 665 333 613 376C627 449 564 498 492 475C449 529 357 521 320 471C245 496 178 454 191 389C151 375 134 348 153 317Z" />
            <path fill="#3f5a53" opacity=".48" d="M205 293C220 211 312 181 377 219C430 176 513 204 525 270C575 271 599 316 582 355C552 382 499 387 464 360C419 410 335 398 306 347C259 376 203 347 205 293Z" />
          </g>
          <g className="branches">
            <path d="M389 786C382 697 373 594 388 491C400 404 360 347 300 303" fill="none" stroke="url(#trunkFill)" strokeWidth="36" strokeLinecap="round" />
            <path d="M386 530C345 453 294 411 237 391" fill="none" stroke="#3d2c2b" strokeWidth="19" strokeLinecap="round" />
            <path d="M394 505C443 424 493 380 548 360" fill="none" stroke="#3d2c2b" strokeWidth="18" strokeLinecap="round" />
            <path d="M381 449C374 387 341 333 296 293" fill="none" stroke="#3d2c2b" strokeWidth="15" strokeLinecap="round" />
            <path d="M414 444C467 382 493 331 500 282" fill="none" stroke="#3d2c2b" strokeWidth="15" strokeLinecap="round" />
          </g>
          <g className="trunkGroup">
            <path fill="url(#trunkFill)" d="M360 784C365 719 373 635 369 552C365 469 353 409 333 366L358 352C388 404 403 470 406 548C410 633 398 723 407 787Z" />
            <path d="M389 727C384 637 389 553 378 481" fill="none" stroke="#8b6a5d" strokeOpacity=".18" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="frontCanopy">
            <path fill="url(#leafWarm)" d="M211 318C196 248 242 203 303 212C335 166 404 165 439 208C492 182 552 213 554 266C604 284 608 339 573 370C573 424 526 454 477 437C448 479 380 480 346 439C292 462 239 429 241 382C212 370 198 345 211 318Z" />
            <path fill="#779085" opacity=".34" d="M265 280C294 237 348 237 377 263C413 231 467 238 483 280C517 276 539 301 532 334C510 352 477 354 453 333C424 372 368 371 343 338C312 360 269 342 269 312C254 307 251 293 265 280Z" />
          </g>
        </g>

        <g className="sceneFireflies" fill="#e7d37d" filter="url(#fireflyGlow)">
          <circle cx="185" cy="482" r="3" />
          <circle cx="588" cy="518" r="2.5" />
          <circle cx="545" cy="689" r="2" />
          <circle cx="235" cy="641" r="2" />
          <circle cx="625" cy="646" r="2.2" />
          <circle cx="145" cy="595" r="2" />
        </g>
      </svg>
      <div className="windLines"><i /><i /><i /></div>
    </div>
  )
}

function App() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-phase]')]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActivePhase(Number(visible.target.dataset.phase))
    }, { threshold: [0.3, 0.6, 0.85], rootMargin: '-10% 0px -10% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (index) => document.getElementById(phases[index].id)?.scrollIntoView({ behavior: 'smooth' })
  const phase = phases[activePhase]

  return (
    <main className={`sora phase-${activePhase}`}>
      <div className="ambient" />
      <header className="nav">
        <a className="logo" href="#beginning">SORA</a>
        <nav className="navLinks" aria-label="Main navigation">
          <a href="#beginning">Home</a>
          <a href="#roots">Story</a>
          <a href="#growing">Journey</a>
          <button type="button" className="loginButton">Sign in</button>
        </nav>
      </header>

      <TreeScene />

      <aside className="phaseRail" aria-label="Story phases">
        {phases.map((item, index) => <button key={item.id} className={index === activePhase ? 'active' : ''} onClick={() => goTo(index)} type="button"><span>{item.number}</span><i /></button>)}
      </aside>

      {phases.map((item, index) => (
        <section className="story" id={item.id} data-phase={index} key={item.id}>
          <div className="storyCopy">
            <p className="eyebrow">{item.number} / {item.label}</p>
            <h1>{item.title}</h1>
            <p className="storyText">{item.text}</p>
            <button className="continue" onClick={() => goTo(index === phases.length - 1 ? 0 : index + 1)} type="button">{index === phases.length - 1 ? 'Return to the beginning' : 'Continue'} <span>{index === phases.length - 1 ? '↗' : '↓'}</span></button>
          </div>
        </section>
      ))}

      <div className="treeLabel">{phase.label} · {phase.number}</div>
      <div className="grain" />
    </main>
  )
}

export default App
