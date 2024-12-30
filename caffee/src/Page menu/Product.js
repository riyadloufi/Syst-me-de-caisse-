import Style from './Style.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemSelected } from '../reduce center/Actions'; // Import the action creator
import { Link } from 'react-router-dom';

function Product({ items, addItemSelected }) {
    const { categoryName } = useParams();
    const filteredItems = items.filter((item) => item.Catigorie === categoryName);

    return (
        <div className={Style.body_menu}>
            <div className={Style.menu}>
                <Link to={'/'}> <span>All catégorie</span></Link> <span>{`>${categoryName}`}</span>
                <ul className={Style.menu_list}>
                    {filteredItems.map((elm) => (
                        <li
                            key={elm.id}
                            className={Style.menu_element}
                            onClick={() => addItemSelected(elm)} // Dispatch the action here
                        >
                            <img className={Style.imgStyle} src={elm.img} alt={elm.name} /> <br />
                            <p>{elm.price}$</p>
                            <p>{elm.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
    addItemSelected: (item) => dispatch(addItemSelected(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
