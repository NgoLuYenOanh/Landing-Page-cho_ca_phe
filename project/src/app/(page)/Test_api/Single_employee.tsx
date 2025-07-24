"use client";
import { useEffect, useState } from "react";
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
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
interface IApiResponse {
  status: string;
  data: IAll_employ[];
}
export default function Single_employee() {
  const getApi = axios.get("https://dummy.restapiexample.com/api/v1/employees");
  const [employees, setEmployees] = useState<IAll_employ[]>([]);
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-8/10 flex m-auto my-8 border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map(
              ({ id, employee_name, employee_salary, employee_age }) => (
                <TableRow key={id} className="odd:bg-muted/50">
                  <TableCell className="pl-4">{id}</TableCell>
                  <TableCell className="font-medium">{employee_name}</TableCell>
                  <TableCell>{employee_salary}</TableCell>
                  <TableCell>{employee_age}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
