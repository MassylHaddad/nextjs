import { useRouter } from "next/router"

const Button = ({ children }: any) => {
    const { push } = useRouter()
    return (
        <button id="resume-button" onClick={() => (push("/resume"))}>{children}</button>
    )
}

export default Button