import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai"

import { Button } from 'ui/buttons';
import {EditorFeedBackStyles, FeedBack, FeedBackMessage, FeedBackOption} from './styles'

function EditorFeedBack ({children, status, writeCompleted, ...props})  {
  const navigation = useNavigate()

  return (
        <EditorFeedBackStyles  {...props}>
          {
            !status?
            <FeedBack>
              <AiOutlineCheckCircle color="forestgreen" size="12rem"/>
              <FeedBackMessage>
                Product Upload Successfully
              </FeedBackMessage>
            </FeedBack>
            :
            <FeedBack>
              <AiOutlineCloudUpload color="forestgreen" size="12rem"/>
              <FeedBackMessage>
                Uploading New Product
              </FeedBackMessage>
            </FeedBack>
          }

          <FeedBackOption>
            <Button bc="forestgreen" color="white"  onClick={()=>writeCompleted(false)} disabled={status}>
              Add Another Plant
            </Button>
            <Button bc="white" color='forestgreen' onClick={()=> navigation('/dashboard')}>
              View All Plants
            </Button>
          </FeedBackOption>

        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack