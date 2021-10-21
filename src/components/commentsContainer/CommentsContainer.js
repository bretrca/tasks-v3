import React from 'react'
import Comments from '../comments/Comments'
import styled from 'styled-components'

const ElementContainer = styled.div`
padding: 0 8px;
`

function CommentsContainer({ comments, updateComment }) {
    return (
        <ElementContainer>
            <Comments comments={comments} updateComment={updateComment} />
        </ElementContainer>
    )
}

export default CommentsContainer
