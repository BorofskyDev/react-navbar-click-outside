import logo from './assets/img/logo.svg'
import './App.css'
import DropdownItem from './components/DropdownItem'
import edit from './assets/img/edit.png'
import envelope from './assets/img/envelope.png'
import logOut from './assets/img/log-out.png'
import question from './assets/img/question.png'
import settings from './assets/img/settings.png'
import user from './assets/img/user.png'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return() => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div>
      <div className='menu-container' ref={menuRef}>
        <div
          className='menu-trigger'
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img src={logo} alt='' />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3>
            Solit
            <br />
            <span>Space Travel</span>
          </h3>
          <ul>
            <DropdownItem img={user} text={'My Profile'} />
            <DropdownItem img={edit} text={'Edit Profile'} />
            <DropdownItem img={envelope} text={'Inbox'} />
            <DropdownItem img={settings} text={'Settings'} />
            <DropdownItem img={question} text={'Help'} />
            <DropdownItem img={logOut} text={'Log Out'} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
