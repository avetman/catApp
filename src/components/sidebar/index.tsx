import {useGetCategoriesQuery} from "../../store/cats/catApi.ts";
import styles from './Sidebar.module.css'
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
	const {isError, isLoading, data: Categories} = useGetCategoriesQuery('');


	return (
		<div className={styles.SidebarContainer}>
			{Categories &&
				Categories.map(category => (
					<SidebarItem key={category.id} data={category}/>
				))
			}

		</div>
	);
};

export default Sidebar;
