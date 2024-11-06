import toast from "react-hot-toast"

function UploadSubject() {
    return (
        <div>
            upload subject
            <button onClick={()=>toast.success("hello from toast")}>hello</button>
        </div>
    )
}

export default UploadSubject
