export function updatePlanRequest(data) {
  return {
    type: "@plan/UPDATE_PLAN_REQUEST",
    payload: { data }
  };
}

export function createPlanRequest(data) {
  return {
    type: "@plan/CREATE_PLAN_REQUEST",
    payload: { data }
  };
}

export function planSuccess(plano) {
  return {
    type: "@plan/PLAN_SUCCESS",
    payload: { plano }
  };
}

export function planFailure() {
  return {
    type: "@plan/PLAN_FAILURE"
  };
}
