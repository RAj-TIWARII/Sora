import './App.css'

const leaves = Array.from({ length: 16 }, (_, index) => index)
const petals = Array.from({ length: 10 }, (_, index) => index)

function App() {
  return (
    <main className="sora">
      <header className="nav">
        <a className="logo" href="#top" aria-label="Sora home">SORA</a>
        <nav className="navLinks" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#about">About</a>
          <a href="#begin">Begin</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">A quiet place to begin</p>
          <h1>Let something<br /><em>grow.</em></h1>
          <p className="heroText">
            Sora is a little corner of the internet for planting,
            growing, and remembering the things that matter.
          </p>
          <a className="primaryButton" href="#begin">Begin the journey <span>↗</span></a>
        </div>

        <div className="scene" aria-label="A peaceful animated tree">
          <div className="sunGlow" />
          <div className="airParticles" aria-hidden="true">
            {petals.map((petal) => <i key={petal} style={{ '--i': petal }} />)}
          </div>
          <div className="fallingLeaves" aria-hidden="true">
            {leaves.map((leaf) => <i key={leaf} style={{ '--i': leaf }} />)}
          </div>

          <div className="treeIllustration" aria-hidden="true">
            <div className="canopy canopyBack" />
            <div className="canopy canopyMain" />
            <div className="canopy canopyFront" />
            <div className="branch branchOne" />
            <div className="branch branchTwo" />
            <div className="branch branchThree" />
            <div className="trunk" />
            <div className="ground" />
            <div className="grass grassOne" />
            <div className="grass grassTwo" />
          </div>

          <p className="sceneCaption">a little life, moving with the wind</p>
        </div>
      </section>

      <section className="introSection" id="story">
        <div>
          <p className="eyebrow">01 / The beginning</p>
          <h2>Good things<br /><em>take time.</em></h2>
        </div>
        <p>
          There is something beautiful about watching a small thing become
          something that can outlive us. Sora is built around that feeling.
        </p>
      </section>

      <section className="aboutSection" id="about">
        <p className="eyebrow">02 / The idea</p>
        <div className="aboutGrid">
          <h2>Plant something<br /><em>worth remembering.</em></h2>
          <p>
            Choose a tree, give it a place to grow, and follow its journey.
            Over time, Sora will become a quiet record of the life you helped begin.
          </p>
        </div>
      </section>

      <section className="beginSection" id="begin">
        <p className="eyebrow">03 / Your turn</p>
        <h2>Every tree<br /><em>starts somewhere.</em></h2>
        <a className="primaryButton" href="#top">Plant the first one <span>↗</span></a>
      </section>

      <footer className="footer">
        <span>SORA</span>
        <span>Made for things that grow.</span>
      </footer>
    </main>
  )
}

export default App
