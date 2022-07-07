import React from 'react'
import Hookstate from '../hooks/Hookstate'
import Hookeffect from '../hooks/Hookeffect'
import Hookcontext from '../hooks/Hookcontext'

export default function Home() {
    return (
        <div>
            <div>
                <h2 style={{margin:'0'}}>useState hook</h2>
                <span style={{color:'gray',marginBottom:'30px',display:'block'}}>Basic counter</span><br />
                <Hookstate />
            </div>
            <hr />
            <div>
                <h2 style={{margin:'0'}}>useEffect(&useState) hook</h2>
                <span style={{color:'gray',marginBottom:'30px',display:'block'}}>Fetch data from - "reqres"</span><br />
                <Hookeffect/>
            </div>
            <hr />
            <div style={{marginBottom:'20px'}}>
                <h2 style={{margin:'0'}}>useContext hook</h2>
                <span style={{color:'gray',marginBottom:'30px',display:'block'}}>Give word with context</span><br />
                <Hookcontext/>
            </div>
        </div>
    )
}
