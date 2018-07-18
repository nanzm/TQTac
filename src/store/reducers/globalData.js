import { handleActions } from 'redux-actions';
import {
    SET_AUTH,
    SET_TOKEN,
    SET_USERINFO,
    SET_LOADING,
    SET_IPX,
    SET_SHAREID,
    SET_SHAREGOODS
} from '../types/globalData';

export default handleActions({
    [SET_AUTH](state, action) {
        return {
            ...state, auth: action.payload
        };
    },
    [SET_TOKEN](state, action) {
        return {
            ...state, token: action.payload
        };
    },
    [SET_USERINFO](state, action) {
        return {
            ...state, userInfo: action.payload
        };
    },
    [SET_LOADING](state, action) {
        return {
            ...state, loading: action.payload
        };
    },
    [SET_IPX](state, action) {
        return {
            ...state, isIpx: action.payload
        };
    },
    [SET_SHAREID](state, action) {
        return {
            ...state, shareId: action.payload
        };
    },
    [SET_SHAREGOODS](state, action) {
        return {
            ...state, shareGoods: action.payload
        };
    }
}, {
    auth: false,
    token: '',
    userInfo: {},
    loading: false,
    isIpx: false,
});
