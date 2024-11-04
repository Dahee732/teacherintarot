import styled from "styled-components";
import resultList from '../assets/images/list_marker.svg'
const ResultSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color:var(--basic-yellow);
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContentItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
  padding-left:20px;
  position:relative;
  &::before{
    content:'';
    left:0px;
    top:4px;
    width:12px;
    height:12px;
    background:url(${resultList}) no-repeat center / contain;
    position:absolute;
    display:block;
  }
`;
const Section = ({ title, items }) => {
    return (
        <ResultSection>
            <SectionTitle>{title}</SectionTitle>
            <ContentList>
                {items.map((item, index) => (
                    <ContentItem key={index}>{item}</ContentItem>
                ))}
            </ContentList>
        </ResultSection>
    );
};


export default Section;