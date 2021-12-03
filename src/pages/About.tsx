import { Divider } from 'antd'
import React, { ReactElement } from 'react'


function About(): ReactElement {
    return (
        <>
            <Divider orientation="left">Source</Divider>
            <h3>Docs homepage: <a href="https://alexwohlbruck.github.io/cat-facts/" target="_blank" rel="noopener noreferrer">Fact cats API</a></h3>
            <Divider orientation="left">Acknowledgments</Divider>
            <h3><a href="https://alexwohlbruck.github.io/cat-facts/" target="_blank" rel="noopener noreferrer">GITHUB</a></h3>
            <p>Thanks to <a href="https://github.com/alexwohlbruck" target="_blank" rel="noopener noreferrer">@alexwohlbruck</a> for this awesome API</p>
        </>
    )
}

export default About
