import styled from 'styled-components'

const PrintFriendlyAnchor = styled.a`
    @media print {
        &:link, &:visited {
            ${({underlined}) => underlined ? 'text-decoration: underline;' : 'text-decoration: inherit;'})
            color: inherit;
        }
    }
`

export default PrintFriendlyAnchor;