import React, { useEffect, useState } from 'react'
import classes from './Fetch.module.css'

export default function Fetch() {
    const [userInfo, setUserInfo] = useState({})
    const [repositories, setRepositories] = useState([])

    const userName = 'morshedul-antor'

    useEffect(() => {
        let controller = new AbortController()
        let dataFetch = async () => {
            let response = await fetch(`https://api.github.com/users/${userName}`)
            let data = await response.json()

            if (response.ok) {
                setUserInfo(data)
            }
        }
        try {
            dataFetch()
            controller.abort()
        } catch {
            setUserInfo({})
        }
    }, [userName])

    useEffect(() => {
        let controller = new AbortController()
        let dataFetch = async () => {
            let response = await fetch(`https://api.github.com/users/${userName}/repos`)
            let data = await response.json()

            if (response.ok) {
                setRepositories(data)
            }
        }
        try {
            dataFetch()
            controller.abort()
        } catch {
            setRepositories([])
        }
    }, [userName])

    return (
        <div className={classes.fetch}>
            <div>
                <img src={userInfo.avatar_url} alt="" />
                <h2>{userInfo.name}</h2>
                <span>{userInfo.company}</span>
            </div>
            <div>
                {repositories.map((repo) => (
                    <p>{repo.name}</p>
                ))}
            </div>
        </div>
    )
}
