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

const TimelineItem = ({
    company,
    time,
    description,
    link,
}) => (
    <li>
        {time && <DateWrapper>({time})</DateWrapper>}
        {   
            link 
            ? (<a href={link}>{company}</a>)
            : (<span>{company}</span>)
        }
        <div>{description}</div>
    </li>
)

const Timeline = ({timeline}) => (
    <TimelineWrapper>
        {timeline.map(item => <TimelineItem key={item.company} {...item} />)}
    </TimelineWrapper>
)

export default Timeline