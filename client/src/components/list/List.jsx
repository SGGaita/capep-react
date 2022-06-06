import React from 'react';
import "./list.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const row = [{
    id: 11232445,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg",
    customer: "James Brown",
    date: "2 April",
    amount: 550,
    method: "Cash On Deliver(COD)",
    status: "Pending"
  },
  {
    id: 23443326,
    product: "X-BOX One",
    img: "https://m.media-amazon.com/images/I/713ZMW4pG-L._SX385_.jpg",
    customer: "Julie Vet",
    date: "7 April",
    amount: 760,
    method: "VISA",
    status: "Approved"
  },
  {
    id: 24331267,
    product: "HoMedics White Noise Sound Machine",
    img: "https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SL1500_.jpg",
    customer: "Steve Gaita",
    date: "12 March",
    amount: 21.99,
    method: "Cash On Deliver(COD)",
    status: "Approved"
  },
  {
    id: 22456787,
    product: "Fitpolo Smart Watch",
    img: "https://m.media-amazon.com/images/I/61IlHKr2ZQL._AC_SX679_.jpg",
    customer: "Derek Johns",
    date: "17 March",
    amount: 39,
    method: "Online Payment",
    status: "Approved"
  },
  {
    id: 25908127,
    product: "Redragon S101 Wired Gaming Keyboard and Mouse",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
    customer: "Kelvin Blanc",
    date: "23 March",
    amount: 35.98,
    method: "Online Payment",
    status: "Pending"
  }]
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { List }