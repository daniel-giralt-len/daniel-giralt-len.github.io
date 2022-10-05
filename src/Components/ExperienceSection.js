import styled from 'styled-components'

import Timeline from './Timeline'

const ExperienceSectionWrapper = styled.section``

const ExperienceSection = ({
    sectionTitle,
    summary,
    keywords,
    timeline,
}) => (
    <ExperienceSectionWrapper>
        <h3>{sectionTitle}</h3>
        {JSON.stringify(keywords)}
        {summary && (<p>{summary}</p>)}
        {timeline && (<Timeline timeline={timeline} />)}
    </ExperienceSectionWrapper>
)

export default ExperienceSection