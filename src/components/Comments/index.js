import {useState} from 'react' // import useState from react library.
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  // useState for name input
  const [name, setName] = useState('')
  // useState for comment input
  const [comment, setComment] = useState('')

  // Here for state we have given object as an value.
  const [commentText, setCommentText] = useState({name: '', comment: ''})

  // This useState is created for creating multiple comments using Arrays of objects.
  const [commentsList, setCommentsList] = useState([])

  // onChange event handler for name input
  const onChangeNameInput = event => {
    setName(event.target.value)
  }

  // onChange event handler for comment input
  const onChangeCommentInput = event => {
    setComment(event.target.value)
  }

  //  To stop the default property of form element.(to prevent the page reload)
  const onAddComment = event => {
    event.preventDefault()
    setCommentText({name, comment})

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }

    setName('')
    setComment('')
    setCommentsList(prevCommentList => [...prevCommentList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeNameInput}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onChangeCommentInput}
          value={comment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentItem commentDetails={commentText} />
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
