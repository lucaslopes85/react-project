/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'

import logo from '../../images/logo.svg';
import user1 from '../../images/placeholders/user-1.jpg';
import user2 from '../../images/placeholders/user-2.jpg';
import user3 from '../../images/placeholders/user-3.jpg';


export default function Users() {
  return (
    <div class="wrapper">
    <div class="app-header">
      <div class="app-header__logo">
        <img src={logo} class="responsive" alt="" />
      </div>
      <div class="app-header__menu">
        <i class="fa fa-bars"></i>
      </div>
    </div>

    <div class="users">
      <h1>Users</h1>

      <div class="users__list">
        <a href="#" class="users__list-item">
          <div class="users__list-item-photo">
            <img src={user1} class="responsive avatar" alt="" />
          </div>
          <div class="users__list-item-name">John Walter</div>
        </a>
        <a href="#" class="users__list-item">
          <div class="users__list-item-photo">
            <img src={user2} class="responsive avatar" alt="" />
          </div>
          <div class="users__list-item-name">Chris Hudson</div>
        </a>
        <a href="#" class="users__list-item">
          <div class="users__list-item-photo">
            <img src={user3} class="responsive avatar" alt="" />
          </div>
          <div class="users__list-item-name">Bryan Cornell</div>
        </a>
      </div>
    </div>

    <div class="app-footer">Módulo React :: Full Stack Development</div>
  </div>
  )
}
