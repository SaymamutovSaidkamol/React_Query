import { Link } from "react-router-dom"
import type { UserT } from "../service/query/useGetUser"
import { useState } from "react"
import Modal from "../../../components/Modal/Modal"
import Form from "./form"
import useDeleteUser from "../../UserDetail/service/useDeleteUser"
import { useQueryClient } from "@tanstack/react-query"


const User = ({ name, id, age, phone, profession }: UserT) => {

    const [state, setState] = useState(false)
    const handleChange = (id: number) => {
        console.log(id);
        setState(true)
    }

    const { mutate } = useDeleteUser()
    const client = useQueryClient()
    const handleDelte = (id: number | any) => {
        console.log(id);
        mutate(id, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['users'] })
            }
        })
    }

    return (
        <div className="w-[250px] p-3 bg-[#eee] rounded-2xl">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
            </div>
            <div>
                <Link to={`user/${id}`}><h1>{name}</h1></Link>
                <p>{age}</p>,
                <p>{phone}</p>
                <p>{profession}</p>
                <div className="flex justify-between px-2 mt-5">
                    <button className="cursor-pointer px-2 rounded-[4px] bg-green-500 text-white" onClick={() => handleChange(id)}>Edit</button>
                    <button className="cursor-pointer px-2 rounded-[4px] bg-red-500 text-white" onClick={() => handleDelte(id)}>Delete</button>
                    <Modal isOpen={state} setisOpen={setState} >
                        <Form setisOpen={setState} defaultValues={{ name, phone, profession, age, id }} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default User
