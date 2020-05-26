import root_reducer from "redux/root_reducer"
import {Action} from "redux"

export interface IUiState {
    stream: string;
    id: string;
    changeColor: number;
    videoUrl: string;
    progress: number, 
    selectedPage: string
}

export interface IUserState {
    firstName: string;
    spouseFistName: string;
    spouseBirthYear: string;
    province: string;
    maritalStatus: string;
    housing: string;
    investments: string;
    otherProperty: string;
    numberOfProperties: number; 
    nonEmploymentIncome: string; 
    taxAge: string;
    birthYear: string;
    currentAge: string; 
    rrifWithdrawalAge: string;
    retirementPensionIncome: string;
    gender: string;
    hasChildren: string;
    "tax free savings account": boolean;
    "registered retirement savings": boolean;
    changeAssumptions: string;
    "employer savings": boolean;
    "non-registered": boolean;
    numberOfChildren: number;
    retirementAge: number; 
    lifeSpan: number;       
    cppStartAge: number;
    oasStartAge: number;
    rrspStartAge: number;
    tfsaStartAge: number; 
    rate1:number;
    rate2: number;
    inflationRate:number;
    MER:number;
    propertyAppreciation: number;
}

export interface IMainState {
    [key: string]: IInstance
}

export type TreducerID = keyof IUserState | keyof IUiState |  keyof IMainState

export interface ISetValue_action extends Action {
    type: string;
    id: string;
    childId: string;
    value: number | string | boolean;
}

export type IAppState = ReturnType<typeof root_reducer>

export interface IInstance {
    color: string,
    age1: number,
    reg: string,
    stream: string,
    age2: number,
    id: string,
    value: string | number | boolean,
}
