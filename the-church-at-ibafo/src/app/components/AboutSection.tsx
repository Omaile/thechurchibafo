export default function ServiceTimes() {

  const services = [
    {
      title: "Sunday Worship",
      time: "9:00 AM"
    },

    {
      title: "Midweek Service",
      time: "Wednesday - 5:00 PM"
    },

    {
      title: "Prayer Meeting",
      time: "First Saturday Every Month"
    }
  ];


  return (

    <section className="py-16 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Service Times
      </h2>


      <div className="grid md:grid-cols-3 gap-6">

        {services.map((service)=>(
          
          <div
          key={service.title}
          className="shadow-lg rounded-lg p-8 text-center"
          >

            <h3 className="font-bold text-xl">
              {service.title}
            </h3>


            <p className="mt-3">
              {service.time}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}