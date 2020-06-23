import { Member } from 'generated/graphql'

export function getStoredUser(): Member {
    const stored = window.localStorage.getItem('user')
    const parsed = JSON.parse(stored)
    return parsed
}

export function storeUser(userData: Member) {
    const value = JSON.stringify(userData)
    window.localStorage.setItem('user', value)
}

export function clearStoredUser() {
    window.localStorage.removeItem('user')
}
