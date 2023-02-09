
export default function ReportTable({ locations }) {
  return (
    <table className='w-1/2 mx-auto my-4'>
      <thead>
        <tr>
          <th className='border border-gray-700'>No.</th>
          <th className='border border-gray-700'>Location</th>
          <th className='border border-gray-700'>Minimum Customer/Hour</th>
          <th className='border border-gray-700'>Maximum Customer/Hour</th>
          <th className='border border-gray-700'>Average Cookies/Sale</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((item, idx) => {
          return (
            <tr key={idx}>
              <td className='pl-2 border border-gray-700'>{item.id}</td>
              <td className='pl-2 border border-gray-700'>{item.name}</td>
              <td className='pl-2 border border-gray-700'>
                {item.minCustomers}
              </td>
              <td className='pl-2 border border-gray-700'>
                {item.maxCustomers}
              </td>
              <td className='pl-2 border border-gray-700'>{item.avgCookies}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
