import React, { FC } from 'react';
import styled from 'styled-components';

export interface IButton {
	label: string;
	id: string;
	reducer: string;
  value: string | number | boolean;
	setValue_action: (id: string, reducer: string, value: string | number | boolean, childId: string) => void;
}

export const Button: FC<IButton>= ({label, id, reducer, setValue_action, value}) => {
    return <Wrapper onClick={() => setValue_action(id, reducer, value, "")}>
            {label}
          </Wrapper>;
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.button`
	height: 4.2rem;
	min-width: 14rem;
	max-width: 17rem;
	background: #5e9090;
	border-radius: 100px;
	box-shadow: 0 1px 2px rgba(0, 0, 0.01, .08);
	color: white;
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 1.4rem;
	padding: 1rem 2rem 1rem 2rem;
	cursor: pointer;
	outline: none;
	transition: all .2s ease-in;
	text-transform: capitalize;
	&:hover {
		background: #548181;
	}
`;
