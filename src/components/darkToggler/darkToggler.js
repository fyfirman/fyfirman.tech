import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Moon from "../../images/moon-sharp.svg"
import Sun from "../../images/sunny-sharp.svg"
import "./dark-toggler.scss"

const DarkToggler = () => {
  return <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        className="dark-toggler"
      >
        {theme !== 'dark' ? <img src={Sun} alt="Light Mode" /> : <img src={Moon} alt="Dark Mode" />}
      </button>
    )}
  </ThemeToggler>
}

export default DarkToggler