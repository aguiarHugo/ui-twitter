import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/aguiarHugo.png" alt="Hugo Aguiar" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Hugo Aguiar</strong>
          <span>@aguiarHugo</span>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia magni beatae nemo dolore quos sequi natus 
            tempore quas, commodi recusandae assumenda, dignissimos 
            modi consectetur atque quis corrupti, quam delectus minus!
          </p>
        <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
            </button>
            <button type="button">
              <ArrowsClockwise />
            </button>
            <button type="button">
              <Heart />
            </button>
          </div>
      </div>
    </Link>
  )
}