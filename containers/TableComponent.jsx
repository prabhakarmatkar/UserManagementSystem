import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const row = (d,i,header) =>
{
    return <TableRow key={i}>
        {
            header.map((h,k) => 
        {
            if(h.formatter !== undefined)
            {
                return <TableCell>
                {h.formatter(d)} </TableCell>
            }
            else
            {
                return <TableCell>
                {d[h.prop]} </TableCell>
            }
        })
        }
        </TableRow>;
}

export default ({data,header}) => {

  return (
      <Table >
        <TableHead>
          <TableRow>
              {
                header.map((h,i) => 
                {
                    return <TableCell key={i}>{h.name}</TableCell>
                })
              }
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((d,i) => row(d,i,header))}
        </TableBody>
      </Table>
  );
}
