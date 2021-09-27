import styled from "styled-components";

const StyledSection = styled.section`
   padding: 5px 20px;
    background-color: white;
    margin: 10px 0 0 0;
`;

const SectionHeader = styled.h2`
  margin: 0 0 10px 0;
    padding: 10px;
    border-bottom: solid 1px  hsl(0, 0%, 93%);
`;
const Section = ({title, body}) => (
    <StyledSection>
        
            <SectionHeader>{title}</SectionHeader>
            {body}
        
    </StyledSection>
)

export default Section;