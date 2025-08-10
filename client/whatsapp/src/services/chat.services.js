import axios from 'axios'

export const showUserConversations = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/show/conversations`, {
            phoneNo: "918329446654"
        })
        const data = await response.data
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const showIndividualChat = async (conversationId, phoneNo) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/chat`, {
            conversationId: conversationId,
            phoneNo: phoneNo
        })
        console.log(conversationId, phoneNo)
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}