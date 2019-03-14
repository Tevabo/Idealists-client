/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import posed from 'react-pose';
import Button from '../../reogranisation/Questions/Button';
import request from 'superagent';
import { baseUrl } from '../../../constants';

const CompleteSubmission = (props) => {
  
  const [displaySuccess, setDisplaySuccess] = useState(false);
  
  const submit = () => {
    
    const dataToSend = props.groups.map((group, index) => {
      return {
        groupName: group.groupTitle,
        answers: group.questions.map((question) => {
          return {
            id: question.id,
            qTitle: question.text,
            qAnswer: props.answers[index.toString()][question.id],
          };
        }),
      };
    });
    
    request
      .post(`${baseUrl}/ideas`)
      .set("Authorization", `Bearer ${props.authState.token}`)
      .send({ idea: dataToSend })
      .then(res => {
        if (res.status === 200) {
          setDisplaySuccess(true);
        }
      })
      .catch(err => {
        if (err.status === 400) {
          // dispatch(userLoginFailed(err.response.body.message))
        } else {
          console.error(err);
        }
      });
  };
  
  if (displaySuccess) {
    return <GroupContainer>
      <FlexRow><FlexColumn><GroupTitle>Submission complete!</GroupTitle></FlexColumn></FlexRow>
      <FlexRow><FlexColumn><GroupSubtitle>We'll be in touch with you soon.</GroupSubtitle></FlexColumn></FlexRow>
    </GroupContainer>;
  }
  
  return (
    <GroupContainer>
      <FlexRow><FlexColumn>PARTICIPANTS’ AGREEMENT
        
        THE UNDERSIGNED:
        
        1. The Idealists B.V., a private company with limited liability (besloten vennootschap met beperkte
        aansprakelijkheid) incorporated under the laws of the Netherlands, having its registered address at
        Lijsterbeslaan 3, Loon op Zand (5175 BR), hereinafter referred to as “The Idealists”; and
        
        2. [… ], hereinafter referred to as “Participant”;
        
        also referred to below individually as a “Party” and collectively as the “Parties”.
        
        WHEREAS:
        
        A The Idealists has been incorporated to turn ideas into reality;
        
        B Participant wants to submit an idea (“the Idea”, which is broadly described in Annex 1 to this Participants’
        Agreement (“the Agreement”) to The Idealists so that The Idealists may assess and possibly validate the Idea
        (“the Assessment Phase”);
        
        C In case the Idealists lets the Idea pass the Assessment Phase, The Idealists will try to fund the exploitation
        of the Idea (the “Pair Phase”) and to found a new company (“New Company”) which will try to execute the Idea;
        
        D In case The Idealists offers Participant certain interest relating to the New Company, Participant is obliged
        to continue its involvement; in other cases Participant has the right to withdraw the Idea;
        
        HEREBY AGREE AS FOLLOWS:
        
        1 Submission of the Idea
        
        1. By signing this Agreement, Participant submits the Idea as described in Annex 1 to the Idealists digitally.
        Participant hereby assigns and transfers all possible present and future rights and claims – intellectual
        property rights and other rights and claims – relating to the Idea to the Idealists and undertakes to do,
        execute and make all such acts, deeds, powers of attorney, assignments and assurances for the assignment and
        transfer to the Idealists and to otherwise do everything that is necessary to assign and transfer any rights to
        the Idealists.
        2. Participant guarantees that the Idea has solely been generated by Participant itself and that no third party
        may fully or partially make a claim with respect to the Idea. Participant furthermore guarantees that the Idea
        has never been submitted to the Idealists before.
        
        2 Assessment and Pair Phase, New Company
        
        1. During the Assessment phase the Idealists may – at its own discretion and without being obliged to do so –
        try to assess and validate the Idea in order to see if it is potentially a viable idea that may be exploited
        within a company.
        2. The Idealists will bear all costs relating to the Assessment Phase, for example the cost regarding a market
        check, an IP check, as assessment by industry experts and the creation of a financial plan.
        3. Participant will reimburse the Idealists for all the costs relating to the assessment phase in case the Idea
        was not solely generated by Participant itself, a third party makes a claim with respect to the Idea and/or the
        Idea has been submitted to the Idealists before.
        4. In case the Idealists – at its discreation – deems enough funding has been reached, the New Company as well
        as a Trust Office Foundation may be incorporated by the Idealists. In case the Idealists offers Participant 10%
        or more of the depositary receipts for a share in the Trust Office Foundation that will own all of the shares of
        the New Company, Participant is obliged to accept this share and to continue its involvement in the exploitation
        of the Idea. In case Participant is offered less than 10% of the depositary receipts for a share, Particpant has
        the right to withdraw the Idea from the Idealists and exploit it itself.
        
        3 Transfer back of the Idea
        
        1. In case the Idealist decides, at it may at its sole discretion and for whichever reason and at whichever
        moment in the process (the Assessment Phase, the Pair Phase, the phase in which the New Company is being founded
        or afterwards), that it will end the process and thus will no longer try to give concrete form to the Idea, the
        rights to the Idea will be transferred back to Participant.
        
        4 Non-competition
        
        1. Participant undertakes not to enter the employ of or work in any manner, either directly or indirectly, for
        any business that performs the same or similar activities as the New Company nor have any interests in such
        business and to refrain from performing the same or similar activities for his own account, from the moment of
        the signing of this Agreement up to the moment the Idealists explicitly states it no longer wishes to try and
        exploit the Idea. A penalty of EUR 1,000 shall be forfeited by Participant to the Idealists for each violation
        of this provision or each day that Participant acts in violation of this provision, notwithstanding the right of
        the Idealists and the New Company to claim damages from Participant, among which are the costs made by the
        Participants to validate the Idea and to found the New Company.
        
        5 Various
        
        1. Parties hereto agree to replace, so far as practicable, any provision which is prohibited, unlawful or not
        enforceable with another provision having substantially the same effect in its legal content as the replaced
        provision, but which is not prohibited, unlawful or not enforceable. The invalidity in whole or part of any
        provisions of any of the Agreement shall not void or affect the validity of any other provision.
        2. This Agreement will remain in force as long as the rights to the Idea have not been transferred back to
        Participant. This Agreement constitutes the entire agreement between the Parties regarding the subject of this
        Agreement. This Agreement replaces all earlier agreements, oral or written, related to the subject of this
        Agreement.
        3. This Agreement may be amended only if the amendment is recorded in writing and signed by all the Parties to
        this Agreement.
        4. This Agreement is governed by and will be interpreted in accordance with Dutch law. All disputes related to
        this Agreement or the agreements concluded in the performance of or in connection with this Agreement will be
        submitted exclusively to the competent court of Oost-Brabant, location 's-Hertogenbosch.
        
        Annex 1: Concise description of the Idea
        
        This Agreement will be accepted by Participant by clicking on the “I agree” button online. This Agreement will
        be accepted by The Idealist by making it available online to Participant.
      
      </FlexColumn></FlexRow>
      <FlexRow><FlexColumn><Button text={'I agree'} onClick={submit()} /></FlexColumn></FlexRow>
    </GroupContainer>
  );
};

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  @media only screen and (orientation:portrait) { 
    flex-direction: column;
}
`;

const FlexColumn = styled.div`
  display: flex;
  flex: 1;
`;

const FormGroup = styled.div`
  padding: 5px 10px;
  flex: 1;
`;

const GroupTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  text-align: left;
  color: #ffffff;
  position:relative;
  padding: 5px 15px;
  flex: 1;
  margin-bottom: 16px;
`;

const GroupSubtitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  position:relative;
  padding: 5px 15px;
  flex: 1;
  margin-bottom: 32px;
`;

const PGroupContainer = posed.div({
  preEnter: {
    x: 600,
    originX: '50%',
    originY: '50%',
    opacity: 0,
    scale: 0.69,
    transition: {
      default: { ease: 'easeInOut', duration: 400 },
    },
  },
  enter: {
    x: 0,
    originX: '50%',
    originY: '50%',
    opacity: 1.0,
    scale: 1.0,
    transition: {
      default: { ease: 'easeInOut', duration: 400 },
    },
  },
  exit: {
    x: -600,
    originX: '50%',
    originY: '50%',
    opacity: 0,
    scale: 0.69,
    transition: { ease: 'easeInOut', duration: 400 },
  },
});

const GroupContainer = styled(PGroupContainer)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export default CompleteSubmission;