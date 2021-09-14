export default function Table(props){
    if (props.sales_hourly.length === 0) { 

        return (<h2 className="mt-8 mb-8 ml-auto mr-auto text-center w-5/6">No Cookie Stands Available</h2>)

    }


    let subtotals_hours = props.subTotals(props.branch_hours, props.sales_hourly)


    return (
      <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">

      <table className="ml-auto mr-auto w-5/6  text-center self-center">


        <thead className="bg-green-600">
          <tr>
            <th className="border border-collapse border-black table-auto">Location</th>
            {props.branch_hours.map(hour => (
            <th className="border border-collapse border-black table-auto">{hour}</th>
            ))}
            <th className="border border-collapse border-black table-auto">Totals</th>
          </tr>
        </thead>


        <tbody>
          {props.sales_hourly.map(branch => (
            <tr className="odd:bg-green-500 even:bg-green-300">
              <td className="border border-collapse border-black table-auto">{branch.location}</td>
              {branch.cookie_data.map(cookies => (<td className="border border-collapse border-black table-auto">{cookies}</td>))}
              <td className="border border-collapse border-black table-auto">{props.totalCookies(branch.cookie_data)}</td>
            </tr>
          ))}
        </tbody>



        <tfoot className="bg-green-600">
          <th className="border border-collapse border-black table-auto">Totals</th>
          {subtotals_hours.map(subtotal => (<th className="border border-collapse border-black table-auto">{subtotal}</th>))}
          <th className="border border-collapse border-black table-auto">{props.totalCookies(subtotals_hours)}</th>
        </tfoot>


      </table>
      </div>
    )
}