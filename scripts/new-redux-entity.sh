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
import { I$NAME } from '../../types';
import { Actions$NAME } from '../actions';

const initialState = null;

export const Reducer$NAME = handleActions<I$NAME | null, I$NAME>({
    [Actions$NAME.Type.SAVE_$UPPERCASE_NAME]: (state, action) => action.payload,
}, initialState);
EOM

# !----------------- DEFAULT ACTIONS GENERATE: ---------------------!

touch Actions.ts 
cat > Actions.ts <<- EOM
import { createAction } from 'redux-actions';
import { I$NAME } from '../../types';

enum Type {
    SAVE_$UPPERCASE_NAME = 'SAVE_$UPPERCASE_NAME'
}

const save$NAME = createAction<I$NAME>(Type.SAVE_$UPPERCASE_NAME);

export const Actions$NAME = {
    Type,

    save$NAME,
}

export type Actions$NAME = Omit<typeof Actions$NAME, 'Type'>;
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

NEW_MODULE_EXPORT="export { default as $LOWERCASE_NAME } from './$LOWERCASE_NAME/Reducer'"

cd ..
echo $NEW_MODULE_EXPORT >> index.ts

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"
