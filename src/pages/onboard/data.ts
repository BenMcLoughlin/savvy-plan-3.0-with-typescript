import {IUserState} from "types/reducer_types"
import { IOnboard } from "pages/onboard/types"

 export const onboard_data = (user_reducer: IUserState):IOnboard[] => {
  
   const spouseName = user_reducer.spouseFistName
   

  const array:IOnboard[] = [
    {
      component: "Button",
      id: "progress",
      reducer: "ui_reducer",
      subTitle:  "We’ll gather some information that will enable us to build a plan suited to you.", 
      title: "Lets build you a financial Plan",
      label: "continue",
      value: 1,
    },
    {
      ask: "This helps us personalize your plan.",
      component: "TextInput",
      id: "firstName",
      reducer: "user_reducer", 
      title: "What's your first Name?",
      placeholder: "Name",
      type: "text",
    },
    {
      ask: "This forms the basis of our financial calculations.",
      component: "TextInput",
      id: "birthYear",
      reducer: "user_reducer", 
      title: "What's your Birth Year?",
      placeholder: "YYYY",
      type: "year",
    },
    {
      array: ["male", "female", "prefer not to say", "write below"],
      ask: "This forms the basis of our financial calculations.",
      component: "MultiSelect",
      id: "firstName",
      reducer: "user_reducer", 
      title: "What's your Gender?",
      textInput: true,
    },
    {
      array: ["single", "married", "common-law", "write below"],
      ask: "Having a spouse has a large impact on your plan",
      component: "MultiSelect",
      id: "maritalStatus",
      reducer: "user_reducer", 
      title: "What's your marital status?",
      textInput: true,
    },
    {
      ask: "We want to estimate your government pension income, to do so we need a rough estimate of your earnings.",
      bottomLabel: "Before tax per year",
      component: "Slider",
      id: "employmentIncome",
      max: 200000,
      step: 1000,
      topLabel: "I Earn",
      reducer: "main_reducer", 
      title: "What would you say your average employment income is?",
    },
    {
      ask: "We'll use this when we analyze your cashflow.",
      component: "DualSelect",
      id: "nonEmploymentIncome",
      option1: "yes",
      option2: "no",
      reducer: "user_reducer",
      title: "Do you have non-employment income?",
    },
    {
      ask: "We'd like to add your house to your net worth, if you have one.'",
      component: "DualSelect",
      id: "housing",
      option1: "own",
      option2: "rent",
      reducer: "user_reducer",
      title: "Do you own your home or rent?",
    },
    {
      ask: "Property will be added to your net worth'",
     component: "DualSelect",
     id: "otherProperty",
     option1: "yes",
     option2: "no",
     reducer: "user_reducer",
     title: "Do you own you own any other property?",
  },
    {
      array: ["tax free savings account", "registered retirement savings",  "non-registered"],
      ask: "We'll use this info to see how much income in retirement your investments will provide",
      component: "CumulativeSelect",
      id: "investments",
      reducer: "user_reducer",
      title: "Do you have investments?",
   },

      {
       ask: `"Assumptions" refers to things like your rate of return, inflation and your lifespan. We have it pre built with the reccomended values but you're welcome to change them`,
       component: "DualSelect",
       id: "changeAssumptions",
       option1: "yes",
       option2: "no",
       reducer: "user_reducer",
       title: "Would you like to play with the plan's assumptions?",
    }, 
    {
      array: ["yes", "no", "hope to eventually", "yes, and they are over 18"],
      ask: "We'd like to estimate your government child benefits.",
      component: "MultiSelect",
      id: "hasChildren",
      reducer: "user_reducer",
      title: "Do you have children?",
      textInput: false,
    },
    {
      ask: `"Assumptions" refers to things like your rate of return, inflation and your lifespan. We have it pre built with the reccomended values but you're welcome to change them`,
      component: "DualSelect",
      id: "changeAssumptions",
      option1: "yes",
      option2: "no",
      reducer: "user_reducer",
      title: "Would you like to play with the plan's assumptions?",
    },
  ]

  if(user_reducer.maritalStatus === "married" || user_reducer.maritalStatus === "common-law") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "What's your marital status?") + 1
    array.splice(priorQuestionIndex,0,     {
      ask: "We'll use this to keep your details seperate from your spouse.",
      component: "TextInput",
      id: "spouseFistName",
      reducer: "user_reducer", 
      title: "What's your spouse's first Name?",
      placeholder: "Name",
      type: "text",
    },)
    array.splice(priorQuestionIndex + 1,0, {
      ask: "This will form the basis of our financial calculations",
      component: "TextInput",
      id: "spouseBirthYear",
      reducer: "user_reducer", 
      title: "What's your spouse's birth Year?",
      placeholder: "YYYY",
      type: "year",
    },)
    const priorQuestion2Index = array.findIndex(d => d.title ===  "What would you say your average employment income is?") + 1
    array.splice(priorQuestion2Index,0,  {
      ask: "We want to estimate your spouse's Government Pension income, to do so we need a rough estimate of their earnings.",
      bottomLabel: "Before tax per year",
      component: "Slider",
      id: "spouseEmploymentIncome",
      max: 200000,
      step: 1000,
      topLabel: "My Spouse Earns",
      reducer: "main_reducer", 
      title: "What would you say your spouse's average employment income is?",
    },)
}

 if(user_reducer.nonEmploymentIncome === "yes") {
    const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have non-employment income?") + 1

    array.splice(priorQuestionIndex,0, {
      ask: "We want to estimate your government pension income, to do so we need a rough estimate of your earnings.",
      bottomLabel: "Before tax per year",
      component: "Slider",
      id: "nonEmploymentIncome",
      max: 200000,
      step: 1000,
      topLabel: "I Earn",
      reducer: "main_reducer", 
      title: "What would you say your average non-employment income is?",
    })
}

   
if(user_reducer.housing === "own") {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you own your home or rent?") + 1


  array.splice(priorQuestionIndex,0,  {
    ask: "This will be added to your net worth.",
    bottomLabel: "",
    component: "Slider",
    id: "primaryResidenceValue",
    max: 1400000,
    step: 1000,
    topLabel: "My house is worth about",
    reducer: "main_reducer",
    title: "How Much is your house worth?",
  })
  array.splice(priorQuestionIndex + 1,0, {
    ask: "This will be added to your net worth.",
    bottomLabel: "owing on my mortgage",
    component: "Slider",
    id: "primaryResidenceMortgage",
    max: 900000,
    step: 1000,
    topLabel: "I have about",
    reducer: "main_reducer",
    title: "How much do you owe on your mortgage?",
  })
}
   
