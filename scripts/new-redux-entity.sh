#!/bin/bash

GREEN=`tput setaf 2`
RED=`tput setaf 1`
DEFAULT_COLOR=`tput sgr0`
echo "${GREEN}Enter ${RED}NEW REDUX-ENTITY ${GREEN}name:${DEFAULT_COLOR}"
read NAME
LOWERCASE_NAME=${NAME,,}
UPPERCASE_NAME=${NAME^^}

# !----------------- MODULE DIRECTORY CREATE: ----------------------!

cd ../src/redux/modules && mkdir $LOWERCASE_NAME && cd $LOWERCASE_NAME

# !----------------- DEFAULT REDUCER GENERATE: ---------------------!

touch Reducer.ts 
cat > Reducer.ts <<- EOM
import { handleActions } from 'redux-actions';
import { IState$NAME, T$NAME } from './TReducer';
import { ActionTypes_$NAME } from './TActions';

const { StoreActions } = ActionTypes_$NAME;

const initialState: IState$NAME = {
  isLoading: false,
  data: null,
};

const Reducer$NAME = handleActions<IState$NAME, T$NAME>({
  [StoreActions.IS_LOADER_SHOW]: (state) => ({...state, isLoading: true}),
  [StoreActions.IS_LOADER_HIDE]: (state) => ({...state, isLoading: false}),
  
  [StoreActions.SAVE_$UPPERCASE_NAME]: (state, action) => ({...state, data: action.payload}),
}, initialState);

export default Reducer$NAME;
EOM

# !----------------- DEFAULT ACTIONS GENERATE: ---------------------!

touch Actions.ts 
cat > Actions.ts <<- EOM
import { createAction } from 'redux-actions';
import { ActionTypes_$NAME } from './TActions';
import { T$NAME } from './TReducer';
const { SagaEvents, StoreActions } = ActionTypes_$NAME;

export const Actions_$NAME = {
  saga: { },
  
  store: {
    showLoader: createAction(StoreActions.IS_LOADER_SHOW),
    hideLoader: createAction(StoreActions.IS_LOADER_HIDE),
    save$NAME: createAction<T$NAME>(StoreActions.SAVE_$UPPERCASE_NAME),
  }
};
EOM

# !----------------- DEFAULT REDUCER TYPES GENERATE: ---------------!

touch TReducer.ts 
cat > TReducer.ts <<- EOM
export interface IState$NAME {
  isLoading: boolean,
  data: T$NAME | null,
};

export type T$NAME = any;
EOM

# !----------------- DEFAULT ACTION TYPES GENERATE: -----------------!

touch TActions.ts 
cat > TActions.ts <<- EOM
enum StoreActions {
  IS_LOADER_SHOW = 'IS_LOADER_SHOW',
  IS_LOADER_HIDE = 'IS_LOADER_HIDE',
  SAVE_$UPPERCASE_NAME = 'SAVE_$UPPERCASE_NAME',
};

enum SagaEvents { };

export const ActionTypes_$NAME = {
  SagaEvents,
  StoreActions,
};
EOM

# !----------------- REFRESH EXPORTS: -------------------------------!

NEW_MODULE_EXPORT="export { default as $LOWERCASE_NAME } from './$LOWERCASE_NAME/Reducer'"

cd ..
echo $NEW_MODULE_EXPORT >> exports.ts

# !----------------- PROJECT FORMAT: -------------------------------!
yarn format

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"
