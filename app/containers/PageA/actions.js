
import { SHOW_TOAST, INIT_APP } from './constants';

export function initApp() {
  return {
    type: INIT_APP,
  }
}

export function showToast() {
  return {
    type: SHOW_TOAST,
  }
}