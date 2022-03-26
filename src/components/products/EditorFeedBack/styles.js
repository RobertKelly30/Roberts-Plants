import styled from 'styled-components';



const EditorFeedBackStyles  = styled.aside`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
`;

const FeedBackMessage = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
    color: black;
`

const FeedBack = styled.figure`

`

const FeedBackOption = styled.footer`
margin-top: 1rem;
    button {
        width: fit-content;
        margin: 0.5rem;
    }
`

export {EditorFeedBackStyles, FeedBack, FeedBackMessage, FeedBackOption}