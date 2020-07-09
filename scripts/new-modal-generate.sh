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
import { use$NAME } from './$NAME-ViewModel';

export const $NAME: FC = () => {
  const viewModel = use$NAME()
  const {closeModal} = viewModel;
  return (
    <div style={{
      background-color: $main-color;
      width: 375px;
      height: 375px;
      border-radius: 10px;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
      padding: 8px;
    }}>
      is $NAME modal
      <button onClick={closeModal}>Close</button>
    </div>
  )
}
EOM

touch $NAME-ViewModel.ts
cat > $NAME-ViewModel.ts <<- EOM
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from '../../../redux/config/root-types';

export const use$NAME = () => {
  const {  } = useSelector((state: TState) => state);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch])

  const closeModal = () => {
    dispatch(Actions_Modals.store.hideModal())
  }

  return { closeModal }
}
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

SEARCH_EXPORT_OBJECT_VAL='export'
NEW_IMPORT="import { $NAME } from '.\/$NAME\/$NAME';"

cd ../

sed -i "$!N;s/$SEARCH_EXPORT_OBJECT_VAL.*/& $NAME,/" exports.ts
sed -i -e "1 s/^/$NEW_IMPORT\n/;" exports.ts 

# !----------------- PROJECT FORMAT: -------------------------------!
yarn format

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"