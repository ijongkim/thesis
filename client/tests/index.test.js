import React from 'react'
import App from '../components/App'
import CurrentLocation from '../components/CurrentLocation'
import ListEntry from '../components/ListEntry'
import MainQuestion from '../components/MainQuestion'
import Menu from '../components/Menu'
import PostList from '../components/PostList'
import GMap from '../components/GMap'
import renderer from 'react-test-renderer'

it.skip('renders App component to DOM', () => {
  const app = renderer.create(<App />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it.skip('renders PostList component to DOM', () => {
  const app = renderer.create(<PostList />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it('renders ListEntry component to DOM', () => {
  const app = renderer.create(<ListEntry />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it.skip('renders CurrentLocation component to DOM', () => {
  const app = renderer.create(<CurrentLocation />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it('renders Menu component to DOM', () => {
  const app = renderer.create(<Menu />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it.skip('renders MainQuestion component to DOM', () => {
  const app = renderer.create(<MainQuestion />
  ).toJSON()
  expect(app).toMatchSnapshot()
})

it('renders GMap component to DOM', () => {
  const app = renderer.create(<GMap />
  ).toJSON()
  expect(app).toMatchSnapshot()
})
