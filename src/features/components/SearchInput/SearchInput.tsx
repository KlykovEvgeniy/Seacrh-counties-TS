import { ChangeEvent, FC, useCallback, useState } from "react";

interface SearchInputProps {
    fn: (name: string) => void
}

export const SearchInput: FC<SearchInputProps> = function ({fn}) {
    const [name, setName] = useState<string>('')
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        fn(event.target.value)
        setName(event.target.value);
    }, [name])
    return <input onChange={handleChange} style={{marginBottom: '15px'}} type="text" value={name} />
}