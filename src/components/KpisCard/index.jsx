const KpisCard = (props) => {
  const { kpi } = props;
  const { ID, KPI, Value, Comparison, Icon, Arrow } = kpi;

  return (
    <div className="flex flex-col justify-between bg-white m-1 rounded-md p-5 col-span-12 md:col-span-4 lg:col-span-3">
      <div className="flex justify-between">
        <div>
          <p className="text-[#202224] mb-2">{KPI}</p>
          <p className="text-black text-xl font-bold">{Value}</p>
        </div>
        <div>
          <img className="size-10" src={Icon} alt={KPI} />
        </div>
      </div>
      <div className="flex align-center mt-2">
        {Arrow}
        <p className="flex align-center text-[14px] text-[#202224]">{Comparison}</p>
      </div>
    </div>
  );
};

export default KpisCard;
