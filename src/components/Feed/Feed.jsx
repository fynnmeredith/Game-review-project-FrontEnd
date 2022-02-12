import '../Feed/Feed.css';
import AllReviews from '../AllReviews/AllReviews';

const Feed = () => {
    return (
        <main>
            <h1 className='feedTitle'>Game Feed</h1>
        <div className='feed'>
            <AllReviews />
        </div>
        
        </main>
        
        
    )
}

export default Feed