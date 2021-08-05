import {useLoading} from './LoadingProvider'
import {ClimbingBoxLoader} from 'react-spinners'

export const Loader = () => {
    const {isLoading} = useLoading()
    return(
        <>
            {isLoading ? <ClimbingBoxLoader /> : <></>}
        </>
    )
}