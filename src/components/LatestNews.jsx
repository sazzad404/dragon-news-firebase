import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-semibold">
          Bangladesh to deploy up to 100,000 soldiers for upcoming elections.
        </p>
        <p className="font-semibold">
          Bangladesh women's cricket team suffers dramatic collapse in ICC World Cup.
        </p>
        <p className="font-semibold">
          Massive fire disrupts operations at Dhaka's Hazrat Shahjalal International Airport.
        </p>
        <p className="font-semibold">
          Supreme Court to hear appeals on caretaker government abolition verdict today.
        </p>
        <p className="font-semibold">
          Bangladesh probes cause of devastating airport fire.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
