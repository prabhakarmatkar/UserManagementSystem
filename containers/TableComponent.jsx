import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const row = (x,i,header) =>
{
    return <TableRow key={i}>
        {
            header.map((y,k) => 
        {
            if(y.formatter !== undefined)
            {
                return <TableCell>
                {y.formatter(x)} </TableCell>
            }
            else
            {
                return <TableCell>
                {x[y.prop]} </TableCell>
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
                header.map((x,i) => 
                {
                    return <TableCell key={i}>{x.name}</TableCell>
                })
              }
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((x,i) => row(x,i,header))}
        </TableBody>
      </Table>
  );
}
