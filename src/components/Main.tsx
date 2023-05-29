import {useState, useEffect} from 'react';
import {useGetImagesByCategoryQuery, useLazyGetMoreImagesQuery} from "../store/cats/catApi.ts";
import {useDispatch, useSelector} from "react-redux";
import {getCategory,selectCategory} from "../store/cats/catSlice.ts";

const Main = () => {
	const dispatch = useDispatch();
	const Category = useSelector(selectCategory);

	const [allImages, setAllImages] = useState();
	const [nextPage, setNextPage] = useState(1)
	const {isLoading: isInitialImagesLoading, data: initialImages, isError: isInitialImagesError} = useGetImagesByCategoryQuery({
		categoryIds: Category.id
	})
	const [loadMoreImages, {isLoading: isMoreImagesLoading, isError: isMoreImagesError, data: moreImages}] = useLazyGetMoreImagesQuery()
	const handleLoadMoreImages = () => {
		setNextPage(nextPage+1)
		loadMoreImages({
			page: nextPage,
			categoryIds: Category.id
		})
	}

	useEffect(() => {

		if (initialImages) {
			setAllImages(initialImages);
		}
	}, [initialImages]);

	useEffect(() => {
		if(moreImages) {
			setAllImages(prevImages => [...prevImages, ...moreImages])
		}
	},[moreImages])


	return (
		<div className="Main">
			<h2 className="title">{Category.name}</h2>
			<div className="cards">
				{allImages &&
					allImages.map(image => (
						<div key={image.id} className="card">
							<img alt={image.id} src={image.url} className="catImage"/>
						</div>
					))
				}

			</div>
			<div className="loadMoreContainer">
				<button onClick={handleLoadMoreImages} className="loadMoreButton">Load more... {nextPage}</button>
			</div>
		</div>
	);
};

export default Main;
