"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAll } from "@/services/BrandService";
export default function All_brand() {
  const [listBrand, setListBrand] = useState([]);
  const getBrand = async () => {
    let res = await fetchAll();
    if (res && res.data) {
      setListBrand(res.data);
    }
  };
  useEffect(() => {
    getBrand();
  }, []);
  return (
    <div className="w-8/10 flex m-auto my-8 border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Deleted </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listBrand.map(({ id, name, description, deleted }) => (
            <TableRow key={id} className="odd:bg-muted/50">
              <TableCell className="pl-4">{id}</TableCell>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{deleted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
