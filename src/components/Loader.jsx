import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='text-center mt-2 mb-2'>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>


  );
}

export default Loader;