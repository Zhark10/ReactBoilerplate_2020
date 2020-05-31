#!/bin/bash

green=`tput setaf 2`
red=`tput setaf 1`
reset=`tput sgr0`
echo "${green}Enter ${red}SHARED COMPONENT ${green}name:${reset}"
read name

lowercase_name=${name,,}

cd ../src/ui/shared && mkdir $name && cd $name

touch $name.tsx 
cat > $name.tsx <<- EOM
import React, { FC } from 'react';

import './$name.scss'

export const $name: FC = () => {
    return (
        <div className='$lowercase_name'>
            some content...
        </div>
    )
}
EOM

touch $name.scss 
cat > $name.scss <<- EOM
.$lowercase_name {

}
EOM

SEARCH_EXPORT_OBJECT_VAL='export'
NEW_IMPORT="import { $name } from '.\/$name\/$name';"

cd ../

sed -i "$!N;s/$SEARCH_EXPORT_OBJECT_VAL.*/& $name,/" exports.ts 
sed -i -e "1 s/^/$NEW_IMPORT\n/;" exports.ts 