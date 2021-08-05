import {useUsers} from './UsersProvider'

export const LastLogin = () => {
    const {users,active} = useUsers()
    const genLastLogin = () => {
        const user = users.find(user => user.username === active)
        
        const successLoginMessage = user?.lastSuccessfulLogin? <small>Last Successful Login: <span style={{color:'green'}}>{user.lastSuccessfulLogin}</span></small> :
        <small>No Last SuccessFul Login Data</small>
        
        const unsuccessfulLoginMessage = user?.lastUnSuccessfulLogin? <small>Last UnSuccessful Login: <span style={{color:'red'}}>{user.lastUnSuccessfulLogin}</span></small> :
        <small>No Last UnSuccessFul Login Data</small>

        

        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start' , paddingLeft:'3rem'}}>
            {successLoginMessage}
            {unsuccessfulLoginMessage}
            </div>
        )
    }
    
    return(
        <div style={{paddingBottom:'2rem', paddingTop:'1rem'}}>
          {genLastLogin()}  
        </div>
    )
}