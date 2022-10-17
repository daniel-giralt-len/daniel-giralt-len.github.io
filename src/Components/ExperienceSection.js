import styled from 'styled-components'
import Keywords from './Keywords'

import Timeline from './Timeline'

const ExperienceSectionWrapper = styled.section`
    @media print {
        break-inside: avoid;
    }
`

const ExperienceSection = ({
    sectionTitle,
    summary,
    keywords,
    timeline,
    years
}) => (
    <ExperienceSectionWrapper>
        <h3>{sectionTitle} {years && `(${years} year${years>1 ? 's' : ''})`}</h3>
        {keywords && <Keywords list={keywords} />}
        {summary && (<p>{summary}</p>)}
        {timeline && (<Timeline timeline={timeline} />)}
    </ExperienceSectionWrapper>
)

export default ExperienceSection