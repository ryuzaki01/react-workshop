
import fetch from 'isomorphic-fetch';
// ------------------------------------
// Constants
// ------------------------------------
export const NOTIFICATION_DISPATCH = 'NOTIFICATION_DISPATCH'
export const NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS'
export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export const APP_IS_LOADING = 'IS_LOADING'
export const APP_IS_NOT_LOADING = 'IS_NOT_LOADING'

export const LANG = 'LANG'
// ------------------------------------
// Actions
// ------------------------------------
export function notificationDispatch(props) {
  return {
    type: NOTIFICATION_DISPATCH,
    payload: props,
  }
}

export function notificationDismiss() {
  return {
    type: NOTIFICATION_DISMISS,
  }
}

export function updateConnectionStatus(isOnline) {
  return {
    type: isOnline ? CONNECTION_ONLINE : CONNECTION_OFFLINE,
    payload: isOnline,
  }
}

export function appIsLoading(isLoading) {
  return {
    type: isLoading ? APP_IS_LOADING : APP_IS_NOT_LOADING,
    payload: isLoading,
  }
}
export function updateLang(props) {
  return {
    type: LANG,
    payload: props,
  }
}

const ACTION_HANDLERS = {
  [NOTIFICATION_DISPATCH]: (state, action) => Object.assign({}, state, {
    notifications: state.notifications.concat(action.payload),
  }),
  [NOTIFICATION_DISMISS]: state => Object.assign({}, state, {
    notifications: [],
  }),
  [CONNECTION_ONLINE]: (state, action) => Object.assign({}, state, { isOnline: action.payload }),
  [CONNECTION_OFFLINE]: (state, action) => Object.assign({}, state, { isOnline: action.payload }),
  [USER_LOGGED_IN]: (state, action) => Object.assign({}, state, {
    user: Object.assign({}, state.user, { loggedIn: action.payload }),
  }),
  [USER_LOGGED_OUT]: (state, action) => Object.assign({}, state, {
    user: Object.assign({}, state.user, { loggedIn: action.payload }),
  }),
  [APP_IS_LOADING]: (state, action) => Object.assign({}, state, { loading: action.payload }),
  [APP_IS_NOT_LOADING]: (state, action) => Object.assign({}, state, { loading: action.payload }),
  [LANG]: (state, action) => Object.assign({}, state, { lang: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  isLoading: false,
  notifications: [],
  lang: '',
  user: {
    loggedIn: false,
    data: {
      id: '',
      name: '-',
      profilePicture: ''
    }
  }
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
