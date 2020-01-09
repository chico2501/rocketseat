import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { planSuccess, planFailure } from "./actions";

export function* updatePlanRequest({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const plano = {
      title,
      duration,
      price
    };

    const response = yield call(api.post, "plans", plano);

    toast.success("Plano atualizado com sucesso!");

    yield put(planSuccess(response.data));
  } catch (err) {
    toast.success("Erro ao atualizar plano!");

    yield put(planFailure());
  }
}

export default all([
  takeLatest("@plan/UPDATE_PLAN_REQUEST", updatePlanRequest)
]);
