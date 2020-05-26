import _ from "lodash"
import { IMainState, ISetValue_action } from "types/reducer_types"

const initialState = {
    employmentIncome: {
        color: "#8CB8B7",
        age1: 18,
        reg: "employmentIncome",
        stream: "Employment Income",
        age2: 65,
        id: "employmentIncome",
        value: 0,
    },
    nonEmploymentIncome: {
        color: "#8CB8B7",
        age1: 18,
        reg: "employmentIncome",
        stream: "Non-Employment Income",
        age2: 65,
        id: "nonEmploymentIncome",
        value: 0,
    },
    spouseEmploymentIncome: {
        color: "#8CB8B7",
        age1: 18,
        reg: "employmentIncome",
        stream: "Employment Income",
        age2: 65,
        id: "spouseEmploymentIncome",
        value: 0,
    },
    TFSAinitialValue: {
        color: "#8CB8B7",
        age1: 17,
        reg: "TFSA",
        stream: "TFSA Contributions",
        age2: 64,
        id: "TFSAcontribution",
        transaction: "contribution",
        value: 0,
    },
    RRSPinitialValue: {
        color: "#8CB8B7",
        age1: 17,
        reg: "TFSA",
        stream: "TFSA Contributions",
        age2: 64,
        id: "TFSAcontribution",
        transaction: "contribution",
        value: 0,
    },
    NREGinitialValue: {
        color: "#8CB8B7",
        age1: 17,
        reg: "TFSA",
        stream: "TFSA Contributions",
        age2: 64,
        id: "TFSAcontribution",
        transaction: "contribution",
        value: 0,
    },
    primaryResidenceValue: {
        color: "#8CB8B7",
        age1: 17,
        reg: "property",
        stream: "property",
        age2: 64,
        id: "primaryResidenceValue",
        value: 0,
    },
    rent: {
        color: "#8CB8B7",
        age1: 17,
        reg: "expense",
        stream: "rent",
        age2: 64,
        id: "rent",
        value: 0,
    },
    primaryResidenceMortgage: {
        color: "#8CB8B7",
        age1: 17,
        reg: "property",
        stream: "property",
        age2: 64,
        id: "primaryResidenceMortgage",
        value: 0,
    },
    TFSAcontribution: {
        color: "#8CB8B7",
        age1: 17,
        reg: "TFSA",
        stream: "TFSA Contributions",
        age2: 64,
        id: "TFSAcontribution",
        transaction: "contribution",
        value: 0,
    },
    TFSAwithdrawal: {
        color: "#8CB8B7",
        age1: 65,
        reg: "TFSA",
        stream: "TFSA Withdrawals",
        age2: 95,
        id: "TFSAwithdrawal",
        taxable: false,
        transaction: "withdrawal",
        incomeType: "retirementIncome", 
        value: 0,
    },
    RRSPcontribution: {
        color: '#D8BABB',
        age1: 25,
        reg: "RRSP",
        stream: "RRSP Contributions",
        age2: 65,
        id: "RRSPcontribution",
        transaction: "contribution",
        taxType: "rrspDeduction",
        value: 0,
    },  
    RRSPwithdrawal: {
        color: '#D8BABB',
        age1: 66,
        reg: "RRSP",
        stream: "RRSP Withdrawals",
        age2: 95,
        id: "RRSPwithdrawal",
        transaction: "withdrawal",
        incomeType: "retirementIncome", 
        value: 0,
    },
    NREGcontribution: {
        color: '#D8BABB',
        age1: 25,
        reg: "RRSP",
        stream: "RRSP Contributions",
        age2: 65,
        id: "RRSPcontribution",
        transaction: "contribution",
        taxType: "rrspDeduction",
        value: 0,
    },  
    NREGwithdrawal: {
        color: '#D8BABB',
        age1: 66,
        reg: "RRSP",
        stream: "RRSP Withdrawals",
        age2: 95,
        id: "RRSPwithdrawal",
        transaction: "withdrawal",
        incomeType: "retirementIncome", 
        value: "",
    },

}

export const main_reducer = (state: IMainState = initialState, action: ISetValue_action ) => {
    switch(action.type) {
        case "main_reducer/DELETE": return  _.omit(state, [action.id])                  
        case "main_reducer/SET_VALUE": return {...state, [action.id]: {                           //make a copy of state, enter object, here id is the id
                                                                ...state[action.id], [action.childId]: action.value       //make a copy of object, change the id
          }}
        case "main_reducer/SET_KEY_VALUE": return {...state, [action.id]: action.value}                            //sets a simple id value pair within the reducer object


        default: return state
    }
}


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
