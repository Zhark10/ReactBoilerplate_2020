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

touch Reducer_$NAME.ts 
cat > Reducer_$NAME.ts <<- EOM
import { handleActions } from 'redux-actions';
import { I$NAME } from '../../types';
import { $NAMEActions } from '../actions';

const initialState = null;

export const $NAMEReducer = handleActions<I$NAME | null, I$NAME>({
    [$NAMEActions.Type.SAVE_$UPPERCASE_NAME]: (state, action) => action.payload,
}, initialState);
EOM

# !----------------- DEFAULT ACTIONS GENERATE: ---------------------!

touch Actions_$NAME.ts 
cat > Actions_$NAME.ts <<- EOM
import { createAction } from 'redux-actions';
import { I$NAME } from '../../types';

enum Type {
    SAVE_$UPPERCASE_NAME = 'SAVE_$UPPERCASE_NAME'
}

const save$Name = createAction<I$Name>(Type.SAVE_$UPPERCASE_NAME);

export const UserActions = {
    Type,

    save$Name,
}

export type $NameActions = Omit<typeof $NameActions, 'Type'>;
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

NEW_MODULE_EXPORT="export { default as $LOWERCASE_NAME } from './$LOWERCASE_NAME/Reducer'"

cd ..
echo $NEW_MODULE_EXPORT >> index.ts

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"