if(user_reducer.housing === "rent") {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you own your home or rent?") + 1
  array.splice(priorQuestionIndex,0,  {
    ask: "This will be added to your spending",
    bottomLabel: "in rent per month",
    component: "Slider",
    id: "rent",
    max: 4000,
    step: 100,
    topLabel: "I have about",
    reducer: "main_reducer",
    title: "How Much do you pay per month in rent?",
  })
}
   
if(user_reducer.otherProperty === "yes") {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you own you own any other property?") + 1
  array.splice(priorQuestionIndex,0,  {
      ask: "Property will be added to your net worth'",
      component: "NumberSelect",
      id: "numberOfProperties",
      value: 4,
      reducer: "user_reducer",
      title: "how many any other properties?",
  })
}

if(user_reducer.hasChildren === "yes") {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have children?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'd like to estimate your government child benefits.",
    component: "NumberSelect",
    id: "numberOfChildren",
    value: 4,
    reducer: "user_reducer",
     title: "How many children?",      
  })
}
   
if(user_reducer.hasChildren === "hope to eventually") {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have children?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We want to show estimate how much you'd earn in goverment benefits if you have children",
    component: "NumberSelect",
    id: "numberOfChildren",
    value: 4,
    reducer: "user_reducer",
    title: "How many children would you like to have?",     
  })
}
   
if(user_reducer["tax free savings account"] && ((user_reducer.maritalStatus === "married" || user_reducer.maritalStatus === "common-law"))) {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'll use this info to see how much income in retirement your investments will provide",
    component: "TwoSliders",
    id:  "TFSAinitialValue",
    reducer: "main_reducer",
    title: `We'll need some details about ${spouseName.length > 1 ? spouseName : "your spouse"}'s TFSA`,
    props1: {
       id:  "TFSAinitialValue",
       topLabel: `${spouseName.length > 1 ? spouseName : "your spouse"} currently has`,
       bottomLabel: "in my TFSA",
       max: 100000,
       step: 1000,
       reducer: "main_reducer",
   },
    props2: {
       id: "TFSAcontribution",
       topLabel: `${spouseName.length > 1 ? spouseName : "your spouse"} contributes`,
       bottomLabel: "per year",
       max: 6000,
       step: 1000,
       reducer: "main_reducer",
      },
  })
}
   
