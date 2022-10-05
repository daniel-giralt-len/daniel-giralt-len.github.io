import styled from 'styled-components'

const TimelineWrapper = styled.ol``

const TimelineItem = ({
    company,
    time,
    description,
    link,
}) => (
    <li>
        {   
            link 
            ? (<a href={link}>{company}</a>)
            : (<div>{company}</div>)
        }
        <div>{company}</div>
        <div>{time}</div>
        <div>{description}</div>
    </li>
)

const Timeline = ({timeline}) => (
    <TimelineWrapper>
        {timeline.map(item => <TimelineItem key={item.company} {...item} />)}
    </TimelineWrapper>
)

export default Timeline