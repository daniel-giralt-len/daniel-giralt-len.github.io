import styled from 'styled-components'
import Keywords from './Keywords'

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
        {keywords && <Keywords list={keywords} />}
        {summary && (<p>{summary}</p>)}
        {timeline && (<Timeline timeline={timeline} />)}
    </ExperienceSectionWrapper>
)

export default ExperienceSection