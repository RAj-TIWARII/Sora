import { useEffect, useState } from 'react'
import './App.css'

const phases = [
  {
    id: 'beginning',
    number: '01',
    label: 'The beginning',
    title: <>Some things<br /><em>begin quietly.</em></>,
    text: 'A seed beneath the earth. A little rain. And enough time to grow.',
  },
  {
    id: 'roots',
    number: '02',
    label: 'Taking root',
    title: <>Then it<br /><em>takes root.</em></>,
    text: 'Slowly, almost unseen, life settles into its place and reaches for the light.',
  },
  {
    id: 'growing',
    number: '03',
    label: 'Growing',
    title: <>Little by<br /><em>little.</em></>,
    text: 'A stem becomes a branch. A branch becomes shade. Time does the rest.',
  },
]

function TreeScene() {
  const leaves = Array.from({ length: 12 }, (_, index) => index)

  return (
    <div className="treeWorld" aria-hidden="true">
      <div className="starField">
        {Array.from({ length: 20 }, (_, index) => <i key={index} style={{ '--star': index }} />)}
      </div>
      <div className="treeAura" />

      {leaves.map((leaf) => (
        <span className={`floatingLeaf floatingLeaf-${leaf % 5}`} key={leaf} style={{ '--leaf': leaf }} />
      ))}

      <svg className="treeArt" viewBox="0 0 760 900" role="img" aria-label="A cozy illustrated tree with a playful squirrel running around its base at night">
        <defs>
          <linearGradient id="trunkFill" x1="0" x2="1">
            <stop offset="0" stopColor="#2d2426" />
            <stop offset="0.45" stopColor="#4a3435" />
            <stop offset="1" stopColor="#211a20" />
          </linearGradient>
          <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3e5660" />
            <stop offset="0.5" stopColor="#2d414a" />
            <stop offset="1" stopColor="#1e3036" />
          </linearGradient>
          <linearGradient id="leafWarm" x1="0" x2="1">
            <stop offset="0" stopColor="#58716e" />
            <stop offset="1" stopColor="#294047" />
          </linearGradient>
          <linearGradient id="squirrelFill" x1="0" x2="1">
            <stop offset="0" stopColor="#bd7b58" />
            <stop offset="1" stopColor="#704537" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur" />
            <feOffset dy="14" result="offset" />
            <feColorMatrix in="offset" values="0 0 0 0 0.01 0 0 0 0 0.01 0 0 0 0 0.02 0 0 0 .4 0" />
            <feBlend in="SourceGraphic" />
          </filter>
          <filter id="fireflyGlow" x="-500%" y="-500%" width="1000%" height="1000%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse className="treeShadow" cx="390" cy="817" rx="210" ry="26" />

        <g className="treeGroup" filter="url(#softShadow)">
          <g className="backCanopy">
            <path fill="url(#leafFill)" d="M153 317C142 238 192 170 270 178C305 112 389 103 441 154C512 126 587 168 585 244C654 256 665 333 613 376C627 449 564 498 492 475C449 529 357 521 320 471C245 496 178 454 191 389C151 375 134 348 153 317Z" />
            <path fill="url(#leafWarm)" opacity=".58" d="M205 293C220 211 312 181 377 219C430 176 513 204 525 270C575 271 599 316 582 355C552 382 499 387 464 360C419 410 335 398 306 347C259 376 203 347 205 293Z" />
          </g>

          <g className="branches">
            <path d="M389 786C382 697 373 594 388 491C400 404 360 347 300 303" fill="none" stroke="url(#trunkFill)" strokeWidth="36" strokeLinecap="round" />
            <path d="M386 530C345 453 294 411 237 391" fill="none" stroke="#392a2e" strokeWidth="19" strokeLinecap="round" />
            <path d="M394 505C443 424 493 380 548 360" fill="none" stroke="#392a2e" strokeWidth="18" strokeLinecap="round" />
            <path d="M381 449C374 387 341 333 296 293" fill="none" stroke="#392a2e" strokeWidth="15" strokeLinecap="round" />
            <path d="M414 444C467 382 493 331 500 282" fill="none" stroke="#392a2e" strokeWidth="15" strokeLinecap="round" />
            <path d="M370 606C342 562 313 535 278 517" fill="none" stroke="#443238" strokeWidth="13" strokeLinecap="round" />
          </g>

          <g className="trunkGroup">
            <path fill="url(#trunkFill)" d="M360 784C365 719 373 635 369 552C365 469 353 409 333 366L358 352C388 404 403 470 406 548C410 633 398 723 407 787Z" />
            <path d="M389 727C384 637 389 553 378 481" fill="none" stroke="#806263" strokeOpacity=".2" strokeWidth="5" strokeLinecap="round" />
            <path d="M365 688C377 639 363 573 357 528" fill="none" stroke="#181319" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="frontCanopy">
            <path fill="url(#leafWarm)" d="M211 318C196 248 242 203 303 212C335 166 404 165 439 208C492 182 552 213 554 266C604 284 608 339 573 370C573 424 526 454 477 437C448 479 380 480 346 439C292 462 239 429 241 382C212 370 198 345 211 318Z" />
            <path fill="#71857b" opacity=".28" d="M265 280C294 237 348 237 377 263C413 231 467 238 483 280C517 276 539 301 532 334C510 352 477 354 453 333C424 372 368 371 343 338C312 360 269 342 269 312C254 307 251 293 265 280Z" />
          </g>

          <g className="barkMarks" fill="none" stroke="#8f7277" strokeLinecap="round" opacity=".16">
            <path d="M353 739l21-56" strokeWidth="4" />
            <path d="M393 675l-7-49" strokeWidth="4" />
            <path d="M368 607l20-37" strokeWidth="3" />
          </g>

          <g className="groundDetails">
            <path d="M247 805Q385 780 555 805" fill="none" stroke="#314239" strokeWidth="4" strokeLinecap="round" opacity=".7" />
            <path d="M265 803l-8-23M279 806l4-29M508 802l9-25M523 803l5-22M548 806l12-19" fill="none" stroke="#5a6b50" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="squirrel">
            <ellipse cx="408" cy="779" rx="30" ry="7" fill="#182124" opacity=".48" className="squirrelGroundShadow" />
            <g className="squirrelBody">
              <ellipse cx="450" cy="735" rx="31" ry="43" fill="url(#squirrelFill)" />
              <circle cx="432" cy="695" r="24" fill="#b66f51" />
              <path d="M409 679L402 660L418 670Z" fill="#9c5d48" />
              <path d="M441 677L455 657L457 684Z" fill="#9c5d48" />
              <circle cx="423" cy="693" r="3.5" fill="#1e1719" />
              <path d="M437 702C444 706 451 706 456 702" fill="none" stroke="#613b34" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M469 713C515 684 537 720 522 752C511 776 479 787 464 762C484 764 498 754 499 739C500 726 488 717 469 713Z" fill="#bf7757" className="squirrelTail" />
              <path d="M455 726L438 748M470 727L488 748" fill="none" stroke="#94533f" strokeWidth="7" strokeLinecap="round" className="squirrelArms" />
              <path d="M435 758L426 783M457 759L468 783" fill="none" stroke="#94533f" strokeWidth="8" strokeLinecap="round" className="squirrelLegs" />
              <circle cx="417" cy="675" r="7" fill="#c9825d" opacity=".58" />
            </g>
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
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActivePhase(Number(visible.target.dataset.phase))
    }, { threshold: [0.3, 0.6, 0.85], rootMargin: '-10% 0px -10% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (index) => {
    document.getElementById(phases[index].id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const phase = phases[activePhase]

  return (
    <main className={`sora phase-${activePhase}`}>
      <div className="ambient" />
      <header className="nav">
        <a className="logo" href="#beginning">SORA</a>
        <div className="navLinks" aria-label="Main navigation">
          <a href="#beginning">Home</a>
          <a href="#roots">Story</a>
          <a href="#growing">Journey</a>
        </div>
      </header>

      <TreeScene />

      <aside className="phaseRail" aria-label="Story phases">
        {phases.map((item, index) => (
          <button key={item.id} className={index === activePhase ? 'active' : ''} onClick={() => goTo(index)} type="button">
            <span>{item.number}</span><i />
          </button>
        ))}
      </aside>

      {phases.map((item, index) => (
        <section className="story" id={item.id} data-phase={index} key={item.id}>
          <div className="storyCopy">
            <p className="eyebrow">{item.number} / {item.label}</p>
            <h1>{item.title}</h1>
            <p className="storyText">{item.text}</p>
            <button className="continue" onClick={() => goTo(index === phases.length - 1 ? 0 : index + 1)} type="button">
              {index === phases.length - 1 ? 'Return to the beginning' : 'Continue'}
              <span>{index === phases.length - 1 ? '↗' : '↓'}</span>
            </button>
          </div>
        </section>
      ))}

      <div className="treeLabel">{phase.label} · {phase.number}</div>
      <div className="grain" />
    </main>
  )
}

export default App
