export default function GeneralOverview(props) {
  return (
    <div className="flex flex-col md:flex-row p-6  ">
      <div className="md:w-1/2 p-8 bg-white  shadow-md space-y-6">
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center space-x-2">
            {props.icon}
            <span>{props.title}</span>
          </h3>
          <p className="text-gray-700 leading-loose">{props.description}</p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center bg-white">
        <img src={props.img} alt={props.alt} className="w-full h-auto shadow-md" />
      </div>
    </div>
  );
}
