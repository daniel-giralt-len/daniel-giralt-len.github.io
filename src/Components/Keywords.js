import styled from 'styled-components'

const KeywordListWrapper = styled.ul`
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