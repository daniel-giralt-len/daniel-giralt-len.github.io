import styled from 'styled-components'

const TimelineWrapper = styled.ol`
    padding: 0;
    list-style-type: disc;
    border-left: 1px solid black;
    padding-left: 0.9em;
`

const DateWrapper = styled.div`
    font-size: 0.75em;
    display: inline;
    margin-right: 0.5em;
`

const CompanyWrapper = styled.h5`
    display: inline-block;
    margin: 0;
    font-size: 1.1em;
    margin: 0.4em 0;
`

const DescriptionWrapper = styled.div`
    text-indent: 1em;
    margin-left: 0.5em;
`

const TimelineItem = ({
    company,
    time,
    description,
    link,
}) => (
    <li>
        {time && <DateWrapper>({time})</DateWrapper>}
        <CompanyWrapper>
            {   
                link 
                ? (<a href={link}>{company}</a>)
                : company
            }
        </CompanyWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
    </li>
)

const Timeline = ({timeline}) => (
    <TimelineWrapper>
        {timeline.map(item => <TimelineItem key={item.company} {...item} />)}
    </TimelineWrapper>
)

export default Timeline