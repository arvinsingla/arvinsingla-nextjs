import React, { FunctionComponent } from 'react'

export type IntroProps = {};

const Intro: FunctionComponent<IntroProps> = () => {
  return (
    <section className="intro">
      <h2 className="intro__title">
        A <span className="color--green">Montreal</span> based full-stack developer<br/>
        crafting applications and services in <span className="color--orange">Javascript</span>
      </h2>
    </section>
  )
}

export default Intro
