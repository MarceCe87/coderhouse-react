import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
	return (
		<div className='text-title'>
			<ImageCarousel/>  
			<div >
				<h2>Deals of the week</h2>
				<p>Every week you will find new deals.</p>
			</div>
			<ItemListContainer category={"outlet"} />
		</div>
	);
};

export default Home;
