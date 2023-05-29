import {useDispatch} from "react-redux";
import {getCategory} from "../../store/cats/catSlice.ts";
import styles from './Sidebar.module.css'
const SidebarItem = ({data}) => {
	const dispatch = useDispatch()
	const handleCategoryClick = (e) => {

		dispatch(getCategory({
			name: data.name,
			id: data.id
		}))
	}
	return (
		<div className="sidebarItemContainer">
			<button onClick={handleCategoryClick} className={styles.sidebarItem}>{data.name}</button>
		</div>
	);
};

export default SidebarItem;
