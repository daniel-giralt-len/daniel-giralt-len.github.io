import styled from 'styled-components'

const DateWrapper = styled.div`
    font-size: 0.75em;
    display: inline;
    margin-left: 0.5em;
`

const TimelineItemWrapper = styled.li`
    margin-left: -11px;
`

const CompanyWrapper = styled.h5`
    display: inline-block;
    margin: 0;
    font-size: 1.1em;
    margin: 0.4em 0;
    margin-left: 0.5em;
`

const DescriptionWrapper = styled.div`
    text-indent: 1em;
    margin-left: 1.5em;
`

const PrintFriendlyAnchor = styled.a`
    @media print {
        &:link, &:visited {
            text-decoration: inherit;
            color: inherit;
        }
    }
`

const TimelineItem = ({
    company,
    time,
    description,
    link,
}) => (
    <TimelineItemWrapper>
        <img src="timeline_dot.png" alt='list item bullet' />
        {time && <DateWrapper>({time})</DateWrapper>}
        <CompanyWrapper>
            {   
                link 
                ? (<PrintFriendlyAnchor href={link}>{company}</PrintFriendlyAnchor>)
                : company
            }
        </CompanyWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
    </TimelineItemWrapper>
)

export default TimelineItem