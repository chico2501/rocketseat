import produce from "immer";

const INITIAL_STATE = {
  plan: null
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@plan/UPDATE_PLAN_REQUEST": {
        draft.plan = action.payload.plan;
        break;
      }

      case "@plan/CREATE_PLAN_REQUEST": {
        draft.plan = action.payload.plan;
        break;
      }

      case "@plan/PLAN_SUCCESS": {
        draft.plan = action.payload.plan;
        break;
      }

      case "@plan/PLAN_FAILURE": {
        draft.plan = null;
        break;
      }
      default:
    }
  });
}
