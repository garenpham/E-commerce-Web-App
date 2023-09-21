"use client";

import { DataTable } from "@/components/ui/data-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";

type Props = {
  data: OrderColumn[];
};

function OrderClient({ data }: Props) {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />

      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
}

export default OrderClient;
