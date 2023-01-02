import React, {FC} from "react";
import styled from "styled-components";
import ButtonPro from "../../Interact/Button";

const ShowerContainer = styled.div`
  width: 100%;
  border: none;
  font-size: inherit;
  font-family: inherit;
`


const ShowHeadTitle = styled.div`

`

const ShowHeadCode = styled.div`
  
`

const ShowHead = styled.div`
    display: flex;
  position: relative;

  
  & ${ShowHeadCode}{
    position: absolute;
    right: 0;
  }
`

const Description = styled.div`
  margin-bottom: 1.2rem;
`

const Exhibition = styled.div`
    padding: 1rem;
`

const Code = styled.div`
  padding: 1rem;
    border: 1px solid #d4d4d5;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`

const CodeShowHead = styled.div`
    display: flex;
  position: relative;
  background-color: #F8F8F8;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  box-shadow: 0 0 0 1px #dddddd;
  & span{
    
  }
  
  & div{
    position: absolute;
    right: 1rem;
  }
`

const CodeShowWrapper = styled.div`
    border: 1px solid #d4d4d5;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  & ${CodeShowHead}{
    border-bottom: 1px solid #d4d4d5;
    padding: 0.4rem 0 0.4rem 1rem;
  }
`

const CodeShowerSimplicity:FC = () => {

    return(
        <React.Fragment>
            <ShowerContainer>
                <ShowHead>
                    <ShowHeadTitle>head</ShowHeadTitle>
                    <ShowHeadCode>show</ShowHeadCode>
                </ShowHead>
                <Description>Description</Description>

                <CodeShowWrapper>
                    <CodeShowHead>
                        <span>Example</span>
                        <div>copy</div>
                    </CodeShowHead>

                    <Exhibition>
                        <ButtonPro type='Hover' text='Button' size='tiny'/>
                    </Exhibition>
                </CodeShowWrapper>
                <Code >

                </Code>

            </ShowerContainer>
        </React.Fragment>
    )
}


export default CodeShowerSimplicity;
