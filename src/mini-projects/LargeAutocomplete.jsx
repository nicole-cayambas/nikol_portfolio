import { useState } from 'react'
import Autocomplete from '../components/fileds/Autocomplete'
import { useDummyData } from '../hooks/useDummyData'

const LargeAutocomplete = () => {
    const [options, setOptions] = useState([]);
    const { fetchData } = useDummyData();

    const handleAutocompleteChange = async (value) => {
        const res = await fetchData('/get-names', { search: value, limit: 20 });
        setOptions(res);
    }

    return (
        <div>
            <h1>Large Autocomplete</h1>
            <p>This autocomplete fetches from an endpoint that returns more than 10,000 records.</p>

            <div>
                <Autocomplete
                    options={options}
                    handleAutocompleteChange={handleAutocompleteChange}
                    placeholder="Search names..."
                />
            </div>
        </div>
    )
}

export default LargeAutocomplete