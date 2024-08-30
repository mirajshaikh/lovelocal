import BarGraph from "@/components/BarGraph";
import Charts from "@/components/Charts";
import Controls from "@/components/Controls";
import Greeting from "@/components/Greeting";
import OrderValue from "@/components/OrderValue";
import { retailIcon, customerIcon, accountIcon } from "@/constants/images";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default async function Home() {
  const saleReq = await fetch(API_HOST + "/sale");
  const data = await saleReq.json();
  const revenueReq = await fetch(API_HOST + "/revenue");
  const revenueData = await revenueReq.json();
  const orderReq = await fetch(API_HOST + "/order-value");
  const orderData = await orderReq.json();
  const graphData = orderData?.averageOrderValueInfo?.graphData?.current?.map(
    (value, index) => ({
      name:
        index == 0
          ? orderData?.averageOrderValueInfo?.fromDate
          : index ==
            orderData?.averageOrderValueInfo?.graphData?.current?.length - 1
          ? orderData?.averageOrderValueInfo?.toDate
          : "",
      current: value,
      previous: orderData?.averageOrderValueInfo?.graphData?.previous[index],
    })
  );
  const formattedOrderData = {
    ...orderData.averageOrderValueInfo,
    graphData,
  };

  return (
    <div className="">
      <Greeting data={data.userDetails} />
      <Controls />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Charts data={data?.retailerInfo} title="Retailer" icon={retailIcon} />
        <Charts
          data={data?.customerInfo}
          title="Customers"
          icon={customerIcon}
        />
        <Charts
          data={data?.keyAccountInfo}
          title="Key Accounts"
          icon={accountIcon}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-5">
        <BarGraph data={revenueData?.directIndirectInfo} />
        <OrderValue data={formattedOrderData} />
      </div>
    </div>
  );
}
