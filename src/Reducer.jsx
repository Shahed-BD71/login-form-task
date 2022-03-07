export default function Reducer(state, action) {
  switch (action.type) {
    case "HANDLE_INPUT_FIELD":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "HANDLE_CHECKBOX":
      return {
        ...state,
        checked: !state.checked,
      };
    case "CLEAR_FORM":
      return {
        email: "",
        password: "",
        repeatPass: "",
      };
    case "HANDLE_SUBMIT":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
