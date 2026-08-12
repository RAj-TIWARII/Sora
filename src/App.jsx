function App() {
  return (
    <div className="sora">
      <header className="navbar">
        <a className="brand" href="/" aria-label="Sora home">
          SORA
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroContent">
            <p className="eyebrow">A quiet place to grow</p>
            <h1 id="hero-title">Something beautiful can begin with a seed.</h1>
            <p className="heroText">
              Sora is a simple space built around trees, growth, and the small
              things that become meaningful with time.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="#journey">Explore Sora</a>
              <a className="textButton" href="#about">Learn more <span>→</span></a>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="sun" />
            <div className="treeIllustration">
              <div className="canopy canopyOne" />
              <div className="canopy canopyTwo" />
              <div className="canopy canopyThree" />
              <div className="trunk" />
              <div className="ground" />
            </div>
          </div>
        </section>

        <section className="intro" id="about">
          <p className="eyebrow">The idea</p>
          <h2>Give something a place to grow.</h2>
          <p>
            Sora will become a home for a tree-planting experience where every
            tree has a story, a place, and a journey worth following.
          </p>
        </section>

        <section className="journey" id="journey">
          <div>
            <p className="eyebrow">The journey</p>
            <h2>Plant. Grow. Remember.</h2>
          </div>

          <div className="steps">
            <article>
              <span>01</span>
              <h3>Choose</h3>
              <p>Choose the tree you want to support.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Plant</h3>
              <p>Your contribution helps put a real tree in the ground.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Follow</h3>
              <p>Follow its story as it grows through the seasons.</p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <span>SORA</span>
        <span>Something worth growing.</span>
      </footer>
    </div>
  )
}

export default App
