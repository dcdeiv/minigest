const initialState = {
  getting: true,
  getError: false,
  putting: false,
  putError: false,
  results: [],
};

export default function lista(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
}
