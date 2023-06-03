import React from "react";
import {ICard, IComment} from '../../App'
import {Comment} from '../Comment'

type ICardProps = {
    card: ICard
    comments: IComment[]
}

export const Card: React.FC<ICardProps> = (props) => {
    return (
       <div className="card">
            <h3 className="card__name">{props.card.name}</h3>
            <p className="card__description">{props.card.description}</p>
            {props.comments.map((comment) => {
                return props.card.commentsId.map((commentId) => {
                    if(comment.id === commentId) {
                        return (
                            <Comment key={commentId} comment={comment}/>
                        )
                    }
                })
            })}
       </div>
    )
}