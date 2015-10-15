'use strict'

var director = require('director')
var React = require('react')
var _ = require('lodash')

// need to require css or browserify doesn't pull in the bootstrap stuff
var css = require('../../css/app.css')

var AppDispatcher = require('../dispatcher/Dispatcher')
var ActionTypes = require('../enums/ActionTypes')
var UrlDataStore = require('../stores/UrlDataStore')
var ConfigStore = require('../stores/ConfigStore')

var App = React.createClass({
  _onChange: function () {
    console.log('_onChange')
    var config = ConfigStore.get()
    this.setState({config: config})
  },
  getInitialState: function () {
    console.log('getInitialState fired')
    var config = ConfigStore.get()
    return { config: config }
  },
  componentDidMount: function () {
    // UrlDataStore.init(this.state.config.engine.dataUrl)
    ConfigStore.addChangeListener(this._onChange)
    UrlDataStore.addChangeListener(this._onChange)
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log('componentWillUpdate fired')
  },
  componentDidUpdate: function (prevProps, prevState) {
    console.log('componentDidUpdate fired')
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount fired')
    ConfigStore.removeChangeListener(this._onChange)
    UrlDataStore.removeChangeListener(this._onChange)
  },
  render: function () {
    return (
    <div>Hi!</div>
    )
  }
})

exports = module.exports = App
