import styled from 'styled-components'

const KeywordListWrapper = styled.ul`
    display: flex;
    justify-content: center;

    margin: 0.5em 0;
    padding: 0;

    list-style-type: none;
    font-size: 1.25em;
`

const Keywords = ({list}) => (
    <KeywordListWrapper>
        {list.join(', ')}
    </KeywordListWrapper>
)

export default Keywords