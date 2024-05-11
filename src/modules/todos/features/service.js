import { instance } from "../../../common/instance"

export const getAllTodos = async () => {
    return await instance.get("posts")
}