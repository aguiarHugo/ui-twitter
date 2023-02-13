import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css"

const tweets = [
  'Meu primeiro tweet',
  'Teste',
  'Deu certo!'
]

let newTweet = ''

export function Timeline(){
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([ newTweet, ...tweets])
  }

  return(
    <main className="timeline">
          <Header title="Home" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/aguiarHugo.png" alt="Hugo Aguiar" />
              <textarea 
              id="tweet" 
              placeholder="What's happening?"
              value={newTweet}
              onChange={(event) => {
                newTweet = event.target.value
              }}
              />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />  
            })}

        </main>
  )
}