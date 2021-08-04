import React, { FunctionComponent } from 'react'

export type FooterProps = {
  currentYear: number;
};

const Footer: FunctionComponent<FooterProps> = ({ currentYear }) => {
  return (
    <footer className="footer">
      <span className="print-hide">&copy; {currentYear} Arvin Singla</span>
      <span className="print-show">Montreal &middot; <a href="tel:1-647-864-6564">647-864-6564</a> &middot; <a href="mailto:me@arvinsingla.com">me@arvinsingla.com</a></span>
    </footer>
  )
}

export default Footer
