import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Img from '../assets/algolia.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate()
 const [searchTerm, setSearchTerm] = useState('')
 const [currentPage, setCurrentPage] = useState(1)
 const [username, setUsername] = useState('');

 const list = [
    {id: 1, title: 'Stephen Hawking has died', url : 'https://www.nationalgeographic.com/science/2012/11/stephen-hawking-dead/', user: 'hawking', point: '5248', time: '3 years ago', comments: '433'},
    {id: 2, title: 'A Message to Our Customers', url : 'http://www.apple.com/customer-letter/', user: 'apple', point: '5721', time: '2 years ago', comments: '833'},
    {id: 3, title: 'Backdoor in upstream xz/liblzma leading to SSH server compromise', url : 'https://www.openwall.com/lists/oss-security/2024/03/29/4', user: 'openwall', point: '821', time: '9 years ago', comments: '1032'},
    {id: 5, title: 'CrowdStrike Update: Windows Bluescreen and Boot Loops', url : 'https://old.reddit.com/r/crowdstrike/comments/1e6vmkf/bsod_error_in_latest_crowdstrike_update/', user: 'crowdstrike', point: '33', time: '11 years ago', comments: '111'},
    {id: 6, title: 'Steve Jobs has passed away.', url : 'http://www.apple.com/stevejobs/', user: 'apple', point: '845', time: '1 years ago', comments: '30'},
    {id: 7, title: 'YouTube-dl has received a DMCA takedown from RIAA', url : 'https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md', user: 'github', point: '90', time: '13 years ago', comments: '20'},
    {id: 8, title: 'Reflecting on one very, very strange year at Uber', url : 'https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber', user: 'susanjfowler', point: '60', time: '21 years ago', comments: '9999'},
    {id: 9, title: 'The End of the Internet', url : 'https://www.wired.com/story/tech-the-end-of-the-internet/', user: 'wired', point: '4', time: '11 years ago', comments: '33'},
    {id: 10, title: 'The End of the Internet', url : 'https://www.wired.com/story/tech-the-end-of-the-internet/', user: 'wired', point: '4', time: '11 years ago', comments: '33'},
 ]
   const filteredList = searchTerm ? list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.point.includes(searchTerm)|| item.comments.includes(searchTerm)) : list


//    pagintation

const itemsPerPage = 8

const totalPages = Math.ceil(filteredList.length / itemsPerPage)
const currentItems = filteredList.slice((currentPage - 1 ) * itemsPerPage, currentPage * itemsPerPage)
const handleNextPage = () => {
    if(currentPage < totalPages) setCurrentPage(currentPage) 
}
const handlePreviousPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage -1)
}

//  get the data from the local storage
useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('SignUpForm'));
    if (storedUser && storedUser.username) {
        setUsername(storedUser.username);
    }
}, []);

    return (
        <div className='dashboard'>
            <div className='nav-border'>
                <div className='logo'>H</div>
                <div className='p-3'>{username}</div>
                <div className='search-flex'>
                    <div className='search-flex-2'>
                        <CiSearch className='icon' />
                        <input type='text' className='input-width-2' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search stories by title, url or author' />
                    </div>
                    <div className='search-flex-2'>
                        <p className='p-3'>Search</p>
                        <img className='img-size' src={Img} />
                    </div>
                </div>
            </div>

            <div className='filteration-flex'>
                <div className='search-flex-2'>
                    <div className='search-flex-2'>
                        <p>Search</p>
                        <select className='select-width'>
                            <option>All</option>
                            <option>Stories</option>
                            <option>Comments</option>
                            <option>ASK HN</option>
                            <option>Show HN</option>
                            <option>Launch HN</option>
                            <option>Jobs</option>
                            <option>Polls</option>
                        </select>
                    </div>
                    <div className='search-flex-2'>
                        <p>By</p>
                        <select className='select-width'>
                            <option>Popularity</option>
                            <option>Date</option>
                        </select>
                    </div>
                    <div className='search-flex-2'>
                        <p>For time</p>
                        <select className='select-width'>
                            <option>All Time</option>
                            <option>Launch 24h</option>
                            <option>Past Week</option>
                            <option>Past Month</option>
                            <option>Past Year</option>
                            <option>Costom Range</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>{list.length} Results (0.001 seconds)</p>
                </div>
            </div>
            {/*  list of the item appear */}
            <div className='list-container'>
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                    <div >
                        <div className='list-flex mt' onClick={() => navigate('/detailpage')}>
                            <p className='font-1'>{item.title} </p>
                            <a className='span-color'>({item.url})</a>
                        </div>
                        <div className='list-flex-2 '>
                            <div className='list-flex  '>
                                <p className='p-4'>{item.point}</p>
                                <p className='p-4'>Point</p>
                            </div>
                            <div className='list-flex '>
                                <p className='p-4'>{item.user}</p>
                            </div>
                            <div className='list-flex '>
                                <p className='p-4'>{item.time}</p>
                            </div>
                            <div className='list-flex '>
                                <p className='p-4'>{item.comments}</p>
                                <p className='p-4'>Comments</p>
                            </div>
                        </div>
                    </div>
                ))
                ):(
                    <p>No results found</p>
            )}
             
            </div>
            <div className='button-grp'>
                <button className='btn-p' onClick={handlePreviousPage} disabled={currentPage === 1}> <MdOutlineKeyboardDoubleArrowLeft className='border-icon' /></button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        className={`btn-p ${currentPage === index + 1 ? 'active' : ''}`} 
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button className='btn-p' onClick={handleNextPage} disabled={currentPage === totalPages}><MdOutlineKeyboardDoubleArrowRight /></button>
            </div>
        </div>
    )
}

export default Dashboard