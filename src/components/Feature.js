import React, { Fragment } from 'react'

export default function Feature({name, value}) {
  return (
    <Fragment>
        {name} : {value}.
        <br />
    </Fragment>
  )
}
