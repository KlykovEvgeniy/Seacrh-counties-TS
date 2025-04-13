import { ChangeEvent, FC, useState } from "react"

interface FilterProps {
    fn: (name: string) => void
}

export const Filter: FC<FilterProps> = function ({ fn }) {
    const [name, setName] = useState<string>('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        fn(event.target.value)
        setName(event.target.value);
    }
    return (
        <input type="text" value={name} onChange={handleChange}/>
    )
}