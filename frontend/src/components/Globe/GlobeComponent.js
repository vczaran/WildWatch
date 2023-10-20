import { GlobeData } from './data'; 
import { Globe } from './Globe';

function GlobeComponent() {
  const data = GlobeData();

  if (!data) {
    return <pre className='text'>Loading..</pre>;
  }

  return (
    <>      
        <svg width='80vw' height='100vh' viewBox="40 0 900 500" className="d-block m-auto">
            <Globe data={data}/>
        </svg>
    </>
  );
};

export default GlobeComponent;