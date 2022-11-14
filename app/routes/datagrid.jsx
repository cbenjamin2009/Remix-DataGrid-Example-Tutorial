import { DataGrid } from "@mui/x-data-grid";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import sampleData  from "~/data/data"

export async function loader() {
    return json(sampleData);
}

export default function Index() {

    let data = useLoaderData();
    //row data contains a unique ID for each row and sample data with first name, last name, and email address
        // map through our loaded data and return the row fields
    let rows = data.map((user) => {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }
    })
    // column fields must match row fields, you can assign a header for each column and size if desired
    let columns = [
        {field: 'firstName', headerName: 'First Name', flex: 1},
        {field: 'lastName', headerName: 'Last Name', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
    ];

  return (
    <div>
        <header>
        <h1>DataGrid Component</h1>
        </header>

        <section id="DataGrid" style={{ height: 350, width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <DataGrid rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
        </section>

    </div>
  )
}
