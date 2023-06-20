import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default function News(props) {
    let [articles, setarticles] = useState([])
    let [page, setpage] = useState(1)
    let [totalResults, settotalResults] = useState(0)
    async function getData() {
        try {
            setpage(1)
            var rawdata = ""
            if (props.search === "None") {
                rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${props.page}&sortBy=publishedAt&apiKey=1c39c925df0f49388ffc00c093534917`)
            }
            else {
                rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${props.page}&sortBy=publishedAt&apiKey=1c39c925df0f49388ffc00c093534917`)
            }
            let result = await rawdata.json()
            setarticles(result.articles)
            settotalResults(result.totalResults)
        }
        catch (error) {
            console.log(error);
            alert("something went wrong")
        }
    }
    const fetchMoreData = async () => {
        try {
            setpage(page + 1)
            let rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${props.page}&sortBy=publishedAt&apiKey=1c39c925df0f49388ffc00c093534917`)
            let result = await rawdata.json()
            setarticles(articles.concat(result.articles))
        }
        catch (error) {
            console.log(error);
            alert("something went wrong")
        }
    }
    useEffect(() => {
        getData()
    }, [props.q, props.language, props.pageSize, props.search])
    return (
        <>
            <h5 className='background text-light text-center p-3 mt-2'>{props.q} News Section</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>
                <div className='container-fluid'>
                    <div className='row'>
                        {articles.map((item, index) => {
                            return <NewsItems
                                key={index}
                                title={item.title}
                                pic={item.urlToImage}
                                description={item.description}
                                source={item.source.name}
                                date={item.publishedAt}
                                url={item.url}
                            />
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
