import React from 'react'

const Fact = ({ title, content, number }) => {
  return <div className="data">
    <div className="number">{number}</div>
    <div className="data-title">{title}</div>
    <div className="data-content">
      {content}
    </div>
  </div>
}

export default Fact
