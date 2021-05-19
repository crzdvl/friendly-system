import * as types from './types';

const initialState = () => ({
    photos: [],
});

const UsersListReducer = (state = initialState(), action) => {
    switch (action.type) {
        case types.GET_PHOTOS:
            return { 
                ...state, 
                photos: action.payload.photos
            };
    }
    return state;
};

export default UsersListReducer;
