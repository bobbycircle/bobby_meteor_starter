import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'
import {render} from 'react-dom'
import {App} from '/imports/ui/layouts/'

Meteor.startup( () => {
  render(
    <App />,
    document.getElementById('react_render_target')
  )
})
