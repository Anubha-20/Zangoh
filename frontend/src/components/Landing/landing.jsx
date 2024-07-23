
import Plant from '../../assets/Plant.png'
const Component = () => {
  return (

    <div className="flex justify-center py-8 bg-white">
      <div className="flex max-w-7xl">
        
        <div className="flex-1 px-4">
          <h1 className="text-6xl font-bold text-green-500">Greenwave</h1>
          <p className="mt-4 mb-8 text-lg">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis.
          </p>
          <p className="mb-4 text-lg">Lorem ipsum dolor sit amet consectetur.</p>
          <button className="bg-green-500 text-white p-3 rounded-md">
            Go Green
            <ArrowRightIcon className="ml-2" />
          </button>
        </div>
        <div className="flex flex-col items-center flex-1 px-4">
          <div className="p-2 ">
            <img
              alt="Plant"
              className="h-500 w-200 object-cover"
              src={Plant}
            />
          </div>
        </div>
        <div className="flex-1 px-4">
          <div className="relative">
            <h1 className="text-6xl font-bold text-green-500">Ecology</h1>
            {/* <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border-4 border-pink-500">
              <XIcon className="text-yellow-500 bg-white p-2" />
            </div> */}
          </div>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis.
          </p>
          
        </div>
      </div>
    </div>
  );
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

export default Component;
