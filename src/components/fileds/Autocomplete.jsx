import { useRef, useState } from 'react'

const Autocomplete = ({ options, handleAutocompleteChange, ...props }) => {
    const [value, setValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const timeoutRef = useRef(null);
    const lastQuery = useRef(null);

    const handleChange = async (e) => {
        setValue(e.target.value);

        const inputValue = e.target.value.trim();

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(async () => {
            if (inputValue === lastQuery.current) return;

            lastQuery.current = inputValue;

            await handleAutocompleteChange(inputValue);

            setShowOptions(true);
        }, 300);
    }

    const handleBlur = (e) => {
        setShowOptions(false);
    }

    const handleFocus = async (e) => {
        handleAutocompleteChange(e.target.value.trim());
        setShowOptions(true);
    }

    const handleClickOption = (option) => {
        setValue(option);
        setShowOptions(false);
    }

    return (
        <div
            className={`relative py-[4px] px-[8px] ${showOptions ? 'border-[6px] border-(--orange)' : 'border-[4px] border-(--border-color)'} rounded-[12px] w-[340px] h-[40px]`}
        >
            <input
                type="text"
                placeholder="Search..."
                className="text-lg p-2 rounded-(--window-border-radius) w-full font-mono bg-transparent outline-none border-none"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            />

            {
                showOptions && (
                    <div
                        className='absolute top-[48px] left-0 w-full max-h-[300px] overflow-y-auto bg-(--desktop-background-color) border-(--border-color) border-[2px] rounded-b-[12px] z-[10] leading-[2]'
                    >
                        {
                            options && options.length > 0 ? (
                                <ul>
                                    {options.map((option, index) => (
                                        <li
                                            className='hover:bg-(--orange)'
                                            key={index}>
                                            <a
                                                type='button'
                                                onMouseDown={() => {
                                                    handleClickOption(option);
                                                }}
                                            >
                                                {option}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No options available</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Autocomplete