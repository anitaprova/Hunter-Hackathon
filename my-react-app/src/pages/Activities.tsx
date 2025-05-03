


import '../LightBulb.css';
import LightBulb from '../components/LightBulb';

const Activities: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink">
      <div className="bg-white flex flex-col w-[90vw] h-[80vh] max-w-[900px] max-h-[600px] rounded-3xl shadow-light relative">
        <LightBulb />
      </div>
    </div>
  );
};

export default Activities;
