#!/bin/bash

GREEN=`tput setaf 2`
RED=`tput setaf 1`
DEFAULT_COLOR=`tput sgr0`
echo "${GREEN}Enter ${RED}NEW MODAL ${GREEN}name:${DEFAULT_COLOR}"
read NAME
LOWERCASE_NAME=${NAME,,}

# !----------------- COMPONENT DIRECTORY CREATE: -------------------!

cd ../src/ui/modals && mkdir $NAME && cd $NAME

# !----------------- CONTENT GENERATE: -----------------------------!

touch $NAME.tsx 
cat > $NAME.tsx <<- EOM
import React, { FC }  from 'react';
import './$NAME.scss';
import { use$NAME } from './$NAME-ViewModel';

export const $NAME: FC  = () => {
  const viewModel = use$NAME()
  return (
    <div className="$LOWERCASE_NAME">
      is $NAME modal
    </div>
  )
}
EOM

touch $NAME.scss 
cat > $NAME.scss <<- EOM
.$LOWERCASE_NAME {

}
EOM

touch $NAME-ViewModel.ts
cat > $NAME-ViewModel.ts <<- EOM
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TState } from '../../../redux/config/root-types';

export const use$NAME = () => {
  const {  } = useSelector((state: TState) => state);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch])

  return { goBack }
}
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

SEARCH_EXPORT_OBJECT_VAL='export'
NEW_IMPORT="import { $NAME } from '.\/$NAME\/$NAME';"

cd ../

sed -i "$!N;s/$SEARCH_EXPORT_OBJECT_VAL.*/& $NAME,/" exports.ts
sed -i -e "1 s/^/$NEW_IMPORT\n/;" exports.ts 

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"