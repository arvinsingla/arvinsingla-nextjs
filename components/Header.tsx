import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import avatar from '../public/images/arvin-avatar.jpg'

export type HeaderProps = {
  name: string;
};

const Header: FunctionComponent<HeaderProps> = ({ name }) => {
  const router = useRouter();

  return (
    <header className="header">
      <h1 className="header__title">
        <Link href="/">{name}</Link>
      </h1>
      <div className="header__avatar">
        <Image src={avatar} title="Arvin" alt="" layout="fill" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item print-hide">
            <Link href="/cv">
              <a className={router.pathname === "/cv" ? "active" : ""}>
                cv
              </a>
            </Link>
          </li>
          <li className="header__nav__list__item print-hide">
            <a
              href="http://www.github.com/arvinsingla"
              title="View my github profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              github
            </a>
          </li>
          <li className="header__nav__list__item print-hide">
            <a
              href="https://www.linkedin.com/in/arvinsingla/"
              title="View my Linked-In profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              linkedin
            </a>
          </li>
          <li className="header__nav__list__item print-show">
            <a
              href="https://en.wikipedia.org/wiki/Montreal"
              target="_blank"
              rel="noreferrer noopener"
            >
              Montreal
            </a>
          </li>
          <li className="header__nav__list__item print-show bold">
            &middot;
          </li>
          <li className="header__nav__list__item print-show">
            <a href="tel:1-647-864-6564">647-864-6564</a>
          </li>
          <li className="header__nav__list__item print-show bold">
            &middot;
          </li>
          <li className="header__nav__list__item print-show">
            <a href="mailto:me@arvinsingla.com?subject=You're hired!">me@arvinsingla.com</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
