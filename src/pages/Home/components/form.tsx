import { useForm } from "react-hook-form";
import { UseCreateUser } from "../service/mutation/useCreateUser";
import { useQueryClient } from "@tanstack/react-query";
import useEditUser from "../../UserDetail/service/useEditUser";

export interface InputUserT {
    name: string;
}


const Form = ({ defaultValues, setisOpen }: {
    setisOpen?: React.Dispatch<React.SetStateAction<boolean>>
    defaultValues?: {
        name: string;
        id: number
    }
}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<InputUserT>({
        defaultValues: {
            name: defaultValues?.name,
        }
    })

    const { mutate } = UseCreateUser()

    const { mutate: EditUser } = useEditUser(defaultValues?.id)
    const client = useQueryClient()

    const submit = (data: InputUserT) => {
        if (!defaultValues) {
            mutate(data, {
                onSuccess: (res) => {
                    console.log("Success", res);
                    client.invalidateQueries({ queryKey: ['users'] })
                },
                onSettled: () => { reset() }
            });
        } else {
            EditUser(data, {
                onSuccess: () => {
                    client.invalidateQueries({ queryKey: ['users'] })
                    if (setisOpen) {
                        setisOpen(false)
                    }
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="flex justify-center items-center mt-10">
                <div className="flex flex-col gap-2 w-[250px]">
                    <input {...register('name', {
                        required: { value: true, message: "Majburioy" },
                        minLength: { value: 3, message: "Eng Kami 3 ta harfdan iborat bulishi kerak" }
                    })} type="text" className="bg-[#eee] py-2 px-2 outline-none" placeholder="name..." />
                    <p className="text-red-500">{errors.name?.message}</p>

                    <button type="submit" className="rounded-[5px] bg-[#eee]">{defaultValues ? "Edit" : "Send"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
