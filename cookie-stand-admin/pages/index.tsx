// import { replies } from '/data';
import { useState } from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CreateForm from '../components/CreateForm';

export default function Home() {
  const [locations, setLocations] = useState([]);

  function questionAskedHandler(e) {
    e.preventDefault();
    const location = {
      name: e.target.locationName.value,
      minCustomers: e.target.minCustomers.value,
      maxCustomers: e.target.maxCustomers.value,
      avgCookies: e.target.avgCookies.value,
      id: locations.length,
    };
    setLocations([...locations, location]);
  }

  return (
    <>
      <Head />

      <Header />

      <main className=''>
        <CreateForm questionAskedHandler={questionAskedHandler} />
        <ReportTable locations={locations} />
      </main>

      <Footer />
    </>
  );
}
