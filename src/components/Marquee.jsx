import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */
  position: relative;

@media (max-width: 48em){
  width: 90vw;
} 

`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-weight:600;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;

const Banner = styled.h1`
  font-size: 100px;
  font-family: 'Bungee Shade';
  color: #1E6DEB;
  /* position: absolute; */
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em){
    font-size: 70px;
}
@media (max-width: 64em){
    margin: 1rem 0;
}
 
@media (max-width: 48em){
    font-size: 60px;
    margin: 0.5rem 0;

}
@media (max-width: 30em){
    font-size: 40px;
}

  span {
    border-radius:15px;
    display: block;
    margin:10px 0px 10px 0px !important;
    @media (max-width: 48em){
      padding:10px !important;
    }
    background-color:#F2DD21 ;

    padding: 1rem 2rem;
    
  }
  span:hover{
    background-color:#1E6DEB !important;
    color:#F2DD21 !important;
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
           #YENNUM YELLOW
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            #MANJAPPADA
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
             #KERALA BLASTERS
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
                       #TUSKERS
          </span>
        </Banner>
        <Banner data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
        #YELLOW ARMY
          </span>
        </Banner>
       
      </Container>
    </Section>
  );
};

export default Marquee;