import { memo } from 'react'
import UseGetSingliUser from './service/UseGetSingliUser'
import { useParams } from 'react-router-dom'
const User_detail = () => {
    const { id } = useParams()
    const { data } = UseGetSingliUser(id as string)

    console.log(data);

    return (
        <div>

        </div>
    )
}

export default memo(User_detail)
