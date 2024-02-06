export const CreateSuccess = (successStatus, SuccessMessage, data)=>{
    const SuccessObject = {
     status : successStatus,
     message : SuccessMessage,
     data : data
    }
    return SuccessObject
}