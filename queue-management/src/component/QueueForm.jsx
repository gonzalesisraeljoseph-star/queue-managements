import { useState } from "react"

export default function QueueForm({onAdd}) {
    const [name, setName] = useState('')
    const [service, setService] = useState('')
    return(
        <h1>Queue Form</h1>
    )
}