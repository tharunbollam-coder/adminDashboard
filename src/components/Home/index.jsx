import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import DealsDetails from "../DealsDetails";

import KpisCard from "../KpisCard";

const kpis = [
  {
    ID: 1,
    KPI: "Total User",
    Value: 40689,
    Comparison: "8.5% Up from yesterday",
    Icon: "https://res.cloudinary.com/dogmybs69/image/upload/v1738047373/cswswlsvgstzzleqv6js.svg",
    Arrow: <FaArrowTrendUp color="green" className="mt-1.5 mr-1" />,
  },
  {
    ID: 2,
    KPI: "Total Order",
    Value: 10293,
    Comparison: "1.3% Up from past week",
    Icon: "https://res.cloudinary.com/dogmybs69/image/upload/v1738047373/ghkazx6gofrwhz35nfss.svg",
    Arrow: <FaArrowTrendUp color="green" className="mt-1.5 mr-1" />,
  },
  {
    ID: 3,
    KPI: "Total Sales",
    Value: 89000,
    Comparison: "4.3% Down from yesterday",
    Icon: "https://res.cloudinary.com/dogmybs69/image/upload/v1738047373/oj7reqm3ouakwieqp9hp.svg",
    Arrow: <FaArrowTrendDown color="red" className="mt-1.5 mr-1" />,
  },
  {
    ID: 4,
    KPI: "Total Pending",
    Value: 2040,
    Comparison: "1.8% Up from yesterday",
    Icon: "https://res.cloudinary.com/dogmybs69/image/upload/v1738047373/z5p9ge1wyx88jnpvbgyo.svg",
    Arrow: <FaArrowTrendUp color="green" className="mt-1.5 mr-1" />,
  },
];

const Home = () => {
  const kpisView = () => {
    return (
      <ul className="grid grid-cols-12">
        {kpis.map((kpi) => (
          <KpisCard kpi={kpi} key={kpi.ID} />
        ))}
      </ul>
    );
  };

  return (
    <div className="p-5 h-[78vh] md:h-[90vh] overflow-auto">
      <h1 className="text-black text-2xl font-bold mb-5">Dashboard</h1>
      <div>{kpisView()}</div>
      <DealsDetails/>
    </div>
  );
};

export default Home;
