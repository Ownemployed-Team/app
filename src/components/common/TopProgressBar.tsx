// NOTE: Taken from https://dev.to/vvo/show-a-top-progress-bar-on-fetch-and-router-events-in-next-js-4df3

import { renderToString } from 'react-dom'
import Router from 'next/router'
import NProgress from 'nprogress'
import { css } from 'emotion'

let timer
let state
let activeRequests = 0
//const delay = 250
const delay = 5

const progresBarTemplate = css`
    height: 10px;
    color: red;
`

function ProgressBarTemplate() {
    return <div className={progresBarTemplate} />
}

NProgress.configure({
    //template: renderToString(ProgressBarTemplate),
})

function load() {
    if (state === 'loading') {
        return
    }

    state = 'loading'

    timer = setTimeout(function() {
        NProgress.start()
    }, delay) // only show progress bar if it takes longer than the delay
}

function stop() {
    if (activeRequests > 0) {
        return
    }

    state = 'stop'

    clearTimeout(timer)
    NProgress.done()
}

Router.events.on('routeChangeStart', load)
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

const originalFetch = window.fetch
window.fetch = async function(...args) {
    if (activeRequests === 0) {
        load()
    }

    activeRequests++

    try {
        const response = await originalFetch(...args)
        return response
    } catch (error) {
        return Promise.reject(error)
    } finally {
        activeRequests -= 1
        if (activeRequests === 0) {
            stop()
        }
    }
}

export default function TopProgressBar() {
    return null
}
