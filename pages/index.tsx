import config from '../public/config.json'
export default function Home() {
  const date = new Date()
  const currentYear = date.getFullYear()
  const javascriptYears = currentYear - config.javascriptYear

  return (
    <div className="home">
      <div className="home-pane home-pane--javascript">
        <h3>Full stack Javascript</h3>
        <p>I have spent the last {javascriptYears} years building scalable web applications and services with all the major frameworks including React, Ember, Angular, and Node.js</p>
      </div>
      <div className="home-pane home-pane--drupal">
        <h3>Drupal is my jam</h3>
        <p>Over 10 years of experience, <a href="https://ca.linkedin.com/in/arvinsingla" target="_blank" rel="noreferrer noopener">dozens of projects</a>, a handful of <a href="http://www.drupal.org/u/arvinsingla" target="_blank" rel="noreferrer noopener">open source modules</a>, and a few great presentations.</p>
      </div>
      <div className="home-pane home-pane--medium">
        <h3>Popular Medium post</h3>
        <ul className="home-pane--medium__list">
          <li className="home-pane--medium__list__item">
            <a
              href="https://medium.com/arvin-singla/8-things-a-web-developer-does-to-geek-out-his-wedding-6235b87eeff0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong>8 things a web developer does to geek out his wedding</strong>
            </a>
          </li>
          <li className="home-pane--medium__list__item">
            <a
              href="https://medium.com/arvin-singla/lessons-learned-from-a-baby-monitor-335d1e099628"
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong>Lessons learned from a baby monitor</strong>
            </a>
          </li>
          <li className="home-pane--medium__list__item">
            <a
              href="https://medium.com/arvin-singla/apple-homekit-hacking-3d2902e7a1df"
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong>Apple Homekit hacking</strong>
            </a>
          </li>
        </ul>
        <p><a href="https://medium.com/@arvinsingla" target="_blank" rel="noreferrer noopener">See more</a></p>
      </div>
    </div>
  )
}
