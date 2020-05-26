import { TreducerID } from "types/reducer_types"

type Icomponents = "DualSelect" | "Button" | "CumulativeSelect" | "NumberSelect" | "MultiSelect" | "Slider" | "TextInput" | "TwoSliders"
type Ireducers = "main_reducer" | "ui_reducer" | "user_reducer" 

interface ICoreProps {
  ask?: string
  component: Icomponents;
  id: TreducerID
  reducer: Ireducers;
  subTitle?: string;   
  title: string;
  spouse?: boolean
}

export interface IButton extends ICoreProps {
  label?: string;
  value: number;
}

export interface ICumulativeSelect extends ICoreProps {
  array: string[];
}

export interface IDualSelect extends ICoreProps {
  option1: string;
  option2: string;
}

export interface INumberSelect extends ICoreProps {
  value: number;
}

export interface IMultiSelect extends ICoreProps {
  array: string[];
  textInput: boolean
}

export interface ISlider extends ICoreProps {
  ask: string
  bottomLabel?: string;
  max: number
  step: number
  topLabel:  string;
  title: string
  percent?: boolean;
}

interface ISingleSlider  {
  bottomLabel?: string
  max: number
  step: number
  id: string
  topLabel: string
  reducer: string
  percent?: boolean;
}

export interface ITwoSliders extends ICoreProps {
  props1: ISingleSlider 
  props2: ISingleSlider 
}

export interface ITextInput extends ICoreProps {
  placeholder: string;
  type: string;
}
  


export type IOnboard = IButton | ICumulativeSelect | IDualSelect | ITwoSliders | ITextInput | INumberSelect | IMultiSelect | ISlider
