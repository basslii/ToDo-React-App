import './Button.css'

const SearchButton = (props: any) => {

    const {onSearch} = props;

    return (
        <div className="btn-container">
            <button className='btn btn-secondary margin' onClick={onSearch}>Search</button>
        </div>
    )
}

export default SearchButton;