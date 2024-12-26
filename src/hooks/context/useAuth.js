import AuthContext from '@/contex/AuthContext'
import { useContext } from 'react'

export const useAuth = () => {//this will return Auth which has token and user
    return useContext(AuthContext)
}