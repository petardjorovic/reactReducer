export const INITIAL_VALUES = {
  isLoading: false,
  error: false,
  errorMsg: "",
  products: [],
};

export const productsReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "FETCH_STARTS":
      return {
        isLoading: true,
        error: false,
        errorMsg: "",
        products: [],
      };

    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        error: false,
        errorMsg: "",
        products: action.data,
      };

    case "FETCH_ERROR":
      return {
        isLoading: false,
        error: true,
        errorMsg: action.errorMsg,
        products: [],
      };

    default: {
      return state;
    }
  }

  //   if (action.type === "FETCH_STARTS") {
  //     return {
  //       isLoading: true,
  //       error: false,
  //       errorMsg: "",
  //       products: [],
  //     };
  //   } else if (action.type === "FETCH_SUCCESS") {
  //     return {
  //       isLoading: false,
  //       error: false,
  //       errorMsg: "",
  //       products: action.data,
  //     };
  //   } else if (action.type === "FETCH_ERROR") {
  //     return {
  //       isLoading: false,
  //       error: true,
  //       errorMsg: action.msg,
  //       products: [],
  //     };
  //   }
};
