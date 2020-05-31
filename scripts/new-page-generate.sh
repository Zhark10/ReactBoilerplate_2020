#!/bin/bash

echo "Enter PAGE name:"
read name

lowercase_name=${name,,}

cd ../src/ui/pages && mkdir $name && cd $name

touch $name.tsx 
cat > $name.tsx <<- EOM
import React from 'react';
import './$name.scss';

export default function $name() {
    return (
        <div className='$lowercase_name'>
            is $name page
        </div>
    )
}
EOM

touch $name.scss 
cat > $name.scss <<- EOM
.$lowercase_name {

}
EOM