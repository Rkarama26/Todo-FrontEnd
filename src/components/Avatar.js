import React from 'react'
import PropTypes from 'prop-types'

export default function Firstcomp({ person, size }) {
    return (
        <>
            <img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"
                alt={person.name}
                width={size}
                height={size}
            />
            <h5>{person.moto}</h5>
            <h2>Profile photo</h2>
        </>
    );
}

Firstcomp.prototype={
    person: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired
}
Firstcomp.defaultProps={
    size: "10"
};