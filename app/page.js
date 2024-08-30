import Charts from "@/components/Charts";
import Controls from "@/components/Controls";
import Greeting from "@/components/Greeting";
import { retailIcon, customerIcon, accountIcon } from "@/constants/images";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default async function Home() {
  let saleData = await fetch(API_HOST + "/sale");
  let data = await saleData.json();

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
    </div>
  );
}
