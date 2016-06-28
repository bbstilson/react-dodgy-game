import React from 'react';

export const puke = (obj) => <pre>{JSON.stringify(obj, null, 2)}</pre>;
export const pluck = (arr) => arr[Math.floor(Math.random() * arr.length)];