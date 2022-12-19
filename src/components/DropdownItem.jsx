import React from 'react'

function DropdownItem(props) {
    const {img, text} = props
  return (
    <li className="dropdownItem">
        <img src={img} alt={text} />
        <a href="">{text}</a>
    </li>
  )
}

export default DropdownItem