import React from 'react'
import './style.main.scss'
import LinkList from '@/components/LinkList'
import CreateLink from '@/components/CreateLink'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Search from '@/components/Search'
import { Switch, Route } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <div className='center w85'>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/' component={LinkList} />
          <Route exact path='/create' component={CreateLink} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </div>
    </div>
  )
}
