import React, { memo } from 'react';
import { ListAtomWrapper } from './style'

export default memo(function ListAtom(props) {
    return (
        <ListAtomWrapper>
           <h2 className="tit">{props.title}</h2>
           <span className="content">{props.content}</span> 
        </ListAtomWrapper>
    )
})
