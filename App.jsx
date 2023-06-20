import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
export default function App() {
    let [language, setlanguage] = useState("hi")
    let [pageSize, setpageSize] = useState(12)
    let [search, setsearch] = useState("None")

    const changeLanguage = (data) => {
        setlanguage(data)
    }
    const changepageSize = (data) => {
        setpageSize(data)
    }
    const changesearch = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changesearch={changesearch} changepageSize={changepageSize} changeLanguage={changeLanguage} />
                <Routes>
                    <Route path='/' element={<News search={search} pageSize={pageSize} language={language} q="All" />}></Route>
                    <Route path='/politics' element={<News search={search} pageSize={pageSize} language={language} q="Politics" />}></Route>
                    <Route path='/crime' element={<News search={search} pageSize={pageSize} language={language} q="Crime" />}></Route>
                    <Route path='/cricket' element={<News search={search} pageSize={pageSize} language={language} q="Cricket" />}></Route>
                    <Route path='/entertainment' element={<News search={search} pageSize={pageSize} language={language} q="Entertainment" />}></Route>
                    <Route path='/business' element={<News search={search} pageSize={pageSize} language={language} q="Business" />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
