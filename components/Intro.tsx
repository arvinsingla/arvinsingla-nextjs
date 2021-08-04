import React, { FunctionComponent } from 'react'

export type IntroProps = {};

const Intro: FunctionComponent<IntroProps> = () => {
  return (
    <section className="intro">
      <h2 className="intro__title">
        A Montreal based Software Developer<br/>
        crafting applications in <span className="color--green">Javascript</span> and <span className="color--blue">Drupal</span>
      </h2>
    </section>
  )
}

export default Intro
