import React from 'react'

const Notify = ({message,display, color}) => {
    const notification = {
            color: color,
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            display:display
    };
  return (
    <div style={notification}>
      {message}
    </div>
  )
}

export default Notify;
