import { useId } from 'react';
import { box, text, input } from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const searchBoxId = useId();
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    return (
        <div className={box}>
            <label htmlFor={searchBoxId} className={text}>
                Find contacts by name
            </label>
            <input
                className={input}
                type="text"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
                id={searchBoxId}
            />
        </div>
    );
}
