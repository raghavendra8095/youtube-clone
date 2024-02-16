import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr></hr>
      <ChannelRow
        image="http://images1.fanpop.com/images/photos/1900000/Misa-death-note-1911851-1024-768.jpg"
        channel=" Programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome programms  here "
      />
      <hr></hr>
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?."
        timestamp="59 second ago"
        channel="Programmer"
        title="Full stack javascript"
        image="https://tse4.mm.bing.net/th?id=OIP.SxoRg5bVG6867p1N4IFflQAAAA&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="Build a fullstack app"
        image="https://tse4.mm.bing.net/th?id=OIP.nqgmmm90yEniGxck6ksZugHaEK&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="Javascript in 30 days"
        image="https://tse2.mm.bing.net/th?id=OIP.GTWqb8cha74ZvDBoomPJ8QHaEK&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="DJANGO+REACT"
        image="https://tse4.mm.bing.net/th?id=OIP.xDkMTLwq88xqHUFZ2x1nNgHaEK&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="Roadmap"
        image="https://tse3.mm.bing.net/th?id=OIP.B5ES8t5XXm45Yqss12CeCwHaEK&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="Javascript in 30 days"
        image="https://tse2.mm.bing.net/th?id=OIP.GTWqb8cha74ZvDBoomPJ8QHaEK&pid=Api&P=0&h=180"
      />
      <VideoRow
        views="1.4M"
        subs="654"
        description="Ready to dive deep into
         the world of Full Stack Development
         ?"
        timestamp="59 second ago"
        channel="Programmer"
        title="DJANGO+REACT"
        image="https://tse4.mm.bing.net/th?id=OIP.xDkMTLwq88xqHUFZ2x1nNgHaEK&pid=Api&P=0&h=180"
      />
    </div>
  );
}

export default SearchPage
