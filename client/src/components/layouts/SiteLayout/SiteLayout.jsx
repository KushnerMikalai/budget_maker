import React from 'react'
// import { selectLogin } from '../../../store/slices/userSlice'
// import { useSelector } from 'react-redux'

export default function SiteLayout(props) {
    return (
        <div className={'site'}>
            {props.children}
        </div>
    )
}
