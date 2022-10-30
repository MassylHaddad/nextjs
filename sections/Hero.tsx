import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="title">Hi I'm <span className="name">Massyl!</span></h1>
      <h3 className="description">I am Web Developer</h3>
      <p className="summary">I am an aspiring web develeper passioned about everything web!</p>
      <Button>Resume</Button>
    </section>
  )
}

export default Hero