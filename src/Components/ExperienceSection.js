import styled from 'styled-components'

const ExperienceSectionWrapper = styled.section``

const ExperienceSection = ({
    sectionTitle
}) => (
    <ExperienceSectionWrapper>
        <h3>{sectionTitle}</h3>
    </ExperienceSectionWrapper>
)

export default ExperienceSection