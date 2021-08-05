import {createContext, useContext , useEffect, useState} from 'react' 

const UserData = createContext()

export const useUsers = () => useContext(UserData)

export const UsersProvider = ({children}) => {
    
    const [users,setUsers] = useState([])
    const [active,setActive] = useState('')
    
    useEffect(() => {
        const usersData = localStorage.getItem('users')
        const activeUser = localStorage.getItem('active')
        if(usersData){
            const user = JSON.parse(usersData)
            setUsers(user)
        }if(activeUser){
            setActive(JSON.parse(activeUser))
        }
    },[])
    
    useEffect(() => {
        localStorage.setItem('users' , JSON.stringify(users))
        localStorage.setItem('active' , JSON.stringify(active))
    })

    
    
    return(
        <>
            <UserData.Provider value={{users,setUsers,active,setActive}}>
                {children}
            </UserData.Provider>
        </>
    )
}