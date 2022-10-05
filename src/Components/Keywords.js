import styled from 'styled-components'

const KeywordItem = styled.li``

const Keywords = ({list}) => (
    <ul>
        {list.map(keyword => (
            <KeywordItem key={keyword}>
                {keyword}
            </KeywordItem>)
        )}
    </ul>
)

export default Keywords