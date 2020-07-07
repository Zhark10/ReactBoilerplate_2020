#!/bin/bash

GREEN=`tput setaf 2`
RED=`tput setaf 1`
DEFAULT_COLOR=`tput sgr0`
echo "${GREEN}Enter ${RED}SHARED COMPONENT ${GREEN}name:${DEFAULT_COLOR}"
read NAME
LOWERCASE_NAME=${NAME,,}

# !----------------- COMPONENT DIRECTORY CREATE: -------------------!

cd ../src/ui/shared && mkdir $NAME && cd $NAME

# !----------------- CONTENT GENERATE: -----------------------------!

touch $NAME.tsx 
cat > $NAME.tsx <<- EOM
import React, { FC } from 'react';

export const $NAME: FC = () => {
  return (
    <div className='$LOWERCASE_NAME'>
      some content...
    </div>
  )
}
EOM

# !----------------- REFRESH EXPORTS: ------------------------------!

SEARCH_EXPORT_OBJECT_VAL='export'
NEW_IMPORT="import { $NAME } from '.\/$NAME\/$NAME';"

cd ../

sed -i "$!N;s/$SEARCH_EXPORT_OBJECT_VAL.*/& $NAME,/" exports.ts
sed -i -e "1 s/^/$NEW_IMPORT\n/;" exports.ts 

echo "${GREEN}Yeah! Successfully created, dude! :)${DEFAULT_COLOR}"