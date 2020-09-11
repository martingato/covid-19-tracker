import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

export const sortData = (data) => {
    const sortedData = [...data];

    // sortedData.sort((a, b) => {
    //     if (a.cases > b.cases) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // })
    // return sortedData;
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle>
            
        </Circle>
    ))
):

