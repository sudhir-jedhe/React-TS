// Prereq:

// Design using React as the base framework.
// Data is passed into the Checkbox widget.
// Design:

// Use model state (think Context) to represent the visual state of the widget.
// Actions are used to pass user intercation to the model state.
// Divvy up the Checkbox into UI and Model components, for example -
// Model

// CheckboxProvider is internal to the widget
// UI

// CheckboxUI is exported to the consumer
// Interfaces/Pseudo code:

Model
CheckboxContext.tsx
type OptionId = number

type CheckboxState = {
  options: Array<OptionId> // available options
  checkedOptions: Array<OptionId>
  isAllOptionsSelected: boolean
}

type CheckboxAction = {
  type: 'LOAD_OPTIONS',
  payload: Array<OptionId>
} | {
  type: 'OPTION_TOGGLED',
  option: OptionId
} | {
  type: 'ALL_OPTIONS_TOGGLED',
  option: OptionId
}

const reducer = (state: CheckboxState, action: CheckboxAction): CheckboxState => {
  switch(action.type) {
    case 'LOAD_OPTIONS': { ... }
    case 'OPTION_TOGGLED: {
      const optionId = action.payload
      const optionIdIndex = state.checkedOptions.indeOf(optionId)
      let partial: Partial<CheckboxState> = { }
      if (optionIdIndex === -1) {
        partial = {
          checkedOptions: [...state.checkedOptions, optionId],
          isAllOptionsSelected: [...state.checkedOptions, optionId].length === state.options,
        }
      } else {
        partial = {
          checkedOptions: [...state.checkedOptions.slice(0, optionIdIndex), ...state.checkedOptions.slice(optionIdIndex+1)],
          isAllOptionsSelected: false,
        }
      }
      return {
        ...state,
        ...partial
      }
    }
    case 'ALL_OPTIONS_TOGGLED': {
      ...
      // similar logic
    }
    default: { ... }
  }
}

CheckboxContext = React.createContext({ ... })

export const CheckboxProvider = ({ children, options }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CheckboxContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckboxContext.Provider>
  )
}
UI
CheckboxUI is exported to the consumer
type CheckboxUIProps = {
  options: Array<OptionId>
}

 export const CheckboxUI = ({ options }: CheckboxUIProps) => {
   return (
     <CheckboxProvider value={{ options }}>
       ...
       // UI components
     </CheckboxProvider>
   )
 }