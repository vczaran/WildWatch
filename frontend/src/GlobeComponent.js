import { useData } from './data'; 
import { Globe } from './Globe';

function GlobeComponent() {
  const data = useData();

  if (!data) {
    return <pre className='text'>Loading..</pre>;
  }

  return (
    <>      
        <svg width='80vw' height='85vh' viewBox="40 0 900 500" className="d-block m-auto">
            <Globe data={data}/>
        </svg>
    </>
  );
};

export default GlobeComponent;