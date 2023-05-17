import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
    position: relative;
    width: 53.125rem;
    height: 20rem;
    border-radius: 3.125rem;
    background-color: orangered;
`

export const ProductCardWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 3.125rem;
&>div {

  &>img {
    border-radius: 3.125rem;
  }
}

&>img {
  position: absolute;
  bottom: 0;
  right: 2.5rem;
}
`;

export const CardInfo = styled.div`
  margin: 1rem 0 3.5rem 4rem; 
  padding: 1rem;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  &>div {
    width: unset;
  }
`
export const CardYear = styled.div`
padding: 0.5rem 0.5rem;
width: fit-content;
position: relative;
 font-size: 0.7rem;
 font-weight: 700;
 background: linear-gradient(to top left, #C13509, #FAA525);
 border-radius: 6px;
`
export const CardTitle = styled.div`
  height: 3rem;
  margin: 0.5rem 0 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.25;
`

export const AddToCart = styled.div`
  padding: 0 0.5rem;
  min-width: 15rem;
  height: 3.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #071B24 5%, #0D2028 10%, #575757D4 );
  border: none;
  outline: none;
  border-radius: 42px;

&>span {
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: 400;
}
`

export const show = css`
opacity: 1;
transition: all 0.4s ease-in-out;
`

export const hide = css`
opacity: 0,
transition: all 0.4s ease-in-out;
`
