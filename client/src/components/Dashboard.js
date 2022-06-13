import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'

function Dashboard({id}) {
  const { selectedConversation } = useConversations()
  return (
    <div className='d-flex' style={{height:'100vh'}}>
        <Sidebar id={id}></Sidebar>
        {selectedConversation && <OpenConversation />}
    </div>
  )
}

export default Dashboard