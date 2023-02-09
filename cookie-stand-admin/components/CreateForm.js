export default function CreateForm({ questionAskedHandler }) {
  return (
    <form
      className='w-1/2 p-2 mx-auto my-4 bg-green-400'
      onSubmit={questionAskedHandler}
    >
      <h2 className='text-4xl text-center'>Create Cookie Stand</h2>
      <div className='flex justify-around p-3 my-4'>
        <label htmlFor='locationName' className='p-1'>
          Location
        </label>
        <input
          name='locationName'
          className='flex-auto pl-1'
          id='locationName'
        />
      </div>
      <div className='flex justify-between'>
        <div>
          <label htmlFor='minCustomers' className='block p-1'>
            Min Customers
          </label>
          <input name='minCustomers' className='block p-1' id='minCustomers' />
        </div>
        <div>
          <label htmlFor='maxCustomers' className='block p-1'>
            Max Customers
          </label>
          <input name='maxCustomers' className='block p-1' id='maxCustomers' />
        </div>
        <div>
          <label htmlFor='avgCookies' className='block p-1'>
            Average Cookies
          </label>
          <input name='avgCookies' className='block p-1' id='avgCookies' />
        </div>
        <button className='px-12 py-1 mx-2 bg-green-500 text-gray-50 hover:bg-red-500'>
          Create
        </button>
      </div>
    </form>
  );
}
