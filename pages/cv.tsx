import skills from '../public/skills.json'

export default function CV() {
  return (
    <div className="cv">
      <div className="cv__intro">
        <h3>In a nutshell</h3>
        <p>I am a full-stack staff developer who has worn many hats and worked with many teams of all sizes to build applications and services for a wide range of organizations including startups, not-for-profits, and fortune 500 companies.</p>
        <p>I have been known to <a href="https://www.drupal.org/u/arvinsingla" target="_blank" rel="noreferrer noopener">contribute</a> to <a href="https://github.com/ecobee/nodejs-gcloud-pubsub-module" target="_blank" rel="noreferrer noopener">open source</a>, write about <a href="http://www.medium.com/arvin-singla" target="_blank" rel="noreferrer noopener">technology</a>, experiment with <a href="https://medium.com/arvin-singla/apple-homekit-hacking-3d2902e7a1df#.vuvri5vqe" target="_blank" rel="noreferrer noopener">home automation</a>, and advocate for <a href="https://medium.com/arvin-singla/how-good-are-canadian-streaming-video-services-7e4f7bade54d#.uw9c2f1hh" target="_blank" rel="noreferrer noopener">cord-cutting</a>. I like to build things to scratch my own itch like <a href="https://www.publier.app" target="_blank" rel="noreferrer noopener">publier</a>, a SaaS product that translates PLEX webhooks to actions on third-party services.</p>
      </div>

      <div className="cv__tech">
        <h3>Technology focus</h3>

        <div className="cv__tech__items">
          {skills.map((skill, index) => {
            return <div key={index} className="cv__tech__items__item">{skill}</div>
          })}
        </div>
      </div>

      <div className="cv__resume">
        <h3>Career</h3>

        <div className="cv__resume__item">
          <h4>Staff Web Developer and Technical Lead @ <a className="color--green" href="http://www.ecobee.com" target="_blank" rel="noreferrer noopener">ecobee</a></h4>
          <div className="cv__resume__item__duration">Mar 2017 - Present</div>
          <div className="cv__resume__item__description">
            <p>I started as a senior developer and quickly moved to a staff position. I have been the technical lead for two teams and have helped launch four recurring revenue subscription products <a href="https://www.ecobee.com/commercial-multifamily-thermostat-management/" target="_blank" rel="noreferrer noopener">ecobee SmartBuildings</a>, <a href="https://www.ecobee.com/air-filters/" target="_blank" rel="noreferrer noopener">ecobee Airfilters</a>, <a href="https://www.ecobee.com/self-monitored-home-security-system/" target="_blank" rel="noreferrer noopener">ecobee Haven</a>, and ecobee Pro Connect.</p>
            <p>I led the design and development of the underlying scalable microservice architecture for most of these products and the integration with multiple partner platforms.</p>
          </div>
        </div>

        <div className="cv__resume__item">
          <h4>Software Engineer @ <a className="color--blue" href="http://www.acquia.com">Acquia</a></h4>
          <div className="cv__resume__item__duration">Sept 2015 - Mar 2017</div>
          <div className="cv__resume__item__description">
            <p>I joined the Acquia Cloud UI team building production-ready components in vanilla Javascript and AngularJS to support the beta launch of the new Cloud UI product. I later joined the Acquia Lift team. I was one of two frontend developers that designed, built, and launched the next-generation Acquia Lift frontend application.</p>
          </div>
        </div>

        <div className="cv__page-break print-show"></div>

        <div className="cv__resume__item">
          <h4>Web Developer @ <a className="color--orange" href="http://www.myplanet.com">Myplanet</a></h4>
          <div className="cv__resume__item__duration">Nov 2011 - Sept 2015</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Unofficially the Rōnin developer moving from project to project where needed to help different teams to meet critical deadlines.</li>
              <li>Lead developer on multiple prototyping engagements in both Drupal and Javascript.</li>
              <li>I developed an internal communication tool in my spare time which was adopted by the company and resulted in several open-source contributions.</li>
            </ul>
          </div>
        </div>

        <div className="cv__resume__item">
          <h4>Web Developer @ <a className="color--green" href="http://www.freeform.ca">Freeform Solutions</a></h4>
          <div className="cv__resume__item__duration">Nov 2009 - Sept 2011</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Lead developer on many Drupal and CiviCRM projects for not-for-profit organizations.</li>
              <li>Led initiatives to introduce DevOps to the development teams to improve the developer experience.\</li>
              <li>Due to the small team size, I wore many hats on different projects which included developer, scrum master, QA, designer, and technical account manager.</li>
            </ul>
          </div>
        </div>

        <div className="cv__resume__item">
          <h4>Freelance <span className="color--blue">Drupal</span> Developer</h4>
          <div className="cv__resume__item__duration">Jun 2007 - Jun 2013</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Acquia certified Drupal developer</li>
              <li>Worked on a number of solo and team development projects.</li>
              <li>Focused on providing services to not-for-profit organizations and small businesses.</li>
              <li>Planning, architecting, design, theming, development, implementation, deployment, and training represent the wide range of services I provided.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="cv__hobbies">
        <h3>Hobbies</h3>
        <p>Since the start of the pandemic, I have taken up several non-tech-focused hobbies including solving a Rubik&apos;s cube, juggling, and lockpicking. Basically, all things I wanted to learn as a kid.</p>
      </div>

      <div className="cv__education">
        <h3>Education</h3>
        <h4>University of Windsor</h4>
        <p>
          BSc, Computer Science<br/>
          2000 – 2005
        </p>
      </div>
    </div>
  )
}
