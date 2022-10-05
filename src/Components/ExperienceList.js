import styled from 'styled-components'

const ExperienceList = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
    column-gap: 1em;
    row-gap: 1em;
`

export default ExperienceList