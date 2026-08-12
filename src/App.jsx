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
  const leaves = Array.from({ length: 10 }, (_, index) => index)

  return (
    <div className="treeWorld" aria-hidden="true">
      <div className="treeAura" />

      {leaves.map((leaf) => (
        <span className={`floatingLeaf floatingLeaf-${leaf % 5}`} key={leaf} style={{ '--leaf': leaf }} />
      ))}

      <svg className="treeArt" viewBox="0 0 760 900" role="img" aria-label="A cozy illustrated tree with a squirrel">
        <defs>
          <linearGradient id="trunkFill" x1="0" x2="1">
            <stop offset="0" stopColor="#3b2924" />
            <stop offset="0.45" stopColor="#604036" />
            <stop offset="1" stopColor="#2e211e" />
          </linearGradient>
          <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c9a86a" />
            <stop offset="0.46" stopColor="#8d7450" />
            <stop offset="1" stopColor="#5b4c39" />
          </linearGradient>
          <linearGradient id="leafWarm" x1="0" x2="1">
            <stop offset="0" stopColor="#d09a50" />
            <stop offset="1" stopColor="#8f4c32" />
          </linearGradient>
          <linearGradient id="squirrelFill" x1="0" x2="1">
            <stop offset="0" stopColor="#d8874a" />
            <stop offset="1" stopColor="#9a4f35" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur" />
            <feOffset dy="14" result="offset" />
            <feColorMatrix in="offset" values="0 0 0 0 0.05 0 0 0 0 0.04 0 0 0 0 0.03 0 0 0 .3 0" />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        <ellipse className="treeShadow" cx="390" cy="817" rx="202" ry="27" />

        <g className="treeGroup" filter="url(#softShadow)">
          <g className="backCanopy">
            <path fill="url(#leafFill)" d="M153 317C142 238 192 170 270 178C305 112 389 103 441 154C512 126 587 168 585 244C654 256 665 333 613 376C627 449 564 498 492 475C449 529 357 521 320 471C245 496 178 454 191 389C151 375 134 348 153 317Z" />
            <path fill="url(#leafWarm)" opacity=".58" d="M205 293C220 211 312 181 377 219C430 176 513 204 525 270C575 271 599 316 582 355C552 382 499 387 464 360C419 410 335 398 306 347C259 376 203 347 205 293Z" />
          </g>

          <g className="branches">
            <path d="M389 786C382 697 373 594 388 491C400 404 360 347 300 303" fill="none" stroke="url(#trunkFill)" strokeWidth="36" strokeLinecap="round" />
            <path d="M386 530C345 453 294 411 237 391" fill="none" stroke="#4a302a" strokeWidth="19" strokeLinecap="round" />
            <path d="M394 505C443 424 493 380 548 360" fill="none" stroke="#4a302a" strokeWidth="18" strokeLinecap="round" />
            <path d="M381 449C374 387 341 333 296 293" fill="none" stroke="#4a302a" strokeWidth="15" strokeLinecap="round" />
            <path d="M414 444C467 382 493 331 500 282" fill="none" stroke="#4a302a" strokeWidth="15" strokeLinecap="round" />
            <path d="M370 606C342 562 313 535 278 517" fill="none" stroke="#52362e" strokeWidth="13" strokeLinecap="round" />
          </g>

          <g className="trunkGroup">
            <path fill="url(#trunkFill)" d="M360 784C365 719 373 635 369 552C365 469 353 409 333 366L358 352C388 404 403 470 406 548C410 633 398 723 407 787Z" />
            <path d="M389 727C384 637 389 553 378 481" fill="none" stroke="#856050" strokeOpacity=".25" strokeWidth="5" strokeLinecap="round" />
            <path d="M365 688C377 639 363 573 357 528" fill="none" stroke="#261a19" strokeOpacity=".3" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="frontCanopy">
            <path fill="url(#leafWarm)" d="M211 318C196 248 242 203 303 212C335 166 404 165 439 208C492 182 552 213 554 266C604 284 608 339 573 370C573 424 526 454 477 437C448 479 380 480 346 439C292 462 239 429 241 382C212 370 198 345 211 318Z" />
            <path fill="#e0ad61" opacity=".55" d="M265 280C294 237 348 237 377 263C413 231 467 238 483 280C517 276 539 301 532 334C510 352 477 354 453 333C424 372 368 371 343 338C312 360 269 342 269 312C254 307 251 293 265 280Z" />
          </g>

          <g className="barkMarks" fill="none" stroke="#9d7360" strokeLinecap="round" opacity=".18">
            <path d="M353 739l21-56" strokeWidth="4" />
            <path d="M393 675l-7-49" strokeWidth="4" />
            <path d="M368 607l20-37" strokeWidth="3" />
          </g>

          <g className="squirrel" transform="translate(470 585)">
            <ellipse cx="45" cy="92" rx="34" ry="46" fill="url(#squirrelFill)" />
            <circle cx="33" cy="48" r="26" fill="#c66f45" />
            <path d="M7 32L-1 11L17 20Z" fill="#b95e3c" />
            <path d="M40 34L55 10L58 36Z" fill="#b95e3c" />
            <circle cx="23" cy="45" r="3.8" fill="#281b18" />
            <path d="M42 53C49 59 56 59 62 55" fill="none" stroke="#6a362a" strokeWidth="3" strokeLinecap="round" />
            <path d="M66 66C107 34 130 67 112 104C99 132 68 132 58 110C77 111 91 100 92 84C92 71 81 63 66 66Z" fill="#c47246" className="squirrelTail" />
            <path d="M56 81C77 75 89 83 94 97C85 112 69 111 57 102Z" fill="#e5ac72" opacity=".86" />
            <path d="M21 68L-3 88" fill="none" stroke="#a95a3d" strokeWidth="7" strokeLinecap="round" />
            <path d="M53 78L70 95" fill="none" stroke="#a95a3d" strokeWidth="7" strokeLinecap="round" />
            <ellipse cx="33" cy="96" rx="8" ry="15" fill="#ba6641" />
            <ellipse cx="53" cy="101" rx="8" ry="15" fill="#ba6641" />
            <circle cx="8" cy="22" r="8" fill="#d58955" opacity=".65" />
          </g>

          <g className="grassTufts" fill="none" stroke="#7a704d" strokeLinecap="round" strokeWidth="4" opacity=".85">
            <path d="M283 797l-8-25M292 800l3-29M522 800l10-29M532 800l4-24M252 802l-12-18M556 801l11-20" />
          </g>
        </g>

        <g className="sceneFireflies" fill="#ddc992">
          <circle cx="185" cy="482" r="3" />
          <circle cx="588" cy="518" r="2.5" />
          <circle cx="545" cy="689" r="2" />
          <circle cx="235" cy="641" r="2" />
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
        <div className="navMeta">a quiet place to grow</div>
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
