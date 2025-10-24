import { useState } from 'react'

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={`arrow ${open ? 'open' : ''}`}>^</span>
      </div>
      {open && <div className="collapse__content">{content}</div>}
    </div>
  )
}

export default Collapse
