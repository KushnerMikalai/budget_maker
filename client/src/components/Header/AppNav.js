import React from 'react'

function Nav(props) {
  const items = props.items;
  const menuItems = items.map((item) => {
    return <li key={item.name}>
      <a href={item.href} target={item.target}>{item.name}</a>
    </li>
  });

  return (
    <nav>
      <ul>{menuItems}</ul>
    </nav>
  )
}

export default Nav