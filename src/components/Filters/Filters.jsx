
import React from 'react'
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { deselectFilter, setFilter } from 'store/reducer';


export const Filters = () => {


    const options = [
        { value: 'AtoZ', label: 'A to Z' },
        { value: 'ZtoA', label: 'Z to A' },
        { value: 'lessThen10', label: 'Less than 10$' },
        { value: 'greaterThan10', label: 'Greater than 10$' },
        { value: 'popular', label: 'Popular' },
        { value: 'notPopular', label: 'Not popular' },
        { value: 'showAll', label: 'Show all' },
    ];
    const defaultOption = options[0];
    const dispatch = useDispatch();


    const handleFilterChange = (selectedOption) => {

        if (!selectedOption) {
            dispatch(deselectFilter());
        } else {
            dispatch(setFilter(selectedOption.value));

        }
    };

    return (
        <div>
            <p>Filters</p>

            <Select className="w-56 h-12 " options={options} defaultValue={defaultOption} onChange={handleFilterChange} styles={{
                control: (provided, state) => ({
                    ...provided,
                    cursor: 'default',
                    backgroundColor: '#103931',
                    color: 'white',
                    borderRadius: '14px',
                    border: 'none',
                    boxShadow: state.isFocused ? '0 0 0 2px rgba(0,0,0,0.2)' : 'none', // Убирает тень при фокусировке
                    '&:hover': {
                        border: 'none' // Убирает границу при наведении
                    }
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'white'
                }),
                input: (provided) => ({
                    ...provided,
                    display: 'none'
                }),
                indicatorSeparator: (provided) => ({
                    ...provided,
                    display: 'none'
                }),

                dropdownIndicator: (provided) => ({
                    ...provided,
                    color: 'white', '&:hover': {
                        color: 'white' // Убирает границу при наведении
                    }
                }),
                menu: (provided) => ({
                    ...provided,

                    zIndex: 9999
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                    color: state.isFocused ? 'black' : 'rgba(0,0,0,0.5)'
                })
            }} />

        </div>
    )
}
export default Filters