import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"
import { Box } from "@mui/system"
import { visuallyHidden } from '@mui/utils'
const  EnhancedTableHead = (props) => {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort
    } = props
    const createSortHandler = property => event => {
      onRequestSort(event, property)
    }

    const headCells = [
        {
          id: 'title_alatberat',
          numeric: false,
          disablePadding: true,
          label: 'Nama Alat Berat'
        },

        {
            id: '',
            numeric: false,
            disablePadding: false,
            label: 'Deskripsi'
          }

      ]

    return (
      <TableHead>
        <TableRow>
          <TableCell padding='checkbox'></TableCell>
     
          {headCells.map(headCell => (
            <TableCell
            style={{fontSize:'18px',fontWeight:'800',color:'#6B7280',fontFamily:`'inter',sans-serif`}}
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  export default EnhancedTableHead