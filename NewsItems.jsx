import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assets/images/no.png"
export default function NewsItems(props){
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                <div className="card">
                    <img src={props.pic ? props.pic : pic} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title heading">{props.title ? props.title.slice(0, 80) + "..." : ""}</h5>
                        <p className="card-text date">Date: {props.date}</p>
                        <p className="card-text srcs">{props.source}</p>
                        <p className="card-text desc">{props.description}</p>
                        <Link to={props.url} className="btn btn-primary w-100">Read Full Articles</Link>
                    </div>
                </div>
            </div>
        )
}
