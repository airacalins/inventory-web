import { useState } from "react";
import { Badge, Table } from "react-bootstrap";
import HorizontalSpace from "../../app/componets/Spacer/HorizontalSpace";
import Header5 from "../../app/componets/Text/Header5";
import Paragraph from "../../app/componets/Text/Paragraph";
import { IProduct } from "../../app/interfaces/IProduct";

function ProductTable() {
  const [products, setProducts] = useState<IProduct[]>(
    [
      { id: 'aaa', imageUrl: 'data:image/jpeg;base64,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', name: 'IPhone 14 Pro Max', stocks: 20, lowStockLevel: 200, price: 400, cost: 300 },
      { id: 'bbb', imageUrl: '', name: '', stocks: 30, lowStockLevel: 300, price: 500, cost: 320 },
      { id: 'ccc', imageUrl: '', name: '', stocks: 40, lowStockLevel: 400, price: 300, cost: 30 },
      { id: 'ddd', imageUrl: '', name: '', stocks: 50, lowStockLevel: 500, price: 4033, cost: 50 },
      { id: 'eee', imageUrl: '', name: '', stocks: 60, lowStockLevel: 600, price: 430, cost: 370 },
    ]
  );

  const [tableHeaders, setTableHeaders] = useState(
    [
      "Products",
      "Price",
      "Cost",
      "Stocks",
      "Status",
    ]
  )

  return (
    <Table responsive="sm">
      <thead>
        <tr>
          {
            tableHeaders.map((tableHeader) =>
              <th>
                <Header5 text={tableHeader} />
              </th>
            )
          }
        </tr>
      </thead>

      <tbody>
        {
          products.map((product) =>
            <tr>
              <td className='d-flex align-items-center'>
                <img style={{ width: "50px", height: "50px" }} src={product.imageUrl} alt="" />
                <HorizontalSpace width={3} />
                <Paragraph text={product.name} />
              </td>
              <td>
                <Paragraph text={product.price.toString()} />
              </td>
              <td>
                <Paragraph text={product.cost.toString()} />
              </td>
              <td>
                <Paragraph text={product.price.toString()} />
              </td>
              <td>
                <Badge>Low Stock Level</Badge>
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}


export default ProductTable;
