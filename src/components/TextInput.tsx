import React, {FC} from 'react'
import styled from "styled-components"
import _ from "lodash"

interface IProps {
	reducer: string;
  state: any
  id: string
  setValue_action: (id: string, reducer: string, value: string | number | boolean, childId: string) => void;
    textInput?: boolean
    type: string
    placeholder?: string
}

export const TextInput:FC<IProps> = ({reducer, state, setValue_action, id, placeholder, type}) => {
  
    const subject = state[reducer][id]

    const valid = subject.toString().length === 4 && +subject > 1930 && +subject < 2025                         

    return (
        <Wrapper>
            <Label>{_.startCase(id)}</Label>
            <Input
                    placeholder={placeholder}
                    type={type === "year" ? "number" : "text"}
                    onChange={(e) => setValue_action(id, reducer, e.target.value, "")}
            />
                         {
                    type === "year" && subject.length === 4 && !valid &&   <Text>
                                                                                Please Enter a valid year eg. 1990
                                                                             </Text>
                }
             
 

            

             
        </Wrapper>
    )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    position: relative;
`
const Label = styled.label`
    font-size: 1.2rem;
    font-weight: normal;
    pointer-events: none;
    color: ${props => props.theme.color.darkGrey};
    font-weight: 800;
    position: absolute;
    top: 2.2rem;
    left: 2rem;
`
const Text = styled.label`
    position: relative;
    top: 3rem;
    left: 3rem;
    font-size: 1.2rem;
    color: ${props => props.theme.color.salmon}
`
const Input = styled.input`
    background-color: white;
    color: grey;
    font-size: 1.6rem;
    font-weight: 800;
    padding: 1.2rem;
    display: block;
    width: 30rem;
    padding: 3rem 0rem 2rem 2rem;
    margin-top: 1rem;
    height: 9rem;
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.color.darkGrey};
    
    &:focus{
        outline: none; 
        border: 1px solid ${props => props.theme.color.green};
    }
`