import styled from 'styled-components'

const ExperienceList = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
    @media print {
        column-count: 2;
        display: block;
    }
    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
`

export default ExperienceList