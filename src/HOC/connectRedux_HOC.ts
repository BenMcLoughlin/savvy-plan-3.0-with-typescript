

import {compose} from "redux"
import {connect} from "react-redux"
import {setValue_action} from "../redux/actions"
import { IAppState} from "types/reducer_types"

//Pages
import {Onboard as _Onboard} from "pages/onboard/Onboard"
import {Wizard as _Wizard} from "pages/onboard/Wizard"

//Components

import { ProgressBar as _ProgressBar } from "components/ProgressBar"
import {Button as _Button} from "../components/Button"
import { Next as _Next } from "components/Next"
import { Back as _Back } from "components/Back"
import { CumulativeSelect as _CumulativeSelect } from "components/CumulativeSelect"
import { DualSelect as _DualSelect } from "components/DualSelect"
import { MultiSelect as _MultiSelect } from "components/MultiSelect"
import { TextInput as _TextInput } from "components/TextInput"
import { NumberSelect as _NumberSelect } from "components/NumberSelect"
import { Slider as _Slider } from "components/Slider"
import { TextAndTwoSliders as _TextAndTwoSliders } from "components/TextAndTwoSliders"
import { SideNav as _SideNav } from "components/SideNav"


const mapStateToProps = (state: IAppState) => ({state})



//SMART CONNECTED COMPONENTS
export const ProgressBar = compose(connect(mapStateToProps, { setValue_action }))(_ProgressBar)
export const Button = compose(connect(mapStateToProps, {setValue_action}))(_Button)
export const Next = compose(connect(mapStateToProps, {setValue_action}))(_Next)
export const Back = compose(connect(mapStateToProps, {setValue_action}))(_Back)
export const CumulativeSelect = compose(connect(mapStateToProps, {setValue_action}))(_CumulativeSelect)
export const DualSelect = compose(connect(mapStateToProps, {setValue_action}))(_DualSelect)
export const MultiSelect = compose(connect(mapStateToProps, {setValue_action}))(_MultiSelect)
export const TextInput = compose(connect(mapStateToProps, {setValue_action}))(_TextInput)
export const NumberSelect = compose(connect(mapStateToProps, {setValue_action}))(_NumberSelect)
export const Slider = compose(connect(mapStateToProps, { setValue_action }))(_Slider)

/**
 * The  TextAndTwoSliders component manages a set of `<Transition>` components
 * in a list. Like with the `<Transition>` component, `<SideNav>`, is a
 * state machine for managing the mounting and unmounting of components over
 * time.
 *  */

export const TextAndTwoSliders = compose(connect(mapStateToProps, {setValue_action}))(_TextAndTwoSliders)

/**
 * The <SideNav> component contains a list of values: "Income", "Spending", "Taxes" etc. The User can click
 * a value to navigate between pages. The Nav is visible non matter which page is rendered. 
 *  */

export const SideNav = compose(connect(mapStateToProps, { setValue_action }))(_SideNav)


//SMART CONNECTED PAGES
export const Onboard = compose(connect(mapStateToProps, {setValue_action}))( _Onboard)
export const Wizard = compose(connect(mapStateToProps, {setValue_action}))(_Wizard)

