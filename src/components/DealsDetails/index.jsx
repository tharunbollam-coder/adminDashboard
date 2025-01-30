const orderData = [{
  productName: "Apple Watch",
  productImage: "path_to_image", // Replace with the actual path to the image
  location: "6096 Marjolaine Landing",
  dateTime: "12.09.2019 - 12.53 PM",
  piece: 423,
  amount: "$34,295",
  status: "Delivered",
},{
    productName: "Apple Watch",
    productImage: "path_to_image", // Replace with the actual path to the image
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },{
    productName: "Apple Watch",
    productImage: "path_to_image", // Replace with the actual path to the image
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },{
    productName: "Apple Watch",
    productImage: "path_to_image", // Replace with the actual path to the image
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },{
    productName: "Apple Watch",
    productImage: "path_to_image", // Replace with the actual path to the image
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },];

const DealsDetails = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md mt-5">
      <h1 className="text-black text-2xl font-bold mb-5">DealsDetails</h1>
      <div>
        <table className="min-w-full bg-white rounded-xl">
          <thead className="rounded-xl">
            <tr className="bg-[#F1F4F9] rounded-xl">
              <th className="py-2 px-4 ">Product Name</th>
              <th className="py-2 px-4 ">Location</th>
              <th className="py-2 px-4 ">Date - Time</th>
              <th className="py-2 px-4 ">Piece</th>
              <th className="py-2 px-4 ">Amount</th>
              <th className="py-2 px-4 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map(order => (
                 <tr className="shadow-md text-center" key={Math.random()}>
                 <td className="py-2 px-4">
                   {order.productName}
                 </td>
                 <td className="py-2 px-4">{order.location}</td>
                 <td className="py-2 px-4">{order.dateTime}</td>
                 <td className="py-2 px-4">{order.piece}</td>
                 <td className="py-2 px-4">{order.amount}</td>
                 <td className="py-2 px-4">
                   <span className="bg-green-500 text-white rounded-lg px-3 py-1 text-[11px]">
                     {order.status}
                   </span>
                 </td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsDetails;
