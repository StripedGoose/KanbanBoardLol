import React from "react"
import {IComment} from '../../App'

type ICommentProps = {
    comment: IComment
}

export const Comment: React.FC<ICommentProps> = (props) => {
    return (
        <div>{props.comment.content}</div>
    )
}