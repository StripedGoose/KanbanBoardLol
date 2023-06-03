import React from 'react';
import './App.css';
import {Card} from './components/Card'

export type IComment = {
    id: string,
    content: string,
}

export type ICard = {
  id: string,
  name: string,
  description: string,
  commentsId: string[]
}

type IColomn = {
    id: string
    name: string,
    cardsId: string[]
}

type IBoard = {
  colomns: IColomn[]
}

function App() {
  const [board, setBoard] = React.useState<IBoard>({
    colomns: [
    {id: "1", name: "Todo", cardsId: []}, 
    {id: "2", name: "In progress", cardsId: []}, 
    {id: "3", name: "Testing", cardsId: []}, 
    {id: "4", name: "Done", cardsId: []},
  ]
  })
  const [cards, setCards] = React.useState<ICard[]>([])
  const [comment, setComment] = React.useState<IComment[]>([])



  const addCard = (colomnId: string) => {
      const newCardId = Date.now().toString()
      setCards((prevState: ICard[]) => [
        ...prevState,
        {
          id: newCardId,
          name: "123",
          description: "",
          commentsId: []
        }
      ])
      setBoard({
        colomns: board.colomns.map((colomn) => {
            if(colomn.id === colomnId) {
              return {
                ...colomn,
                cardsId: [...colomn.cardsId, newCardId]
              }
            }
            return colomn
        })
      })
  }

  return (
      <div className='board'>
          {board.colomns.map((colomn) => {
              return (
                <>
                <h2 className='colomn__title'>{colomn.name}</h2>
                <button onClick={() => addCard(colomn.id)}></button>
                <div>{cards.map((card) => {
                    return colomn.cardsId.map((cardId) => {
                        if(cardId === card.id) {
                          return (
                            <Card card={card} comments={comment}/>
                          )
                        }
                    })
                })}</div>
                </>
              )
          })}
      </div>
  );
}

export default App;
