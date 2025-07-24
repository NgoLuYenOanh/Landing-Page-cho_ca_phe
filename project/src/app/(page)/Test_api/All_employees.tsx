"use client";
// import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface IAll_employ {
  id: number;
  name: string;
  description: string;
  deleted: string;
}
interface IApiResponse {
  status: string;
  data: IAll_employ[];
}
export default function All() {
  // const [employees, setEmployees] = useState<IAll_employ[]>([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/api/public/brand")
  //     .then((res) => (data: IApiResponse) => setEmployees(data.data));
  // }, []);
  // axios.get("http://localhost:8081/api/public/brand")
  return (
    <>
      <div className="w-8/10 flex m-auto my-8 border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>description</TableHead>
              <TableHead>deleted </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map(({ id, name, description, deleted }) => (
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
    </>
  );
}
