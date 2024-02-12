# @daddyjanno/simple-table-comp

This package is a react component to render a table using custom data.

The table can be sorted, filtered (using a search input), paginated and the number of row can be change.

## Installation

```
npm install @daddyjanno/simple-table-comp

or

yarn add @daddyjanno/simple-table-comp
```

## Usage

```
import { Table } from "@daddyjanno/simple-table-comp";

const App = () => {
    const data = [
		{ firstName: "John", lastName: "Doe", city: "New York", dateOfBirth: "1980-01-02" },
		{ firstName: "Jane", lastName: "Doe", city: "Los Angeles", dateOfBirth: "1985-02-14" },
		{ firstName: "John", lastName: "Smith", city: "Chicago", dateOfBirth: "1970-11-22" },
		{ firstName: "Jane", lastName: "Smith", city: "Houston", dateOfBirth: "1975-09-30" },
	];

	const columns: Column[] = [
        { label: 'First Name', accessor: 'firstName', sortable: true },
        { label: 'Last Name', accessor: 'lastName', sortable: true },
        { label: 'Date of Birth', accessor: 'dateOfBirth', sortable: true },
        { label: 'City', accessor: 'city', sortable: true },
    ]


	return (
        <main>
            <Table
                caption={'Current Employees'}
                data={data}
                columns={columns}
                showEntries={true}
                showSearch={true}
            />
        </main>
    )
};

```

### Columns array

Used to render the head columns labels:

-   label: the name of the column you want to display in the table header
-   accessor: the reference in the data array
-   sortable: boolean, if the column is sortable or not

### Data array

This array contains the data which will be displayed on the table, every object will be a row.

## Props list

| Name        | Type    | Description                                                                        |
| ----------- | ------- | ---------------------------------------------------------------------------------- |
| caption     | string  | The title of the table                                                             |
| data        | arrayOf | The data you want to display                                                       |
| columns     | arrayOf | The columns to be displayed in the table                                           |
| showEntries | boolean | If you want to display a show entries select menu ([10, 25, 100]), with pagination |
| showSearch  | boolean | If you want to display a search input to filter data                               |

## Author

**Jean-Noël Drugmand** : [**GitHub**](https://github.com/daddyjanno/)
