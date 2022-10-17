import styled from 'styled-components'
import TimelineItem from './TimelineItem'

const TimelineWrapper = styled.ol`
    list-style-type: none;
    padding: 0;
    margin: 0;

    border-left: 6px solid #f8e8b0;
    
`

const Timeline = ({timeline}) => (
    <TimelineWrapper>
        {timeline.map(item => <TimelineItem key={item.company} {...item} />)}
    </TimelineWrapper>
)

export default Timeline