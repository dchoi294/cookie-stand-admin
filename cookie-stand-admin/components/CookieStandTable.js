import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);

  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 p-2 mx-auto my-4 bg-green-300 font-serif">
      <fieldset className="">
        <legend className="text-center text-4xl py-3">Create Cookie Stand</legend>
        <section className="flex py-2">
          <label htmlFor="location" className="pl-2">Location:</label>
          <input placeholder='location' name='location' />
        </section>
        <section className="flex justify-between py-2">
          <div>
            <label htmlFor="minimum" className="block px-2 text-center">Minimum Sale per Hour</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='minimum' name='minimum' />
          </div>
          <div>
            <label htmlFor="maximum" className="block px-2 text-center">Maximum Sale per Hour</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='maximum' name='maximum' />
          </div>
          <div>
            <label htmlFor="average" className="block px-2 text-center">Average Cookies per Sale</label>
            <input className="px-3 text-center border border-gray-500 shadow-md rounded-md" placeholder='average' name='average' />
          </div>
          <button className="px-9 py-4 bg-green-500 text-black text-xl rounded-lg hover:bg-red-500 hover:rounded-2xl transition-all duration-200 cursor-pointer">Create</button>
        </section>
      </fieldset>
    </form>
  );
}
