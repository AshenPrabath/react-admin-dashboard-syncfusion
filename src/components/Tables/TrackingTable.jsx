import { ColumnDirective, ColumnsDirective, CommandColumn, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Search, Sort, Toolbar } from "@syncfusion/ej2-react-grids";
import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { trackingGrid } from "../../data/dummy";
import EditProductModal from "../EditProductModal";

const TrackingTable = ({ dataSource, pageSize = 10 }) => {
  const { dialogVisible, setDialogVisible } = useStateContext();
  const [currentProduct, setCurrentProduct] = useState(null);

  let grid;
  let rowData;

  const commands = [
    {
      buttonOption: {
        content: "Details",
        cssClass: "e-flat",
      },
    },
  ];

  const commandClick = (args) => {
    if (grid) {
      rowData = args.rowData;
      if (rowData) {
        setCurrentProduct(rowData.ProductID);
        console.log(rowData.ProductID);
        setDialogVisible(true);
        document.body.style.overflow = "hidden";
      }
    }
  };
  return (
    <div>
      <GridComponent
        id="gridcomp"
        dataSource={dataSource}
        allowPaging={true}
        allowSorting={true}
        toolbar={["Search"]}
        pageSettings={{ pageSize: pageSize }}
        commandClick={commandClick}
        ref={(g) => (grid = g)}
        width="auto"
      >
        <ColumnsDirective>
          {trackingGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective field="Actions" headerText="Actions" width="150" textAlign="Center" commands={commands} />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Search, Toolbar, CommandColumn]} />
      </GridComponent>
      {dialogVisible ? (
        <EditProductModal currentProduct={currentProduct} />
      ) : null}
    </div>
  );
};

export default TrackingTable;
