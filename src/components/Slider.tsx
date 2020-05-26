import React, {FC} from 'react';
import styled from 'styled-components';
import {ISlider} from "pages/onboard/types"

interface ISliderProps {
  bottomLabel: string;
  max: number
  step: number
  id: string
  reducer: string
  topLabel:  string;
  title: string
  percent?: boolean;
  state: any
  setValue_action: (id: string, reducer: string, value: string | number | boolean, childId: string) => void;
}

export const Slider: FC<ISliderProps> = ({id, topLabel, bottomLabel, reducer, percent, state, max, setValue_action, step}) => {

    const props = state[reducer][id]
    const value = reducer === "main_reducer" ? props.value : props

  return (
      <Wrapper>
                 <Label>{topLabel}</Label>
                 <Value
                   type="text"
                   autoComplete="off"
                   onChange={(e) => setValue_action(id, reducer, e.target.value, "value")}                                                    
                   value={percent ? `${value}%` : value.toLocaleString()}
                 />     
                 <RangeBar 
                   type="range"
                   onChange={(e) => setValue_action(id, reducer, +e.target.value, "value")}                                                                        
                   value={value}
                   max={max}
                   step={step}
                   percentage={`${(value/max)*100}%`}
                 />
                    <Label style={{marginTop: "-1.4rem"}}>{bottomLabel}</Label>
        </Wrapper>
    )
}

//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
margin-top: 1rem;
margin-left: -3rem;
position: relative;
width: 20rem;
height: 12rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


const Label = styled.div`
font-size: 1.6rem;
color: ${props => props.theme.color.darkGrey};
text-transform: capitalize;
`
interface IRange {
  percentage: string
}

const RangeBar = styled.input<IRange>`

width: 15rem;
height: 2px;
-webkit-appearance: none;
outline: none;
opacity: 0.7;
-webkit-transition: 0.2s;
border-radius: 12px;
margin-top: 2rem;
margin-bottom: 2rem;
transition: all 1s ease;
background: linear-gradient(90deg, 
        ${props => "#707070 "} ${props => props.percentage}, 
        ${props => "#C8C7C7"} ${props => props.percentage});
&::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 12px;
height: 12px;
background: white;
border: .5px solid #707070;
border-radius: 50%;
cursor: pointer;
}

&:active::-webkit-slider-thumb
{
background: #707070;
}

`

const Value = styled.input`
    margin-top: 1rem;
    text-align: center;
    padding: 0.3rem;
    width: 11rem;
    border-radius: 5px;
    color: #5A5758;
    background: none;
    border: none;
    cursor: pointer;
    &:focus{
        background: lightGrey;
    }
    font-size: 2.3rem;
    outline: none;
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
}
`
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// This is the entire rangebar wrapper that contains the label, the range bar input and the value output. 