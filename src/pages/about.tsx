import React from 'react'
import { Main, Part1, Part2 } from 'components/about'
import Layout from 'components/layout/Layout'

const About = () => (
    <Layout boxed={false}>
        <Main />
        <Part1 />
        <Part2 />
    </Layout>
)

export default About
