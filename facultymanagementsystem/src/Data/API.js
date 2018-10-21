import React from 'react';

export default function getPHPTest(){
    fetch('http://mortondevsite.com/eval/api/v1/users')
    .then(res => res.json())
    .then(body => console.log(body))
    .catch(err => console.log(err));
};
