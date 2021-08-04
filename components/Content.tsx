import React, { FunctionComponent } from 'react'

export type ContentProps = {
  children: string;
};

const Content: FunctionComponent<ContentProps> = ({ children }) => {
  return (
    <section className="content">
      <div className="content__wrapper">
        {children}
      </div>
    </section>
  )
}

export default Content
