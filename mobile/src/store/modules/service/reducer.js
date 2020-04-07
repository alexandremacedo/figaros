import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@provider/SET_PROVIDER_SUCCESS': {
      return produce(state, draft => {
        const { provider } = action;
        draft.provider = provider;
      });
    }
    default:
      return state;
  }
}
