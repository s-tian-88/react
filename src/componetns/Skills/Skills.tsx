import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../../redux/actions";


const Skils = () => {
    const {items, loading, error, search} = useSelector(state => state.skills);
    const dispatch = useDispatch()

    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault();
        const { value } = evt.target;
        dispatch(changeSearchField(value))
    }

    return (
        <div className="skills-container">
            <input type="search" value={search} onChange={handleSearch} />
            {!loading ? <div>Type something to search</div> : loading && <div>searching...</div>}
            {error ? <div>Error occured</div> : <ul>{items.map(
                (o: any) => <li key={o.id}>{o.name}</li>
            )}</ul>}
        </div>
    );
};

export { Skils };
