import { Heading } from "../Heading/Heading";

export const Location = () => {
  return (
    <div className="flex flex-col">
      <Heading>Location</Heading>

      <div className="mb-8">
        <p className="mb-2">Panama Dining Room</p>

        <a
          className="text-blue-400 underline hover:no-underline"
          href="https://maps.app.goo.gl/eG33jP9uUFF9GFV67"
          target="_blank"
        >
          level 2/231 Smith St, Fitzroy VIC 3065
        </a>
      </div>

      <div className="">
        <h4 className="text-lg font-semibold mb-4">Parking</h4>

        <p className="mb-2">Parking is available at the following locations:</p>

        <ul className="list-disc flex flex-col gap-y-2 pl-6">
          <li>Moor St,</li>
          <li>Stanley St,</li>
          <li>Oxford St,</li>
          <li>Little Oxford St,</li>
          <li>Cambridge Street.</li>
          <li>Gore and George street behind Panama.</li>
        </ul>
      </div>
    </div>
  );
};
