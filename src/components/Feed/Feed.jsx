import '../Feed/Feed.css';
import AllReviews from '../AllReviews/AllReviews';

const Feed = () => {
    return (
        <main>
            <h1 className='feedTitle'>Game Feed</h1>
            {/* <select className="dropDown">
        {" "}
        <option value="" selected="disabled" disabled>
            date posted
          </option>
          <option value="incomplete">add another option</option>
      </select> */}
        <div className='feed'>
            <AllReviews />
        </div>
        </main>
        
    )
}

export default Feed