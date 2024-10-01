export default function ProductHeader(props) {
  return (
    <div className="relative text-center">
      <img src={props.img} alt={props.src} className="h-auto w-full object-cover shadow-lg" />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-10 flex flex-col items-center justify-start text-white drop-shadow-lg">
        <h2 className="text-4xl font-bold">{props.title}</h2>
        <h4 className="text-2xl mt-2">T{props.subtitle}</h4>
      </div>
    </div>
  );
}
