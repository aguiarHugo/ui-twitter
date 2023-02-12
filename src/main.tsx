import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle, House, Bell, Hash, Envelope, BookmarkSimple, User, FileText, DotsThreeCircle } from 'phosphor-react'

import twitterLogo from './assets/logo-twitter.svg'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href=""> 
            <House weight="fill" /> 
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
             Notifications
          </a>
          <a href="">
            <Envelope /> 
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More</a>
        </nav>

        <button className="new-tweet" type="button">Tweet</button>
      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/aguiarHugo.png" alt="Hugo Aguiar" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
