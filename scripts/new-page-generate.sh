#!/bin/bash

GREEN=`tput setaf 2`
RED=`tput setaf 1`
DEFAULT_COLOR=`tput sgr0`
echo "${GREEN}Enter ${RED}NEW PAGE ${GREEN}name:${DEFAULT_COLOR}"
read NAME
LOWERCASE_NAME=${NAME,,}

# !----------------- COMPONENT DIRECTORY CREATE: -------------------!

cd ../src/ui/pages && mkdir $NAME && cd $NAME

# !----------------- CONTENT GENERATE: -----------------------------!

touch $NAME.tsx 
cat > $NAME.tsx <<- EOM
import React from 'react';
import './$NAME.scss';
import { use$NAME } from './$NAME-ViewModel';

const $NAME = () => {
  const viewModel = use$NAME()
  return (
    <div className="$LOWERCASE_NAME">
      is $NAME page
    </div>
  )
}

export default $NAME;
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

export const use$NAME = () => {
  const {  } = useSelector(state => state);
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])

  return { goBack }
}
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

SEARCH_EXPORT_OBJECT_VAL='export'
NEW_IMPORT="import { $NAME } from '.\/$NAME\/$NAME';"

cd ../

sed -i "$!N;s/$SEARCH_EXPORT_OBJECT_VAL.*/& $NAME,/" exports.ts 
sed -i -e "1 s/^/$NEW_IMPORT\n/;" exports.ts 

echo "${GREEN}Successfully created, dude! :)${DEFAULT_COLOR}"