if(user_reducer["registered retirement savings"] && ((user_reducer.maritalStatus === "married" || user_reducer.maritalStatus === "common-law"))) {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
    component: "TwoSliders",
    id: "RRSPinitialValue_Spouse",
    reducer: "main_reducer",
    title: `We'll need some details about ${spouseName.length > 1 ? spouseName : "your spouse"}'s RRSP`,
    props1: {
      id: "RRSPinitialValue_Spouse",
       topLabel: `${spouseName.length > 1 ? spouseName : "your spouse"} currently has`,
       bottomLabel: "in their RRSP",
       max: 100000,
       step: 1000,
       reducer: "main_reducer",
   },
    props2: {
      id: "RRSPcontribution_Spouse",
       topLabel: `${spouseName.length > 1 ? spouseName : "your spouse"} contributes`,
       bottomLabel: "per year",
       max: 25000,
       step: 1000,
       reducer: "main_reducer",
      },
  })
}
   
if(user_reducer["tax free savings account"]) {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'll use this info to see how much income in retirement your investments will provide",
    component: "TwoSliders",
    id:  "TFSAinitialValue",
    reducer: "main_reducer",
    title: `We'll need some details about your TFSA`,
    props1: {
       id:  "TFSAinitialValue",
       topLabel: "I currently have",
       bottomLabel: "in my TFSA",
       max: 100000,
       step: 1000,
       reducer: "main_reducer",
   },
    props2: {
       id: "TFSAcontribution",
       topLabel: "I plan to contribute",
       bottomLabel: "per year",
       max: 6000,
       step: 1000,
       reducer: "main_reducer",
      },
  })
}
   
if(user_reducer["non-registered"]) {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
    component: "TwoSliders",
    id: "NREGinitialValue",
    reducer: "main_reducer",
    title: `We'll need some details about your Non-registered Investments`,
    props1: {
      id: "NREGinitialValue",
       topLabel: "I currently have about",
       bottomLabel:  "in Non-Reg Savings",
       max: 500000,
       step: 1000,
       reducer: "main_reducer",
   },
    props2: {
      id: "NREGcontribution",
       topLabel: "I contribute about",
       bottomLabel:  "per year",
       max: 60000,
       step: 1000,
       reducer: "main_reducer",
      },
  })
}

if(user_reducer["registered retirement savings"]) {
  const priorQuestionIndex = array.findIndex(d => d.title ===  "Do you have investments?") + 1
   array.splice(priorQuestionIndex,0, {
    ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
    component: "TwoSliders",
    id: "RRSPinitialValue",
    reducer: "main_reducer",
    title: `We'll need some details about your Registered Retirement Savings Plan`,
    props1: {
      id: "RRSPinitialValue",
       topLabel: "I currently have about",
       bottomLabel: "in my RRSP",
       max: 500000,
       step: 1000,
       reducer: "main_reducer",
   },
    props2: {
       id: "RRSPcontribution",
       topLabel: "I contribute about",
       bottomLabel:  "per year",
       max: 60000,
       step: 1000,
       reducer: "main_reducer",
      },
  })
}
   
   if (user_reducer.changeAssumptions === "yes") {
  
     const priorQuestionIndex = array.findIndex(d => d.title === "Would you like to play with the plan's assumptions?") + 1

     array.splice(priorQuestionIndex, 0, {
       ask: "We want to estimate your government pension income, to do so we need a rough estimate of your earnings.",
       bottomLabel: "life span",
       component: "Slider",
       id: "lifeSpan",
       max: 120,
       step: 1,
       topLabel: "I'll plan to live till",
       reducer: "user_reducer",
       title: "Its morbid, we know... ",
     })
     array.splice(priorQuestionIndex, 0, {
       ask: "We subtract these values from your rates of return so all projections are after fees and in todays dollars",
       component: "TwoSliders",
       id: "MER",
       reducer: "user_reducer",
       title: "Would you like to change these as well?  ",
       props1: {
         bottomLabel: "in my RRSP",
         id: "MER",
         max: 3.5,
         percent: true,
         reducer: "user_reducer",
         step: 0.1,
         topLabel: "management fee",
       },
       props2: {
        bottomLabel: "in my RRSP",
        id: "inflationRate",
        max: 4,
        percent: true,
        reducer: "user_reducer",
        step: 0.1,
        topLabel: "inflation rte",
       },
     })

     array.splice(priorQuestionIndex, 0, {
      ask: "We'll run a rough calculation to show you how much income you'll be able to draw.",
       component: "TwoSliders",
       id: "MER",
       reducer: "user_reducer",
       title: "What rates of return would you like to use?",
       props1: {
         bottomLabel: "higher risk",
         id: "rate1",
         max: 10,
         percent: true,
         reducer: "user_reducer",
         step: .1,
         topLabel: "Before retirement return"
       },
       props2: {
        bottomLabel: "lower risk",
        id: "rate2",
        max: 10,
        percent: true,
        reducer: "user_reducer",
        step: 0.1,
        topLabel: "after retirement return",
       },
     })
  

   }
    return array

 }

