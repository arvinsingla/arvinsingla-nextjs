import React, { FunctionComponent } from 'react'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';

export type LayoutProps = {
  children: any;
  name: string
};

const Layout: FunctionComponent<LayoutProps> = ({ name, children }) => {
  const date = new Date()
  const currentYear = date.getFullYear()
  
  return (
    <div className="app-container">
      <Header name={name} />
      <Intro />
      <Content>
        {children}
      </Content>
      <Footer currentYear={currentYear} />
    </div>
  )
}

export default Layout
